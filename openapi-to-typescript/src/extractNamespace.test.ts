import { extractNamespace } from "./extractNamespace";
import { promisify } from "util";
import { readFile } from "fs";
import yaml from "js-yaml";
import { join } from "path";

const readAsync = promisify(readFile);

describe("extractNamespace()", () => {
    test("works correct", async () => {
        const fileContent = await readAsync(join(__dirname, "examples/simple.yaml"), "utf8");
        const spec = yaml.safeLoad(fileContent);
        const namespace = extractNamespace("test", spec);
        expect(namespace).toMatchSnapshot();
    });
});
