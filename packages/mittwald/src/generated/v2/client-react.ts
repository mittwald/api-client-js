/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import MittwaldAPIV2Client from "./client.js";
import { getAsyncResourceFactory } from "@mittwald/api-client-commons/react";
import * as descriptors from "./descriptors.js";
export * from "@mittwald/react-use-promise/types";

const buildAppApi = (baseClient: MittwaldAPIV2Client) => ({
  /** get a specific `App` */
  getApp: getAsyncResourceFactory(baseClient.axios, descriptors.appGetApp),
  /** get a specific `AppInstallation` */
  getAppinstallation: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appGetAppinstallation
  ),
  /** get a specific `AppVersion` */
  getAppversion: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appGetAppversion
  ),
  /** get the missing requirements of an appInstallation for a specific target AppVersion */
  getMissingDependenciesForAppinstallation: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appGetMissingDependenciesForAppinstallation
  ),
  /** get a specific `SystemSoftware` */
  getSystemsoftware: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appGetSystemsoftware
  ),
  /** get a specific `SystemSoftwareVersion` */
  getSystemsoftwareversion: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appGetSystemsoftwareversion
  ),
  /** get all `AppInstallations` inside a specific `Project` */
  listAppinstallations: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appListAppinstallations
  ),
  /** get all available `Apps` */
  listApps: getAsyncResourceFactory(baseClient.axios, descriptors.appListApps),
  /** get all `AppVersions` of a specific `App` */
  listAppversions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appListAppversions
  ),
  /** get all available `SystemSoftware` */
  listSystemsoftwares: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appListSystemsoftwares
  ),
  /** get all available `SystemSoftwareVersions` of a specific `SystemSoftware` */
  listSystemsoftwareversions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appListSystemsoftwareversions
  ),
  /** get all update candidates for a specific `AppVersion` */
  listUpdateCandidatesForAppversion: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appListUpdateCandidatesForAppversion
  ),
  /** get runtime status of a specific `AppInstallation` */
  retrieveStatus: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.appRetrieveStatus
  ),
});

const buildArticleApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get an Article. */
  getArticle: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.articleGetArticle
  ),
  /** List Articles. */
  listArticles: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.articleListArticles
  ),
});

const buildBackupApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List BackupSchedules belonging to a Project. */
  listProjectBackupSchedules: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.backupListProjectBackupSchedules
  ),
  /** List Backups belonging to a Project. */
  listProjectBackups: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.backupListProjectBackups
  ),
  /** Get a ProjectBackupSchedule. */
  getProjectBackupSchedule: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.backupGetProjectBackupSchedule
  ),
  /** Get a ProjectBackup. */
  getProjectBackup: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.backupGetProjectBackup
  ),
});

const buildContractApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Return the BaseItem of the Contract with the given ID. */
  getBaseItemOfContract: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetBaseItemOfContract
  ),
  /** Return the Contract for the given Domain. */
  getDetailOfContractByDomain: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetDetailOfContractByDomain
  ),
  /** Return the Contract for the given Project. */
  getDetailOfContractByProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetDetailOfContractByProject
  ),
  /** Return the Contract for the given Server. */
  getDetailOfContractByServer: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetDetailOfContractByServer
  ),
  /** Get the ContractItem with the given ID. */
  getDetailOfContractItem: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetDetailOfContractItem
  ),
  /** Returns the Contract with the given ID. */
  getDetailOfContract: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetDetailOfContract
  ),
  /** Return the next TerminationDate for the ContractItem with the given ID. */
  getNextTerminationDateForItem: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractGetNextTerminationDateForItem
  ),
  /** Return a list of Contracts for the given Customer. */
  listContracts: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.contractListContracts
  ),
  /** Get details of an Invoice. */
  invoiceDetailOfInvoice: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.invoiceDetailOfInvoice
  ),
  /** Get InvoiceSettings of a Customer. */
  invoiceGetDetailOfInvoiceSettings: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.invoiceGetDetailOfInvoiceSettings
  ),
  /** List Invoices of a Customer. */
  invoiceListCustomerInvoices: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.invoiceListCustomerInvoices
  ),
  /** Get Order for Customer. */
  orderGetOrder: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.orderGetOrder
  ),
  /** Get list of Orders of a Customer. */
  orderListCustomerOrders: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.orderListCustomerOrders
  ),
  /** Get list of Orders of a Project. */
  orderListProjectOrders: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.orderListProjectOrders
  ),
});

const buildConversationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all conversation the authenticated user has created or has access to. */
  listConversations: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.conversationListConversations
  ),
  /** Get all message of the conversation. */
  listMessagesByConversation: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.conversationListMessagesByConversation
  ),
  /** Get a specific conversation category. */
  getCategory: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.conversationGetCategory
  ),
  /** Get a support conversation. */
  getConversation: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.conversationGetConversation
  ),
  /** Get all conversation categories. */
  listCategories: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.conversationListCategories
  ),
});

const buildCronjobApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List Cronjobs belonging to a Project. */
  listCronjobs: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.cronjobListCronjobs
  ),
  /** List CronjobExecutions belonging to a Cronjob. */
  listExecutions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.cronjobListExecutions
  ),
  /** Get a Cronjob. */
  getCronjob: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.cronjobGetCronjob
  ),
  /** Get a CronjobExecution. */
  getExecution: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.cronjobGetExecution
  ),
});

const buildCustomerApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all customer categories. */
  listOfCustomerCategories: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListOfCustomerCategories
  ),
  /** Get all customer profiles the authenticated user has access to. */
  listCustomers: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListCustomers
  ),
  /** Get a customer category. */
  getCustomerCategory: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerGetCustomerCategory
  ),
  /** Get a CustomerInvite. */
  getCustomerInvite: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerGetCustomerInvite
  ),
  /** Get a CustomerMembership. */
  getCustomerMembership: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerGetCustomerMembership
  ),
  /** Get a customer profile. */
  getCustomer: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerGetCustomer
  ),
  /** Get a CustomerInvite by token. */
  getCustomerTokenInvite: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerGetCustomerTokenInvite
  ),
  /** Check if the customer profile has a valid contract partner configured. */
  isCustomerLegallyCompetent: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerIsCustomerLegallyCompetent
  ),
  /** List CustomerInvites belonging to the executing user. */
  listCustomerInvites: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListCustomerInvites
  ),
  /** List CustomerMemberships belonging to the executing user. */
  listCustomerMemberships: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListCustomerMemberships
  ),
  /** List Invites belonging to a Customer. */
  listInvitesForCustomer: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListInvitesForCustomer
  ),
  /** List Memberships belonging to a Customer. */
  listMembershipsForCustomer: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.customerListMembershipsForCustomer
  ),
});

const buildDatabaseApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List MySQLDatabases belonging to a Project. */
  listMysqlDatabases: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListMysqlDatabases
  ),
  /** List MySQLUsers belonging to a Database. */
  listMysqlUsers: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListMysqlUsers
  ),
  /** List RedisDatabases belonging to a Project. */
  listRedisDatabases: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListRedisDatabases
  ),
  /** Get a MySQLDatabase. */
  getMysqlDatabase: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseGetMysqlDatabase
  ),
  /** Get a MySQLUser. */
  getMysqlUser: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseGetMysqlUser
  ),
  /** Get a RedisDatabase. */
  getRedisDatabase: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseGetRedisDatabase
  ),
  /** Get a MySQLUser's PhpMyAdmin-URL. */
  getMysqlUserPhpMyAdminUrl: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseGetMysqlUserPhpMyAdminUrl
  ),
  /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
  listMysqlCharsets: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListMysqlCharsets
  ),
  /** List MySQLVersions. */
  listMysqlVersions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListMysqlVersions
  ),
  /** List RedisVersions. */
  listRedisVersions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.databaseListRedisVersions
  ),
});

const buildDomainApi = (baseClient: MittwaldAPIV2Client) => ({
  /** gets a specific zone */
  dnsZoneGetSpecific: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.dnsZoneGetSpecific
  ),
  /** gets all dns zones by project id */
  dnsZonesForProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.dnsZonesForProject
  ),
  /** Get a Domain. */
  getDomain: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainGetDomain
  ),
  /** Get a HandleSchema. */
  getHandleFields: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainGetHandleFields
  ),
  /** Get File Service Reference for a Screenshot of a domain. */
  getScreenshotForDomain: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainGetScreenshotForDomain
  ),
  /** Get a domain ownership. */
  getSpecificDomainOwnership: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainGetSpecificDomainOwnership
  ),
  /** List all domain ownerships of a project. */
  listDomainOwnerships: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainListDomainOwnerships
  ),
  /** List Domains belonging to a Project. */
  listDomains: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.domainListDomains
  ),
  /** Get an Ingress. */
  ingressGetSpecific: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.ingressGetSpecific
  ),
  /** List Ingresses the user has access to. */
  ingressListAccessible: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.ingressListAccessible
  ),
  /** List Ingresses belonging to a project. */
  ingressListForProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.ingressListForProject
  ),
});

const buildFileApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a File's meta. */
  getFileMeta: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.fileGetFileMeta
  ),
  /** Get a Token's upload rules. */
  getFileTokenRules: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.fileGetFileTokenRules
  ),
  /** Get a Type's upload rules. */
  getFileTypeRules: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.fileGetFileTypeRules
  ),
  /** Get a File. */
  getFile: getAsyncResourceFactory(baseClient.axios, descriptors.fileGetFile),
});

const buildMailApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all deliveryboxes by project ID */
  deliveryboxList: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.mailDeliveryboxList
  ),
  /** Get a specific deliverybox */
  deliveryboxGetSpecific: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.mailDeliveryboxGetSpecific
  ),
  /** Get all mail addresses for a project ID */
  mailaddressList: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.mailMailaddressList
  ),
  /** Get a specific mail address */
  mailaddressGetSpecific: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.mailMailaddressGetSpecific
  ),
  /** Get settings for a given project ID */
  projectsettingGetSpecific: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.mailProjectsettingGetSpecific
  ),
});

const buildNotificationApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Getting the subscription status of the subscription. */
  newsletterGetInfo: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.newsletterGetInfo
  ),
  /** Get the counts for unread notifications of the user. */
  scountUnreadNotifications: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.notificationsCountUnreadNotifications
  ),
  /** List all unread notifications */
  slistNotifications: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.notificationsListNotifications
  ),
});

const buildProjectApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get a ProjectInvite. */
  getProjectInvite: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetProjectInvite
  ),
  /** Get a ProjectMembership */
  getProjectMembership: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetProjectMembership
  ),
  /** Get a ProjectInvite by token. */
  getProjectTokenInvite: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetProjectTokenInvite
  ),
  /** Get a Project. */
  getProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetProject
  ),
  /** Get the executing user's membership in a Project. */
  getSelfMembershipForProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetSelfMembershipForProject
  ),
  /** Get a Server. */
  getServer: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectGetServer
  ),
  /** List Invites belonging to a Project. */
  listInvitesForProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListInvitesForProject
  ),
  /** List Memberships belonging to a Project. */
  listMembershipsForProject: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListMembershipsForProject
  ),
  /** List ProjectInvites belonging to the executing user. */
  listProjectInvites: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListProjectInvites
  ),
  /** List ProjectMemberships belonging to the executing user. */
  listProjectMemberships: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListProjectMemberships
  ),
  /** List Projects belonging to the executing user. */
  listProjects: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListProjects
  ),
  /** List Servers belonging to the executing user. */
  listServers: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectListServers
  ),
});

const buildProjectFileSystemApi = (baseClient: MittwaldAPIV2Client) => ({
  /** List directories belonging to a Project. */
  getDirectories: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectFileSystemGetDirectories
  ),
  /** Get a Project directory filesystem usage. */
  getDiskUsage: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectFileSystemGetDiskUsage
  ),
  /** Get a Project file's content. */
  getFileContent: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectFileSystemGetFileContent
  ),
  /** Get a Project's file/filesystem authorization token. */
  getJwt: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectFileSystemGetJwt
  ),
  /** Get a Project file's information. */
  listFiles: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.projectFileSystemListFiles
  ),
});

const buildSshsftpUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get all SFTPUsers for a Project. */
  sftpUserListSftpUsers: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.sftpUserListSftpUsers
  ),
  /** Get an SFTPUser. */
  sftpUserGetSftpUser: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.sftpUserGetSftpUser
  ),
  /** Get all SSHUsers for a Project. */
  sshUserListSshUsers: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.sshUserListSshUsers
  ),
  /** Get an SSHUser. */
  sshUserGetSshUser: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.sshUserGetSshUser
  ),
});

const buildUserApi = (baseClient: MittwaldAPIV2Client) => ({
  /** Get your verified Email-Address. */
  getOwnEmail: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetOwnEmail
  ),
  /** Get your current multi factor auth status. */
  getMfaStatus: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetMfaStatus
  ),
  /** List all of your ApiTokens. */
  listApiTokens: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userListApiTokens
  ),
  /** Get your stored ssh-keys. */
  listSshKeys: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userListSshKeys
  ),
  /** Get a specific ApiToken. */
  getApiToken: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetApiToken
  ),
  /** Get a specific stored ssh-key. */
  getSshKey: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetSshKey
  ),
  /** Get your account information. */
  getOwnAccount: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetOwnAccount
  ),
  /** The timestamp of your latest password change. */
  getPasswordUpdatedAt: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetPasswordUpdatedAt
  ),
  /** Get personalized settings. */
  getPersonalizedSettings: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetPersonalizedSettings
  ),
  /** Get a specific session. */
  getSession: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userGetSession
  ),
  /** Get profile information for a user. */
  getUser: getAsyncResourceFactory(baseClient.axios, descriptors.userGetUser),
  /** Submitted feedback of the given user. */
  listFeedback: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userListFeedback
  ),
  /** List all sessions. */
  listSessions: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userListSessions
  ),
  /** Request a support code. */
  supportCodeRequest: getAsyncResourceFactory(
    baseClient.axios,
    descriptors.userSupportCodeRequest
  ),
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
