import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ContactVerificationData =
  MittwaldAPIV2.Components.Schemas.DomainContactVerification;

export type ContactVerificationStatus =
  MittwaldAPIV2.Components.Schemas.DomainContactVerificationStatus;

export type ContactVerificationListQueryData =
  MittwaldAPIV2.Paths.V2ContactVerifications.Get.Parameters.Query;

export type ContactVerificationListItemData =
  MittwaldAPIV2.Operations.DomainListContactVerifications.ResponseData[number];
