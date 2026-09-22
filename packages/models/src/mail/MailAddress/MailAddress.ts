import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";
import { omit } from "remeda";

import type { MailAddressBackupListQuery } from "../MailAddressBackup/index.js";
import type {
  AutoresponderUpdateRequestData,
  MailAddressListQueryModelData,
  MailAddressListQueryData,
  MailAddressListItemData,
  MailAddressRequestData,
  ForwardRequestData,
  MailAddressData,
} from "./types.js";

import { MailArticleTemplate } from "../../article/Article/templates/MailArticleTemplate.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { MailAddressArchive } from "../MailAddressArchive/index.js";
import { MailAddressBackup } from "../MailAddressBackup/index.js";
import { AggregateMetaData, Bytes } from "../../common/index.js";
import { MailArchiveOrderRequest } from "../../order/index.js";
import { Project } from "../../project/internal.js";
import { Autoresponder } from "../Autoresponder/index.js";
import { MailRateLimit } from "../MailRateLimit/index.js";
import { Article } from "../../article/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "MailAddress",
})
export class MailAddress extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "mail",
    "mailaddress",
  );

  public static readonly imapSsl = "993";

  public static readonly imapStartTls = "143";
  public static readonly mailboxMaxQuotaInGib = 150;
  public static readonly mailboxMinQuotaInGib = 0.2;
  public static readonly mailboxQuotaStepInGib = 0.1;
  public static readonly mailServer = "mail.agenturserver.de";
  public static readonly pop3Ssl = "995";
  public static readonly pop3StartTls = "110";
  public static readonly quotaUsageError = 0.9;
  public static readonly quotaUsageWarning = 0.75;
  public static readonly smtpSsl = "465";
  public static readonly smtpStartTls = "25";
  public readonly backups: MailAddressBackupListQuery;

  public constructor(id: string) {
    super(id);
    this.backups = MailAddressBackup.query({ mailAddress: this });
  }

  public static async create(project: Project, data: MailAddressRequestData) {
    const response = await config.behaviors.mailAddress.createMailAddress(
      project.id,
      data,
    );

    return new MailAddress(response.id);
  }

  public static async createForward(
    project: Project,
    data: ForwardRequestData,
  ) {
    const response = await config.behaviors.mailAddress.createForward(
      project.id,
      data,
    );

    return new MailAddress(response.id);
  }

  public static detectPhishingMail = async (file: File) => {
    return await config.behaviors.mailAddress.detectPhishingMail(file);
  };

  public static async find(id: string) {
    const data = await config.behaviors.mailAddress.find(id);
    if (data !== undefined) {
      return new MailAddressDetailed(data);
    }
  }

  public static async findMailArchiveArticle() {
    const articles = await Article.query({
      templateNames: [MailArticleTemplate.templateName],
      orderable: ["full"],
    }).execute();
    return articles.items[0];
  }

  public static async get(id: string) {
    const mailAddress = await MailAddress.find(id);
    assertObjectFound(mailAddress, MailAddress, id);
    return mailAddress;
  }

  public static getEmailAddressComponents = (
    address = "",
  ): { domain: string; local: string } => {
    const parts = address.split("@");
    invariant(!!parts[0], "Invalid email address");
    return { domain: parts[1] ?? "", local: parts[0] };
  };

  public static ofId(id: string) {
    return new MailAddress(id);
  }

  public static async previewMultipleMailArchiveOrders(
    mailAddresses:
      | readonly MailAddressListItem[]
      | readonly MailAddressDetailed[],
    syncExistingMails?: boolean,
  ) {
    return await Promise.all(
      mailAddresses.map(async (mailAddress) => {
        const preview =
          await mailAddress.previewMailArchiveOrder(syncExistingMails);
        return { mailAddress, preview };
      }),
    );
  }

  public static query(query: MailAddressListQueryModelData = {}) {
    return new MailAddressListQuery(query);
  }

  public async activateCatchAll() {
    await config.behaviors.mailAddress.updateCatchAll(this.id, true);
  }

  public async deactivateCatchAll() {
    await config.behaviors.mailAddress.updateCatchAll(this.id, false);
  }

  public async delete() {
    await config.behaviors.mailAddress.delete(this.id);
  }
  public async disableArchive() {
    await config.behaviors.mailAddress.disableMailArchive(this.id);
  }

  public async findCommon(): Promise<MailAddressCommon | undefined> {
    return this instanceof MailAddressCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<MailAddressDetailed | undefined> {
    return MailAddress.find(this.id);
  }

  public async getCommon(): Promise<MailAddressCommon> {
    return this instanceof MailAddressCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<MailAddressDetailed> {
    return MailAddress.get(this.id);
  }

  public async previewMailArchiveOrder(syncExistingMails = false) {
    const request = new MailArchiveOrderRequest({
      mailAddress: this,
      syncExistingMails,
    });

    return await request.getPreview();
  }

  public async requestRateLimitChange(rateLimit: MailRateLimit | string) {
    const rateLimitId =
      rateLimit instanceof MailRateLimit ? rateLimit.id : rateLimit;
    await config.behaviors.mailAddress.requestRateLimitChange(
      this.id,
      rateLimitId,
    );
  }

  public async updateAddress(address: string) {
    return await config.behaviors.mailAddress.updateAddress(this.id, address);
  }

  public async updateAutoResponder(data: AutoresponderUpdateRequestData) {
    await config.behaviors.mailAddress.updateAutoResponder(this.id, data);
  }

  public async updateForwardAddresses(addresses: string[]) {
    const response = await config.behaviors.mailAddress.updateForwardAddresses(
      this.id,
      addresses,
    );

    return response;
  }

  public async updatePassword(password: string) {
    await config.behaviors.mailAddress.updatePassword(this.id, password);
  }

  public async updateQuota(quotaInGib: number) {
    await config.behaviors.mailAddress.updateQuota(
      this.id,
      Bytes.of(quotaInGib, "GiB").in("bytes"),
    );
  }
}

export class MailAddressCommon extends WithData<MailAddressData>()(
  MailAddress,
) {
  public readonly address: string;
  public readonly archive: MailAddressArchive;
  public readonly autoresponder: Autoresponder;
  public override readonly data: MailAddressData;
  public readonly domain?: string;
  public readonly forwardAddresses: string[];
  public readonly hasStorageUsageWarning: boolean;
  public readonly isArchived: boolean;
  public readonly isBackupInProgress: boolean;
  public readonly isCatchAll: boolean;
  public readonly isForward: boolean;
  public readonly isStorageUsageCritical: boolean;
  public readonly localPart?: string;
  public readonly originalAddress?: string;
  public readonly project: Project;
  public readonly rateLimit?: MailRateLimit;
  public readonly receivingDisabled: boolean;
  public readonly requestedRateLimit?: MailRateLimit;
  public readonly sendingDisabled: boolean;
  public readonly spamProtectionActive: boolean;
  public readonly storageLimit: Bytes;
  public readonly storageUsage: Bytes;
  public readonly storageUsagePercent: number;

  public constructor(data: MailAddressData) {
    super(data.id);
    this.data = data;
    this.project = Project.ofId(data.projectId);
    this.isForward = !this.data.mailbox;
    this.receivingDisabled = data.receivingDisabled;
    this.sendingDisabled = data.mailbox?.sendingEnabled === false;
    this.storageUsagePercent = this.data.mailbox
      ? this.data.mailbox.storageInBytes.current.value /
        this.data.mailbox.storageInBytes.limit
      : 0;
    this.isStorageUsageCritical =
      this.storageUsagePercent >= MailAddress.quotaUsageError;
    this.hasStorageUsageWarning =
      !this.isStorageUsageCritical &&
      this.storageUsagePercent >= MailAddress.quotaUsageWarning;
    this.storageLimit = Bytes.of(
      data.mailbox?.storageInBytes.limit ?? 0,
      "bytes",
    );
    this.storageUsage = Bytes.of(
      data.mailbox?.storageInBytes.current.value ?? 0,
      "bytes",
    );
    this.autoresponder = new Autoresponder(data.autoResponder);
    this.address = data.address;
    this.isArchived = data.isArchived;
    this.isCatchAll = data.isCatchAll;
    this.forwardAddresses = data.forwardAddresses;
    this.domain = data.address.split("@").at(1);
    this.localPart = data.address.split("@").at(0);
    this.spamProtectionActive = data.mailbox?.spamProtection.active ?? false;
    this.isBackupInProgress = data.isBackupInProgress;
    this.archive = new MailAddressArchive(data.archive);
    if (data?.mailbox?.mailsystemSettings.rateLimitId) {
      this.rateLimit = MailRateLimit.ofId(
        data.mailbox.mailsystemSettings.rateLimitId,
      );
    }
    if (data.rateLimitChangeRequest?.rateLimitId) {
      this.requestedRateLimit = MailRateLimit.ofId(
        data.rateLimitChangeRequest.rateLimitId,
      );
    }
    if (data.originalAddress) {
      this.originalAddress = data.originalAddress;
    }
  }

  public async addForwardAddress(address: string) {
    return await this.updateForwardAddresses([
      ...this.data.forwardAddresses,
      address,
    ]);
  }

  public async deactivateAutoResponder() {
    await this.updateAutoResponder({
      message: this.autoresponder.message ?? "",
      active: false,
    });
  }

  public async removeForwardAddress(address: string) {
    await this.updateForwardAddresses(
      this.data.forwardAddresses.filter((a) => a !== address),
    );
  }

  public async updateSpamProtection(active: boolean) {
    await config.behaviors.mailAddress.updateSpamProtection(this.id, {
      relocationMinSpamScore:
        this.data.mailbox?.spamProtection.relocationMinSpamScore ?? 1,
      autoDeleteSpam: this.data.mailbox?.spamProtection.autoDeleteSpam ?? false,
      folder: this.data.mailbox?.spamProtection.folder ?? "spam",
      active,
    });
  }
}

export class MailAddressDetailed extends MailAddressCommon {
  public constructor(data: MailAddressData) {
    super(data);
  }
}

export class MailAddressListItem extends MailAddressCommon {
  public constructor(data: MailAddressListItemData) {
    super(data);
  }
}

export class MailAddressListQuery extends ListQueryModel<MailAddressListQueryModelData> {
  public async execute() {
    const projectId = extractId(this.query.project);

    const { totalCount, items } = projectId
      ? await config.behaviors.mailAddress.list(projectId, {
          limit: config.defaultPaginationLimit,
          ...omit(this.query, ["project"]),
        })
      : await config.behaviors.mailAddress.listForUser({
          limit: config.defaultPaginationLimit,
          ...this.query,
        });

    return new MailAddressList(
      this.query,
      items.map((m) => new MailAddressListItem(m)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { items } = await this.refine({ limit: 1 }).execute();
    return items.length;
  }

  public refine(query: MailAddressListQueryData = {}) {
    return new MailAddressListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class MailAddressList extends WithListData<MailAddressListItem>()(
  MailAddressListQuery,
) {
  public override readonly items: readonly MailAddressListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: MailAddressListQueryData,
    mailAddresses: MailAddressListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(mailAddresses);
    this.totalCount = totalCount;
  }
}
