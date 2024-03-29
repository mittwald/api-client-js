import {
  IngressListItemData,
  IngressData,
  IngressListQuery,
} from "../types.js";

export interface IngressBehaviors {
  find: (id: string) => Promise<IngressData | undefined>;
  list: (query?: IngressListQuery) => Promise<IngressListItemData[]>;
}
