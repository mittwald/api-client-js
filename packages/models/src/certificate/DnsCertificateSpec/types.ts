import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsCertificateSpecData = NonNullable<
  MittwaldAPIV2.Components.Schemas.SslCertificate["dnsCertSpec"]
>;
