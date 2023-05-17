import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { asyncStringMap } from "../../asyncStringMap.js";
import { Response } from "./Response.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { assertNoRefs } from "../assertNoRefs.js";

export class Responses {
  public static readonly ns = "Responses";

  public readonly responses: Response[];
  public readonly components: Components;
  public readonly name: Name;

  public constructor(
    components: Components,
    responses: OpenAPIV3.ComponentsObject["responses"] = {},
  ) {
    this.components = components;
    this.name = new Name(Responses.ns, components.name);
    this.responses = Object.entries(responses).map(([name, response]) => {
      assertNoRefs(response);
      return new Response(
        new Name(name, this.name),
        this,
        response.content ?? {},
      );
    });
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: Responses.ns,
      types: await asyncStringMap(this.responses, (response) =>
        response.compileTypes(opts),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }
    `;
  }
}
