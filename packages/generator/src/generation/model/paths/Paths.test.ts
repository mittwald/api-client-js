import { OpenAPIV3 } from "openapi-types";
import { CodeGenerationModel } from "../CodeGenerationModel.js";

const ok = { "200": { description: "OK" } };

const operation = (
  operationId: string | undefined,
  extra: Partial<OpenAPIV3.OperationObject> = {},
): OpenAPIV3.OperationObject => ({
  ...(operationId ? { operationId } : {}),
  tags: ["app"],
  summary: `Summary of ${operationId ?? "an unnamed operation"}`,
  responses: ok,
  ...extra,
});

const makeDoc = (paths: OpenAPIV3.PathsObject): OpenAPIV3.Document => ({
  openapi: "3.0.3",
  info: { title: "Test API", version: "1.0.0" },
  tags: [{ name: "app" }],
  paths,
});

const buildModel = (paths: OpenAPIV3.PathsObject) =>
  CodeGenerationModel.fromDoc("Api", makeDoc(paths));

/** Collapses whitespace so assertions do not depend on generated indentation. */
const flat = (s: string) => s.replace(/\s+/g, " ");

/** Matches an `@deprecated` JSDoc tag directly in front of `declaration`. */
const deprecatedBefore = (declaration: string): RegExp =>
  new RegExp(
    `@deprecated[^;{}]*?\\*/\\s*${declaration.replace(/[$?(]/g, "\\$&")}`,
  );

describe("deprecated operations", () => {
  const model = buildModel({
    "/apps": {
      get: operation("app-list-apps"),
      post: operation("app-create-app", { deprecated: true }),
    },
  });

  test("are emitted as descriptors with an @deprecated tag", () => {
    expect(model.paths.compileDescriptors()).toMatch(
      deprecatedBefore("export const appCreateApp:"),
    );
  });

  test("are emitted as client methods with an @deprecated tag", () => {
    expect(model.paths.compileClient()).toMatch(
      deprecatedBefore("createApp: this.requestFunctionFactory("),
    );
  });

  test("keep their summary next to the @deprecated tag", () => {
    expect(flat(model.paths.compileClient())).toMatch(
      /Summary of app-create-app \* @deprecated \*\//,
    );
  });

  test("mark their types namespaces as deprecated", async () => {
    const types = await model.compileTypes({ rootNamespace: "Api" });

    expect(types).toMatch(deprecatedBefore("namespace AppCreateApp {"));
    expect(types).toMatch(deprecatedBefore("namespace Post {"));
  });

  test("leave non-deprecated operations without an @deprecated tag", () => {
    expect(model.paths.compileClient()).not.toMatch(
      deprecatedBefore("listApps: this.requestFunctionFactory("),
    );
  });
});

test("deprecated GET operations are emitted to the React client with an @deprecated tag", () => {
  const model = buildModel({
    "/apps": { get: operation("app-list-apps", { deprecated: true }) },
  });

  expect(model.paths.compileReactClient()).toMatch(
    deprecatedBefore("listApps: new ApiCallAsyncResourceFactory("),
  );
});

describe("path namespace collisions", () => {
  const pathNamespaces = (model: CodeGenerationModel) =>
    model.paths.paths.map((p) => p.name.tsType);

  test("a deprecated-only path gets a suffix when it collides with an active path", () => {
    const model = buildModel({
      "/apps/{appId}/systemSoftware": {
        get: operation(undefined, { deprecated: true }),
      },
      "/apps/{appId}/system-software": { get: operation("app-get-software") },
    });

    expect(pathNamespaces(model)).toEqual([
      "AppsAppIdSystemSoftwareDeprecated",
      "AppsAppIdSystemSoftware",
    ]);
  });

  test("the suffixed path keeps its URL", () => {
    const model = buildModel({
      "/apps/{appId}/systemSoftware": {
        get: operation(undefined, { deprecated: true }),
      },
      "/apps/{appId}/system-software": { get: operation("app-get-software") },
    });

    expect(flat(model.paths.compileDescriptors())).toContain(
      'path: "/apps/{appId}/systemSoftware"',
    );
  });

  test("colliding deprecated-only paths are numbered in document order", () => {
    const model = buildModel({
      "/dns/zones": { get: operation("dns-list-a", { deprecated: true }) },
      "/dns-zones": { get: operation("dns-list-b", { deprecated: true }) },
      "/dns_zones": { get: operation("dns-list-c", { deprecated: true }) },
    });

    expect(pathNamespaces(model)).toEqual([
      "DnsZones",
      "DnsZonesDeprecated",
      "DnsZonesDeprecated2",
    ]);
  });

  test("colliding active paths fail the generation", () => {
    expect(() =>
      buildModel({
        "/dns/zones": { get: operation("dns-list-a") },
        "/dns-zones": { get: operation("dns-list-b") },
      }),
    ).toThrow(/"\/dns\/zones" and "\/dns-zones".*DnsZones/);
  });

  test("the generated types compile without duplicate namespaces", async () => {
    const model = buildModel({
      "/apps/{appId}/systemSoftware": {
        get: operation(undefined, { deprecated: true }),
      },
      "/apps/{appId}/system-software": { get: operation("app-get-software") },
    });
    const types = await model.compileTypes({ rootNamespace: "Api" });

    expect(types.match(/namespace AppsAppIdSystemSoftware\b/g)).toHaveLength(1);
    expect(
      types.match(/namespace AppsAppIdSystemSoftwareDeprecated\b/g),
    ).toHaveLength(1);
  });
});
