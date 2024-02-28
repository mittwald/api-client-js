import { AsyncResource, reactUsePromise } from "../react/reactUsePromise.js";

type FnParameters = unknown[];
type AsyncFn<TResult, TParams extends FnParameters> = (
  ...args: TParams
) => Promise<TResult>;

export const provideReact = <TValue, TParams extends FnParameters>(
  loader: AsyncFn<TValue, TParams>,
) =>
  Object.assign(loader, {
    asResource: (...params: TParams) =>
      reactUsePromise.getAsyncResource(loader, params),
    use: (...params: TParams) =>
      reactUsePromise.getAsyncResource(loader, params).use(),
  }) as AsyncResourceVariant<TValue, TParams>;

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
