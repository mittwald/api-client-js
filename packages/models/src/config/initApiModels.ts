import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { UserCommon } from "../user/User/User.js";

import { apiPerformanceTtfbAnalysisBehaviors } from "../performance/PerformanceTtfbAnalysis/behaviors/index.js";
import { apiContributorExtensionBehaviors } from "../marketplace/ContributorExtension/behaviors/index.js";
import { apiCertificateRequestBehaviors } from "../certificate/CertificateRequest/behaviors/index.js";
import { apiSystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors/index.js";
import { apiFinderProfileRequestBehaviors } from "../fyndr/FinderProfileRequest/behaviors/index.js";
import { apiExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors/index.js";
import { apiCustomerMembershipBehaviors } from "../customer/CustomerMembership/behaviors/index.js";
import { apiContactVerificationBehaviors } from "../domain/ContactVerification/behaviors/index.js";
import { apiProjectMembershipBehaviors } from "../project/ProjectMembership/behaviors/index.js";
import { apiCronjobExecutionBehaviors } from "../cronjob/CronjobExecution/behaviors/index.js";
import { apiInvoiceSettingsBehaviors } from "../customer/InvoiceSettings/behaviors/index.js";
import { apiStorageMetricsBehaviors } from "../monitoring/StorageMetrics/behaviors/index.js";
import { apiUsageMetricsBehaviors } from "../monitoring/UsageMetrics/behaviors/api.js";
import { apiNotificationBehaviors } from "../notifications/Notifications/behaviors/index.js";
import { apiRelocationBehaviors } from "../relocation/RelocationRequest/behaviors/index.js";
import { apiAITokenStatisticsBehaviors } from "../ai/AITokenStatistics/behaviors/index.js";
import { apiConversationBehaviors } from "../conversation/Conversation/behaviors/index.js";
import { apiCustomerInviteBehaviors } from "../customer/CustomerInvite/behaviors/index.js";
import { apiDomainMigrationBehavior } from "../domain/DomainMigration/behaviors/index.js";
import { apiCustomerAIApiKeyBehaviors } from "../ai/CustomerAIApiKey/behaviors/index.js";
import { apiBackupScheduleBehaviors } from "../backup/BackupSchedule/behaviors/index.js";
import { apiCustomerAIPlanBehaviors } from "../ai/CustomerAIPlan/behavior/api.js";
import { apiAppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { apiCertificateBehaviors } from "../certificate/Certificate/behaviors/index.js";
import { apiContributorBehaviors } from "../marketplace/Contributor/behaviors/index.js";
import { apiPerformanceBehaviors } from "../performance/Performance/behaviors/index.js";
import { apiProjectInviteBehaviors } from "../project/ProjectInvite/behaviors/index.js";
import { apiCustomerAIModelBehaviors } from "../ai/CustomerAIModel/behaviors/index.js";
import { apiProjectAIApiKeyBehaviors } from "../ai/ProjectAIApiKey/behaviors/index.js";
import { apiContractItemBehaviors } from "../contract/ContractItem/behaviors/index.js";
import { apiSystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors/index.js";
import { apiFinderProfileBehaviors } from "../fyndr/FinderProfile/behaviors/index.js";
import { apiProjectAIModelBehaviors } from "../ai/ProjectAIModel/behaviors/index.js";
import { apiMailRateLimitBehaviors } from "../mail/MailRateLimit/behaviors/index.js";
import { apiNewsletterBehaviors } from "../newsletter/Newsletter/behaviors/index.js";
import { apiExtensionBehaviors } from "../marketplace/Extension/behaviors/index.js";
import { apiRegistrationBehaviors } from "../auth/Registration/behaviors/index.js";
import { apiUnlockedLeadBehaviors } from "../fyndr/UnlockedLead/behavior/index.js";
import { apiMailSettingsBehaviors } from "../mail/MailSettings/behaviors/index.js";
import { apiProjectAIPlanBehaviors } from "../ai/ProjectAIPlan/behavior/index.js";
import { apiContainerBehaviors } from "../container/Container/behaviors/index.js";
import { apiMySqlUserBehaviors } from "../database/MySqlUser/behaviors/index.js";
import { apiDeliveryBoxBehaviors } from "../mail/DeliveryBox/behaviors/index.js";
import { apiMailAddressBehaviors } from "../mail/MailAddress/behaviors/index.js";
import { apiSupportCodeBehaviors } from "../user/SupportCode/behaviors/index.js";
import { apiRegistryBehaviors } from "../container/Registry/behaviors/index.js";
import { apiLeadsExportBehavior } from "../fyndr/LeadsExport/behavior/index.js";
import { apiContractBehaviors } from "../contract/Contract/behaviors/index.js";
import { apiCustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { apiActivityBehaviors } from "../activity/Activity/behaviors/index.js";
import { apiAppVersionBehaviors } from "../app/AppVersion/behaviors/index.js";
import { apiSpotlightBehaviors } from "../user/Spotlight/behaviors/index.js";
import { apiSftpUserBehaviors } from "../access/SftpUser/behaviors/index.js";
import { apiArticleBehaviors } from "../article/Article/behaviors/index.js";
import { apiVolumeBehaviors } from "../container/Volume/behaviors/index.js";
import { apiCronjobBehaviors } from "../cronjob/Cronjob/behaviors/index.js";
import { apiIngressBehaviors } from "../ingress/Ingress/behaviors/index.js";
import { apiInvoiceBehaviors } from "../invoice/Invoice/behaviors/index.js";
import { apiProjectBehaviors } from "../project/Project/behaviors/index.js";
import { apiSshUserBehaviors } from "../access/SshUser/behaviors/index.js";
import { apiApiTokenBehaviors } from "../user/ApiToken/behaviors/index.js";
import { apiFeedbackBehaviors } from "../user/Feedback/behaviors/index.js";
import { apiBackupBehaviors } from "../backup/Backup/behaviors/index.js";
import { apiMySqlBehaviors } from "../database/MySql/behaviors/index.js";
import { apiRedisBehaviors } from "../database/Redis/behaviors/index.js";
import { apiDomainBehaviors } from "../domain/Domain/behaviors/index.js";
import { apiServerBehaviors } from "../server/Server/behaviors/index.js";
import { apiSessionBehaviors } from "../user/Session/behaviors/index.js";
import { apiLicenseBehaviors } from "../app/License/behaviors/index.js";
import { apiDnsZoneBehaviors } from "../dns/DnsZone/behaviors/index.js";
import { apiAIModelBehaviors } from "../ai/AIModel/behaviors/index.js";
import { apiSshKeyBehaviors } from "../user/SshKey/behaviors/index.js";
import { apiOrderBehaviors } from "../order/Order/behaviors/index.js";
import { apiAuthBehaviors } from "../auth/Auth/behaviors/index.js";
import { apiTldBehaviors } from "../domain/Tld/behaviors/index.js";
import { apiFileBehaviors } from "../file/File/behaviors/index.js";
import { apiLeadBehaviors } from "../fyndr/Lead/behavior/index.js";
import { apiUserBehaviors } from "../user/User/behaviors/index.js";
import { apiCityBehavior } from "../fyndr/City/behavior/index.js";
import { apiMfaBehaviors } from "../auth/Mfa/behaviors/index.js";
import { apiAppBehaviors } from "../app/App/behaviors/index.js";
import { config } from "./config.js";

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
  config.behaviors.spotlight = apiSpotlightBehaviors(apiClient);
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
  config.behaviors.aiTokenStatistics = apiAITokenStatisticsBehaviors(apiClient);
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
