import type { Class } from "type-fest";

import { getModelName } from "@mittwald/react-ghostmaker/model";

export class ObjectNotFoundError extends Error {
  public readonly refName: string;
  public readonly type: string;

  public constructor(type: Class<unknown>, refName: string) {
    const typeString =
      typeof type === "string" ? type : (getModelName(type) ?? "UnknownType");

    super(`${typeString}@${refName} not found`);
    this.name = "ObjectNotFoundError";
    this.type = typeString;
    this.refName = refName;

    Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
  }
}

export default ObjectNotFoundError;
