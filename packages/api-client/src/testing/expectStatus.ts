import assertStatus from "../types/assertStatus";
import { Response } from "../http/Client";

export function expectStatus<T extends Partial<Response>, S extends T["status"]>(
    response: T,
    status: S,
): asserts response is T & { status: S } {
    expect(response.status).toBe(status);
    assertStatus(response, status);
}

export default expectStatus;
