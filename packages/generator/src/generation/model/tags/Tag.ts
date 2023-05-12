import * as Doc from "../../../transformation/TransformedOpenApiDocument.js";
import { Name } from "../global/Name.js";

export class Tag {
  public readonly name: Name;
  public readonly description: string;

  private constructor(name: Name, description: string) {
    this.name = name;
    this.description = description;
  }

  public static fromDoc(doc: Doc.Tag): Tag {
    return new Tag(new Name(doc.name), doc.description);
  }
}
