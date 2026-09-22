import type { ArticleAttributeData } from "../types.js";

import { TldAttribute } from "./TldAttribute.js";
import { RecommendedProjectsArticleAttribute , MachineTypeArticleAttribute , StorageArticleAttribute , CpuArticleAttribute , RamArticleAttribute , ArticleAttribute } from "../internal.js";

export const articleAttributeFactory = (
  articleAttribute: ArticleAttributeData | ArticleAttribute,
) => {
  const data =
    articleAttribute instanceof ArticleAttribute
      ? articleAttribute.data
      : articleAttribute;

  switch (articleAttribute.key) {
    case "recommended_projects":
      return new RecommendedProjectsArticleAttribute(data);
    case "spec.machine_type":
      return new MachineTypeArticleAttribute(data);
    case "machine_type":
      return new MachineTypeArticleAttribute(data);
    case "toplevel":
      return new TldAttribute(data);
    case "storage":
      return new StorageArticleAttribute(data);
    case "vcpu":
    case "cpu":
      return new CpuArticleAttribute(data);
    case "ram":
      return new RamArticleAttribute(data);
    default:
      return new ArticleAttribute(data);
  }
};
