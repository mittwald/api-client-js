import { AsyncResource, reactUsePromise } from "../react/reactUsePromise.js";

type FnParameters = unknown[];
type AsyncFn<TResult, TParams extends FnParameters> = (
  ...args: TParams
) => Promise<TResult>;

export const provideReact = <TValue, TParams extends FnParameters>(
  loader: AsyncFn<TValue, TParams>,
  dependencies?: string[],
) => {
  const getAsyncResource = (params: TParams) =>
    reactUsePromise.getAsyncResource(loader, params, {
      // "stringify" dependencies to be used as loaderId
      // see https://github.com/mittwald/react-use-promise?tab=readme-ov-file#loaderid
      loaderId: dependencies ? dependencies.join("|") : undefined,
    });

  return Object.assign(loader, {
    asResource: (...params: TParams) => getAsyncResource(params),
    use: (...params: TParams) => getAsyncResource(params).use(),
  }) as AsyncResourceVariant<TValue, TParams>;
};

export type AsyncResourceVariant<
  TValue,
  TParams extends FnParameters,
> = TParams extends null
  ? AsyncFn<TValue, TParams> & {
      asResource: () => AsyncResource<TValue>;
    }
  : AsyncFn<TValue, TParams> & {
      asResource: (...params: TParams) => AsyncResource<TValue>;
      use: (...params: TParams) => TValue;
    };
