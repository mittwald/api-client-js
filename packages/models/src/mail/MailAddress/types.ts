import { MittwaldAPIV2 } from "@mittwald/api-client";

export type MailAddressListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Query;

export type MailAddressData =
  MittwaldAPIV2.Operations.MailGetMailAddress.ResponseData;

export type MailAddressListItemData =
  MittwaldAPIV2.Operations.MailListMailAddresses.ResponseData[number];
