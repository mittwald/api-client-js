/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import MittwaldAPIV2Client from "./client.js";
import { ApiCallAsyncResourceFactory } from "@mittwald/api-client-commons/react";
import * as descriptors from "./descriptors.js";
export * from "@mittwald/react-use-promise";

const buildAiHostingApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a list of already created llm licences. */
  customerGetLlmLicences: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingCustomerGetLlmLicences,
    baseClient.aiHosting.customerGetLlmLicences,
  ).getApiResource,
  /** Get a licence of a customer. */
  customerGetLlmLicence: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingCustomerGetLlmLicence,
    baseClient.aiHosting.customerGetLlmLicence,
  ).getApiResource,
  /** Get llm tariff and usages of a customer. */
  customerGetLlmTariffOptions: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingCustomerGetLlmTariffOptions,
    baseClient.aiHosting.customerGetLlmTariffOptions,
  ).getApiResource,
  /** Get a list of currently active llm models. */
  getLlmModels: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingGetLlmModels,
    baseClient.aiHosting.getLlmModels,
  ).getApiResource,
  /** Get a list of already created llm licences of a project. */
  projectGetLlmLicences: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingProjectGetLlmLicences,
    baseClient.aiHosting.projectGetLlmLicences,
  ).getApiResource,
  /** Get a licence of a project. */
  projectGetLlmLicence: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingProjectGetLlmLicence,
    baseClient.aiHosting.projectGetLlmLicence,
  ).getApiResource,
  /** Get llm tariff and usages of a project. Same as the customer route, but less details. */
  projectGetLlmTariffOptions: new ApiCallAsyncResourceFactory(
    descriptors.aiHostingProjectGetLlmTariffOptions,
    baseClient.aiHosting.projectGetLlmTariffOptions,
  ).getApiResource,
});

const buildAppApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get an App. */
  getApp: new ApiCallAsyncResourceFactory(
    descriptors.appGetApp,
    baseClient.app.getApp,
  ).getApiResource,
  /** Get an AppInstallation. */
  getAppinstallation: new ApiCallAsyncResourceFactory(
    descriptors.appGetAppinstallation,
    baseClient.app.getAppinstallation,
  ).getApiResource,
  /** Get an AppVersion. */
  getAppversion: new ApiCallAsyncResourceFactory(
    descriptors.appGetAppversion,
    baseClient.app.getAppversion,
  ).getApiResource,
  /** Get the installed `SystemSoftware' for a specific `AppInstallation`. */
  getInstalledSystemsoftwareForAppinstallation: new ApiCallAsyncResourceFactory(
    descriptors.appGetInstalledSystemsoftwareForAppinstallation,
    baseClient.app.getInstalledSystemsoftwareForAppinstallation,
  ).getApiResource,
  /** Get the missing requirements of an appInstallation for a specific target AppVersion. */
  getMissingDependenciesForAppinstallation: new ApiCallAsyncResourceFactory(
    descriptors.appGetMissingDependenciesForAppinstallation,
    baseClient.app.getMissingDependenciesForAppinstallation,
  ).getApiResource,
  /** Get a SystemSoftware. */
  getSystemsoftware: new ApiCallAsyncResourceFactory(
    descriptors.appGetSystemsoftware,
    baseClient.app.getSystemsoftware,
  ).getApiResource,
  /** Get a SystemSoftwareVersion. */
  getSystemsoftwareversion: new ApiCallAsyncResourceFactory(
    descriptors.appGetSystemsoftwareversion,
    baseClient.app.getSystemsoftwareversion,
  ).getApiResource,
  /** List AppInstallations that a user has access to. */
  listAppinstallationsForUser: new ApiCallAsyncResourceFactory(
    descriptors.appListAppinstallationsForUser,
    baseClient.app.listAppinstallationsForUser,
  ).getApiResource,
  /** List AppInstallations belonging to a Project. */
  listAppinstallations: new ApiCallAsyncResourceFactory(
    descriptors.appListAppinstallations,
    baseClient.app.listAppinstallations,
  ).getApiResource,
  /** List Apps. */
  listApps: new ApiCallAsyncResourceFactory(
    descriptors.appListApps,
    baseClient.app.listApps,
  ).getApiResource,
  /** List AppVersions belonging to an App. */
  listAppversions: new ApiCallAsyncResourceFactory(
    descriptors.appListAppversions,
    baseClient.app.listAppversions,
  ).getApiResource,
  /** List SystemSoftwares. */
  listSystemsoftwares: new ApiCallAsyncResourceFactory(
    descriptors.appListSystemsoftwares,
    baseClient.app.listSystemsoftwares,
  ).getApiResource,
  /** List SystemSoftwareVersions belonging to a SystemSoftware. */
  listSystemsoftwareversions: new ApiCallAsyncResourceFactory(
    descriptors.appListSystemsoftwareversions,
    baseClient.app.listSystemsoftwareversions,
  ).getApiResource,
  /** List update candidates belonging to an AppVersion. */
  listUpdateCandidatesForAppversion: new ApiCallAsyncResourceFactory(
    descriptors.appListUpdateCandidatesForAppversion,
    baseClient.app.listUpdateCandidatesForAppversion,
  ).getApiResource,
  /** Get runtime status belonging to an AppInstallation. */
  retrieveStatus: new ApiCallAsyncResourceFactory(
    descriptors.appRetrieveStatus,
    baseClient.app.retrieveStatus,
  ).getApiResource,
});

const buildArticleApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get an Article. */
  getArticle: new ApiCallAsyncResourceFactory(
    descriptors.articleGetArticle,
    baseClient.article.getArticle,
  ).getApiResource,
  /** List Articles. */
  listArticles: new ApiCallAsyncResourceFactory(
    descriptors.articleListArticles,
    baseClient.article.listArticles,
  ).getApiResource,
});

const buildBackupApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List BackupSchedules belonging to a Project. */
  listProjectBackupSchedules: new ApiCallAsyncResourceFactory(
    descriptors.backupListProjectBackupSchedules,
    baseClient.backup.listProjectBackupSchedules,
  ).getApiResource,
  /** List Backups belonging to a Project. */
  listProjectBackups: new ApiCallAsyncResourceFactory(
    descriptors.backupListProjectBackups,
    baseClient.backup.listProjectBackups,
  ).getApiResource,
  /** Get a ProjectBackupSchedule. */
  getProjectBackupSchedule: new ApiCallAsyncResourceFactory(
    descriptors.backupGetProjectBackupSchedule,
    baseClient.backup.getProjectBackupSchedule,
  ).getApiResource,
  /** Get a ProjectBackup. */
  getProjectBackup: new ApiCallAsyncResourceFactory(
    descriptors.backupGetProjectBackup,
    baseClient.backup.getProjectBackup,
  ).getApiResource,
  /** Get table of contents for a ProjectBackup. */
  getProjectBackupDirectories: new ApiCallAsyncResourceFactory(
    descriptors.backupGetProjectBackupDirectories,
    baseClient.backup.getProjectBackupDirectories,
  ).getApiResource,
});

const buildContainerApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Registries belonging to a Project. */
  listRegistries: new ApiCallAsyncResourceFactory(
    descriptors.containerListRegistries,
    baseClient.container.listRegistries,
  ).getApiResource,
  /** Get a Stack. */
  getStack: new ApiCallAsyncResourceFactory(
    descriptors.containerGetStack,
    baseClient.container.getStack,
  ).getApiResource,
  /** Get a Registry. */
  getRegistry: new ApiCallAsyncResourceFactory(
    descriptors.containerGetRegistry,
    baseClient.container.getRegistry,
  ).getApiResource,
  /** Get a Volume belonging to a Stack. */
  getVolume: new ApiCallAsyncResourceFactory(
    descriptors.containerGetVolume,
    baseClient.container.getVolume,
  ).getApiResource,
  /** Get a ContainerImageConfig. */
  getContainerImageConfig: new ApiCallAsyncResourceFactory(
    descriptors.containerGetContainerImageConfig,
    baseClient.container.getContainerImageConfig,
  ).getApiResource,
  /** Get logs belonging to a Service. */
  getServiceLogs: new ApiCallAsyncResourceFactory(
    descriptors.containerGetServiceLogs,
    baseClient.container.getServiceLogs,
  ).getApiResource,
  /** Get a Service belonging to a Stack. */
  getService: new ApiCallAsyncResourceFactory(
    descriptors.containerGetService,
    baseClient.container.getService,
  ).getApiResource,
  /** List Services belonging to a Project. */
  listServices: new ApiCallAsyncResourceFactory(
    descriptors.containerListServices,
    baseClient.container.listServices,
  ).getApiResource,
  /** List Volumes belonging to a Stack. */
  listStackVolumes: new ApiCallAsyncResourceFactory(
    descriptors.containerListStackVolumes,
    baseClient.container.listStackVolumes,
  ).getApiResource,
  /** List Stacks belonging to a Project. */
  listStacks: new ApiCallAsyncResourceFactory(
    descriptors.containerListStacks,
    baseClient.container.listStacks,
  ).getApiResource,
  /** List Volumes belonging to a Project. */
  listVolumes: new ApiCallAsyncResourceFactory(
    descriptors.containerListVolumes,
    baseClient.container.listVolumes,
  ).getApiResource,
});

const buildContractApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Return the BaseItem of the Contract with the given ID. */
  getBaseItemOfContract: new ApiCallAsyncResourceFactory(
    descriptors.contractGetBaseItemOfContract,
    baseClient.contract.getBaseItemOfContract,
  ).getApiResource,
  /** Return the Contract for the given Certificate. */
  getDetailOfContractByCertificate: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByCertificate,
    baseClient.contract.getDetailOfContractByCertificate,
  ).getApiResource,
  /** Return the Contract for the given Domain. */
  getDetailOfContractByDomain: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByDomain,
    baseClient.contract.getDetailOfContractByDomain,
  ).getApiResource,
  /** Return the Contract for the given LeadFyndrProfile. */
  getDetailOfContractByLeadFyndr: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByLeadFyndr,
    baseClient.contract.getDetailOfContractByLeadFyndr,
  ).getApiResource,
  /** Return the Contract for the given Mail Address. */
  getDetailOfContractByMailAddress: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByMailAddress,
    baseClient.contract.getDetailOfContractByMailAddress,
  ).getApiResource,
  /** Return the Contract for the given Project. */
  getDetailOfContractByProject: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByProject,
    baseClient.contract.getDetailOfContractByProject,
  ).getApiResource,
  /** Return the Contract for the given Server. */
  getDetailOfContractByServer: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByServer,
    baseClient.contract.getDetailOfContractByServer,
  ).getApiResource,
  /** Get the ContractItem with the given ID. */
  getDetailOfContractItem: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractItem,
    baseClient.contract.getDetailOfContractItem,
  ).getApiResource,
  /** Returns the Contract with the given ID. */
  getDetailOfContract: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContract,
    baseClient.contract.getDetailOfContract,
  ).getApiResource,
  /** Return a list of Contracts for the given Customer. */
  listContracts: new ApiCallAsyncResourceFactory(
    descriptors.contractListContracts,
    baseClient.contract.listContracts,
  ).getApiResource,
  /** Get details of an Invoice. */
  invoiceDetail: new ApiCallAsyncResourceFactory(
    descriptors.invoiceDetail,
    baseClient.contract.invoiceDetail,
  ).getApiResource,
  /** Get InvoiceSettings of a Customer. */
  invoiceGetDetailOfInvoiceSettings: new ApiCallAsyncResourceFactory(
    descriptors.invoiceGetDetailOfInvoiceSettings,
    baseClient.contract.invoiceGetDetailOfInvoiceSettings,
  ).getApiResource,
  /** Request an Access Token for the Invoice file. */
  invoiceGetFileAccessToken: new ApiCallAsyncResourceFactory(
    descriptors.invoiceGetFileAccessToken,
    baseClient.contract.invoiceGetFileAccessToken,
  ).getApiResource,
  /** List Invoices of a Customer. */
  invoiceListCustomerInvoices: new ApiCallAsyncResourceFactory(
    descriptors.invoiceListCustomerInvoices,
    baseClient.contract.invoiceListCustomerInvoices,
  ).getApiResource,
  /** Get list of Orders. */
  orderListOrders: new ApiCallAsyncResourceFactory(
    descriptors.orderListOrders,
    baseClient.contract.orderListOrders,
  ).getApiResource,
  /** Get Order for Customer. */
  orderGetOrder: new ApiCallAsyncResourceFactory(
    descriptors.orderGetOrder,
    baseClient.contract.orderGetOrder,
  ).getApiResource,
  /** Get list of Orders of a Customer. */
  orderListCustomerOrders: new ApiCallAsyncResourceFactory(
    descriptors.orderListCustomerOrders,
    baseClient.contract.orderListCustomerOrders,
  ).getApiResource,
  /** Get list of Orders of a Project. */
  orderListProjectOrders: new ApiCallAsyncResourceFactory(
    descriptors.orderListProjectOrders,
    baseClient.contract.orderListProjectOrders,
  ).getApiResource,
});

const buildMarketplaceApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a Contributor. */
  extensionGetContributor: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetContributor,
    baseClient.marketplace.extensionGetContributor,
  ).getApiResource,
  /** Get Contributor Billing Information. */
  contributorGetBillingInformation: new ApiCallAsyncResourceFactory(
    descriptors.contributorGetBillingInformation,
    baseClient.marketplace.contributorGetBillingInformation,
  ).getApiResource,
  /** Get the Stripe Billing Portal Link for a Customer */
  contributorGetCustomerBillingPortalLink: new ApiCallAsyncResourceFactory(
    descriptors.contributorGetCustomerBillingPortalLink,
    baseClient.marketplace.contributorGetCustomerBillingPortalLink,
  ).getApiResource,
  /** Get the Stripe Dashboard Link for a Contributor. */
  contributorGetLoginLink: new ApiCallAsyncResourceFactory(
    descriptors.contributorGetLoginLink,
    baseClient.marketplace.contributorGetLoginLink,
  ).getApiResource,
  /** List ContractPartners of the contributor. */
  contributorListContractPartnersOfContributor: new ApiCallAsyncResourceFactory(
    descriptors.contributorListContractPartnersOfContributor,
    baseClient.marketplace.contributorListContractPartnersOfContributor,
  ).getApiResource,
  /** List incoming Invoices of a Contributor. */
  contributorListIncomingInvoices: new ApiCallAsyncResourceFactory(
    descriptors.contributorListIncomingInvoices,
    baseClient.marketplace.contributorListIncomingInvoices,
  ).getApiResource,
  /** List all invoices on behalf of a contributor. */
  contributorListOnbehalfInvoices: new ApiCallAsyncResourceFactory(
    descriptors.contributorListOnbehalfInvoices,
    baseClient.marketplace.contributorListOnbehalfInvoices,
  ).getApiResource,
  /** Request an Access Token for the Incoming Invoice file. */
  contributorReceiptGetFileAccessToken: new ApiCallAsyncResourceFactory(
    descriptors.contributorReceiptGetFileAccessToken,
    baseClient.marketplace.contributorReceiptGetFileAccessToken,
  ).getApiResource,
  /** List ExtensionInstances. */
  extensionListExtensionInstances: new ApiCallAsyncResourceFactory(
    descriptors.extensionListExtensionInstances,
    baseClient.marketplace.extensionListExtensionInstances,
  ).getApiResource,
  /** Get an ExtensionInstance. */
  extensionGetExtensionInstance: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetExtensionInstance,
    baseClient.marketplace.extensionGetExtensionInstance,
  ).getApiResource,
  /** Get Extension of own contributor. */
  extensionGetOwnExtension: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetOwnExtension,
    baseClient.marketplace.extensionGetOwnExtension,
  ).getApiResource,
  /** Get all open extension orders for given customer */
  extensionGetCustomerExtensionInstanceOrders: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetCustomerExtensionInstanceOrders,
    baseClient.marketplace.extensionGetCustomerExtensionInstanceOrders,
  ).getApiResource,
  /** Get the Contract Strategy of an Extension Instance */
  extensionGetExtensionInstanceContract: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetExtensionInstanceContract,
    baseClient.marketplace.extensionGetExtensionInstanceContract,
  ).getApiResource,
  /** Get the ExtensionInstance of a specific customer and extension, if existing. */
  extensionGetExtensionInstanceForCustomer: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetExtensionInstanceForCustomer,
    baseClient.marketplace.extensionGetExtensionInstanceForCustomer,
  ).getApiResource,
  /** Get the ExtensionInstance of a specific project and extension, if existing. */
  extensionGetExtensionInstanceForProject: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetExtensionInstanceForProject,
    baseClient.marketplace.extensionGetExtensionInstanceForProject,
  ).getApiResource,
  /** Get an Extension. */
  extensionGetExtension: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetExtension,
    baseClient.marketplace.extensionGetExtension,
  ).getApiResource,
  /** Get all open extension orders for given project */
  extensionGetProjectExtensionInstanceOrders: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetProjectExtensionInstanceOrders,
    baseClient.marketplace.extensionGetProjectExtensionInstanceOrders,
  ).getApiResource,
  /** Get the public key to verify the webhook signature. */
  extensionGetPublicKey: new ApiCallAsyncResourceFactory(
    descriptors.extensionGetPublicKey,
    baseClient.marketplace.extensionGetPublicKey,
  ).getApiResource,
  /** List Contributors. */
  extensionListContributors: new ApiCallAsyncResourceFactory(
    descriptors.extensionListContributors,
    baseClient.marketplace.extensionListContributors,
  ).getApiResource,
  /** List Extensions. */
  extensionListExtensions: new ApiCallAsyncResourceFactory(
    descriptors.extensionListExtensions,
    baseClient.marketplace.extensionListExtensions,
  ).getApiResource,
  /** List Extensions of own contributor. */
  extensionListOwnExtensions: new ApiCallAsyncResourceFactory(
    descriptors.extensionListOwnExtensions,
    baseClient.marketplace.extensionListOwnExtensions,
  ).getApiResource,
  /** List Scopes. */
  extensionListScopes: new ApiCallAsyncResourceFactory(
    descriptors.extensionListScopes,
    baseClient.marketplace.extensionListScopes,
  ).getApiResource,
  /** Get payment method details */
  customerGetPaymentMethod: new ApiCallAsyncResourceFactory(
    descriptors.marketplaceCustomerGetPaymentMethod,
    baseClient.marketplace.customerGetPaymentMethod,
  ).getApiResource,
});

const buildConversationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all conversation the authenticated user has created or has access to. */
  listConversations: new ApiCallAsyncResourceFactory(
    descriptors.conversationListConversations,
    baseClient.conversation.listConversations,
  ).getApiResource,
  /** Get all message of the conversation. */
  listMessagesByConversation: new ApiCallAsyncResourceFactory(
    descriptors.conversationListMessagesByConversation,
    baseClient.conversation.listMessagesByConversation,
  ).getApiResource,
  /** Get a specific conversation category. */
  getCategory: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetCategory,
    baseClient.conversation.getCategory,
  ).getApiResource,
  /** Get members of a support conversation. */
  getConversationMembers: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetConversationMembers,
    baseClient.conversation.getConversationMembers,
  ).getApiResource,
  /** Get preferences for customer conversations. */
  getConversationPreferencesOfCustomer: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetConversationPreferencesOfCustomer,
    baseClient.conversation.getConversationPreferencesOfCustomer,
  ).getApiResource,
  /** Get a support conversation. */
  getConversation: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetConversation,
    baseClient.conversation.getConversation,
  ).getApiResource,
  /** Request an access token for the File belonging to the Conversation. */
  getFileAccessToken: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetFileAccessToken,
    baseClient.conversation.getFileAccessToken,
  ).getApiResource,
  /** Get all conversation categories. */
  listCategories: new ApiCallAsyncResourceFactory(
    descriptors.conversationListCategories,
    baseClient.conversation.listCategories,
  ).getApiResource,
});

const buildCronjobApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Cronjobs belonging to a Project. */
  listCronjobs: new ApiCallAsyncResourceFactory(
    descriptors.cronjobListCronjobs,
    baseClient.cronjob.listCronjobs,
  ).getApiResource,
  /** List CronjobExecutions belonging to a Cronjob. */
  listExecutions: new ApiCallAsyncResourceFactory(
    descriptors.cronjobListExecutions,
    baseClient.cronjob.listExecutions,
  ).getApiResource,
  /** Get a Cronjob. */
  getCronjob: new ApiCallAsyncResourceFactory(
    descriptors.cronjobGetCronjob,
    baseClient.cronjob.getCronjob,
  ).getApiResource,
  /** Get a CronjobExecution analysis for failed executions. */
  getExecutionAnalysis: new ApiCallAsyncResourceFactory(
    descriptors.cronjobGetExecutionAnalysis,
    baseClient.cronjob.getExecutionAnalysis,
  ).getApiResource,
  /** Get a CronjobExecution. */
  getExecution: new ApiCallAsyncResourceFactory(
    descriptors.cronjobGetExecution,
    baseClient.cronjob.getExecution,
  ).getApiResource,
});

const buildCustomerApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Invites belonging to a Customer. */
  listInvitesForCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerListInvitesForCustomer,
    baseClient.customer.listInvitesForCustomer,
  ).getApiResource,
  /** Get all customer profiles the authenticated user has access to. */
  listCustomers: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomers,
    baseClient.customer.listCustomers,
  ).getApiResource,
  /** Gets the Wallet of the Customer. */
  getWallet: new ApiCallAsyncResourceFactory(
    descriptors.customerGetWallet,
    baseClient.customer.getWallet,
  ).getApiResource,
  /** Get a CustomerInvite. */
  getCustomerInvite: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerInvite,
    baseClient.customer.getCustomerInvite,
  ).getApiResource,
  /** Get a CustomerMembership. */
  getCustomerMembership: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerMembership,
    baseClient.customer.getCustomerMembership,
  ).getApiResource,
  /** Get a customer profile. */
  getCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomer,
    baseClient.customer.getCustomer,
  ).getApiResource,
  /** Get a CustomerInvite by token. */
  getCustomerTokenInvite: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerTokenInvite,
    baseClient.customer.getCustomerTokenInvite,
  ).getApiResource,
  /** Check if the customer profile has a valid contract partner configured. */
  isCustomerLegallyCompetent: new ApiCallAsyncResourceFactory(
    descriptors.customerIsCustomerLegallyCompetent,
    baseClient.customer.isCustomerLegallyCompetent,
  ).getApiResource,
  /** List CustomerInvites belonging to the executing user. */
  listCustomerInvites: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomerInvites,
    baseClient.customer.listCustomerInvites,
  ).getApiResource,
  /** List CustomerMemberships belonging to the executing user. */
  listCustomerMemberships: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomerMemberships,
    baseClient.customer.listCustomerMemberships,
  ).getApiResource,
  /** List Memberships belonging to a Customer. */
  listMembershipsForCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerListMembershipsForCustomer,
    baseClient.customer.listMembershipsForCustomer,
  ).getApiResource,
});

const buildDatabaseApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List MySQLDatabases belonging to a Project. */
  listMysqlDatabases: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlDatabases,
    baseClient.database.listMysqlDatabases,
  ).getApiResource,
  /** List MySQLUsers belonging to a Database. */
  listMysqlUsers: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlUsers,
    baseClient.database.listMysqlUsers,
  ).getApiResource,
  /** List RedisDatabases belonging to a Project. */
  listRedisDatabases: new ApiCallAsyncResourceFactory(
    descriptors.databaseListRedisDatabases,
    baseClient.database.listRedisDatabases,
  ).getApiResource,
  /** Get a MySQLDatabase. */
  getMysqlDatabase: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlDatabase,
    baseClient.database.getMysqlDatabase,
  ).getApiResource,
  /** Get a MySQLUser. */
  getMysqlUser: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlUser,
    baseClient.database.getMysqlUser,
  ).getApiResource,
  /** Get a RedisDatabase. */
  getRedisDatabase: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetRedisDatabase,
    baseClient.database.getRedisDatabase,
  ).getApiResource,
  /** Get a MySQLUser's PhpMyAdmin-URL. */
  getMysqlUserPhpMyAdminUrl: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlUserPhpMyAdminUrl,
    baseClient.database.getMysqlUserPhpMyAdminUrl,
  ).getApiResource,
  /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
  listMysqlCharsets: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlCharsets,
    baseClient.database.listMysqlCharsets,
  ).getApiResource,
  /** List MySQLVersions. */
  listMysqlVersions: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlVersions,
    baseClient.database.listMysqlVersions,
  ).getApiResource,
  /** List RedisVersions. */
  listRedisVersions: new ApiCallAsyncResourceFactory(
    descriptors.databaseListRedisVersions,
    baseClient.database.listRedisVersions,
  ).getApiResource,
});

const buildDomainApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Domains */
  listDomains: new ApiCallAsyncResourceFactory(
    descriptors.domainListDomains,
    baseClient.domain.listDomains,
  ).getApiResource,
  /** Get a DNSZone. */
  dnsGetDnsZone: new ApiCallAsyncResourceFactory(
    descriptors.dnsGetDnsZone,
    baseClient.domain.dnsGetDnsZone,
  ).getApiResource,
  /** Get a zone file for a DNSZone. */
  dnsGetZoneFile: new ApiCallAsyncResourceFactory(
    descriptors.dnsGetZoneFile,
    baseClient.domain.dnsGetZoneFile,
  ).getApiResource,
  /** List DNSZones belonging to a Project. */
  dnsListDnsZones: new ApiCallAsyncResourceFactory(
    descriptors.dnsListDnsZones,
    baseClient.domain.dnsListDnsZones,
  ).getApiResource,
  /** Get a Domain. */
  getDomain: new ApiCallAsyncResourceFactory(
    descriptors.domainGetDomain,
    baseClient.domain.getDomain,
  ).getApiResource,
  /** Get the latest screenshot's FileReference belonging to a Domain. */
  getLatestScreenshot: new ApiCallAsyncResourceFactory(
    descriptors.domainGetLatestScreenshot,
    baseClient.domain.getLatestScreenshot,
  ).getApiResource,
  /** List the contact schemas for a TLD. */
  listTldContactSchemas: new ApiCallAsyncResourceFactory(
    descriptors.domainListTldContactSchemas,
    baseClient.domain.listTldContactSchemas,
  ).getApiResource,
  /** List TLDs. */
  listTlds: new ApiCallAsyncResourceFactory(
    descriptors.domainListTlds,
    baseClient.domain.listTlds,
  ).getApiResource,
  /** Suggest a list of domains based on a prompt using AI. */
  suggest: new ApiCallAsyncResourceFactory(
    descriptors.domainSuggest,
    baseClient.domain.suggest,
  ).getApiResource,
  /** List Ingresses. */
  ingressListIngresses: new ApiCallAsyncResourceFactory(
    descriptors.ingressListIngresses,
    baseClient.domain.ingressListIngresses,
  ).getApiResource,
  /** Get an Ingress. */
  ingressGetIngress: new ApiCallAsyncResourceFactory(
    descriptors.ingressGetIngress,
    baseClient.domain.ingressGetIngress,
  ).getApiResource,
  /** List CertificateRequests belonging to a Project or an Ingress. */
  sslListCertificateRequests: new ApiCallAsyncResourceFactory(
    descriptors.sslListCertificateRequests,
    baseClient.domain.sslListCertificateRequests,
  ).getApiResource,
  /** Get a CertificateRequest. */
  sslGetCertificateRequest: new ApiCallAsyncResourceFactory(
    descriptors.sslGetCertificateRequest,
    baseClient.domain.sslGetCertificateRequest,
  ).getApiResource,
  /** Get a Certificate. */
  sslGetCertificate: new ApiCallAsyncResourceFactory(
    descriptors.sslGetCertificate,
    baseClient.domain.sslGetCertificate,
  ).getApiResource,
  /** List Certificates belonging to a Project or an Ingress. */
  sslListCertificates: new ApiCallAsyncResourceFactory(
    descriptors.sslListCertificates,
    baseClient.domain.sslListCertificates,
  ).getApiResource,
});

const buildFileApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a File's meta. */
  getFileMeta: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileMeta,
    baseClient.file.getFileMeta,
  ).getApiResource,
  /** Get a FileUploadToken's rules. */
  getFileUploadTokenRules: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileUploadTokenRules,
    baseClient.file.getFileUploadTokenRules,
  ).getApiResource,
  /** Get a FileUploadType's rules. */
  getFileUploadTypeRules: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileUploadTypeRules,
    baseClient.file.getFileUploadTypeRules,
  ).getApiResource,
  /** Get a File. */
  getFile: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFile,
    baseClient.file.getFile,
  ).getApiResource,
  /** Get a File with user-friendly url. */
  getFileWithName: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileWithName,
    baseClient.file.getFileWithName,
  ).getApiResource,
});

const buildLeadFyndrApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get your LeadFyndr request. */
  leadfyndrGetLeadFyndrProfileRequest: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetLeadFyndrProfileRequest,
    baseClient.leadFyndr.leadfyndrGetLeadFyndrProfileRequest,
  ).getApiResource,
  /** Get cities in DACH. */
  leadfyndrGetCities: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetCities,
    baseClient.leadFyndr.leadfyndrGetCities,
  ).getApiResource,
  /** Get lead tariff options. How many leads did you unlock this month? */
  leadfyndrGetLeadFyndrProfileTariffOptions: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetLeadFyndrProfileTariffOptions,
    baseClient.leadFyndr.leadfyndrGetLeadFyndrProfileTariffOptions,
  ).getApiResource,
  /** Get your LeadFyndr profile. */
  leadfyndrGetLeadFyndrProfile: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetLeadFyndrProfile,
    baseClient.leadFyndr.leadfyndrGetLeadFyndrProfile,
  ).getApiResource,
  /** Get a simple lead. Use the unlocked route for more detail leads. */
  leadfyndrGetLead: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetLead,
    baseClient.leadFyndr.leadfyndrGetLead,
  ).getApiResource,
  /** Get unlocked leads export history for the given customerId. */
  leadfyndrGetLeadsExportHistory: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetLeadsExportHistory,
    baseClient.leadFyndr.leadfyndrGetLeadsExportHistory,
  ).getApiResource,
  /** Get a detail of a unlocked lead. Organisation can unlock leads. */
  leadfyndrGetUnlockedLead: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrGetUnlockedLead,
    baseClient.leadFyndr.leadfyndrGetUnlockedLead,
  ).getApiResource,
  /** Get all leads. Use the unlocked routes for more lead details. */
  leadfyndrListLeads: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrListLeads,
    baseClient.leadFyndr.leadfyndrListLeads,
  ).getApiResource,
  /** Get all unlocked leads. Organisation can unlock leads. */
  leadfyndrListUnlockedLeads: new ApiCallAsyncResourceFactory(
    descriptors.leadfyndrListUnlockedLeads,
    baseClient.leadFyndr.leadfyndrListUnlockedLeads,
  ).getApiResource,
});

const buildMailApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List DeliveryBoxes belonging to a Project. */
  listDeliveryBoxes: new ApiCallAsyncResourceFactory(
    descriptors.mailListDeliveryBoxes,
    baseClient.mail.listDeliveryBoxes,
  ).getApiResource,
  /** List MailAddresses belonging to a Project. */
  listMailAddresses: new ApiCallAsyncResourceFactory(
    descriptors.mailListMailAddresses,
    baseClient.mail.listMailAddresses,
  ).getApiResource,
  /** Get a DeliveryBox. */
  getDeliveryBox: new ApiCallAsyncResourceFactory(
    descriptors.mailGetDeliveryBox,
    baseClient.mail.getDeliveryBox,
  ).getApiResource,
  /** Get a MailAddress. */
  getMailAddress: new ApiCallAsyncResourceFactory(
    descriptors.mailGetMailAddress,
    baseClient.mail.getMailAddress,
  ).getApiResource,
  /** List backups belonging to a MailAddress. */
  listBackupsForMailAddress: new ApiCallAsyncResourceFactory(
    descriptors.mailListBackupsForMailAddress,
    baseClient.mail.listBackupsForMailAddress,
  ).getApiResource,
  /** List MailAddresses. */
  listMailAddressesForUser: new ApiCallAsyncResourceFactory(
    descriptors.mailListMailAddressesForUser,
    baseClient.mail.listMailAddressesForUser,
  ).getApiResource,
  /** List mail settings of a Project. */
  listProjectMailSettings: new ApiCallAsyncResourceFactory(
    descriptors.mailListProjectMailSettings,
    baseClient.mail.listProjectMailSettings,
  ).getApiResource,
  /** List MailAddresses. */
  listMailAddressesForUser: new ApiCallAsyncResourceFactory(
    descriptors.mailListMailAddressesForUser,
    baseClient.mail.listMailAddressesForUser,
  ).getApiResource,
});

const buildMiscApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a list of currently active llm models. */
  getLlmModelsExperimental: new ApiCallAsyncResourceFactory(
    descriptors.miscGetLlmModelsExperimental,
    baseClient.misc.getLlmModelsExperimental,
  ).getApiResource,
});

const buildNotificationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Getting the subscription status of the subscription. */
  newsletterGetInfo: new ApiCallAsyncResourceFactory(
    descriptors.newsletterGetInfo,
    baseClient.notification.newsletterGetInfo,
  ).getApiResource,
  /** Get the counts for unread notifications of the user. */
  scountUnreadNotifications: new ApiCallAsyncResourceFactory(
    descriptors.notificationsCountUnreadNotifications,
    baseClient.notification.scountUnreadNotifications,
  ).getApiResource,
  /** List all unread notifications. */
  slistNotifications: new ApiCallAsyncResourceFactory(
    descriptors.notificationsListNotifications,
    baseClient.notification.slistNotifications,
  ).getApiResource,
});

const buildPageInsightsApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get detailed performance data for a given domain and path. */
  pageinsightsGetPerformanceData: new ApiCallAsyncResourceFactory(
    descriptors.pageinsightsGetPerformanceData,
    baseClient.pageInsights.pageinsightsGetPerformanceData,
  ).getApiResource,
  /** Get all data for a given strace. */
  pageinsightsGetStraceData: new ApiCallAsyncResourceFactory(
    descriptors.pageinsightsGetStraceData,
    baseClient.pageInsights.pageinsightsGetStraceData,
  ).getApiResource,
  /** List websites (specified as domain and path) from a project where performance data is available. */
  pageinsightsListPerformanceDataForProject: new ApiCallAsyncResourceFactory(
    descriptors.pageinsightsListPerformanceDataForProject,
    baseClient.pageInsights.pageinsightsListPerformanceDataForProject,
  ).getApiResource,
});

const buildUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a PasswordPolicy. */
  passwordValidationGetPasswordPolicy: new ApiCallAsyncResourceFactory(
    descriptors.passwordValidationGetPasswordPolicy,
    baseClient.user.passwordValidationGetPasswordPolicy,
  ).getApiResource,
  /** Get your verified Email-Address. */
  getOwnEmail: new ApiCallAsyncResourceFactory(
    descriptors.userGetOwnEmail,
    baseClient.user.getOwnEmail,
  ).getApiResource,
  /** Get your current multi factor auth status. */
  getMfaStatus: new ApiCallAsyncResourceFactory(
    descriptors.userGetMfaStatus,
    baseClient.user.getMfaStatus,
  ).getApiResource,
  /** List all of your ApiTokens. */
  listApiTokens: new ApiCallAsyncResourceFactory(
    descriptors.userListApiTokens,
    baseClient.user.listApiTokens,
  ).getApiResource,
  /** Get your stored ssh-keys. */
  listSshKeys: new ApiCallAsyncResourceFactory(
    descriptors.userListSshKeys,
    baseClient.user.listSshKeys,
  ).getApiResource,
  /** Get a specific ApiToken. */
  getApiToken: new ApiCallAsyncResourceFactory(
    descriptors.userGetApiToken,
    baseClient.user.getApiToken,
  ).getApiResource,
  /** Get a specific stored ssh-key. */
  getSshKey: new ApiCallAsyncResourceFactory(
    descriptors.userGetSshKey,
    baseClient.user.getSshKey,
  ).getApiResource,
  /** The timestamp of your latest password change. */
  getPasswordUpdatedAt: new ApiCallAsyncResourceFactory(
    descriptors.userGetPasswordUpdatedAt,
    baseClient.user.getPasswordUpdatedAt,
  ).getApiResource,
  /** Get personalized settings. */
  getPersonalizedSettings: new ApiCallAsyncResourceFactory(
    descriptors.userGetPersonalizedSettings,
    baseClient.user.getPersonalizedSettings,
  ).getApiResource,
  /** Get poll settings for the specified user. */
  getPollStatus: new ApiCallAsyncResourceFactory(
    descriptors.userGetPollStatus,
    baseClient.user.getPollStatus,
  ).getApiResource,
  /** Get a specific session. */
  getSession: new ApiCallAsyncResourceFactory(
    descriptors.userGetSession,
    baseClient.user.getSession,
  ).getApiResource,
  /** Get profile information for a user. */
  getUser: new ApiCallAsyncResourceFactory(
    descriptors.userGetUser,
    baseClient.user.getUser,
  ).getApiResource,
  /** Submitted feedback of the given user. */
  listFeedback: new ApiCallAsyncResourceFactory(
    descriptors.userListFeedback,
    baseClient.user.listFeedback,
  ).getApiResource,
  /** List all sessions. */
  listSessions: new ApiCallAsyncResourceFactory(
    descriptors.userListSessions,
    baseClient.user.listSessions,
  ).getApiResource,
  /** Obtain authorization from the resource owner. */
  oauthGetAuthorization: new ApiCallAsyncResourceFactory(
    descriptors.userOauthGetAuthorization,
    baseClient.user.oauthGetAuthorization,
  ).getApiResource,
  /** Request a support code. */
  supportCodeRequest: new ApiCallAsyncResourceFactory(
    descriptors.userSupportCodeRequest,
    baseClient.user.supportCodeRequest,
  ).getApiResource,
});

const buildProjectApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Invites belonging to a Project. */
  listInvitesForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectListInvitesForProject,
    baseClient.project.listInvitesForProject,
  ).getApiResource,
  /** Get a ProjectInvite. */
  getProjectInvite: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectInvite,
    baseClient.project.getProjectInvite,
  ).getApiResource,
  /** Get a ProjectMembership */
  getProjectMembership: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectMembership,
    baseClient.project.getProjectMembership,
  ).getApiResource,
  /** Get a Project. */
  getProject: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProject,
    baseClient.project.getProject,
  ).getApiResource,
  /** Get a ProjectInvite by token. */
  getProjectTokenInvite: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectTokenInvite,
    baseClient.project.getProjectTokenInvite,
  ).getApiResource,
  /** Get the executing user's membership in a Project. */
  getSelfMembershipForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectGetSelfMembershipForProject,
    baseClient.project.getSelfMembershipForProject,
  ).getApiResource,
  /** Get a Server. */
  getServer: new ApiCallAsyncResourceFactory(
    descriptors.projectGetServer,
    baseClient.project.getServer,
  ).getApiResource,
  /** List Memberships belonging to a Project. */
  listMembershipsForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectListMembershipsForProject,
    baseClient.project.listMembershipsForProject,
  ).getApiResource,
  /** List ProjectInvites belonging to the executing user. */
  listProjectInvites: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjectInvites,
    baseClient.project.listProjectInvites,
  ).getApiResource,
  /** List ProjectMemberships belonging to the executing user. */
  listProjectMemberships: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjectMemberships,
    baseClient.project.listProjectMemberships,
  ).getApiResource,
  /** List Projects belonging to the executing user. */
  listProjects: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjects,
    baseClient.project.listProjects,
  ).getApiResource,
  /** List Servers belonging to the executing user. */
  listServers: new ApiCallAsyncResourceFactory(
    descriptors.projectListServers,
    baseClient.project.listServers,
  ).getApiResource,
  /** Get storage space Statistics belonging to a Project. */
  storagespaceGetProjectStatistics: new ApiCallAsyncResourceFactory(
    descriptors.storagespaceGetProjectStatistics,
    baseClient.project.storagespaceGetProjectStatistics,
  ).getApiResource,
  /** Get storage space Statistics belonging to a Server. */
  storagespaceGetServerStatistics: new ApiCallAsyncResourceFactory(
    descriptors.storagespaceGetServerStatistics,
    baseClient.project.storagespaceGetServerStatistics,
  ).getApiResource,
});

const buildProjectFileSystemApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List directories belonging to a Project. */
  getDirectories: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetDirectories,
    baseClient.projectFileSystem.getDirectories,
  ).getApiResource,
  /** Get a Project directory filesystem usage. */
  getDiskUsage: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetDiskUsage,
    baseClient.projectFileSystem.getDiskUsage,
  ).getApiResource,
  /** Get a Project file's content. */
  getFileContent: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetFileContent,
    baseClient.projectFileSystem.getFileContent,
  ).getApiResource,
  /** Get a Project's file/filesystem authorization token. */
  getJwt: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetJwt,
    baseClient.projectFileSystem.getJwt,
  ).getApiResource,
  /** Get a Project file's information. */
  listFiles: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemListFiles,
    baseClient.projectFileSystem.listFiles,
  ).getApiResource,
});

const buildSshsftpUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all SFTPUsers for a Project. */
  sftpUserListSftpUsers: new ApiCallAsyncResourceFactory(
    descriptors.sftpUserListSftpUsers,
    baseClient.sshsftpUser.sftpUserListSftpUsers,
  ).getApiResource,
  /** Get an SFTPUser. */
  sftpUserGetSftpUser: new ApiCallAsyncResourceFactory(
    descriptors.sftpUserGetSftpUser,
    baseClient.sshsftpUser.sftpUserGetSftpUser,
  ).getApiResource,
  /** Get all SSHUsers for a Project. */
  sshUserListSshUsers: new ApiCallAsyncResourceFactory(
    descriptors.sshUserListSshUsers,
    baseClient.sshsftpUser.sshUserListSshUsers,
  ).getApiResource,
  /** Get an SSHUser. */
  sshUserGetSshUser: new ApiCallAsyncResourceFactory(
    descriptors.sshUserGetSshUser,
    baseClient.sshsftpUser.sshUserGetSshUser,
  ).getApiResource,
});

export class MittwaldAPIV2ClientReact {
  /** The AI hosting provides access to multiple large language and embedding models – GDPR compliant and hosted in Germany. */
  public readonly aiHosting: ReturnType<typeof buildAiHostingApi>;

  /** The App API allows you to manage your apps within a project, and all the system softwares that are installed as dependencies. */
  public readonly app: ReturnType<typeof buildAppApi>;

  /** The article API allows you to read article information. */
  public readonly article: ReturnType<typeof buildArticleApi>;

  /** The backup API allows you to manage your project backups. */
  public readonly backup: ReturnType<typeof buildBackupApi>;

  /** The container API allows you to manage your stacks, containers, volumes and registries. */
  public readonly container: ReturnType<typeof buildContainerApi>;

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract: ReturnType<typeof buildContractApi>;

  /** The marketplace API allows you to manage extensions and more information regaring the marketplace. */
  public readonly marketplace: ReturnType<typeof buildMarketplaceApi>;

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation: ReturnType<typeof buildConversationApi>;

  /** The cronjob API allows you to manage cronjobs within a project. */
  public readonly cronjob: ReturnType<typeof buildCronjobApi>;

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer: ReturnType<typeof buildCustomerApi>;

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database: ReturnType<typeof buildDatabaseApi>;

  /** The domain API allows you to manage your domains, DNS records, SSL certificates and ingress resources. */
  public readonly domain: ReturnType<typeof buildDomainApi>;

  /** The file API allows you to manage your files, for example for conversations attachments and avatar uploads. */
  public readonly file: ReturnType<typeof buildFileApi>;

  /** The lead fyndr api allow you to manage you leads and your fyndr profile. */
  public readonly leadFyndr: ReturnType<typeof buildLeadFyndrApi>;

  /** The mail API allows you to manage your mail accounts. */
  public readonly mail: ReturnType<typeof buildMailApi>;

  /** The notification API allows you to manage your notifications. */
  public readonly notification: ReturnType<typeof buildNotificationApi>;

  /** The page insights API allows you to get page insights information. */
  public readonly pageInsights: ReturnType<typeof buildPageInsightsApi>;

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user: ReturnType<typeof buildUserApi>;

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project: ReturnType<typeof buildProjectApi>;

  /** The filesystem API allows you to directly access the filesystem of your project. */
  public readonly projectFileSystem: ReturnType<
    typeof buildProjectFileSystemApi
  >;

  /** The SSH/SFTP User API allows you to manage your SSH/SFTP users within a project. */
  public readonly sshsftpUser: ReturnType<typeof buildSshsftpUserApi>;

  private constructor(baseClient: MittwaldAPIV2Client) {
    this.aiHosting = buildAiHostingApi(baseClient);

    this.app = buildAppApi(baseClient);

    this.article = buildArticleApi(baseClient);

    this.backup = buildBackupApi(baseClient);

    this.container = buildContainerApi(baseClient);

    this.contract = buildContractApi(baseClient);

    this.marketplace = buildMarketplaceApi(baseClient);

    this.conversation = buildConversationApi(baseClient);

    this.cronjob = buildCronjobApi(baseClient);

    this.customer = buildCustomerApi(baseClient);

    this.database = buildDatabaseApi(baseClient);

    this.domain = buildDomainApi(baseClient);

    this.file = buildFileApi(baseClient);

    this.leadFyndr = buildLeadFyndrApi(baseClient);

    this.mail = buildMailApi(baseClient);

    this.notification = buildNotificationApi(baseClient);

    this.pageInsights = buildPageInsightsApi(baseClient);

    this.user = buildUserApi(baseClient);

    this.project = buildProjectApi(baseClient);

    this.projectFileSystem = buildProjectFileSystemApi(baseClient);

    this.sshsftpUser = buildSshsftpUserApi(baseClient);
  }

  public static fromBaseClient(
    baseClient: MittwaldAPIV2Client,
  ): MittwaldAPIV2ClientReact {
    return new MittwaldAPIV2ClientReact(baseClient);
  }
}
