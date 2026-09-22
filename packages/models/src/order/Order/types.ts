import type { RequiredKeysOf, SetOptional } from "type-fest";
import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { MachineTypeSpecs, HardwareSpecs, Project } from "../../project/index.js";
import type { Customer } from "../../customer/index.js";
import type { MailAddress } from "../../mail/index.js";

export type OrderData = MittwaldAPIV2.Operations.OrderGetOrder.ResponseData;

export type OrderListItemData =
  MittwaldAPIV2.Operations.OrderListOrders.ResponseData[number];

export type OrderListQueryData =
  MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Query & {
    customerId?: string;
    projectId?: string;
  };

export type OrderStatusApiData =
  MittwaldAPIV2.Components.Schemas.OrderOrderStatus;

export type OrderListQueryModelData = {
  customer?: Customer | string;
  project?: Project | string;
} & Omit<OrderListQueryData, "customerId" | "projectId">;

export type OrderTypeData = MittwaldAPIV2.Components.Schemas.OrderOrderType;

export type ProjectOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderProjectHostingOrder;

export type ProjectOrderRequestModelData = {
  customer: Customer | string;
  spec: HostingOrderSpecs;
} & Omit<ProjectOrderRequestData, "customerId" | "spec">;

export type DomainOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderDomainOrder;

export type DomainOrderRequestModelData = {
  ownerC: MittwaldAPIV2.Components.Schemas.OrderDomainOrder["handleData"]["ownerC"];
  project: Project | string;
} & Omit<
  MittwaldAPIV2.Components.Schemas.OrderDomainOrder,
  "handleData" | "projectId"
>;

export type ExternalCertificateOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrder;

export type ExternalCertificateOrderRequestModelData = Omit<
  ExternalCertificateOrderRequestData,
  "projectId"
> & {
  project: Project | string;
};

export type ExternalCertificateOrderData =
  MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrder;

export type LeadFyndrOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrder;

export type LicenseOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderLicenseOrder;

export type HostingOrderSpecs = MachineTypeSpecs | HardwareSpecs;

export type ExternalCertificateOrderPreviewRequestData =
  MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrderPreview;

export type ExternalCertificateOrderPreviewRequestModelData = Omit<
  ExternalCertificateOrderPreviewRequestData,
  "projectId"
> & {
  project: Project | string;
};

export type DomainOrderPreviewRequestData =
  MittwaldAPIV2.Components.Schemas.OrderDomainOrderPreview;

export type DomainOrderPreviewRequestModelData = Omit<
  MittwaldAPIV2.Components.Schemas.OrderDomainOrderPreview,
  "projectId"
> & {
  project: Project | string;
};

export type AiHostingOrderPreviewRequestData =
  MittwaldAPIV2.Components.Schemas.OrderAIHostingOrderPreview;

export type AiHostingOrderData =
  MittwaldAPIV2.Components.Schemas.OrderAIHostingOrder;

export type ServerOrderRequestData =
  MittwaldAPIV2.Components.Schemas.OrderServerOrder;

export type ServerOrderRequestModelData = {
  machineType: MachineTypeSpecs;
  customer: Customer | string;
} & Omit<ServerOrderRequestData, "machineType" | "customerId">;

export type MailArchiveOrderData =
  MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrder;

export type MailArchiveOrderRequestModelData = Omit<
  MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrder,
  "mailAddressId"
> & {
  mailAddress: MailAddress | string;
};

export type MailArchiveOrderPreviewRequestModelData = Omit<
  MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrderPreview,
  "mailAddressId"
> & {
  mailAddress: MailAddress | string;
};

export type MailArchiveOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrderPreviewResponse;

export type CreateOrderRequestData =
  MittwaldAPIV2.Paths.V2Orders.Post.Parameters.RequestBody;

export type CreateOrderPreviewRequestData =
  MittwaldAPIV2.Paths.V2OrderPreviews.Post.Parameters.RequestBody;

export type OrderStatus = MittwaldAPIV2.Components.Schemas.OrderOrderStatus;

export type PlanChangeRequestData =
  MittwaldAPIV2.Operations.OrderCreateTariffChange.RequestData;

export type PlanChangePreviewRequestData =
  MittwaldAPIV2.Operations.OrderPreviewTariffChange.RequestData;

export type DomainOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderDomainOrderPreviewResponse;

export type HostingOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderHostingOrderPreviewResponse & {
    freeTrialUntil?: string;
  };

export type ExternalCertificateOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrderPreviewResponse;

export type LeadFyndrOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrderPreviewResponse;

export type LeadFyndrOrderPreviewRequestData =
  MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrderPreview;

export type LicenseOrderPreviewData =
  MittwaldAPIV2.Components.Schemas.OrderLicenseOrderPreviewResponse;

export type LicenseOrderPreviewRequestData =
  MittwaldAPIV2.Components.Schemas.OrderLicenseOrderPreview;

export type OrderPreviewData =
  | ExternalCertificateOrderPreviewData
  | LeadFyndrOrderPreviewData
  | HostingOrderPreviewData
  | LicenseOrderPreviewData
  | DomainOrderPreviewData;

export type CompleteOrderRequestData<
  TRequest extends object,
  TOrder extends object,
> = SetOptional<TOrder, Extract<RequiredKeysOf<TRequest>, keyof TOrder>>;

export type TariffChangePreviewData =
  MittwaldAPIV2.Operations.OrderPreviewTariffChange.ResponseData;
