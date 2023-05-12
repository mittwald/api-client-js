import { Name } from "../global/Name.js";
import * as Doc from "../../../transformation/TransformedOpenApiDocument.js";
import { ResponseContent } from "./ResponseContent.js";
import { asyncStringMap } from "../../asyncStringMap.js";
import { Responses } from "./Responses.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";

export class Response {
  public readonly name: Name;
  public readonly responses: Responses;
  public readonly contents: ResponseContent[];

  public constructor(
    name: Name,
    responses: Responses,
    mediaTypesDoc: Doc.ResponseMediaTypes,
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
      types: await asyncStringMap(this.contents, (content) =>
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
