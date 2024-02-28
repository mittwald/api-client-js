type ReactUsePromiseModule = typeof import("@mittwald/react-use-promise");

export type {
  AsyncResource,
  getAsyncResource,
} from "@mittwald/react-use-promise";

let module: ReactUsePromiseModule | undefined = undefined;

/** @internal */
export const reactUsePromise = new Proxy<ReactUsePromiseModule>(
  {} as ReactUsePromiseModule,
  {
    get: (_, prop) => {
      if (module === undefined) {
        // @todo Provide better error message
        throw new Error("ModelProvider not found");
      }

      if (prop in module) {
        return module[prop as keyof typeof module];
      }
    },
  },
);

/** @internal */
export const setModule = (theModule: ReactUsePromiseModule): void => {
  module = theModule;
};
