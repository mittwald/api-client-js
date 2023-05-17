/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import * as descriptors from "./descriptors.js";
import ApiClientBase from "@mittwald/api-client-commons/dist/core/ApiClientBase.js";

export class MittwaldAPIV2Client extends ApiClientBase {
  /** The App API allows you to manage your apps within a project, and all the system softwares that are installed as dependencies. */
  public readonly app = {
    /** execute a runtime concerning action on a specific `AppInstallation` */
    executeAction: this.requestFunctionFactory(descriptors.appExecuteAction),
    /** get a specific `App` */
    getApp: this.requestFunctionFactory(descriptors.appGetApp),
    /** get a specific `AppInstallation` */
    getAppinstallation: this.requestFunctionFactory(
      descriptors.appGetAppinstallation
    ),
    /** start uninstallation process for a specific `AppInstallation` */
    uninstallAppinstallation: this.requestFunctionFactory(
      descriptors.appUninstallAppinstallation
    ),
    /** patch desired properties of a specific `AppInstallation` */
    patchAppinstallation: this.requestFunctionFactory(
      descriptors.appPatchAppinstallation
    ),
    /** get a specific `AppVersion` */
    getAppversion: this.requestFunctionFactory(descriptors.appGetAppversion),
    /** get a specific `SystemSoftware` */
    getSystemsoftware: this.requestFunctionFactory(
      descriptors.appGetSystemsoftware
    ),
    /** get a specific `SystemSoftwareVersion` */
    getSystemsoftwareversion: this.requestFunctionFactory(
      descriptors.appGetSystemsoftwareversion
    ),
    /** create linkage between an `AppInstallation` and a `Database` */
    linkDatabase: this.requestFunctionFactory(descriptors.appLinkDatabase),
    /** get all `AppInstallations` inside a specific `Project` */
    listAppinstallations: this.requestFunctionFactory(
      descriptors.appListAppinstallations
    ),
    /** request a new `AppInstallation` */
    requestAppinstallation: this.requestFunctionFactory(
      descriptors.appRequestAppinstallation
    ),
    /** get all available `Apps` */
    listApps: this.requestFunctionFactory(descriptors.appListApps),
    /** get all `AppVersions` of a specific `App` */
    listAppversions: this.requestFunctionFactory(
      descriptors.appListAppversions
    ),
    /** get all available `SystemSoftware` */
    listSystemsoftwares: this.requestFunctionFactory(
      descriptors.appListSystemsoftwares
    ),
    /** get all available `SystemSoftwareVersions` of a specific `SystemSoftware` */
    listSystemsoftwareversions: this.requestFunctionFactory(
      descriptors.appListSystemsoftwareversions
    ),
    /** get runtime status of a specific `AppInstallation` */
    retrieveStatus: this.requestFunctionFactory(descriptors.appRetrieveStatus),
    /** create linkage between an `AppInstallation` and `DatabaseUsers` */
    setDatabaseUsers: this.requestFunctionFactory(
      descriptors.appSetDatabaseUsers
    ),
    /** remove linkage between an `AppInstallation` and a `Database` */
    unlinkDatabase: this.requestFunctionFactory(descriptors.appUnlinkDatabase),
    /** trigger `AppInstallation` to retrieve current installation status based on an appJob */
    updateStatus: this.requestFunctionFactory(descriptors.appUpdateStatus),
    /** get a specific `AppVersion` */
    deprecatedAppGetAppversion: this.requestFunctionFactory(
      descriptors.deprecatedAppGetAppversion
    ),
    /** get all `AppVersions` of a specific `App` */
    deprecatedAppListAppversions: this.requestFunctionFactory(
      descriptors.deprecatedAppListAppversions
    ),
  };

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract = {
    /** Get an Article. */
    articleServiceGetArticle: this.requestFunctionFactory(
      descriptors.articleServiceGetArticle
    ),
    /** List Articles. */
    articleServiceListArticles: this.requestFunctionFactory(
      descriptors.articleServiceListArticles
    ),
    /** Schedule the Termination of a ContractItem. */
    terminateContractItem: this.requestFunctionFactory(
      descriptors.contractTerminateContractItem
    ),
    /** Cancel the Termination for the referred ContractItem. */
    cancelContractItemTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractItemTermination
    ),
    /** Cancel the TariffChange for the referred ContractItem. */
    cancelContractTariffChange: this.requestFunctionFactory(
      descriptors.contractCancelContractTariffChange
    ),
    /** Schedule the Termination of a Contract. */
    terminateContract: this.requestFunctionFactory(
      descriptors.contractTerminateContract
    ),
    /** Cancel the Termination for the referred Contract. */
    cancelContractTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractTermination
    ),
    /** Return the BaseItem of the Contract with the given ID. */
    getBaseItemOfContract: this.requestFunctionFactory(
      descriptors.contractGetBaseItemOfContract
    ),
    /** Return the Contract for the given Domain. */
    getDetailOfContractByDomain: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByDomain
    ),
    /** Return the Contract for the given Server. */
    getDetailOfContractByPlacementGroup: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByPlacementGroup
    ),
    /** Return the Contract for the given Project. */
    getDetailOfContractByProject: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByProject
    ),
    /** Get the ContractItem with the given ID. */
    getDetailOfContractItem: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractItem
    ),
    /** Returns the Contract with the given ID. */
    getDetailOfContract: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContract
    ),
    /** Return the next TerminationDate for the ContractItem with the given ID. */
    getNextTerminationDateForItem: this.requestFunctionFactory(
      descriptors.contractGetNextTerminationDateForItem
    ),
    /** Return a list of Contracts for the given Customer. */
    listContracts: this.requestFunctionFactory(
      descriptors.contractListContracts
    ),
    /** Schedule the Termination of a ContractItem. */
    deprecatedContractTerminateContractItem: this.requestFunctionFactory(
      descriptors.deprecatedContractTerminateContractItem
    ),
    /** Cancel the Termination for the referred ContractItem. */
    deprecatedContractCancelContractItemTermination:
      this.requestFunctionFactory(
        descriptors.deprecatedContractCancelContractItemTermination
      ),
    /** Cancel the TariffChange for the referred ContractItem. */
    deprecatedContractCancelContractTariffChange: this.requestFunctionFactory(
      descriptors.deprecatedContractCancelContractTariffChange
    ),
    /** Schedule the Termination of a Contract. */
    deprecatedContractTerminateContract: this.requestFunctionFactory(
      descriptors.deprecatedContractTerminateContract
    ),
    /** Cancel the Termination for the referred Contract. */
    deprecatedContractCancelContractTermination: this.requestFunctionFactory(
      descriptors.deprecatedContractCancelContractTermination
    ),
    /** This route is deprecated, please use the new one. */
    deprecatedContractDetailOfContract: this.requestFunctionFactory(
      descriptors.deprecatedContractDetailOfContract
    ),
    /** Return the BaseItem of the Contract with the given ID. */
    deprecatedContractGetBaseItemOfContract: this.requestFunctionFactory(
      descriptors.deprecatedContractGetBaseItemOfContract
    ),
    /** Return the Contract for the given Aggregate. */
    deprecatedContractGetDetailOfContractByAggregate:
      this.requestFunctionFactory(
        descriptors.deprecatedContractGetDetailOfContractByAggregate
      ),
    /** Return the next TerminationDate for the ContractItem with the given ID. */
    deprecatedContractGetNextTerminationDateForItem:
      this.requestFunctionFactory(
        descriptors.deprecatedContractGetNextTerminationDateForItem
      ),
    /** Get InvoiceSettings of a Customer. */
    deprecatedInvoiceInvoiceSettings: this.requestFunctionFactory(
      descriptors.deprecatedInvoiceInvoiceSettings
    ),
    /** Update InvoiceSettings of a Customer. */
    deprecatedInvoiceUpdateInvoiceSettings: this.requestFunctionFactory(
      descriptors.deprecatedInvoiceUpdateInvoiceSettings
    ),
    /** Get details of an Invoice. */
    invoiceDetailOfInvoice: this.requestFunctionFactory(
      descriptors.invoiceDetailOfInvoice
    ),
    /** Get InvoiceSettings of a Customer. */
    invoiceGetDetailOfInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceGetDetailOfInvoiceSettings
    ),
    /** Update InvoiceSettings of a Customer. */
    invoiceUpdateInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceUpdateInvoiceSettings
    ),
    /** List Invoices of a Customer. */
    invoiceListCustomerInvoices: this.requestFunctionFactory(
      descriptors.invoiceListCustomerInvoices
    ),
    /** Prospace tariff change order */
    orderChangeProjecthosting: this.requestFunctionFactory(
      descriptors.orderChangeProjecthosting
    ),
    /** SpaceServer order */
    orderChangeServer: this.requestFunctionFactory(
      descriptors.orderChangeServer
    ),
    /** Single order for customer */
    orderGetOrder: this.requestFunctionFactory(descriptors.orderGetOrder),
    /** Get list of order of a customer */
    orderListCustomerOrders: this.requestFunctionFactory(
      descriptors.orderListCustomerOrders
    ),
    /** Get list of orders of a project. */
    orderListProjectOrders: this.requestFunctionFactory(
      descriptors.orderListProjectOrders
    ),
    /** Order a domain. */
    orderOrderDomain: this.requestFunctionFactory(descriptors.orderOrderDomain),
    /** Prospace order */
    orderOrderProjecthosting: this.requestFunctionFactory(
      descriptors.orderOrderProjecthosting
    ),
    /** SpaceServer order */
    orderOrderServer: this.requestFunctionFactory(descriptors.orderOrderServer),
    /** Preview Prospace tariff change */
    orderPreviewChangeProjecthosting: this.requestFunctionFactory(
      descriptors.orderPreviewChangeProjecthosting
    ),
    /** Preview SpaceServer tariff change */
    orderPreviewChangeServer: this.requestFunctionFactory(
      descriptors.orderPreviewChangeServer
    ),
    /** Preview domain order. */
    orderPreviewOrderDomain: this.requestFunctionFactory(
      descriptors.orderPreviewOrderDomain
    ),
    /** Preview Prospace order */
    orderPreviewOrderProjecthosting: this.requestFunctionFactory(
      descriptors.orderPreviewOrderProjecthosting
    ),
    /** Preview SpaceServer order */
    orderPreviewOrderServer: this.requestFunctionFactory(
      descriptors.orderPreviewOrderServer
    ),
  };

  /** The backup API allows you to manage your project backups. */
  public readonly backup = {
    /** Export a ProjectBackup for download. */
    createProjectBackupExport: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackupExport
    ),
    /** Delete a ProjectBackupExport. */
    deleteProjectBackupExport: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupExport
    ),
    /** List BackupSchedules belonging to a given Project. */
    listProjectBackupSchedules: this.requestFunctionFactory(
      descriptors.backupListProjectBackupSchedules
    ),
    /** Create a BackupSchedule for a Project. */
    createProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackupSchedule
    ),
    /** List Backups for a given Project. */
    listProjectBackups: this.requestFunctionFactory(
      descriptors.backupListProjectBackups
    ),
    /** Create a Backup of a Project. */
    createProjectBackup: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackup
    ),
    /** Get a ProjectBackupSchedule. */
    getProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupSchedule
    ),
    /** Delete a ProjectBackupSchedule. */
    deleteProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupSchedule
    ),
    /** Update a ProjectBackupSchedule. */
    updateProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackupSchedule
    ),
    /** Get a ProjectBackup. */
    getProjectBackup: this.requestFunctionFactory(
      descriptors.backupGetProjectBackup
    ),
    /** Delete a ProjectBackup. */
    deleteProjectBackup: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackup
    ),
    /** Change the description of a ProjectBackup. */
    updateProjectBackupDescription: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackupDescription
    ),
  };

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation = {
    /** Get all conversation the authenticated user has created or has access to. */
    serviceGetConversations: this.requestFunctionFactory(
      descriptors.conversationServiceGetConversations
    ),
    /** Create a conversation. */
    serviceCreateConversation: this.requestFunctionFactory(
      descriptors.conversationServiceCreateConversation
    ),
    /** Get all message of the conversation. */
    serviceGetMessagesByConversation: this.requestFunctionFactory(
      descriptors.conversationServiceGetMessagesByConversation
    ),
    /** Send a new message in the conversation. */
    serviceCreateMessage: this.requestFunctionFactory(
      descriptors.conversationServiceCreateMessage
    ),
    /** Get all conversation categories. */
    serviceGetCategories: this.requestFunctionFactory(
      descriptors.conversationServiceGetCategories
    ),
    /** Get a specific conversation category. */
    serviceGetCategory: this.requestFunctionFactory(
      descriptors.conversationServiceGetCategory
    ),
    /** Get a support conversation. */
    serviceGetConversation: this.requestFunctionFactory(
      descriptors.conversationServiceGetConversation
    ),
    /** Update the basic properties of the conversation. */
    serviceUpdateConversation: this.requestFunctionFactory(
      descriptors.conversationServiceUpdateConversation
    ),
    /** Request a file upload token for the conversation. */
    serviceRequestFileUpload: this.requestFunctionFactory(
      descriptors.conversationServiceRequestFileUpload
    ),
    /** Update the status of a conversation. */
    serviceSetConversationStatus: this.requestFunctionFactory(
      descriptors.conversationServiceSetConversationStatus
    ),
    /** Update the content of the message */
    serviceUpdateMessage: this.requestFunctionFactory(
      descriptors.conversationServiceUpdateMessage
    ),
  };

  /** The cronjob API allows you to manage cronjobs within a project. */
  public readonly cronjob = {
    /** Abort a CronjobExecution. */
    abortExecution: this.requestFunctionFactory(
      descriptors.cronjobAbortExecution
    ),
    /** List Cronjobs belonging to a Project. */
    listCronjobs: this.requestFunctionFactory(descriptors.cronjobListCronjobs),
    /** Create a Cronjob. */
    createCronjob: this.requestFunctionFactory(
      descriptors.cronjobCreateCronjob
    ),
    /** List CronjobExecutions belonging to a Cronjob. */
    listExecutions: this.requestFunctionFactory(
      descriptors.cronjobListExecutions
    ),
    /** Trigger a Cronjob. */
    createExecution: this.requestFunctionFactory(
      descriptors.cronjobCreateExecution
    ),
    /** Get a Cronjob. */
    getCronjob: this.requestFunctionFactory(descriptors.cronjobGetCronjob),
    /** Delete a Cronjob. */
    deleteCronjob: this.requestFunctionFactory(
      descriptors.cronjobDeleteCronjob
    ),
    /** Update a Cronjob. */
    updateCronjob: this.requestFunctionFactory(
      descriptors.cronjobUpdateCronjob
    ),
    /** Get a CronjobExecution. */
    getExecution: this.requestFunctionFactory(descriptors.cronjobGetExecution),
    /** Update a Cronjob's app id. */
    updateCronjobAppId: this.requestFunctionFactory(
      descriptors.cronjobUpdateCronjobAppId
    ),
    /** Abort a CronjobExecution. */
    deprecatedCronjobAbortExecution: this.requestFunctionFactory(
      descriptors.deprecatedCronjobAbortExecution
    ),
    /** Update a Cronjob's app id. */
    deprecatedcronjobServiceCronjobAddAppid: this.requestFunctionFactory(
      descriptors.deprecatedcronjobServiceCronjobAddAppid
    ),
  };

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer = {
    /** Update a CustomerMembership. */
    changeCustomerMembership: this.requestFunctionFactory(
      descriptors.customerChangeCustomerMembership
    ),
    /** Get all customer categories. */
    listOfCustomerCategoriesDeprecated: this.requestFunctionFactory(
      descriptors.customerListOfCustomerCategoriesDeprecated
    ),
    /** Create a new customer category. */
    createCategoryDeprecated: this.requestFunctionFactory(
      descriptors.customerCreateCategoryDeprecated
    ),
    /** Get all customer categories. */
    listOfCustomerCategories: this.requestFunctionFactory(
      descriptors.customerListOfCustomerCategories
    ),
    /** Create a new customer category. */
    createCategory: this.requestFunctionFactory(
      descriptors.customerCreateCategory
    ),
    /** Create a CustomerInvite. */
    createCustomerInvite: this.requestFunctionFactory(
      descriptors.customerCreateCustomerInvite
    ),
    /** Get all customer profiles the authenticated user has access to. */
    listCustomers: this.requestFunctionFactory(
      descriptors.customerListCustomers
    ),
    /** Create a new customer profile. */
    createCustomer: this.requestFunctionFactory(
      descriptors.customerCreateCustomer
    ),
    /** Get all notes for the customer profile. */
    listOfNotes: this.requestFunctionFactory(descriptors.customerListOfNotes),
    /** Add a note to the customer profile. */
    createNote: this.requestFunctionFactory(descriptors.customerCreateNote),
    /** Get a customer category. */
    detailOfCustomerCategoryDeprecated: this.requestFunctionFactory(
      descriptors.customerDetailOfCustomerCategoryDeprecated
    ),
    /** Update a customer category. */
    updateCategoryDeprecated: this.requestFunctionFactory(
      descriptors.customerUpdateCategoryDeprecated
    ),
    /** Delete a customer category. */
    deleteCategoryDeprecated: this.requestFunctionFactory(
      descriptors.customerDeleteCategoryDeprecated
    ),
    /** Get a customer category. */
    getCustomerCategory: this.requestFunctionFactory(
      descriptors.customerGetCustomerCategory
    ),
    /** Update a customer category. */
    updateCategory: this.requestFunctionFactory(
      descriptors.customerUpdateCategory
    ),
    /** Delete a customer category. */
    deleteCategory: this.requestFunctionFactory(
      descriptors.customerDeleteCategory
    ),
    /** Get a customer profile. */
    getCustomer: this.requestFunctionFactory(descriptors.customerGetCustomer),
    /** Update a customer profile. */
    updateCustomer: this.requestFunctionFactory(
      descriptors.customerUpdateCustomer
    ),
    /** Delete a customer profile. */
    deleteCustomer: this.requestFunctionFactory(
      descriptors.customerDeleteCustomer
    ),
    /** Update a note of the customer profile. */
    updateNote: this.requestFunctionFactory(descriptors.customerUpdateNote),
    /** Delete a note from customer profile. */
    deleteNote: this.requestFunctionFactory(descriptors.customerDeleteNote),
    /** Check if the customer profile has a valid contract partner configured. */
    isCustomerLegallyCompetent: this.requestFunctionFactory(
      descriptors.customerIsCustomerLegallyCompetent
    ),
    /** List all invites for a Customer. */
    listInvitesForCustomer: this.requestFunctionFactory(
      descriptors.customerListInvitesForCustomer
    ),
    /** List all memberships belonging to a Customer. */
    listMembershipsForCustomer: this.requestFunctionFactory(
      descriptors.customerListMembershipsForCustomer
    ),
    /** Request a new avatar upload for the customer profile. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.customerRequestAvatarUpload
    ),
    /** Remove the avatar picture of the customer profile. */
    removeAvatar: this.requestFunctionFactory(descriptors.customerRemoveAvatar),
    /** Accept a CustomerInvite. */
    deprecatedCustomerAcceptCustomerInvite: this.requestFunctionFactory(
      descriptors.deprecatedCustomerAcceptCustomerInvite
    ),
    /** Accept a CustomerInvite via a token. */
    deprecatedCustomerAcceptCustomerInviteWithToken:
      this.requestFunctionFactory(
        descriptors.deprecatedCustomerAcceptCustomerInviteWithToken
      ),
    /** Update a CustomerMembership. */
    deprecatedCustomerChangeCustomerMembership: this.requestFunctionFactory(
      descriptors.deprecatedCustomerChangeCustomerMembership
    ),
    /** Delete a CustomerMembership. */
    deprecatedCustomerDeleteCustomerMembership: this.requestFunctionFactory(
      descriptors.deprecatedCustomerDeleteCustomerMembership
    ),
    /** Decline a CustomerInvite. */
    deprecatedCustomerDeclineCustomerInvite: this.requestFunctionFactory(
      descriptors.deprecatedCustomerDeclineCustomerInvite
    ),
    /** Get a CustomerInvite. */
    deprecatedCustomerGetCustomerInviteSpecific: this.requestFunctionFactory(
      descriptors.deprecatedCustomerGetCustomerInviteSpecific
    ),
    /** Get a CustomerMembership. */
    deprecatedCustomerGetCustomerMembershipSpecific:
      this.requestFunctionFactory(
        descriptors.deprecatedCustomerGetCustomerMembershipSpecific
      ),
    /** Leave a Customer. */
    deprecatedCustomerLeaveCustomer: this.requestFunctionFactory(
      descriptors.deprecatedCustomerLeaveCustomer
    ),
    /** List all CustomerMemberships for the executing user. */
    deprecatedCustomerListCustomerMembershipsForUser:
      this.requestFunctionFactory(
        descriptors.deprecatedCustomerListCustomerMembershipsForUser
      ),
    /** List all CustomerInvites for the executing user. */
    deprecatedCustomerListOwnCustomerInvites: this.requestFunctionFactory(
      descriptors.deprecatedCustomerListOwnCustomerInvites
    ),
    /** Resend the mail for a CustomerInvite. */
    deprecatedCustomerResendCustomerInviteMail: this.requestFunctionFactory(
      descriptors.deprecatedCustomerResendCustomerInviteMail
    ),
    /** Revoke a CustomerInvite. */
    deprecatedCustomerRevokeCustomerInvite: this.requestFunctionFactory(
      descriptors.deprecatedCustomerRevokeCustomerInvite
    ),
  };

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database = {
    /** List MySQLDatabases belonging to a Project. */
    listMysqlDatabases: this.requestFunctionFactory(
      descriptors.databaseListMysqlDatabases
    ),
    /** Create a MySQLDatabase with an optional MySQLUser */
    createMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlDatabase
    ),
    /** List MySQLUsers belonging to a database. */
    listMysqlUsers: this.requestFunctionFactory(
      descriptors.databaseListMysqlUsers
    ),
    /** Create a MySQLUser. */
    createMysqlUser: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlUser
    ),
    /** List RedisDatabases belonging to a project. */
    listRedisDatabases: this.requestFunctionFactory(
      descriptors.databaseListRedisDatabases
    ),
    /** Create a RedisDatabase. */
    createRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateRedisDatabase
    ),
    /** Get a MySQLDatabase. */
    getMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseGetMysqlDatabase
    ),
    /** Delete a MySQLDatabase. */
    deleteMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlDatabase
    ),
    /** Get a MySQLUser. */
    getMysqlUser: this.requestFunctionFactory(descriptors.databaseGetMysqlUser),
    /** Update a MySQLUser. */
    updateMysqlUser: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlUser
    ),
    /** Delete a MySQLUser. */
    deleteMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlUser
    ),
    /** Get a RedisDatabase. */
    getRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseGetRedisDatabase
    ),
    /** Delete a RedisDatabase. */
    deleteRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteRedisDatabase
    ),
    /** Disable a MySQLUser. */
    disableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDisableMysqlUser
    ),
    /** Enable a MySQLUser. */
    enableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseEnableMysqlUser
    ),
    /** Get a MySQLUser's PhpMyAdmin-URL. */
    getMysqlUserPhpMyAdminUrl: this.requestFunctionFactory(
      descriptors.databaseGetMysqlUserPhpMyAdminUrl
    ),
    /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
    listMysqlCharsets: this.requestFunctionFactory(
      descriptors.databaseListMysqlCharsets
    ),
    /** List available MySQLVersions. */
    listMysqlVersions: this.requestFunctionFactory(
      descriptors.databaseListMysqlVersions
    ),
    /** List available Redis versions. */
    listRedisVersions: this.requestFunctionFactory(
      descriptors.databaseListRedisVersions
    ),
    /** Update a MySQLDatabase's default character settings. */
    deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset
      ),
    /** Update a MySQLDatabase's default character settings. */
    updateMysqlDatabaseDefaultCharset: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlDatabaseDefaultCharset
    ),
    /** Update a MySQLDatabase's description. */
    deprecatedDatabaseUpdateMysqlDatabaseDescription:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateMysqlDatabaseDescription
      ),
    /** Update a MySQLDatabase's description. */
    updateMysqlDatabaseDescription: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlDatabaseDescription
    ),
    /** Update a MySQLUser's password. */
    updateMysqlUserPassword: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlUserPassword
    ),
    /** Update a RedisDatabase's description. */
    deprecatedDatabaseUpdateRedisDatabaseDescription:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateRedisDatabaseDescription
      ),
    /** Update a RedisDatabase's description. */
    updateRedisDatabaseDescription: this.requestFunctionFactory(
      descriptors.databaseUpdateRedisDatabaseDescription
    ),
    /** List MySQLDatabases belonging to a Project. */
    deprecatedDatabaseListMysqlDatabases: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseListMysqlDatabases
    ),
    /** Create a MySQLDatabase. */
    deprecatedDatabaseCreateMysqlDatabase: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseCreateMysqlDatabase
    ),
    /** Create a MySQLDatabase with User. */
    deprecatedDatabaseCreateMysqlDatabaseWithUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseCreateMysqlDatabaseWithUser
    ),
    /** List RedisDatabases belonging to a project. */
    deprecatedDatabaseListRedisDatabases: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseListRedisDatabases
    ),
    /** Create a RedisDatabase. */
    deprecatedDatabaseCreateRedisDatabase: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseCreateRedisDatabase
    ),
    /** Get a MySQLUser. */
    deprecatedDatabaseGetMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseGetMysqlUser
    ),
    /** Update a MySQLUser. */
    deprecatedDatabaseUpdateMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseUpdateMysqlUser
    ),
    /** Delete a MySQLUser. */
    deprecatedDatabaseDeleteMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseDeleteMysqlUser
    ),
    /** Disable a MySQLUser. */
    deprecatedDatabaseDisableMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseDisableMysqlUser
    ),
    /** Enable a MySQLUser. */
    deprecatedDatabaseEnableMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseEnableMysqlUser
    ),
    /** Get a MySQLUser's PhpMyAdmin-URL. */
    deprecatedDatabaseGetMysqlUserPhpMyAdminUrl: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseGetMysqlUserPhpMyAdminUrl
    ),
    /** List available MySQL character sets and collations for a MySQLVersion. */
    deprecatedDatabaseListMysqlCharsets: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseListMysqlCharsets
    ),
    /** List available MySQLVersions for a Project. */
    deprecatedDatabaseListMysqlVersions: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseListMysqlVersions
    ),
    /** List available Redis versions for a project. */
    deprecatedDatabaseListRedisVersions: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseListRedisVersions
    ),
    /** Update a MySQLUser's password. */
    deprecatedDatabaseSetMysqlUserPassword: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseSetMysqlUserPassword
    ),
    /** Update a MySQLUser's password. */
    deprecatedDatabaseUpdateMysqlUserPassword: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseUpdateMysqlUserPassword
    ),
  };

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project = {
    /** Request a PlacementGroup avatar upload. */
    deprecatedPlacementGroupPlacementgroupAvatarRequestUpload:
      this.requestFunctionFactory(
        descriptors.deprecatedPlacementGroupPlacementgroupAvatarRequestUpload
      ),
    /** Delete a PlacementGroup's avatar. */
    deprecatedPlacementGroupPlacementgroupAvatarRemove:
      this.requestFunctionFactory(
        descriptors.deprecatedPlacementGroupPlacementgroupAvatarRemove
      ),
    /** Get a PlacementGroup. */
    deprecatedPlacementGroupPlacementgroupDetails: this.requestFunctionFactory(
      descriptors.deprecatedPlacementGroupPlacementgroupDetails
    ),
    /** List PlacementGroups for an Organization or User. */
    deprecatedPlacementGroupPlacementgroupList: this.requestFunctionFactory(
      descriptors.deprecatedPlacementGroupPlacementgroupList
    ),
    /** Update a PlacementGroup's description. */
    deprecatedPlacementGroupPlacementgroupUpdateDescription:
      this.requestFunctionFactory(
        descriptors.deprecatedPlacementGroupPlacementgroupUpdateDescription
      ),
    /** Accept a ProjectInvite. */
    deprecatedProjectAcceptProjectInvite: this.requestFunctionFactory(
      descriptors.deprecatedProjectAcceptProjectInvite
    ),
    /** Accept a ProjectInvite via a token. */
    deprecatedProjectAcceptProjectInviteWithToken: this.requestFunctionFactory(
      descriptors.deprecatedProjectAcceptProjectInviteWithToken
    ),
    /** Update a ProjectMembership. */
    deprecatedProjectChangeProjectMembership: this.requestFunctionFactory(
      descriptors.deprecatedProjectChangeProjectMembership
    ),
    /** Delete a ProjectMembership. */
    deprecatedProjectDeleteProjectMembership: this.requestFunctionFactory(
      descriptors.deprecatedProjectDeleteProjectMembership
    ),
    /** Create a Project belonging to a PlacementGroup. */
    deprecatedProjectCreateSubproject: this.requestFunctionFactory(
      descriptors.deprecatedProjectCreateSubproject
    ),
    /** Decline a ProjectInvite. */
    deprecatedProjectDeclineProjectInvite: this.requestFunctionFactory(
      descriptors.deprecatedProjectDeclineProjectInvite
    ),
    /** Get a ProjectInvite. */
    deprecatedProjectGetProjectInviteSpecific: this.requestFunctionFactory(
      descriptors.deprecatedProjectGetProjectInviteSpecific
    ),
    /** Get a ProjectMembership */
    deprecatedProjectGetProjectMembershipSpecific: this.requestFunctionFactory(
      descriptors.deprecatedProjectGetProjectMembershipSpecific
    ),
    /** Leave a Project. */
    deprecatedProjectLeaveProject: this.requestFunctionFactory(
      descriptors.deprecatedProjectLeaveProject
    ),
    /** List all ProjectInvites for the executing user. */
    deprecatedProjectListOwnProjectInvites: this.requestFunctionFactory(
      descriptors.deprecatedProjectListOwnProjectInvites
    ),
    /** List ProjectMemberships belonging to the executing user. */
    deprecatedProjectListProjectMembershipsForUser: this.requestFunctionFactory(
      descriptors.deprecatedProjectListProjectMembershipsForUser
    ),
    /** Resend the mail for a ProjectInvite. */
    deprecatedProjectResendProjectInviteMail: this.requestFunctionFactory(
      descriptors.deprecatedProjectResendProjectInviteMail
    ),
    /** Revoke a ProjectInvite. */
    deprecatedProjectRevokeProjectInvite: this.requestFunctionFactory(
      descriptors.deprecatedProjectRevokeProjectInvite
    ),
    /** Update a Project's description. */
    deprecatedProjectUpdateDescription: this.requestFunctionFactory(
      descriptors.deprecatedProjectUpdateDescription
    ),
    /** Update a Project's description. */
    updateProjectDescription: this.requestFunctionFactory(
      descriptors.projectUpdateProjectDescription
    ),
    /** Update a ProjectMembership. */
    changeProjectMembership: this.requestFunctionFactory(
      descriptors.projectChangeProjectMembership
    ),
    /** Create a ProjectInvite. */
    createProjectInvite: this.requestFunctionFactory(
      descriptors.projectCreateProjectInvite
    ),
    /** Create a Project belonging to a Server. */
    createProject: this.requestFunctionFactory(
      descriptors.projectCreateProject
    ),
    /** Request a Project avatar upload. */
    requestProjectAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestProjectAvatarUpload
    ),
    /** Delete a Project's avatar. */
    deleteProjectAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteProjectAvatar
    ),
    /** Delete a Project. */
    deleteProject: this.requestFunctionFactory(
      descriptors.projectDeleteProject
    ),
    /** Request a Server avatar upload. */
    requestServerAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestServerAvatarUpload
    ),
    /** Delete a Server's avatar. */
    deleteServerAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteServerAvatar
    ),
    /** Get the executing user's membership in a Project. */
    getOwnMembershipForProject: this.requestFunctionFactory(
      descriptors.projectGetOwnMembershipForProject
    ),
    /** Get a Project. */
    getProject: this.requestFunctionFactory(descriptors.projectGetProject),
    /** Get a Server. */
    getServer: this.requestFunctionFactory(descriptors.projectGetServer),
    /** List all invites belonging to a Project. */
    listInvitesForProject: this.requestFunctionFactory(
      descriptors.projectListInvitesForProject
    ),
    /** List all memberships for a Project. */
    listMembershipsForProject: this.requestFunctionFactory(
      descriptors.projectListMembershipsForProject
    ),
    /** List Project's for an Organization or Server. */
    listProjects: this.requestFunctionFactory(descriptors.projectListProjects),
    /** List Servers for an Organization or User. */
    listServers: this.requestFunctionFactory(descriptors.projectListServers),
    /** Update a Servers's description. */
    updateServerDescription: this.requestFunctionFactory(
      descriptors.projectUpdateServerDescription
    ),
  };

  /** The domain API allows you to manage your domains, DNS records and ingress resources. */
  public readonly domain = {
    /** updates a-records for a specific zone */
    dnsRecordAsetCustom: this.requestFunctionFactory(
      descriptors.dnsRecordAsetCustom
    ),
    /** set a-records managed by ingress for a specific zone */
    dnsRecordAsetManagedByIngress: this.requestFunctionFactory(
      descriptors.dnsRecordAsetManagedByIngress
    ),
    /** updates cname-record for a specific zone */
    dnsRecordCnameSet: this.requestFunctionFactory(
      descriptors.dnsRecordCnameSet
    ),
    /** updates mx-records for a specific zone */
    dnsRecordMxSetCustom: this.requestFunctionFactory(
      descriptors.dnsRecordMxSetCustom
    ),
    /** sets mx-records to managed for a specific zone */
    dnsRecordMxSetManaged: this.requestFunctionFactory(
      descriptors.dnsRecordMxSetManaged
    ),
    /** updates txt-records for a specific zone */
    dnsRecordTxtSet: this.requestFunctionFactory(descriptors.dnsRecordTxtSet),
    /** gets a specific zone */
    dnsZoneGetSpecific: this.requestFunctionFactory(
      descriptors.dnsZoneGetSpecific
    ),
    /** gets all dns zones by project id */
    dnsZonesForProject: this.requestFunctionFactory(
      descriptors.dnsZonesForProject
    ),
    /** Abort a declare process. */
    serviceAbortDeclareProcess: this.requestFunctionFactory(
      descriptors.domainServiceAbortDeclareProcess
    ),
    /** Change the ownerC of a domain. */
    serviceChangeOwnercOfDomain: this.requestFunctionFactory(
      descriptors.domainServiceChangeOwnercOfDomain
    ),
    /** Change the Project relation of a Domain. */
    serviceChangeProjectOfDomain: this.requestFunctionFactory(
      descriptors.domainServiceChangeProjectOfDomain
    ),
    /** Check if a Domain is available to register. */
    serviceCheckDomainAvailability: this.requestFunctionFactory(
      descriptors.domainServiceCheckDomainAvailability
    ),
    /** Create an AuthCode for a Domains transfer out process. */
    serviceCreateAuthcodeForDomain: this.requestFunctionFactory(
      descriptors.domainServiceCreateAuthcodeForDomain
    ),
    /** Create an AuthCode2. */
    serviceCreateAuthcode2ForDomain: this.requestFunctionFactory(
      descriptors.domainServiceCreateAuthcode2ForDomain
    ),
    /** Change all nameservers of a Domain. */
    serviceDeclareNameservers: this.requestFunctionFactory(
      descriptors.domainServiceDeclareNameservers
    ),
    /** Update an AuthCode. */
    serviceDeclareProcessChangeAuthcode: this.requestFunctionFactory(
      descriptors.domainServiceDeclareProcessChangeAuthcode
    ),
    /** Update a Domain's OwnerC handle. */
    serviceDeclareProcessChangeHandles: this.requestFunctionFactory(
      descriptors.domainServiceDeclareProcessChangeHandles
    ),
    /** Get a Domain. */
    serviceGetDomain: this.requestFunctionFactory(
      descriptors.domainServiceGetDomain
    ),
    /** Delete a Domain. */
    serviceDeleteDomain: this.requestFunctionFactory(
      descriptors.domainServiceDeleteDomain
    ),
    /** Get a HandleSchema. */
    serviceGetHandleFields: this.requestFunctionFactory(
      descriptors.domainServiceGetHandleFields
    ),
    /** Get a domain ownership. */
    serviceGetSpecificDomainOwnership: this.requestFunctionFactory(
      descriptors.domainServiceGetSpecificDomainOwnership
    ),
    /** Verify a domain ownership. */
    serviceVerifyDomainOwnership: this.requestFunctionFactory(
      descriptors.domainServiceVerifyDomainOwnership
    ),
    /** Get a toplevel domain. */
    serviceGetToplevelDomain: this.requestFunctionFactory(
      descriptors.domainServiceGetToplevelDomain
    ),
    /** List all domain ownerships of a project. */
    serviceListDomainOwnerships: this.requestFunctionFactory(
      descriptors.domainServiceListDomainOwnerships
    ),
    /** List Domains belonging to a Project. */
    serviceListDomains: this.requestFunctionFactory(
      descriptors.domainServiceListDomains
    ),
    /** List all supported toplevel domains. */
    serviceListToplevelDomains: this.requestFunctionFactory(
      descriptors.domainServiceListToplevelDomains
    ),
    /** Resend a domain email. */
    serviceResendDomainEmail: this.requestFunctionFactory(
      descriptors.domainServiceResendDomainEmail
    ),
    /** Create an Ingress. */
    ingressServiceCreate: this.requestFunctionFactory(
      descriptors.ingressServiceCreate
    ),
    /** Get an Ingress. */
    ingressServiceGetSpecific: this.requestFunctionFactory(
      descriptors.ingressServiceGetSpecific
    ),
    /** Delete an Ingress. */
    ingressServiceDelete: this.requestFunctionFactory(
      descriptors.ingressServiceDelete
    ),
    /** List Ingresses belonging to a project. */
    ingressServiceList: this.requestFunctionFactory(
      descriptors.ingressServiceList
    ),
    /** Update an Ingresses paths. */
    ingressServicePaths: this.requestFunctionFactory(
      descriptors.ingressServicePaths
    ),
    /** Update an Ingresses tls settings. */
    ingressServiceTls: this.requestFunctionFactory(
      descriptors.ingressServiceTls
    ),
  };

  /** The file API allows you to manage your files, for example for conversations attachments and avatar uploads. */
  public readonly file = {
    /** Create a File. */
    createFile: this.requestFunctionFactory(descriptors.fileCreateFile),
    /** Get a File's meta. */
    getFileMeta: this.requestFunctionFactory(descriptors.fileGetFileMeta),
    /** Get a Token's upload rules. */
    getFileTokenRules: this.requestFunctionFactory(
      descriptors.fileGetFileTokenRules
    ),
    /** Get a Type's upload rules. */
    getFileTypeRules: this.requestFunctionFactory(
      descriptors.fileGetFileTypeRules
    ),
    /** Get a File. */
    getFile: this.requestFunctionFactory(descriptors.fileGetFile),
  };

  /** The mail API allows you to manage your mail accounts. */
  public readonly mail = {
    /** Get all deliveryboxes by project ID */
    serviceDeliveryboxList: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxList
    ),
    /** Create a new deliverybox */
    serviceDeliveryboxCreate: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxCreate
    ),
    /** Get a specific deliverybox */
    serviceDeliveryboxGetSpecific: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxGetSpecific
    ),
    /** Delete a specific deliverybox */
    serviceDeliveryboxDelete: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxDelete
    ),
    /** Update the description of an deliverybox */
    serviceDeliveryboxUpdateDescription: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxUpdateDescription
    ),
    /** Update the password for a specific deliverybox */
    serviceDeliveryboxUpdatePassword: this.requestFunctionFactory(
      descriptors.mailServiceDeliveryboxUpdatePassword
    ),
    /** Get all mail addresses for a project ID */
    serviceMailaddressList: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressList
    ),
    /** Create a new mail address */
    serviceMailaddressCreate: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressCreate
    ),
    /** Get a specific mail address */
    serviceMailaddressGetSpecific: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressGetSpecific
    ),
    /** Delete a specific mail address */
    serviceMailaddressDelete: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressDelete
    ),
    /** Update mail-address */
    serviceMailaddressUpdateAddress: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateAddress
    ),
    /** Update the auto responder of a mail address */
    serviceMailaddressUpdateAutoresponder: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateAutoresponder
    ),
    /** Enable or disable the catchAll flag for a specific mail address */
    serviceMailaddressUpdateCatchall: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateCatchall
    ),
    /** Update the addresses an email is forwarded to */
    serviceMailaddressUpdateForwardaddresses: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateForwardaddresses
    ),
    /** Update the password for a specific mail address */
    serviceMailaddressUpdatePassword: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdatePassword
    ),
    /** Update the quota of a mailbox */
    serviceMailaddressUpdateQuota: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateQuota
    ),
    /** Update the spamprotection of a mailbox */
    serviceMailaddressUpdateSpamprotection: this.requestFunctionFactory(
      descriptors.mailServiceMailaddressUpdateSpamprotection
    ),
    /** Get settings for a given project ID */
    serviceProjectsettingGetSpecific: this.requestFunctionFactory(
      descriptors.mailServiceProjectsettingGetSpecific
    ),
    /** Update blacklist for a given project ID */
    serviceProjectsettingUpdateBlacklist: this.requestFunctionFactory(
      descriptors.mailServiceProjectsettingUpdateBlacklist
    ),
    /** Update whitelist for a given project ID */
    serviceProjectsettingUpdateWhitelist: this.requestFunctionFactory(
      descriptors.mailServiceProjectsettingUpdateWhitelist
    ),
  };

  /** The membership API allows you to manage memberships and invites. */
  public readonly membership = {
    /** Accept an invite. */
    acceptInvite: this.requestFunctionFactory(
      descriptors.membershipAcceptInvite
    ),
    /** Decline an invite. */
    declineInvite: this.requestFunctionFactory(
      descriptors.membershipDeclineInvite
    ),
    /** Get a membership */
    getMembership: this.requestFunctionFactory(
      descriptors.membershipGetMembership
    ),
    /** Delete a membership. */
    deleteMembership: this.requestFunctionFactory(
      descriptors.membershipDeleteMembership
    ),
    /** Get an invite. */
    getInvite: this.requestFunctionFactory(descriptors.membershipGetInvite),
    /** Leave a membership. */
    leaveMembership: this.requestFunctionFactory(
      descriptors.membershipLeaveMembership
    ),
    /** List invites for the user. */
    listInvites: this.requestFunctionFactory(descriptors.membershipListInvites),
    /** List all memberships for the user. */
    listMemberships: this.requestFunctionFactory(
      descriptors.membershipListMemberships
    ),
    /** Resend the mail for an invite. */
    resendInviteMail: this.requestFunctionFactory(
      descriptors.membershipResendInviteMail
    ),
    /** Revoke an invite. */
    revokeInvite: this.requestFunctionFactory(
      descriptors.membershipRevokeInvite
    ),
  };

  /** The notification API allows you to manage your notifications. */
  public readonly notification = {
    /** getting the subscription status of the subscription */
    newsletterGetInfo: this.requestFunctionFactory(
      descriptors.newsletterGetInfo
    ),
    /** unsubscribe a user from the mStudio newsletter */
    newsletterUnsubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterUnsubscribeUser
    ),
    /** subscribe a user to the mStudio newsletter */
    newsletterSubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterSubscribeUser
    ),
    /** Get the counts for unread notifications of the user. */
    scountUnreadNotifications: this.requestFunctionFactory(
      descriptors.notificationsCountUnreadNotifications
    ),
    /** List all unread notifications */
    slistNotifications: this.requestFunctionFactory(
      descriptors.notificationsListNotifications
    ),
    /** Mark all notifications as read. */
    sreadAllNotifications: this.requestFunctionFactory(
      descriptors.notificationsReadAllNotifications
    ),
    /** Mark notification as read. */
    sreadNotification: this.requestFunctionFactory(
      descriptors.notificationsReadNotification
    ),
  };

  /** The filesystem API allows you to directly access the filesystem of your project. */
  public readonly projectFileSystem = {
    /** List the directories of a Project. */
    getDirectories: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDirectories
    ),
    /** Get a Project directory filesystem usage. */
    getDiskUsage: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDiskUsage
    ),
    /** Get a Project file's content. */
    getFileContent: this.requestFunctionFactory(
      descriptors.projectFileSystemGetFileContent
    ),
    /** Get a Project's file/filesystem authorization token. */
    getJwt: this.requestFunctionFactory(descriptors.projectFileSystemGetJwt),
    /** Get a Project file's information. */
    listFiles: this.requestFunctionFactory(
      descriptors.projectFileSystemListFiles
    ),
  };

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user = {
    /** List all ApiTokens of the user */
    signupApiApiTokenList: this.requestFunctionFactory(
      descriptors.signupApiApiTokenList
    ),
    /** Store a new ApiToken */
    signupApiApiTokenCreate: this.requestFunctionFactory(
      descriptors.signupApiApiTokenCreate
    ),
    /** Get a specific ApiToken */
    signupApiApiTokenGet: this.requestFunctionFactory(
      descriptors.signupApiApiTokenGet
    ),
    /** Update an existing `ApiToken` */
    signupApiApiTokenEdit: this.requestFunctionFactory(
      descriptors.signupApiApiTokenEdit
    ),
    /** Deletes an ApiToken */
    signupApiApiTokenDelete: this.requestFunctionFactory(
      descriptors.signupApiApiTokenDelete
    ),
    /** Authenticate yourself to get an access token. */
    signupApiAuthenticate: this.requestFunctionFactory(
      descriptors.signupApiAuthenticate
    ),
    /** Authenticate yourself against your legacy account to migrate it with the '/registration'-Route */
    signupApiAuthenticateLegacy: this.requestFunctionFactory(
      descriptors.signupApiAuthenticateLegacy
    ),
    /** Validate your second factor. */
    signupApiAuthenticateMfa: this.requestFunctionFactory(
      descriptors.signupApiAuthenticateMfa
    ),
    /** Request a new avatar upload */
    signupApiAvatarRequestUpload: this.requestFunctionFactory(
      descriptors.signupApiAvatarRequestUpload
    ),
    /** Remove avatar */
    signupApiAvatarRemove: this.requestFunctionFactory(
      descriptors.signupApiAvatarRemove
    ),
    /** Get your primary verified email address */
    signupApiEmailGet: this.requestFunctionFactory(
      descriptors.signupApiEmailGet
    ),
    /** Change your email */
    signupApiEmailChange: this.requestFunctionFactory(
      descriptors.signupApiEmailChange
    ),
    /** Resend the email address verification email */
    signupApiEmailResend: this.requestFunctionFactory(
      descriptors.signupApiEmailResend
    ),
    /** Verify an added email address */
    signupApiEmailVerify: this.requestFunctionFactory(
      descriptors.signupApiEmailVerify
    ),
    /** Terminate session and invalidate access token */
    signupApiLogout: this.requestFunctionFactory(descriptors.signupApiLogout),
    /** Confirm Multi Factor Authentication */
    signupApiMfaConfirm: this.requestFunctionFactory(
      descriptors.signupApiMfaConfirm
    ),
    /** Get your current multi factor auth status */
    signupApiMfaGetStatus: this.requestFunctionFactory(
      descriptors.signupApiMfaGetStatus
    ),
    /** Initialize Multi Factor Authentication. If successfull, it needs to be confirmed, before usage of mfa. */
    signupApiMfaInit: this.requestFunctionFactory(descriptors.signupApiMfaInit),
    /** Disable Multi Factor Authentication. */
    signupApiMfaDisable: this.requestFunctionFactory(
      descriptors.signupApiMfaDisable
    ),
    /** Get timestamp of your latest password change */
    signupApiPasswordGetUpdatedAt: this.requestFunctionFactory(
      descriptors.signupApiPasswordGetUpdatedAt
    ),
    /** Change your password */
    signupApiPasswordChange: this.requestFunctionFactory(
      descriptors.signupApiPasswordChange
    ),
    /** Confirm password reset */
    signupApiPasswordResetConfirm: this.requestFunctionFactory(
      descriptors.signupApiPasswordResetConfirm
    ),
    /** Initialize password reset process */
    signupApiPasswordResetInit: this.requestFunctionFactory(
      descriptors.signupApiPasswordResetInit
    ),
    /** Get current phone number */
    signupApiPhoneNumberGet: this.requestFunctionFactory(
      descriptors.signupApiPhoneNumberGet
    ),
    /** Initialize phone number process */
    signupApiPhoneNumberInitProcess: this.requestFunctionFactory(
      descriptors.signupApiPhoneNumberInitProcess
    ),
    /** Deletes phone number */
    signupApiPhoneNumberDelete: this.requestFunctionFactory(
      descriptors.signupApiPhoneNumberDelete
    ),
    /** Initialize phone number process */
    signupApiPhoneNumberVerify: this.requestFunctionFactory(
      descriptors.signupApiPhoneNumberVerify
    ),
    /** Get your profile information */
    signupApiProfileGet: this.requestFunctionFactory(
      descriptors.signupApiProfileGet
    ),
    /** Change your profile information */
    signupApiProfileChange: this.requestFunctionFactory(
      descriptors.signupApiProfileChange
    ),
    /** Delete your profile and all your personal data */
    signupApiProfileDelete: this.requestFunctionFactory(
      descriptors.signupApiProfileDelete
    ),
    /** Reset Recovery-Codes for MFA */
    signupApiRecoverycodesReset: this.requestFunctionFactory(
      descriptors.signupApiRecoverycodesReset
    ),
    /** Register with email and password.
     */
    signupApiRegister: this.requestFunctionFactory(
      descriptors.signupApiRegister
    ),
    /** Verify your registration */
    signupApiRegistrationVerify: this.requestFunctionFactory(
      descriptors.signupApiRegistrationVerify
    ),
    /** Get a specific session of an authorized user */
    signupApiSessionGet: this.requestFunctionFactory(
      descriptors.signupApiSessionGet
    ),
    /** Terminate a specific session of an authorized user */
    signupApiSessionTerminate: this.requestFunctionFactory(
      descriptors.signupApiSessionTerminate
    ),
    /** List all active sessions of authorized user */
    signupApiSessionsList: this.requestFunctionFactory(
      descriptors.signupApiSessionsList
    ),
    /** Terminate all session of an authorized user, except his current session */
    signupApiSessionsTerminateAll: this.requestFunctionFactory(
      descriptors.signupApiSessionsTerminateAll
    ),
    /** Get your stored ssh keys */
    signupApiSshList: this.requestFunctionFactory(descriptors.signupApiSshList),
    /** Store a new SSH key */
    signupApiSshCreate: this.requestFunctionFactory(
      descriptors.signupApiSshCreate
    ),
    /** Get your stored ssh keys */
    signupApiSshGet: this.requestFunctionFactory(descriptors.signupApiSshGet),
    /** Edit an existing SSH key */
    signupApiSshEdit: this.requestFunctionFactory(descriptors.signupApiSshEdit),
    /** Remove an existing SSH Key */
    signupApiSshDelete: this.requestFunctionFactory(
      descriptors.signupApiSshDelete
    ),
    /** request a support code */
    signupApiSupportCodeRequest: this.requestFunctionFactory(
      descriptors.signupApiSupportCodeRequest
    ),
    /** Check, if the current access token is valid */
    signupApiTokenCheck: this.requestFunctionFactory(
      descriptors.signupApiTokenCheck
    ),
    /** Request a new avatar upload */
    serviceAvatarRequestUpload: this.requestFunctionFactory(
      descriptors.userServiceAvatarRequestUpload
    ),
    /** Remove avatar */
    serviceAvatarRemove: this.requestFunctionFactory(
      descriptors.userServiceAvatarRemove
    ),
    /** Returns your given feedback. */
    serviceFeedbackList: this.requestFunctionFactory(
      descriptors.userServiceFeedbackList
    ),
    /**  */
    serviceFeedbackCreate: this.requestFunctionFactory(
      descriptors.userServiceFeedbackCreate
    ),
    /** create a new issue */
    serviceIssueNew: this.requestFunctionFactory(
      descriptors.userServiceIssueNew
    ),
    /** Get profile information for the specified user */
    serviceUserGet: this.requestFunctionFactory(descriptors.userServiceUserGet),
    /** Change your personal information */
    servicePersonalInformationUpdate: this.requestFunctionFactory(
      descriptors.userServicePersonalInformationUpdate
    ),
    /** Get personalized settings for the specified user */
    servicePersonalizedSettingsGet: this.requestFunctionFactory(
      descriptors.userServicePersonalizedSettingsGet
    ),
    /** update personalized settings */
    servicePersonalizedSettingsUpdate: this.requestFunctionFactory(
      descriptors.userServicePersonalizedSettingsUpdate
    ),
    /** Add phone number and init verification process */
    servicePhoneNumberAdd: this.requestFunctionFactory(
      descriptors.userServicePhoneNumberAdd
    ),
    /** Deletes phone number */
    servicePhoneNumberRemove: this.requestFunctionFactory(
      descriptors.userServicePhoneNumberRemove
    ),
    /** Verify phone number */
    servicePhoneNumberVerify: this.requestFunctionFactory(
      descriptors.userServicePhoneNumberVerify
    ),
    /** Get profile information for the specified user */
    serviceUserGetOwn: this.requestFunctionFactory(
      descriptors.userServiceUserGetOwn
    ),
  };

  /** The SSH User API allows you to manage your SSH users within a project. */
  public readonly sshUser = {
    /** Get all SFTPUsers for a Project. */
    sshuserServiceListSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceListSftpUser
    ),
    /** Create an SFTPUser for a Project. */
    sshuserServiceCreateSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceCreateSftpUser
    ),
    /** Get all SSHUsers for a Project. */
    sshuserServiceListSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceListSshUser
    ),
    /** Create an SSHUser for a Project. */
    sshuserServiceCreateSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceCreateSshUser
    ),
    /** Get an SFTPUser. */
    sshuserServiceGetSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceGetSftpUser
    ),
    /** Delete an SFTPUser. */
    sshuserServiceRemoveSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceRemoveSftpUser
    ),
    /** Update an SFTPUser. */
    sshuserServicePatchSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServicePatchSftpUser
    ),
    /** Get an SSHUser. */
    sshuserServiceGetSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceGetSshUser
    ),
    /** Delete an SSHUser. */
    sshuserServiceRemoveSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceRemoveSshUser
    ),
    /** Update an SSHUser. */
    sshuserServicePatchSshUser: this.requestFunctionFactory(
      descriptors.sshuserServicePatchSshUser
    ),
    /** Update access-level of an SFTPUser */
    sshuserServiceUpdateAccessLevelOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateAccessLevelOfSftpUser
    ),
    /** Activate or deactivate an SFTPUser. */
    sshuserServiceUpdateActiveOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateActiveOfSftpUser
    ),
    /** Activate or deactivate an SSHUser. */
    sshuserServiceUpdateActiveOfSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateActiveOfSshUser
    ),
    /** Update the description of an SFTPUser. */
    sshuserServiceUpdateDescriptionOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateDescriptionOfSftpUser
    ),
    /** Update the description of an SSHUser. */
    sshuserServiceUpdateDescriptionOfSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateDescriptionOfSshUser
    ),
    /** Update the directories of an SFTPUser. */
    sshuserServiceUpdateDirectoriesOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateDirectoriesOfSftpUser
    ),
    /** Update expire-date of an SFTPUser. */
    sshuserServiceUpdateExpiryOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateExpiryOfSftpUser
    ),
    /** Update the expire-date of an SSHUser. */
    sshuserServiceUpdateExpiryOfSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdateExpiryOfSshUser
    ),
    /** Update the password of an SFTPUser. */
    sshuserServiceUpdatePasswordOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdatePasswordOfSftpUser
    ),
    /** Update the password of an SSHUser. */
    sshuserServiceUpdatePasswordOfSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdatePasswordOfSshUser
    ),
    /** Update public-keys of an SFTPUser. */
    sshuserServiceUpdatePublicKeysOfSftpUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdatePublicKeysOfSftpUser
    ),
    /** Update the public-keys of an SSHUser. */
    sshuserServiceUpdatePublicKeysOfSshUser: this.requestFunctionFactory(
      descriptors.sshuserServiceUpdatePublicKeysOfSshUser
    ),
  };

  /** The varnish API allows you to manage your varnish caches. */
  public readonly varnish = {
    /** List all available validators. */
    serviceListValidators: this.requestFunctionFactory(
      descriptors.varnishServiceListValidators
    ),
    /** validate a set of config files with a named validator against a specific version */
    serviceValidate: this.requestFunctionFactory(
      descriptors.varnishServiceValidate
    ),
  };
}

export default MittwaldAPIV2Client;
