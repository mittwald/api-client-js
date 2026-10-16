import type { IOptions } from "tldts-core";

import type { Project } from "../../project/index.js";

export type ParseDomainOptions = Partial<IOptions>;

export type IngressDomainListQueryData = {
  project: Project | string;
};
