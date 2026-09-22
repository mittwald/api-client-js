import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { ContributorAvatarAccessTokenProvider as ContributorAvatarAccessTokenProviderType } from "./ContributorAvatarAccessTokenProvider.js";
import type { ContributorIncomingInvoiceListQuery as ContributorIncomingInvoiceListQueryType } from "./ContributorIncomingInvoice.js";
import type { ContributorExtensionListQuery } from "../ContributorExtension/index.js";
import type {
  ContributorUpdateRequestData,
  ContributorListQueryData,
  ContributorListItemData,
  ContributorImprint,
  OwnContributorData,
  ContributorState,
  ContributorData,
} from "./types.js";

import { ContributorAvatarAccessTokenProvider } from "./ContributorAvatarAccessTokenProvider.js";
import { ContributorIncomingInvoiceListQuery } from "./ContributorIncomingInvoice.js";
import { ContributorOutgoingInvoice } from "./ContributorOutgoingInvoice.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContributorExtension } from "../ContributorExtension/index.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { File } from "../../file/File/internal.js";
import { LocalizedText } from "../../common/index.js";
import { type DomFile } from "../../file/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

const mittwaldContributorId = "322ba411-aafc-493a-b8ad-a42a01939f42";

@GhostMakerModel({
  name: "Contributor",
})
export class Contributor extends ReferenceModel {
  public readonly avatarAccessTokenProvider: ContributorAvatarAccessTokenProviderType;

  public readonly incomingInvoices: ContributorIncomingInvoiceListQueryType;

  public readonly isMittwald: boolean;

  public readonly ownExtensions: ContributorExtensionListQuery;

  public constructor(id: string) {
    super(id);
    this.ownExtensions = ContributorExtension.query(this);
    this.avatarAccessTokenProvider = new ContributorAvatarAccessTokenProvider(
      this,
    );
    this.incomingInvoices = new ContributorIncomingInvoiceListQuery(this);
    this.isMittwald = id === mittwaldContributorId;
  }
  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.contributor.find(id, options);

    if (data) {
      if ("verificationRequested" in data) {
        return new OwnContributorDetailed(data);
      }
      return new ContributorDetailed(data);
    }
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const contributor = await this.find(id, options);
    assertObjectFound(contributor, Contributor, id);
    return contributor;
  }

  public static ofId(id: string) {
    return new Contributor(id);
  }

  public async contributorRequestVerification() {
    return await config.behaviors.contributor.contributorRequestVerification(
      this.id,
    );
  }

  public async createStripeOnboardingLink() {
    return await config.behaviors.contributor.getStripeOnboardingLink(this.id);
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<ContributorCommon | undefined> {
    return this instanceof ContributorCommon
      ? this
      : this.findDetailed(options);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<OwnContributorDetailed | ContributorDetailed | undefined> {
    return Contributor.find(this.id, options);
  }

  public async getAvatarUploadRules() {
    return File.getUploadRules("avatar");
  }

  public async getBillingInformation() {
    return await config.behaviors.contributor.getBillingInformation(this.id);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<ContributorCommon> {
    return this instanceof ContributorCommon ? this : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<OwnContributorDetailed | ContributorDetailed> {
    return Contributor.get(this.id, options);
  }

  public async getStripeLoginLink() {
    return await config.behaviors.contributor.getStripeLoginLink(this.id);
  }

  public async listOutgoingInvoices() {
    const response = await config.behaviors.contributor.listOnBehalfInvoices(
      this.id,
    );
    return response.map((i) => new ContributorOutgoingInvoice(i));
  }

  public query(query: ContributorListQueryData = {}) {
    return new ContributorListQuery(query);
  }

  public async removeAvatar() {
    await config.behaviors.contributor.removeAvatar(this.id);
  }

  public async update(data: ContributorUpdateRequestData) {
    if (data.deviatingSupportInformation?.phone == "") {
      data.deviatingSupportInformation.phone = null as unknown as undefined;
    }
    return await config.behaviors.contributor.update(this.id, {
      ...data,
      descriptions:
        data.descriptions?.de == ""
          ? (null as unknown as undefined)
          : data.descriptions,
      homepage:
        data.homepage == "" ? (null as unknown as undefined) : data.homepage,
    });
  }

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.avatarAccessTokenProvider);
  }
}

export class ContributorCommon extends WithData<
  ContributorListItemData | ContributorData
>()(Contributor) {
  public readonly avatar?: File;
  public readonly contributorNumber?: string;
  public readonly customer: Customer;
  public override readonly data: ContributorListItemData | ContributorData;
  public readonly description: LocalizedText;
  public readonly email?: string;
  public readonly homepage?: string;
  public readonly imprint?: ContributorImprint;
  public readonly name: string;
  public readonly phone?: string;
  public readonly state: ContributorState;

  public constructor(data: ContributorListItemData | ContributorData) {
    super(data.id);
    this.data = data;
    this.customer = Customer.ofId(data.customerId);
    this.name = data.name;
    this.description = new LocalizedText(data.descriptions);
    this.email = data.supportInformation.email;
    this.phone = data.supportInformation.phone;
    this.homepage = data.homepage;
    this.state = data.state;
    this.avatar = data.logoRefId ? File.ofId(data.logoRefId) : undefined;
    this.imprint = data.imprint;
    if (
      "contributorNumber" in data &&
      typeof data.contributorNumber === "string"
    ) {
      this.contributorNumber = data.contributorNumber;
    }
  }
}

export class ContributorDetailed extends ContributorCommon {
  public override readonly data: ContributorData;
  public constructor(data: ContributorData) {
    super(data);
    this.data = data;
  }
}

export class OwnContributorDetailed extends ContributorCommon {
  public override readonly data: OwnContributorData;
  public readonly logoInherited?: boolean;
  public readonly verificationRequested: boolean;
  public readonly verified: boolean;

  public constructor(data: OwnContributorData) {
    super(data);
    this.data = data;

    this.verificationRequested = data.verificationRequested;
    this.verified = data.verified;
    this.logoInherited = data.logoInherited;
  }
}

export class ContributorListItem extends ContributorCommon {
  public override readonly data: ContributorListItemData;
  public constructor(data: ContributorListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContributorListQuery extends ListQueryModel<ContributorListQueryData> {
  public constructor(query: ContributorListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.contributor.list(
      this.query,
    );

    return new ContributorList(
      this.query,
      items.map((d) => new ContributorListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ContributorListQueryData) {
    return new ContributorListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ContributorList extends WithListData<ContributorListItem>()(
  ContributorListQuery,
) {
  public override readonly items: readonly ContributorListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ContributorListQueryData,
    contributors: ContributorListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(contributors);
    this.totalCount = totalCount;
  }
}
