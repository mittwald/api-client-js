import type { ContractItemReferenceData } from "./types.js";

import { CustomerAIPlan } from "../../ai/CustomerAIPlan/CustomerAIPlan.js";
import { Certificate } from "../../certificate/Certificate/Certificate.js";
import { MailAddress } from "../../mail/MailAddress/MailAddress.js";
import { License } from "../../app/License/License.js";
import { Domain } from "../../domain/Domain/Domain.js";
import { Server } from "../../server/Server/Server.js";
import { Project } from "../../project/internal.js";
import { DataModel } from "../../base/index.js";

export class ContractItemReference extends DataModel<ContractItemReferenceData> {
  public readonly aiPlan?: CustomerAIPlan;
  public readonly certificate?: Certificate;
  public readonly domain?: Domain;
  public readonly license?: License;
  public readonly mailAddress?: MailAddress;
  public readonly project?: Project;
  public readonly server?: Server;

  public constructor(data: ContractItemReferenceData, customerId: string) {
    super(data);
    const { aggregate, domain, id } = data;
    if (
      domain.includes(Server.aggregateMetaData.domain) &&
      aggregate === Server.aggregateMetaData.aggregate
    ) {
      this.server = Server.ofId(id);
    } else if (
      domain.includes(Project.aggregateMetaData.domain) &&
      aggregate.includes(Project.aggregateMetaData.aggregate)
    ) {
      this.project = Project.ofId(id);
    } else if (
      domain.includes(Domain.aggregateMetaData.domain) &&
      aggregate.includes(Domain.aggregateMetaData.aggregate)
    ) {
      this.domain = Domain.ofId(id);
    } else if (
      domain.includes(Certificate.aggregateMetaData.domain) &&
      aggregate === Certificate.aggregateMetaData.aggregate
    ) {
      this.certificate = Certificate.ofId(id);
    } else if (
      domain.includes(MailAddress.aggregateMetaData.domain) &&
      aggregate === MailAddress.aggregateMetaData.aggregate
    ) {
      this.mailAddress = MailAddress.ofId(id);
    } else if (
      domain.includes(CustomerAIPlan.aggregateMetaData.domain) &&
      aggregate === CustomerAIPlan.aggregateMetaData.aggregate.toLowerCase()
    ) {
      this.aiPlan = CustomerAIPlan.ofId(customerId, id);
    } else if (
      domain.includes(License.aggregateMetaData.domain) &&
      aggregate === License.aggregateMetaData.aggregate
    ) {
      this.license = License.ofId(id);
    }
  }
}
