import { transformOpenAPIExpression } from "./transforms";
import * as path from "path";
import { loadSpec } from "../loadSpec";

describe("transformOpenAPIExpression.evaluate()", () => {
  test.each([
    ["Pet Store", "../../resources/examples/petstore.json"],
    ["Mittwald Public API", "../../resources/examples/mw-public.json"],
  ])("creates correct snapshots for '%s' example", async (name, testFile) => {
    const spec = await loadSpec(path.join(__dirname, testFile));
    expect(transformOpenAPIExpression.evaluate(spec)).toMatchSnapshot();
  });
});
