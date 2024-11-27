import { CustomerMembershipData } from "../types.js";

export interface CustomerMembershipBehaviors {
  find: (id: string) => Promise<CustomerMembershipData | undefined>;
}
