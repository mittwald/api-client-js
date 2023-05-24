import { Name } from "../../../global/Name.js";
import { asyncStringJoin } from "../../../../asyncStringJoin.js";
import { Response } from "./Response.js";
import { Operation } from "../Operation.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";

export class Responses {
  public static readonly ns = "Responses";

  public readonly responses: Response[];
  public readonly operation: Operation;
  public readonly name: Name;

  public constructor(
    operation: Operation,
    responses: OpenAPIV3.ResponsesObject,
  ) {
    this.operation = operation;
    this.name = new Name(Responses.ns, operation.httpMethod);
    this.responses = Object.entries(responses ?? {}).map(([name, response]) =>
      Response.fromDoc(this, new Name(name, this.name), response),
    );
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      responses: await asyncStringJoin(this.responses, (response) =>
        response.compileContentTypes(opts),
      ),
      ns: Responses.ns,
    };

    return `\
      namespace ${t.ns} {
        ${t.responses}
      }
    `;
  }

  public compileDescriptorTypes(): string {
    return this.responses
      .flatMap((response) => response.contentTypes.compileDescriptorTypes())
      .filter((s) => s !== "")
      .join(" | ");
  }
}
