import type { HandleField, HandleData } from "./types";

import { DataModel } from "../../base";

export class DomainHandle extends DataModel<HandleData> {
  public readonly city?: string;
  public readonly country?: string;
  public readonly email?: string;
  public readonly fields: HandleField[];
  public readonly handleRef?: string;
  public readonly name?: string;
  public readonly organization?: string;
  public readonly phone?: string;
  public readonly street?: string;
  public readonly zip?: string;

  public constructor(data: HandleData) {
    super(data);
    this.handleRef = data.handleRef;
    this.fields = data.handleFields ?? [];
    this.name = this.getFieldValue("name");
    this.organization = this.getFieldValue("organization");
    this.email = this.getFieldValue("email");
    this.street = this.getFieldValue("street");
    this.city = this.getFieldValue("city");
    this.zip = this.getFieldValue("zip");
    this.country = this.getFieldValue("country");
    this.phone = this.getFieldValue("phone");
  }

  public static fromHandleFields(fields: HandleField[]): DomainHandle {
    return new DomainHandle({
      handleFields: fields,
    });
  }

  public getAdditionalFields(exclude: string[] = []): HandleField[] {
    return this.fields.filter(
      (i) => !(i.name in this) && !exclude.includes(i.name),
    );
  }

  public getAsRecord(): Record<string, string> {
    const record: Record<string, string> = {};
    this.fields.forEach((i) => {
      record[i.name] = i.value;
    });
    return record;
  }

  public getFieldValue(name: string) {
    return this.fields.find((i) => i.name === name)?.value;
  }
}
