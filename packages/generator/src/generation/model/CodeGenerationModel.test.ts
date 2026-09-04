import { jest } from "@jest/globals";
import { CodeGenerationModel } from "./CodeGenerationModel.js";
import { makePetstoreDoc } from "./__fixtures__/petstore.js";
import { OpenAPIV3 } from "openapi-types";

const buildModel = (doc: OpenAPIV3.Document = makePetstoreDoc()) =>
  CodeGenerationModel.fromDoc("PetstoreAPI", doc);

const compile = (doc: OpenAPIV3.Document = makePetstoreDoc()) =>
  buildModel(doc).compileTypes({ rootNamespace: "PetstoreAPI" });

/** Collapses whitespace so assertions do not depend on generated indentation. */
const flat = (s: string) => s.replace(/\s+/g, " ");

jest.setTimeout(60_000);

describe("model structure", () => {
  test("names the root namespace", () => {
    expect(buildModel().rootNamespace.tsType).toBe("PetstoreAPI");
  });

  test("keeps the source document", () => {
    const doc = makePetstoreDoc();

    expect(buildModel(doc).doc).toBe(doc);
  });

  test("builds a Tag per documented tag", () => {
    const { tags } = buildModel();

    expect(tags.map((t) => t.name.raw)).toEqual(["pet", "store"]);
    expect(tags[0].description).toBe("Everything about pets");
    expect(tags[1].description).toBeUndefined();
  });

  test("tolerates a document without tags", () => {
    const model = buildModel({ ...makePetstoreDoc(), tags: undefined });

    expect(model.tags).toEqual([]);
  });
});

describe("compiled types", () => {
  let types: string;

  beforeAll(async () => {
    types = await compile();
  });

  test("wraps everything in the root namespace", () => {
    expect(types).toContain("export declare module PetstoreAPI {");
  });

  test("imports the descriptors and the commons helper types", () => {
    expect(types).toContain('import * as descriptors from "./descriptors.js"');
    expect(flat(types)).toContain(
      'InferredRequestData, InferredResponseData, HttpStatus } from "@mittwald/api-client-commons"',
    );
  });

  test("declares an Operations namespace entry per operation", () => {
    for (const operation of ["ListPets", "CreatePet", "GetPet", "DeletePet"]) {
      expect(types).toContain(`namespace ${operation} {`);
    }
  });

  test("wires operation request and response data to the descriptors", () => {
    expect(flat(types)).toContain(
      "type RequestData = InferredRequestData<typeof descriptors.listPets>;",
    );
    expect(flat(types)).toContain(
      "type ResponseData<TStatus extends HttpStatus = 200> = InferredResponseData<typeof descriptors.listPets, TStatus>;",
    );
  });

  test("compiles component schemas into interfaces", () => {
    expect(flat(types)).toContain(
      "export interface Pet { id: string; name: string; nickname?: string | null; tags?: PetstoreAPI.Components.Schemas.Tag[]; }",
    );
  });

  test("turns schema refs into fully namespaced type references", () => {
    expect(types).toContain("PetstoreAPI.Components.Schemas.Tag[]");
  });

  test("marks a nullable property as nullable", () => {
    expect(flat(types)).toContain("nickname?: string | null;");
  });

  test("keeps required properties required", () => {
    expect(flat(types)).toContain("export interface Tag { label: string; }");
  });

  test("compiles component parameters", () => {
    expect(flat(types)).toContain("export type PetId = string;");
  });

  test("compiles component responses through to the referenced schema", () => {
    expect(flat(types)).toContain(
      "export type ApplicationJson = PetstoreAPI.Components.Schemas.Error;",
    );
  });

  test("compiles the security scheme into a required header", () => {
    expect(flat(types)).toContain(
      'export interface AccessToken { "x-access-token": string; }',
    );
  });

  test("derives a path namespace name from the path template", () => {
    expect(types).toContain("namespace Pets {");
    expect(types).toContain("namespace PetsPetId {");
  });

  test("declares a namespace per HTTP method of a path", () => {
    expect(types).toContain("namespace Get {");
    expect(types).toContain("namespace Post {");
    expect(types).toContain("namespace Delete {");
  });

  test("splits operation parameters by location", () => {
    expect(flat(types)).toContain("export type Query = { limit?: number; };");
    expect(flat(types)).toContain(
      'export type Header = { "x-access-token": string; };',
    );
    expect(flat(types)).toContain(
      "export type Path = { petId: PetstoreAPI.Components.Parameters.PetId; };",
    );
  });

  test("emits an empty parameter type where a location has no parameters", () => {
    expect(flat(types)).toContain("export type Path = {};");
  });

  test("declares a namespace per response status", () => {
    expect(types).toContain("namespace $200 {");
    expect(types).toContain("namespace $201 {");
    expect(types).toContain("namespace $204 {");
    expect(types).toContain("namespace Default {");
  });

  test("types an inline array response through to the item schema", () => {
    expect(flat(types)).toContain(
      "export type ApplicationJson = PetstoreAPI.Components.Schemas.Pet[];",
    );
  });

  test("resolves a referenced request body to its component type", () => {
    expect(flat(types)).toContain(
      "export type RequestBody = PetstoreAPI.Components.RequestBodies.PetBody;",
    );
  });

  /**
   * `ResponseContentTypes.buildContentTypesFromReferenceObject` passes
   * `c.schema` — a `JSONSchema` _model instance_ — into `ResponseContent`,
   * whose parameter is a raw JSON schema object. The instance is then wrapped
   * in another `JSONSchema`, so nothing usable reaches
   * `json-schema-to-typescript` and it falls back to an index signature.
   * `c.schema.schemaObject` is what it should pass.
   *
   * Every error response in the real mittwald spec is a `$ref` to a component
   * response, so every error payload in the published client is untyped even
   * though `Components.Responses.*.ApplicationJson` is generated correctly.
   */
  test("loses the type of a response that references a component response", () => {
    expect(flat(types)).toContain(
      "export interface ApplicationJson { [k: string]: unknown; }",
    );
    expect(flat(types)).not.toContain(
      "export type ApplicationJson = PetstoreAPI.Components.Responses.NotFound.ApplicationJson;",
    );
  });

  /** Same root cause, reached through the request body component. */
  test("loses the type of a request body component that references a schema", () => {
    expect(flat(types)).toContain(
      "export interface PetBody { [k: string]: unknown; }",
    );
  });
});

describe("compiled descriptors", () => {
  let descriptors: string;

  beforeAll(() => {
    descriptors = buildModel().paths.compileDescriptors();
  });

  test("exports a descriptor per operation", () => {
    for (const operationId of [
      "listPets",
      "createPet",
      "getPet",
      "deletePet",
    ]) {
      expect(descriptors).toContain(operationId);
    }
  });

  test("records the path and method of each operation", () => {
    expect(flat(descriptors)).toContain('path: "/pets/{petId}"');
    expect(flat(descriptors)).toContain('method: "DELETE"');
    expect(flat(descriptors)).toContain('method: "GET"');
    expect(flat(descriptors)).toContain('method: "POST"');
  });

  test("records the response statuses and media types", () => {
    expect(flat(descriptors)).toContain('"application/json"');
    expect(flat(descriptors)).toContain('"default"');
  });
});

describe("optional headers", () => {
  test("makes a named header optional in the generated parameter type", async () => {
    const types = await buildModel().compileTypes({
      rootNamespace: "PetstoreAPI",
      optionalHeaders: ["x-access-token"],
    });

    expect(flat(types)).toContain(
      'export type Header = { "x-access-token"?: string; };',
    );
  });

  test("leaves the header required when it is not listed", async () => {
    const types = await compile();

    expect(flat(types)).toContain(
      'export type Header = { "x-access-token": string; };',
    );
  });
});
