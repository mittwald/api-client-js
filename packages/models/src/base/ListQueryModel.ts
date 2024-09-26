import { hash } from "object-code";
import { joinedId } from "../lib/joinedId.js";

interface Options {
  dependencies?: string[];
}

export abstract class ListQueryModel<TQuery> {
  protected readonly query: TQuery;
  public readonly queryId: string;

  public constructor(query: TQuery, opts: Options = {}) {
    const { dependencies = [] } = opts;
    this.query = query;
    this.queryId = joinedId(hash(query), ...dependencies);
  }
}
