import { readFileSync, writeFileSync } from "fs";
import yaml from "js-yaml";
import { IntermediateFormat } from "./IntermediateFormat";
import { transformOpenAPIExpression } from "./transforms";
import { renderIntermediaFormatToDescriptorTemplate, renderIntermediaFormatToNamespaceTemplate } from "./template";
import prettier from "prettier";

export class Spec {
    public readonly intermediateFormat: IntermediateFormat;

    public constructor(openAPISpec: object) {
        this.intermediateFormat = transformOpenAPIExpression.evaluate(openAPISpec);
    }

    public static fromYamlFile(path: string): Spec {
        const yamlContent = readFileSync(path, "utf8");
        return new Spec(yaml.safeLoad(yamlContent));
    }

    public toNamspaceTemplate(rootNamespaceName: string = "API", saveFilePath?: string): string {
        let namespaceTemplate = renderIntermediaFormatToNamespaceTemplate(this.intermediateFormat, rootNamespaceName);
        namespaceTemplate = prettier.format(namespaceTemplate, {
            parser: "typescript",
        });

        if (saveFilePath) {
            writeFileSync(saveFilePath, namespaceTemplate, { encoding: "utf8" });
        }

        return namespaceTemplate;
    }

    public toDescriptorTemplate(rootNamespaceName: string = "API", saveFilePath?: string): string {
        let descriptorTemplate = renderIntermediaFormatToDescriptorTemplate(this.intermediateFormat, rootNamespaceName);
        descriptorTemplate = prettier.format(descriptorTemplate, {
            parser: "typescript",
        });

        if (saveFilePath) {
            writeFileSync(saveFilePath, descriptorTemplate, { encoding: "utf8" });
        }

        return descriptorTemplate;
    }
}
