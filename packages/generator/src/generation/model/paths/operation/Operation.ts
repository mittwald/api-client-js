import { RequestParameters } from "./RequestParameters.js";
import { Path } from "../Path.js";
import { Name } from "../../global/Name.js";
import { Responses } from "./responses/Responses.js";
import { Tag } from "../../tags/Tag.js";
import { TypeCompilationOptions } from "../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import invariant from "invariant";

export class Operation {
  public readonly path: Path;
  public readonly id: Name;
  public readonly httpMethod: Name;
  public readonly parameters: RequestParameters;
  public readonly responses: Responses;
  public readonly summary?: string;
  public readonly tags: Tag[];

  private constructor(
    path: Path,
    httpMethod: Name,
    doc: OpenAPIV3.OperationObject,
  ) {
    invariant(
      doc.operationId !== undefined,
      "Property 'operationId' does not exist in operation object",
    );
    this.id = new Name(doc.operationId);
    this.path = path;
    this.httpMethod = httpMethod;
    this.parameters = RequestParameters.fromDoc(this, doc);
    this.responses = new Responses(this, doc.responses);
    this.summary = doc.summary;
    this.tags =
      doc.tags
        ?.map((name) => path.paths.model.tags.find((t) => t.name.raw === name))
        .filter((t): t is Tag => !!t) ?? [];
  }

  public static fromDoc(
    path: Path,
    httpMethod: string,
    doc: OpenAPIV3.OperationObject,
  ): Operation {
    return new Operation(path, new Name(httpMethod, path.name), doc);
  }

  public async compileTypes(options: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.httpMethod.tsType,
      parameters: await this.parameters.compileTypes(options),
      responses: await this.responses.compileTypes(options),
    };

    return `\
      namespace ${t.ns} {
        ${t.parameters};
        ${t.responses};
      }
    `;
  }

  public compileDescriptor(): string {
    const t = {
      constName: this.id.tsVar,
      requestType: this.parameters.compileDescriptorRequestType(),
      responseTypes: this.responses.compileDescriptorTypes(),
      path: this.path.name.raw,
      method: this.httpMethod.raw.toUpperCase(),
      operationId: this.id.raw,
    };

    return `\
        /** ${this.summary} */        
        export const ${t.constName}: OpenAPIOperation<
          ${t.requestType},
          ${t.responseTypes}
        > = {
          path: "${t.path}",
          method: "${t.method}",
          operationId: "${t.operationId}",
        };
    `;
  }

  private getMethodName(tag: Tag): string {
    const methodName = this.id.tsVar;
    return new Name(
      methodName.startsWith(tag.name.tsVar)
        ? methodName.substring(tag.name.tsVar.length)
        : methodName,
    ).tsVar;
  }

  public compileClientMethod(tag: Tag): string {
    const methodName = this.getMethodName(tag);

    const t = {
      methodName,
      descriptorName: this.id.tsVar,
    };

    return `\
      /** ${this.summary} */        
      ${t.methodName}: this.requestFunctionFactory(
        descriptors.${t.descriptorName}
      )
    `;
  }

  public compileReactClientMethod(tag: Tag): string {
    const methodName = this.getMethodName(tag);

    const t = {
      methodName,
      descriptorName: this.id.tsVar,
      tag: tag.name.tsVar,
    };

    return `\
      /** ${this.summary} */        
      ${t.methodName}: getAsyncResourceFactory(
        baseClient.axios,
        descriptors.${t.descriptorName}
      )
    `;
  }
}
