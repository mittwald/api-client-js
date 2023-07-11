import { Name } from "../global/Name.js";
import {
  CodeGenerationModel,
  TypeCompilationOptions,
} from "../CodeGenerationModel.js";
import { Path } from "./Path.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { Operation } from "./operation/Operation.js";
import { Tag } from "../tags/Tag.js";
import { OpenAPIV3 } from "openapi-types";

export class Paths {
  public static readonly ns = "Paths";

  public readonly paths: Path[];
  public readonly model: CodeGenerationModel;
  public readonly name: Name;

  public constructor(model: CodeGenerationModel, paths: OpenAPIV3.PathsObject) {
    this.model = model;
    this.name = new Name(Paths.ns, model.rootNamespace);
    this.paths = Object.entries(paths ?? {})
      .map(([name, pathDoc]) => {
        if (pathDoc) {
          return Path.fromDoc(this, name, pathDoc);
        }
      })
      .filter((p): p is Path => !!p);
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: Paths.ns,
      types: await asyncStringJoin(this.paths, (path) =>
        path.compileTypes(opts),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }
    `;
  }

  public compileDescriptors(): string {
    const t = {
      ns: this.model.rootNamespace.tsType,
      descriptors: this.getFlattenedOperations()
        .map((operation) => operation.compileDescriptor())
        .join("\r\n"),
    };

    return `\
      import { Simplify } from "@mittwald/api-client-commons";
      import { RequestType } from "@mittwald/api-client-commons";
      import { Response } from "@mittwald/api-client-commons";
      import { OpenAPIOperation } from "@mittwald/api-client-commons";    
      import { ${t.ns} } from "./types.js";
      
      ${t.descriptors}
    `;
  }

  public getFlattenedOperations(): Operation[] {
    return this.paths.flatMap((p) => p.operations);
  }

  public getGroupedOperationsByTag(): Array<[Tag, Operation[]]> {
    const result = new Map<Tag, Operation[]>();

    for (const operation of this.getFlattenedOperations()) {
      for (const tag of operation.tags) {
        const operationsOfTag = result.get(tag);
        if (operationsOfTag) {
          operationsOfTag.push(operation);
        } else {
          result.set(tag, [operation]);
        }
      }
    }

    return Array.from(result.entries());
  }

  private compileClientMethodsOfTag(tag: Tag, operations: Operation[]): string {
    const tagName = tag.name.tsVar;
    const t = {
      tag: tagName,
      comment: tag.description,
      methods: operations
        .map((op) => op.compileClientMethod(tagName))
        .join(",\r\n"),
    };

    return `\
      /** ${t.comment} */
      public readonly ${t.tag} = {
        ${t.methods}      
      }
    `;
  }

  public compileClient(): string {
    const t = {
      clientClassName: `${this.model.rootNamespace.tsType}Client`,
      methods: this.getGroupedOperationsByTag()
        .map(([tag, operations]) =>
          this.compileClientMethodsOfTag(tag, operations),
        )
        .join("\r\n"),
    };

    return `\
      import * as descriptors from "./descriptors.js";
      import { ApiClientBase } from "@mittwald/api-client-commons";

      export class ${t.clientClassName} extends ApiClientBase {
        ${t.methods}
      }
      
      export default ${t.clientClassName}
    `;
  }
}
