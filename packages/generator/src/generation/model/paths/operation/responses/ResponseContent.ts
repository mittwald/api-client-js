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

  public compileDescriptorsResponseContentType(): string {
    const t = {
      type: this.mediaType.tsTypeWithNs,
      httpStatus:
        this.contentTypes.response.httpStatus.raw === "default"
          ? '"default"'
          : this.contentTypes.response.httpStatus.raw,
      mediaType: this.mediaType.raw,
    };

    return `\
      Response<
        ${t.type},
        ${t.httpStatus},
        "${t.mediaType}"
      >
    `;
  }
}
