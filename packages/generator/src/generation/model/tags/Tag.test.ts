import { Tag } from "./Tag.js";

test("keeps the raw tag name", () => {
  expect(Tag.fromDoc({ name: "pet" }).name.raw).toBe("pet");
});

test("derives a TypeScript type name from the tag name", () => {
  expect(Tag.fromDoc({ name: "pet-store" }).name.tsType).toBe("PetStore");
});

test("keeps the description when present", () => {
  expect(
    Tag.fromDoc({ name: "pet", description: "About pets" }).description,
  ).toBe("About pets");
});

test("leaves the description undefined when absent", () => {
  expect(Tag.fromDoc({ name: "pet" }).description).toBeUndefined();
});
