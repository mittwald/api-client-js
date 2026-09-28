import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { hash } from "object-code";

import { ReferenceModel } from "./ReferenceModel.js";
import { joinedId } from "../../lib/joinedId.js";

interface Options {
  dependencies?: string[];
}

/**
 * Reduce any model reference in a query to its id before hashing, so a field
 * typed `Model | string` yields the same `queryId` whether the caller passes a
 * model (a reference or a loaded model) or the bare id. Without this, hashing a
 * loaded model would key the query on its whole payload instead of its
 * identity. Shallow by design: query model-references are top-level fields.
 */
const normalizeQueryForHash = (query: unknown): unknown => {
  if (query === null || typeof query !== "object" || Array.isArray(query)) {
    return query;
  }
  return Object.fromEntries(
    Object.entries(query as Record<string, unknown>).map(([key, value]) => [
      key,
      value instanceof ReferenceModel ? value.id : value,
    ]),
  );
};

@GhostMakerModel({
  getId: (model) => model.queryId,
})
export abstract class ListQueryModel<TQuery> {
  public readonly queryId: string;
  protected readonly query: TQuery;

  public constructor(query: TQuery, opts: Options = {}) {
    const { dependencies = [] } = opts;
    this.query = query;
    this.queryId = joinedId(
      ...dependencies,
      hash(normalizeQueryForHash(query)),
    );
  }

  /**
   * Materialize the query into its list result (which always carries a
   * `totalCount`). Implemented per model; the optional request config is
   * threaded through to the behavior where the model supports it.
   */
  public abstract execute(
    options?: AxiosRequestConfig,
  ): Promise<{ totalCount: number }>;

  /**
   * Resolve just the total number of matching items. The default runs the query
   * and reads `totalCount` off the result. A model may override this to
   * `refine({ limit: 1 })` first — fetching a single-item page instead of the
   * default one — but only where its query accepts a `limit` **and** the
   * endpoint reports the total independently of the page size (otherwise
   * `resolveTotalCount` would fall back to the page length and report `1`). Not
   * every limit-capable model overrides; the rest use this default.
   */
  public async getTotalCount(options?: AxiosRequestConfig): Promise<number> {
    const { totalCount } = await this.execute(options);
    return totalCount;
  }
}
