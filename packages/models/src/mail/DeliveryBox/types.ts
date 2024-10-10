import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type DeliveryBoxData =
  MittwaldAPIV2.Operations.MailGetDeliveryBox.ResponseData;

export type DeliveryBoxListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdDeliveryBoxes.Get.Parameters.Query;

export type DeliveryBoxListQueryModelData = Omit<
  DeliveryBoxListQueryData,
  "projectId"
> & {
  project?: Project;
};
export type DeliveryBoxListItemData =
  MittwaldAPIV2.Operations.MailListDeliveryBoxes.ResponseData[number];
