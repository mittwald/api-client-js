import { tsTypeName } from "./tsTypeName.js";

test.each([
  ["123Foo_Bar", "$123Foo_Bar"],
  ["123-foo-bar", "$123FooBar"],
  ["1-foo-2-3-bar", "$1Foo23Bar"],
  ["Foo_Bar", "Foo_Bar"],
  ["fooBar", "FooBar"],
  ["foo-bar", "FooBar"],
])("tsTypeName works for test %#", (input, expected) => {
  const result = tsTypeName(input);
  expect(result).toEqual(expected);
});
