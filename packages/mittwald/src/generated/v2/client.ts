/* eslint-disable */
/* prettier-ignore */

/**
* This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript)
*/

import * as operations from "./operations.js";
import ApiClientBase from "@mittwald/api-client-commons/dist/core/ApiClientBase.js";

export class MittwaldApiV2Client extends ApiClientBase {
  public appGetApp = this.requestFunctionFactory(operations.appGetApp);

  public appListApps = this.requestFunctionFactory(operations.appListApps);

  public appExecuteAction = this.requestFunctionFactory(
    operations.appExecuteAction
  );

  public appGetAppinstallation = this.requestFunctionFactory(
    operations.appGetAppinstallation
  );

  public appPatchAppinstallation = this.requestFunctionFactory(
    operations.appPatchAppinstallation
  );

  public appUninstallAppinstallation = this.requestFunctionFactory(
    operations.appUninstallAppinstallation
  );

  public appListAppinstallations = this.requestFunctionFactory(
    operations.appListAppinstallations
  );

  public appRequestAppinstallation = this.requestFunctionFactory(
    operations.appRequestAppinstallation
  );

  public appLinkDatabase = this.requestFunctionFactory(
    operations.appLinkDatabase
  );

  public appRetrieveStatus = this.requestFunctionFactory(
    operations.appRetrieveStatus
  );

  public appSetDatabaseUsers = this.requestFunctionFactory(
    operations.appSetDatabaseUsers
  );

  public appUnlinkDatabase = this.requestFunctionFactory(
    operations.appUnlinkDatabase
  );

  public appUpdateStatus = this.requestFunctionFactory(
    operations.appUpdateStatus
  );

  public appGetAppversion = this.requestFunctionFactory(
    operations.appGetAppversion
  );

  public appListAppversions = this.requestFunctionFactory(
    operations.appListAppversions
  );

  public articleServiceGetArticle = this.requestFunctionFactory(
    operations.articleServiceGetArticle
  );

  public articleServiceListArticles = this.requestFunctionFactory(
    operations.articleServiceListArticles
  );

  public deprecatedBackupServiceCreateProjectBackup =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceCreateProjectBackup
    );

  public deprecatedBackupServiceListProjectBackups =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceListProjectBackups
    );

  public deprecatedBackupServiceCreateProjectBackupSchedule =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceCreateProjectBackupSchedule
    );

  public deprecatedBackupServiceListProjectBackupSchedules =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceListProjectBackupSchedules
    );

  public deprecatedBackupServiceDeleteProjectBackup =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceDeleteProjectBackup
    );

  public deprecatedBackupServiceGetProjectBackup = this.requestFunctionFactory(
    operations.deprecatedBackupServiceGetProjectBackup
  );

  public deprecatedBackupServiceDeleteProjectBackupExport =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceDeleteProjectBackupExport
    );

  public deprecatedBackupServiceRequestProjectBackupExport =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceRequestProjectBackupExport
    );

  public deprecatedBackupServiceDeleteProjectBackupSchedule =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceDeleteProjectBackupSchedule
    );

  public deprecatedBackupServiceGetProjectBackupSchedule =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceGetProjectBackupSchedule
    );

  public deprecatedBackupServicePatchBackupSchedule =
    this.requestFunctionFactory(
      operations.deprecatedBackupServicePatchBackupSchedule
    );

  public deprecatedBackupServicePutSystemBackupTtl =
    this.requestFunctionFactory(
      operations.deprecatedBackupServicePutSystemBackupTtl
    );

  public deprecatedBackupServiceSetProjectBackupDescription =
    this.requestFunctionFactory(
      operations.deprecatedBackupServiceSetProjectBackupDescription
    );

  public deprecatedContractCancelContractItemTermination =
    this.requestFunctionFactory(
      operations.deprecatedContractCancelContractItemTermination
    );

  public deprecatedContractCancelContractTariffChange =
    this.requestFunctionFactory(
      operations.deprecatedContractCancelContractTariffChange
    );

  public deprecatedContractCancelContractTermination =
    this.requestFunctionFactory(
      operations.deprecatedContractCancelContractTermination
    );

  public deprecatedContractTerminateContract = this.requestFunctionFactory(
    operations.deprecatedContractTerminateContract
  );

  public contractGetDetailOfContract = this.requestFunctionFactory(
    operations.contractGetDetailOfContract
  );

  public contractGetDetailOfContractByAggregate = this.requestFunctionFactory(
    operations.contractGetDetailOfContractByAggregate
  );

  public deprecatedContractDetailOfContract = this.requestFunctionFactory(
    operations.deprecatedContractDetailOfContract
  );

  public contractGetDetailOfContractItem = this.requestFunctionFactory(
    operations.contractGetDetailOfContractItem
  );

  public contractListContracts = this.requestFunctionFactory(
    operations.contractListContracts
  );

  public deprecatedContractGetNextTerminationDateForItem =
    this.requestFunctionFactory(
      operations.deprecatedContractGetNextTerminationDateForItem
    );

  public conversationServiceCreateConversation = this.requestFunctionFactory(
    operations.conversationServiceCreateConversation
  );

  public conversationServiceGetConversations = this.requestFunctionFactory(
    operations.conversationServiceGetConversations
  );

  public conversationServiceCreateMessage = this.requestFunctionFactory(
    operations.conversationServiceCreateMessage
  );

  public conversationServiceGetMessagesByConversation =
    this.requestFunctionFactory(
      operations.conversationServiceGetMessagesByConversation
    );

  public conversationServiceGetCategories = this.requestFunctionFactory(
    operations.conversationServiceGetCategories
  );

  public conversationServiceGetCategory = this.requestFunctionFactory(
    operations.conversationServiceGetCategory
  );

  public conversationServiceGetConversation = this.requestFunctionFactory(
    operations.conversationServiceGetConversation
  );

  public conversationServiceUpdateConversation = this.requestFunctionFactory(
    operations.conversationServiceUpdateConversation
  );

  public conversationServiceRequestFileUpload = this.requestFunctionFactory(
    operations.conversationServiceRequestFileUpload
  );

  public conversationServiceSetConversationStatus = this.requestFunctionFactory(
    operations.conversationServiceSetConversationStatus
  );

  public conversationServiceUpdateMessage = this.requestFunctionFactory(
    operations.conversationServiceUpdateMessage
  );

  public deprecatedCronjobAbortExecution = this.requestFunctionFactory(
    operations.deprecatedCronjobAbortExecution
  );

  public cronjobCreateCronjob = this.requestFunctionFactory(
    operations.cronjobCreateCronjob
  );

  public cronjobListCronjobs = this.requestFunctionFactory(
    operations.cronjobListCronjobs
  );

  public cronjobCreateExecution = this.requestFunctionFactory(
    operations.cronjobCreateExecution
  );

  public cronjobListExecutions = this.requestFunctionFactory(
    operations.cronjobListExecutions
  );

  public cronjobDeleteCronjob = this.requestFunctionFactory(
    operations.cronjobDeleteCronjob
  );

  public cronjobGetCronjob = this.requestFunctionFactory(
    operations.cronjobGetCronjob
  );

  public cronjobUpdateCronjob = this.requestFunctionFactory(
    operations.cronjobUpdateCronjob
  );

  public cronjobGetExecution = this.requestFunctionFactory(
    operations.cronjobGetExecution
  );

  public customerServiceAvatarRemove = this.requestFunctionFactory(
    operations.customerServiceAvatarRemove
  );

  public customerServiceAvatarRequestUpload = this.requestFunctionFactory(
    operations.customerServiceAvatarRequestUpload
  );

  public customerServiceCreateCategoryDeprecated = this.requestFunctionFactory(
    operations.customerServiceCreateCategoryDeprecated
  );

  public customerServiceListOfCustomerCategoriesDeprecated =
    this.requestFunctionFactory(
      operations.customerServiceListOfCustomerCategoriesDeprecated
    );

  public customerServiceCreateCustomer = this.requestFunctionFactory(
    operations.customerServiceCreateCustomer
  );

  public customerServiceListCustomers = this.requestFunctionFactory(
    operations.customerServiceListCustomers
  );

  public customerServiceCreateNote = this.requestFunctionFactory(
    operations.customerServiceCreateNote
  );

  public customerServiceListOfNotes = this.requestFunctionFactory(
    operations.customerServiceListOfNotes
  );

  public customerServiceCustomerIsLegallyCompetent =
    this.requestFunctionFactory(
      operations.customerServiceCustomerIsLegallyCompetent
    );

  public customerServiceDeleteCategoryDeprecated = this.requestFunctionFactory(
    operations.customerServiceDeleteCategoryDeprecated
  );

  public customerServiceDetailOfCustomerCategoryDeprecated =
    this.requestFunctionFactory(
      operations.customerServiceDetailOfCustomerCategoryDeprecated
    );

  public customerServiceUpdateCategoryDeprecated = this.requestFunctionFactory(
    operations.customerServiceUpdateCategoryDeprecated
  );

  public customerServiceDeleteCustomer = this.requestFunctionFactory(
    operations.customerServiceDeleteCustomer
  );

  public customerServiceDetailsOfCustomer = this.requestFunctionFactory(
    operations.customerServiceDetailsOfCustomer
  );

  public customerServiceUpdateCustomer = this.requestFunctionFactory(
    operations.customerServiceUpdateCustomer
  );

  public customerServiceDeleteNote = this.requestFunctionFactory(
    operations.customerServiceDeleteNote
  );

  public customerServiceUpdateNote = this.requestFunctionFactory(
    operations.customerServiceUpdateNote
  );

  public databaseServiceMysqlCharsetList = this.requestFunctionFactory(
    operations.databaseServiceMysqlCharsetList
  );

  public databaseServiceMysqlCharsetListAll = this.requestFunctionFactory(
    operations.databaseServiceMysqlCharsetListAll
  );

  public databaseServiceMysqlDatabaseCreate = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseCreate
  );

  public databaseServiceMysqlDatabaseList = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseList
  );

  public databaseServiceMysqlDatabaseDelete = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseDelete
  );

  public databaseServiceMysqlDatabaseGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseGetSpecific
  );

  public databaseServiceMysqlDatabaseUpdateDefaultCharset =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseUpdateDefaultCharset
    );

  public databaseServiceMysqlDatabaseUpdateDescription =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseUpdateDescription
    );

  public databaseServiceMysqlDatabaseWithUserCreate =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseWithUserCreate
    );

  public databaseServiceMysqlUserCreate = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserCreate
  );

  public databaseServiceMysqlUserList = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserList
  );

  public databaseServiceMysqlUserDelete = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserDelete
  );

  public databaseServiceMysqlUserGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserGetSpecific
  );

  public databaseServiceMysqlUserUpdate = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserUpdate
  );

  public databaseServiceMysqlUserDisable = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserDisable
  );

  public databaseServiceMysqlUserEnable = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserEnable
  );

  public databaseServiceMysqlUserGetPhpMyAdminUrl = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserGetPhpMyAdminUrl
  );

  public databaseServiceMysqlUserSetPassword = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserSetPassword
  );

  public databaseServiceMysqlVersionList = this.requestFunctionFactory(
    operations.databaseServiceMysqlVersionList
  );

  public databaseServiceRedisDatabaseCreate = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseCreate
  );

  public databaseServiceRedisDatabaseList = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseList
  );

  public databaseServiceRedisDatabaseDelete = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseDelete
  );

  public databaseServiceRedisDatabaseGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseGetSpecific
  );

  public databaseServiceRedisDatabaseUpdateDescription =
    this.requestFunctionFactory(
      operations.databaseServiceRedisDatabaseUpdateDescription
    );

  public databaseServiceRedisVersionList = this.requestFunctionFactory(
    operations.databaseServiceRedisVersionList
  );

  public dnsRecordASetCustom = this.requestFunctionFactory(
    operations.dnsRecordASetCustom
  );

  public dnsRecordASetManagedByIngress = this.requestFunctionFactory(
    operations.dnsRecordASetManagedByIngress
  );

  public dnsRecordCnameSet = this.requestFunctionFactory(
    operations.dnsRecordCnameSet
  );

  public dnsRecordMxSetCustom = this.requestFunctionFactory(
    operations.dnsRecordMxSetCustom
  );

  public dnsRecordMxSetManaged = this.requestFunctionFactory(
    operations.dnsRecordMxSetManaged
  );

  public dnsRecordTxtSet = this.requestFunctionFactory(
    operations.dnsRecordTxtSet
  );

  public dnsZoneGetSpecific = this.requestFunctionFactory(
    operations.dnsZoneGetSpecific
  );

  public dnsZonesForProject = this.requestFunctionFactory(
    operations.dnsZonesForProject
  );

  public domainServiceAbortDeclareProcess = this.requestFunctionFactory(
    operations.domainServiceAbortDeclareProcess
  );

  public domainServiceChangeOwnercOfDomain = this.requestFunctionFactory(
    operations.domainServiceChangeOwnercOfDomain
  );

  public domainServiceChangeProjectOfDomain = this.requestFunctionFactory(
    operations.domainServiceChangeProjectOfDomain
  );

  public domainServiceCheckDomainAvailability = this.requestFunctionFactory(
    operations.domainServiceCheckDomainAvailability
  );

  public domainServiceCreateAuthcodeForDomain = this.requestFunctionFactory(
    operations.domainServiceCreateAuthcodeForDomain
  );

  public domainServiceCreateAuthcode2ForDomain = this.requestFunctionFactory(
    operations.domainServiceCreateAuthcode2ForDomain
  );

  public domainServiceDeclareNameservers = this.requestFunctionFactory(
    operations.domainServiceDeclareNameservers
  );

  public domainServiceDeclareProcessChangeAuthcode =
    this.requestFunctionFactory(
      operations.domainServiceDeclareProcessChangeAuthcode
    );

  public domainServiceDeclareProcessChangeHandles = this.requestFunctionFactory(
    operations.domainServiceDeclareProcessChangeHandles
  );

  public domainServiceDeleteDomain = this.requestFunctionFactory(
    operations.domainServiceDeleteDomain
  );

  public domainServiceGetDomain = this.requestFunctionFactory(
    operations.domainServiceGetDomain
  );

  public domainServiceGetHandleFields = this.requestFunctionFactory(
    operations.domainServiceGetHandleFields
  );

  public domainServiceGetSpecificDomainOwnership = this.requestFunctionFactory(
    operations.domainServiceGetSpecificDomainOwnership
  );

  public domainServiceVerifyDomainOwnership = this.requestFunctionFactory(
    operations.domainServiceVerifyDomainOwnership
  );

  public domainServiceGetToplevelDomain = this.requestFunctionFactory(
    operations.domainServiceGetToplevelDomain
  );

  public domainServiceListDomainOwnerships = this.requestFunctionFactory(
    operations.domainServiceListDomainOwnerships
  );

  public domainServiceListDomains = this.requestFunctionFactory(
    operations.domainServiceListDomains
  );

  public domainServiceListToplevelDomains = this.requestFunctionFactory(
    operations.domainServiceListToplevelDomains
  );

  public domainServiceResendDomainEmail = this.requestFunctionFactory(
    operations.domainServiceResendDomainEmail
  );

  public fileServiceFileCreateDeprecated = this.requestFunctionFactory(
    operations.fileServiceFileCreateDeprecated
  );

  public fileCreateFile = this.requestFunctionFactory(
    operations.fileCreateFile
  );

  public fileGetFile = this.requestFunctionFactory(operations.fileGetFile);

  public fileGetFileMeta = this.requestFunctionFactory(
    operations.fileGetFileMeta
  );

  public fileGetFileTokenRules = this.requestFunctionFactory(
    operations.fileGetFileTokenRules
  );

  public ingressServiceCreate = this.requestFunctionFactory(
    operations.ingressServiceCreate
  );

  public ingressServiceDelete = this.requestFunctionFactory(
    operations.ingressServiceDelete
  );

  public ingressServiceGetSpecific = this.requestFunctionFactory(
    operations.ingressServiceGetSpecific
  );

  public ingressServiceList = this.requestFunctionFactory(
    operations.ingressServiceList
  );

  public ingressServicePaths = this.requestFunctionFactory(
    operations.ingressServicePaths
  );

  public ingressServiceTls = this.requestFunctionFactory(
    operations.ingressServiceTls
  );

  public invoiceDetailOfInvoice = this.requestFunctionFactory(
    operations.invoiceDetailOfInvoice
  );

  public deprecatedInvoiceInvoiceSettings = this.requestFunctionFactory(
    operations.deprecatedInvoiceInvoiceSettings
  );

  public deprecatedInvoiceUpdateInvoiceSettings = this.requestFunctionFactory(
    operations.deprecatedInvoiceUpdateInvoiceSettings
  );

  public invoiceListCustomerInvoices = this.requestFunctionFactory(
    operations.invoiceListCustomerInvoices
  );

  public mailServiceDeliveryboxCreate = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxCreate
  );

  public mailServiceDeliveryboxList = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxList
  );

  public mailServiceDeliveryboxDelete = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxDelete
  );

  public mailServiceDeliveryboxGetSpecific = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxGetSpecific
  );

  public mailServiceDeliveryboxUpdateDescription = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxUpdateDescription
  );

  public mailServiceDeliveryboxUpdatePassword = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxUpdatePassword
  );

  public mailServiceMailaddressCreate = this.requestFunctionFactory(
    operations.mailServiceMailaddressCreate
  );

  public mailServiceMailaddressList = this.requestFunctionFactory(
    operations.mailServiceMailaddressList
  );

  public mailServiceMailaddressDelete = this.requestFunctionFactory(
    operations.mailServiceMailaddressDelete
  );

  public mailServiceMailaddressGetSpecific = this.requestFunctionFactory(
    operations.mailServiceMailaddressGetSpecific
  );

  public mailServiceMailaddressUpdateAddress = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateAddress
  );

  public mailServiceMailaddressUpdateAutoresponder =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateAutoresponder
    );

  public mailServiceMailaddressUpdateCatchall = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateCatchall
  );

  public mailServiceMailaddressUpdateForwardaddresses =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateForwardaddresses
    );

  public mailServiceMailaddressUpdatePassword = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdatePassword
  );

  public mailServiceMailaddressUpdateQuota = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateQuota
  );

  public mailServiceMailaddressUpdateSpamprotection =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateSpamprotection
    );

  public mailServiceProjectsettingGetSpecific = this.requestFunctionFactory(
    operations.mailServiceProjectsettingGetSpecific
  );

  public mailServiceProjectsettingUpdateBlacklist = this.requestFunctionFactory(
    operations.mailServiceProjectsettingUpdateBlacklist
  );

  public mailServiceProjectsettingUpdateWhitelist = this.requestFunctionFactory(
    operations.mailServiceProjectsettingUpdateWhitelist
  );

  public deprecatedCustomerAcceptCustomerInvite = this.requestFunctionFactory(
    operations.deprecatedCustomerAcceptCustomerInvite
  );

  public deprecatedCustomerAcceptCustomerInviteWithToken =
    this.requestFunctionFactory(
      operations.deprecatedCustomerAcceptCustomerInviteWithToken
    );

  public deprecatedProjectAcceptProjectInvite = this.requestFunctionFactory(
    operations.deprecatedProjectAcceptProjectInvite
  );

  public deprecatedProjectAcceptProjectInviteWithToken =
    this.requestFunctionFactory(
      operations.deprecatedProjectAcceptProjectInviteWithToken
    );

  public deprecatedCustomerChangeCustomerMembership =
    this.requestFunctionFactory(
      operations.deprecatedCustomerChangeCustomerMembership
    );

  public deprecatedCustomerDeleteCustomerMembership =
    this.requestFunctionFactory(
      operations.deprecatedCustomerDeleteCustomerMembership
    );

  public deprecatedProjectChangeProjectMembership = this.requestFunctionFactory(
    operations.deprecatedProjectChangeProjectMembership
  );

  public deprecatedProjectDeleteProjectMembership = this.requestFunctionFactory(
    operations.deprecatedProjectDeleteProjectMembership
  );

  public customerCreateCustomerInvite = this.requestFunctionFactory(
    operations.customerCreateCustomerInvite
  );

  public projectCreateProjectInvite = this.requestFunctionFactory(
    operations.projectCreateProjectInvite
  );

  public deprecatedCustomerDeclineCustomerInvite = this.requestFunctionFactory(
    operations.deprecatedCustomerDeclineCustomerInvite
  );

  public deprecatedProjectDeclineProjectInvite = this.requestFunctionFactory(
    operations.deprecatedProjectDeclineProjectInvite
  );

  public deprecatedCustomerGetCustomerInviteSpecific =
    this.requestFunctionFactory(
      operations.deprecatedCustomerGetCustomerInviteSpecific
    );

  public deprecatedCustomerGetCustomerMembershipSpecific =
    this.requestFunctionFactory(
      operations.deprecatedCustomerGetCustomerMembershipSpecific
    );

  public projectGetOwnMembershipForProject = this.requestFunctionFactory(
    operations.projectGetOwnMembershipForProject
  );

  public deprecatedProjectGetProjectInviteSpecific =
    this.requestFunctionFactory(
      operations.deprecatedProjectGetProjectInviteSpecific
    );

  public deprecatedProjectGetProjectMembershipSpecific =
    this.requestFunctionFactory(
      operations.deprecatedProjectGetProjectMembershipSpecific
    );

  public deprecatedCustomerLeaveCustomer = this.requestFunctionFactory(
    operations.deprecatedCustomerLeaveCustomer
  );

  public deprecatedProjectLeaveProject = this.requestFunctionFactory(
    operations.deprecatedProjectLeaveProject
  );

  public deprecatedCustomerListCustomerMembershipsForUser =
    this.requestFunctionFactory(
      operations.deprecatedCustomerListCustomerMembershipsForUser
    );

  public customerListInvitesForCustomer = this.requestFunctionFactory(
    operations.customerListInvitesForCustomer
  );

  public projectListInvitesForProject = this.requestFunctionFactory(
    operations.projectListInvitesForProject
  );

  public customerListMembershipsForCustomer = this.requestFunctionFactory(
    operations.customerListMembershipsForCustomer
  );

  public projectListMembershipsForProject = this.requestFunctionFactory(
    operations.projectListMembershipsForProject
  );

  public deprecatedCustomerListOwnCustomerInvites = this.requestFunctionFactory(
    operations.deprecatedCustomerListOwnCustomerInvites
  );

  public deprecatedProjectListOwnProjectInvites = this.requestFunctionFactory(
    operations.deprecatedProjectListOwnProjectInvites
  );

  public deprecatedProjectListProjectMembershipsForUser =
    this.requestFunctionFactory(
      operations.deprecatedProjectListProjectMembershipsForUser
    );

  public deprecatedCustomerResendCustomerInviteMail =
    this.requestFunctionFactory(
      operations.deprecatedCustomerResendCustomerInviteMail
    );

  public deprecatedProjectResendProjectInviteMail = this.requestFunctionFactory(
    operations.deprecatedProjectResendProjectInviteMail
  );

  public deprecatedCustomerRevokeCustomerInvite = this.requestFunctionFactory(
    operations.deprecatedCustomerRevokeCustomerInvite
  );

  public deprecatedProjectRevokeProjectInvite = this.requestFunctionFactory(
    operations.deprecatedProjectRevokeProjectInvite
  );

  public messagingServiceCountUnreadNotifications = this.requestFunctionFactory(
    operations.messagingServiceCountUnreadNotifications
  );

  public messagingServiceListNotifications = this.requestFunctionFactory(
    operations.messagingServiceListNotifications
  );

  public messagingServiceReadAllNotifications = this.requestFunctionFactory(
    operations.messagingServiceReadAllNotifications
  );

  public messagingServiceReadNotification = this.requestFunctionFactory(
    operations.messagingServiceReadNotification
  );

  public newsletterGetInfo = this.requestFunctionFactory(
    operations.newsletterGetInfo
  );

  public newsletterUnsubscribeUser = this.requestFunctionFactory(
    operations.newsletterUnsubscribeUser
  );

  public newsletterSubscribeUser = this.requestFunctionFactory(
    operations.newsletterSubscribeUser
  );

  public orderServiceChangeProjecthosting = this.requestFunctionFactory(
    operations.orderServiceChangeProjecthosting
  );

  public orderServiceChangeServer = this.requestFunctionFactory(
    operations.orderServiceChangeServer
  );

  public orderServiceGetOrder = this.requestFunctionFactory(
    operations.orderServiceGetOrder
  );

  public orderServiceListCustomerOrders = this.requestFunctionFactory(
    operations.orderServiceListCustomerOrders
  );

  public orderServiceOrderDomain = this.requestFunctionFactory(
    operations.orderServiceOrderDomain
  );

  public orderServiceOrderProjecthosting = this.requestFunctionFactory(
    operations.orderServiceOrderProjecthosting
  );

  public orderServiceOrderServer = this.requestFunctionFactory(
    operations.orderServiceOrderServer
  );

  public orderServicePreviewChangeProjecthosting = this.requestFunctionFactory(
    operations.orderServicePreviewChangeProjecthosting
  );

  public orderServicePreviewChangeServer = this.requestFunctionFactory(
    operations.orderServicePreviewChangeServer
  );

  public orderServicePreviewOrderDomain = this.requestFunctionFactory(
    operations.orderServicePreviewOrderDomain
  );

  public orderServicePreviewOrderProjecthosting = this.requestFunctionFactory(
    operations.orderServicePreviewOrderProjecthosting
  );

  public orderServicePreviewOrderServer = this.requestFunctionFactory(
    operations.orderServicePreviewOrderServer
  );

  public passwordValidationServiceGetPasswordPolicy =
    this.requestFunctionFactory(
      operations.passwordValidationServiceGetPasswordPolicy
    );

  public projectFileSystemGetDirectories = this.requestFunctionFactory(
    operations.projectFileSystemGetDirectories
  );

  public projectFileSystemGetFileContent = this.requestFunctionFactory(
    operations.projectFileSystemGetFileContent
  );

  public projectFileSystemListFiles = this.requestFunctionFactory(
    operations.projectFileSystemListFiles
  );

  public projectFileSystemGetJwt = this.requestFunctionFactory(
    operations.projectFileSystemGetJwt
  );

  public projectFileSystemGetDiskUsage = this.requestFunctionFactory(
    operations.projectFileSystemGetDiskUsage
  );

  public deprecatedPlacementGroupPlacementgroupAvatarRemove =
    this.requestFunctionFactory(
      operations.deprecatedPlacementGroupPlacementgroupAvatarRemove
    );

  public deprecatedPlacementGroupPlacementgroupAvatarRequestUpload =
    this.requestFunctionFactory(
      operations.deprecatedPlacementGroupPlacementgroupAvatarRequestUpload
    );

  public deprecatedPlacementGroupPlacementgroupDetails =
    this.requestFunctionFactory(
      operations.deprecatedPlacementGroupPlacementgroupDetails
    );

  public deprecatedPlacementGroupPlacementgroupList =
    this.requestFunctionFactory(
      operations.deprecatedPlacementGroupPlacementgroupList
    );

  public deprecatedProjectCreateSubproject = this.requestFunctionFactory(
    operations.deprecatedProjectCreateSubproject
  );

  public deprecatedPlacementGroupPlacementgroupUpdateDescription =
    this.requestFunctionFactory(
      operations.deprecatedPlacementGroupPlacementgroupUpdateDescription
    );

  public projectDeleteProjectAvatar = this.requestFunctionFactory(
    operations.projectDeleteProjectAvatar
  );

  public projectRequestProjectAvatarUpload = this.requestFunctionFactory(
    operations.projectRequestProjectAvatarUpload
  );

  public projectDeleteProject = this.requestFunctionFactory(
    operations.projectDeleteProject
  );

  public projectGetProject = this.requestFunctionFactory(
    operations.projectGetProject
  );

  public deprecatedProjectUpdateDescription = this.requestFunctionFactory(
    operations.deprecatedProjectUpdateDescription
  );

  public projectUpdateProjectDescription = this.requestFunctionFactory(
    operations.projectUpdateProjectDescription
  );

  public projectListProjects = this.requestFunctionFactory(
    operations.projectListProjects
  );

  public redirectusCreateRelocation = this.requestFunctionFactory(
    operations.redirectusCreateRelocation
  );

  public signupApiApiTokenCreate = this.requestFunctionFactory(
    operations.signupApiApiTokenCreate
  );

  public signupApiApiTokenList = this.requestFunctionFactory(
    operations.signupApiApiTokenList
  );

  public signupApiApiTokenDelete = this.requestFunctionFactory(
    operations.signupApiApiTokenDelete
  );

  public signupApiApiTokenEdit = this.requestFunctionFactory(
    operations.signupApiApiTokenEdit
  );

  public signupApiApiTokenGet = this.requestFunctionFactory(
    operations.signupApiApiTokenGet
  );

  public signupApiAuthenticate = this.requestFunctionFactory(
    operations.signupApiAuthenticate
  );

  public signupApiAuthenticateLegacy = this.requestFunctionFactory(
    operations.signupApiAuthenticateLegacy
  );

  public signupApiAuthenticateMfa = this.requestFunctionFactory(
    operations.signupApiAuthenticateMfa
  );

  public signupApiAvatarRemove = this.requestFunctionFactory(
    operations.signupApiAvatarRemove
  );

  public signupApiAvatarRequestUpload = this.requestFunctionFactory(
    operations.signupApiAvatarRequestUpload
  );

  public signupApiEmailChange = this.requestFunctionFactory(
    operations.signupApiEmailChange
  );

  public signupApiEmailGet = this.requestFunctionFactory(
    operations.signupApiEmailGet
  );

  public signupApiEmailResend = this.requestFunctionFactory(
    operations.signupApiEmailResend
  );

  public signupApiEmailVerify = this.requestFunctionFactory(
    operations.signupApiEmailVerify
  );

  public signupApiLogout = this.requestFunctionFactory(
    operations.signupApiLogout
  );

  public signupApiMfaConfirm = this.requestFunctionFactory(
    operations.signupApiMfaConfirm
  );

  public signupApiMfaDisable = this.requestFunctionFactory(
    operations.signupApiMfaDisable
  );

  public signupApiMfaGetStatus = this.requestFunctionFactory(
    operations.signupApiMfaGetStatus
  );

  public signupApiMfaInit = this.requestFunctionFactory(
    operations.signupApiMfaInit
  );

  public signupApiPasswordChange = this.requestFunctionFactory(
    operations.signupApiPasswordChange
  );

  public signupApiPasswordGetUpdatedAt = this.requestFunctionFactory(
    operations.signupApiPasswordGetUpdatedAt
  );

  public signupApiPasswordResetConfirm = this.requestFunctionFactory(
    operations.signupApiPasswordResetConfirm
  );

  public signupApiPasswordResetInit = this.requestFunctionFactory(
    operations.signupApiPasswordResetInit
  );

  public signupApiPhoneNumberDelete = this.requestFunctionFactory(
    operations.signupApiPhoneNumberDelete
  );

  public signupApiPhoneNumberGet = this.requestFunctionFactory(
    operations.signupApiPhoneNumberGet
  );

  public signupApiPhoneNumberInitProcess = this.requestFunctionFactory(
    operations.signupApiPhoneNumberInitProcess
  );

  public signupApiPhoneNumberVerify = this.requestFunctionFactory(
    operations.signupApiPhoneNumberVerify
  );

  public signupApiProfileChange = this.requestFunctionFactory(
    operations.signupApiProfileChange
  );

  public signupApiProfileDelete = this.requestFunctionFactory(
    operations.signupApiProfileDelete
  );

  public signupApiProfileGet = this.requestFunctionFactory(
    operations.signupApiProfileGet
  );

  public signupApiRecoverycodesReset = this.requestFunctionFactory(
    operations.signupApiRecoverycodesReset
  );

  public signupApiRegister = this.requestFunctionFactory(
    operations.signupApiRegister
  );

  public signupApiRegistrationVerify = this.requestFunctionFactory(
    operations.signupApiRegistrationVerify
  );

  public signupApiSessionGet = this.requestFunctionFactory(
    operations.signupApiSessionGet
  );

  public signupApiSessionTerminate = this.requestFunctionFactory(
    operations.signupApiSessionTerminate
  );

  public signupApiSessionsList = this.requestFunctionFactory(
    operations.signupApiSessionsList
  );

  public signupApiSessionsTerminateAll = this.requestFunctionFactory(
    operations.signupApiSessionsTerminateAll
  );

  public signupApiSshCreate = this.requestFunctionFactory(
    operations.signupApiSshCreate
  );

  public signupApiSshList = this.requestFunctionFactory(
    operations.signupApiSshList
  );

  public signupApiSshDelete = this.requestFunctionFactory(
    operations.signupApiSshDelete
  );

  public signupApiSshEdit = this.requestFunctionFactory(
    operations.signupApiSshEdit
  );

  public signupApiSshGet = this.requestFunctionFactory(
    operations.signupApiSshGet
  );

  public signupApiSupportCodeRequest = this.requestFunctionFactory(
    operations.signupApiSupportCodeRequest
  );

  public signupApiTokenCheck = this.requestFunctionFactory(
    operations.signupApiTokenCheck
  );

  public sshuserServiceCreateSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceCreateSftpUser
  );

  public sshuserServiceListSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceListSftpUser
  );

  public sshuserServiceCreateSshUser = this.requestFunctionFactory(
    operations.sshuserServiceCreateSshUser
  );

  public sshuserServiceListSshUser = this.requestFunctionFactory(
    operations.sshuserServiceListSshUser
  );

  public sshuserServiceGetSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceGetSftpUser
  );

  public sshuserServicePatchSftpUser = this.requestFunctionFactory(
    operations.sshuserServicePatchSftpUser
  );

  public sshuserServiceRemoveSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceRemoveSftpUser
  );

  public sshuserServiceGetSshUser = this.requestFunctionFactory(
    operations.sshuserServiceGetSshUser
  );

  public sshuserServicePatchSshUser = this.requestFunctionFactory(
    operations.sshuserServicePatchSshUser
  );

  public sshuserServiceRemoveSshUser = this.requestFunctionFactory(
    operations.sshuserServiceRemoveSshUser
  );

  public sshuserServiceUpdateAccessLevelOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateAccessLevelOfSftpUser
    );

  public sshuserServiceUpdateActiveOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateActiveOfSftpUser
  );

  public sshuserServiceUpdateActiveOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateActiveOfSshUser
  );

  public sshuserServiceUpdateDescriptionOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateDescriptionOfSftpUser
    );

  public sshuserServiceUpdateDescriptionOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateDescriptionOfSshUser
  );

  public sshuserServiceUpdateDirectoriesOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateDirectoriesOfSftpUser
    );

  public sshuserServiceUpdateExpiryOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateExpiryOfSftpUser
  );

  public sshuserServiceUpdateExpiryOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateExpiryOfSshUser
  );

  public sshuserServiceUpdatePasswordOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePasswordOfSftpUser
  );

  public sshuserServiceUpdatePasswordOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePasswordOfSshUser
  );

  public sshuserServiceUpdatePublicKeysOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePublicKeysOfSftpUser
  );

  public sshuserServiceUpdatePublicKeysOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePublicKeysOfSshUser
  );

  public storageStatisticsServiceStorageStatistics =
    this.requestFunctionFactory(
      operations.storageStatisticsServiceStorageStatistics
    );

  public appGetSystemsoftware = this.requestFunctionFactory(
    operations.appGetSystemsoftware
  );

  public appListSystemsoftwares = this.requestFunctionFactory(
    operations.appListSystemsoftwares
  );

  public appGetSystemsoftwareversion = this.requestFunctionFactory(
    operations.appGetSystemsoftwareversion
  );

  public appListSystemsoftwareversions = this.requestFunctionFactory(
    operations.appListSystemsoftwareversions
  );

  public userServiceAvatarRemove = this.requestFunctionFactory(
    operations.userServiceAvatarRemove
  );

  public userServiceAvatarRequestUpload = this.requestFunctionFactory(
    operations.userServiceAvatarRequestUpload
  );

  public userServiceFeedbackCreate = this.requestFunctionFactory(
    operations.userServiceFeedbackCreate
  );

  public userServiceFeedbackList = this.requestFunctionFactory(
    operations.userServiceFeedbackList
  );

  public userServiceIssueNew = this.requestFunctionFactory(
    operations.userServiceIssueNew
  );

  public userServicePersonalInformationUpdate = this.requestFunctionFactory(
    operations.userServicePersonalInformationUpdate
  );

  public userServiceUserGet = this.requestFunctionFactory(
    operations.userServiceUserGet
  );

  public userServicePersonalizedSettingsGet = this.requestFunctionFactory(
    operations.userServicePersonalizedSettingsGet
  );

  public userServicePersonalizedSettingsUpdate = this.requestFunctionFactory(
    operations.userServicePersonalizedSettingsUpdate
  );

  public userServicePhoneNumberAdd = this.requestFunctionFactory(
    operations.userServicePhoneNumberAdd
  );

  public userServicePhoneNumberRemove = this.requestFunctionFactory(
    operations.userServicePhoneNumberRemove
  );

  public userServicePhoneNumberVerify = this.requestFunctionFactory(
    operations.userServicePhoneNumberVerify
  );

  public userServiceUserGetOwn = this.requestFunctionFactory(
    operations.userServiceUserGetOwn
  );

  public varnishServiceListValidators = this.requestFunctionFactory(
    operations.varnishServiceListValidators
  );

  public varnishServiceValidate = this.requestFunctionFactory(
    operations.varnishServiceValidate
  );

  public fileGetFileTypeRules = this.requestFunctionFactory(
    operations.fileGetFileTypeRules
  );

  public orderServiceListProjectOrders = this.requestFunctionFactory(
    operations.orderServiceListProjectOrders
  );

  public deprecatedcronjobServiceCronjobAddAppid = this.requestFunctionFactory(
    operations.deprecatedcronjobServiceCronjobAddAppid
  );

  public cronjobAbortExecution = this.requestFunctionFactory(
    operations.cronjobAbortExecution
  );

  public backupCreateProjectBackup = this.requestFunctionFactory(
    operations.backupCreateProjectBackup
  );

  public backupListProjectBackups = this.requestFunctionFactory(
    operations.backupListProjectBackups
  );

  public backupCreateProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupCreateProjectBackupSchedule
  );

  public backupListProjectBackupSchedules = this.requestFunctionFactory(
    operations.backupListProjectBackupSchedules
  );

  public backupDeleteProjectBackup = this.requestFunctionFactory(
    operations.backupDeleteProjectBackup
  );

  public backupGetProjectBackup = this.requestFunctionFactory(
    operations.backupGetProjectBackup
  );

  public backupCreateProjectBackupExport = this.requestFunctionFactory(
    operations.backupCreateProjectBackupExport
  );

  public backupDeleteProjectBackupExport = this.requestFunctionFactory(
    operations.backupDeleteProjectBackupExport
  );

  public backupDeleteProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupDeleteProjectBackupSchedule
  );

  public backupGetProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupGetProjectBackupSchedule
  );

  public backupUpdateProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupUpdateProjectBackupSchedule
  );

  public backupUpdateProjectBackupDescription = this.requestFunctionFactory(
    operations.backupUpdateProjectBackupDescription
  );

  public cronjobUpdateCronjobAppId = this.requestFunctionFactory(
    operations.cronjobUpdateCronjobAppId
  );

  public contractCancelContractItemTermination = this.requestFunctionFactory(
    operations.contractCancelContractItemTermination
  );

  public deprecatedContractTerminateContractItem = this.requestFunctionFactory(
    operations.deprecatedContractTerminateContractItem
  );

  public contractCancelContractTariffChange = this.requestFunctionFactory(
    operations.contractCancelContractTariffChange
  );

  public contractCancelContractTermination = this.requestFunctionFactory(
    operations.contractCancelContractTermination
  );

  public contractTerminateContract = this.requestFunctionFactory(
    operations.contractTerminateContract
  );

  public contractGetBaseItemOfContract = this.requestFunctionFactory(
    operations.contractGetBaseItemOfContract
  );

  public contractGetNextTerminationDateForItem = this.requestFunctionFactory(
    operations.contractGetNextTerminationDateForItem
  );

  public customerServiceCreateCategory = this.requestFunctionFactory(
    operations.customerServiceCreateCategory
  );

  public customerServiceListOfCustomerCategories = this.requestFunctionFactory(
    operations.customerServiceListOfCustomerCategories
  );

  public customerServiceDeleteCategory = this.requestFunctionFactory(
    operations.customerServiceDeleteCategory
  );

  public customerServiceDetailOfCustomerCategory = this.requestFunctionFactory(
    operations.customerServiceDetailOfCustomerCategory
  );

  public customerServiceUpdateCategory = this.requestFunctionFactory(
    operations.customerServiceUpdateCategory
  );

  public deprecatedContractGetBaseItemOfContract = this.requestFunctionFactory(
    operations.deprecatedContractGetBaseItemOfContract
  );

  public invoiceGetDetailOfInvoiceSettings = this.requestFunctionFactory(
    operations.invoiceGetDetailOfInvoiceSettings
  );

  public invoiceUpdateInvoiceSettings = this.requestFunctionFactory(
    operations.invoiceUpdateInvoiceSettings
  );

  public projectCreateProject = this.requestFunctionFactory(
    operations.projectCreateProject
  );

  public projectDeleteServerAvatar = this.requestFunctionFactory(
    operations.projectDeleteServerAvatar
  );

  public projectRequestServerAvatarUpload = this.requestFunctionFactory(
    operations.projectRequestServerAvatarUpload
  );

  public projectGetServer = this.requestFunctionFactory(
    operations.projectGetServer
  );

  public projectListServers = this.requestFunctionFactory(
    operations.projectListServers
  );

  public projectUpdateServerDescription = this.requestFunctionFactory(
    operations.projectUpdateServerDescription
  );

  public customerChangeCustomerMembership = this.requestFunctionFactory(
    operations.customerChangeCustomerMembership
  );

  public membershipAcceptInvite = this.requestFunctionFactory(
    operations.membershipAcceptInvite
  );

  public membershipDeclineInvite = this.requestFunctionFactory(
    operations.membershipDeclineInvite
  );

  public membershipDeleteMembership = this.requestFunctionFactory(
    operations.membershipDeleteMembership
  );

  public membershipGetMembership = this.requestFunctionFactory(
    operations.membershipGetMembership
  );

  public membershipGetInvite = this.requestFunctionFactory(
    operations.membershipGetInvite
  );

  public membershipLeaveMembership = this.requestFunctionFactory(
    operations.membershipLeaveMembership
  );

  public membershipListInvites = this.requestFunctionFactory(
    operations.membershipListInvites
  );

  public membershipListMemberships = this.requestFunctionFactory(
    operations.membershipListMemberships
  );

  public membershipResendInviteMail = this.requestFunctionFactory(
    operations.membershipResendInviteMail
  );

  public membershipRevokeInvite = this.requestFunctionFactory(
    operations.membershipRevokeInvite
  );

  public projectChangeProjectMembership = this.requestFunctionFactory(
    operations.projectChangeProjectMembership
  );
}

export default MittwaldApiV2Client;
