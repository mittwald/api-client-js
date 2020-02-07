import { Spec } from "../Spec";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import ejs from "ejs";

const spec = Spec.fromYamlFile(join(process.cwd(), "resources/examples/complex.yaml"));
const templateContent = readFileSync(join(process.cwd(), "resources/templates/namespaced-types.ejs"), "utf8");

const template = ejs.compile(templateContent);
const rendered = template({
    ...spec.intermediateFormat,
    sayHello: () => "hello",
});
writeFileSync(join(process.cwd(), "resources/build/types.ts"), rendered, { encoding: "utf8" });
