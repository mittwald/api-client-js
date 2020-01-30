import { transformNamespaceName } from "./transform";

describe("transformNamespaceName()", () => {
    test("uses camelcase to convert names", () => {
        expect(transformNamespaceName("foo-bar")).toMatch("Foo_Bar");
        expect(transformNamespaceName("/teams/{teamID}/details")).toMatch("Teams_TeamId_Details");
    });
    test("prefixes $ if name starts with a number", () => {
        expect(transformNamespaceName("500")).toMatch("$500");
    });
});
