import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type { ProjectListQuery as ProjectListQueryType } from "../../project/index.js";
import type { ExtensionInstanceListQuery } from "../../marketplace/index.js";
import type { CustomerPermission } from "../customerPermissions.js";
import type { ContractListQuery } from "../../contract/index.js";
import type { InvoiceListQuery } from "../../invoice/index.js";
import type { ServerListQuery } from "../../server/index.js";
import type { OrderListQuery } from "../../order/index.js";
import type {
  CustomerMembershipListQuery,
  CustomerRole,
} from "../CustomerMembership/index.js";
import type {
  CustomerInviteCreateRequestData,
  CustomerInviteListQuery,
} from "../CustomerInvite/index.js";
import type {
  CustomerAIModelListQuery,
  CustomerAIPlanListQuery,
} from "../../ai/index.js";
import type {
  CustomerExpressInterestToContributeRequestData,
  CustomerVatIdValidationState,
  CustomerExecutingUserRoles,
  ContractPartnerModelData,
  CustomerListQueryData,
  CustomerListItemData,
  CustomerData,
} from "./types.js";

import { ExtensionInstance } from "../../marketplace/ExtensionInstance/ExtensionInstance.js";
import { CustomerAvatarAccessTokenProvider } from "./CustomerAvatarAccessTokenProvider.js";
import { CustomerAIModel } from "../../ai/CustomerAIModel/CustomerAIModel.js";
import { CustomerAIPlan } from "../../ai/CustomerAIPlan/CustomerAIPlan.js";
import {
  type FileAccessTokenProvider,
  type DomFile,
} from "../../file/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { customerPermissions } from "../customerPermissions.js";
import { Contract } from "../../contract/Contract/Contract.js";
import { CustomerMembership } from "../CustomerMembership/index.js";
import { ProjectListQuery } from "../../project/internal.js";
import { Invoice } from "../../invoice/Invoice/Invoice.js";
import { ContractPartner } from "../ContractPartner/index.js";
import { InvoiceSettings } from "../InvoiceSettings/index.js";
import { Server } from "../../server/Server/Server.js";
import { CustomerInvite } from "../CustomerInvite/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { Contributor } from "../../marketplace/index.js";
import { Order } from "../../order/Order/Order.js";
import { File } from "../../file/File/internal.js";
import { config } from "../../config/index.js";
import { User } from "../../user/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Customer",
})
export class Customer extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "customer",
    "customer",
  );
  public readonly aiModelsQuery: CustomerAIModelListQuery;
  public readonly aiPlans: CustomerAIPlanListQuery;

  public readonly contracts: ContractListQuery;

  public readonly extensionInstances: ExtensionInstanceListQuery;

  public readonly fileAccessTokenProvider: FileAccessTokenProvider;
  public readonly invites: CustomerInviteListQuery;

  public readonly invoices: InvoiceListQuery;

  public readonly invoiceSettings: InvoiceSettings;

  public readonly memberships: CustomerMembershipListQuery;
  public readonly orders: OrderListQuery;
  public readonly projects: ProjectListQueryType;

  public readonly servers: ServerListQuery;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider = new CustomerAvatarAccessTokenProvider(this);
    this.projects = new ProjectListQuery({
      customer: this,
    });
    this.invites = CustomerInvite.query(this);
    this.memberships = CustomerMembership.query(this);
    this.contracts = Contract.query({ customer: this });
    this.invoices = Invoice.query({ customer: this });
    this.orders = Order.query({ customer: this });
    this.servers = Server.query({ customer: id });
    this.invoiceSettings = InvoiceSettings.ofCustomerId(id);
    this.extensionInstances = ExtensionInstance.query({ customer: id });
    this.aiPlans = CustomerAIPlan.query(this.id);
    this.aiModelsQuery = CustomerAIModel.query(this.id);
  }

  public static async create(data: {
    owner?: ContractPartnerModelData;
    vatId?: string;
    name: string;
  }) {
    const { vatId, owner, name } = data;

    const response = await config.behaviors.customer.create({
      owner: owner
        ? {
            ...owner,
            phoneNumbers: owner.phoneNumber ? [owner.phoneNumber] : undefined,
          }
        : undefined,
      vatId: vatId ?? undefined,
      name,
    });

    return new Customer(response.id);
  }

  public static async find(id: string, options?: AxiosRequestConfig) {
    const data = await config.behaviors.customer.find(id, options);
    if (data) {
      return new CustomerDetailed(data);
    }
  }

  public static findAggregate(customerId?: string) {
    return customerId
      ? { id: customerId, ...Customer.aggregateMetaData }
      : undefined;
  }

  public static async get(id: string, options?: AxiosRequestConfig) {
    const customer = await this.find(id, options);
    assertObjectFound(customer, Customer, id);
    return customer;
  }

  public static ofId(id: string) {
    return new Customer(id);
  }

  public static query(query: CustomerListQueryData = {}) {
    return new CustomerListQuery(query);
  }

  public async delete() {
    await config.behaviors.customer.delete(this.id);
  }

  public async expressInterestToContribute(
    customerData: CustomerExpressInterestToContributeRequestData,
  ) {
    const response =
      await config.behaviors.customer.expressInterestToContribute(
        this.id,
        customerData,
      );

    return response;
  }

  public async findCommon(
    options?: AxiosRequestConfig,
  ): Promise<CustomerCommon | undefined> {
    return this instanceof CustomerCommon ? this : this.findDetailed(options);
  }

  public async findContributor() {
    return Contributor.find(this.id);
  }

  public async findDetailed(
    options?: AxiosRequestConfig,
  ): Promise<CustomerDetailed | undefined> {
    return Customer.find(this.id, options);
  }

  public async findOpenExtensionOrders() {
    return await ExtensionInstance.listOpenOrders(this);
  }

  public async findPaymentMethod() {
    return config.behaviors.customer.findMarketplacePaymentMethod(this.id);
  }

  public async getAvatarUploadRules() {
    return File.getUploadRules("avatar");
  }

  public async getBillingPortalLink() {
    return await config.behaviors.customer.getBillingPortalLink(this.id);
  }

  public async getCommon(
    options?: AxiosRequestConfig,
  ): Promise<CustomerCommon> {
    return this instanceof CustomerCommon ? this : this.getDetailed(options);
  }

  public async getDetailed(
    options?: AxiosRequestConfig,
  ): Promise<CustomerDetailed> {
    return Customer.get(this.id, options);
  }

  public async getOwnMembership() {
    return await CustomerMembership.getOwn(this);
  }

  public async inviteMember(data: CustomerInviteCreateRequestData) {
    return CustomerInvite.create(this, data);
  }

  public async isBankrupt(options?: AxiosRequestConfig) {
    const invoiceSettings = await this.invoiceSettings.findDetailed({
      ...options,
      retryCache: {
        retry: false,
      },
    });
    return !!invoiceSettings?.isBankrupt;
  }

  public async removeAvatar() {
    await config.behaviors.customer.removeAvatar(this.id);
  }

  public async requestAvatarUpload(): Promise<string> {
    const response = await config.behaviors.customer.createAvatarUploadToken(
      this.id,
    );

    return response.token;
  }

  public async suggestReward(suggestion: string) {
    await config.behaviors.customer.createRecommendationSuggestion(
      this.id,
      suggestion,
    );
  }

  public async update(data: {
    owner?: ContractPartnerModelData;
    vatId?: string;
    name: string;
  }) {
    const { vatId, owner, name } = data;

    await config.behaviors.customer.update(this.id, {
      owner: owner
        ? {
            ...owner,
            phoneNumbers: owner.phoneNumber ? [owner.phoneNumber] : undefined,
          }
        : undefined,
      vatId,
      name,
    });
  }

  public async updatePaymentMethod(
    contextId: string,
    currentUrl: string,
    variantKey?: string,
  ) {
    const returnUrl = new URL(currentUrl);
    returnUrl.searchParams.set("paymentDataFilled", "");
    returnUrl.searchParams.set("contextId", contextId);
    if (variantKey) {
      returnUrl.searchParams.set("variantKey", variantKey);
    }

    return await config.behaviors.customer.updateMarketplacePaymentMethod(
      this.id,
      returnUrl.toString(),
    );
  }

  public async uploadAvatar(file: DomFile) {
    await File.upload(file, this.fileAccessTokenProvider);
  }
}

export class CustomerCommon extends WithData<
  CustomerListItemData | CustomerData
>()(Customer) {
  public readonly avatar?: File;
  public readonly avatarRefId?: string;
  public readonly contractPartner?: ContractPartner;
  public readonly creationDate?: string;
  public readonly customerNumber?: string;
  public override readonly data: CustomerListItemData | CustomerData;
  public readonly deletionProhibitedBy?: string[];
  public readonly executingUserRoles?: CustomerExecutingUserRoles[];
  public readonly isAllowedToPlaceOrders: boolean;
  public readonly isBanned?: boolean;
  public readonly isInDefaultOfPayment?: boolean;
  public readonly isPublicSector?: boolean;
  public readonly memberCount: number;
  public readonly name: string;
  public readonly ownRole: CustomerRole;
  public readonly projectCount: number;
  public readonly suspendedSince?: DateTime;
  public readonly undeliverableDunningNotice?: boolean;
  public readonly vatId?: string;
  public readonly vatIdValidationState?: CustomerVatIdValidationState;

  public get isEligible(): boolean {
    return !this.isBanned && this.isAllowedToPlaceOrders;
  }

  public constructor(data: CustomerListItemData | CustomerData) {
    super(data.customerId);
    this.data = data;
    this.name = data.name;
    if (data.owner) {
      this.contractPartner = new ContractPartner(data.owner);
      this.isPublicSector = !!data.owner.leitwegId;
    }
    this.avatar = data.avatarRefId ? File.ofId(data.avatarRefId) : undefined;
    this.vatId = data.vatId;
    this.isBanned = data.isBanned;
    if (data.activeSuspension) {
      this.suspendedSince = DateTime.fromISO(data.activeSuspension?.createdAt);
    }
    this.creationDate = data.creationDate;
    this.memberCount = data.memberCount;
    this.projectCount = data.projectCount;
    this.vatIdValidationState = data.vatIdValidationState;
    this.executingUserRoles = data.executingUserRoles;
    this.avatarRefId = data.avatarRefId;
    this.customerNumber = data.customerNumber;
    this.isInDefaultOfPayment = data.isInDefaultOfPayment;
    this.ownRole = data.executingUserRoles?.[0] ?? "notset";
    this.isAllowedToPlaceOrders = data.isAllowedToPlaceOrders ?? true;
    this.undeliverableDunningNotice = !!data.levelOfUndeliverableDunningNotice;
    this.deletionProhibitedBy = data.deletionProhibitedBy;
  }

  public hasPermission(permission: CustomerPermission) {
    return customerPermissions[permission].includes(this.ownRole);
  }

  public async updateContractPartner(data: {
    owner: ContractPartnerModelData;
    vatId?: string;
  }) {
    const { owner, vatId } = data;

    return await this.update({ name: this.name, vatId, owner });
  }

  public async updateName(name: string) {
    return await this.update({
      owner: this.contractPartner
        ? {
            purchaseOrderReference: this.contractPartner.purchaseOrderReference,
            salutation: this.contractPartner.salutation ?? "other",
            emailAddress: this.contractPartner.emailAddress,
            phoneNumber: this.contractPartner.phoneNumber,
            address: { ...this.contractPartner.address },
            firstName: this.contractPartner.firstName,
            leitwegId: this.contractPartner.leitwegId,
            lastName: this.contractPartner.lastName,
            company: this.contractPartner.company,
          }
        : undefined,
      vatId: this.vatId,
      name,
    });
  }
}

export class CustomerDetailed extends CustomerCommon {
  public override readonly data: CustomerData;
  public constructor(data: CustomerData) {
    super(data);
    this.data = data;
  }
}

export class CustomerListItem extends CustomerCommon {
  public override readonly data: CustomerListItemData;
  public constructor(data: CustomerListItemData) {
    super(data);
    this.data = data;
  }
}

export class CustomerListQuery extends ListQueryModel<CustomerListQueryData> {
  public constructor(query: CustomerListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.customer.list({
      limit: config.defaultPaginationLimit,
      ...this.query,
    });

    return new CustomerList(
      this.query,
      items
        .map((d) => new CustomerListItem(d))
        .sort((a, b) => a.name.localeCompare(b.name)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public async hasAnyCustomerWhereIsLastOwner(): Promise<boolean> {
    const currentUser = await User.self.getCommon();
    const limit = config.defaultPaginationLimit;

    const currentUserIsLastOwner = async (
      customer: CustomerListItem,
    ): Promise<boolean> => {
      if (!customer.executingUserRoles?.includes("owner")) {
        return false;
      }

      const { items: memberships } = await customer.memberships.execute();
      const ownMembership = memberships.find(
        (membership) => membership.user.id === currentUser.id,
      );

      return (
        !!ownMembership &&
        !!CustomerMembership.memberIsLastOwner(memberships, ownMembership)
      );
    };

    for (let skip = 0; ; skip += limit) {
      const customerList = await this.refine({
        limit,
        skip,
      }).execute();

      for (const customer of customerList.items) {
        if (await currentUserIsLastOwner(customer)) {
          return true;
        }
      }

      if (skip + customerList.items.length >= customerList.totalCount) {
        return false;
      }
    }
  }

  public refine(query: CustomerListQueryData) {
    return new CustomerListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class CustomerList extends WithListData<CustomerListItem>()(
  CustomerListQuery,
) {
  public override readonly items: readonly CustomerListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: CustomerListQueryData,
    customers: CustomerListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(customers);
    this.totalCount = totalCount;
  }
}
