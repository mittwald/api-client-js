import * as Doc from "../../../../transformation/TransformedOpenApiDocument.js";
import { RequestParameters } from "./RequestParameters.js";
import { Path } from "../Path.js";
import { Name } from "../../global/Name.js";
import { Responses } from "./responses/Responses.js";
import { Tag } from "../../tags/Tag.js";
import { TypeCompilationOptions } from "../../CodeGenerationModel.js";

export class Operation {
  public readonly path: Path;
  public readonly id: Name;
  public readonly httpMethod: Name;
  public readonly parameters: RequestParameters;
  public readonly responses: Responses;
  public readonly summary?: string;
  public readonly tags: Tag[];

  private constructor(path: Path, httpMethod: Name, doc: Doc.Operation) {
    this.id = new Name(doc.operationId);
    this.path = path;
    this.httpMethod = httpMethod;
    this.parameters = RequestParameters.fromDoc(this, doc.parameters ?? {});
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
    doc: Doc.Operation,
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

  public compileClientMethod(tagNamePrefix: string): string {
    const methodName = this.id.tsVar;
    const methodNameWithoutTagPrefix = new Name(
      methodName.startsWith(tagNamePrefix)
        ? methodName.substring(tagNamePrefix.length)
        : methodName,
    );

    const t = {
      methodName: methodNameWithoutTagPrefix.tsVar,
      descriptorName: this.id.tsVar,
    };

    return `\
      /** ${this.summary} */        
      ${t.methodName}: this.requestFunctionFactory(
        descriptors.${t.descriptorName}
      )
    `;
  }
}
