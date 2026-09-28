import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type { MailSettingsData } from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ReferenceModel, WithData } from "../../base/index.js";
import { config } from "../../config/index.js";

@GhostMakerModel({
  name: "MailSettings",
})
export class MailSettings extends ReferenceModel {
  public static async find(projectId: string) {
    const data = await config.behaviors.mailSettings.find(projectId);
    if (data !== undefined) {
      return new MailSettingsDetailed(data);
    }
  }

  public static async get(projectId: string) {
    const settings = await MailSettings.find(projectId);
    assertObjectFound(settings, MailSettings, projectId);
    return settings;
  }

  public static ofId(projectId: string) {
    return new MailSettings(projectId);
  }

  public async findCommon(): Promise<MailSettingsDetailed | undefined> {
    return this instanceof MailSettingsDetailed ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<MailSettingsDetailed | undefined> {
    return MailSettings.find(this.id);
  }

  public async getCommon(): Promise<MailSettingsDetailed> {
    return this instanceof MailSettingsDetailed ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<MailSettingsDetailed> {
    return MailSettings.get(this.id);
  }

  public async updateAllowlist(addresses: string[]) {
    return await config.behaviors.mailSettings.updateAllowlist(
      this.id,
      addresses,
    );
  }

  public async updateBlocklist(addresses: string[]) {
    return await config.behaviors.mailSettings.updateBlocklist(
      this.id,
      addresses,
    );
  }
}

export class MailSettingsDetailed extends WithData<MailSettingsData>()(
  MailSettings,
) {
  public readonly allowlist: string[];
  public readonly blocklist: string[];
  public override readonly data: MailSettingsData;
  public constructor(data: MailSettingsData) {
    super(data.projectId);
    this.data = data;
    this.blocklist = data.blacklist;
    this.allowlist = data.whitelist;
  }

  public async addAllowlistEntry(address: string) {
    return await this.updateAllowlist([...this.allowlist, address]);
  }

  public async addBlocklistEntry(address: string) {
    return await this.updateBlocklist([...this.blocklist, address]);
  }

  public async removeAllowlistEntry(address: string) {
    await this.updateAllowlist(this.allowlist.filter((a) => a !== address));
  }

  public async removeBlocklistEntry(address: string) {
    await this.updateBlocklist(this.blocklist.filter((a) => a !== address));
  }
}
