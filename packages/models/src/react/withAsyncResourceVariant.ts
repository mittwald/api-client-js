import { reactUsePromise } from "./reactUsePromise.js";
import type { AsyncResource } from "@mittwald/react-use-promise";

type FnParameters = unknown[];
type AsyncFn<TResult, TParams extends FnParameters> = (
  ...args: TParams
) => Promise<TResult>;

export const withAsyncResourceVariant = <TValue, TParams extends FnParameters>(
  loader: AsyncFn<TValue, TParams>,
) =>
  Object.assign(loader, {
    asResource: (...params: TParams) =>
      reactUsePromise.getAsyncResource(loader, params),
    use: (...params: TParams) =>
      reactUsePromise.getAsyncResource(loader, params).watch({}),
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
