import { AxiosHeaders } from "axios";
import expectStatus from "./expectStatus.js";
import { Response } from "../types/Response.js";

const makeResponse = (status: number): Response =>
  ({
    status,
    statusText: "",
    data: {},
    headers: new AxiosHeaders(),
    config: { headers: new AxiosHeaders() },
    request: { some: "request" },
    mediaType: "application/json",
  }) as unknown as Response;

test("passes for a matching status", () => {
  expect(() => expectStatus(makeResponse(200), 200)).not.toThrow();
});

test("fails the surrounding expectation for a mismatching status", () => {
  expect(() => expectStatus(makeResponse(404), 200)).toThrow();
});

test("reports the mismatch as a jest assertion, not an ApiClientError", () => {
  expect(() => expectStatus(makeResponse(404), 200)).toThrow(
    expect.objectContaining({ matcherResult: expect.anything() }),
  );
});

test("narrows the response type to the asserted status", () => {
  const response = makeResponse(204) as Response<unknown, 200 | 204>;

  expectStatus(response, 204);

  const status: 204 = response.status;
  expect(status).toBe(204);
});
