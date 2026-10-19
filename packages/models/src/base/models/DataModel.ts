// todo: fix deep freeze
export class DataModel<T> {
  public readonly data: T;

  public constructor(data: T) {
    this.data = data;
  }
}
