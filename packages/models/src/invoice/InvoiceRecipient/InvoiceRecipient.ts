import { DataModel } from "@mittwald/api-models";
import { InvoiceRecipientData } from "./types.js";

export class InvoiceRecipient extends DataModel<InvoiceRecipientData> {
  public constructor(data: InvoiceRecipientData) {
    super(data);
  }

  public getDisplayName(): string | undefined {
    if (this.data.company) {
      return this.data.company;
    }
    return this.getFullName();
  }

  public getFullName() {
    const fullName = `${this.data.firstName} ${this.data.lastName}`.trim();

    if (fullName === "") {
      return undefined;
    }
    return fullName;
  }
}
