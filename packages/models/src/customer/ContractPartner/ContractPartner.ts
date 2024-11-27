import { ContractPartnerData } from "./types.js";

export class ContractPartner {
  public readonly data: ContractPartnerData;
  public readonly fullName?: string;
  public readonly phoneNumber?: string;

  public constructor(data: ContractPartnerData) {
    this.data = data;
    if (data.firstName && data.lastName) {
      this.fullName = `${data.firstName} ${data.lastName}`;
    }
    this.phoneNumber = data.phoneNumbers?.[0];
  }
}
