import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { MarketplaceContext } from "../ExtensionInstance";
import type { ExtensionPricePlan } from "./ExtensionPricePlan";
import type {
  MarketplaceDetailedDescriptionsFormat,
  ExtensionListQueryData,
  FrontendFragmentAnchor,
  MarketplaceSupportMeta,
  ExtensionListItemData,
  ExternalFrontend,
  ExtensionData,
} from "./types";

import { extensionVariantsPricePlanFactory } from "./ExtensionPricePlan";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { AggregateMetaData, LocalizedText } from "../../common";
import { ContributorExtension } from "../ContributorExtension";
import { ExtensionInstance } from "../ExtensionInstance";
import { FrontendFragment } from "./FrontendFragment";
import { ExtensionAsset } from "./ExtensionAsset";
import { frontendFragmentAnchors } from "./types";
import { File } from "../../file/File/internal";
import { Contributor } from "../Contributor";
import { Customer } from "../../customer";
import { Project } from "../../project";
import { config } from "../../config";
import { ListQueryModel, ReferenceModel, WithListData, WithData } from "../../base";

@GhostMakerModel({
  name: "Extension",
})
export class Extension extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "extension",
    "extension",
  );

  public static async find(id: string) {
    const data = await config.behaviors.extension.find(id);

    if (data) {
      return new ExtensionDetailed(data);
    }
  }

  public static async get(id: string) {
    const extension = await this.find(id);
    assertObjectFound(extension, Extension, id);
    return extension;
  }

  public static isValidAnchor = (
    anchor: string,
  ): anchor is FrontendFragmentAnchor => {
    return frontendFragmentAnchors.includes(anchor as FrontendFragmentAnchor);
  };

  public static ofId(id: string) {
    return new Extension(id);
  }

  public static query(query: ExtensionListQueryData = {}) {
    return new ExtensionListQuery(query);
  }

  public async findCommon(): Promise<ExtensionCommon | undefined> {
    return this instanceof ExtensionCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ExtensionDetailed | undefined> {
    return Extension.find(this.id);
  }

  public async getCommon(): Promise<ExtensionCommon> {
    return this instanceof ExtensionCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ExtensionDetailed> {
    return Extension.get(this.id);
  }
}

export class ExtensionCommon extends WithData<
  ExtensionListItemData | ExtensionData
>()(
  Extension,
) {
  public readonly amountOfInstances?: number;
  public readonly assets: ExtensionAsset[];
  public readonly context: MarketplaceContext;
  public readonly contributor: Contributor;
  public readonly createdAt?: DateTime;
  public override readonly data: ExtensionListItemData | ExtensionData;
  public readonly description?: string;
  public readonly detailedDescription: LocalizedText<MarketplaceDetailedDescriptionsFormat>;
  public readonly externalFrontends: ExternalFrontend[];
  public readonly frontendFragments: FrontendFragment[];
  public readonly logo?: File;
  public readonly name: string;
  public readonly pricing: ExtensionPricePlan;
  public readonly scopes: string[];
  public readonly subTitle: LocalizedText;
  public readonly support?: MarketplaceSupportMeta;

  public get hasFrontends(): boolean {
    return this.frontendFragments.length > 0 || this.externalFrontends.length > 0;
  }

  public constructor(data: ExtensionListItemData | ExtensionData) {
    super(data.id);
    this.data = data;
    this.contributor = Contributor.ofId(data.contributorId);
    this.name = data.name;
    this.description = data.description;
    this.detailedDescription = new LocalizedText(data.detailedDescriptions);
    this.subTitle = new LocalizedText(data.subTitle);
    this.context = data.context;
    this.scopes = data.scopes;
    this.logo = data.logoRefId ? File.ofId(data.logoRefId) : undefined;
    this.assets = data.assets
      .sort((a, b) => a.index - b.index)
      .map((a) => new ExtensionAsset(a));
    this.amountOfInstances = this.data.statistics.amountOfInstances;
    this.pricing = extensionVariantsPricePlanFactory(
      this,
      data.pricing,
      data.pricingDetails,
    );
    this.frontendFragments = data.frontendFragments
      ? Object.entries(data.frontendFragments)
          .filter(([key]) => Extension.isValidAnchor(key))
          .map(
            ([key, value]) =>
              new FrontendFragment(
                key as FrontendFragmentAnchor,
                value,
                this.name,
                ContributorExtension.ofId(this.contributor.id, this.id),
              ),
          )
      : [];
    this.support = data.support;
    this.createdAt =
      "createdAt" in data ? DateTime.fromISO(data.createdAt) : undefined;

    this.externalFrontends = data.externalFrontends ?? [];
  }

  public findFrontendFragment(anchor: FrontendFragmentAnchor) {
    return this.frontendFragments.find((f) => f.anchor === anchor);
  }

  public async getTargetCustomer(contextId: string) {
    if (this.context === "project") {
      const project = await Project.ofId(contextId).getDetailed();
      return project.customer;
    } else {
      return Customer.ofId(contextId);
    }
  }

  public async install(contextId: string, variantKey?: string) {
    const { id } = await config.behaviors.extensionInstance.create({
      consentedScopes: this.scopes,
      variantKey: variantKey,
      context: this.context,
      extensionId: this.id,
      contextId: contextId,
    });

    return new ExtensionInstance(id);
  }

  public async order(contextId: string, variantKey?: string) {
    return await config.behaviors.extension.order(this.id, {
      consentedScopes: this.scopes,
      ...(this.context === "customer"
        ? { customerId: contextId }
        : { projectId: contextId }),
      variantKey: variantKey,
    });
  }
}

export class ExtensionDetailed extends ExtensionCommon {
  public override readonly data: ExtensionData;
  public constructor(data: ExtensionData) {
    super(data);
    this.data = data;
  }
}

export class ExtensionListItem extends ExtensionCommon {
  public override readonly data: ExtensionListItemData;
  public constructor(data: ExtensionListItemData) {
    super(data);
    this.data = data;
  }
}

export class ExtensionListQuery extends ListQueryModel<ExtensionListQueryData> {
  public constructor(query: ExtensionListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.extension.list(
      this.query,
    );

    return new ExtensionList(
      this.query,
      items.map((d) => new ExtensionListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ExtensionListQueryData) {
    return new ExtensionListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ExtensionList extends WithListData<ExtensionListItem>()(
  ExtensionListQuery,
) {
  public override readonly items: readonly ExtensionListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ExtensionListQueryData,
    extensions: ExtensionListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(extensions);
    this.totalCount = totalCount;
  }
}
