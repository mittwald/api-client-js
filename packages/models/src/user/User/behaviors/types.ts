import { UserData } from "../types.js";

export interface UserBehaviors {
  find: (id: string) => Promise<UserData | undefined>;
}
