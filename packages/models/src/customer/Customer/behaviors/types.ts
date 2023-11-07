import {
  CustomerCompactData,
  CustomerData,
  CustomerListQuery,
} from "../types.js";

export interface CustomerBehaviors {
  find: (id: string) => Promise<CustomerData | undefined>;
  list: (query?: CustomerListQuery) => Promise<CustomerCompactData[]>;
}
