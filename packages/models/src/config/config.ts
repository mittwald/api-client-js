import type { PerformanceTtfbAnalysisBehaviors } from "../performance/PerformanceTtfbAnalysis/behaviors";
import type { ContributorExtensionBehaviors } from "../marketplace/ContributorExtension/behaviors";
import type { CertificateRequestBehaviors } from "../certificate/CertificateRequest/behaviors";
import type { SystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors";
import type { FinderProfileRequestBehaviors } from "../fyndr/FinderProfileRequest/behaviors";
import type { ExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors";
import type { CustomerMembershipBehaviors } from "../customer/CustomerMembership/behaviors";
import type { ContactVerificationBehaviors } from "../domain/ContactVerification/behaviors";
import type { ProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors";
import type { UsageMetricsBehaviors } from "../monitoring/UsageMetrics/behaviors/types";
import type { CronjobExecutionBehaviors } from "../cronjob/CronjobExecution/behaviors";
import type { InvoiceSettingsBehaviors } from "../customer/InvoiceSettings/behaviors";
import type { StorageMetricsBehaviors } from "../monitoring/StorageMetrics/behaviors";
import type { NotificationBehaviors } from "../notifications/Notifications/behaviors";
import type { RelocationBehaviors } from "../relocation/RelocationRequest/behaviors";
import type { ConversationBehaviors } from "../conversation/Conversation/behaviors";
import type { CustomerInviteBehaviors } from "../customer/CustomerInvite/behaviors";
import type { DomainMigrationBehaviors } from "../domain/DomainMigration/behaviors";
import type { CustomerAIApiKeyBehaviors } from "../ai/CustomerAIApiKey/behaviors";
import type { BackupScheduleBehaviors } from "../backup/BackupSchedule/behaviors";
import type { CustomerAIPlanBehavior } from "../ai/CustomerAIPlan/behavior/types";
import type { AppInstallationBehaviors } from "../app/AppInstallation/behaviors";
import type { CertificateBehaviors } from "../certificate/Certificate/behaviors";
import type { ContributorBehaviors } from "../marketplace/Contributor/behaviors";
import type { PerformanceBehaviors } from "../performance/Performance/behaviors";
import type { ProjectInviteBehaviors } from "../project/ProjectInvite/behaviors";
import type { CustomerAIModelBehaviors } from "../ai/CustomerAIModel/behaviors";
import type { ProjectAIApiKeyBehaviors } from "../ai/ProjectAIApiKey/behaviors";
import type { ContractItemBehaviors } from "../contract/ContractItem/behaviors";
import type { SystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors";
import type { FinderProfileBehaviors } from "../fyndr/FinderProfile/behaviors";
import type { ProjectAIModelBehaviors } from "../ai/ProjectAIModel/behaviors";
import type { MailRateLimitBehaviors } from "../mail/MailRateLimit/behaviors";
import type { NewsletterBehaviors } from "../newsletter/Newsletter/behaviors";
import type { ExtensionBehaviors } from "../marketplace/Extension/behaviors";
import type { RegistrationBehaviors } from "../auth/Registration/behaviors";
import type { UnlockedLeadBehaviors } from "../fyndr/UnlockedLead/behavior";
import type { MailSettingsBehaviors } from "../mail/MailSettings/behaviors";
import type { ContainerBehaviors } from "../container/Container/behaviors";
import type { ProjectAIPlanBehavior } from "../ai/ProjectAIPlan/behavior";
import type { MySqlUserBehaviors } from "../database/MySqlUser/behaviors";
import type { DeliveryBoxBehaviors } from "../mail/DeliveryBox/behaviors";
import type { MailAddressBehaviors } from "../mail/MailAddress/behaviors";
import type { SupportCodeBehaviors } from "../user/SupportCode/behaviors";
import type { RegistryBehaviors } from "../container/Registry/behaviors";
import type { LeadsExportBehavior } from "../fyndr/LeadsExport/behavior";
import type { ContractBehaviors } from "../contract/Contract/behaviors";
import type { CustomerBehaviors } from "../customer/Customer/behaviors";
import type { ActivityBehaviors } from "../activity/Activity/behaviors";
import type { AppVersionBehaviors } from "../app/AppVersion/behaviors";
import type { SftpUserBehaviors } from "../access/SftpUser/behaviors";
import type { ArticleBehaviors } from "../article/Article/behaviors";
import type { VolumeBehaviors } from "../container/Volume/behaviors";
import type { CronjobBehaviors } from "../cronjob/Cronjob/behaviors";
import type { IngressBehaviors } from "../ingress/Ingress/behaviors";
import type { InvoiceBehaviors } from "../invoice/Invoice/behaviors";
import type { ProjectBehaviors } from "../project/Project/behaviors";
import type { SshUserBehaviors } from "../access/SshUser/behaviors";
import type { ApiTokenBehaviors } from "../user/ApiToken/behaviors";
import type { FeedbackBehaviors } from "../user/Feedback/behaviors";
import type { AuthBehaviors } from "../auth/Auth/behaviors/types";
import type { BackupBehaviors } from "../backup/Backup/behaviors";
import type { MySqlBehaviors } from "../database/MySql/behaviors";
import type { RedisBehaviors } from "../database/Redis/behaviors";
import type { DomainBehaviors } from "../domain/Domain/behaviors";
import type { ServerBehaviors } from "../server/Server/behaviors";
import type { SessionBehaviors } from "../user/Session/behaviors";
import type { LicenseBehaviors } from "../app/License/behaviors";
import type { DnsZoneBehaviors } from "../dns/DnsZone/behaviors";
import type { AIModelBehaviors } from "../ai/AIModel/behaviors";
import type { SshKeyBehaviors } from "../user/SshKey/behaviors";
import type { OrderBehaviors } from "../order/Order/behaviors";
import type { TldBehaviors } from "../domain/Tld/behaviors";
import type { FileBehaviors } from "../file/File/behaviors";
import type { CityBehaviors } from "../fyndr/City/behavior";
import type { LeadBehaviors } from "../fyndr/Lead/behavior";
import type { UserBehaviors } from "../user/User/behaviors";
import type { MfaBehaviors } from "../auth/Mfa/behaviors";
import type { AppBehaviors } from "../app/App/behaviors";
import type { UserCommon } from "../user/User/User";

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
