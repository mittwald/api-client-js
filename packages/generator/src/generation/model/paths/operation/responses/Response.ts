import { Name } from "../../../global/Name.js";
import { ResponseContentTypes } from "./ResponseContentTypes.js";
import { Responses } from "./Responses.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { ValueOf } from "type-fest";

type DocType = ValueOf<OpenAPIV3.ResponsesObject>;

export class Response {
  public readonly responses: Responses;
  public readonly contentTypes: ResponseContentTypes;
  public readonly httpStatus: Name;

  private constructor(responses: Responses, httpStatus: Name, doc: DocType) {
    this.responses = responses;
    this.httpStatus = httpStatus;
    this.contentTypes = new ResponseContentTypes(this, doc);
  }

  public static fromDoc(
    responses: Responses,
    httpStatus: Name,
    doc: DocType,
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
