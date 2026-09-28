import type { AxiosRequestConfig } from "axios";

import type { NewsletterSubscribeData, NewsletterInfoData } from "../types.js";

export interface NewsletterBehaviors {
  getInfo: (requestConfig?: AxiosRequestConfig) => Promise<NewsletterInfoData>;

  subscribe: (data: NewsletterSubscribeData) => Promise<void>;

  unsubscribe: () => Promise<void>;
}
