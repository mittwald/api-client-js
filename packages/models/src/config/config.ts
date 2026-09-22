import type { PerformanceTtfbAnalysisBehaviors } from "../performance/PerformanceTtfbAnalysis/behaviors/index.js";
import type { ContributorExtensionBehaviors } from "../marketplace/ContributorExtension/behaviors/index.js";
import type { CertificateRequestBehaviors } from "../certificate/CertificateRequest/behaviors/index.js";
import type { SystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors/index.js";
import type { FinderProfileRequestBehaviors } from "../fyndr/FinderProfileRequest/behaviors/index.js";
import type { ExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors/index.js";
import type { CustomerMembershipBehaviors } from "../customer/CustomerMembership/behaviors/index.js";
import type { ContactVerificationBehaviors } from "../domain/ContactVerification/behaviors/index.js";
import type { ProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors/index.js";
import type { UsageMetricsBehaviors } from "../monitoring/UsageMetrics/behaviors/types.js";
import type { CronjobExecutionBehaviors } from "../cronjob/CronjobExecution/behaviors/index.js";
import type { InvoiceSettingsBehaviors } from "../customer/InvoiceSettings/behaviors/index.js";
import type { StorageMetricsBehaviors } from "../monitoring/StorageMetrics/behaviors/index.js";
import type { NotificationBehaviors } from "../notifications/Notifications/behaviors/index.js";
import type { RelocationBehaviors } from "../relocation/RelocationRequest/behaviors/index.js";
import type { ConversationBehaviors } from "../conversation/Conversation/behaviors/index.js";
import type { CustomerInviteBehaviors } from "../customer/CustomerInvite/behaviors/index.js";
import type { DomainMigrationBehaviors } from "../domain/DomainMigration/behaviors/index.js";
import type { CustomerAIApiKeyBehaviors } from "../ai/CustomerAIApiKey/behaviors/index.js";
import type { BackupScheduleBehaviors } from "../backup/BackupSchedule/behaviors/index.js";
import type { CustomerAIPlanBehavior } from "../ai/CustomerAIPlan/behavior/types.js";
import type { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import type { CertificateBehaviors } from "../certificate/Certificate/behaviors/index.js";
import type { ContributorBehaviors } from "../marketplace/Contributor/behaviors/index.js";
import type { PerformanceBehaviors } from "../performance/Performance/behaviors/index.js";
import type { ProjectInviteBehaviors } from "../project/ProjectInvite/behaviors/index.js";
import type { CustomerAIModelBehaviors } from "../ai/CustomerAIModel/behaviors/index.js";
import type { ProjectAIApiKeyBehaviors } from "../ai/ProjectAIApiKey/behaviors/index.js";
import type { ContractItemBehaviors } from "../contract/ContractItem/behaviors/index.js";
import type { SystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors/index.js";
import type { FinderProfileBehaviors } from "../fyndr/FinderProfile/behaviors/index.js";
import type { ProjectAIModelBehaviors } from "../ai/ProjectAIModel/behaviors/index.js";
import type { MailRateLimitBehaviors } from "../mail/MailRateLimit/behaviors/index.js";
import type { NewsletterBehaviors } from "../newsletter/Newsletter/behaviors/index.js";
import type { ExtensionBehaviors } from "../marketplace/Extension/behaviors/index.js";
import type { RegistrationBehaviors } from "../auth/Registration/behaviors/index.js";
import type { UnlockedLeadBehaviors } from "../fyndr/UnlockedLead/behavior/index.js";
import type { MailSettingsBehaviors } from "../mail/MailSettings/behaviors/index.js";
import type { ContainerBehaviors } from "../container/Container/behaviors/index.js";
import type { ProjectAIPlanBehavior } from "../ai/ProjectAIPlan/behavior/index.js";
import type { MySqlUserBehaviors } from "../database/MySqlUser/behaviors/index.js";
import type { DeliveryBoxBehaviors } from "../mail/DeliveryBox/behaviors/index.js";
import type { MailAddressBehaviors } from "../mail/MailAddress/behaviors/index.js";
import type { SupportCodeBehaviors } from "../user/SupportCode/behaviors/index.js";
import type { RegistryBehaviors } from "../container/Registry/behaviors/index.js";
import type { LeadsExportBehavior } from "../fyndr/LeadsExport/behavior/index.js";
import type { ContractBehaviors } from "../contract/Contract/behaviors/index.js";
import type { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import type { ActivityBehaviors } from "../activity/Activity/behaviors/index.js";
import type { AppVersionBehaviors } from "../app/AppVersion/behaviors/index.js";
import type { SftpUserBehaviors } from "../access/SftpUser/behaviors/index.js";
import type { ArticleBehaviors } from "../article/Article/behaviors/index.js";
import type { VolumeBehaviors } from "../container/Volume/behaviors/index.js";
import type { CronjobBehaviors } from "../cronjob/Cronjob/behaviors/index.js";
import type { IngressBehaviors } from "../ingress/Ingress/behaviors/index.js";
import type { InvoiceBehaviors } from "../invoice/Invoice/behaviors/index.js";
import type { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import type { SshUserBehaviors } from "../access/SshUser/behaviors/index.js";
import type { ApiTokenBehaviors } from "../user/ApiToken/behaviors/index.js";
import type { FeedbackBehaviors } from "../user/Feedback/behaviors/index.js";
import type { AuthBehaviors } from "../auth/Auth/behaviors/types.js";
import type { BackupBehaviors } from "../backup/Backup/behaviors/index.js";
import type { MySqlBehaviors } from "../database/MySql/behaviors/index.js";
import type { RedisBehaviors } from "../database/Redis/behaviors/index.js";
import type { DomainBehaviors } from "../domain/Domain/behaviors/index.js";
import type { ServerBehaviors } from "../server/Server/behaviors/index.js";
import type { SessionBehaviors } from "../user/Session/behaviors/index.js";
import type { LicenseBehaviors } from "../app/License/behaviors/index.js";
import type { DnsZoneBehaviors } from "../dns/DnsZone/behaviors/index.js";
import type { AIModelBehaviors } from "../ai/AIModel/behaviors/index.js";
import type { SshKeyBehaviors } from "../user/SshKey/behaviors/index.js";
import type { OrderBehaviors } from "../order/Order/behaviors/index.js";
import type { TldBehaviors } from "../domain/Tld/behaviors/index.js";
import type { FileBehaviors } from "../file/File/behaviors/index.js";
import type { CityBehaviors } from "../fyndr/City/behavior/index.js";
import type { LeadBehaviors } from "../fyndr/Lead/behavior/index.js";
import type { UserBehaviors } from "../user/User/behaviors/index.js";
import type { MfaBehaviors } from "../auth/Mfa/behaviors/index.js";
import type { AppBehaviors } from "../app/App/behaviors/index.js";
import type { UserCommon } from "../user/User/User.js";

export interface Behaviors {
  performanceTtfbAnalysis: PerformanceTtfbAnalysisBehaviors;
  systemSoftwareVersion: SystemSoftwareVersionBehaviors;
  contributorExtension: ContributorExtensionBehaviors;
  finderProfileRequest: FinderProfileRequestBehaviors;
  contactVerification: ContactVerificationBehaviors;
  certificateRequest: CertificateRequestBehaviors;
  customerMembership: CustomerMembershipBehaviors;
  extensionInstance: ExtensionInstanceBehaviors;
  projectMembership: ProjectMembershipBehaviors;
  cronjobExecution: CronjobExecutionBehaviors;
  customerAiApiKey: CustomerAIApiKeyBehaviors;
  appInstallation: AppInstallationBehaviors;
  invoiceSettings: InvoiceSettingsBehaviors;
  customerAIModel: CustomerAIModelBehaviors;
  projectAiApiKey: ProjectAIApiKeyBehaviors;
  domainMigration: DomainMigrationBehaviors;
  backupSchedule: BackupScheduleBehaviors;
  customerInvite: CustomerInviteBehaviors;
  storageMetrics: StorageMetricsBehaviors;
  systemSoftware: SystemSoftwareBehaviors;
  projectAIModel: ProjectAIModelBehaviors;
  customerAiPlan: CustomerAIPlanBehavior;
  projectInvite: ProjectInviteBehaviors;
  finderProfile: FinderProfileBehaviors;
  mailRateLimit: MailRateLimitBehaviors;
  projectAiPlan: ProjectAIPlanBehavior;
  contractItem: ContractItemBehaviors;
  conversation: ConversationBehaviors;
  mailSettings: MailSettingsBehaviors;
  notification: NotificationBehaviors;
  registration: RegistrationBehaviors;
  usageMetrics: UsageMetricsBehaviors;
  unlockedLead: UnlockedLeadBehaviors;
  certificate: CertificateBehaviors;
  contributor: ContributorBehaviors;
  deliveryBox: DeliveryBoxBehaviors;
  mailAddress: MailAddressBehaviors;
  performance: PerformanceBehaviors;
  supportCode: SupportCodeBehaviors;
  leadsExport: LeadsExportBehavior;
  appVersion: AppVersionBehaviors;
  newsletter: NewsletterBehaviors;
  relocation: RelocationBehaviors;
  container: ContainerBehaviors;
  extension: ExtensionBehaviors;
  mySqlUser: MySqlUserBehaviors;
  activity: ActivityBehaviors;
  apiToken: ApiTokenBehaviors;
  contract: ContractBehaviors;
  customer: CustomerBehaviors;
  feedback: FeedbackBehaviors;
  registry: RegistryBehaviors;
  sftpUser: SftpUserBehaviors;
  article: ArticleBehaviors;
  cronjob: CronjobBehaviors;
  dnsZone: DnsZoneBehaviors;
  ingress: IngressBehaviors;
  invoice: InvoiceBehaviors;
  project: ProjectBehaviors;
  session: SessionBehaviors;
  sshUser: SshUserBehaviors;
  aiModel: AIModelBehaviors;
  license: LicenseBehaviors;
  backup: BackupBehaviors;
  domain: DomainBehaviors;
  server: ServerBehaviors;
  sshKey: SshKeyBehaviors;
  volume: VolumeBehaviors;
  mySql: MySqlBehaviors;
  order: OrderBehaviors;
  redis: RedisBehaviors;
  auth: AuthBehaviors;
  file: FileBehaviors;
  user: UserBehaviors;
  lead: LeadBehaviors;
  city: CityBehaviors;
  app: AppBehaviors;
  mfa: MfaBehaviors;
  tld: TldBehaviors;
}

interface Config {
  isEmployee?: (user: UserCommon) => boolean;
  defaultPaginationLimit: number;
  locale: () => "de" | "en";
  behaviors: Behaviors;
}

export const config: Config = {
  behaviors: new Proxy<Behaviors>(Object.create(null), {
    get(target, property, receiver) {
      if (Reflect.has(target, property)) {
        return Reflect.get(target, property, receiver);
      }

      throw new Error(
        `@mittwald/api-models is not initialized — call initApiModels({ apiClient }) at startup before using any model (accessed behaviors.${String(property)})`,
      );
    },
  }),
  defaultPaginationLimit: 50,
  locale: () => "de",
};
