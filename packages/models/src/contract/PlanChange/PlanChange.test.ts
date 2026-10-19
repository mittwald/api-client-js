import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildContractArticleData } from "../../testing/builders/buildContractArticleData.js";
import { buildContractItemData } from "../../testing/builders/buildContractItemData.js";
import { buildPlanChangeData } from "../../testing/builders/buildPlanChangeData.js";
import { buildContractData } from "../../testing/builders/buildContractData.js";
import { ContractItemDetailed } from "../ContractItem/index.js";
import { ContractArticle } from "../ContractArticle/index.js";
import { resetBehaviors } from "../../testing/index.js";
import { ContractDetailed } from "../Contract/index.js";
import { PlanChange } from "./PlanChange.js";
import { User } from "../../user/index.js";

afterEach(resetBehaviors);

describe("PlanChange", () => {
  test("constructs data and derived article values", () => {
    const contract = new ContractDetailed(buildContractData());
    const item = new ContractItemDetailed(contract, buildContractItemData());
    const data = buildPlanChangeData({
      newArticles: [
        buildContractArticleData({
          unitPrice: { currency: "EUR", value: 500 },
          amount: 2,
        }),
        buildContractArticleData({
          unitPrice: { currency: "EUR", value: 750 },
          amount: 1,
        }),
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
