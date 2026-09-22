import type { DeliveryBoxData } from "../../mail/DeliveryBox/types";

export function buildDeliveryBoxData(
  overrides?: Partial<DeliveryBoxData>,
): DeliveryBoxData {
  return {
    passwordUpdatedAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    authenticationEnabled: true,
    description: "test box",
    projectId: "project-id",
    id: "deliverybox-id",
    sendingEnabled: true,
    name: "p-xxxx",
    ...overrides,
  };
}
