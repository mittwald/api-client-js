import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { ContractBehaviors } from "../contract/Contract/behaviors/index.js";
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
import { ExtensionBehaviors } from "../marketplace/Extension/behaviors/index.js";
import { ExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors/index.js";
import { ProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors/index.js";
import { FileBehaviors } from "../file/File/behaviors/index.js";
import { ContractItemBehaviors } from "../contract/ContractItem/behaviors/index.js";
import { ArticleBehaviors } from "../article/Article/behaviors/index.js";
import { MfaBehaviors } from "../auth/Mfa/behaviors/index.js";
import { ContributorBehaviors } from "../marketplace/Contributor/behaviors/index.js";
import { NewsletterBehaviors } from "../newsletter/Newsletter/behaviors/index.js";
import { SessionBehaviors } from "../user/Session/behaviors/index.js";
import { ApiTokenBehaviors } from "../user/ApiToken/behaviors/index.js";
import { SshKeyBehaviors } from "../user/SshKey/behaviors/index.js";
import { FeedbackBehaviors } from "../user/Feedback/behaviors/index.js";
import { SupportCodeBehaviors } from "../user/SupportCode/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    apiToken: ApiTokenBehaviors;
    app: AppBehaviors;
    appInstallation: AppInstallationBehaviors;
    appVersion: AppVersionBehaviors;
    article: ArticleBehaviors;
    contract: ContractBehaviors;
    contractItem: ContractItemBehaviors;
    contributor: ContributorBehaviors;
    conversation: ConversationBehaviors;
    customer: CustomerBehaviors;
    customerMembership: CustomerMembershipBehaviors;
    extension: ExtensionBehaviors;
    extensionInstance: ExtensionInstanceBehaviors;
    feedback: FeedbackBehaviors;
    file: FileBehaviors;
    ingress: IngressBehaviors;
    invoice: InvoiceBehaviors;
    invoiceSettings: InvoiceSettingsBehaviors;
    mfa: MfaBehaviors;
    newsletter: NewsletterBehaviors;
    notification: NotificationBehaviors;
    project: ProjectBehaviors;
    projectMembership: ProjectMembershipBehaviors;
    server: ServerBehaviors;
    session: SessionBehaviors;
    sshKey: SshKeyBehaviors;
    supportCode: SupportCodeBehaviors;
    systemSoftware: SystemSoftwareBehaviors;
    systemSoftwareVersion: SystemSoftwareVersionBehaviors;
    user: UserBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    apiToken: undefined as unknown as ApiTokenBehaviors,
    app: undefined as unknown as AppBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
    appVersion: undefined as unknown as AppVersionBehaviors,
    article: undefined as unknown as ArticleBehaviors,
    contract: undefined as unknown as ContractBehaviors,
    contractItem: undefined as unknown as ContractItemBehaviors,
    contributor: undefined as unknown as ContributorBehaviors,
    conversation: undefined as unknown as ConversationBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    customerMembership: undefined as unknown as CustomerMembershipBehaviors,
    extension: undefined as unknown as ExtensionBehaviors,
    extensionInstance: undefined as unknown as ExtensionInstanceBehaviors,
    feedback: undefined as unknown as FeedbackBehaviors,
    file: undefined as unknown as FileBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    invoice: undefined as unknown as InvoiceBehaviors,
    invoiceSettings: undefined as unknown as InvoiceSettingsBehaviors,
    mfa: undefined as unknown as MfaBehaviors,
    newsletter: undefined as unknown as NewsletterBehaviors,
    notification: undefined as unknown as NotificationBehaviors,
    project: undefined as unknown as ProjectBehaviors,
    projectMembership: undefined as unknown as ProjectMembershipBehaviors,
    server: undefined as unknown as ServerBehaviors,
    session: undefined as unknown as SessionBehaviors,
    sshKey: undefined as unknown as SshKeyBehaviors,
    supportCode: undefined as unknown as SupportCodeBehaviors,
    systemSoftware: undefined as unknown as SystemSoftwareBehaviors,
    systemSoftwareVersion:
      undefined as unknown as SystemSoftwareVersionBehaviors,
    user: undefined as unknown as UserBehaviors,
  },
};
