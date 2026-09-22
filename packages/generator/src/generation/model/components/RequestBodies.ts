import { JSONSchema as JSONSchemaObject } from "json-schema-to-typescript";
import { JSONSchema } from "../global/JSONSchema.js";
import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { isRef } from "../../refs/isRef.js";

type RequestBodyDoc = OpenAPIV3.RequestBodyObject | OpenAPIV3.ReferenceObject;

export class RequestBodies {
  public static readonly ns = "RequestBodies";

  public readonly schemas: JSONSchema[];
  public readonly components: Components;
  public readonly name: Name;

  public constructor(
    components: Components,
    schemas: OpenAPIV3.ComponentsObject["requestBodies"],
  ) {
    this.components = components;
    this.name = new Name(RequestBodies.ns, components.name);
    this.schemas = Object.entries(schemas ?? {}).map(
      ([schemaName, requestBody]) =>
        new JSONSchema(
          new Name(schemaName, this.name),
          RequestBodies.schemaObjectOf(requestBody),
        ),
    );
  }

  /**
   * A request body component is a `RequestBodyObject`, not a JSON schema — the
   * schema sits under `content[mediaType].schema`. Compiling the wrapper yields
   * an index signature, so unwrap it. A component produces a single type and
   * cannot name one per media type, so `application/json` wins when several are
   * declared.
   */
  private static schemaObjectOf(
    requestBody: RequestBodyDoc,
  ): JSONSchemaObject | undefined {
    if (isRef(requestBody)) {
      return requestBody;
    }

    const { content } = requestBody;

    return (content["application/json"] ?? Object.values(content)[0])?.schema;
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: RequestBodies.ns,
      types: await asyncStringJoin(this.schemas, (schema) =>
        schema.compile(opts),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }
    `;
  }
}
