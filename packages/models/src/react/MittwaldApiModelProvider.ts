import React, { createElement, FC, PropsWithChildren } from "react";
import { setModule } from "./reactUsePromise.js";

let loadingPromise: Promise<void> | undefined = undefined;

export const MittwaldApiModelProvider: FC<PropsWithChildren> = (props) => {
  if (loadingPromise === undefined) {
    loadingPromise = import("@mittwald/react-use-promise").then((m) => {
      setModule(m);
    });

    throw loadingPromise;
  }

  return createElement(React.Fragment, undefined, props.children);
};
