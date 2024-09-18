import { AsyncResource, reactUsePromise } from "./reactUsePromise.js";
import { AsyncReturnType } from "type-fest";

type AsyncFn = (...args: any[]) => Promise<unknown>;

export const provideReact = <T extends AsyncFn>(
  loader: T,
  dependencies?: string[],
) => {
  type P = Parameters<T>;

  const getAsyncResource = (params: P) =>
    reactUsePromise.getAsyncResource(loader, params, {
      // "stringify" dependencies to be used as loaderId
      // see https://github.com/mittwald/react-use-promise?tab=readme-ov-file#loaderid
      loaderId: dependencies ? dependencies.join("|") : undefined,
    });

  return Object.assign(loader, {
    asResource: (...params: P) => getAsyncResource(params),
    use: (...params: P) => getAsyncResource(params).use(),
  }) as AsyncResourceVariant<T>;
};

export type AsyncResourceVariant<T extends AsyncFn> = T & {
  asResource: (...params: Parameters<T>) => AsyncResource<ReturnType<T>>;
  use: (...params: Parameters<T>) => AsyncReturnType<T>;
};
