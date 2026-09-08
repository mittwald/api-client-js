import { JSONSchema } from "../global/JSONSchema.js";
import { Name } from "../global/Name.js";
import { Components } from "./Components.js";
import { asyncStringJoin } from "../../asyncStringJoin.js";
import { TypeCompilationOptions } from "../CodeGenerationModel.js";
import { OpenAPIV3 } from "openapi-types";
import { populateNullableTypes } from "../../populateNullableTypes.js";
import { requestSchemasNs } from "../../dateTime/dateTimeInputRefs.js";
import { tsTypeName } from "../../tsTypeName.js";
import cloneDeep from "clone-deep";

/**
 * Widened _request_ variants of component schemas.
 *
 * Only schemas that are reachable from a request body or request parameter and
 * that (transitively) contain a `format: date-time` string get a variant here;
 * see {@link dateTimeInputSchemaNames}. Everything else keeps referring to
 * `Components.Schemas`.
 *
 * This namespace is purely additive: the original `Components.Schemas` types
 * stay exactly as they were, which is what keeps response types – and therefore
 * existing consumer code – unchanged.
 */
export class RequestSchemas {
  public static readonly ns = tsTypeName(requestSchemasNs);

  public readonly schemas: JSONSchema[];
  public readonly components: Components;
  public readonly name: Name;

  public constructor(
    components: Components,
    schemas: OpenAPIV3.ComponentsObject["schemas"],
    variantNames: ReadonlySet<string>,
  ) {
    this.components = components;
    this.name = new Name(RequestSchemas.ns, components.name);
    this.schemas = Object.entries(schemas ?? {})
      .filter(([schemaName]) => variantNames.has(schemaName))
      .map(
        ([schemaName, schema]) =>
          new JSONSchema(
            new Name(schemaName, this.name),
            populateNullableTypes(cloneDeep(schema)),
          ),
      );
  }

  public async compileTypes(opts: TypeCompilationOptions): Promise<string> {
    const t = {
      ns: RequestSchemas.ns,
      types: await asyncStringJoin(this.schemas, (schema) =>
        schema.compileAsRequestInput(
          opts,
          this.components.model.dateTimeInputSchemaNames,
        ),
      ),
    };

    return `\
      namespace ${t.ns} {
        ${t.types}
      }
    `;
  }
}
