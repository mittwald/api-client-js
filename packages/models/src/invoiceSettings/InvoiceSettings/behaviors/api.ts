import { classes } from "polytype";
import { provideReact } from "../../../react/index.js";
import { DataModel, ReferenceModel } from "../../../base/index.js";
import { config } from "../../../config/config.js";
import assertObjectFound from "../../../base/assertObjectFound.js";
import { InvoiceSettingsData } from "../types.js";

export class InvoiceSettings extends ReferenceModel {
  public constructor(id: string) {
    super(id);
  }

  public static ofId(id: string): InvoiceSettings {
    return new InvoiceSettings(id);
  }

  public static find = provideReact(
    async (
      customerId: string,
    ): Promise<InvoiceSettingsDetailed | undefined> => {
      const data = await config.behaviors.invoiceSettings.find(customerId);

      if (data !== undefined) {
        return new InvoiceSettingsDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (customerId: string): Promise<InvoiceSettingsDetailed> => {
      const invoiceSettings = await this.find(customerId);
      assertObjectFound(invoiceSettings, this, customerId);
      return invoiceSettings;
    },
  );

  public async update(
    data: Partial<InvoiceSettingsData>,
  ): Promise<InvoiceSettingsDetailed> {
    const updatedData = await config.behaviors.invoiceSettings.update(
      this.id,
      data,
    );
    return new InvoiceSettingsDetailed(updatedData);
  }
}

class InvoiceSettingsDetailed extends classes(
  DataModel<InvoiceSettingsData>,
  InvoiceSettings,
) {
  public constructor(data: InvoiceSettingsData) {
    super([data], [data.id]);
    Object.assign(this, data);
  }
}
