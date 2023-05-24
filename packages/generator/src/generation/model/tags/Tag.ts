import { Name } from "../global/Name.js";
import { OpenAPIV3 } from "openapi-types";

export class Tag {
  public readonly name: Name;
  public readonly description?: string;

  private constructor(name: Name, description?: string) {
    this.name = name;
    this.description = description;
  }

  public static fromDoc(doc: OpenAPIV3.TagObject): Tag {
    return new Tag(new Name(doc.name), doc.description);
  }
}
