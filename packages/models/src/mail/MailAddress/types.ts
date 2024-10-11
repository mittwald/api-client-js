import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type MailAddressListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMailAddresses.Get.Parameters.Query;

export type MailAddressListQueryModelData = Omit<
  MailAddressListQueryData,
  "projectId"
> & {
  project?: Project;
};

export type MailAddressData =
  MittwaldAPIV2.Operations.MailGetMailAddress.ResponseData;

export type MailAddressListItemData =
  MittwaldAPIV2.Operations.MailListMailAddresses.ResponseData[number];
