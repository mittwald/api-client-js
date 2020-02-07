import { readFileSync } from "fs";
import yaml from "js-yaml";
import { IntermediateFormat } from "./IntermediateFormat";
import { expression } from "./jsonata";

export class Spec {
    public readonly intermediateFormat: IntermediateFormat;

    private constructor(spec: any) {
        this.intermediateFormat = expression.evaluate(spec);
    }

    public static fromYamlFile(path: string): Spec {
        const yamlContent = readFileSync(path, "utf8");
        return new Spec(yaml.safeLoad(yamlContent));
    }
}
