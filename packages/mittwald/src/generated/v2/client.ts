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

  public deprecatedAppGetAppversion = this.requestFunctionFactory(
    operations.deprecatedAppGetAppversion
  );

  public deprecatedAppListAppversions = this.requestFunctionFactory(
    operations.deprecatedAppListAppversions
  );

  public articleServiceGetArticle = this.requestFunctionFactory(
    operations.articleServiceGetArticle
  );

  public articleServiceListArticles = this.requestFunctionFactory(
    operations.articleServiceListArticles
  );

  public contractCancelContractItemTermination = this.requestFunctionFactory(
    operations.contractCancelContractItemTermination
  );

  public contractTerminateContractItem = this.requestFunctionFactory(
    operations.contractTerminateContractItem
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

  public contractGetDetailOfContract = this.requestFunctionFactory(
    operations.contractGetDetailOfContract
  );

  public deprecatedContractGetDetailOfContractByAggregate =
    this.requestFunctionFactory(
      operations.deprecatedContractGetDetailOfContractByAggregate
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

  public conversationCreateConversation = this.requestFunctionFactory(
    operations.conversationCreateConversation
  );

  public conversationListConversations = this.requestFunctionFactory(
    operations.conversationListConversations
  );

  public conversationCreateMessage = this.requestFunctionFactory(
    operations.conversationCreateMessage
  );

  public conversationListMessagesByConversation = this.requestFunctionFactory(
    operations.conversationListMessagesByConversation
  );

  public conversationListCategories = this.requestFunctionFactory(
    operations.conversationListCategories
  );

  public conversationGetCategory = this.requestFunctionFactory(
    operations.conversationGetCategory
  );

  public conversationGetConversation = this.requestFunctionFactory(
    operations.conversationGetConversation
  );

  public conversationUpdateConversation = this.requestFunctionFactory(
    operations.conversationUpdateConversation
  );

  public conversationRequestFileUpload = this.requestFunctionFactory(
    operations.conversationRequestFileUpload
  );

  public conversationSetConversationStatus = this.requestFunctionFactory(
    operations.conversationSetConversationStatus
  );

  public conversationUpdateMessage = this.requestFunctionFactory(
    operations.conversationUpdateMessage
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

  public customerRemoveAvatar = this.requestFunctionFactory(
    operations.customerRemoveAvatar
  );

  public customerRequestAvatarUpload = this.requestFunctionFactory(
    operations.customerRequestAvatarUpload
  );

  public customerCreateCategoryDeprecated = this.requestFunctionFactory(
    operations.customerCreateCategoryDeprecated
  );

  public customerListOfCustomerCategoriesDeprecated =
    this.requestFunctionFactory(
      operations.customerListOfCustomerCategoriesDeprecated
    );

  public customerCreateCustomer = this.requestFunctionFactory(
    operations.customerCreateCustomer
  );

  public customerListCustomers = this.requestFunctionFactory(
    operations.customerListCustomers
  );

  public customerCreateNote = this.requestFunctionFactory(
    operations.customerCreateNote
  );

  public customerListOfNotes = this.requestFunctionFactory(
    operations.customerListOfNotes
  );

  public customerIsCustomerLegallyCompetent = this.requestFunctionFactory(
    operations.customerIsCustomerLegallyCompetent
  );

  public customerDeleteCategoryDeprecated = this.requestFunctionFactory(
    operations.customerDeleteCategoryDeprecated
  );

  public customerDetailOfCustomerCategoryDeprecated =
    this.requestFunctionFactory(
      operations.customerDetailOfCustomerCategoryDeprecated
    );

  public customerUpdateCategoryDeprecated = this.requestFunctionFactory(
    operations.customerUpdateCategoryDeprecated
  );

  public customerDeleteCustomer = this.requestFunctionFactory(
    operations.customerDeleteCustomer
  );

  public customerGetCustomer = this.requestFunctionFactory(
    operations.customerGetCustomer
  );

  public customerUpdateCustomer = this.requestFunctionFactory(
    operations.customerUpdateCustomer
  );

  public customerDeleteNote = this.requestFunctionFactory(
    operations.customerDeleteNote
  );

  public customerUpdateNote = this.requestFunctionFactory(
    operations.customerUpdateNote
  );

  public deprecatedDatabaseListMysqlCharsets = this.requestFunctionFactory(
    operations.deprecatedDatabaseListMysqlCharsets
  );

  public databaseListMysqlCharsets = this.requestFunctionFactory(
    operations.databaseListMysqlCharsets
  );

  public deprecatedDatabaseCreateMysqlDatabase = this.requestFunctionFactory(
    operations.deprecatedDatabaseCreateMysqlDatabase
  );

  public deprecatedDatabaseListMysqlDatabases = this.requestFunctionFactory(
    operations.deprecatedDatabaseListMysqlDatabases
  );

  public databaseDeleteMysqlDatabase = this.requestFunctionFactory(
    operations.databaseDeleteMysqlDatabase
  );

  public databaseGetMysqlDatabase = this.requestFunctionFactory(
    operations.databaseGetMysqlDatabase
  );

  public databaseUpdateMysqlDatabaseDefaultCharset =
    this.requestFunctionFactory(
      operations.databaseUpdateMysqlDatabaseDefaultCharset
    );

  public deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset
    );

  public databaseUpdateMysqlDatabaseDescription = this.requestFunctionFactory(
    operations.databaseUpdateMysqlDatabaseDescription
  );

  public deprecatedDatabaseUpdateMysqlDatabaseDescription =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseUpdateMysqlDatabaseDescription
    );

  public deprecatedDatabaseCreateMysqlDatabaseWithUser =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseCreateMysqlDatabaseWithUser
    );

  public databaseCreateMysqlUser = this.requestFunctionFactory(
    operations.databaseCreateMysqlUser
  );

  public databaseListMysqlUsers = this.requestFunctionFactory(
    operations.databaseListMysqlUsers
  );

  public deprecatedDatabaseDeleteMysqlUser = this.requestFunctionFactory(
    operations.deprecatedDatabaseDeleteMysqlUser
  );

  public deprecatedDatabaseGetMysqlUser = this.requestFunctionFactory(
    operations.deprecatedDatabaseGetMysqlUser
  );

  public deprecatedDatabaseUpdateMysqlUser = this.requestFunctionFactory(
    operations.deprecatedDatabaseUpdateMysqlUser
  );

  public deprecatedDatabaseDisableMysqlUser = this.requestFunctionFactory(
    operations.deprecatedDatabaseDisableMysqlUser
  );

  public deprecatedDatabaseEnableMysqlUser = this.requestFunctionFactory(
    operations.deprecatedDatabaseEnableMysqlUser
  );

  public deprecatedDatabaseGetMysqlUserPhpMyAdminUrl =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseGetMysqlUserPhpMyAdminUrl
    );

  public deprecatedDatabaseSetMysqlUserPassword = this.requestFunctionFactory(
    operations.deprecatedDatabaseSetMysqlUserPassword
  );

  public deprecatedDatabaseUpdateMysqlUserPassword =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseUpdateMysqlUserPassword
    );

  public deprecatedDatabaseListMysqlVersions = this.requestFunctionFactory(
    operations.deprecatedDatabaseListMysqlVersions
  );

  public deprecatedDatabaseCreateRedisDatabase = this.requestFunctionFactory(
    operations.deprecatedDatabaseCreateRedisDatabase
  );

  public deprecatedDatabaseListRedisDatabases = this.requestFunctionFactory(
    operations.deprecatedDatabaseListRedisDatabases
  );

  public databaseDeleteRedisDatabase = this.requestFunctionFactory(
    operations.databaseDeleteRedisDatabase
  );

  public databaseGetRedisDatabase = this.requestFunctionFactory(
    operations.databaseGetRedisDatabase
  );

  public databaseUpdateRedisDatabaseDescription = this.requestFunctionFactory(
    operations.databaseUpdateRedisDatabaseDescription
  );

  public deprecatedDatabaseUpdateRedisDatabaseDescription =
    this.requestFunctionFactory(
      operations.deprecatedDatabaseUpdateRedisDatabaseDescription
    );

  public deprecatedDatabaseListRedisVersions = this.requestFunctionFactory(
    operations.deprecatedDatabaseListRedisVersions
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

  public ingressServiceListAccessible = this.requestFunctionFactory(
    operations.ingressServiceListAccessible
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

  public deprecatedCustomerCreateCustomerInvite = this.requestFunctionFactory(
    operations.deprecatedCustomerCreateCustomerInvite
  );

  public deprecatedProjectCreateProjectInvite = this.requestFunctionFactory(
    operations.deprecatedProjectCreateProjectInvite
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

  public deprecatedCustomerListInvitesForCustomer = this.requestFunctionFactory(
    operations.deprecatedCustomerListInvitesForCustomer
  );

  public deprecatedProjectListInvitesForProject = this.requestFunctionFactory(
    operations.deprecatedProjectListInvitesForProject
  );

  public deprecatedCustomerListMembershipsForCustomer =
    this.requestFunctionFactory(
      operations.deprecatedCustomerListMembershipsForCustomer
    );

  public deprecatedProjectListMembershipsForProject =
    this.requestFunctionFactory(
      operations.deprecatedProjectListMembershipsForProject
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

  public notificationsCountUnreadNotifications = this.requestFunctionFactory(
    operations.notificationsCountUnreadNotifications
  );

  public notificationsListNotifications = this.requestFunctionFactory(
    operations.notificationsListNotifications
  );

  public notificationsReadAllNotifications = this.requestFunctionFactory(
    operations.notificationsReadAllNotifications
  );

  public notificationsReadNotification = this.requestFunctionFactory(
    operations.notificationsReadNotification
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

  public orderChangeProjecthosting = this.requestFunctionFactory(
    operations.orderChangeProjecthosting
  );

  public orderChangeServer = this.requestFunctionFactory(
    operations.orderChangeServer
  );

  public orderGetOrder = this.requestFunctionFactory(operations.orderGetOrder);

  public orderListCustomerOrders = this.requestFunctionFactory(
    operations.orderListCustomerOrders
  );

  public orderOrderDomain = this.requestFunctionFactory(
    operations.orderOrderDomain
  );

  public orderOrderProjecthosting = this.requestFunctionFactory(
    operations.orderOrderProjecthosting
  );

  public orderOrderServer = this.requestFunctionFactory(
    operations.orderOrderServer
  );

  public orderPreviewChangeProjecthosting = this.requestFunctionFactory(
    operations.orderPreviewChangeProjecthosting
  );

  public orderPreviewChangeServer = this.requestFunctionFactory(
    operations.orderPreviewChangeServer
  );

  public orderPreviewOrderDomain = this.requestFunctionFactory(
    operations.orderPreviewOrderDomain
  );

  public orderPreviewOrderProjecthosting = this.requestFunctionFactory(
    operations.orderPreviewOrderProjecthosting
  );

  public orderPreviewOrderServer = this.requestFunctionFactory(
    operations.orderPreviewOrderServer
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

  public orderListProjectOrders = this.requestFunctionFactory(
    operations.orderListProjectOrders
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

  public deprecatedContractCancelContractItemTermination =
    this.requestFunctionFactory(
      operations.deprecatedContractCancelContractItemTermination
    );

  public deprecatedContractTerminateContractItem = this.requestFunctionFactory(
    operations.deprecatedContractTerminateContractItem
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

  public contractGetBaseItemOfContract = this.requestFunctionFactory(
    operations.contractGetBaseItemOfContract
  );

  public contractGetNextTerminationDateForItem = this.requestFunctionFactory(
    operations.contractGetNextTerminationDateForItem
  );

  public customerCreateCategory = this.requestFunctionFactory(
    operations.customerCreateCategory
  );

  public customerListOfCustomerCategories = this.requestFunctionFactory(
    operations.customerListOfCustomerCategories
  );

  public customerDeleteCategory = this.requestFunctionFactory(
    operations.customerDeleteCategory
  );

  public customerGetCustomerCategory = this.requestFunctionFactory(
    operations.customerGetCustomerCategory
  );

  public customerUpdateCategory = this.requestFunctionFactory(
    operations.customerUpdateCategory
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

  public deprecatedCustomerUpdateCustomerMembership =
    this.requestFunctionFactory(
      operations.deprecatedCustomerUpdateCustomerMembership
    );

  public deprecatedMembershipAcceptInvite = this.requestFunctionFactory(
    operations.deprecatedMembershipAcceptInvite
  );

  public deprecatedMembershipDeclineInvite = this.requestFunctionFactory(
    operations.deprecatedMembershipDeclineInvite
  );

  public deprecatedMembershipDeleteMembership = this.requestFunctionFactory(
    operations.deprecatedMembershipDeleteMembership
  );

  public deprecatedMembershipGetMembership = this.requestFunctionFactory(
    operations.deprecatedMembershipGetMembership
  );

  public deprecatedMembershipGetInvite = this.requestFunctionFactory(
    operations.deprecatedMembershipGetInvite
  );

  public deprecatedMembershipLeaveMembership = this.requestFunctionFactory(
    operations.deprecatedMembershipLeaveMembership
  );

  public deprecatedMembershipListInvites = this.requestFunctionFactory(
    operations.deprecatedMembershipListInvites
  );

  public deprecatedMembershipListMemberships = this.requestFunctionFactory(
    operations.deprecatedMembershipListMemberships
  );

  public deprecatedMembershipResendInviteMail = this.requestFunctionFactory(
    operations.deprecatedMembershipResendInviteMail
  );

  public deprecatedMembershipRevokeInvite = this.requestFunctionFactory(
    operations.deprecatedMembershipRevokeInvite
  );

  public deprecatedProjectUpdateProjectMembership = this.requestFunctionFactory(
    operations.deprecatedProjectUpdateProjectMembership
  );

  public appGetAppversion = this.requestFunctionFactory(
    operations.appGetAppversion
  );

  public appListAppversions = this.requestFunctionFactory(
    operations.appListAppversions
  );

  public contractGetDetailOfContractByDomain = this.requestFunctionFactory(
    operations.contractGetDetailOfContractByDomain
  );

  public contractGetDetailOfContractByPlacementGroup =
    this.requestFunctionFactory(
      operations.contractGetDetailOfContractByPlacementGroup
    );

  public contractGetDetailOfContractByProject = this.requestFunctionFactory(
    operations.contractGetDetailOfContractByProject
  );

  public customerAcceptCustomerInvite = this.requestFunctionFactory(
    operations.customerAcceptCustomerInvite
  );

  public customerCreateCustomerInvite = this.requestFunctionFactory(
    operations.customerCreateCustomerInvite
  );

  public customerDeclineCustomerInvite = this.requestFunctionFactory(
    operations.customerDeclineCustomerInvite
  );

  public customerDeleteCustomerInvite = this.requestFunctionFactory(
    operations.customerDeleteCustomerInvite
  );

  public customerGetCustomerInvite = this.requestFunctionFactory(
    operations.customerGetCustomerInvite
  );

  public customerDeleteCustomerMembership = this.requestFunctionFactory(
    operations.customerDeleteCustomerMembership
  );

  public customerGetCustomerMembership = this.requestFunctionFactory(
    operations.customerGetCustomerMembership
  );

  public customerUpdateCustomerMembership = this.requestFunctionFactory(
    operations.customerUpdateCustomerMembership
  );

  public customerGetCustomerTokenInvite = this.requestFunctionFactory(
    operations.customerGetCustomerTokenInvite
  );

  public customerLeaveCustomer = this.requestFunctionFactory(
    operations.customerLeaveCustomer
  );

  public customerListCustomerInvites = this.requestFunctionFactory(
    operations.customerListCustomerInvites
  );

  public customerListCustomerMemberships = this.requestFunctionFactory(
    operations.customerListCustomerMemberships
  );

  public customerListInvitesForCustomer = this.requestFunctionFactory(
    operations.customerListInvitesForCustomer
  );

  public customerListMembershipsForCustomer = this.requestFunctionFactory(
    operations.customerListMembershipsForCustomer
  );

  public customerResendCustomerInviteMail = this.requestFunctionFactory(
    operations.customerResendCustomerInviteMail
  );

  public databaseCreateMysqlDatabase = this.requestFunctionFactory(
    operations.databaseCreateMysqlDatabase
  );

  public databaseListMysqlDatabases = this.requestFunctionFactory(
    operations.databaseListMysqlDatabases
  );

  public databaseCreateRedisDatabase = this.requestFunctionFactory(
    operations.databaseCreateRedisDatabase
  );

  public databaseListRedisDatabases = this.requestFunctionFactory(
    operations.databaseListRedisDatabases
  );

  public databaseDeleteMysqlUser = this.requestFunctionFactory(
    operations.databaseDeleteMysqlUser
  );

  public databaseGetMysqlUser = this.requestFunctionFactory(
    operations.databaseGetMysqlUser
  );

  public databaseUpdateMysqlUser = this.requestFunctionFactory(
    operations.databaseUpdateMysqlUser
  );

  public databaseDisableMysqlUser = this.requestFunctionFactory(
    operations.databaseDisableMysqlUser
  );

  public databaseEnableMysqlUser = this.requestFunctionFactory(
    operations.databaseEnableMysqlUser
  );

  public databaseGetMysqlUserPhpMyAdminUrl = this.requestFunctionFactory(
    operations.databaseGetMysqlUserPhpMyAdminUrl
  );

  public databaseListMysqlVersions = this.requestFunctionFactory(
    operations.databaseListMysqlVersions
  );

  public databaseListRedisVersions = this.requestFunctionFactory(
    operations.databaseListRedisVersions
  );

  public databaseUpdateMysqlUserPassword = this.requestFunctionFactory(
    operations.databaseUpdateMysqlUserPassword
  );

  public ingressServiceListForProject = this.requestFunctionFactory(
    operations.ingressServiceListForProject
  );

  public projectAcceptProjectInvite = this.requestFunctionFactory(
    operations.projectAcceptProjectInvite
  );

  public projectCreateProjectInvite = this.requestFunctionFactory(
    operations.projectCreateProjectInvite
  );

  public projectDeclineProjectInvite = this.requestFunctionFactory(
    operations.projectDeclineProjectInvite
  );

  public projectDeleteProjectInvite = this.requestFunctionFactory(
    operations.projectDeleteProjectInvite
  );

  public projectGetProjectInvite = this.requestFunctionFactory(
    operations.projectGetProjectInvite
  );

  public projectDeleteProjectMembership = this.requestFunctionFactory(
    operations.projectDeleteProjectMembership
  );

  public projectGetProjectMembership = this.requestFunctionFactory(
    operations.projectGetProjectMembership
  );

  public projectUpdateProjectMembership = this.requestFunctionFactory(
    operations.projectUpdateProjectMembership
  );

  public projectGetProjectTokenInvite = this.requestFunctionFactory(
    operations.projectGetProjectTokenInvite
  );

  public projectLeaveProject = this.requestFunctionFactory(
    operations.projectLeaveProject
  );

  public projectListInvitesForProject = this.requestFunctionFactory(
    operations.projectListInvitesForProject
  );

  public projectListMembershipsForProject = this.requestFunctionFactory(
    operations.projectListMembershipsForProject
  );

  public projectListProjectInvites = this.requestFunctionFactory(
    operations.projectListProjectInvites
  );

  public projectListProjectMemberships = this.requestFunctionFactory(
    operations.projectListProjectMemberships
  );

  public projectResendProjectInviteMail = this.requestFunctionFactory(
    operations.projectResendProjectInviteMail
  );

  public sftpUserCreateSftpUser = this.requestFunctionFactory(
    operations.sftpUserCreateSftpUser
  );

  public sftpUserDeleteSftpUser = this.requestFunctionFactory(
    operations.sftpUserDeleteSftpUser
  );

  public sftpUserGetSftpUser = this.requestFunctionFactory(
    operations.sftpUserGetSftpUser
  );

  public sftpUserUpdateSftpUser = this.requestFunctionFactory(
    operations.sftpUserUpdateSftpUser
  );

  public sftpUserListSftpUsers = this.requestFunctionFactory(
    operations.sftpUserListSftpUsers
  );

  public sshUserCreateSshUser = this.requestFunctionFactory(
    operations.sshUserCreateSshUser
  );

  public sshUserListSshUsers = this.requestFunctionFactory(
    operations.sshUserListSshUsers
  );

  public sshUserDeleteSshUser = this.requestFunctionFactory(
    operations.sshUserDeleteSshUser
  );

  public sshUserGetSshUser = this.requestFunctionFactory(
    operations.sshUserGetSshUser
  );

  public sshUserUpdateSshUser = this.requestFunctionFactory(
    operations.sshUserUpdateSshUser
  );
}

export default MittwaldApiV2Client;
