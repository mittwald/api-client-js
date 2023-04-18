import { transformOpenAPIExpression } from "./transforms";
import * as path from "path";
import { loadSpec } from "../loadSpec";

import * as url from "url";
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

describe("transformOpenAPIExpression.evaluate()", () => {
  test.each([["Pet Store", "../../resources/examples/petstore.json"]])(
    "creates correct snapshots for '%s' example",
    async (name, testFile) => {
      const spec = await loadSpec(path.join(dirname, testFile));
      expect(await transformOpenAPIExpression.evaluate(spec)).toMatchSnapshot();
    },
  );
});
