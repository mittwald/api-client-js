import { afterEach, describe, expect, test, vi } from "vitest";

import type {
  RelocationRequestData,
  RelocationMailInbox,
  RelocationDomain,
} from "./types.js";

import { buildProjectData } from "../../testing/builders/buildProjectData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  calculateRelocationPrices,
  RelocationRequest,
} from "./RelocationRequest.js";

afterEach(resetBehaviors);

type RelocationRequestDataOverrides = {
  loginData?: Partial<RelocationRequestData["loginData"]>;
  contact?: Partial<RelocationRequestData["contact"]>;
  addOns?: Partial<RelocationRequestData["addOns"]>;
  target?: Partial<RelocationRequestData["target"]>;
} & Partial<
  Omit<RelocationRequestData, "loginData" | "contact" | "addOns" | "target">
>;

const buildRelocationRequestData = (
  overrides: RelocationRequestDataOverrides = {},
): RelocationRequestData => {
  const { loginData, contact, addOns, target, ...rootOverrides } = overrides;

  return {
    loginData: {
      loginUrl: "https://login",
      allowPasswordChange: true,
      providerName: "Prov",
      password: "pw",
      userName: "u",
      ...loginData,
    },
    contact: {
      email: "a@b.de",
      firstName: "A",
      lastName: "B",
      ...contact,
    },
    target: {
      targetMode: "project",
      id: "project-id",
      ...target,
    },
    addOns: {
      dataComparison: "default",
      ...addOns,
    },
    websiteToRelocate: "https://old.example.com",
    articleType: "cms-hosting",
    userId: "user-1",
    ...rootOverrides,
  };
};

const domains = [{}, {}] as RelocationDomain[];
const emailInboxes = [{}, {}, {}] as RelocationMailInbox[];

describe("calculateRelocationPrices", () => {
  test("calculates the base article price", () => {
    const prices = calculateRelocationPrices(buildRelocationRequestData());

    expect(prices.positions).toHaveLength(1);
    expect(prices.positions[0]?.name).toBe("cms-hosting");
    expect(prices.positions[0]?.price).toBe(150);
    expect(prices.total).toBe(150);
  });

  test("calculates the onlineshop express article price", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ articleType: "onlineshop-express" }),
    );

    expect(prices.positions[0]?.price).toBe(439);
    expect(prices.total).toBe(439);
  });

  test("adds an additional data comparison", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({
        addOns: { dataComparison: "additionalComparison" },
      }),
    );

    expect(prices.positions).toContainEqual({
      name: "additional-data-comparison",
      price: 50,
    });
    expect(prices.total).toBe(200);
  });

  test("omits the additional data comparison for the default option", () => {
    const prices = calculateRelocationPrices(buildRelocationRequestData());

    expect(prices.positions).not.toContainEqual(
      expect.objectContaining({ name: "additional-data-comparison" }),
    );
  });

  test("adds domain transfers", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { domains } }),
    );

    expect(prices.positions).toContainEqual({
      name: "domain-transfer",
      unitPrice: 9,
      quantity: 2,
      price: 18,
    });
    expect(prices.total).toBe(168);
  });

  test("omits domain transfers when domains are undefined", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { domains: undefined } }),
    );

    expect(prices.positions).not.toContainEqual(
      expect.objectContaining({ name: "domain-transfer" }),
    );
  });

  test("omits domain transfers when domains are empty", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { domains: [] } }),
    );

    expect(prices.positions).not.toContainEqual(
      expect.objectContaining({ name: "domain-transfer" }),
    );
  });

  test("adds email inbox transfers", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { emailInboxes } }),
    );

    expect(prices.positions).toContainEqual({
      name: "email-inbox-transfer",
      unitPrice: 9,
      quantity: 3,
      price: 27,
    });
  });

  test("omits email inbox transfers when inboxes are undefined", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { emailInboxes: undefined } }),
    );

    expect(prices.positions).not.toContainEqual(
      expect.objectContaining({ name: "email-inbox-transfer" }),
    );
  });

  test("omits email inbox transfers when inboxes are empty", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({ addOns: { emailInboxes: [] } }),
    );

    expect(prices.positions).not.toContainEqual(
      expect.objectContaining({ name: "email-inbox-transfer" }),
    );
  });

  test("calculates all relocation prices together", () => {
    const prices = calculateRelocationPrices(
      buildRelocationRequestData({
        addOns: {
          dataComparison: "additionalComparison",
          emailInboxes,
          domains,
        },
      }),
    );

    expect(prices.total).toBe(245);
    expect(prices.positions).toHaveLength(4);
  });
});

describe("RelocationRequest.create", () => {
  test("delegates mapped project data to the relocation behavior", async () => {
    const create = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      project: {
        find: vi.fn().mockResolvedValue(
          buildProjectData({
            customerId: "cust-9",
            id: "project-id",
          }),
        ),
      },
      relocation: { create },
    });

    await RelocationRequest.create(
      buildRelocationRequestData({
        target: { targetMode: "project", id: "project-id" },
        articleType: "cms-hosting",
      }),
    );

    expect(create).toHaveBeenCalledOnce();
    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({
        target: {
          projectName: "project-id",
          organisation: "cust-9",
          product: "Projekt",
          system: "mstudio",
        },
        prices: expect.objectContaining({ total: 150 }),
      }),
    );
  });

  test("maps absent optional data to undefined", async () => {
    const create = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      project: {
        find: vi.fn().mockResolvedValue(buildProjectData()),
      },
      relocation: { create },
    });

    await RelocationRequest.create(buildRelocationRequestData());

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({
        emailInboxes: undefined,
        domains: undefined,
        notes: undefined,
      }),
    );
  });

  test.each([
    ["default", "default"],
    ["additionalComparison", "additionalCompare"],
  ] as const)(
    "maps the %s data comparison option",
    async (dataComparison, expectedDataCompare) => {
      const create = vi.fn().mockResolvedValue(undefined);
      installBehaviors({
        project: {
          find: vi.fn().mockResolvedValue(buildProjectData()),
        },
        relocation: { create },
      });

      await RelocationRequest.create(
        buildRelocationRequestData({ addOns: { dataComparison } }),
      );

      expect(create).toHaveBeenCalledWith(
        expect.objectContaining({
          additionalServices: { dataCompare: expectedDataCompare },
        }),
      );
    },
  );
});
