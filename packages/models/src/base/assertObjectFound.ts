import ObjectNotFoundError from "../errors/ObjectNotFoundError.js";
import { Constructor } from "type-fest";
import BaseModel from "./BaseModel.js";

export default function assertObjectFound<T>(
  obj: T | undefined,
  theClass: Constructor<unknown>,
  refIdOrObject: string | BaseModel,
): asserts obj is T {
  if (obj === undefined) {
    const refName =
      typeof refIdOrObject === "string"
        ? refIdOrObject
        : refIdOrObject.toString();

    throw new ObjectNotFoundError(theClass.name, refName);
  }
}
