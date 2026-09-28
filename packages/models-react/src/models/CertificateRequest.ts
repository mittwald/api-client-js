import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CertificateRequestGhost = makeGhost(Models.CertificateRequest);
export type CertificateRequestGhost =
  MaybeReactGhost<Models.CertificateRequest>;

export const CertificateRequestListQueryGhost = makeGhost(
  Models.CertificateRequestListQuery,
);
export type CertificateRequestListQueryGhost =
  MaybeReactGhost<Models.CertificateRequestListQuery>;
