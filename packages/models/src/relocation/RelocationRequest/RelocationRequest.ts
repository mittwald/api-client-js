import type { RelocationRequestApiData, RelocationRequestData } from "./types.js";

import { Project } from "../../project/index.js";
import { config } from "../../config/index.js";
import { Server } from "../../server/index.js";
import {
  emailInboxTransferPricePerInbox,
  domainTransferPricePerDomain,
  additionalDataComparePrice,
  getArticleByName,
} from "./utils/articles.js";

export interface RelocationPricePosition {
  unitPrice?: number;
  quantity?: number;
  price: number;
  name: string;
}

export interface RelocationPrices {
  positions: RelocationPricePosition[];
  total: number;
}

export const calculateRelocationPrices = (
  values: RelocationRequestData,
): RelocationPrices => {
  const positions: RelocationPricePosition[] = [];

  const article = getArticleByName(values.articleType);
  positions.push({
    price: article.price,
    name: article.name,
  });

  if (values.addOns.dataComparison === "additionalComparison") {
    positions.push({
      name: "additional-data-comparison",
      price: additionalDataComparePrice,
    });
  }

  const domainCount = values.addOns.domains?.length ?? 0;
  if (domainCount > 0) {
    positions.push({
      price: domainCount * domainTransferPricePerDomain,
      unitPrice: domainTransferPricePerDomain,
      name: "domain-transfer",
      quantity: domainCount,
    });
  }

  const inboxCount = values.addOns.emailInboxes?.length ?? 0;
  if (inboxCount > 0) {
    positions.push({
      price: inboxCount * emailInboxTransferPricePerInbox,
      unitPrice: emailInboxTransferPricePerInbox,
      name: "email-inbox-transfer",
      quantity: inboxCount,
    });
  }

  const total = positions.reduce((sum, p) => sum + p.price, 0);

  return { positions, total };
};

export class RelocationRequest {
  public static async create(values: RelocationRequestData): Promise<void> {
    const data = await RelocationRequest.mapFormToRequestData(values);
    await config.behaviors.relocation.create(data);
  }

  private static async mapFormToRequestData(
    values: RelocationRequestData,
  ): Promise<RelocationRequestApiData> {
    const prices = calculateRelocationPrices(values);
    const customerId =
      values.target.targetMode === "server"
        ? (await Server.ofId(values.target.id).getCommon()).customer.id
        : (await Project.ofId(values.target.id).getCommon()).customer.id;

    return {
      target: {
        product:
          values.target.targetMode === "server"
            ? "vServer / Dedicated Server"
            : "Projekt",
        projectName: values.target.id,
        organisation: customerId,
        system: "mstudio",
      },
      provider: {
        sourceAccount: values.websiteToRelocate,
        loginUrl: values.loginData.loginUrl,
        name: values.loginData.providerName,
        password: values.loginData.password,
        userName: values.loginData.userName,
      },
      contact: {
        phoneNumber: values.contact.phoneNumber,
        firstName: values.contact.firstName,
        lastName: values.contact.lastName,
        email: values.contact.email,
      },
      additionalServices: {
        dataCompare:
          values.addOns.dataComparison === "additionalComparison"
            ? "additionalCompare"
            : "default",
      },
      allowPasswordChange: values.loginData.allowPasswordChange,
      emailInboxes: values.addOns.emailInboxes,
      articleType: values.articleType,
      domains: values.addOns.domains,
      notes: values.contact.message,
      userId: values.userId,
      prices,
    };
  }
}
