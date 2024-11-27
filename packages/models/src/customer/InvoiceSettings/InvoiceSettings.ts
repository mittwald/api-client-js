import { classes } from "polytype";
import type { InvoiceSettingsData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class InvoiceSettings extends ReferenceModel {
  public static ofCustomerId(customerId: string): InvoiceSettings {
    return new InvoiceSettings(customerId);
  }

  public static find = provideReact(
    async (id: string): Promise<InvoiceSettingsDetailed | undefined> => {
      const data = await config.behaviors.invoiceSettings.find(id);
      if (data) {
        return new InvoiceSettingsDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<InvoiceSettingsDetailed> => {
      const invoiceSettings = await this.find(id);
      assertObjectFound(invoiceSettings, this, id);
      return invoiceSettings;
    },
  );

  public findDetailed = provideReact((): Promise<
    InvoiceSettingsDetailed | undefined
  > => {
    return InvoiceSettings.find(this.id);
  }, [this.id]) as AsyncResourceVariant<
    () => Promise<InvoiceSettingsDetailed | undefined>
  >;

  public getDetailed = provideReact((): Promise<InvoiceSettingsDetailed> => {
    return InvoiceSettings.get(this.id);
  }, [this.id]) as AsyncResourceVariant<() => Promise<InvoiceSettingsDetailed>>;
}

class InvoiceSettingsCommon extends classes(
  DataModel<InvoiceSettingsData>,
  InvoiceSettings,
) {
  public constructor(data: InvoiceSettingsData) {
    super([data], [data.id]);
  }
}

export class InvoiceSettingsDetailed extends classes(
  InvoiceSettingsCommon,
  DataModel<InvoiceSettingsData>,
) {
  public constructor(data: InvoiceSettingsData) {
    super([data], [data]);
  }
}
