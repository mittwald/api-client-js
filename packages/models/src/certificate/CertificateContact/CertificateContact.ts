import type { CertificateContactData } from "./types.js";

import { DataModel } from "../../base/index.js";

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
