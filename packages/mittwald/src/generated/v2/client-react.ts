/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import MittwaldAPIV2Client from "./client.js";
import { ApiCallAsyncResourceFactory } from "@mittwald/api-client-commons/react";
import * as descriptors from "./descriptors.js";
export * from "@mittwald/react-use-promise/types";

const buildAppApi = (baseClient: MittwaldAPIV2Client) => ({
  /** get a specific `App` */
  getApp: new ApiCallAsyncResourceFactory(
    descriptors.appGetApp,
    baseClient.app.getApp
  ).getApiResource,
  /** get a specific `AppInstallation` */
  getAppinstallation: new ApiCallAsyncResourceFactory(
    descriptors.appGetAppinstallation,
    baseClient.app.getAppinstallation
  ).getApiResource,
  /** get a specific `AppVersion` */
  getAppversion: new ApiCallAsyncResourceFactory(
    descriptors.appGetAppversion,
    baseClient.app.getAppversion
  ).getApiResource,
  /** get the missing requirements of an appInstallation for a specific target AppVersion */
  getMissingDependenciesForAppinstallation: new ApiCallAsyncResourceFactory(
    descriptors.appGetMissingDependenciesForAppinstallation,
    baseClient.app.getMissingDependenciesForAppinstallation
  ).getApiResource,
  /** get a specific `SystemSoftware` */
  getSystemsoftware: new ApiCallAsyncResourceFactory(
    descriptors.appGetSystemsoftware,
    baseClient.app.getSystemsoftware
  ).getApiResource,
  /** get a specific `SystemSoftwareVersion` */
  getSystemsoftwareversion: new ApiCallAsyncResourceFactory(
    descriptors.appGetSystemsoftwareversion,
    baseClient.app.getSystemsoftwareversion
  ).getApiResource,
  /** get all `AppInstallations` inside a specific `Project` */
  listAppinstallations: new ApiCallAsyncResourceFactory(
    descriptors.appListAppinstallations,
    baseClient.app.listAppinstallations
  ).getApiResource,
  /** get all available `Apps` */
  listApps: new ApiCallAsyncResourceFactory(
    descriptors.appListApps,
    baseClient.app.listApps
  ).getApiResource,
  /** get all `AppVersions` of a specific `App` */
  listAppversions: new ApiCallAsyncResourceFactory(
    descriptors.appListAppversions,
    baseClient.app.listAppversions
  ).getApiResource,
  /** get all available `SystemSoftware` */
  listSystemsoftwares: new ApiCallAsyncResourceFactory(
    descriptors.appListSystemsoftwares,
    baseClient.app.listSystemsoftwares
  ).getApiResource,
  /** get all available `SystemSoftwareVersions` of a specific `SystemSoftware` */
  listSystemsoftwareversions: new ApiCallAsyncResourceFactory(
    descriptors.appListSystemsoftwareversions,
    baseClient.app.listSystemsoftwareversions
  ).getApiResource,
  /** get all update candidates for a specific `AppVersion` */
  listUpdateCandidatesForAppversion: new ApiCallAsyncResourceFactory(
    descriptors.appListUpdateCandidatesForAppversion,
    baseClient.app.listUpdateCandidatesForAppversion
  ).getApiResource,
  /** get runtime status of a specific `AppInstallation` */
  retrieveStatus: new ApiCallAsyncResourceFactory(
    descriptors.appRetrieveStatus,
    baseClient.app.retrieveStatus
  ).getApiResource,
});

const buildArticleApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get an Article. */
  getArticle: new ApiCallAsyncResourceFactory(
    descriptors.articleGetArticle,
    baseClient.article.getArticle
  ).getApiResource,
  /** List Articles. */
  listArticles: new ApiCallAsyncResourceFactory(
    descriptors.articleListArticles,
    baseClient.article.listArticles
  ).getApiResource,
});

const buildBackupApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List BackupSchedules belonging to a Project. */
  listProjectBackupSchedules: new ApiCallAsyncResourceFactory(
    descriptors.backupListProjectBackupSchedules,
    baseClient.backup.listProjectBackupSchedules
  ).getApiResource,
  /** List Backups belonging to a Project. */
  listProjectBackups: new ApiCallAsyncResourceFactory(
    descriptors.backupListProjectBackups,
    baseClient.backup.listProjectBackups
  ).getApiResource,
  /** Get a ProjectBackupSchedule. */
  getProjectBackupSchedule: new ApiCallAsyncResourceFactory(
    descriptors.backupGetProjectBackupSchedule,
    baseClient.backup.getProjectBackupSchedule
  ).getApiResource,
  /** Get a ProjectBackup. */
  getProjectBackup: new ApiCallAsyncResourceFactory(
    descriptors.backupGetProjectBackup,
    baseClient.backup.getProjectBackup
  ).getApiResource,
});

const buildContractApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Return the BaseItem of the Contract with the given ID. */
  getBaseItemOfContract: new ApiCallAsyncResourceFactory(
    descriptors.contractGetBaseItemOfContract,
    baseClient.contract.getBaseItemOfContract
  ).getApiResource,
  /** Return the Contract for the given Domain. */
  getDetailOfContractByDomain: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByDomain,
    baseClient.contract.getDetailOfContractByDomain
  ).getApiResource,
  /** Return the Contract for the given Project. */
  getDetailOfContractByProject: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByProject,
    baseClient.contract.getDetailOfContractByProject
  ).getApiResource,
  /** Return the Contract for the given Server. */
  getDetailOfContractByServer: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractByServer,
    baseClient.contract.getDetailOfContractByServer
  ).getApiResource,
  /** Get the ContractItem with the given ID. */
  getDetailOfContractItem: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContractItem,
    baseClient.contract.getDetailOfContractItem
  ).getApiResource,
  /** Returns the Contract with the given ID. */
  getDetailOfContract: new ApiCallAsyncResourceFactory(
    descriptors.contractGetDetailOfContract,
    baseClient.contract.getDetailOfContract
  ).getApiResource,
  /** Return the next TerminationDate for the ContractItem with the given ID. */
  getNextTerminationDateForItem: new ApiCallAsyncResourceFactory(
    descriptors.contractGetNextTerminationDateForItem,
    baseClient.contract.getNextTerminationDateForItem
  ).getApiResource,
  /** Return a list of Contracts for the given Customer. */
  listContracts: new ApiCallAsyncResourceFactory(
    descriptors.contractListContracts,
    baseClient.contract.listContracts
  ).getApiResource,
  /** Get details of an Invoice. */
  invoiceDetailOfInvoice: new ApiCallAsyncResourceFactory(
    descriptors.invoiceDetailOfInvoice,
    baseClient.contract.invoiceDetailOfInvoice
  ).getApiResource,
  /** Get InvoiceSettings of a Customer. */
  invoiceGetDetailOfInvoiceSettings: new ApiCallAsyncResourceFactory(
    descriptors.invoiceGetDetailOfInvoiceSettings,
    baseClient.contract.invoiceGetDetailOfInvoiceSettings
  ).getApiResource,
  /** List Invoices of a Customer. */
  invoiceListCustomerInvoices: new ApiCallAsyncResourceFactory(
    descriptors.invoiceListCustomerInvoices,
    baseClient.contract.invoiceListCustomerInvoices
  ).getApiResource,
  /** Get Order for Customer. */
  orderGetOrder: new ApiCallAsyncResourceFactory(
    descriptors.orderGetOrder,
    baseClient.contract.orderGetOrder
  ).getApiResource,
  /** Get list of Orders of a Customer. */
  orderListCustomerOrders: new ApiCallAsyncResourceFactory(
    descriptors.orderListCustomerOrders,
    baseClient.contract.orderListCustomerOrders
  ).getApiResource,
  /** Get list of Orders of a Project. */
  orderListProjectOrders: new ApiCallAsyncResourceFactory(
    descriptors.orderListProjectOrders,
    baseClient.contract.orderListProjectOrders
  ).getApiResource,
});

const buildConversationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all conversation the authenticated user has created or has access to. */
  listConversations: new ApiCallAsyncResourceFactory(
    descriptors.conversationListConversations,
    baseClient.conversation.listConversations
  ).getApiResource,
  /** Get all message of the conversation. */
  listMessagesByConversation: new ApiCallAsyncResourceFactory(
    descriptors.conversationListMessagesByConversation,
    baseClient.conversation.listMessagesByConversation
  ).getApiResource,
  /** Get a specific conversation category. */
  getCategory: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetCategory,
    baseClient.conversation.getCategory
  ).getApiResource,
  /** Get a support conversation. */
  getConversation: new ApiCallAsyncResourceFactory(
    descriptors.conversationGetConversation,
    baseClient.conversation.getConversation
  ).getApiResource,
  /** Get all conversation categories. */
  listCategories: new ApiCallAsyncResourceFactory(
    descriptors.conversationListCategories,
    baseClient.conversation.listCategories
  ).getApiResource,
});

const buildCronjobApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Cronjobs belonging to a Project. */
  listCronjobs: new ApiCallAsyncResourceFactory(
    descriptors.cronjobListCronjobs,
    baseClient.cronjob.listCronjobs
  ).getApiResource,
  /** List CronjobExecutions belonging to a Cronjob. */
  listExecutions: new ApiCallAsyncResourceFactory(
    descriptors.cronjobListExecutions,
    baseClient.cronjob.listExecutions
  ).getApiResource,
  /** Get a Cronjob. */
  getCronjob: new ApiCallAsyncResourceFactory(
    descriptors.cronjobGetCronjob,
    baseClient.cronjob.getCronjob
  ).getApiResource,
  /** Get a CronjobExecution. */
  getExecution: new ApiCallAsyncResourceFactory(
    descriptors.cronjobGetExecution,
    baseClient.cronjob.getExecution
  ).getApiResource,
});

const buildCustomerApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all customer categories. */
  listOfCustomerCategories: new ApiCallAsyncResourceFactory(
    descriptors.customerListOfCustomerCategories,
    baseClient.customer.listOfCustomerCategories
  ).getApiResource,
  /** Get all customer profiles the authenticated user has access to. */
  listCustomers: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomers,
    baseClient.customer.listCustomers
  ).getApiResource,
  /** Get a customer category. */
  getCustomerCategory: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerCategory,
    baseClient.customer.getCustomerCategory
  ).getApiResource,
  /** Get a CustomerInvite. */
  getCustomerInvite: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerInvite,
    baseClient.customer.getCustomerInvite
  ).getApiResource,
  /** Get a CustomerMembership. */
  getCustomerMembership: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerMembership,
    baseClient.customer.getCustomerMembership
  ).getApiResource,
  /** Get a customer profile. */
  getCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomer,
    baseClient.customer.getCustomer
  ).getApiResource,
  /** Get a CustomerInvite by token. */
  getCustomerTokenInvite: new ApiCallAsyncResourceFactory(
    descriptors.customerGetCustomerTokenInvite,
    baseClient.customer.getCustomerTokenInvite
  ).getApiResource,
  /** Check if the customer profile has a valid contract partner configured. */
  isCustomerLegallyCompetent: new ApiCallAsyncResourceFactory(
    descriptors.customerIsCustomerLegallyCompetent,
    baseClient.customer.isCustomerLegallyCompetent
  ).getApiResource,
  /** List CustomerInvites belonging to the executing user. */
  listCustomerInvites: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomerInvites,
    baseClient.customer.listCustomerInvites
  ).getApiResource,
  /** List CustomerMemberships belonging to the executing user. */
  listCustomerMemberships: new ApiCallAsyncResourceFactory(
    descriptors.customerListCustomerMemberships,
    baseClient.customer.listCustomerMemberships
  ).getApiResource,
  /** List Invites belonging to a Customer. */
  listInvitesForCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerListInvitesForCustomer,
    baseClient.customer.listInvitesForCustomer
  ).getApiResource,
  /** List Memberships belonging to a Customer. */
  listMembershipsForCustomer: new ApiCallAsyncResourceFactory(
    descriptors.customerListMembershipsForCustomer,
    baseClient.customer.listMembershipsForCustomer
  ).getApiResource,
});

const buildDatabaseApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List MySQLDatabases belonging to a Project. */
  listMysqlDatabases: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlDatabases,
    baseClient.database.listMysqlDatabases
  ).getApiResource,
  /** List MySQLUsers belonging to a Database. */
  listMysqlUsers: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlUsers,
    baseClient.database.listMysqlUsers
  ).getApiResource,
  /** List RedisDatabases belonging to a Project. */
  listRedisDatabases: new ApiCallAsyncResourceFactory(
    descriptors.databaseListRedisDatabases,
    baseClient.database.listRedisDatabases
  ).getApiResource,
  /** Get a MySQLDatabase. */
  getMysqlDatabase: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlDatabase,
    baseClient.database.getMysqlDatabase
  ).getApiResource,
  /** Get a MySQLUser. */
  getMysqlUser: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlUser,
    baseClient.database.getMysqlUser
  ).getApiResource,
  /** Get a RedisDatabase. */
  getRedisDatabase: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetRedisDatabase,
    baseClient.database.getRedisDatabase
  ).getApiResource,
  /** Get a MySQLUser's PhpMyAdmin-URL. */
  getMysqlUserPhpMyAdminUrl: new ApiCallAsyncResourceFactory(
    descriptors.databaseGetMysqlUserPhpMyAdminUrl,
    baseClient.database.getMysqlUserPhpMyAdminUrl
  ).getApiResource,
  /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
  listMysqlCharsets: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlCharsets,
    baseClient.database.listMysqlCharsets
  ).getApiResource,
  /** List MySQLVersions. */
  listMysqlVersions: new ApiCallAsyncResourceFactory(
    descriptors.databaseListMysqlVersions,
    baseClient.database.listMysqlVersions
  ).getApiResource,
  /** List RedisVersions. */
  listRedisVersions: new ApiCallAsyncResourceFactory(
    descriptors.databaseListRedisVersions,
    baseClient.database.listRedisVersions
  ).getApiResource,
});

const buildDomainApi = (baseClient: MittwaldAPIV2Client) => ({
  /** gets a specific zone */
  dnsZoneGetSpecific: new ApiCallAsyncResourceFactory(
    descriptors.dnsZoneGetSpecific,
    baseClient.domain.dnsZoneGetSpecific
  ).getApiResource,
  /** gets all dns zones by project id */
  dnsZonesForProject: new ApiCallAsyncResourceFactory(
    descriptors.dnsZonesForProject,
    baseClient.domain.dnsZonesForProject
  ).getApiResource,
  /** Get a Domain. */
  getDomain: new ApiCallAsyncResourceFactory(
    descriptors.domainGetDomain,
    baseClient.domain.getDomain
  ).getApiResource,
  /** Get File Service Reference for a Screenshot of a domain. */
  getScreenshotForDomain: new ApiCallAsyncResourceFactory(
    descriptors.domainGetScreenshotForDomain,
    baseClient.domain.getScreenshotForDomain
  ).getApiResource,
  /** Get a DomainOwnership. */
  getDomainOwnership: new ApiCallAsyncResourceFactory(
    descriptors.domainGetDomainOwnership,
    baseClient.domain.getDomainOwnership
  ).getApiResource,
  /** List the DomainOwnerships of a project. */
  listDomainOwnerships: new ApiCallAsyncResourceFactory(
    descriptors.domainListDomainOwnerships,
    baseClient.domain.listDomainOwnerships
  ).getApiResource,
  /** List Domains belonging to a Project. */
  listDomains: new ApiCallAsyncResourceFactory(
    descriptors.domainListDomains,
    baseClient.domain.listDomains
  ).getApiResource,
  /** Get an Ingress. */
  ingressGetSpecific: new ApiCallAsyncResourceFactory(
    descriptors.ingressGetSpecific,
    baseClient.domain.ingressGetSpecific
  ).getApiResource,
  /** List Ingresses the user has access to. */
  ingressListAccessible: new ApiCallAsyncResourceFactory(
    descriptors.ingressListAccessible,
    baseClient.domain.ingressListAccessible
  ).getApiResource,
  /** List Ingresses belonging to a project. */
  ingressListForProject: new ApiCallAsyncResourceFactory(
    descriptors.ingressListForProject,
    baseClient.domain.ingressListForProject
  ).getApiResource,
  /** List TLDs. */
  listTlds: new ApiCallAsyncResourceFactory(
    descriptors.domainListTlds,
    baseClient.domain.listTlds
  ).getApiResource,
  /** List the contact schemas for a TLD. */
  listTldContactSchemas: new ApiCallAsyncResourceFactory(
    descriptors.domainListTldContactSchemas,
    baseClient.domain.listTldContactSchemas
  ).getApiResource,
});

const buildFileApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a File's meta. */
  getFileMeta: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileMeta,
    baseClient.file.getFileMeta
  ).getApiResource,
  /** Get a Token's upload rules. */
  getFileTokenRules: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileTokenRules,
    baseClient.file.getFileTokenRules
  ).getApiResource,
  /** Get a Type's upload rules. */
  getFileTypeRules: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFileTypeRules,
    baseClient.file.getFileTypeRules
  ).getApiResource,
  /** Get a File. */
  getFile: new ApiCallAsyncResourceFactory(
    descriptors.fileGetFile,
    baseClient.file.getFile
  ).getApiResource,
});

const buildMailApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List DeliveryBoxes belonging to a Project. */
  listDeliveryBoxes: new ApiCallAsyncResourceFactory(
    descriptors.mailListDeliveryBoxes,
    baseClient.mail.listDeliveryBoxes
  ).getApiResource,
  /** List MailAddresses belonging to a Project. */
  listMailAddresses: new ApiCallAsyncResourceFactory(
    descriptors.mailListMailAddresses,
    baseClient.mail.listMailAddresses
  ).getApiResource,
  /** Get a DeliveryBox. */
  getDeliveryBox: new ApiCallAsyncResourceFactory(
    descriptors.mailGetDeliveryBox,
    baseClient.mail.getDeliveryBox
  ).getApiResource,
  /** Get a MailAddress. */
  getMailAddress: new ApiCallAsyncResourceFactory(
    descriptors.mailGetMailAddress,
    baseClient.mail.getMailAddress
  ).getApiResource,
  /** List mail settings of a Project. */
  listProjectMailSettings: new ApiCallAsyncResourceFactory(
    descriptors.mailListProjectMailSettings,
    baseClient.mail.listProjectMailSettings
  ).getApiResource,
});

const buildNotificationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Getting the subscription status of the subscription. */
  newsletterGetInfo: new ApiCallAsyncResourceFactory(
    descriptors.newsletterGetInfo,
    baseClient.notification.newsletterGetInfo
  ).getApiResource,
  /** Get the counts for unread notifications of the user. */
  scountUnreadNotifications: new ApiCallAsyncResourceFactory(
    descriptors.notificationsCountUnreadNotifications,
    baseClient.notification.scountUnreadNotifications
  ).getApiResource,
  /** List all unread notifications. */
  slistNotifications: new ApiCallAsyncResourceFactory(
    descriptors.notificationsListNotifications,
    baseClient.notification.slistNotifications
  ).getApiResource,
});

const buildProjectApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a ProjectInvite. */
  getProjectInvite: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectInvite,
    baseClient.project.getProjectInvite
  ).getApiResource,
  /** Get a ProjectMembership */
  getProjectMembership: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectMembership,
    baseClient.project.getProjectMembership
  ).getApiResource,
  /** Get a Project. */
  getProject: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProject,
    baseClient.project.getProject
  ).getApiResource,
  /** Get a ProjectInvite by token. */
  getProjectTokenInvite: new ApiCallAsyncResourceFactory(
    descriptors.projectGetProjectTokenInvite,
    baseClient.project.getProjectTokenInvite
  ).getApiResource,
  /** Get the executing user's membership in a Project. */
  getSelfMembershipForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectGetSelfMembershipForProject,
    baseClient.project.getSelfMembershipForProject
  ).getApiResource,
  /** Get a Server. */
  getServer: new ApiCallAsyncResourceFactory(
    descriptors.projectGetServer,
    baseClient.project.getServer
  ).getApiResource,
  /** List Invites belonging to a Project. */
  listInvitesForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectListInvitesForProject,
    baseClient.project.listInvitesForProject
  ).getApiResource,
  /** List Memberships belonging to a Project. */
  listMembershipsForProject: new ApiCallAsyncResourceFactory(
    descriptors.projectListMembershipsForProject,
    baseClient.project.listMembershipsForProject
  ).getApiResource,
  /** List ProjectInvites belonging to the executing user. */
  listProjectInvites: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjectInvites,
    baseClient.project.listProjectInvites
  ).getApiResource,
  /** List ProjectMemberships belonging to the executing user. */
  listProjectMemberships: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjectMemberships,
    baseClient.project.listProjectMemberships
  ).getApiResource,
  /** List Projects belonging to the executing user. */
  listProjects: new ApiCallAsyncResourceFactory(
    descriptors.projectListProjects,
    baseClient.project.listProjects
  ).getApiResource,
  /** List Servers belonging to the executing user. */
  listServers: new ApiCallAsyncResourceFactory(
    descriptors.projectListServers,
    baseClient.project.listServers
  ).getApiResource,
});

const buildProjectFileSystemApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List directories belonging to a Project. */
  getDirectories: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetDirectories,
    baseClient.projectFileSystem.getDirectories
  ).getApiResource,
  /** Get a Project directory filesystem usage. */
  getDiskUsage: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetDiskUsage,
    baseClient.projectFileSystem.getDiskUsage
  ).getApiResource,
  /** Get a Project file's content. */
  getFileContent: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetFileContent,
    baseClient.projectFileSystem.getFileContent
  ).getApiResource,
  /** Get a Project's file/filesystem authorization token. */
  getJwt: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemGetJwt,
    baseClient.projectFileSystem.getJwt
  ).getApiResource,
  /** Get a Project file's information. */
  listFiles: new ApiCallAsyncResourceFactory(
    descriptors.projectFileSystemListFiles,
    baseClient.projectFileSystem.listFiles
  ).getApiResource,
});

const buildSshsftpUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all SFTPUsers for a Project. */
  sftpUserListSftpUsers: new ApiCallAsyncResourceFactory(
    descriptors.sftpUserListSftpUsers,
    baseClient.sshsftpUser.sftpUserListSftpUsers
  ).getApiResource,
  /** Get an SFTPUser. */
  sftpUserGetSftpUser: new ApiCallAsyncResourceFactory(
    descriptors.sftpUserGetSftpUser,
    baseClient.sshsftpUser.sftpUserGetSftpUser
  ).getApiResource,
  /** Get all SSHUsers for a Project. */
  sshUserListSshUsers: new ApiCallAsyncResourceFactory(
    descriptors.sshUserListSshUsers,
    baseClient.sshsftpUser.sshUserListSshUsers
  ).getApiResource,
  /** Get an SSHUser. */
  sshUserGetSshUser: new ApiCallAsyncResourceFactory(
    descriptors.sshUserGetSshUser,
    baseClient.sshsftpUser.sshUserGetSshUser
  ).getApiResource,
});

const buildUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get your verified Email-Address. */
  getOwnEmail: new ApiCallAsyncResourceFactory(
    descriptors.userGetOwnEmail,
    baseClient.user.getOwnEmail
  ).getApiResource,
  /** Get your current multi factor auth status. */
  getMfaStatus: new ApiCallAsyncResourceFactory(
    descriptors.userGetMfaStatus,
    baseClient.user.getMfaStatus
  ).getApiResource,
  /** List all of your ApiTokens. */
  listApiTokens: new ApiCallAsyncResourceFactory(
    descriptors.userListApiTokens,
    baseClient.user.listApiTokens
  ).getApiResource,
  /** Get your stored ssh-keys. */
  listSshKeys: new ApiCallAsyncResourceFactory(
    descriptors.userListSshKeys,
    baseClient.user.listSshKeys
  ).getApiResource,
  /** Get a specific ApiToken. */
  getApiToken: new ApiCallAsyncResourceFactory(
    descriptors.userGetApiToken,
    baseClient.user.getApiToken
  ).getApiResource,
  /** Get a specific stored ssh-key. */
  getSshKey: new ApiCallAsyncResourceFactory(
    descriptors.userGetSshKey,
    baseClient.user.getSshKey
  ).getApiResource,
  /** Get your account information. */
  getOwnAccount: new ApiCallAsyncResourceFactory(
    descriptors.userGetOwnAccount,
    baseClient.user.getOwnAccount
  ).getApiResource,
  /** The timestamp of your latest password change. */
  getPasswordUpdatedAt: new ApiCallAsyncResourceFactory(
    descriptors.userGetPasswordUpdatedAt,
    baseClient.user.getPasswordUpdatedAt
  ).getApiResource,
  /** Get personalized settings. */
  getPersonalizedSettings: new ApiCallAsyncResourceFactory(
    descriptors.userGetPersonalizedSettings,
    baseClient.user.getPersonalizedSettings
  ).getApiResource,
  /** Get a specific session. */
  getSession: new ApiCallAsyncResourceFactory(
    descriptors.userGetSession,
    baseClient.user.getSession
  ).getApiResource,
  /** Get profile information for a user. */
  getUser: new ApiCallAsyncResourceFactory(
    descriptors.userGetUser,
    baseClient.user.getUser
  ).getApiResource,
  /** Submitted feedback of the given user. */
  listFeedback: new ApiCallAsyncResourceFactory(
    descriptors.userListFeedback,
    baseClient.user.listFeedback
  ).getApiResource,
  /** List all sessions. */
  listSessions: new ApiCallAsyncResourceFactory(
    descriptors.userListSessions,
    baseClient.user.listSessions
  ).getApiResource,
  /** Request a support code. */
  supportCodeRequest: new ApiCallAsyncResourceFactory(
    descriptors.userSupportCodeRequest,
    baseClient.user.supportCodeRequest
  ).getApiResource,
});

export class MittwaldAPIV2ClientReact {
  /** The App API allows you to manage your apps within a project, and all the system softwares that are installed as dependencies. */
  public readonly app: ReturnType<typeof buildAppApi>;

  /** The article API allows you to read article information. */
  public readonly article: ReturnType<typeof buildArticleApi>;

  /** The backup API allows you to manage your project backups. */
  public readonly backup: ReturnType<typeof buildBackupApi>;

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract: ReturnType<typeof buildContractApi>;

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation: ReturnType<typeof buildConversationApi>;

  /** The cronjob API allows you to manage cronjobs within a project. */
  public readonly cronjob: ReturnType<typeof buildCronjobApi>;

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer: ReturnType<typeof buildCustomerApi>;

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database: ReturnType<typeof buildDatabaseApi>;

  /** The domain API allows you to manage your domains, DNS records and ingress resources. */
  public readonly domain: ReturnType<typeof buildDomainApi>;

  /** The file API allows you to manage your files, for example for conversations attachments and avatar uploads. */
  public readonly file: ReturnType<typeof buildFileApi>;

  /** The mail API allows you to manage your mail accounts. */
  public readonly mail: ReturnType<typeof buildMailApi>;

  /** The notification API allows you to manage your notifications. */
  public readonly notification: ReturnType<typeof buildNotificationApi>;

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project: ReturnType<typeof buildProjectApi>;

  /** The filesystem API allows you to directly access the filesystem of your project. */
  public readonly projectFileSystem: ReturnType<
    typeof buildProjectFileSystemApi
  >;

  /** The SSH/SFTP User API allows you to manage your SSH/SFTP users within a project. */
  public readonly sshsftpUser: ReturnType<typeof buildSshsftpUserApi>;

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user: ReturnType<typeof buildUserApi>;

  private constructor(baseClient: MittwaldAPIV2Client) {
    this.app = buildAppApi(baseClient);

    this.article = buildArticleApi(baseClient);

    this.backup = buildBackupApi(baseClient);

    this.contract = buildContractApi(baseClient);

    this.conversation = buildConversationApi(baseClient);

    this.cronjob = buildCronjobApi(baseClient);

    this.customer = buildCustomerApi(baseClient);

    this.database = buildDatabaseApi(baseClient);

    this.domain = buildDomainApi(baseClient);

    this.file = buildFileApi(baseClient);

    this.mail = buildMailApi(baseClient);

    this.notification = buildNotificationApi(baseClient);

    this.project = buildProjectApi(baseClient);

    this.projectFileSystem = buildProjectFileSystemApi(baseClient);

    this.sshsftpUser = buildSshsftpUserApi(baseClient);

    this.user = buildUserApi(baseClient);
  }

  public static fromBaseClient(
    baseClient: MittwaldAPIV2Client
  ): MittwaldAPIV2ClientReact {
    return new MittwaldAPIV2ClientReact(baseClient);
  }
}