import { NewsletterSubscribeData, NewsletterData } from "../types.js";

export interface NewsletterBehaviors {
  get: () => Promise<NewsletterData>;

  subscribe: (data: NewsletterSubscribeData) => Promise<void>;

  unsubscribe: () => Promise<void>;
}
