import type { ContractPartnerData, Salutation, Address } from "./types.js";

import { DataModel } from "../../base/index.js";

export class ContractPartner extends DataModel<ContractPartnerData> {
  public readonly address: Address;
  public readonly company?: string;
  public readonly emailAddress?: string;
  public readonly firstName?: string;
  public readonly fullName?: string;
  public readonly lastName?: string;
  public readonly leitwegId?: string;
  public readonly phoneNumber?: string;
  public readonly purchaseOrderReference?: string;
  public readonly salutation?: Salutation;
  public readonly title?: string;
  public readonly useFormalTerm?: boolean;
  public constructor(data: ContractPartnerData) {
    super(data);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    if (data.firstName && data.lastName) {
      this.fullName = `${data.firstName} ${data.lastName}`;
    }
    this.phoneNumber = data.phoneNumbers?.[0];
    this.address = data.address;
    this.salutation = data.salutation;
    this.title = data.title;
    this.useFormalTerm = data.useFormalTerm;
    this.emailAddress = data.emailAddress;
    this.company = data.company;
    this.leitwegId = data.leitwegId;
    this.purchaseOrderReference = data.purchaseOrderReference;
  }
}
