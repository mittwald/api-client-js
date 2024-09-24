export class ListDataModel<TItem> {
  public readonly items: readonly TItem[];
  public readonly totalCount: number;

  public constructor(items: TItem[], totalCount: number) {
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
