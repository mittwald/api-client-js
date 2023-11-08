export abstract class ReferenceModel {
  public readonly id: string;

  public constructor(id: string) {
    this.id = id;
  }

  public describe(): string {
    return `${this.constructor.name}@${this.id}`;
  }
}
