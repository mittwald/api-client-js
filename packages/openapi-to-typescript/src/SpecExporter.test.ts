import * as path from "path";
import { loadSpec } from "./loadSpec";
import { SpecExporter } from "./SpecExporter";
import { transformOpenAPIExpression } from "./jsonata/transforms";

describe("Exporter", () => {
    test.each([
        ["Pet Store", "../resources/examples/petstore.json"],
        ["Mittwald Public API", "../resources/examples/mw-public.json"],
    ])("creates correct snapshots for '%s' example", async (name, testFile) => {
        const spec = await loadSpec(path.join(__dirname, testFile));
        const exporter = new SpecExporter(transformOpenAPIExpression.evaluate(spec));
        expect(exporter.exportClient("Test", true)).toMatchSnapshot();
        expect(exporter.exportRequestMockingFactory("Test", "TestClient")).toMatchSnapshot();
        expect(exporter.exportSpec()).toMatchSnapshot();
    });
});
