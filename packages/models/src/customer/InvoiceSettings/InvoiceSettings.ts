import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { InvoiceRecipientData } from "../../invoice";
import type {
  InvoiceSettingsUpdateRequestData,
  InvoiceBankingInformation,
  InvoicePaymentSettings,
  InvoiceSettingsStatus,
  InvoiceSettingsData,
} from "./types";

import { InvoiceRecipient } from "../../invoice/InvoiceRecipient/InvoiceRecipient";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { ReferenceModel, WithData } from "../../base";
import { config } from "../../config";

@GhostMakerModel({
  name: "InvoiceSettings",
})
export class InvoiceSettings extends ReferenceModel {
  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.invoiceSettings.find(id, options);
    if (data) {
      return new InvoiceSettingsDetailed(data);
    }
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const invoiceSettings = await this.find(id, options);
    assertObjectFound(invoiceSettings, InvoiceSettings, id);
    return invoiceSettings;
  }

  public static ofCustomerId(customerId: string) {
    return new InvoiceSettings(customerId);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<InvoiceSettingsCommon | undefined> {
    return this instanceof InvoiceSettingsCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<InvoiceSettingsDetailed | undefined> {
    return InvoiceSettings.find(this.id, options);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<InvoiceSettingsCommon> {
    return this instanceof InvoiceSettingsCommon
      ? this
      : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<InvoiceSettingsDetailed> {
    return InvoiceSettings.get(this.id, options);
  }

  public async update(data: InvoiceSettingsUpdateRequestData) {
    return await config.behaviors.invoiceSettings.update(this.id, data);
  }
}

export class InvoiceSettingsCommon extends WithData<InvoiceSettingsData>()(
  InvoiceSettings,
) {
  public readonly additionalEmailRecipients: string[];
  public override readonly data: InvoiceSettingsData;
  public readonly debitPaymentStopUntil?: DateTime;
  public readonly hasInvalidMail: boolean;
  public readonly id: string;
  public readonly invoicePeriod: number;
  public readonly isBankrupt: boolean;
  public readonly lastBankingInformation?: InvoiceBankingInformation;
  public readonly paymentMethod?: string;
  public readonly paymentSettings: InvoicePaymentSettings;
  public readonly printedInvoices?: boolean;
  public readonly recipient?: InvoiceRecipient;
  public readonly recipientSameAsOwner?: boolean;
  public readonly status?: InvoiceSettingsStatus[];
  public readonly targetDay?: number;

  public constructor(data: InvoiceSettingsData) {
    super(data.id);
    this.data = data;
    this.id = data.id;
    if (data.recipient) {
      this.recipient = new InvoiceRecipient(data.recipient);
    }
    this.status = data.status;
    this.invoicePeriod = data.invoicePeriod ?? 1;
    this.paymentSettings = data.paymentSettings ?? { method: "invoice" };
    this.additionalEmailRecipients = data.additionalEmailRecipients ?? [];
    this.lastBankingInformation = data.lastBankingInformation;
    this.printedInvoices = data.printedInvoices;
    this.recipientSameAsOwner = data.recipientSameAsOwner;
    this.targetDay = data.targetDay;
    this.paymentMethod = data.paymentSettings?.method;
    if (data.debitPaymentStopUntil) {
      this.debitPaymentStopUntil = DateTime.fromISO(data.debitPaymentStopUntil);
    }

    this.hasInvalidMail = !!this.status?.some((s) => s.type === "notReachable");
    this.isBankrupt = !!this.status?.some((s) => s.type === "bankrupt");
  }

  public async addAdditionalRecipient(mailAddress: string) {
    return await this.update({
      additionalEmailRecipients: [
        ...this.additionalEmailRecipients,
        mailAddress,
      ],
      recipient: this.data.recipient as InvoiceRecipientData,
      recipientSameAsOwner: this.recipientSameAsOwner,
      paymentSettings: this.paymentSettings,
      printedInvoices: this.printedInvoices,
      invoicePeriod: this.invoicePeriod,
    });
  }

  public async removeAdditionalRecipient(mailAddress: string) {
    await this.update({
      additionalEmailRecipients: this.additionalEmailRecipients.filter(
        (a) => a !== mailAddress,
      ),
      recipient: this.data.recipient as InvoiceRecipientData,
      recipientSameAsOwner: this.recipientSameAsOwner,
      paymentSettings: this.paymentSettings,
      printedInvoices: this.printedInvoices,
      invoicePeriod: this.invoicePeriod,
    });
  }

  public async update(
    data: InvoiceSettingsUpdateRequestData,
    options?: AxiosRequestConfig,
  ) {
    return await config.behaviors.invoiceSettings.update(
      this.id,
      data,
      options,
    );
  }

  public async updatePaymentSettings(
    paymentSettings: InvoicePaymentSettings,
    invoicePeriod: number,
    options?: AxiosRequestConfig,
  ) {
    return await this.update(
      {
        paymentSettings:
          paymentSettings.method === "invoice"
            ? { method: paymentSettings.method }
            : paymentSettings,
        additionalEmailRecipients: this.additionalEmailRecipients,
        recipient: this.data.recipient as InvoiceRecipientData,
        recipientSameAsOwner: this.recipientSameAsOwner,
        printedInvoices: this.printedInvoices,
        invoicePeriod,
      },
      options,
    );
  }

  public async updateRecipient(
    recipient: InvoiceRecipientData,
    recipientSameAsOwner: boolean,
    options?: AxiosRequestConfig,
  ) {
    return await this.update(
      {
        additionalEmailRecipients: this.additionalEmailRecipients,
        paymentSettings: this.paymentSettings,
        printedInvoices: this.printedInvoices,
        invoicePeriod: this.invoicePeriod,
        recipientSameAsOwner,
        recipient,
      },
      options,
    );
  }
}

export class InvoiceSettingsDetailed extends InvoiceSettingsCommon {
  public constructor(data: InvoiceSettingsData) {
    super(data);
  }
}
