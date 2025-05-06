import { OpenAPIV3 } from "openapi-types";
import { Name } from "../global/Name.js";
import { SecuritySchemes } from "./SecuritySchemes.js";
import { JSONSchema } from "../global/JSONSchema.js";

export type SecuritySchemeType =
  | OpenAPIV3.ApiKeySecurityScheme
  | OpenAPIV3.HttpSecurityScheme;

export class SecurityScheme {
  public readonly in: string;
  public readonly name: Name;
  public readonly jsonSchema: JSONSchema;

  public constructor(
    schemes: SecuritySchemes,
    name: string,
    doc: SecuritySchemeType,
  ) {
    this.name = new Name(name, schemes.name);
    this.in = doc.type === "http" ? "header" : doc.in;

    const propName = doc.type === "http" ? "Authorization" : doc.name;
    this.jsonSchema = new JSONSchema(this.name, {
      type: "object",
      description: doc.description,
      properties: {
        [propName]: {
          type: "string",
        },
      },
      required: [propName],
    });
  }
}
