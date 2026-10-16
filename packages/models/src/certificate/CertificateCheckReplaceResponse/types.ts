import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CertificateCheckReplaceResponseData =
  MittwaldAPIV2.Components.Schemas.SslCheckReplaceCertificateResponse;

export type CertificateCheckReplaceChanges =
  MittwaldAPIV2.Components.Schemas.SslCheckReplaceChanges;

export type CertificateCheckReplaceFieldChange =
  MittwaldAPIV2.Components.Schemas.SslCheckReplaceFieldChange;

export type CertificateCheckReplaceSliceChange =
  MittwaldAPIV2.Components.Schemas.SslCheckReplaceSliceChange;

export type CertificateErrorData =
  MittwaldAPIV2.Components.Schemas.SslCertificateError;

export interface CertificateDifferencesResolveResponse {
  removed: string[];
  added: string[];
}
