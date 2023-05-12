import { Name } from "../../../global/Name.js";
import * as Doc from "../../../../../transformation/TransformedOpenApiDocument.js";
import { asyncStringMap } from "../../../../asyncStringMap.js";
import { Response } from "./Response.js";
import { Operation } from "../Operation.js";
import { TypeCompilationOptions } from "../../../CodeGenerationModel.js";

export class Responses {
  public static readonly ns = "Responses";

  public readonly responses: Response[];
  public readonly operation: Operation;
  public readonly name: Name;

  public constructor(operation: Operation, responses: Doc.OperationResponses) {
    this.operation = operation;
    this.name = new Name(Responses.ns, operation.httpMethod);
    this.responses = Object.entries(responses ?? {}).map(([name, response]) =>
      Response.fromDoc(this, new Name(name, this.name), response),
    );
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      responses: await asyncStringMap(this.responses, (response) =>
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
