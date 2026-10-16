import type { Class } from "type-fest";

import type { ReferenceModel } from "../models/ReferenceModel.js";

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";

export default function assertObjectFound<T>(
  obj: T | undefined,
  type: Class<unknown>,
  refIdOrObject: ReferenceModel | string,
): asserts obj is T {
  if (obj === undefined) {
    const refName =
      typeof refIdOrObject === "string"
        ? refIdOrObject
        : refIdOrObject.toString();

    throw new ObjectNotFoundError(type, refName);
  }
}
