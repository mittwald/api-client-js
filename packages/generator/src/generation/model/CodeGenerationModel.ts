import { TransformedOpenApiDocument } from "../../transformation/TransformedOpenApiDocument.js";
import { refsToCustomTypes } from "../refs/refsToCustomTypes.js";
import { Name } from "./global/Name.js";
import { Components } from "./components/Components.js";
import { Paths } from "./paths/Paths.js";
import { Tag } from "./tags/Tag.js";

export interface TypeCompilationOptions {
  optionalHeaders?: string[];
}

export class CodeGenerationModel {
  public readonly rootNamespace: Name;
  public readonly paths: Paths;
  public readonly components: Components;
  public readonly tags: Tag[];
  public readonly doc: TransformedOpenApiDocument;

  private constructor(rootNamespace: string, doc: TransformedOpenApiDocument) {
    this.rootNamespace = new Name(rootNamespace);

    this.doc = refsToCustomTypes(
      this.rootNamespace.tsType,
      doc,
    ) as TransformedOpenApiDocument;

    this.tags = this.doc.tags.map((doc) => Tag.fromDoc(doc));
    this.paths = new Paths(this, this.doc.paths);
    this.components = new Components(this);
  }

  public static fromDoc(
    rootNamespace: string,
    doc: TransformedOpenApiDocument,
  ): CodeGenerationModel {
    return new CodeGenerationModel(rootNamespace, doc);
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: this.rootNamespace.tsType,
      components: await this.components.compileTypes(opts),
      paths: await this.paths.compileTypes(opts),
    };

    return `\
      declare namespace ${t.ns} {
        ${t.components}
        ${t.paths}
      }
    `;
  }
}
