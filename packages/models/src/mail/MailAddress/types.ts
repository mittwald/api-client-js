import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { MailArchiveOrderPreview } from "../../order/Order/Preview/MailArchiveOrderPreview.js";
import type { MailAddressListItem } from "./MailAddress.js";
import type { Project } from "../../project/index.js";

export type MailAddressListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Query;

export type MailAddressListQueryModelData = Omit<
  MailAddressListQueryData,
  "projectId"
> & {
  project?: Project | string;
};

export type MailAddressData =
  MittwaldAPIV2.Operations.MailGetMailAddress.ResponseData;

export type MailAddressListItemData =
  MittwaldAPIV2.Operations.MailListMailAddresses.ResponseData[number];

export type MailAddressRequestData =
  MittwaldAPIV2.Components.Schemas.MailCreateMailAddress;

export type ForwardRequestData =
  MittwaldAPIV2.Components.Schemas.MailCreateForwardAddress;

export type AutoresponderUpdateRequestData =
  MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdAutoresponder.Patch.Parameters.RequestBody["autoResponder"];

export type SpamProtectionRequestData =
  MittwaldAPIV2.Operations.MailUpdateMailAddressSpamProtection.RequestData["spamProtection"];

export type EmailOrigin =
  MittwaldAPIV2.Components.Schemas.VerificationEmailOrigin;

export interface MailAddressWithArchiveOrderPreview {
  mailAddress: MailAddressListItem;
  preview: MailArchiveOrderPreview;
}
