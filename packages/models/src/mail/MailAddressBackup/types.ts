import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { MailAddress } from "../MailAddress";

export type MailAddressBackupData =
  MittwaldAPIV2.Operations.MailListBackupsForMailAddress.ResponseData[number];

export type MailAddressBackupListQueryModelData = {
  mailAddress: MailAddress | string;
};

export type ListMailAddressBackupQueryData =
  MittwaldAPIV2.Paths.V2MailAddressesMailAddressIdBackups.Get.Parameters.Query;
