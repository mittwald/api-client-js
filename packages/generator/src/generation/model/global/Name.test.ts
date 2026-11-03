import { Name } from "./Name.js";

const parentName = new Name("Parent");

test("TS variable name is camelcased", () => {
  const testName = new Name("ChildName");
  expect(testName.tsVar).toEqual("childName");
});

test("A TS type suffix keeps the raw name and the parent", () => {
  const testName = new Name("/dns-zones", parentName).withTsTypeSuffix("Old");
  expect(testName.raw).toEqual("/dns-zones");
  expect(testName.tsType).toEqual("DnsZonesOld");
  expect(testName.tsVar).toEqual("dnsZonesOld");
  expect(testName.tsTypeWithNamespace).toEqual("Parent.DnsZonesOld");
});

test("Namespaced name includes parent name", () => {
  const testName = new Name("ChildName", parentName);
  expect(testName.tsTypeWithNamespace).toEqual("Parent.ChildName");
});
