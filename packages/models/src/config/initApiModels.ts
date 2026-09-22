import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { UserCommon } from "../user/User/User";

import { apiPerformanceTtfbAnalysisBehaviors } from "../performance/PerformanceTtfbAnalysis/behaviors";
import { apiContributorExtensionBehaviors } from "../marketplace/ContributorExtension/behaviors";
import { apiCertificateRequestBehaviors } from "../certificate/CertificateRequest/behaviors";
import { apiSystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors";
import { apiFinderProfileRequestBehaviors } from "../fyndr/FinderProfileRequest/behaviors";
import { apiExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors";
import { apiCustomerMembershipBehaviors } from "../customer/CustomerMembership/behaviors";
import { apiContactVerificationBehaviors } from "../domain/ContactVerification/behaviors";
import { apiProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors";
import { apiCronjobExecutionBehaviors } from "../cronjob/CronjobExecution/behaviors";
import { apiInvoiceSettingsBehaviors } from "../customer/InvoiceSettings/behaviors";
import { apiStorageMetricsBehaviors } from "../monitoring/StorageMetrics/behaviors";
import { apiUsageMetricsBehaviors } from "../monitoring/UsageMetrics/behaviors/api";
import { apiNotificationBehaviors } from "../notifications/Notifications/behaviors";
import { apiRelocationBehaviors } from "../relocation/RelocationRequest/behaviors";
import { apiConversationBehaviors } from "../conversation/Conversation/behaviors";
import { apiCustomerInviteBehaviors } from "../customer/CustomerInvite/behaviors";
import { apiDomainMigrationBehavior } from "../domain/DomainMigration/behaviors";
import { apiCustomerAIApiKeyBehaviors } from "../ai/CustomerAIApiKey/behaviors";
import { apiBackupScheduleBehaviors } from "../backup/BackupSchedule/behaviors";
import { apiCustomerAIPlanBehaviors } from "../ai/CustomerAIPlan/behavior/api";
import { apiAppInstallationBehaviors } from "../app/AppInstallation/behaviors";
import { apiCertificateBehaviors } from "../certificate/Certificate/behaviors";
import { apiContributorBehaviors } from "../marketplace/Contributor/behaviors";
import { apiPerformanceBehaviors } from "../performance/Performance/behaviors";
import { apiProjectInviteBehaviors } from "../project/ProjectInvite/behaviors";
import { apiCustomerAIModelBehaviors } from "../ai/CustomerAIModel/behaviors";
import { apiProjectAIApiKeyBehaviors } from "../ai/ProjectAIApiKey/behaviors";
import { apiContractItemBehaviors } from "../contract/ContractItem/behaviors";
import { apiSystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors";
import { apiFinderProfileBehaviors } from "../fyndr/FinderProfile/behaviors";
import { apiProjectAIModelBehaviors } from "../ai/ProjectAIModel/behaviors";
import { apiMailRateLimitBehaviors } from "../mail/MailRateLimit/behaviors";
import { apiNewsletterBehaviors } from "../newsletter/Newsletter/behaviors";
import { apiExtensionBehaviors } from "../marketplace/Extension/behaviors";
import { apiRegistrationBehaviors } from "../auth/Registration/behaviors";
import { apiUnlockedLeadBehaviors } from "../fyndr/UnlockedLead/behavior";
import { apiMailSettingsBehaviors } from "../mail/MailSettings/behaviors";
import { apiProjectAIPlanBehaviors } from "../ai/ProjectAIPlan/behavior";
import { apiContainerBehaviors } from "../container/Container/behaviors";
import { apiMySqlUserBehaviors } from "../database/MySqlUser/behaviors";
import { apiDeliveryBoxBehaviors } from "../mail/DeliveryBox/behaviors";
import { apiMailAddressBehaviors } from "../mail/MailAddress/behaviors";
import { apiSupportCodeBehaviors } from "../user/SupportCode/behaviors";
import { apiRegistryBehaviors } from "../container/Registry/behaviors";
import { apiLeadsExportBehavior } from "../fyndr/LeadsExport/behavior";
import { apiContractBehaviors } from "../contract/Contract/behaviors";
import { apiCustomerBehaviors } from "../customer/Customer/behaviors";
import { apiActivityBehaviors } from "../activity/Activity/behaviors";
import { apiAppVersionBehaviors } from "../app/AppVersion/behaviors";
import { apiSftpUserBehaviors } from "../access/SftpUser/behaviors";
import { apiArticleBehaviors } from "../article/Article/behaviors";
import { apiVolumeBehaviors } from "../container/Volume/behaviors";
import { apiCronjobBehaviors } from "../cronjob/Cronjob/behaviors";
import { apiIngressBehaviors } from "../ingress/Ingress/behaviors";
import { apiInvoiceBehaviors } from "../invoice/Invoice/behaviors";
import { apiProjectBehaviors } from "../project/Project/behaviors";
import { apiSshUserBehaviors } from "../access/SshUser/behaviors";
import { apiApiTokenBehaviors } from "../user/ApiToken/behaviors";
import { apiFeedbackBehaviors } from "../user/Feedback/behaviors";
import { apiBackupBehaviors } from "../backup/Backup/behaviors";
import { apiMySqlBehaviors } from "../database/MySql/behaviors";
import { apiRedisBehaviors } from "../database/Redis/behaviors";
import { apiDomainBehaviors } from "../domain/Domain/behaviors";
import { apiServerBehaviors } from "../server/Server/behaviors";
import { apiSessionBehaviors } from "../user/Session/behaviors";
import { apiLicenseBehaviors } from "../app/License/behaviors";
import { apiDnsZoneBehaviors } from "../dns/DnsZone/behaviors";
import { apiAIModelBehaviors } from "../ai/AIModel/behaviors";
import { apiSshKeyBehaviors } from "../user/SshKey/behaviors";
import { apiOrderBehaviors } from "../order/Order/behaviors";
import { apiAuthBehaviors } from "../auth/Auth/behaviors";
import { apiTldBehaviors } from "../domain/Tld/behaviors";
import { apiFileBehaviors } from "../file/File/behaviors";
import { apiLeadBehaviors } from "../fyndr/Lead/behavior";
import { apiUserBehaviors } from "../user/User/behaviors";
import { apiCityBehavior } from "../fyndr/City/behavior";
import { apiMfaBehaviors } from "../auth/Mfa/behaviors";
import { apiAppBehaviors } from "../app/App/behaviors";
import { config } from "./config";

export interface InitApiModelsOptions {
  isEmployee?: (user: UserCommon) => boolean;
  defaultPaginationLimit?: number;
  apiClient: MittwaldAPIV2Client;
  locale?: () => "de" | "en";
  usageMetricsUrl?: string;
}

export function initApiModels(options: InitApiModelsOptions): void {
  const { apiClient } = options;

  config.defaultPaginationLimit = options.defaultPaginationLimit ?? 50;
  config.isEmployee = options.isEmployee;
  config.behaviors.activity = apiActivityBehaviors(apiClient);
  config.behaviors.apiToken = apiApiTokenBehaviors(apiClient);
  config.behaviors.app = apiAppBehaviors(apiClient);
  config.behaviors.appInstallation = apiAppInstallationBehaviors(apiClient);
  config.behaviors.appVersion = apiAppVersionBehaviors(apiClient);
  config.behaviors.article = apiArticleBehaviors(apiClient);
  config.behaviors.auth = apiAuthBehaviors(apiClient);
  config.behaviors.backup = apiBackupBehaviors(apiClient);
  config.behaviors.backupSchedule = apiBackupScheduleBehaviors(apiClient);
  config.behaviors.certificate = apiCertificateBehaviors(apiClient);
  config.behaviors.certificateRequest =
    apiCertificateRequestBehaviors(apiClient);
  config.behaviors.container = apiContainerBehaviors(apiClient);
  config.behaviors.contract = apiContractBehaviors(apiClient);
  config.behaviors.contractItem = apiContractItemBehaviors(apiClient);
  config.behaviors.contributor = apiContributorBehaviors(apiClient);
  config.behaviors.contributorExtension =
    apiContributorExtensionBehaviors(apiClient);
  config.behaviors.conversation = apiConversationBehaviors(apiClient);
  config.behaviors.cronjob = apiCronjobBehaviors(apiClient);
  config.behaviors.cronjobExecution = apiCronjobExecutionBehaviors(apiClient);
  config.behaviors.customer = apiCustomerBehaviors(apiClient);
  config.behaviors.customerInvite = apiCustomerInviteBehaviors(apiClient);
  config.behaviors.customerMembership =
    apiCustomerMembershipBehaviors(apiClient);
  config.behaviors.deliveryBox = apiDeliveryBoxBehaviors(apiClient);
  config.behaviors.dnsZone = apiDnsZoneBehaviors(apiClient);
  config.behaviors.domain = apiDomainBehaviors(apiClient);
  config.behaviors.extension = apiExtensionBehaviors(apiClient);
  config.behaviors.extensionInstance = apiExtensionInstanceBehaviors(apiClient);
  config.behaviors.feedback = apiFeedbackBehaviors(apiClient);
  config.behaviors.file = apiFileBehaviors(apiClient);
  config.behaviors.ingress = apiIngressBehaviors(apiClient);
  config.behaviors.invoice = apiInvoiceBehaviors(apiClient);
  config.behaviors.invoiceSettings = apiInvoiceSettingsBehaviors(apiClient);
  config.behaviors.mailAddress = apiMailAddressBehaviors(apiClient);
  config.behaviors.mailSettings = apiMailSettingsBehaviors(apiClient);
  config.behaviors.mfa = apiMfaBehaviors(apiClient);
  config.behaviors.mySql = apiMySqlBehaviors(apiClient);
  config.behaviors.mySqlUser = apiMySqlUserBehaviors(apiClient);
  config.behaviors.newsletter = apiNewsletterBehaviors(apiClient);
  config.behaviors.notification = apiNotificationBehaviors(apiClient);
  config.behaviors.order = apiOrderBehaviors(apiClient);
  config.behaviors.performance = apiPerformanceBehaviors(apiClient);
  config.behaviors.performanceTtfbAnalysis =
    apiPerformanceTtfbAnalysisBehaviors(apiClient);
  config.behaviors.project = apiProjectBehaviors(apiClient);
  config.behaviors.projectInvite = apiProjectInviteBehaviors(apiClient);
  config.behaviors.projectMembership = apiProjectMembershipBehaviors(apiClient);
  config.behaviors.redis = apiRedisBehaviors(apiClient);
  config.behaviors.registration = apiRegistrationBehaviors(apiClient);
  config.behaviors.registry = apiRegistryBehaviors(apiClient);
  config.behaviors.relocation = apiRelocationBehaviors(apiClient);
  config.behaviors.server = apiServerBehaviors(apiClient);
  config.behaviors.session = apiSessionBehaviors(apiClient);
  config.behaviors.sftpUser = apiSftpUserBehaviors(apiClient);
  config.behaviors.sshKey = apiSshKeyBehaviors(apiClient);
  config.behaviors.sshUser = apiSshUserBehaviors(apiClient);
  config.behaviors.storageMetrics = apiStorageMetricsBehaviors(apiClient);
  config.behaviors.supportCode = apiSupportCodeBehaviors(apiClient);
  config.behaviors.systemSoftware = apiSystemSoftwareBehaviors(apiClient);
  config.behaviors.systemSoftwareVersion =
    apiSystemSoftwareVersionBehaviors(apiClient);
  config.behaviors.tld = apiTldBehaviors(apiClient);
  config.behaviors.user = apiUserBehaviors(apiClient);
  config.behaviors.volume = apiVolumeBehaviors(apiClient);
  config.behaviors.finderProfile = apiFinderProfileBehaviors(apiClient);
  config.behaviors.finderProfileRequest =
    apiFinderProfileRequestBehaviors(apiClient);
  config.behaviors.lead = apiLeadBehaviors(apiClient);
  config.behaviors.leadsExport = apiLeadsExportBehavior(apiClient);
  config.behaviors.unlockedLead = apiUnlockedLeadBehaviors(apiClient);
  config.behaviors.city = apiCityBehavior(apiClient);
  config.behaviors.aiModel = apiAIModelBehaviors(apiClient);
  config.behaviors.customerAIModel = apiCustomerAIModelBehaviors(apiClient);
  config.behaviors.projectAIModel = apiProjectAIModelBehaviors(apiClient);
  config.behaviors.projectAiApiKey = apiProjectAIApiKeyBehaviors(apiClient);
  config.behaviors.customerAiApiKey = apiCustomerAIApiKeyBehaviors(apiClient);
  config.behaviors.projectAiPlan = apiProjectAIPlanBehaviors(apiClient);
  config.behaviors.customerAiPlan = apiCustomerAIPlanBehaviors(apiClient);
  config.behaviors.license = apiLicenseBehaviors(apiClient);
  config.behaviors.usageMetrics = apiUsageMetricsBehaviors(
    apiClient,
    options.usageMetricsUrl ?? "",
  );
  config.behaviors.contactVerification =
    apiContactVerificationBehaviors(apiClient);
  config.behaviors.domainMigration = apiDomainMigrationBehavior(apiClient);
  config.behaviors.mailRateLimit = apiMailRateLimitBehaviors(apiClient);

  if (options.locale) {
    config.locale = options.locale;
  }
}
