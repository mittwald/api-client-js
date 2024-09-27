export type ContractItemArticleData = {
  amount: number;
  articleTemplateId: string;
  description?: string;
  id: string;
  name: string;
  unitPrice: {
    currency: string;
    value: number;
  };
};
