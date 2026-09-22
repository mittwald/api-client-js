import type { ContractArticleData } from "../../contract/ContractArticle/types.js";

export function buildContractArticleData(
  overrides?: Partial<ContractArticleData>,
): ContractArticleData {
  return {
    unitPrice: { currency: "EUR", value: 1000 },
    articleTemplateId: "template-id",
    name: "Test Article",
    description: "desc",
    id: "article-id",
    amount: 1,
    ...overrides,
  };
}
