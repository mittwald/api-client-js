import { DataModel } from "@mittwald/api-models";
import { ContractItemReferenceData } from "./types.js";
import { Project } from "../../project/index.js";
import { Server } from "../../server/index.js";
import { Domain } from "../../domain/index.js";

export class ContractItemReference extends DataModel<ContractItemReferenceData> {
  public readonly project?: Project;
  public readonly server?: Server;
  public readonly domain?: Domain;

  public constructor(data: ContractItemReferenceData) {
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
    }
  }
}
