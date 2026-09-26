import axios, { AxiosInstance } from "axios";
import nock from "nock";
import ApiClientBase from "../core/ApiClientBase.js";
import { withEventConsistencyHandling } from "./consistencyHandling.js";

const baseURL = "http://consistency.example.com";

class TestClient extends ApiClientBase {
  public createProject = this.requestFunctionFactory({
    path: "/v2/projects",
    method: "POST",
    operationId: "createProject",
  });

  public getProjects = this.requestFunctionFactory({
    path: "/v2/projects",
    method: "GET",
    operationId: "getProjects",
  });
}

let received: Record<string, string | string[]>[] = [];

/** Registers an interceptor and records the headers each call sends. */
const record = (scope: nock.Scope): nock.Scope => {
  scope.on("request", (req) => received.push(req.headers));
  return scope;
};

const ifEventReached = (index: number): string | string[] | undefined =>
  received[index]?.["if-event-reached"];

const createInstance = (): AxiosInstance =>
  withEventConsistencyHandling(axios.create({ baseURL }));

beforeEach(() => {
  received = [];
});

afterEach(() => {
  nock.cleanAll();
});

test("sends no if-event-reached header before any mutation happened", async () => {
  record(nock(baseURL).get("/v2/projects").reply(200, {}));

  await createInstance().get("/v2/projects");

  expect(ifEventReached(0)).toBeUndefined();
});

test("replays the etag of a mutation on the next read request", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .get("/v2/projects")
      .reply(200, {}),
  );
  const instance = createInstance();

  await instance.post("/v2/projects", {});
  await instance.get("/v2/projects");

  expect(ifEventReached(0)).toBeUndefined();
  expect(ifEventReached(1)).toBe("event-1");
});

test("keeps replaying the most recent etag", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .patch("/v2/projects")
      .reply(200, {}, { etag: "event-2" })
      .get("/v2/projects")
      .reply(200, {}),
  );
  const instance = createInstance();

  await instance.post("/v2/projects", {});
  await instance.patch("/v2/projects", {});
  await instance.get("/v2/projects");

  expect(ifEventReached(2)).toBe("event-2");
});

test("does not send if-event-reached on mutating requests", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .delete("/v2/projects")
      .reply(204),
  );
  const instance = createInstance();

  await instance.post("/v2/projects", {});
  await instance.delete("/v2/projects");

  expect(ifEventReached(1)).toBeUndefined();
});

test("does not overwrite an if-event-reached header set by the caller", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .get("/v2/projects")
      .reply(200, {}),
  );
  const instance = createInstance();

  await instance.post("/v2/projects", {});
  await instance.get("/v2/projects", {
    headers: { "if-event-reached": "caller-event" },
  });

  expect(ifEventReached(1)).toBe("caller-event");
});

test("ignores the etag of a non-mutating response", async () => {
  record(
    nock(baseURL)
      .get("/v2/projects")
      .reply(200, {}, { etag: "event-1" })
      .get("/v2/projects")
      .reply(200, {}),
  );
  const instance = createInstance();

  await instance.get("/v2/projects");
  await instance.get("/v2/projects");

  expect(ifEventReached(1)).toBeUndefined();
});

test("ignores a mutating response without an etag", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {})
      .get("/v2/projects")
      .reply(200, {}),
  );
  const instance = createInstance();

  await instance.post("/v2/projects", {});
  await instance.get("/v2/projects");

  expect(ifEventReached(1)).toBeUndefined();
});

test("tracks event ids per axios instance", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .get("/v2/projects")
      .reply(200, {}),
  );

  await createInstance().post("/v2/projects", {});
  await createInstance().get("/v2/projects");

  expect(ifEventReached(1)).toBeUndefined();
});

test("configures the axios instance of an ApiClientBase and returns the client", async () => {
  record(
    nock(baseURL)
      .post("/v2/projects")
      .reply(201, {}, { etag: "event-1" })
      .get("/v2/projects")
      .reply(200, {}),
  );
  const client = new TestClient(axios.create({ baseURL }));

  const returned = withEventConsistencyHandling(client);
  expect(returned).toBe(client);

  await client.createProject();
  await client.getProjects();

  expect(ifEventReached(1)).toBe("event-1");
});
