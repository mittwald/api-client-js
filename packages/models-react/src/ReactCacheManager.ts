import { getQueryContext } from "@mittwald/react-ghostmaker";
import type { Query, QueryClient } from "@tanstack/react-query";
import { Minimatch } from "minimatch";

type PathInvalidationHandler = (path: string) => void;

export class ReactCacheManager {
  public readonly queryClient: QueryClient;

  private readonly matcherCache = new Map<string, Minimatch>();

  private readonly idsOfPath = new Map<string, Set<string>>();
  private readonly pathsOfId = new Map<string, Set<string>>();
  private readonly onPathInvalidatedHandler =
    new Set<PathInvalidationHandler>();

  public constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
    this.subscribeToCacheEvents();
  }

  private subscribeToCacheEvents() {
    this.queryClient.getQueryCache().subscribe((event) => {
      if (event.type !== "updated") {
        return;
      }
      const actionType = event.action.type;
      if (actionType === "invalidate" || actionType === "fetch") {
        this.handleQueryInvalidated(event.query);
      }
    });
  }

  private handleQueryInvalidated(query: Query) {
    this.pathsOfId
      .get(JSON.stringify(query.queryKey))
      ?.forEach((url) => this.callPathInvalidationHandlers(url));
  }

  private callPathInvalidationHandlers(path: string) {
    this.onPathInvalidatedHandler.forEach((handler) => handler(path));
  }

  public onPathInvalidated(handler: PathInvalidationHandler) {
    this.onPathInvalidatedHandler.add(handler);
    return () => {
      this.onPathInvalidatedHandler.delete(handler);
    };
  }

  public refresh(path?: string) {
    if (path) {
      const minimatch = this.matcherCache.get(path) ?? new Minimatch(path);
      this.matcherCache.set(path, minimatch);

      this.idsOfPath.forEach((ids, path) => {
        if (minimatch.match(path)) {
          ids.forEach((id) => {
            if (id.includes("react-ghostmaker")) {
              this.queryClient.invalidateQueries({
                queryKey: JSON.parse(id),
              });
            }
          });
        }
      });
    } else {
      this.queryClient.getQueryCache().clear();
    }
  }

  public registerPath(path: string) {
    const queryContext = getQueryContext();

    const queryId = queryContext?.queryKey
      ? JSON.stringify(queryContext.queryKey)
      : undefined;

    if (!queryId) {
      return;
    }

    const thisUrlIds = this.idsOfPath.get(path) ?? new Set<string>();
    thisUrlIds.add(queryId);
    this.idsOfPath.set(path, thisUrlIds);

    const thisPathsOfId = this.pathsOfId.get(queryId) ?? new Set<string>();
    thisPathsOfId.add(path);
    this.pathsOfId.set(queryId, thisPathsOfId);
  }
}
