import { Name } from "../../../global/Name.js";
import { ResponseContent } from "./ResponseContent.js";
import { Response } from "./Response.js";
import { asyncStringJoin } from "../../../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import invariant from "invariant";

export class ResponseContentTypes {
  public static readonly ns = "Content";

  public readonly contentTypes: ResponseContent[];
  public readonly name: Name;
  public readonly response: Response;

  public constructor(
    response: Response,
    responseDoc: OpenAPIV3.ResponseObject | OpenAPIV3.ReferenceObject,
  ) {
    this.response = response;
    this.name = new Name(ResponseContentTypes.ns, response.httpStatus);
    this.contentTypes =
      "content" in responseDoc
        ? this.buildContentTypesFromResponseObject(responseDoc)
        : "$ref" in responseDoc
        ? this.buildContentTypesFromReferenceObject(responseDoc)
        : [];
  }

  private buildContentTypesFromResponseObject(
    doc: OpenAPIV3.ResponseObject,
  ): ResponseContent[] {
    return Object.entries(doc.content ?? {}).map(
      ([mediaType, mediaTypeObject]) =>
        new ResponseContent(this, mediaType, mediaTypeObject.schema),
    );
  }

  private buildContentTypesFromReferenceObject(
    doc: OpenAPIV3.ReferenceObject,
  ): ResponseContent[] {
    const responseComponents =
      this.response.responses.operation.path.paths.model.components.responses
        .responses;

    const referencedResponse = responseComponents.find(
      (r) => `#/components/responses/${r.name.raw}` === doc.$ref,
    );

    invariant(
      !!referencedResponse,
      `Referenced response ${doc.$ref} not found`,
    );

    return referencedResponse.contents.map(
      (c) => new ResponseContent(this, c.mediaType.raw, c.schema),
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
      types: await asyncStringJoin(this.contentTypes, (contentType) =>
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
