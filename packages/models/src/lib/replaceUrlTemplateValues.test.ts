import { expect, test } from "vitest";

import { replaceUrlTemplateValues } from "./replaceUrlTemplateValues.js";

test("Does not replace values with keys with same starting substring", () => {
  expect(
    replaceUrlTemplateValues("http://test.de?id=:samePrefixAndMore", {
      samePrefixAndMore: "bar",
      samePrefix: "foo",
    }),
  ).toBe("http://test.de?id=bar");
});
