import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { LeadTechnologyData } from "../Lead/index.js";
import type {
  UnlockedLeadHosterInformationData,
  UnlockedLeadSocialMediaData,
  UnlockedLeadListQueryData,
  UnlockedLeadListItemData,
  UnlockedLeadCompanyData,
  UnlockedLeadContactData,
  UnlockedLeadMetricsData,
  UnlockedLeadData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { getFormattedSalesVolume } from "../util/helper.js";
import { AggregateMetaData } from "../../common/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "UnlockedLead",
})
export class UnlockedLead extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "leadfinder",
    "unlockedlead",
  );

  public readonly customerId: string;

  public constructor(customerId: string, id: string) {
    super(id);
    this.customerId = customerId;
  }

  public static async find(customerId: string, id: string) {
    const data = await config.behaviors.unlockedLead.find(customerId, id);
    if (data) {
      return new UnlockedLeadDetailed(customerId, data);
    }
  }

  public static async get(customerId: string, id: string) {
    const unlockedLead = await this.find(customerId, id);
    assertObjectFound(unlockedLead, UnlockedLead, id);
    return unlockedLead;
  }

  public static ofId(customerId: string, id: string) {
    return new UnlockedLead(customerId, id);
  }

  public static query(
    customerId: string,
    query: UnlockedLeadListQueryData = {},
  ) {
    return new UnlockedLeadListQuery(customerId, query);
  }

  public async findCommon(): Promise<UnlockedLeadCommon | undefined> {
    return this instanceof UnlockedLeadCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<UnlockedLeadDetailed | undefined> {
    return UnlockedLead.find(this.customerId, this.id);
  }

  public async getCommon(): Promise<UnlockedLeadCommon> {
    return this instanceof UnlockedLeadCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<UnlockedLeadDetailed> {
    return UnlockedLead.get(this.customerId, this.id);
  }

  public async removeReservation() {
    await config.behaviors.unlockedLead.removeReservation(
      this.customerId,
      this.id,
    );
  }

  public async reserve() {
    await config.behaviors.unlockedLead.reserve(this.customerId, this.id);
  }
}

export class UnlockedLeadCommon extends WithData<
  UnlockedLeadListItemData | UnlockedLeadData
>()(UnlockedLead) {
  public readonly actualUrl: string;
  public readonly businessFields: string;
  public readonly company: UnlockedLeadCompanyData;
  public readonly contact: UnlockedLeadContactData;
  public override readonly data: UnlockedLeadListItemData | UnlockedLeadData;
  public readonly description: string;
  public readonly domain: string;
  public readonly hosterInformation: UnlockedLeadHosterInformationData;
  public readonly isReserved: boolean;
  public readonly languages: string[];
  public readonly mainTechnology: LeadTechnologyData | undefined;
  public readonly mainTechnologyWithVersionText: string | undefined;
  public readonly metrics: UnlockedLeadMetricsData;
  public readonly potential: number;
  public readonly reservationAllowed: boolean;
  public readonly reservedAt: DateTime | undefined;
  public readonly scannedAt?: DateTime;
  public readonly screenshotBase64: string;
  public readonly socialMedia: UnlockedLeadSocialMediaData[];
  public readonly technologies: LeadTechnologyData[];
  public readonly unlockedAt: DateTime;

  public get formattedSalesVolume(): string {
    return getFormattedSalesVolume(this.company.salesVolume);
  }

  public get potentialType(): "medium" | "high" | "low" {
    if (this.potential > 60) {
      return "high";
    } else if (this.potential > 50) {
      return "medium";
    } else {
      return "low";
    }
  }

  public constructor(
    customerId: string,
    data: UnlockedLeadListItemData | UnlockedLeadData,
  ) {
    super(customerId, data.leadId);
    this.data = data;
    this.domain = data.domain;
    this.actualUrl = data.actualUrl;
    this.businessFields = data.businessFields.join(", ");
    this.description = data.description;
    this.screenshotBase64 = data.screenshot;
    this.potential = Math.round(data.potential * 100);
    this.metrics = data.metrics;
    this.mainTechnology = data.mainTechnology;
    this.mainTechnologyWithVersionText = data.mainTechnology
      ? `${data.mainTechnology.name}${data.mainTechnology.version ? ` ${data.mainTechnology.version}` : ""}`
      : undefined;
    this.company = data.company;
    this.technologies = data.technologies;
    this.reservedAt = data.reservedAt
      ? DateTime.fromISO(data.reservedAt)
      : undefined;
    this.isReserved = !!data.reservedAt;
    this.unlockedAt = DateTime.fromISO(data.unlockedAt);
    this.scannedAt = data.scannedAt
      ? DateTime.fromISO(data.scannedAt)
      : undefined;
    this.socialMedia = data.socialMedia;
    this.hosterInformation = data.hoster;
    this.contact = data.contact;
    this.languages = data.languages;
    this.reservationAllowed = data.reservationAllowed ?? false;
  }
}

export class UnlockedLeadDetailed extends UnlockedLeadCommon {
  public override readonly data: UnlockedLeadData;

  public constructor(customerId: string, data: UnlockedLeadData) {
    super(customerId, data);
    this.data = data;
  }
}

export class UnlockedLeadListItem extends UnlockedLeadCommon {
  public override readonly data: UnlockedLeadListItemData;

  public constructor(customerId: string, data: UnlockedLeadListItemData) {
    super(customerId, data);
    this.data = data;
  }
}

export class UnlockedLeadListQuery extends ListQueryModel<UnlockedLeadListQueryData> {
  private readonly customerId: string;

  public constructor(
    customerId: string,
    query: UnlockedLeadListQueryData = {},
  ) {
    super(query);
    this.customerId = customerId;
  }

  public static reserved(
    customerId: string,
    query: UnlockedLeadListQueryData = {},
  ) {
    return new UnlockedLeadListQuery(customerId, {
      ...query,
      reserved: true,
    });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.unlockedLead.list(
      this.customerId,
      this.query,
    );

    return new UnlockedLeadList(
      this.customerId,
      this.query,
      items.map((item) => new UnlockedLeadListItem(this.customerId, item)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine(this.customerId, {
      limit: 0,
    }).execute();
    return totalCount;
  }

  public refine(customerId: string, query: UnlockedLeadListQueryData) {
    return new UnlockedLeadListQuery(customerId, {
      ...this.query,
      ...query,
    });
  }
}

export class UnlockedLeadList extends WithListData<UnlockedLeadListItem>()(
  UnlockedLeadListQuery,
) {
  public override readonly items: readonly UnlockedLeadListItem[];
  public override readonly totalCount: number;

  public constructor(
    customerId: string,
    query: UnlockedLeadListQueryData,
    leads: UnlockedLeadListItem[],
    totalCount: number,
  ) {
    super(customerId, query);
    this.items = Object.freeze(leads);
    this.totalCount = totalCount;
  }
}
