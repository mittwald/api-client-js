import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type {
  LeadHosterInformationData,
  LeadTechnologyData,
  LeadListQueryData,
  LeadListItemData,
  LeadCompanyData,
  LeadMetricsData,
  LeadFilterType,
  LeadData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { getFormattedSalesVolume } from "../util/helper";
import { AggregateMetaData } from "../../common";
import { LOCATION_DACH_ZIP_CODE } from "../City";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Lead",
})
export class Lead extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("leadfinder", "lead");

  private readonly customerId: string;

  public constructor(customerId: string, id: string) {
    super(id);
    this.customerId = customerId;
  }

  public static async find(customerId: string, id: string) {
    const data = await config.behaviors.lead.find(customerId, id);
    if (data) {
      return new LeadDetailed(customerId, data);
    }
  }

  public static async get(customerId: string, id: string) {
    const lead = await this.find(customerId, id);
    assertObjectFound(lead, Lead, id);
    return lead;
  }

  public static ofId(customerId: string, leadId: string) {
    return new Lead(customerId, leadId);
  }

  public static query(customerId: string, query: LeadListQueryData = {}) {
    return new LeadListQuery(customerId, query);
  }

  public static queryFromStoreFilters(
    customerId: string,
    filterOptions: LeadFilterType,
  ) {
    const renamedTechnologies = filterOptions?.technologies.map((value) => {
      switch (value) {
        case "TYPO3":
          return "TYPO3 CMS";
        default:
          return value;
      }
    });

    const builtLocationFilter =
      filterOptions?.location &&
      filterOptions.location.zipCode !== LOCATION_DACH_ZIP_CODE
        ? {
            locationRadiusInKm: Number.parseInt(filterOptions.location.radius),
            locationPostCode: filterOptions.location.zipCode,
            locationCity: filterOptions.location.city,
          }
        : undefined;

    return new LeadListQuery(customerId, {
      businessFields: filterOptions?.businessFields,
      technologies: renamedTechnologies,
      ...builtLocationFilter,
      employeeCountMin: filterOptions?.employeeCount?.min
        ? Number.parseInt(filterOptions.employeeCount.min)
        : undefined,
      employeeCountMax: filterOptions?.employeeCount?.max
        ? Number.parseInt(filterOptions.employeeCount.max)
        : undefined,
    });
  }

  public async findCommon(): Promise<LeadCommon | undefined> {
    return this instanceof LeadCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<LeadDetailed | undefined> {
    return Lead.find(this.customerId, this.id);
  }

  public async getCommon(): Promise<LeadCommon> {
    return this instanceof LeadCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<LeadDetailed> {
    return Lead.get(this.customerId, this.id);
  }

  public async unlock() {
    await config.behaviors.lead.unlock(this.customerId, this.id);
  }
}

export class LeadCommon extends WithData<LeadListItemData | LeadData>()(Lead) {
  public readonly businessFields: string;
  public readonly company: LeadCompanyData;
  public override readonly data: LeadListItemData | LeadData;
  public readonly description: string;
  public readonly hosterInformation: LeadHosterInformationData;
  public readonly mainTechnology: LeadTechnologyData | undefined;
  public readonly mainTechnologyWithVersionText: string | undefined;
  public readonly metrics: LeadMetricsData;
  public readonly potential: number;
  public readonly scannedAt: DateTime | undefined;
  public readonly screenshotBase64: string;
  public readonly technologies: LeadTechnologyData[];

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

  public constructor(customerId: string, data: LeadListItemData | LeadData) {
    super(customerId, data.leadId);
    this.data = data;
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
    this.scannedAt = data.scannedAt
      ? DateTime.fromISO(data.scannedAt)
      : undefined;
    this.hosterInformation = data.hoster;
  }
}

export class LeadDetailed extends LeadCommon {
  public override readonly data: LeadData;

  public constructor(customerId: string, data: LeadData) {
    super(customerId, data);
    this.data = data;
  }
}

export class LeadListItem extends LeadCommon {
  public override readonly data: LeadListItemData;

  public constructor(customerId: string, data: LeadListItemData) {
    super(customerId, data);
    this.data = data;
  }
}

export class LeadListQuery extends ListQueryModel<LeadListQueryData> {
  private readonly customerId: string;

  public constructor(customerId: string, query: LeadListQueryData = {}) {
    super(query);
    this.customerId = customerId;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.lead.list(
      this.customerId,
      this.query,
    );

    return new LeadList(
      this.customerId,
      this.query,
      items.map((l) => new LeadListItem(this.customerId, l)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine(this.customerId, {
      limit: 0,
    }).execute();
    return totalCount;
  }

  public refine(customerId: string, query: LeadListQueryData) {
    return new LeadListQuery(customerId, {
      ...this.query,
      ...query,
    });
  }
}

export class LeadList extends WithListData<LeadListItem>()(LeadListQuery) {
  public override readonly items: readonly LeadListItem[];
  public override readonly totalCount: number;

  public constructor(
    customerId: string,
    query: LeadListQueryData,
    leads: LeadListItem[],
    totalCount: number,
  ) {
    super(customerId, query);
    this.items = Object.freeze(leads);
    this.totalCount = totalCount;
  }
}
