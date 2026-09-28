import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const CertificateGhost = makeGhost(Models.Certificate);
export type CertificateGhost = MaybeReactGhost<Models.Certificate>;

export const CertificateListQueryGhost = makeGhost(Models.CertificateListQuery);
export type CertificateListQueryGhost =
  MaybeReactGhost<Models.CertificateListQuery>;
