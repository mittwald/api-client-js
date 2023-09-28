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
import camelcase from "camelcase";

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

  public async compileOperationTypes(): Promise<string> {
    const t = {
      types: this.getFlattenedOperations()
        .map((operation) => operation.compileRequestResponseTypes())
        .join("\r\n"),
    };

    return `
      namespace Operations {
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

  public getFlattenedOperations(httpMethod?: string): Operation[] {
    return this.paths
      .flatMap((p) => p.operations)
      .filter(
        (p) =>
          httpMethod === undefined ||
          p.httpMethod.raw.toLowerCase() === httpMethod.toLowerCase(),
      );
  }

  public getGroupedOperationsByTag(
    httpMethod?: string,
  ): Array<[Tag, Operation[]]> {
    const result = new Map<Tag, Operation[]>();

    for (const operation of this.getFlattenedOperations(httpMethod)) {
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
    const t = {
      tag: tag.name.tsVar,
      comment: tag.description,
      methods: operations
        .map((op) => op.compileClientMethod(tag))
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

  private compileReactClientApiName(tag: Tag): string {
    return `build${camelcase(tag.name.tsVar, {
      pascalCase: true,
    })}Api`;
  }

  private compileReactClientApiBuilderOfTag(
    baseClientClassName: string,
    tag: Tag,
    operations: Operation[],
  ): string {
    const t = {
      apiName: this.compileReactClientApiName(tag),
      methods: operations
        .map((op) => op.compileReactClientMethod(tag))
        .join(",\r\n"),
      baseClientClassName,
    };

    return `\
      const ${t.apiName} = (baseClient: ${t.baseClientClassName}) => ({
        ${t.methods}      
      })
    `;
  }

  private compileReactClientPropertyInitializer(tag: Tag): string {
    const tagName = tag.name.tsVar;

    const t = {
      apiName: this.compileReactClientApiName(tag),
      comment: tag.description,
    };

    return `\
      this.${tagName} = ${t.apiName}(baseClient);
    `;
  }

  private compileReactClientProperties(tag: Tag): string {
    const tagName = tag.name.tsVar;

    const t = {
      apiName: this.compileReactClientApiName(tag),
      comment: tag.description,
    };

    return `\
      /** ${t.comment} */
      public readonly ${tagName}: ReturnType<typeof ${t.apiName}>;
    `;
  }

  public compileReactClient(): string {
    const baseClientClassName = `${this.model.rootNamespace.tsType}Client`;
    const clientClassName = `${this.model.rootNamespace.tsType}ClientReact`;

    const t = {
      baseClientClassName,
      clientClassName,
      apiBuilder: this.getGroupedOperationsByTag("GET")
        .map(([tag, operations]) =>
          this.compileReactClientApiBuilderOfTag(
            baseClientClassName,
            tag,
            operations,
          ),
        )
        .join("\r\n"),
      clientProperties: this.getGroupedOperationsByTag("GET")
        .map(([tag]) => this.compileReactClientProperties(tag))
        .join("\r\n"),
      clientPropertyInitializers: this.getGroupedOperationsByTag("GET")
        .map(([tag]) => this.compileReactClientPropertyInitializer(tag))
        .join("\r\n"),
    };

    return `\
      import ${t.baseClientClassName} from "./client.js";
      import { ApiCallAsyncResourceFactory } from "@mittwald/api-client-commons/react";
      import * as descriptors from "./descriptors.js";
      export * from "@mittwald/react-use-promise/types";
      
      ${t.apiBuilder}   
      
      export class ${t.clientClassName} {
        ${t.clientProperties}
        
        private constructor(baseClient: ${t.baseClientClassName}) {
          ${t.clientPropertyInitializers}
        }
        
        public static fromBaseClient(baseClient: ${t.baseClientClassName}): ${t.clientClassName} {
          return new ${t.clientClassName}(baseClient);        
        }
      }
    `;
  }
}
