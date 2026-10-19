import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type { ProcessState, ProcessType } from "../DomainProcess/index.js";
import type { HandleField } from "../DomainHandle/index.js";
import type {
  DomainListQueryModelData,
  DomainOrderPreviewItem,
  VerifyAddressRequest,
  DomainListItemData,
  DomainData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { DomainHandleReadable } from "../DomainHandleReadable/index.js";
import { ContactVerification } from "../ContactVerification/index.js";
import { ContractDetailed } from "../../contract/index.js";
import { DomainProcess } from "../DomainProcess/index.js";
import { Project } from "../../project/internal.js";
import { AggregateMetaData } from "../../common/index.js";
import { DomainOrderRequest } from "../../order/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Domain",
})
export class Domain extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("domain", "domain");

  public static defaultNameservers = [
    "ns01.agenturserver.de",
    "ns01.agenturserver.it",
    "ns01.agenturserver.co",
  ];

  public static async checkRegistrability(domain: string) {
    return await config.behaviors.domain.checkDomainRegistrable(domain);
  }

  // API-DRIFT: findByHostname via find(hostname) is disabled because route invalidation does not work for shortId (hostname) lookups (resolve: re-enable the commented block once route invalidation works)
  // public static async findByHostname (hostname: string) {
  //   try {
  //     return await this.find(hostname);
  //   } catch {
  //     return undefined;
  //   }
  // }

  public static async checkTransferability(domain: string, authCode?: string) {
    const transferable = await config.behaviors.domain.checkDomainTransferable(
      domain,
      authCode,
    );
    if ("transferable" in transferable) {
      return { domain, ...transferable };
    }
    return transferable;
  }

  public static async find(id: string) {
    const data = await config.behaviors.domain.find(id);
    if (data) {
      return new DomainDetailed(data);
    }
  }

  public static async findByHostname(hostname: string) {
    const domains = await this.query({
      domainSearchName: hostname,
    }).execute();
    return domains.items.find((i) => i.domain === hostname);
  }

  public static async get(id: string) {
    const domain = await this.find(id);
    assertObjectFound(domain, Domain, id);
    return domain;
  }

  public static ofId(id: string) {
    return new Domain(id);
  }

  public static async previewDomainOrder(
    project: Project,
    domain: string,
    authCode?: string,
  ) {
    const preview = DomainOrderRequest.create({ authCode, project, domain });
    return await preview.getPreview();
  }

  public static async previewMultipleDomainOrders(
    project: Project,
    domains: DomainOrderPreviewItem[],
  ) {
    return await Promise.all(
      domains.map(({ authCode, domain }) =>
        Domain.previewDomainOrder(project, domain, authCode),
      ),
    );
  }

  public static query = (query: DomainListQueryModelData = {}) => {
    return new DomainListQuery(query);
  };

  public static async queryUniqueDomainContacts(
    query: DomainListQueryModelData = {},
  ) {
    const domains = await this.query(query).execute();
    const contacts: DomainListItem[] = [];
    for (const domain of domains.items) {
      const name =
        domain.ownerC.current.organization ?? domain.ownerC.current.name;
      const hashAlreadyAdded = !!contacts.find(
        (i) => i.contactHash === domain.contactHash,
      );
      if (!hashAlreadyAdded && !!name) {
        contacts.push(domain);
      }
    }
    return contacts;
  }

  public static async suggestDomains(
    prompt: string,
    amount?: number,
    tlds?: string[],
  ) {
    const domains = await config.behaviors.domain.getSuggestions(
      prompt,
      amount,
      tlds,
    );
    return domains.map((i) => i.toLowerCase());
  }

  public static async verifyAddress(
    address: VerifyAddressRequest,
  ): Promise<boolean> {
    return await config.behaviors.domain.verifyAddress(address);
  }

  public static async verifyCompany(name: string): Promise<boolean> {
    return await config.behaviors.domain.verifyCompany(name);
  }

  public async abortDomainDeclaration() {
    await config.behaviors.domain.abortDomainDeclaration(this.id);
  }

  public async cancelScheduledDeletion() {
    return await config.behaviors.domain.cancelScheduledDeletion(this.id);
  }

  public async createAuthCode() {
    const response = await config.behaviors.domain.createAuthCode(this.id);

    const { authCode } = response;

    const expirationDate = response.expirationDate
      ? DateTime.fromISO(response.expirationDate)
      : undefined;

    return { expirationDate, authCode };
  }

  public async delete(transit?: boolean, deleteIngresses?: boolean) {
    await config.behaviors.domain.delete(this.id, transit, deleteIngresses);
  }

  public async findCommon(): Promise<DomainCommon | undefined> {
    return this instanceof DomainCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<DomainDetailed | undefined> {
    return Domain.find(this.id);
  }

  public async getCommon(): Promise<DomainCommon> {
    return this instanceof DomainCommon ? this : this.getDetailed();
  }

  public async getContract() {
    const response = await config.behaviors.domain.getDomainContract(this.id);
    return new ContractDetailed(response);
  }

  public async getDetailed(): Promise<DomainDetailed> {
    return Domain.get(this.id);
  }

  public async resendEmail() {
    await config.behaviors.domain.resendEmail(this.id);
  }

  public async scheduleDeletion(date: DateTime, deleteIngresses?: boolean) {
    return await config.behaviors.domain.createScheduledDeletion(
      this.id,
      date,
      deleteIngresses,
    );
  }

  public async setNameserversManaged() {
    await config.behaviors.domain.updateNameservers(
      this.id,
      Domain.defaultNameservers,
    );
  }

  public async updateAuthCode(authCode: string) {
    return await config.behaviors.domain.updateAuthCode(this.id, authCode);
  }

  public async updateNameservers(nameservers: string[]) {
    await config.behaviors.domain.updateNameservers(this.id, nameservers);
  }

  public async updateOwnerContact(
    contact: HandleField[],
    avoidEmailConfirmation?: boolean,
  ) {
    await config.behaviors.domain.updateOwnerContact(
      this.id,
      contact,
      avoidEmailConfirmation,
    );
  }

  public async updateProject(project: Project): Promise<void> {
    return await config.behaviors.domain.updateProjectId(this.id, project.id);
  }
}

export class DomainCommon extends WithData<DomainData>()(Domain) {
  public readonly adminC?: DomainHandleReadable;
  public readonly connected: boolean;
  public readonly contactHash?: string;
  public override readonly data: DomainData;
  public readonly deleted: boolean;
  public readonly domain: string;
  public readonly nameservers: string[];
  public readonly ownerC: DomainHandleReadable;
  public readonly processes: DomainProcess[];
  public readonly project: Project;
  public readonly scheduledDeletionDate?: DateTime;
  public readonly transferInAuthCode?: string;
  public readonly usesDefaultNameserver: boolean;

  public constructor(data: DomainData) {
    super(data.domainId);
    this.data = data;
    this.domain = data.domain;
    this.project = Project.ofId(data.projectId);
    this.deleted = data.deleted;
    this.connected = data.connected;
    this.nameservers = data.nameservers;
    this.ownerC = new DomainHandleReadable(data.handles.ownerC);
    if (data.handles.adminC) {
      this.adminC = new DomainHandleReadable(data.handles.adminC);
    }
    this.usesDefaultNameserver = data.usesDefaultNameserver;
    this.processes = data.processes
      ? data.processes.map((i) => new DomainProcess(i))
      : [];
    this.contactHash = data.contactHash;
    this.transferInAuthCode = data.transferInAuthCode;
    if (data.scheduledDeletionDate) {
      this.scheduledDeletionDate = DateTime.fromISO(data.scheduledDeletionDate);
    }
  }

  public async findEmailContactVerification() {
    const email = this.ownerC.current.email;
    if (!email) {
      return undefined;
    }
    return await ContactVerification.findByEmail(email);
  }

  public getCustomNameservers(): string[] {
    return this.nameservers.filter(
      (i) => !Domain.defaultNameservers.includes(i),
    );
  }

  public getFirstProcessOfState(state: ProcessState) {
    return this.processes.find((i) => i.state === state);
  }

  public getNameserverChangeStatus(): "running" | "failed" | undefined {
    if (this.hasProcessWithStateAndType("REQUESTED", "UPDATE")) {
      return "running";
    }
    if (this.hasProcessWithStateAndType("FAILED", "UPDATE")) {
      return "failed";
    }
  }

  public hasAuthCodeMismatchError() {
    return this.processes.some((i) =>
      i.error && i.state === "FAILED"
        ? i.error.includes("AuthCodeMismatchError") ||
          i.error.includes("ErrWrongAuthCode") ||
          i.error.includes("AuthInfo does not match")
        : false,
    );
  }

  public hasDeclareRequestedProcess() {
    return this.hasProcessOfType("DECLARE_REQUESTED");
  }

  public hasMittwaldNameservers(): boolean {
    return (
      this.usesDefaultNameserver ||
      this.nameservers.every((i) => Domain.defaultNameservers.includes(i))
    );
  }

  public hasProcessOfType(type: ProcessType) {
    return this.processes.some((i) => i.processType === type);
  }

  public hasProcessState(state: ProcessState) {
    return this.processes.some((i) => i.state === state);
  }

  public hasProcessWithStateAndType(state: ProcessState, type: ProcessType) {
    return this.processes.some(
      (i) => i.processType === type && i.state === state,
    );
  }

  public hasRunningMoveProcess() {
    return (
      this.hasProcessWithStateAndType("REQUESTED", "DECLARE_REQUESTED") &&
      this.hasProcessWithStateAndType("REQUESTED", "TRANSFER")
    );
  }

  public isFailedRegistration() {
    return (
      this.hasProcessWithStateAndType("FAILED", "DECLARE_REQUESTED") ||
      this.hasProcessWithStateAndType("FAILED", "REGISTER")
    );
  }

  public isFailedTransfer() {
    return this.hasProcessWithStateAndType("FAILED", "TRANSFER");
  }
}

export class DomainDetailed extends DomainCommon {
  public constructor(data: DomainData) {
    super(data);
  }
}

export class DomainListItem extends DomainCommon {
  public override readonly data: DomainListItemData;
  public constructor(data: DomainListItemData) {
    super(data);
    this.data = data;
  }
}

export class DomainListQuery extends ListQueryModel<DomainListQueryModelData> {
  public constructor(data: DomainListQueryModelData = {}) {
    super(data);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.domain.list({
      ...omit(this.query, ["project"]),
      projectId: extractId(this.query.project),
    });

    return new DomainList(
      this.query,
      items.map((d) => new DomainListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: DomainListQueryModelData) {
    return new DomainListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class DomainList extends WithListData<DomainListItem>()(
  DomainListQuery,
) {
  public override readonly items: readonly DomainListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: DomainListQueryModelData,
    domains: DomainListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(domains);
    this.totalCount = totalCount;
  }
}
