import type { HandleData } from "../../domain/DomainHandle/types.js";

import { buildDomainHandleFieldData } from "./buildDomainHandleFieldData.js";

export function buildDomainHandleData(
  overrides?: Partial<HandleData>,
): HandleData {
  return {
    handleFields: [
      buildDomainHandleFieldData({ value: "Example Owner", name: "name" }),
      buildDomainHandleFieldData({
        value: "Example GmbH",
        name: "organization",
      }),
      buildDomainHandleFieldData({ value: "owner@example.com", name: "email" }),
      buildDomainHandleFieldData({ value: "Example Street 1", name: "street" }),
      buildDomainHandleFieldData({ value: "Example City", name: "city" }),
      buildDomainHandleFieldData({ value: "12345", name: "zip" }),
      buildDomainHandleFieldData({ name: "country", value: "DE" }),
      buildDomainHandleFieldData({ value: "+49 123 456789", name: "phone" }),
      buildDomainHandleFieldData({ value: "123", name: "fax" }),
    ],
    handleRef: "handle-1",
    ...overrides,
  };
}
