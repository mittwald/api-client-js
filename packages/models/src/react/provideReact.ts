import { AsyncResource, reactUsePromise } from "./reactUsePromise.js";
import { AsyncReturnType } from "type-fest";
import { hash } from "object-code";
import { reactProvisionContext } from "./reactProvisionContext.js";
import { joinedId } from "../lib/joinedId.js";

type AsyncFn = (...args: any[]) => Promise<unknown>;

type ReactProvisionDep = string | number;
type LazyReactProvisionDep = () => ReactProvisionDep;
type ReactProvisionDeps = Array<ReactProvisionDep | LazyReactProvisionDep>;

export const provideReact = <T extends AsyncFn>(
  loader: T,
  dependencies: ReactProvisionDeps = [],
) => {
  type P = Parameters<T>;
  const loaderHash = hash(loader);
  let cachedProvisionId: string | undefined;

  const getAsyncResource = (params: P) => {
    const provisionId =
      cachedProvisionId ??
      joinedId(
        loaderHash,
        ...dependencies
          .map((d) => (typeof d === "function" ? d() : d))
          .map((d) => hash(d)),
      );

    cachedProvisionId = provisionId;

    const contextId = joinedId(provisionId, hash(params));

    const loaderWithContext = reactProvisionContext.bind(
      {
        id: contextId,
      },
      loader,
    );

    return reactUsePromise.getAsyncResource(loaderWithContext, params, {
      loaderId: provisionId,
      tags: [contextId],
    });
  };

  return Object.assign(loader, {
    asResource: (...params: P) => getAsyncResource(params),
    use: (...params: P) => getAsyncResource(params).use(),
  }) as AsyncResourceVariant<T>;
};

export type AsyncResourceVariant<T extends AsyncFn> = T & {
  asResource: (...params: Parameters<T>) => AsyncResource<AsyncReturnType<T>>;
  use: (...params: Parameters<T>) => AsyncReturnType<T>;
};
