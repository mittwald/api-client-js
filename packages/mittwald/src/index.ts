export {
  assertStatus,
  assertOneOfStatus,
  extractTotalCountHeader,
} from "@mittwald/api-client-commons";
export * as Commons from "@mittwald/api-client-commons";
export { MittwaldAPIClient as MittwaldAPIV2Client } from "./v2/default.js";
export type { MittwaldAPIV2 } from "./generated/v2/types.js";
