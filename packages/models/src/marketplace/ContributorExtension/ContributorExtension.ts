import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type { ContributorExtensionAssetAccessTokenProvider as ContributorExtensionAssetAccessTokenProviderType } from "./ContributorExtensionAssetAccessTokenProvider.js";
import type { ContributorExtensionLogoAccessTokenProvider as ContributorExtensionLogoAccessTokenProviderType } from "./ContributorExtensionLogoAccessTokenProvider.js";
import type { PricePlanEditingVariant } from "./PricePlanEditingVariant.js";
import type { Money } from "../../common/index.js";
import type {
  MarketplaceDetailedDescriptionsFormat,
  FrontendFragmentAnchor,
  ExtensionPricePlan,
  ExternalFrontend,
} from "../Extension/index.js";
import type {
  ContributorExtensionUpdatePricingRequestData,
  ContributorExtensionUpdateRequestData,
  ContributorExtensionListQueryData,
  ContributorExtensionListItemData,
  MarketplaceExtensionDeprecation,
  MarketplaceExtendedSupportMeta,
  ContributorExtensionData,
  MarketplaceWebhookUrls,
  ExtensionSecret,
} from "./types.js";

import { ContributorExtensionAssetAccessTokenProvider } from "./ContributorExtensionAssetAccessTokenProvider.js";
import { ContributorExtensionLogoAccessTokenProvider } from "./ContributorExtensionLogoAccessTokenProvider.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { File } from "../../file/File/internal.js";
import { LocalizedText } from "../../common/index.js";
import { Contributor } from "../Contributor/index.js";
import { type DomFile } from "../../file/index.js";
import { Project } from "../../project/index.js";
import { config } from "../../config/index.js";
import {
  type MarketplaceContext,
  ExtensionInstance,
} from "../ExtensionInstance/index.js";
import {
  extensionVariantsPricePlanFactory,
  FrontendFragment,
  ExtensionAsset,
  Extension,
} from "../Extension/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  required,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "ContributorExtension",
})
export class ContributorExtension extends ReferenceModel {
  public readonly assetAccessTokenProvider: ContributorExtensionAssetAccessTokenProviderType;
  public readonly contributorId: string;

  public readonly logoAccessTokenProvider: ContributorExtensionLogoAccessTokenProviderType;

  public constructor(contributorId: string, extensionId: string) {
    super(extensionId);
    this.logoAccessTokenProvider =
      new ContributorExtensionLogoAccessTokenProvider(this);
    this.assetAccessTokenProvider =
      new ContributorExtensionAssetAccessTokenProvider(this);
    this.contributorId = contributorId;
  }

  public static async create(data: { contributorId: string; name: string }) {
    const { contributorId, name } = data;

    const { id } = await config.behaviors.contributorExtension.create(
      contributorId,
      name,
    );
    return new ContributorExtension(contributorId, id);
  }

  public static async find(contributorId: string, extensionId: string) {
    const data = await config.behaviors.contributorExtension.find(
      contributorId,
      extensionId,
    );

    if (data) {
      return new ContributorExtensionDetailed(data);
    }
  }

  public static async get(contributorId: string, extensionId: string) {
    const extension = await this.find(contributorId, extensionId);
    assertObjectFound(extension, ContributorExtension, extensionId);
    return extension;
  }

  public static ofId(contributorId: string, extensionId: string) {
    return new ContributorExtension(contributorId, extensionId);
  }

  public static query(
    contributor: Contributor | string,
    query: ContributorExtensionListQueryData = {},
  ) {
    return new ContributorExtensionListQuery(contributor, query);
  }

  public async delete() {
    return await config.behaviors.contributorExtension.delete(
      this.contributorId,
      this.id,
    );
  }

  public async deleteExtensionAsset(assetRefId: string) {
    return await config.behaviors.contributorExtension.deleteExtensionAsset(
      this.contributorId,
      this.id,
      assetRefId,
    );
  }

  public async findCommon(): Promise<ContributorExtensionCommon | undefined> {
    return this instanceof ContributorExtensionCommon
      ? this
      : this.findDetailed();
  }

  public async findDetailed(): Promise<
    ContributorExtensionDetailed | undefined
  > {
    return ContributorExtension.find(this.contributorId, this.id);
  }

  public async getCommon(): Promise<ContributorExtensionCommon> {
    return this instanceof ContributorExtensionCommon
      ? this
      : this.getDetailed();
  }

  public async getDetailed(): Promise<ContributorExtensionDetailed> {
    return ContributorExtension.get(this.contributorId, this.id);
  }

  public async getLogoUploadRules() {
    return File.getUploadRules("avatar");
  }

  public async getMediaImageUploadRules() {
    return File.getUploadRules("extensionAssetImage");
  }

  public async getMediaVideoUploadRules() {
    return File.getUploadRules("extensionAssetVideo");
  }

  public async getPossibleScopes() {
    return await config.behaviors.contributorExtension.getPossibleScopes();
  }

  public async publish() {
    await config.behaviors.contributorExtension.publish(
      this.contributorId,
      this.id,
    );
  }

  public async requestVerification(
    contributor: Contributor | string,
    extensionId: string,
  ) {
    const contributorId = extractId(contributor);
    await config.behaviors.contributorExtension.requestVerification(
      contributorId,
      extensionId,
    );
  }

  public async unpublish(reason: string) {
    await config.behaviors.contributorExtension.unpublish(
      this.contributorId,
      this.id,
      reason,
    );
  }

  public async update(data: ContributorExtensionUpdateRequestData) {
    return await config.behaviors.contributorExtension.update(
      this.contributorId,
      this.id,
      data,
    );
  }

  public async updateContext(context: MarketplaceContext) {
    await config.behaviors.contributorExtension.updateContext(
      context,
      this.contributorId,
      this.id,
    );
  }

  public async uploadAsset(file: DomFile, assetType: "image" | "video") {
    return await File.upload(file, this.assetAccessTokenProvider, assetType);
  }

  public async uploadLogo(file: DomFile) {
    await File.upload(file, this.logoAccessTokenProvider);
  }
}

export class ContributorExtensionCommon extends WithData<
  ContributorExtensionListItemData | ContributorExtensionData
>()(ContributorExtension) {
  public readonly amountOfInstances: number;
  public readonly assets: ExtensionAsset[];
  public readonly blocked?: boolean;
  public readonly context?: MarketplaceContext;
  public readonly contributor: Contributor;
  public readonly customer: Customer;
  public override readonly data:
    | ContributorExtensionListItemData
    | ContributorExtensionData;
  public readonly deletionDeadline?: DateTime;
  public readonly deprecation?: MarketplaceExtensionDeprecation;
  public readonly description?: string;
  public readonly detailedDescription: LocalizedText<MarketplaceDetailedDescriptionsFormat>;
  public readonly disabled?: boolean;
  public readonly externalFrontends: ExternalFrontend[];
  public readonly frontendFragments: FrontendFragment[];
  public readonly logo?: File;
  public readonly name: string;
  public readonly pricing?: ExtensionPricePlan;
  public readonly published?: boolean;
  public readonly requestedChanges?: {
    webhookUrls?: MarketplaceWebhookUrls | Record<string, never>;
    context?: MarketplaceContext;
    scopes?: string[];
  };
  public readonly scopes?: string[];
  public readonly secrets: ExtensionSecret[];
  public readonly state?: "disabled" | "enabled" | "blocked";
  public readonly subTitle: LocalizedText;
  public readonly support?: MarketplaceExtendedSupportMeta;
  public readonly tags?: string[];
  public readonly verificationRequested: boolean;
  public readonly verified: boolean;
  public readonly webhookUrls?: MarketplaceWebhookUrls;

  public constructor(
    data: ContributorExtensionListItemData | ContributorExtensionData,
  ) {
    const { contributorId, id } = data;
    super(contributorId, id);
    this.data = data;
    this.contributor = Contributor.ofId(contributorId);
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
    this.amountOfInstances = this.data.statistics.amountOfInstances ?? 0;
    this.pricing = extensionVariantsPricePlanFactory(
      this,
      data.pricing,
      data.pricingDetails,
    );

    this.blocked = data.blocked;
    this.deprecation = data.deprecation;
    this.deletionDeadline = data.deletionDeadline
      ? DateTime.fromISO(data.deletionDeadline)
      : undefined;
    this.externalFrontends = data.externalFrontends ?? [];
    this.frontendFragments = data.frontendFragments
      ? Object.entries(data.frontendFragments)
          .filter(([key]) => Extension.isValidAnchor(key))
          .map(
            ([key, value]) =>
              new FrontendFragment(
                key as unknown as FrontendFragmentAnchor,
                value,
                this.name,
                this,
              ),
          )
      : [];
    this.requestedChanges = data.requestedChanges;
    this.state = data.state;
    this.secrets = data.secrets.map((s) => ({
      usableUntil: s.usableUntil ? DateTime.fromISO(s.usableUntil) : undefined,
      secretId: s.secretId,
    }));
    this.tags = data.tags;
    this.support = data.support;
    this.verificationRequested = data.verificationRequested;
    this.verified = data.verified;
    this.webhookUrls = data.webhookUrls;
    this.published = data.published;
    this.disabled = data.disabled;
    this.customer = Customer.ofId(contributorId);
  }

  public async addFrontendFragment(name: string, url: string, anchor: string) {
    const newFragment = {
      additionalProperties: {
        title: JSON.stringify({ de: name }),
        anchor,
      },
      url,
    };

    const updatedFragments = {
      ...(this.data.frontendFragments ?? {}),
      [anchor]: newFragment,
    };

    return await this.update({
      frontendFragments: updatedFragments,
    });
  }

  public async deleteExtensionSecrets(secretId: string) {
    return await config.behaviors.contributorExtension.deleteExtensionSecret(
      this.contributorId,
      this.id,
      secretId,
    );
  }

  public async deleteExternalFrontend() {
    return await this.update({
      externalFrontends: null as unknown as undefined,
    });
  }

  public async deleteSupport() {
    return await this.update({
      support: null as unknown as undefined,
    });
  }
  public async deleteWebhooks() {
    return await this.update({
      webhookUrls: null as unknown as MarketplaceWebhookUrls,
    });
  }

  public findFrontendFragment(anchor: FrontendFragmentAnchor) {
    return this.frontendFragments.find((f) => f.anchor === anchor);
  }

  public async generateSecret() {
    return await config.behaviors.contributorExtension.generateExtensionSecret(
      this.contributorId,
      this.id,
    );
  }

  public async getNextPossiblePriceChangeDate() {
    const response = await config.behaviors.contributorExtension.updatePricing(
      this.id,
      this.contributorId,
      {
        priceInCents: 0,
        dryRun: true,
      },
    );

    if ("nextPossiblePriceChange" in response) {
      const raw = response.nextPossiblePriceChange;

      if (typeof raw === "string") {
        return DateTime.fromISO(raw);
      }
    }
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
    const context = required(this.context, "context");

    const { id } = await config.behaviors.extensionInstance.create({
      consentedScopes: this.scopes ?? [],
      variantKey: variantKey,
      context,
      extensionId: this.id,
      contextId: contextId,
    });

    return new ExtensionInstance(id);
  }

  public async updateAssetOrder(assetIds: string[]) {
    return this.update({ assets: assetIds });
  }

  public async updateContext(context: MarketplaceContext) {
    return await config.behaviors.contributorExtension.updateContext(
      context,
      this.contributorId,
      this.id,
    );
  }

  public async updateDetails(
    title: string,
    subTitleDE: string,
    description: string,
    detailedDescriptionDE?: string,
  ) {
    if (detailedDescriptionDE) {
      return await this.update({
        detailedDescriptions: {
          de: {
            markdown: detailedDescriptionDE,
          },
        },
        subTitle: {
          de: subTitleDE,
        },
        description: description,
        name: title,
      });
    }
    return await this.update({
      detailedDescriptions: null as unknown as undefined,
      subTitle: {
        de: subTitleDE,
      },
      description: description,
      name: title,
    });
  }

  public async updateExternalFrontend(url: string) {
    return await this.update({
      externalFrontends: [
        {
          name: "external_frontend",
          url: url,
        },
      ],
    });
  }
  public async updatePrice(price: Money) {
    return await config.behaviors.contributorExtension.updatePricing(
      this.id,
      this.contributorId,
      {
        priceInCents: price.getAmount(),
        dryRun: false,
      },
    );
  }

  public async updatePricePlan(
    priceVariants: PricePlanEditingVariant[],
    isUpgradeAllowed: boolean,
    isDowngradeAllowed: boolean,
  ) {
    const variants = priceVariants.map((v) => ({
      descriptionChangeType: v.descriptionChangeType,
      isDeletionScheduled: v.isDeletionScheduled,
      isBookingStopped: v.isBookingStopped,
      priceInCents: v.price.getAmount(),
      description: v.description,
      name: v.name,
      key: v.key,
    }));
    const data: ContributorExtensionUpdatePricingRequestData = {
      pricePlan: {
        isDowngradeAllowed: isDowngradeAllowed,
        isUpgradeAllowed: isUpgradeAllowed,
        variants,
      },
      dryRun: false,
    };

    return await config.behaviors.contributorExtension.updatePricing(
      this.id,
      this.contributorId,
      data,
    );
  }

  public async updatePricePlanDryRun(priceVariants: PricePlanEditingVariant[]) {
    const variants = priceVariants.map((v) => ({
      descriptionChangeType: v.descriptionChangeType,
      isDeletionScheduled: v.isDeletionScheduled,
      isBookingStopped: v.isBookingStopped,
      priceInCents: v.price.getAmount(),
      description: v.description,
      name: v.name,
      key: v.key,
    }));

    const data: ContributorExtensionUpdatePricingRequestData = {
      pricePlan: {
        variants,
      },
      dryRun: true,
    };

    return await config.behaviors.contributorExtension.updatePricing(
      this.id,
      this.contributorId,
      data,
    );
  }

  public async updateScopes(scopes: string[]) {
    return await this.update({ scopes: scopes });
  }

  public async updateSupport(email: string, phone?: string) {
    return await this.update({
      support: {
        phone: phone && phone != "" ? phone : (null as unknown as undefined),
        email: email,
      },
    });
  }

  public async updateWebhooksMultiple(
    extensionAddedToContext: string,
    extensionInstanceUpdated: string,
    extensionInstanceSecretRotated: string,
    extensionInstanceRemovedFromContext: string,
  ) {
    return await this.update({
      webhookUrls: {
        extensionInstanceRemovedFromContext: {
          url: extensionInstanceRemovedFromContext,
        },
        extensionInstanceSecretRotated: {
          url: extensionInstanceSecretRotated,
        },
        extensionInstanceUpdated: {
          url: extensionInstanceUpdated,
        },
        extensionAddedToContext: {
          url: extensionAddedToContext,
        },
      },
    });
  }

  public async updateWebhooksSingle(webhookUrl: string) {
    return await this.update({
      webhookUrls: {
        extensionInstanceRemovedFromContext: {
          url: webhookUrl,
        },
        extensionInstanceSecretRotated: {
          url: webhookUrl,
        },
        extensionInstanceUpdated: {
          url: webhookUrl,
        },
        extensionAddedToContext: {
          url: webhookUrl,
        },
      },
    });
  }
}

export class ContributorExtensionDetailed extends ContributorExtensionCommon {
  public override readonly data: ContributorExtensionData;
  public constructor(data: ContributorExtensionData) {
    super(data);
    this.data = data;
  }
}

export class ContributorExtensionListItem extends ContributorExtensionCommon {
  public override readonly data: ContributorExtensionListItemData;
  public constructor(data: ContributorExtensionListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContributorExtensionListQuery extends ListQueryModel<ContributorExtensionListQueryData> {
  public readonly contributor: Contributor | string;
  public constructor(
    contributor: Contributor | string,
    query: ContributorExtensionListQueryData = {},
  ) {
    super(query, {
      dependencies: [extractId(contributor)],
    });
    this.contributor = contributor;
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.contributorExtension.list(
        extractId(this.contributor),
        this.query,
      );

    return new ContributorExtensionList(
      extractId(this.contributor),
      this.query,
      items.map((d) => new ContributorExtensionListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ContributorExtensionListQueryData) {
    return new ContributorExtensionListQuery(this.contributor, {
      ...this.query,
      ...query,
    });
  }
}

export class ContributorExtensionList extends WithListData<ContributorExtensionListItem>()(
  ContributorExtensionListQuery,
) {
  public override readonly items: readonly ContributorExtensionListItem[];
  public override readonly totalCount: number;
  public constructor(
    contributor: Contributor | string,
    query: ContributorExtensionListQueryData,
    extensions: ContributorExtensionListItem[],
    totalCount: number,
  ) {
    super(contributor, query);
    this.items = Object.freeze(extensions);
    this.totalCount = totalCount;
  }
}
