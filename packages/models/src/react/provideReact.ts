import { AsyncResource, reactUsePromise } from "./reactUsePromise.js";
import { AsyncReturnType } from "type-fest";
import { hash } from "object-code";
import { reactProvisionContext } from "./reactProvisionContext.js";

type AsyncFn = (...args: any[]) => Promise<unknown>;

export const provideReact = <T extends AsyncFn>(
  loader: T,
  dependencies?: string[],
) => {
  type P = Parameters<T>;
  const provisionId = String(
    hash({
      loader,
      dependencies,
    }),
  );

  const getAsyncResource = (params: P) => {
    const paramsHash = params && params.length > 0 ? String(hash(params)) : "";
    const contextId = provisionId + paramsHash;

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
  asResource: (...params: Parameters<T>) => AsyncResource<ReturnType<T>>;
  use: (...params: Parameters<T>) => AsyncReturnType<T>;
};
