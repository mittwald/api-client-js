import type { QueryResponseData } from "../../../base/index.js";
import type {
  CreateOrderPreviewRequestData,
  PlanChangePreviewRequestData,
  TariffChangePreviewData,
  CreateOrderRequestData,
  PlanChangeRequestData,
  OrderListQueryData,
  OrderListItemData,
  OrderPreviewData,
  OrderData,
} from "../types.js";

export interface OrderBehaviors {
  previewTariffChange: (
    tariffChangePreviewData: PlanChangePreviewRequestData,
  ) => Promise<TariffChangePreviewData>;
  list: (
    query?: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;

  preview: (data: CreateOrderPreviewRequestData) => Promise<OrderPreviewData>;
  createTariffChange: (data: PlanChangeRequestData) => Promise<void>;

  create: (data: CreateOrderRequestData) => Promise<{ id: string }>;

  find: (orderId: string) => Promise<OrderData | undefined>;
}
