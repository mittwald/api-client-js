import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { FrontendFragmentAnchor } from "../Extension";
import type { UserCommon } from "../../user";
import type {
  ExtensionInstanceListQueryModelData,
  ExtensionInstanceCreateRequestData,
  ExtensionInstanceChargeability,
  ExtensionInstanceListItemData,
  AccessTokenRetrievalKey,
  ExtensionInstanceData,
} from "./types";

import { ExtensionInstanceContract } from "./ExtensionInstanceContract";
import { ExtensionInstanceContext } from "./ExtensionInstanceContext";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { AggregateMetaData, LocalizedText } from "../../common";
import { ContributorExtension } from "../ContributorExtension";
import { Customer } from "../../customer/Customer/Customer";
import { Project } from "../../project/internal";
import { Contributor } from "../Contributor";
import { config } from "../../config";
import {
  ExtensionPricePlanVariant,
  FrontendFragment,
  Extension,
} from "../Extension";
import { type QueryResponseData, ListQueryModel, ReferenceModel, WithListData, extractId, WithData } from "../../base";

@GhostMakerModel({
  name: "ExtensionInstance",
})
export class ExtensionInstance extends ReferenceModel {
  public static readonly aggregateMetaData = new AggregateMetaData(
    "extension",
    "extensionInstance",
  );

  public readonly contract: ExtensionInstanceContract;

  public constructor(id: string) {
    super(id);
    this.contract = ExtensionInstanceContract.ofId(id);
  }
  public static async create(data: ExtensionInstanceCreateRequestData) {
    const { id } = await config.behaviors.extensionInstance.create(data);

    return new ExtensionInstance(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.extensionInstance.find(id);

    if (data) {
      return new ExtensionInstanceDetailed(data);
    }
  }

  public static findAggregate(extensionInstanceId?: string) {
    return extensionInstanceId
      ? { id: extensionInstanceId, ...ExtensionInstance.aggregateMetaData }
      : undefined;
  }

  public static async get(id: string) {
    const extensionInstance = await this.find(id);
    assertObjectFound(extensionInstance, ExtensionInstance, id);
    return extensionInstance;
  }

  public static async listOpenOrders(context: Customer | Project) {
    let data;
    if (context instanceof Project) {
      data = await config.behaviors.extensionInstance.findOpenProjectOrders(
        context.id,
      );
    } else {
      data = await config.behaviors.extensionInstance.findOpenCustomerOrders(
        context.id,
      );
    }

    return (
      data
        ?.filter((i) => !!i.extensionId && !!i.referencedId && !!i.context)
        .map((i) => ({
          extension: Extension.ofId(i.extensionId!),
          referencedId: i.referencedId!,
          context: i.context!,
        })) ?? []
    );
  }

  public static ofId(id: string) {
    return new ExtensionInstance(id);
  }

  public static query(query?: ExtensionInstanceListQueryModelData) {
    return new ExtensionInstanceListQuery(query);
  }

  public async cancelTermination() {
    await config.behaviors.extensionInstance.cancelTermination(this.id);
  }

  public async cancelVariantSwitch() {
    return await config.behaviors.extensionInstance.cancelVariantSwitch(
      this.id,
    );
  }

  public async consentToScopes(consentedScopes: string[]) {
    await config.behaviors.extensionInstance.consentToScopes(this.id, {
      consentedScopes,
    });
  }

  public async createRetrievalKey() {
    return await config.behaviors.extensionInstance.createRetrievalKey(this.id);
  }

  public async delete() {
    await config.behaviors.extensionInstance.delete(this.id);
  }

  public async disable() {
    await config.behaviors.extensionInstance.disable(this.id);
  }

  public async enable() {
    await config.behaviors.extensionInstance.enable(this.id);
  }

  public async findCommon(): Promise<ExtensionInstanceCommon | undefined> {
    return this instanceof ExtensionInstanceCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ExtensionInstanceDetailed | undefined> {
    return ExtensionInstance.find(this.id);
  }

  public async getCommon(): Promise<ExtensionInstanceCommon> {
    return this instanceof ExtensionInstanceCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<ExtensionInstanceDetailed> {
    return ExtensionInstance.get(this.id);
  }

  public async scheduleVariantSwitch(variantKey: string) {
    return await config.behaviors.extensionInstance.scheduleVariantSwitch(
      this.id,
      variantKey,
    );
  }

  public async terminate(instantTermination: boolean) {
    await config.behaviors.extensionInstance.terminate(
      this.id,
      instantTermination,
    );
  }

  public async updateContract(variantKey?: string) {
    return await config.behaviors.extensionInstance.updateContract(
      this.id,
      variantKey,
    );
  }
}

export class ExtensionInstanceCommon extends WithData<
  ExtensionInstanceListItemData | ExtensionInstanceData
>()(
  ExtensionInstance,
) {
  public readonly chargeability?: ExtensionInstanceChargeability;
  public readonly consentedScopes: string[];
  public readonly context: ExtensionInstanceContext;
  public readonly contract: ExtensionInstanceContract;
  public readonly contributor: Contributor;
  public readonly contributorName: string;
  public readonly createdAtInSeconds?: number;
  public override readonly data:
    | ExtensionInstanceListItemData
    | ExtensionInstanceData;
  public readonly extension: Extension;
  public readonly extensionDeletionDeadline?: DateTime;
  public readonly extensionName: string;
  public readonly extensionSubTitle?: LocalizedText;
  public readonly frontendFragments: FrontendFragment[];
  public readonly isOwnExtension: boolean;
  public readonly pendingInstallation: boolean;
  public readonly pendingRemoval: boolean;
  public readonly pricePlanVariant?: ExtensionPricePlanVariant;

  public constructor(
    data: ExtensionInstanceListItemData | ExtensionInstanceData,
  ) {
    super(data.id);
    this.data = data;
    this.extension = Extension.ofId(data.extensionId);
    this.extensionName = data.extensionName;
    this.extensionSubTitle = data.extensionSubTitle
      ? new LocalizedText(data.extensionSubTitle)
      : undefined;
    this.pendingInstallation = data.pendingInstallation;
    this.pendingRemoval = data.pendingRemoval;
    this.consentedScopes = data.consentedScopes;
    this.context = new ExtensionInstanceContext(
      data.aggregateReference.aggregate === Project.aggregateMetaData.aggregate
        ? Project.ofId(data.aggregateReference.id)
        : Customer.ofId(data.aggregateReference.id),
    );
    this.contributor = Contributor.ofId(data.contributorId);
    this.contributorName = data.contributorName;
    this.createdAtInSeconds = data.createdAt
      ? DateTime.fromISO(data.createdAt).toSeconds()
      : undefined;
    this.isOwnExtension =
      !data.chargeability?.isChargeable &&
      data.chargeability?.reasons.isOwnExtension;
    this.chargeability = data.chargeability;
    this.pricePlanVariant = data.variantKey
      ? ExtensionPricePlanVariant.ofId(this.extension, data.variantKey)
      : undefined;
    this.contract = ExtensionInstanceContract.ofId(data.id);
    this.extensionDeletionDeadline = data.extensionDeletionDeadline
      ? DateTime.fromISO(data.extensionDeletionDeadline)
      : undefined;
    this.frontendFragments = data.frontendFragments
      ? Object.entries(data.frontendFragments)
          .filter(([key]) => Extension.isValidAnchor(key))
          .map(
            ([key, value]) =>
              new FrontendFragment(
                key as FrontendFragmentAnchor,
                value,
                this.extensionName,
                ContributorExtension.ofId(
                  this.contributor.id,
                  this.extension.id,
                ),
              ),
          )
      : [];
  }

  public buildFragmentUrl(data: {
    pathParams: Record<string, string>;
    anchor?: FrontendFragmentAnchor;
    fragmentDevUrl?: string;
    user: UserCommon;
  }) {
    const { fragmentDevUrl, pathParams, anchor, user } = data;

    if (!anchor) {
      return undefined;
    }

    const fragment = this.findFrontendFragment(anchor);

    if (!fragment) {
      return;
    }

    return fragment.buildUrl({
      extensionInstance: this,
      fragmentDevUrl,
      pathParams,
      user,
    });
  }

  public findFrontendFragment(anchor: FrontendFragmentAnchor) {
    return this.frontendFragments.find((f) => f.anchor === anchor);
  }

  public async getExtensionDetailsAction(
    accessTokenRetrievalKey: AccessTokenRetrievalKey,
    url: string | undefined,
  ) {
    const extension = await this.extension.getDetailed();

    if (url === undefined) {
      return undefined;
    }

    return url
      .replace(":userId", accessTokenRetrievalKey.userId)
      .replace(":contextId", this.data.aggregateReference.id)
      .replace(":context", this.context.type)
      .replace(":contributorId", extension.data.contributorId)
      .replace(":extensionId", this.data.extensionId)
      .replace(":extensionInstanceId", this.id)
      .replace(
        ":accessTokenRetrievalKey",
        accessTokenRetrievalKey.accessTokenRetrievalKey,
      )
      .replace(":apiVersion", "v1");
  }

  public getFrontendFragment(anchor: FrontendFragmentAnchor) {
    const fragement = this.findFrontendFragment(anchor);
    assertObjectFound(fragement, FrontendFragment, anchor);
    return fragement;
  }

  public async getSessionToken(sessionId: string) {
    const response =
      await config.behaviors.extensionInstance.generateSessionToken(
        this.id,
        sessionId,
      );

    return response.sessionToken;
  }

  public async getUnconsentedScopes() {
    const extension = await this.extension.getDetailed();

    return extension.scopes.filter(
      (extScope) => !this.consentedScopes.includes(extScope),
    );
  }

  public async getUrlWithParameters(url: string) {
    const retrievalKeyData = await this.createRetrievalKey();

    const extension = await this.extension.getDetailed();

    return url
      .replace(":userId", retrievalKeyData.userId)
      .replace(":contextId", this.context.value.id)
      .replace(":context", extension.context)
      .replace(":contributorId", extension.data.contributorId)
      .replace(":extensionId", this.data.extensionId)
      .replace(":extensionInstanceId", this.id)
      .replace(
        ":accessTokenRetrievalKey",
        retrievalKeyData.accessTokenRetrievalKey,
      )
      .replace(":apiVersion", "v1");
  }
}

export class ExtensionInstanceDetailed extends ExtensionInstanceCommon {
  public override readonly data: ExtensionInstanceData;
  public constructor(data: ExtensionInstanceData) {
    super(data);
    this.data = data;
  }
}

export class ExtensionInstanceListItem extends ExtensionInstanceCommon {
  public override readonly data: ExtensionInstanceListItemData;
  public constructor(data: ExtensionInstanceListItemData) {
    super(data);
    this.data = data;
  }
}

export class ExtensionInstanceListQuery extends ListQueryModel<ExtensionInstanceListQueryModelData> {
  public constructor(query: ExtensionInstanceListQueryModelData = {}) {
    super(query);
  }

  public async execute(options?: AxiosRequestConfig) {
    const { extension, customer, project, ...rest } = this.query;
    const restQuery = { ...rest, extensionId: extractId(extension) };

    type Result = QueryResponseData<ExtensionInstanceListItemData>;

    const emptyResult: Result = {
      totalCount: 0,
      items: [],
    };

    const projectResult = project
      ? await config.behaviors.extensionInstance.list(
          {
            ...restQuery,

            contextId: extractId(project),
            context: "project",
          },
          options,
        )
      : emptyResult;

    const projectMembership = project
      ? await Project.ofReference(project)?.getOwnMembership()
      : undefined;

    const hasAccessToCustomer = projectMembership?.inherited ?? true;

    const resolvedCustomer = customer;

    const customerResult =
      hasAccessToCustomer && resolvedCustomer
        ? await config.behaviors.extensionInstance.list(
            {
              ...restQuery,
              contextId: extractId(resolvedCustomer),
              context: "customer",
            },
            options,
          )
        : emptyResult;

    const baseResult =
      !customer && !project
        ? await config.behaviors.extensionInstance.list({
            ...restQuery,
          })
        : emptyResult;

    const combinedResult: Result = {
      totalCount:
        projectResult.totalCount +
        customerResult.totalCount +
        baseResult.totalCount,
      items: [
        ...projectResult.items,
        ...customerResult.items,
        ...baseResult.items,
      ],
    };

    return new ExtensionInstanceList(
      this.query,
      combinedResult.items.map((d) => new ExtensionInstanceListItem(d)),
      combinedResult.totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ExtensionInstanceListQueryModelData) {
    return new ExtensionInstanceListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ExtensionInstanceList extends WithListData<ExtensionInstanceListItem>()(
  ExtensionInstanceListQuery,
) {
  public override readonly items: readonly ExtensionInstanceListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ExtensionInstanceListQueryModelData,
    extensionInstances: ExtensionInstanceListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(extensionInstances);
    this.totalCount = totalCount;
  }
}
