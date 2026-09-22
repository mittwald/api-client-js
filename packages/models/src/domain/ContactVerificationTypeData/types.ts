import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContactVerificationAddressDataData =
  MittwaldAPIV2.Components.Schemas.DomainContactVerificationAddressData;

export type ContactVerificationEmailDataData =
  MittwaldAPIV2.Components.Schemas.DomainContactVerificationEmailData;

export type ContactVerificationNameDataData =
  MittwaldAPIV2.Components.Schemas.DomainContactVerificationNameData;

export type ContactVerificationTypeDataData =
  | ContactVerificationAddressDataData
  | ContactVerificationEmailDataData
  | ContactVerificationNameDataData;
