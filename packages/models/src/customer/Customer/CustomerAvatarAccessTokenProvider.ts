import type { FileAccessTokenProvider } from "../../file";
import type { Customer } from "./Customer";

import { config } from "../../config";

export class CustomerAvatarAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly customer: Customer;

  public constructor(customer: Customer) {
    this.customer = customer;
  }

  public createUploadToken() {
    return config.behaviors.customer.createAvatarUploadToken(this.customer.id);
  }
}
