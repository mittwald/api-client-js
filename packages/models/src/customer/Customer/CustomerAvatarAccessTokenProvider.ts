import type { FileAccessTokenProvider } from "../../file/index.js";
import type { Customer } from "./Customer.js";

import { config } from "../../config/index.js";

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
