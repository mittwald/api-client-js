import { refNameToTSName } from "./refNameToTSName.js";

test.each([
  ["#/foo/bar", "Test.Foo.Bar"],
  ["foo", "Test.Foo"],
  ["#/", "Test"],
])("splitRefNamespaces works for test %#", (input, expected) => {
  const result = refNameToTSName("Test", input);
  expect(result).toEqual(expected);
});
