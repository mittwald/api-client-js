import { NormalizedSpec } from "./NormalizedSpec.js";

export interface LockFileContent {
  version: "v1";
  spec: NormalizedSpec;
}
