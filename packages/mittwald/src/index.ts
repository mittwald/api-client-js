export {
  assertStatus,
  assertOneOfStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client-commons";
export * as Commons from "@mittwald/api-client-commons";
export * as Descriptors from "./generated/v2/descriptors.js";
export { MittwaldAPIClient as MittwaldAPIV2Client } from "./v2/default.js";
export type { MittwaldAPIV2 } from "./generated/v2/types.js";
