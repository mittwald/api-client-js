export type ArticleNames =
  | "cms-hosting-express"
  | "onlineshop-express"
  | "cms-hosting"
  | "onlineshop";

interface RelocationArticle {
  timeRange: {
    min: number;
    max: number;
  };
  name: ArticleNames;
  price: number;
}

const cmsHosting: RelocationArticle = {
  timeRange: {
    max: 10,
    min: 5,
  },
  name: "cms-hosting",
  price: 150,
};

const cmsHostingExpress: RelocationArticle = {
  timeRange: {
    min: 2,
    max: 3,
  },
  name: "cms-hosting-express",
  price: 299,
};

const onlineshop: RelocationArticle = {
  timeRange: {
    min: 10,
    max: 14,
  },
  name: "onlineshop",
  price: 250,
};

const onlineshopExpress: RelocationArticle = {
  timeRange: {
    min: 2,
    max: 3,
  },
  name: "onlineshop-express",
  price: 439,
};

export const relocationArticles = [
  cmsHosting,
  onlineshop,
  cmsHostingExpress,
  onlineshopExpress,
] as const;

export const additionalDataComparePrice = 50;
export const domainTransferPricePerDomain = 9;
export const emailInboxTransferPricePerInbox = 9;

export const getArticleByName = (name: ArticleNames): RelocationArticle => {
  return relocationArticles.find((article) => article.name === name)!;
};
