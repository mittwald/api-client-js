import { afterEach, describe, expect, test } from "vitest";

import { buildContractPartnerData } from "../../testing/builders/buildContractPartnerData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { ContractPartner } from "./ContractPartner";

afterEach(resetBehaviors);

describe("ContractPartner", () => {
  test("exposes contact data and derived values", () => {
    const data = buildContractPartnerData();
    const partner = new ContractPartner(data);

    expect(partner.fullName).toBe("Ada Lovelace");
    expect(partner.phoneNumber).toBe("+49 431 123456");
    expect(partner.address).toBe(data.address);
    expect(partner.salutation).toBe(data.salutation);
    expect(partner.emailAddress).toBe(data.emailAddress);
    expect(partner.company).toBe(data.company);
    expect(partner.leitwegId).toBe(data.leitwegId);
  });

  test("exposes the purchase order reference", () => {
    const partner = new ContractPartner(
      buildContractPartnerData({
        purchaseOrderReference: "PO-12345",
        leitwegId: undefined,
      }),
    );

    expect(partner.purchaseOrderReference).toBe("PO-12345");
  });

  test("leaves full name undefined when either name is missing", () => {
    const partner = new ContractPartner(
      buildContractPartnerData({ firstName: undefined }),
    );

    expect(partner.fullName).toBeUndefined();
  });

  test.each([undefined, []])(
    "leaves phone number undefined for %j phone numbers",
    (phoneNumbers) => {
      const partner = new ContractPartner(
        buildContractPartnerData({ phoneNumbers }),
      );

      expect(partner.phoneNumber).toBeUndefined();
    },
  );
});
