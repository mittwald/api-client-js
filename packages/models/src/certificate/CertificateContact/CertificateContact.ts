import type { CertificateContactData } from "./types";

import { DataModel } from "../../base";

export class CertificateContact extends DataModel<CertificateContactData> {
  public readonly city?: string;
  public readonly company?: string;
  public readonly country?: string;
  public readonly organizationalUnit?: string;
  public readonly state?: string;
  public constructor(data: CertificateContactData) {
    super(data);
    this.city = data.city;
    this.company = data.company;
    this.country = data.country;
    this.organizationalUnit = data.organizationalUnit;
    this.state = data.state;
  }
}
