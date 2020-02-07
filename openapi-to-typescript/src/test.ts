import { Spec } from "./Spec";
import { join } from "path";
import { writeFileSync } from "fs";

const spec = Spec.fromYamlFile(join(process.cwd(), "src/examples/complex.yaml"));
const asJson = JSON.stringify(spec.intermediateFormat, undefined, 2);
writeFileSync(join(process.cwd(), "src/examples/complex.json"), asJson, { encoding: "utf8" });
