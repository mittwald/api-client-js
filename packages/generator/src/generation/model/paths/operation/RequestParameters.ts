import * as Doc from "../../../../transformation/TransformedOpenApiDocument.js";
import { JSONSchema } from "../../global/JSONSchema.js";
import { Operation } from "./Operation.js";
import { Name } from "../../global/Name.js";
import { TypeCompilationOptions } from "../../CodeGenerationModel.js";

export class RequestParameters {
  public static readonly ns = "Parameters";

  public readonly path?: JSONSchema;
  public readonly query?: JSONSchema;
  public readonly header?: JSONSchema;
  public readonly body?: JSONSchema;
  public readonly operation: Operation;

  private constructor(
    operation: Operation,
    body?: JSONSchema,
    path?: JSONSchema,
    query?: JSONSchema,
    header?: JSONSchema,
  ) {
    this.operation = operation;
    this.path = path;
    this.query = query;
    this.header = header;
    this.body = body;
  }

  public static fromDoc(
    operation: Operation,
    doc: Doc.OperationParameters,
  ): RequestParameters {
    const name = new Name(RequestParameters.ns, operation.httpMethod);

    return new RequestParameters(
      operation,
      doc.requestBody
        ? new JSONSchema(new Name("requestBody", name), doc.requestBody)
        : undefined,
      doc.path ? new JSONSchema(new Name("path", name), doc.path) : undefined,
      doc.query
        ? new JSONSchema(new Name("query", name), doc.query)
        : undefined,
      doc.header
        ? new JSONSchema(new Name("header", name), doc.header)
        : undefined,
    );
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const header = this.header?.setOptionalProperties(
      opts.optionalHeaders ?? [],
    );

    const t = {
      ns: RequestParameters.ns,
      path: (await this.path?.compile(opts)) ?? "",
      body: (await this.body?.compile(opts)) ?? "",
      header: (await header?.compile(opts)) ?? "",
      query: (await this.query?.compile(opts)) ?? "",
    };

    return `\
      namespace ${t.ns} {
        ${t.path}
        ${t.body}
        ${t.header}
        ${t.query}
      }      
    `;
  }

  public compileDescriptorRequestType(): string {
    const t = {
      body: this.body?.name.tsTypeWithNs ?? "null",
      path: this.path?.name.tsTypeWithNs ?? "null",
      header: this.header?.name.tsTypeWithNs ?? "null",
    };

    return `\
      Request<
        Simplify<${t.body}>,
        Simplify<${t.path}>,
        Simplify<${t.header}>
      >      
    `;
  }
}
