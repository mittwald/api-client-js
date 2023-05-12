import {
  CodeGenerationModel,
  TypeCompilationOptions,
} from "../CodeGenerationModel.js";
import { Name } from "../global/Name.js";
import { Schemas } from "./Schemas.js";
import { Parameters } from "./Parameters.js";
import { RequestBodies } from "./RequestBodies.js";
import { Responses } from "./Responses.js";

export class Components {
  public static readonly ns = "Components";

  public name: Name;
  public schemas: Schemas;
  public parameters: Parameters;
  public requestBodies: RequestBodies;
  public responses: Responses;

  public constructor(model: CodeGenerationModel) {
    this.name = new Name(Components.ns, model.rootNamespace);

    this.schemas = new Schemas(this, model.doc.components?.schemas ?? {});

    this.parameters = new Parameters(
      this,
      model.doc.components?.parameters ?? {},
    );

    this.requestBodies = new RequestBodies(
      this,
      model.doc.components?.requestBodies ?? {},
    );

    this.responses = new Responses(this, model.doc.components?.responses ?? {});
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: Components.ns,
      schemas: await this.schemas.compileTypes(opts),
      parameters: await this.parameters.compileTypes(opts),
      requestBodies: await this.requestBodies.compileTypes(opts),
      responses: await this.responses.compileTypes(opts),
    };

    return `\
      namespace ${t.ns} {
        ${t.schemas}
        ${t.parameters}
        ${t.requestBodies}
        ${t.responses}
      }
    `;
  }
}
