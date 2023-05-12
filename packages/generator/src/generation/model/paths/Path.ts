import * as Doc from "../../../transformation/TransformedOpenApiDocument.js";
import { Operation } from "./operation/Operation.js";
import { Name } from "../global/Name.js";
import { asyncStringMap } from "../../asyncStringMap.js";
import { Paths } from "./Paths.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";

export class Path {
  public readonly paths: Paths;
  public readonly name: Name;
  public readonly operations: Operation[];

  private constructor(paths: Paths, name: Name, operationsDoc: Doc.Operations) {
    this.paths = paths;
    this.name = name;
    this.operations = Object.entries(operationsDoc).map(([method, doc]) =>
      Operation.fromDoc(this, method, doc),
    );
  }
  public static fromDoc(
    paths: Paths,
    name: string,
    operationsDoc: Doc.Operations,
  ) {
    return new Path(paths, new Name(name, paths.name), operationsDoc);
  }

  public async compileTypes(options: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.name.tsType,
      types: await asyncStringMap(this.operations, (operation) =>
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
