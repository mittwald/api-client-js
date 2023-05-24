import { OpenAPIV3 } from "openapi-types";
import { Name } from "../global/Name.js";
import { SecuritySchemes } from "./SecuritySchemes.js";
import { JSONSchema } from "../global/JSONSchema.js";

export class SecurityScheme {
  public readonly in: string;
  public readonly name: Name;
  public readonly jsonSchema: JSONSchema;

  public constructor(
    schemes: SecuritySchemes,
    name: string,
    doc: OpenAPIV3.ApiKeySecurityScheme,
  ) {
    this.name = new Name(name, schemes.name);
    this.in = doc.in;
    this.jsonSchema = new JSONSchema(this.name, {
      type: "object",
      description: doc.description,
      properties: {
        [doc.name]: {
          type: "string",
        },
      },
      required: [doc.name],
    });
  }
}
