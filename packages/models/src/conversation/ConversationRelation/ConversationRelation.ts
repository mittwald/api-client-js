import { DataModel } from "@mittwald/api-models";
import { ConversationRelationData } from "./types.js";
import { Project } from "../../project/index.js";
import { Server } from "../../server/index.js";
import { Customer } from "../../customer/index.js";
import { AppInstallation } from "../../app/index.js";
import { ExtensionInstance } from "../../extension/ExtensionInstance/index.js";
import { User } from "../../user/User/index.js";

export class ConversationRelation extends DataModel<ConversationRelationData> {
  public readonly project?: Project;
  public readonly server?: Server;
  public readonly customer?: Customer;
  public readonly appInstallation?: AppInstallation;
  public readonly extensionInstance?: ExtensionInstance;
  public readonly user?: User;

  public constructor(data: ConversationRelationData) {
    super(data);
    const { aggregate, domain, id } = data;
    if (
      domain === Server.aggregateMetaData.domain &&
      aggregate === Server.aggregateMetaData.aggregate
    ) {
      this.server = Server.ofId(id);
    } else if (
      domain === Customer.aggregateMetaData.domain &&
      aggregate === Customer.aggregateMetaData.aggregate
    ) {
      this.customer = Customer.ofId(id);
    } else if (
      domain === Project.aggregateMetaData.domain &&
      aggregate === Project.aggregateMetaData.aggregate
    ) {
      this.project = Project.ofId(id);
    } else if (
      domain === AppInstallation.aggregateMetaData.domain &&
      aggregate === AppInstallation.aggregateMetaData.aggregate
    ) {
      this.appInstallation = AppInstallation.ofId(id);
    } else if (
      domain === ExtensionInstance.aggregateMetaData.domain &&
      aggregate === ExtensionInstance.aggregateMetaData.aggregate
    ) {
      this.extensionInstance = ExtensionInstance.ofId(id);
    } else if (
      domain === User.aggregateMetaData.domain &&
      aggregate === User.aggregateMetaData.aggregate
    ) {
      this.user = User.ofId(id);
    }
  }
}
