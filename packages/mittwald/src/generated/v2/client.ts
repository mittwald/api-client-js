/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import * as descriptors from "./descriptors.js";
import { ApiClientBase } from "@mittwald/api-client-commons";

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
    /** get all update candidates for a specific `AppVersion` */
    listUpdateCandidatesForAppversion: this.requestFunctionFactory(
      descriptors.appListUpdateCandidatesForAppversion
    ),
    /** reconcile detected apps to appInstallations of a project */
    reconcileDetectedApps: this.requestFunctionFactory(
      descriptors.appReconcileDetectedApps
    ),
    /** request a copy of an `AppInstallation` */
    requestAppinstallationCopy: this.requestFunctionFactory(
      descriptors.appRequestAppinstallationCopy
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
  };

  /** The article API allows you to read article information. */
  public readonly article = {
    /** Get an Article. */
    getArticle: this.requestFunctionFactory(descriptors.articleGetArticle),
    /** List Articles. */
    listArticles: this.requestFunctionFactory(descriptors.articleListArticles),
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

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract = {
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
    /** Return the Contract for the given Project. */
    getDetailOfContractByProject: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByProject
    ),
    /** Return the Contract for the given Server. */
    getDetailOfContractByServer: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByServer
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
    /** Create an Order. */
    orderCreateOrder: this.requestFunctionFactory(descriptors.orderCreateOrder),
    /** Create TariffChange Order. */
    orderCreateTariffChange: this.requestFunctionFactory(
      descriptors.orderCreateTariffChange
    ),
    /** Get Order for Customer. */
    orderGetOrder: this.requestFunctionFactory(descriptors.orderGetOrder),
    /** Get list of Orders of a Customer. */
    orderListCustomerOrders: this.requestFunctionFactory(
      descriptors.orderListCustomerOrders
    ),
    /** Get list of Orders of a Project. */
    orderListProjectOrders: this.requestFunctionFactory(
      descriptors.orderListProjectOrders
    ),
    /** Preview Order. */
    orderPreviewOrder: this.requestFunctionFactory(
      descriptors.orderPreviewOrder
    ),
    /** Preview TariffChange. */
    orderPreviewTariffChange: this.requestFunctionFactory(
      descriptors.orderPreviewTariffChange
    ),
  };

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation = {
    /** Get all conversation the authenticated user has created or has access to. */
    listConversations: this.requestFunctionFactory(
      descriptors.conversationListConversations
    ),
    /** Create a conversation. */
    createConversation: this.requestFunctionFactory(
      descriptors.conversationCreateConversation
    ),
    /** Get all message of the conversation. */
    listMessagesByConversation: this.requestFunctionFactory(
      descriptors.conversationListMessagesByConversation
    ),
    /** Send a new message in the conversation. */
    createMessage: this.requestFunctionFactory(
      descriptors.conversationCreateMessage
    ),
    /** Get a specific conversation category. */
    getCategory: this.requestFunctionFactory(
      descriptors.conversationGetCategory
    ),
    /** Get a support conversation. */
    getConversation: this.requestFunctionFactory(
      descriptors.conversationGetConversation
    ),
    /** Update the basic properties of the conversation. */
    updateConversation: this.requestFunctionFactory(
      descriptors.conversationUpdateConversation
    ),
    /** Get all conversation categories. */
    listCategories: this.requestFunctionFactory(
      descriptors.conversationListCategories
    ),
    /** Request a file upload token for the conversation. */
    requestFileUpload: this.requestFunctionFactory(
      descriptors.conversationRequestFileUpload
    ),
    /** Update the status of a conversation. */
    setConversationStatus: this.requestFunctionFactory(
      descriptors.conversationSetConversationStatus
    ),
    /** Update the content of the message */
    updateMessage: this.requestFunctionFactory(
      descriptors.conversationUpdateMessage
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
  };

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer = {
    /** Accept a CustomerInvite. */
    acceptCustomerInvite: this.requestFunctionFactory(
      descriptors.customerAcceptCustomerInvite
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
    /** Decline a CustomerInvite. */
    declineCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeclineCustomerInvite
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
    /** Get a CustomerInvite. */
    getCustomerInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerInvite
    ),
    /** Delete a CustomerInvite. */
    deleteCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerInvite
    ),
    /** Get a CustomerMembership. */
    getCustomerMembership: this.requestFunctionFactory(
      descriptors.customerGetCustomerMembership
    ),
    /** Delete a CustomerMembership. */
    deleteCustomerMembership: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerMembership
    ),
    /** Update a CustomerMembership. */
    updateCustomerMembership: this.requestFunctionFactory(
      descriptors.customerUpdateCustomerMembership
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
    /** Get a CustomerInvite by token. */
    getCustomerTokenInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerTokenInvite
    ),
    /** Check if the customer profile has a valid contract partner configured. */
    isCustomerLegallyCompetent: this.requestFunctionFactory(
      descriptors.customerIsCustomerLegallyCompetent
    ),
    /** Leave a Customer. */
    leaveCustomer: this.requestFunctionFactory(
      descriptors.customerLeaveCustomer
    ),
    /** List all CustomerInvites for the executing user. */
    listCustomerInvites: this.requestFunctionFactory(
      descriptors.customerListCustomerInvites
    ),
    /** List all CustomerMemberships for the executing user. */
    listCustomerMemberships: this.requestFunctionFactory(
      descriptors.customerListCustomerMemberships
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
    /** Resend the mail for a CustomerInvite. */
    resendCustomerInviteMail: this.requestFunctionFactory(
      descriptors.customerResendCustomerInviteMail
    ),
  };

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database = {
    /** List MySQLDatabases belonging to a Project. */
    listMysqlDatabases: this.requestFunctionFactory(
      descriptors.databaseListMysqlDatabases
    ),
    /** Create a MySQLDatabase with a MySQLUser. */
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
    updateMysqlDatabaseDefaultCharset: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlDatabaseDefaultCharset
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
    updateRedisDatabaseDescription: this.requestFunctionFactory(
      descriptors.databaseUpdateRedisDatabaseDescription
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
    abortDeclareProcess: this.requestFunctionFactory(
      descriptors.domainAbortDeclareProcess
    ),
    /** Change the ownerC of a domain. */
    changeOwnercOfDomain: this.requestFunctionFactory(
      descriptors.domainChangeOwnercOfDomain
    ),
    /** Change the Project relation of a Domain. */
    changeProjectOfDomain: this.requestFunctionFactory(
      descriptors.domainChangeProjectOfDomain
    ),
    /** Check if a Domain is available to register. */
    checkDomainAvailability: this.requestFunctionFactory(
      descriptors.domainCheckDomainAvailability
    ),
    /** Create an AuthCode for a Domains transfer out process. */
    createAuthcodeForDomain: this.requestFunctionFactory(
      descriptors.domainCreateAuthcodeForDomain
    ),
    /** Create an AuthCode2. */
    createAuthcode2ForDomain: this.requestFunctionFactory(
      descriptors.domainCreateAuthcode2ForDomain
    ),
    /** Change all nameservers of a Domain. */
    declareNameservers: this.requestFunctionFactory(
      descriptors.domainDeclareNameservers
    ),
    /** Update an AuthCode. */
    declareProcessChangeAuthcode: this.requestFunctionFactory(
      descriptors.domainDeclareProcessChangeAuthcode
    ),
    /** Update a Domain's OwnerC handle. */
    declareProcessChangeHandles: this.requestFunctionFactory(
      descriptors.domainDeclareProcessChangeHandles
    ),
    /** Get a Domain. */
    getDomain: this.requestFunctionFactory(descriptors.domainGetDomain),
    /** Delete a Domain. */
    deleteDomain: this.requestFunctionFactory(descriptors.domainDeleteDomain),
    /** Get a HandleSchema. */
    getHandleFields: this.requestFunctionFactory(
      descriptors.domainGetHandleFields
    ),
    /** Get a domain ownership. */
    getSpecificDomainOwnership: this.requestFunctionFactory(
      descriptors.domainGetSpecificDomainOwnership
    ),
    /** Verify a domain ownership. */
    verifyDomainOwnership: this.requestFunctionFactory(
      descriptors.domainVerifyDomainOwnership
    ),
    /** Get a toplevel domain. */
    getToplevelDomain: this.requestFunctionFactory(
      descriptors.domainGetToplevelDomain
    ),
    /** List all domain ownerships of a project. */
    listDomainOwnerships: this.requestFunctionFactory(
      descriptors.domainListDomainOwnerships
    ),
    /** List Domains belonging to a Project. */
    listDomains: this.requestFunctionFactory(descriptors.domainListDomains),
    /** List all supported toplevel domains. */
    listToplevelDomains: this.requestFunctionFactory(
      descriptors.domainListToplevelDomains
    ),
    /** Resend a domain email. */
    resendDomainEmail: this.requestFunctionFactory(
      descriptors.domainResendDomainEmail
    ),
    /** Create an Ingress. */
    ingressCreate: this.requestFunctionFactory(descriptors.ingressCreate),
    /** Get an Ingress. */
    ingressGetSpecific: this.requestFunctionFactory(
      descriptors.ingressGetSpecific
    ),
    /** Delete an Ingress. */
    ingressDelete: this.requestFunctionFactory(descriptors.ingressDelete),
    /** List Ingresses the user has access to. */
    ingressListAccessible: this.requestFunctionFactory(
      descriptors.ingressListAccessible
    ),
    /** List Ingresses belonging to a project. */
    ingressListForProject: this.requestFunctionFactory(
      descriptors.ingressListForProject
    ),
    /** Update an Ingresses paths. */
    ingressPaths: this.requestFunctionFactory(descriptors.ingressPaths),
    /** Update an Ingresses tls settings. */
    ingressTls: this.requestFunctionFactory(descriptors.ingressTls),
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
    deliveryboxList: this.requestFunctionFactory(
      descriptors.mailDeliveryboxList
    ),
    /** Create a new deliverybox */
    deliveryboxCreate: this.requestFunctionFactory(
      descriptors.mailDeliveryboxCreate
    ),
    /** Get a specific deliverybox */
    deliveryboxGetSpecific: this.requestFunctionFactory(
      descriptors.mailDeliveryboxGetSpecific
    ),
    /** Delete a specific deliverybox */
    deliveryboxDelete: this.requestFunctionFactory(
      descriptors.mailDeliveryboxDelete
    ),
    /** Update the description of an deliverybox */
    deliveryboxUpdateDescription: this.requestFunctionFactory(
      descriptors.mailDeliveryboxUpdateDescription
    ),
    /** Update the password for a specific deliverybox */
    deliveryboxUpdatePassword: this.requestFunctionFactory(
      descriptors.mailDeliveryboxUpdatePassword
    ),
    /** Get all mail addresses for a project ID */
    mailaddressList: this.requestFunctionFactory(
      descriptors.mailMailaddressList
    ),
    /** Create a new mail address */
    mailaddressCreate: this.requestFunctionFactory(
      descriptors.mailMailaddressCreate
    ),
    /** Get a specific mail address */
    mailaddressGetSpecific: this.requestFunctionFactory(
      descriptors.mailMailaddressGetSpecific
    ),
    /** Delete a specific mail address */
    mailaddressDelete: this.requestFunctionFactory(
      descriptors.mailMailaddressDelete
    ),
    /** Update mail-address */
    mailaddressUpdateAddress: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateAddress
    ),
    /** Update the auto responder of a mail address */
    mailaddressUpdateAutoresponder: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateAutoresponder
    ),
    /** Enable or disable the catchAll flag for a specific mail address */
    mailaddressUpdateCatchall: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateCatchall
    ),
    /** Update the addresses an email is forwarded to */
    mailaddressUpdateForwardaddresses: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateForwardaddresses
    ),
    /** Update the password for a specific mail address */
    mailaddressUpdatePassword: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdatePassword
    ),
    /** Update the quota of a mailbox */
    mailaddressUpdateQuota: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateQuota
    ),
    /** Update the spamprotection of a mailbox */
    mailaddressUpdateSpamprotection: this.requestFunctionFactory(
      descriptors.mailMailaddressUpdateSpamprotection
    ),
    /** Get settings for a given project ID */
    projectsettingGetSpecific: this.requestFunctionFactory(
      descriptors.mailProjectsettingGetSpecific
    ),
    /** Update blacklist for a given project ID */
    projectsettingUpdateBlacklist: this.requestFunctionFactory(
      descriptors.mailProjectsettingUpdateBlacklist
    ),
    /** Update whitelist for a given project ID */
    projectsettingUpdateWhitelist: this.requestFunctionFactory(
      descriptors.mailProjectsettingUpdateWhitelist
    ),
  };

  /** The notification API allows you to manage your notifications. */
  public readonly notification = {
    /** Getting the subscription status of the subscription. */
    newsletterGetInfo: this.requestFunctionFactory(
      descriptors.newsletterGetInfo
    ),
    /** Unsubscribe a user from the mStudio newsletter. */
    newsletterUnsubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterUnsubscribeUser
    ),
    /** Subscribe a user to the mStudio newsletter. */
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

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project = {
    /** Accept a ProjectInvite. */
    acceptProjectInvite: this.requestFunctionFactory(
      descriptors.projectAcceptProjectInvite
    ),
    /** Create a ProjectInvite. */
    createProjectInvite: this.requestFunctionFactory(
      descriptors.projectCreateProjectInvite
    ),
    /** Create a Project belonging to a Server. */
    createProject: this.requestFunctionFactory(
      descriptors.projectCreateProject
    ),
    /** Decline a ProjectInvite. */
    declineProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeclineProjectInvite
    ),
    /** Request a Project avatar upload. */
    requestProjectAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestProjectAvatarUpload
    ),
    /** Delete a Project's avatar. */
    deleteProjectAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteProjectAvatar
    ),
    /** Get a ProjectInvite. */
    getProjectInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectInvite
    ),
    /** Delete a ProjectInvite. */
    deleteProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeleteProjectInvite
    ),
    /** Get a ProjectMembership */
    getProjectMembership: this.requestFunctionFactory(
      descriptors.projectGetProjectMembership
    ),
    /** Delete a ProjectMembership. */
    deleteProjectMembership: this.requestFunctionFactory(
      descriptors.projectDeleteProjectMembership
    ),
    /** Update a ProjectMembership. */
    updateProjectMembership: this.requestFunctionFactory(
      descriptors.projectUpdateProjectMembership
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
    /** Get a ProjectInvite by token. */
    getProjectTokenInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectTokenInvite
    ),
    /** Get a Project. */
    getProject: this.requestFunctionFactory(descriptors.projectGetProject),
    /** Get the executing user's membership in a Project. */
    getSelfMembershipForProject: this.requestFunctionFactory(
      descriptors.projectGetSelfMembershipForProject
    ),
    /** Get a Server. */
    getServer: this.requestFunctionFactory(descriptors.projectGetServer),
    /** Leave a Project. */
    leaveProject: this.requestFunctionFactory(descriptors.projectLeaveProject),
    /** List all invites belonging to a Project. */
    listInvitesForProject: this.requestFunctionFactory(
      descriptors.projectListInvitesForProject
    ),
    /** List all memberships for a Project. */
    listMembershipsForProject: this.requestFunctionFactory(
      descriptors.projectListMembershipsForProject
    ),
    /** List all ProjectInvites for the executing user. */
    listProjectInvites: this.requestFunctionFactory(
      descriptors.projectListProjectInvites
    ),
    /** List ProjectMemberships belonging to the executing user. */
    listProjectMemberships: this.requestFunctionFactory(
      descriptors.projectListProjectMemberships
    ),
    /** List Project's for an Organization or Server. */
    listProjects: this.requestFunctionFactory(descriptors.projectListProjects),
    /** List Servers for an Organization or User. */
    listServers: this.requestFunctionFactory(descriptors.projectListServers),
    /** Resend the mail for a ProjectInvite. */
    resendProjectInviteMail: this.requestFunctionFactory(
      descriptors.projectResendProjectInviteMail
    ),
    /** Update a Project's description. */
    updateProjectDescription: this.requestFunctionFactory(
      descriptors.projectUpdateProjectDescription
    ),
    /** Update a Servers's description. */
    updateServerDescription: this.requestFunctionFactory(
      descriptors.projectUpdateServerDescription
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

  /** The SSH/SFTP User API allows you to manage your SSH/SFTP users within a project. */
  public readonly sshsftpUser = {
    /** Get all SFTPUsers for a Project. */
    sftpUserListSftpUsers: this.requestFunctionFactory(
      descriptors.sftpUserListSftpUsers
    ),
    /** Create an SFTPUser for a Project. */
    sftpUserCreateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserCreateSftpUser
    ),
    /** Get an SFTPUser. */
    sftpUserGetSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserGetSftpUser
    ),
    /** Delete an SFTPUser. */
    sftpUserDeleteSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserDeleteSftpUser
    ),
    /** Update an SFTPUser. */
    sftpUserUpdateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserUpdateSftpUser
    ),
    /** Get all SSHUsers for a Project. */
    sshUserListSshUsers: this.requestFunctionFactory(
      descriptors.sshUserListSshUsers
    ),
    /** Create an SSHUser for a Project. */
    sshUserCreateSshUser: this.requestFunctionFactory(
      descriptors.sshUserCreateSshUser
    ),
    /** Get an SSHUser. */
    sshUserGetSshUser: this.requestFunctionFactory(
      descriptors.sshUserGetSshUser
    ),
    /** Delete an SSHUser. */
    sshUserDeleteSshUser: this.requestFunctionFactory(
      descriptors.sshUserDeleteSshUser
    ),
    /** Update an SSHUser. */
    sshUserUpdateSshUser: this.requestFunctionFactory(
      descriptors.sshUserUpdateSshUser
    ),
  };

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user = {
    /** Add phone number and start verification process. */
    addPhoneNumber: this.requestFunctionFactory(descriptors.userAddPhoneNumber),
    /** Remove phone number. */
    removePhoneNumber: this.requestFunctionFactory(
      descriptors.userRemovePhoneNumber
    ),
    /** Validate your second factor. */
    authenticateMfa: this.requestFunctionFactory(
      descriptors.userAuthenticateMfa
    ),
    /** Authenticate yourself to get an access token. */
    authenticate: this.requestFunctionFactory(descriptors.userAuthenticate),
    /** Get your verified Email-Address. */
    getOwnEmail: this.requestFunctionFactory(descriptors.userGetOwnEmail),
    /** Change your Email-Address. */
    changeEmail: this.requestFunctionFactory(descriptors.userChangeEmail),
    /** Change your password. */
    changePassword: this.requestFunctionFactory(descriptors.userChangePassword),
    /** Check token for validity. */
    checkToken: this.requestFunctionFactory(descriptors.userCheckToken),
    /** Get your current multi factor auth status. */
    getMfaStatus: this.requestFunctionFactory(descriptors.userGetMfaStatus),
    /** Reset RecoveryCodes for MFA. */
    resetRecoverycodes: this.requestFunctionFactory(
      descriptors.userResetRecoverycodes
    ),
    /** Confirm Multi Factor Authentication. */
    confirmMfa: this.requestFunctionFactory(descriptors.userConfirmMfa),
    /** Disable Multi Factor Authentication. */
    disableMfa: this.requestFunctionFactory(descriptors.userDisableMfa),
    /** Confirm password reset. */
    confirmPasswordReset: this.requestFunctionFactory(
      descriptors.userConfirmPasswordReset
    ),
    /** List all of your ApiTokens. */
    listApiTokens: this.requestFunctionFactory(descriptors.userListApiTokens),
    /** Store a new ApiToken. */
    createApiToken: this.requestFunctionFactory(descriptors.userCreateApiToken),
    /** Submit your user feedback. */
    createFeedback: this.requestFunctionFactory(descriptors.userCreateFeedback),
    /** Create a new issue. */
    createIssue: this.requestFunctionFactory(descriptors.userCreateIssue),
    /** Get your stored ssh-keys. */
    listSshKeys: this.requestFunctionFactory(descriptors.userListSshKeys),
    /** Store a new ssh-key. */
    createSshKey: this.requestFunctionFactory(descriptors.userCreateSshKey),
    /** Get a specific ApiToken. */
    getApiToken: this.requestFunctionFactory(descriptors.userGetApiToken),
    /** Update an existing `ApiToken`. */
    editApiToken: this.requestFunctionFactory(descriptors.userEditApiToken),
    /** Deletes an ApiToken. */
    deleteApiToken: this.requestFunctionFactory(descriptors.userDeleteApiToken),
    /** Get a specific stored ssh-key. */
    getSshKey: this.requestFunctionFactory(descriptors.userGetSshKey),
    /** Edit a stored ssh-key. */
    editSshKey: this.requestFunctionFactory(descriptors.userEditSshKey),
    /** Remove a ssh-key. */
    deleteSshKey: this.requestFunctionFactory(descriptors.userDeleteSshKey),
    /** Delete your account and all your personal data. */
    deleteUser: this.requestFunctionFactory(descriptors.userDeleteUser),
    /** Get your account information. */
    getOwnAccount: this.requestFunctionFactory(descriptors.userGetOwnAccount),
    /** Update your account information. */
    updateAccount: this.requestFunctionFactory(descriptors.userUpdateAccount),
    /** The timestamp of your latest password change. */
    getPasswordUpdatedAt: this.requestFunctionFactory(
      descriptors.userGetPasswordUpdatedAt
    ),
    /** Get personalized settings. */
    getPersonalizedSettings: this.requestFunctionFactory(
      descriptors.userGetPersonalizedSettings
    ),
    /** Update personalized GUI settings. */
    updatePersonalizedSettings: this.requestFunctionFactory(
      descriptors.userUpdatePersonalizedSettings
    ),
    /** Get a specific session. */
    getSession: this.requestFunctionFactory(descriptors.userGetSession),
    /** Terminate a specific Session. */
    terminateSession: this.requestFunctionFactory(
      descriptors.userTerminateSession
    ),
    /** Get profile information for a user. */
    getUser: this.requestFunctionFactory(descriptors.userGetUser),
    /** Change personal information. */
    updatePersonalInformation: this.requestFunctionFactory(
      descriptors.userUpdatePersonalInformation
    ),
    /** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa. */
    initMfa: this.requestFunctionFactory(descriptors.userInitMfa),
    /** Initialize password reset process. */
    initPasswordReset: this.requestFunctionFactory(
      descriptors.userInitPasswordReset
    ),
    /** Submitted feedback of the given user. */
    listFeedback: this.requestFunctionFactory(descriptors.userListFeedback),
    /** List all sessions. */
    listSessions: this.requestFunctionFactory(descriptors.userListSessions),
    /** Terminate all sessions, except the current session. */
    terminateAllSessions: this.requestFunctionFactory(
      descriptors.userTerminateAllSessions
    ),
    /** Terminate session and invalidate access token. */
    logout: this.requestFunctionFactory(descriptors.userLogout),
    /** Register with email and password. */
    register: this.requestFunctionFactory(descriptors.userRegister),
    /** Request a new avatar image upload. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.userRequestAvatarUpload
    ),
    /** Remove Avatar. */
    removeAvatar: this.requestFunctionFactory(descriptors.userRemoveAvatar),
    /** Resend the Email-Address verification email. */
    resendVerificationEmail: this.requestFunctionFactory(
      descriptors.userResendVerificationEmail
    ),
    /** Request a support code. */
    supportCodeRequest: this.requestFunctionFactory(
      descriptors.userSupportCodeRequest
    ),
    /** Verify an added Email-Address. */
    verifyEmail: this.requestFunctionFactory(descriptors.userVerifyEmail),
    /** Verify phone number. */
    verifyPhoneNumber: this.requestFunctionFactory(
      descriptors.userVerifyPhoneNumber
    ),
    /** Verify your registration. */
    verifyRegistration: this.requestFunctionFactory(
      descriptors.userVerifyRegistration
    ),
  };
}

export default MittwaldAPIV2Client;
