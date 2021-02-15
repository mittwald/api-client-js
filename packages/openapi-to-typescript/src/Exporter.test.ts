import * as path from "path";
import { loadSpec } from "./loadSpec";
import { Exporter } from "./Exporter";
import { transformOpenAPIExpression } from "./jsonata/transforms";

describe("Exporter", () => {
    test("creates correct snapshots for Pet Store example", async () => {
        const spec = await loadSpec(path.join(__dirname, "../resources/examples/petstore.json"));
        const exporter = new Exporter(transformOpenAPIExpression.evaluate(spec));
        expect(exporter.exportClient("Test", true)).toMatchSnapshot();
        expect(exporter.exportRequestMockingFactory("Test", "TestClient")).toMatchSnapshot();
    });
});
