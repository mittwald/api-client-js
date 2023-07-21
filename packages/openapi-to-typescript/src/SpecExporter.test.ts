import * as path from "path";
import { loadSpec } from "./loadSpec.js";
import { SpecExporter } from "./SpecExporter.js";
import { transformOpenAPIExpression } from "./jsonata/transforms.js";
import url, { URL } from "url";

describe("Exporter", () => {
    test.each([
        ["Pet Store", "../resources/examples/petstore.json"],
        ["Mittwald Public API", "../resources/examples/mw-public.json"],
    ])("creates correct snapshots for '%s' example", async (name, testFile) => {
        const dirname = url.fileURLToPath(new URL(".", import.meta.url));
        const spec = await loadSpec(path.join(dirname, testFile));
        const exporter = new SpecExporter(transformOpenAPIExpression.evaluate(spec));

        expect(exporter.exportClient("Test", { reactHooks: true })).toMatchSnapshot();
        expect(exporter.exportRequestMockingFactory("Test", "TestClient")).toMatchSnapshot();
        expect(exporter.exportClient("Test", { optionalHeaders: ["x-access-token"] })).toMatchSnapshot();
    });
});
