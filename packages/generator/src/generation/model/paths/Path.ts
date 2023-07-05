import { Operation } from "./operation/Operation.js";
import { Name } from "../global/Name.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { Paths } from "./Paths.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";

export class Path {
  public readonly paths: Paths;
  public readonly name: Name;
  public readonly operations: Operation[];

  private constructor(
    paths: Paths,
    name: Name,
    operationsDoc: OpenAPIV3.PathItemObject,
  ) {
    this.paths = paths;
    this.name = name;
    this.operations = Object.values(OpenAPIV3.HttpMethods)
      .map((method) => {
        const operationDoc = operationsDoc[method];
        if (operationDoc && operationDoc.deprecated !== true) {
          return Operation.fromDoc(this, method, operationDoc);
        }
      })
      .filter((o): o is Operation => !!o);
  }
  public static fromDoc(
    paths: Paths,
    name: string,
    operationsDoc: OpenAPIV3.PathItemObject,
  ) {
    return new Path(paths, new Name(name, paths.name), operationsDoc);
  }

  public async compileTypes(options: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.name.tsType,
      types: await asyncStringJoin(this.operations, (operation) =>
        operation.compileTypes(options),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }    
    `;
  }
}
