import { componentRefsToCustomTypes } from "./componentRefsToCustomTypes.js";

test.each([
  [
    {
      $ref: "#/components/foo/bar",
    },
    {
      type: "object",
      tsType: "Test.Components.Foo.Bar",
    },
  ],
  [
    {
      $ref: "#/no/component",
    },
    {
      $ref: "#/no/component",
    },
  ],
  [
    {
      noRef: "No fun",
    },
    {
      noRef: "No fun",
    },
  ],
  [
    {
      nested: {
        $ref: "#/components/foo/bar",
      },
    },
    {
      nested: {
        type: "object",
        tsType: "Test.Components.Foo.Bar",
      },
    },
  ],
  [
    {
      inArray: [{ $ref: "#/components/foo/bar" }, { noRef: "No fun" }],
    },
    {
      inArray: [
        {
          type: "object",
          tsType: "Test.Components.Foo.Bar",
        },
        { noRef: "No fun" },
      ],
    },
  ],
])("componentRefsToCustomTypes works for test %#", (input, expected) => {
  const result = componentRefsToCustomTypes("test", input);
  expect(result).toMatchObject(expected);
});
