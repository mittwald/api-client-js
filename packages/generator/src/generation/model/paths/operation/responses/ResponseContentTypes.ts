import { Name } from "../../../global/Name.js";
import * as Doc from "../../../../../transformation/TransformedOpenApiDocument.js";
import { ResponseContent } from "./ResponseContent.js";
import { Response } from "./Response.js";
import { asyncStringMap } from "../../../../asyncStringMap.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";

export class ResponseContentTypes {
  public static readonly ns = "Content";

  public readonly contentTypes: ResponseContent[];
  public readonly name: Name;
  public readonly response: Response;

  public constructor(response: Response, responseDoc: Doc.OperationResponse) {
    this.response = response;
    this.name = new Name(ResponseContentTypes.ns, response.httpStatus);
    this.contentTypes = Object.entries(responseDoc.content ?? {}).map(
      ([mediaType, schema]) => new ResponseContent(this, mediaType, schema),
    );
  }

  public compileDescriptorTypes(): string {
    return this.contentTypes
      .flatMap((contentType) =>
        contentType.compileDescriptorsResponseContentType(),
      )
      .filter((s) => s !== "")
      .join(" | ");
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: ResponseContentTypes.ns,
      types: await asyncStringMap(this.contentTypes, (contentType) =>
        contentType.schema.compile(opts),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }    
    `;
  }
}
