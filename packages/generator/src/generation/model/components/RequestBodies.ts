import { JSONSchema } from "../global/JSONSchema.js";
import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";

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
      ([schemaName, schema]) =>
        new JSONSchema(new Name(schemaName, this.name), schema),
    );
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
