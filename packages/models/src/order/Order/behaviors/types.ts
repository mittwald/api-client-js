import type {
  OrderCreateRequestData,
  OrderData,
  OrderListByCustomerQueryData,
  OrderListItemData,
  OrderPreviewRequestData,
  TariffChangePreviewRequestData,
  TariffChangeRequestData,
} from "../types.js";
import { type OrderListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { OrderPreviewData } from "../../OrderPreview/index.js";
import { TariffChangePreviewData } from "../../TariffChangePreview/index.js";

export interface OrderBehaviors {
  find: (id: string) => Promise<OrderData | undefined>;
  list: (
    query?: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  listByCustomer: (
    query: OrderListByCustomerQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  create: (data: OrderCreateRequestData) => Promise<{ id: string }>;
  preview: (data: OrderPreviewRequestData) => Promise<OrderPreviewData>;

  createTariffChange: (data: TariffChangeRequestData) => Promise<void>;

  previewTariffChange: (
    tariffChangePreviewData: TariffChangePreviewRequestData,
  ) => Promise<TariffChangePreviewData>;
}
