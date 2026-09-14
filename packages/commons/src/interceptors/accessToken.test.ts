import axios, { AxiosInstance } from "axios";
import nock from "nock";
import ApiClientBase from "../core/ApiClientBase.js";
import withAccessToken from "./accessToken.js";

const baseURL = "http://accesstoken.example.com";

class TestClient extends ApiClientBase {
  public getProjects = this.requestFunctionFactory({
    path: "/v2/projects",
    method: "GET",
    operationId: "getProjects",
  });
}

/** Performs a request and returns the headers the server actually received. */
const capturedHeaders = async (
  run: () => Promise<unknown>,
): Promise<Record<string, string | string[]>> => {
  const received: Record<string, string | string[]>[] = [];
  const scope = nock(baseURL).get("/v2/projects").reply(200, {});
  scope.on("request", (req) => received.push(req.headers));

  await run();
  scope.done();

  return received[0];
};

const createInstance = (): AxiosInstance => axios.create({ baseURL });

afterEach(() => {
  nock.cleanAll();
});

test("sets the default x-access-token header", async () => {
  const instance = withAccessToken(createInstance(), "secret-token");

  const headers = await capturedHeaders(() => instance.get("/v2/projects"));

  expect(headers["x-access-token"]).toBe("secret-token");
});

test("uses a custom header name when given", async () => {
  const instance = withAccessToken(
    createInstance(),
    "secret-token",
    "x-my-token",
  );

  const headers = await capturedHeaders(() => instance.get("/v2/projects"));

  expect(headers["x-my-token"]).toBe("secret-token");
  expect(headers["x-access-token"]).toBeUndefined();
});

test("does not overwrite a token that the caller set per request", async () => {
  const instance = withAccessToken(createInstance(), "secret-token");

  const headers = await capturedHeaders(() =>
    instance.get("/v2/projects", {
      headers: { "x-access-token": "per-request-token" },
    }),
  );

  expect(headers["x-access-token"]).toBe("per-request-token");
});

test("sends no token when the token is undefined", async () => {
  const instance = withAccessToken(createInstance(), undefined);

  const headers = await capturedHeaders(() => instance.get("/v2/projects"));

  expect(headers["x-access-token"]).toBeUndefined();
});

test("returns the given axios instance unchanged", () => {
  const instance = createInstance();

  expect(withAccessToken(instance, "secret-token")).toBe(instance);
});

test("configures the axios instance of an ApiClientBase and returns the client", async () => {
  const client = new TestClient(createInstance());

  const returned = withAccessToken(client, "secret-token");

  expect(returned).toBe(client);

  const headers = await capturedHeaders(() => client.getProjects());
  expect(headers["x-access-token"]).toBe("secret-token");
});
