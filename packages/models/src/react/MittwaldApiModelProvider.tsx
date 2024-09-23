import { FC, PropsWithChildren, ReactNode } from "react";
import { usePromise } from "@mittwald/react-use-promise";
import { setModule } from "./reactUsePromise.js";

interface Props extends PropsWithChildren {
  fallback?: ReactNode;
}

export const MittwaldApiModelProvider: FC<Props> = (props) => {
  const { fallback, children } = props;

  const module = usePromise(
    () => import("@mittwald/react-use-promise").then(setModule),
    [],
    {
      useSuspense: false,
    },
  );

  if (!module.hasValue) {
    return fallback;
  }

  return children;
};
