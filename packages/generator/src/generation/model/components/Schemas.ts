import { JSONSchema } from "../global/JSONSchema.js";
import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { populateNullableTypes } from "../../pupulateNullableTypes.js";

export class Schemas {
  public static readonly ns = "Schemas";

  public readonly schemas: JSONSchema[];
  public readonly components: Components;
  public readonly name: Name;

  public constructor(
    components: Components,
    schemas: OpenAPIV3.ComponentsObject["schemas"],
  ) {
    this.components = components;
    this.name = new Name(Schemas.ns, components.name);
    this.schemas = Object.entries(schemas ?? {}).map(([schemaName, schema]) => {
      return new JSONSchema(
        new Name(schemaName, this.name),
        populateNullableTypes(schema),
      );
    });
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: Schemas.ns,
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
