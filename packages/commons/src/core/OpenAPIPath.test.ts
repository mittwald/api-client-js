import OpenAPIPath from "./OpenAPIPath.js";

describe("buildUrl", () => {
  test("strips the leading slash so the path stays relative to the baseURL", () => {
    expect(new OpenAPIPath("/v2/projects").buildUrl()).toBe("v2/projects");
  });

  test("keeps a path that has no leading slash untouched", () => {
    expect(new OpenAPIPath("v2/projects").buildUrl()).toBe("v2/projects");
  });

  test("substitutes a single path parameter", () => {
    const path = new OpenAPIPath("/v2/projects/{projectId}", {
      projectId: "abc",
    });

    expect(path.buildUrl()).toBe("v2/projects/abc");
  });

  test("substitutes multiple path parameters", () => {
    const path = new OpenAPIPath("/v2/projects/{projectId}/apps/{appId}", {
      projectId: "abc",
      appId: "def",
    });

    expect(path.buildUrl()).toBe("v2/projects/abc/apps/def");
  });

  test("stringifies numeric path parameters", () => {
    const path = new OpenAPIPath("/v2/items/{index}", { index: 42 });

    expect(path.buildUrl()).toBe("v2/items/42");
  });

  test("URL-encodes path parameter values", () => {
    const path = new OpenAPIPath("/v2/domains/{hostname}", {
      hostname: "foo bar/baz?x=1",
    });

    expect(path.buildUrl()).toBe("v2/domains/foo%20bar%2Fbaz%3Fx%3D1");
  });

  test("leaves placeholders in place when no parameters are given", () => {
    expect(new OpenAPIPath("/v2/projects/{projectId}").buildUrl()).toBe(
      "v2/projects/{projectId}",
    );
  });

  test("leaves unrelated placeholders in place", () => {
    const path = new OpenAPIPath("/v2/projects/{projectId}/apps/{appId}", {
      projectId: "abc",
    });

    expect(path.buildUrl()).toBe("v2/projects/abc/apps/{appId}");
  });

  test("only replaces the first occurrence of a repeated placeholder", () => {
    const path = new OpenAPIPath("/v2/{id}/{id}", { id: "abc" });

    expect(path.buildUrl()).toBe("v2/abc/{id}");
  });

  test("does not mutate the raw path between calls", () => {
    const path = new OpenAPIPath("/v2/projects/{projectId}", {
      projectId: "abc",
    });

    expect(path.buildUrl()).toBe(path.buildUrl());
  });
});
