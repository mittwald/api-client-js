import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { OpenAPIV3 } from "openapi-types";
import invariant from "invariant";
import { assertNoRefs } from "../../refs/assertNoRefs.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { SecurityScheme } from "./SecurityScheme.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";

export class SecuritySchemes {
  public static readonly ns = "SecuritySchemes";

  public readonly schemes: SecurityScheme[];
  public readonly components: Components;
  public readonly name: Name;

  public constructor(
    components: Components,
    doc: OpenAPIV3.ComponentsObject["securitySchemes"] = {},
  ) {
    this.components = components;
    this.name = new Name(SecuritySchemes.ns, components.name);

    Object.values(doc).forEach((scheme) => {
      assertNoRefs(scheme);
      invariant(
        scheme.type === "apiKey" || scheme.type === "http",
        `Security scheme type '${scheme.type}' is not supported (allowed types: 'apiKey', 'http')`,
      );
    });

    this.schemes = Object.entries(doc).map(
      ([name, scheme]) =>
        new SecurityScheme(
          this,
          name,
          scheme as OpenAPIV3.ApiKeySecurityScheme,
        ),
    );
  }

  public requireScheme(name: string): SecurityScheme {
    const scheme = this.schemes.find((s) => s.name.raw === name);
    invariant(!!scheme, `Required security scheme '${name}' not found`);
    return scheme;
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: SecuritySchemes.ns,
      types: await asyncStringJoin(this.schemes, (scheme) => {
        const { optionalHeaders } = opts;

        const mustSetOptionalHeaders =
          scheme.in === "header" && !!optionalHeaders;

        const jsonSchema = mustSetOptionalHeaders
          ? scheme.jsonSchema.cloneWithOptionalProperties(optionalHeaders)
          : scheme.jsonSchema;

        return jsonSchema.compile(opts);
      }),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}      
      }
    `;
  }
}
