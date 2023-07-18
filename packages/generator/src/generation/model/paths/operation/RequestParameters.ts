import { JSONSchema as JSONSchemaObject } from "json-schema-to-typescript";
import { JSONSchema } from "../../global/JSONSchema.js";
import { Operation } from "./Operation.js";
import { Name } from "../../global/Name.js";
import { TypeCompilationOptions } from "../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { assertNoRefs } from "../../assertNoRefs.js";
import { SecurityScheme } from "../../components/SecurityScheme.js";

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

  private static constructParametersSchema(
    name: Name,
    $in: string,
    parameters: OpenAPIV3.OperationObject["parameters"] = [],
    securitySchemes: SecurityScheme[],
  ): JSONSchema {
    const properties: Record<string, JSONSchemaObject> = {};
    const required: string[] = [];

    for (const parameter of parameters) {
      assertNoRefs(parameter);

      if (parameter.in === $in && parameter.schema) {
        properties[parameter.name] = parameter.schema;
      }
      if (parameter.required) {
        required.push(parameter.name);
      }
    }

    const securitySchemesJSONSchemas = securitySchemes
      .filter((s) => s.in === $in)
      .map((s) => s.jsonSchema.asCustomTypeRef());

    const jsonSchemaObject: JSONSchemaObject = {
      allOf: [
        { type: "object", required, properties },
        ...securitySchemesJSONSchemas,
      ],
    };

    return new JSONSchema(new Name($in, name), jsonSchemaObject);
  }

  public static fromDoc(
    operation: Operation,
    doc: OpenAPIV3.OperationObject,
  ): RequestParameters {
    const name = new Name(RequestParameters.ns, operation.httpMethod);

    const requestBodySchema =
      doc.requestBody &&
      "content" in doc.requestBody &&
      "application/json" in doc.requestBody.content
        ? doc.requestBody.content["application/json"].schema
        : doc.requestBody;

    const body = requestBodySchema
      ? new JSONSchema(new Name("requestBody", name), requestBodySchema)
      : undefined;

    const requiredSecuritySchemeNames =
      doc.security?.flatMap((obj) => Object.keys(obj)) ?? [];

    const requiredSecuritySchemes = requiredSecuritySchemeNames.map((name) =>
      operation.path.paths.model.components.securitySchemes.requireScheme(name),
    );

    const path = RequestParameters.constructParametersSchema(
      name,
      "path",
      doc.parameters,
      requiredSecuritySchemes,
    );

    const header = RequestParameters.constructParametersSchema(
      name,
      "header",
      doc.parameters,
      requiredSecuritySchemes,
    );

    const query = RequestParameters.constructParametersSchema(
      name,
      "query",
      doc.parameters,
      requiredSecuritySchemes,
    );

    return new RequestParameters(operation, body, path, query, header);
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const header = this.header?.cloneWithOptionalProperties(
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
      body: this.body?.name.tsTypeWithNamespace ?? "null",
      path: this.path?.name.tsTypeWithNamespace ?? "null",
      header: this.header?.name.tsTypeWithNamespace ?? "null",
      query: this.query?.name.tsTypeWithNamespace ?? "null",
    };

    return `\
      RequestType<
        Simplify<${t.body}>,
        Simplify<${t.path}>,
        Simplify<${t.query}>,
        Simplify<${t.header}>
      >      
    `;
  }
}
