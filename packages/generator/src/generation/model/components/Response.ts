import { Name } from "../global/Name.js";
import { ResponseContent } from "./ResponseContent.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { Responses } from "./Responses.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";

export class Response {
  public readonly name: Name;
  public readonly responses: Responses;
  public readonly contents: ResponseContent[];

  public constructor(
    name: Name,
    responses: Responses,
    mediaTypesDoc: OpenAPIV3.MediaTypeObject,
  ) {
    this.name = name;
    this.responses = responses;
    this.contents = Object.entries(mediaTypesDoc).map(
      ([mediaType, schema]) => new ResponseContent(this, mediaType, schema),
    );
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.name.tsType,
      types: await asyncStringJoin(this.contents, (content) =>
        content.schema.compile(opts),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}      
      }    
    `;
  }
}