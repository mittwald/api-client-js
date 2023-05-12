import { JSONSchema as JSONSchemaType } from "json-schema-to-typescript";
import { Name } from "../global/Name.js";
import { Response } from "./Response.js";
import { JSONSchema } from "../global/JSONSchema.js";

export class ResponseContent {
  public readonly mediaType: Name;
  public readonly schema: JSONSchema;
  public readonly response: Response;

  public constructor(
    response: Response,
    mediaType: string,
    schema: JSONSchemaType,
  ) {
    this.mediaType = new Name(mediaType, response.name);
    this.response = response;
    this.schema = new JSONSchema(this.mediaType, schema);
  }
}
