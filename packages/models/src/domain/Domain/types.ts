import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project/index.js";

export type DomainListQueryData =
  MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Query;

export type DomainListQueryModelData = Omit<
  DomainListQueryData,
  "projectId"
> & {
  project?: Project | string;
};

export type DomainData = MittwaldAPIV2.Operations.DomainGetDomain.ResponseData;

export type DomainListItemData =
  MittwaldAPIV2.Operations.DomainListDomains.ResponseData[number];

export interface DomainRegistrableResponse {
  invalidDomain: boolean;
  tldAvailable: boolean;
  registrable: boolean;
  isPremium: boolean;
  domain: string;
}

export interface DomainTransferableReasons {
  domainDoesNotExist: boolean;
  domainAgeTooSmall: boolean;
  wrongAuthCode: boolean;
  transferLock: boolean;
}

export interface DomainTransferableResponse {
  reasons: DomainTransferableReasons;
  transferable: boolean;
}

export type DnsRecordMXRecord =
  MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord;

export type DnsRecordSRVRecord =
  MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord;

export type DnsRecordCAARecord =
  MittwaldAPIV2.Components.Schemas.DnsRecordCAARecord;

export type OrderDomainHandleField =
  MittwaldAPIV2.Components.Schemas.OrderDomainHandleField;

export interface DomainOrderPreviewItem {
  authCode?: string;
  domain: string;
}

export type VerifyAddressRequest =
  MittwaldAPIV2.Paths.V2ActionsVerifyAddress.Post.Parameters.RequestBody;
