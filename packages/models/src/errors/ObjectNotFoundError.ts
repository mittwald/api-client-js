export default class ObjectNotFoundError extends Error {
  public constructor(type: string, refName: string) {
    super(`${type}@${refName} not found`);
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
  }
}
