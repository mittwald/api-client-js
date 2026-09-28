import { afterEach, describe, expect, test } from "vitest";

import { buildInvoiceItemGroupData } from "../../testing/builders/buildInvoiceItemGroupData.js";
import { buildInvoiceItemData } from "../../testing/builders/buildInvoiceItemData.js";
import { buildInvoiceData } from "../../testing/builders/buildInvoiceData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { InvoiceItemGroup } from "./InvoiceItemGroup.js";
import { InvoiceDetailed } from "../Invoice/index.js";
import { InvoiceItem } from "../InvoiceItem/index.js";

afterEach(resetBehaviors);

describe("InvoiceItemGroup", () => {
  test("maps its description and items", () => {
    const invoice = new InvoiceDetailed(buildInvoiceData());
    const group = new InvoiceItemGroup(
      invoice,
      buildInvoiceItemGroupData({
        items: [
          buildInvoiceItemData({ itemId: "item-1" }),
          buildInvoiceItemData({ itemId: "item-2" }),
        ],
      }),
    );

    expect(group.description).toBe("Test group");
    expect(group.items).toHaveLength(2);
    expect(group.items.every((item) => item instanceof InvoiceItem)).toBe(true);
    expect(group.items.every((item) => item.invoice === invoice)).toBe(true);
  });

  test("leaves an omitted description undefined", () => {
    const invoice = new InvoiceDetailed(buildInvoiceData());
    const group = new InvoiceItemGroup(
      invoice,
      buildInvoiceItemGroupData({ description: undefined }),
    );

    expect(group.description).toBeUndefined();
  });
});
