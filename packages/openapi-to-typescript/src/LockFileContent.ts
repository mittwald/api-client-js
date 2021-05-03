import { NormalizedSpec } from "./NormalizedSpec";

export interface LockFileContent {
    version: "v1";
    spec: NormalizedSpec;
}
