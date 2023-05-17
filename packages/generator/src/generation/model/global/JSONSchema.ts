import { JSONSchema as JSONSchemaType } from "json-schema-to-typescript";
import { compileJsonSchema } from "../../compileJsonSchema.js";
import { Name } from "./Name.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import cloneDeep from "clone-deep";

export class JSONSchema {
  public readonly data: JSONSchemaType;
  public readonly name: Name;

  public constructor(name: Name, data: JSONSchemaType = { type: "any" }) {
    this.name = name;
    this.data = data;
  }

  public async compile(ignoredOpts: TypeCompilationOptions): Promise<string> {
    return compileJsonSchema(this.data, this.name.tsType);
  }

  public clone(): JSONSchema {
    return new JSONSchema(new Name(this.name.raw), cloneDeep(this.data));
  }

  public setOptionalProperties(optionalProperties: string[]): JSONSchema {
    const withOptionalProperties = this.clone();

    for (const optionalProp of optionalProperties) {
      const requiredProperties = withOptionalProperties.data.required;

      if (Array.isArray(requiredProperties)) {
        withOptionalProperties.data.required = requiredProperties.filter(
          (p) => p !== optionalProp,
        );
      }
    }

    return withOptionalProperties;
  }
}
