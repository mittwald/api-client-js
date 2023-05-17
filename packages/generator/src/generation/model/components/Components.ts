import {
  CodeGenerationModel,
  TypeCompilationOptions,
} from "../CodeGenerationModel.js";
import { Name } from "../global/Name.js";
import { Schemas } from "./Schemas.js";
import { Parameters } from "./Parameters.js";
import { RequestBodies } from "./RequestBodies.js";
import { Responses } from "./Responses.js";
import { SecuritySchemes } from "./SecuritySchemes.js";

export class Components {
  public static readonly ns = "Components";

  public name: Name;
  public schemas: Schemas;
  public securitySchemes: SecuritySchemes;
  public parameters: Parameters;
  public requestBodies: RequestBodies;
  public responses: Responses;

  public constructor(model: CodeGenerationModel) {
    this.name = new Name(Components.ns, model.rootNamespace);

    this.schemas = new Schemas(this, model.doc.components?.schemas ?? {});
    this.securitySchemes = new SecuritySchemes(
      this,
      model.doc.components?.securitySchemes ?? {},
    );

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
      securitySchemes: await this.securitySchemes.compileTypes(opts),
    };

    return `\
      namespace ${t.ns} {
        ${t.schemas}
        ${t.parameters}
        ${t.requestBodies}
        ${t.responses}
        ${t.securitySchemes}
      }
    `;
  }
}
