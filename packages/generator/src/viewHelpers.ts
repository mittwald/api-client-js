import { schemaToTypeTS } from "@mittwald/awesome-node-utils/mapping/schemaToTs.js";
import { Schema } from "@mittwald/awesome-node-utils/types/schema.js";
import {
  camelCase,
  pascalCase,
} from "@mittwald/awesome-node-utils/text/formatter.js";
import { Operation } from "./NormalizedSpec.js";
import is from "@sindresorhus/is";

const namespaceNameSeparator = "_";

export interface ViewHelpersOptions {
  optionalHeaders?: string[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const viewHelpersFactory = (
  namespace: string,
  opts: ViewHelpersOptions = {},
) => {
  const { optionalHeaders = [] } = opts;

  function transformNamespaceName(name: string): string {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, namespaceNameSeparator);
    const pascalCased = snakedName
      .split(namespaceNameSeparator)
      .map(pascalCase)
      .filter((s) => s.trim() !== "")
      .join(namespaceNameSeparator);

    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
  }

  function replaceRefsTypeNames(rootNamespace: string, ts: string): string {
    return ts.replace(/"(#.+?)"/gm, (_, match) => {
      return `${rootNamespace}.${match
        .substring(2)
        .split("/")
        .map(transformNamespaceName)
        .join(".")}`;
    });
  }

  function replaceRefWithConst(schema: unknown): unknown {
    if (is.nonEmptyObject(schema)) {
      if ("$ref" in schema) {
        return {
          const: schema.$ref,
        };
      } else {
        for (const [key, value] of Object.entries(schema)) {
          schema[key] = replaceRefWithConst(value);
        }
      }
    }
    return schema;
  }

  function makeOptionalHeader(schema: Schema): Schema {
    if (schema.required === undefined) {
      return schema;
    }

    return {
      ...schema,
      required: Array.isArray(schema.required)
        ? schema.required.filter((h: string) => !optionalHeaders.includes(h))
        : schema.required,
    };
  }

  function formatTs(namespace: string, schema: Schema): string {
    const ts = schemaToTypeTS(
      makeOptionalHeader(replaceRefWithConst(schema) as Schema),
    );
    return replaceRefsTypeNames(namespace, ts);
  }

  function optional(schema: Schema): string {
    return (Array.isArray(schema.required) && schema.required.length > 0) ||
      schema.required
      ? ""
      : "?";
  }

  function tsName(name: string): string {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, namespaceNameSeparator);
    const pascalCased = snakedName
      .split(namespaceNameSeparator)
      .map(pascalCase)
      .filter((s) => s.trim() !== "")
      .join(namespaceNameSeparator);

    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
  }

  function joinNamespace(...args: string[]): string {
    return args.map(transformNamespaceName).join(".");
  }

  function operationId(
    path: string,
    method: string,
    operation: Operation,
  ): string {
    if (operation.operationId) {
      return camelCase(tsName(operation.operationId));
    }

    return camelCase(tsName([method, path].join("/")));
  }

  const rootNamespace = transformNamespaceName(namespace);

  return {
    camelCase,
    pascalCase,
    rootNamespace,
    joinNamespace,
    transformNamespaceName,
    tsName,
    formatTs,
    replaceRefsTypeNames,
    replaceRefWithConst,
    operationId,
    optional,
  };
};