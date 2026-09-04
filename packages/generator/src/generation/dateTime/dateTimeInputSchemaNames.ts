import is from "@sindresorhus/is";
import { OpenAPIV3 } from "openapi-types";
import { containsDateTimeInput } from "./dateTimeInput.js";

const schemaRefPrefix = "#/components/schemas/";

const collectSchemaRefs = (something: unknown, into: Set<string>): void => {
  if (!is.nonEmptyObject(something)) {
    return;
  }

  if (is.array(something)) {
    something.forEach((item) => collectSchemaRefs(item, into));
    return;
  }

  for (const [key, value] of Object.entries(something)) {
    if (key === "$ref") {
      if (typeof value === "string" && value.startsWith(schemaRefPrefix)) {
        into.add(value.slice(schemaRefPrefix.length));
      }
      continue;
    }

    collectSchemaRefs(value, into);
  }
};

const refsOf = (something: unknown): Set<string> => {
  const refs = new Set<string>();
  collectSchemaRefs(something, refs);
  return refs;
};

const httpMethods = Object.values(OpenAPIV3.HttpMethods) as string[];

/**
 * Collects every part of the document that ends up in _request_ position, i.e.
 * request bodies and request parameters.
 */
const collectRequestSchemaRoots = (doc: OpenAPIV3.Document): Set<string> => {
  const roots = new Set<string>();

  for (const pathItem of Object.values(doc.paths ?? {})) {
    if (!pathItem) {
      continue;
    }

    collectSchemaRefs(pathItem.parameters, roots);

    for (const [key, operation] of Object.entries(pathItem)) {
      if (!httpMethods.includes(key) || !is.nonEmptyObject(operation)) {
        continue;
      }

      const op = operation as OpenAPIV3.OperationObject;
      collectSchemaRefs(op.requestBody, roots);
      collectSchemaRefs(op.parameters, roots);
    }
  }

  collectSchemaRefs(doc.components?.requestBodies, roots);
  collectSchemaRefs(doc.components?.parameters, roots);

  return roots;
};

/**
 * Determines for which `components.schemas` entries a widened _request variant_
 * has to be generated.
 *
 * A variant is needed when the schema is reachable from a request body or a
 * request parameter **and** it contains a `format: date-time` string, either
 * directly or through one of its `$ref`s.
 *
 * Restricting this to request-reachable schemas keeps the generated output
 * small; schemas that are only ever used in responses stay untouched, which is
 * what keeps this change backwards compatible.
 */
export const dateTimeInputSchemaNames = (
  doc: OpenAPIV3.Document,
): ReadonlySet<string> => {
  const schemas = doc.components?.schemas ?? {};
  const refs = new Map<string, Set<string>>();

  for (const [name, schema] of Object.entries(schemas)) {
    refs.set(name, refsOf(schema));
  }

  // 1. schemas containing a date-time themselves
  const containsDateTime = new Set<string>(
    Object.entries(schemas)
      .filter(([, schema]) => containsDateTimeInput(schema))
      .map(([name]) => name),
  );

  // 2. …plus everything transitively referencing one of them
  for (let changed = true; changed; ) {
    changed = false;

    for (const [name, schemaRefs] of refs) {
      if (containsDateTime.has(name)) {
        continue;
      }

      for (const ref of schemaRefs) {
        if (containsDateTime.has(ref)) {
          containsDateTime.add(name);
          changed = true;
          break;
        }
      }
    }
  }

  // 3. …intersected with the schemas reachable from request position
  const reachable = new Set<string>();
  const queue = [...collectRequestSchemaRoots(doc)];

  while (queue.length > 0) {
    const name = queue.pop() as string;

    if (reachable.has(name)) {
      continue;
    }

    reachable.add(name);
    queue.push(...(refs.get(name) ?? []));
  }

  return new Set([...containsDateTime].filter((name) => reachable.has(name)));
};
