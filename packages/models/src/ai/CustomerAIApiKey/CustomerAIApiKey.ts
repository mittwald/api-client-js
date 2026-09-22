import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";

import type {
  AIApiKeyContainerMetaData,
  AIApiKeyTokenUsageData,
  AIApiKeyRateLimitData,
  AIApiKeyData,
} from "../types.js";
import type {
  CustomerAIApiKeyListQueryData,
  CustomerAIApiKeyListItemData,
  CustomerAIApiKeyRequestData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Customer } from "../../customer/Customer/Customer.js";
import { Project } from "../../project/internal.js";
import { formatTokenUsage } from "../helper.js";
import { Ingress } from "../../ingress/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "CustomerAIApiKey",
})
export class CustomerAIApiKey extends ReferenceModel {
  public readonly customerId: string;

  public constructor(licenceId: string, customerId: string) {
    super(licenceId);
    this.customerId = customerId;
  }

  public static async create(
    customer: Customer,
    data: CustomerAIApiKeyRequestData,
  ): Promise<CustomerAIApiKey | undefined> {
    const response = await config.behaviors.customerAiApiKey.create(
      customer.id,
      data,
    );
    if (response) {
      return new CustomerAIApiKey(response.id, customer.id);
    }
    return undefined;
  }

  public static async find(customerId: string, licenceId: string) {
    const data = await config.behaviors.customerAiApiKey.find(
      customerId,
      licenceId,
    );

    if (data) {
      return new CustomerAIApiKeyDetailed(data);
    }
  }

  public static async get(customerId: string, licenceId: string) {
    const apiKey = await this.find(customerId, licenceId);
    assertObjectFound(apiKey, CustomerAIApiKey, licenceId);
    return apiKey;
  }

  public static ofId(customerId: string, licenceId: string) {
    return new CustomerAIApiKey(licenceId, customerId);
  }

  public static query(
    customer: Customer,
    query: CustomerAIApiKeyListQueryData = {},
  ) {
    return new CustomerAIApiKeyListQuery(customer, query);
  }

  public async findCommon(): Promise<CustomerAIApiKeyCommon | undefined> {
    return this instanceof CustomerAIApiKeyCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<CustomerAIApiKeyDetailed | undefined> {
    return CustomerAIApiKey.find(this.customerId, this.id);
  }

  public async getCommon(): Promise<CustomerAIApiKeyCommon> {
    return this instanceof CustomerAIApiKeyCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<CustomerAIApiKeyDetailed> {
    return CustomerAIApiKey.get(this.customerId, this.id);
  }
}

export class CustomerAIApiKeyCommon extends WithData<
  CustomerAIApiKeyListItemData | AIApiKeyData
>()(CustomerAIApiKey) {
  public readonly containerMeta?: AIApiKeyContainerMetaData;
  public readonly customer: Customer;
  public override readonly data: CustomerAIApiKeyListItemData | AIApiKeyData;
  public readonly isBlocked: boolean;
  public readonly key: string;
  public readonly models: string[];
  public readonly name: string;
  public readonly planId?: string;
  public readonly project?: Project;
  public readonly rateLimit: AIApiKeyRateLimitData;

  public readonly tokenUsage: AIApiKeyTokenUsageData;

  public constructor(data: CustomerAIApiKeyListItemData | AIApiKeyData) {
    invariant(data.profileId, "profile id not found");
    super(data.keyId, data.profileId);
    this.data = data;
    this.customer = Customer.ofId(data.profileId);
    this.key = data.key;
    this.models = data.models;
    this.name = data.name;
    this.planId = data.planId;
    this.containerMeta = data.containerMeta;
    this.isBlocked = data.isBlocked;
    this.rateLimit = data.rateLimit;
    this.tokenUsage = {
      ...data.tokenUsage,
      formattedUsed: formatTokenUsage(data.tokenUsage.used),
    };

    this.project = data.projectId ? Project.ofId(data.projectId) : undefined;
  }

  public async delete(): Promise<void> {
    await config.behaviors.customerAiApiKey.delete(this.customer.id, this.id);
  }

  public async linkProject(
    projectId: string,
    createOpenWebUIContainer: boolean,
  ): Promise<void> {
    await config.behaviors.customerAiApiKey.update(this.customer.id, this.id, {
      createWebuiContainer: createOpenWebUIContainer,
      projectId,
    });
  }

  public async updateName(name: string): Promise<void> {
    await config.behaviors.customerAiApiKey.update(this.customer.id, this.id, {
      name,
    });
  }
}

export class CustomerAIApiKeyDetailed extends CustomerAIApiKeyCommon {
  public override readonly data: AIApiKeyData;
  public constructor(data: AIApiKeyData) {
    super(data);
    this.data = data;
  }

  public async getContainerRelatedIngress() {
    const defaultIngressId = this.containerMeta?.ingressId;

    if (!defaultIngressId || !this.data.projectId) {
      return undefined;
    }

    const ingresses = (
      await Ingress.query({
        project: this.project?.id,
      }).execute()
    ).items;

    const defaultIngress = ingresses.find(
      (ingress) => ingress.id === defaultIngressId,
    );

    if (defaultIngress) {
      return defaultIngress;
    }

    const ingressWithContainerId = ingresses.find((ingress) =>
      ingress.paths.some(
        (path) =>
          path.target &&
          path.target.type === "container" &&
          path.target.data.container.id === this.containerMeta?.containerId,
      ),
    );

    if (ingressWithContainerId) {
      return ingressWithContainerId;
    }

    return undefined;
  }
}

export class CustomerAIApiKeyListItem extends CustomerAIApiKeyCommon {
  public override readonly data: CustomerAIApiKeyListItemData;
  public constructor(data: CustomerAIApiKeyListItemData) {
    super(data);
    this.data = data;
  }
}

export class CustomerAIApiKeyListQuery extends ListQueryModel<CustomerAIApiKeyListQueryData> {
  private readonly customer: Customer;

  public constructor(
    customer: Customer,
    query: CustomerAIApiKeyListQueryData = {},
  ) {
    super(query);
    this.customer = customer;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.customerAiApiKey.list(
      extractId(this.customer),
      this.query,
    );

    return new CustomerAIApiKeyList(
      this.customer,
      this.query,
      items.map((d) => new CustomerAIApiKeyListItem(d)),
      totalCount,
    );
  }

  public refine(query: CustomerAIApiKeyListQueryData) {
    return new CustomerAIApiKeyListQuery(this.customer, {
      ...this.query,
      ...query,
    });
  }
}

export class CustomerAIApiKeyList extends WithListData<CustomerAIApiKeyListItem>()(
  CustomerAIApiKeyListQuery,
) {
  public override readonly items: readonly CustomerAIApiKeyListItem[];
  public override readonly totalCount: number;
  public constructor(
    customer: Customer,
    query: CustomerAIApiKeyListQueryData,
    apiKeys: CustomerAIApiKeyListItem[],
    totalCount: number,
  ) {
    super(customer, query);
    this.items = Object.freeze(apiKeys);
    this.totalCount = totalCount;
  }
}
