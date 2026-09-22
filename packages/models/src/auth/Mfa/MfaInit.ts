import type { InitMfaResponseData } from "./types";

import { DataModel } from "../../base";

export class MfaInit extends DataModel<InitMfaResponseData> {
  public readonly barcodeImageSrc: string;
  public readonly secret: string;

  public constructor(data: InitMfaResponseData) {
    super(data);
    this.secret = data.url.split("secret=")[1] ?? "";
    this.barcodeImageSrc = `data:image/jpg;base64, ${data.barcode}`;
  }
}
