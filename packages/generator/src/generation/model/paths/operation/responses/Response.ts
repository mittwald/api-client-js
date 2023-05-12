import * as Doc from "../../../../../transformation/TransformedOpenApiDocument.js";
import { Name } from "../../../global/Name.js";
import { ResponseContentTypes } from "./ResponseContentTypes.js";
import { Responses } from "./Responses.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";

export class Response {
  public readonly responses: Responses;
  public readonly contentTypes: ResponseContentTypes;
  public readonly httpStatus: Name;

  private constructor(
    responses: Responses,
    httpStatus: Name,
    doc: Doc.OperationResponse,
  ) {
    this.responses = responses;
    this.httpStatus = httpStatus;
    this.contentTypes = new ResponseContentTypes(this, doc);
  }

  public static fromDoc(
    responses: Responses,
    httpStatus: Name,
    doc: Doc.OperationResponse,
  ): Response {
    return new Response(responses, httpStatus, doc);
  }

  public async compileContentTypes(
    opts: TypeCompilationOptions,
  ): Promise<string> {
    const t = {
      ns: this.httpStatus.tsType,
      types: await this.contentTypes.compileTypes(opts),
    };

    return `\
      namespace ${this.httpStatus.tsType} {
        ${t.types}
      }    
    `;
  }
}
