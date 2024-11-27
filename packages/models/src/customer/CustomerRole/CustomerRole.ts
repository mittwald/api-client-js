import { CustomerRoleData } from "./types.js";
import { language } from "../../base/i18n/setup.js";

export class CustomerRole {
  public readonly name: CustomerRoleData;
  public readonly translatedName: string;

  constructor(name: CustomerRoleData) {
    this.name = name;
    this.translatedName = language.default.customer.role[name];
  }
}
