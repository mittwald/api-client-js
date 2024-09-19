import { hash } from "object-code";

export abstract class ListQueryModel<TQuery> {
  protected readonly query: TQuery;
  public readonly queryId: string;

  public constructor(query: TQuery) {
    this.query = query;
    this.queryId = hash(query).toString();
  }
}
