import { transformOpenAPIExpression } from "./transforms.js";
import * as path from "path";
import { loadSpec } from "../loadSpec.js";
import url, { URL } from "url";

describe("transformOpenAPIExpression.evaluate()", () => {
    test.each([
        ["Pet Store", "../../resources/examples/petstore.json"],
        ["Mittwald Public API", "../../resources/examples/mw-public.json"],
    ])("creates correct snapshots for '%s' example", async (name, testFile) => {
        const dirname = url.fileURLToPath(new URL(".", import.meta.url));
        const spec = await loadSpec(path.join(dirname, testFile));
        expect(transformOpenAPIExpression.evaluate(spec)).toMatchSnapshot();
    });
});
