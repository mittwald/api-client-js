import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type TlsAcmeData = MittwaldAPIV2.Components.Schemas.IngressTlsAcme;
export type TlsCertificateData =
  MittwaldAPIV2.Components.Schemas.IngressTlsCertificate;

export type TlsData = TlsCertificateData | TlsAcmeData;

export type TlsStatus = "exceeded" | "disabled" | "running";
