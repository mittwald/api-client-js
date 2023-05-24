import { splitRefNamespaces } from "./splitRefNamespaces.js";

test.each([
  ["#/foo/bar", ["foo", "bar"]],
  ["foo", ["foo"]],
  ["#/", []],
])("splitRefNamespaces works for test %#", (input, expected) => {
  const result = splitRefNamespaces(input);
  expect(result).toEqual(expect.arrayContaining(expected));
  expect(result.length).toEqual(expected.length);
});
