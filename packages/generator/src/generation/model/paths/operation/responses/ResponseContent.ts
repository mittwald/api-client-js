import { JSONSchema as JSONSchemaType } from "json-schema-to-typescript";
import { JSONSchema } from "../../../global/JSONSchema.js";
import { Name } from "../../../global/Name.js";
import { ResponseContentTypes } from "./ResponseContentTypes.js";

export class ResponseContent {
  public readonly mediaType: Name;
  public readonly schema: JSONSchema;
  public readonly contentTypes: ResponseContentTypes;

  public constructor(
    contentTypes: ResponseContentTypes,
    mediaType: string,
    schema?: JSONSchemaType,
  ) {
    this.mediaType = new Name(mediaType, contentTypes.name);
    this.schema = new JSONSchema(this.mediaType, schema);
    this.contentTypes = contentTypes;
  }

  public static buildEmpty(
    contentTypes: ResponseContentTypes,
  ): ResponseContent {
    return new ResponseContent(contentTypes, "empty");
  }

  public compileDescriptorsResponseContentType(): string {
    const t = {
      type: this.mediaType.tsTypeWithNamespace,
      httpStatus:
        this.contentTypes.response.httpStatus.raw === "default"
          ? '"default"'
          : this.contentTypes.response.httpStatus.raw,
      mediaType: this.mediaType.raw,
    };

    return `\
      Response<
        Simplify<${t.type}>,
        ${t.httpStatus},
        "${t.mediaType}"
      >
    `;
  }
}
