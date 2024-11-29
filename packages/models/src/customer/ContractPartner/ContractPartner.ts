import { ContractPartnerData } from "./types.js";
import { DataModel } from "../../base/index.js";

export class ContractPartner extends DataModel<ContractPartnerData> {
  public readonly fullName?: string;
  public readonly phoneNumber?: string;

  public constructor(data: ContractPartnerData) {
    super(data);
    if (data.firstName && data.lastName) {
      this.fullName = `${data.firstName} ${data.lastName}`;
    }
    this.phoneNumber = data.phoneNumbers?.[0];
  }
}
