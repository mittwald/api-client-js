import type {
  ArticleAttributeData,
  ArticleListItemData,
  ArticleModifierData,
  ArticleTemplateData,
  ArticleTagData,
  ArticleData,
} from "../../article/Article/types";

export function buildArticleTemplateData(
  overrides: Partial<ArticleTemplateData> = {},
): ArticleTemplateData {
  return {
    isManagedByDomain: false,
    type: "miscellaneous",
    id: "template-id",
    isRecurring: true,
    name: "unknown",
    ...overrides,
  };
}

export function buildArticleAttributeData(
  overrides: Partial<ArticleAttributeData> = {},
): ArticleAttributeData {
  return {
    key: "attribute-key",
    ...overrides,
  };
}

export function buildArticleTagData(
  overrides: Partial<ArticleTagData> = {},
): ArticleTagData {
  return {
    id: "tag-id",
    ...overrides,
  };
}

export function buildArticleModifierData(
  overrides: Partial<ArticleModifierData> = {},
): ArticleModifierData {
  return {
    articleId: "modifier-article-id",
    maxArticleCount: 1,
    ...overrides,
  };
}

export function buildArticleData(
  overrides: Partial<ArticleData> = {},
): ArticleData {
  return {
    template: buildArticleTemplateData(),
    contractDurationInMonth: 1,
    articleId: "article-id",
    modifierArticles: [],
    name: "Test Article",
    orderable: "full",
    attributes: [],
    price: 1000,
    tags: [],
    ...overrides,
  };
}

export function buildArticleListItemData(
  overrides: Partial<ArticleListItemData> = {},
): ArticleListItemData {
  return {
    template: buildArticleTemplateData(),
    contractDurationInMonth: 1,
    articleId: "article-id",
    modifierArticles: [],
    name: "Test Article",
    orderable: "full",
    attributes: [],
    price: 1000,
    tags: [],
    ...overrides,
  };
}
