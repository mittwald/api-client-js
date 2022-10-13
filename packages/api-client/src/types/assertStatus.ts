import { Response } from "../http/Client";
import UnexpectedResponseError from "../UnexpectedResponseError";

export function assertStatus<T extends Partial<Response>, S extends T["status"]>(
    response: T,
    status: S,
): asserts response is T & { status: S } {
    if (response.status !== status) {
        throw new UnexpectedResponseError(response);
    }
}

export default assertStatus;
