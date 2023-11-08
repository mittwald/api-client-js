import { IngressTargetData } from "../IngressTarget/index.js";
import { IngressPath } from "./IngressPath.js";
import { IngressData, IngressDetailed } from "../Ingress/index.js";
import { IngressPathData } from "./types.js";

const ingressData: Partial<IngressData> = {
  id: "abc",
  paths: [],
};

const corruptIngressTargetData = {} as IngressTargetData;

const ingressPathData: Partial<IngressPathData> = {
  path: "/",
  target: corruptIngressTargetData,
};

test("Creating IngressPath with corrupt IngressTarget throws error", () => {
  expect(() => {
    new IngressPath(
      new IngressDetailed(ingressData as IngressData),
      ingressPathData as IngressPathData,
    );
  }).toThrowError("Ingress target type is not supported.");
});
