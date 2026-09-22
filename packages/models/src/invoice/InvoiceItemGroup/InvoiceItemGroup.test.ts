import { afterEach, describe, expect, test } from "vitest";

import { buildInvoiceItemGroupData } from "../../testing/builders/buildInvoiceItemGroupData";
import { buildInvoiceItemData } from "../../testing/builders/buildInvoiceItemData";
import { buildInvoiceData } from "../../testing/builders/buildInvoiceData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { InvoiceItemGroup } from "./InvoiceItemGroup";
import { InvoiceDetailed } from "../Invoice";
import { InvoiceItem } from "../InvoiceItem";

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
