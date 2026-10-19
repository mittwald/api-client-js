import type { Salutation, Address } from "../../customer/index.js";
import type { InvoiceRecipientData } from "./types.js";

import { DataModel } from "../../base/index.js";

export class InvoiceRecipient extends DataModel<InvoiceRecipientData> {
  public readonly address: Address;
  public readonly company?: string;
  public readonly displayName?: string;
  public readonly emailAddress?: string;
  public readonly firstName?: string;
  public readonly fullName?: string;
  public readonly lastName?: string;
  public readonly leitwegId?: string;
  public readonly phoneNumber?: string;
  public readonly purchaseOrderReference?: string;
  public readonly salutation: Salutation;
  public readonly title?: string;
  public readonly useFormalTerm?: boolean;
  public constructor(data: InvoiceRecipientData) {
    super(data);
    this.company = data.company;
    this.emailAddress = data.emailAddress;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.leitwegId = data.leitwegId;
    this.phoneNumber =
      data.phoneNumbers && data.phoneNumbers.length > 0
        ? data.phoneNumbers[0]
        : undefined;
    this.purchaseOrderReference = data.purchaseOrderReference;
    this.useFormalTerm = data.useFormalTerm;
    this.title = data.title;
    this.address = data.address;
    this.salutation = data.salutation;
    this.fullName =
      this.firstName || this.lastName
        ? `${this.data.firstName} ${this.data.lastName}`.trim()
        : undefined;
    this.displayName = this.data.company ?? this.fullName;
  }
}
