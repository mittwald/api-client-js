import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const ExternalCertificateOrderRequestGhost = makeGhost(
  Models.ExternalCertificateOrderRequest,
);
export type ExternalCertificateOrderRequestGhost =
  MaybeReactGhost<Models.ExternalCertificateOrderRequest>;
