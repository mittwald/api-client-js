import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { AppBehaviors } from "../app/App/behaviors/index.js";
import { AppVersionBehaviors } from "../app/AppVersion/behaviors/index.js";
import { SystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors/index.js";
import { SystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors/index.js";
import { InvoiceSettingsBehaviors } from "../customer/InvoiceSettings/behaviors/index.js";
import { UserBehaviors } from "../user/User/behaviors/index.js";
import { InvoiceBehaviors } from "../invoice/Invoice/behaviors/index.js";
import { NotificationBehaviors } from "../notification/Notification/behaviors/index.js";
import { ConversationBehaviors } from "../conversation/Conversation/behaviors/index.js";
import { CustomerMembershipBehaviors } from "../customer/CustomerMembership/behaviors/index.js";
import { ExtensionBehaviors } from "../extension/Extension/behaviors/index.js";
import { ExtensionInstanceBehaviors } from "../extension/ExtensionInstance/behaviors/index.js";
import { ProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    app: AppBehaviors;
    appInstallation: AppInstallationBehaviors;
    appVersion: AppVersionBehaviors;
    conversation: ConversationBehaviors;
    customer: CustomerBehaviors;
    customerMembership: CustomerMembershipBehaviors;
    extension: ExtensionBehaviors;
    extensionInstance: ExtensionInstanceBehaviors;
    ingress: IngressBehaviors;
    invoice: InvoiceBehaviors;
    invoiceSettings: InvoiceSettingsBehaviors;
    notification: NotificationBehaviors;
    project: ProjectBehaviors;
    projectMembership: ProjectMembershipBehaviors;
    server: ServerBehaviors;
    systemSoftware: SystemSoftwareBehaviors;
    systemSoftwareVersion: SystemSoftwareVersionBehaviors;
    user: UserBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    app: undefined as unknown as AppBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
    appVersion: undefined as unknown as AppVersionBehaviors,
    conversation: undefined as unknown as ConversationBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    customerMembership: undefined as unknown as CustomerMembershipBehaviors,
    extension: undefined as unknown as ExtensionBehaviors,
    extensionInstance: undefined as unknown as ExtensionInstanceBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    invoice: undefined as unknown as InvoiceBehaviors,
    invoiceSettings: undefined as unknown as InvoiceSettingsBehaviors,
    notification: undefined as unknown as NotificationBehaviors,
    project: undefined as unknown as ProjectBehaviors,
    projectMembership: undefined as unknown as ProjectMembershipBehaviors,
    server: undefined as unknown as ServerBehaviors,
    systemSoftware: undefined as unknown as SystemSoftwareBehaviors,
    systemSoftwareVersion:
      undefined as unknown as SystemSoftwareVersionBehaviors,
    user: undefined as unknown as UserBehaviors,
  },
};
