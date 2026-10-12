import { RefTSNameResolver } from "../refs/componentRefsToCustomTypes.js";
import { refNameToTSName } from "../refs/refNameToTSName.js";
import { tsNamespaceName } from "../tsNamespaceName.js";

const schemaRefPrefix = "#/components/schemas/";

/**
 * Namespace the widened request variants of component schemas are emitted to.
 *
 * A separate namespace (instead of a suffixed name inside `Schemas`) avoids
 * collisions with schemas that happen to be named `…Request`.
 */
export const requestSchemasNs = "requestSchemas";

/**
 * Redirects refs to component schemas that have a widened request variant to
 * that variant; all other refs are resolved as usual.
 */
export const dateTimeInputRefTSNameResolver =
  (variantNames: ReadonlySet<string>): RefTSNameResolver =>
  (rootNamespace, $ref) => {
    if ($ref.startsWith(schemaRefPrefix)) {
      const schemaName = $ref.slice(schemaRefPrefix.length);

      if (variantNames.has(schemaName)) {
        return tsNamespaceName(
          rootNamespace,
          "components",
          requestSchemasNs,
          schemaName,
        );
      }
    }

    return refNameToTSName(rootNamespace, $ref);
  };
