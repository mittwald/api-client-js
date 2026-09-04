import { JSONSchema } from "../global/JSONSchema.js";
import { Name } from "../global/Name.js";
import { Components, ComponentType } from "./Components.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { assertNoRefs } from "../../refs/assertNoRefs.js";
import { withDeprecation } from "../../deprecation.js";
import { JSONSchema as JSONSchemaObject } from "json-schema-to-typescript";

export class Parameters {
  public static readonly ns = "Parameters";

  public readonly components: Components;
  public readonly name: Name;
  public readonly parameters: Record<string, ComponentType<"parameters">>;

  public constructor(
    components: Components,
    parametersObject: Record<string, ComponentType<"parameters">>,
  ) {
    this.components = components;
    this.name = new Name(Parameters.ns, components.name);
    this.parameters = parametersObject;
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const schemas = Object.entries(this.parameters).map(([name, param]) => {
      assertNoRefs(param);
      return new JSONSchema(
        new Name(name, this.name),
        // `deprecated` lives on the Parameter Object, not on its schema, so it
        // has to be carried over explicitly to end up in the generated JSDoc.
        param.schema === undefined
          ? undefined
          : withDeprecation(param.schema as JSONSchemaObject, param),
      );
    });

    const t = {
      ns: Parameters.ns,
      types: await asyncStringJoin(schemas, (schema) => schema.compile(opts)),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }
    `;
  }
}
