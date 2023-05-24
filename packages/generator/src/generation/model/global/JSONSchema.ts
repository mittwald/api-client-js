import { JSONSchema as JSONSchemaObject } from "json-schema-to-typescript";
import { compileJsonSchema } from "../../compileJsonSchema.js";
import { Name } from "./Name.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import cloneDeep from "clone-deep";

export class JSONSchema {
  public readonly schemaObject: JSONSchemaObject;
  public readonly name: Name;

  public constructor(name: Name, data: JSONSchemaObject = { type: "any" }) {
    this.name = name;
    this.schemaObject = data;
  }

  public async compile(ignoredOpts: TypeCompilationOptions): Promise<string> {
    return compileJsonSchema(this.schemaObject, this.name.tsType);
  }

  public clone(): JSONSchema {
    return new JSONSchema(
      new Name(this.name.raw),
      cloneDeep(this.schemaObject),
    );
  }

  public cloneWithOptionalProperties(optionalProperties: string[]): JSONSchema {
    const withOptionalProperties = this.clone();
    this.setOptionalPropertiesInSchema(
      optionalProperties,
      withOptionalProperties.schemaObject,
    );
    return withOptionalProperties;
  }

  private setOptionalPropertiesInSchema(
    optionalProperties: string[],
    schema: JSONSchemaObject,
  ): void {
    for (const optionalProp of optionalProperties) {
      const requiredProperties = schema.required;

      if (Array.isArray(requiredProperties)) {
        schema.required = requiredProperties.filter((p) => p !== optionalProp);
      }
    }

    for (const subSchema of schema.allOf ?? []) {
      this.setOptionalPropertiesInSchema(optionalProperties, subSchema);
    }

    for (const subSchema of schema.anyOf ?? []) {
      this.setOptionalPropertiesInSchema(optionalProperties, subSchema);
    }
  }

  public asCustomTypeRef(): JSONSchemaObject {
    return {
      tsType: this.name.tsTypeWithNamespace,
      type: "object",
    };
  }
}
