import { RequestParameters } from "./RequestParameters.js";
import { Path } from "../Path.js";
import { Name } from "../../global/Name.js";
import { Responses } from "./responses/Responses.js";
import { Tag } from "../../tags/Tag.js";
import { TypeCompilationOptions } from "../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { isDeprecated } from "../../../deprecation.js";

export class Operation {
  public readonly path: Path;
  public readonly id: Name;
  public readonly httpMethod: Name;
  public readonly parameters: RequestParameters;
  public readonly responses: Responses;
  public readonly summary?: string;
  public readonly tags: Tag[];
  public readonly deprecated: boolean;

  private constructor(
    path: Path,
    httpMethod: Name,
    doc: OpenAPIV3.OperationObject,
  ) {
    const fallbackId = `${httpMethod.raw}-${path.name.raw}`;
    this.id = new Name(doc.operationId ?? fallbackId);
    this.path = path;
    this.httpMethod = httpMethod;
    this.parameters = RequestParameters.fromDoc(this, doc);
    this.responses = new Responses(this, doc.responses);
    this.summary = doc.summary;
    this.deprecated = isDeprecated(doc);
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

  /** JSDoc for declarations that carry the summary, e.g. client methods. */
  private compileSummaryComment(): string {
    return this.deprecated
      ? `/**\n * ${this.summary}\n * @deprecated\n */`
      : `/** ${this.summary} */`;
  }

  /** JSDoc for declarations without a summary, e.g. type namespaces. */
  private compileDeprecationComment(): string {
    return this.deprecated ? "/** @deprecated */" : "";
  }

  public async compileTypes(options: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.httpMethod.tsType,
      parameters: await this.parameters.compileTypes(options),
      responses: await this.responses.compileTypes(options),
    };

    return `\
      ${this.compileDeprecationComment()}
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
      deprecated: this.deprecated ? "\n          deprecated: true," : "",
    };

    return `\
        ${this.compileSummaryComment()}
        export const ${t.constName}: OpenAPIOperation<
          ${t.requestType},
          ${t.responseTypes}
        > = {
          path: "${t.path}",
          method: "${t.method}",
          operationId: "${t.operationId}",${t.deprecated}
        };
    `;
  }

  public compileRequestResponseTypes(): string {
    const t = {
      ns: this.id.tsType,
      descriptor: this.id.tsVar,
    };

    return `\
        ${this.compileDeprecationComment()}
        namespace ${t.ns} {
          type RequestData = InferredRequestData<typeof descriptors.${t.descriptor}>;
          type ResponseData<TStatus extends HttpStatus = 200> = InferredResponseData<typeof descriptors.${t.descriptor}, TStatus>;
        }
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
      ${this.compileSummaryComment()}
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
      ${this.compileSummaryComment()}
      ${t.methodName}: new ApiCallAsyncResourceFactory(
        descriptors.${t.descriptorName},
        baseClient.${t.tag}.${t.methodName}
      ).getApiResource
    `;
  }
}
