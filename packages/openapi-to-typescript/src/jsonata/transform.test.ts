import { transformOpenAPIExpression } from "./transforms";
import * as path from "path";
import { loadSpec } from "../loadSpec";

describe("transformOpenAPIExpression.evaluate()", () => {
    test("creates correct snapshots for Pet Store example", async () => {
        const spec = await loadSpec(path.join(__dirname, "../testData/petstore.json"));
        expect(transformOpenAPIExpression.evaluate(spec)).toMatchSnapshot();
    });
});
