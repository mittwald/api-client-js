import { readFileSync } from "fs";
import yaml from "js-yaml";
import { IntermediateFormat } from "./IntermediateFormat";
import { transformOpenAPIExpression } from "./transforms";

export class Spec {
    public readonly intermediateFormat: IntermediateFormat;

    public constructor(openAPISpec: object) {
        this.intermediateFormat = transformOpenAPIExpression.evaluate(openAPISpec);
    }

    public static fromYamlFile(path: string): Spec {
        const yamlContent = readFileSync(path, "utf8");
        return new Spec(yaml.safeLoad(yamlContent));
    }
}
