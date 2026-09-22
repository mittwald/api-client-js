import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildContractArticleData } from "../../testing/builders/buildContractArticleData";
import { buildContractItemData } from "../../testing/builders/buildContractItemData";
import { buildPlanChangeData } from "../../testing/builders/buildPlanChangeData";
import { buildContractData } from "../../testing/builders/buildContractData";
import { ContractItemDetailed } from "../ContractItem";
import { ContractArticle } from "../ContractArticle";
import { resetBehaviors } from "../../testing";
import { ContractDetailed } from "../Contract";
import { PlanChange } from "./PlanChange";
import { User } from "../../user";

afterEach(resetBehaviors);

describe("PlanChange", () => {
  test("constructs data and derived article values", () => {
    const contract = new ContractDetailed(buildContractData());
    const item = new ContractItemDetailed(contract, buildContractItemData());
    const data = buildPlanChangeData({
      newArticles: [
        buildContractArticleData({ unitPrice: { currency: "EUR", value: 500 }, amount: 2 }),
        buildContractArticleData({ unitPrice: { currency: "EUR", value: 750 }, amount: 1 }),
      ],
      scheduledByUserId: "user-id",
      isForced: true,
    });

    const planChange = new PlanChange(item, data);

    expect(planChange.contractItem).toBe(item);
    expect(planChange.targetDate.toMillis()).toBe(
      DateTime.fromISO(data.targetDate).toMillis(),
    );
    expect(planChange.articles).toHaveLength(2);
    expect(planChange.articles[0]).toBeInstanceOf(ContractArticle);
    expect(planChange.totalPrice.getAmount()).toBe(1750);
    expect(planChange.isForced).toBe(true);
    expect(planChange.scheduledByUser).toBeInstanceOf(User);
    expect(planChange.scheduledByUser?.id).toBe("user-id");
  });

  test("has no scheduled user when no user id is supplied", () => {
    const contract = new ContractDetailed(buildContractData());
    const item = new ContractItemDetailed(contract, buildContractItemData());

    const planChange = new PlanChange(item, buildPlanChangeData());

    expect(planChange.scheduledByUser).toBeUndefined();
  });
});
