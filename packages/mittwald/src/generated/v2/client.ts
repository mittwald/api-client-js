/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import * as descriptors from "./descriptors.js";
import { ApiClientBase } from "@mittwald/api-client-commons";

export class MittwaldAPIV2Client extends ApiClientBase {
  /** The AI hosting provides access to multiple large language and embedding models – GDPR compliant and hosted in Germany. */
  public readonly aiHosting = {
    /** Accepts the model terms for a customer. */
    customerAcceptModelTerms: this.requestFunctionFactory(
      descriptors.aiHostingCustomerAcceptModelTerms,
    ),
    /** Get a list of already created keys. */
    customerGetKeys: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetKeys,
    ),
    /** Creates a new key. */
    customerCreateKey: this.requestFunctionFactory(
      descriptors.aiHostingCustomerCreateKey,
    ),
    /** Get all ai hosting plans of a customer. */
    customerGetPlans: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetPlans,
    ),
    /** Creates an AI hosting profile and accepts the current model terms. */
    customerDeclareProfile: this.requestFunctionFactory(
      descriptors.aiHostingCustomerDeclareProfile,
    ),
    /** Get a key of a customer. */
    customerGetKey: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetKey,
    ),
    /** Update a key for a customer. */
    customerUpdateKey: this.requestFunctionFactory(
      descriptors.aiHostingCustomerUpdateKey,
    ),
    /** Delete a key for a customer. */
    customerDeleteKey: this.requestFunctionFactory(
      descriptors.aiHostingCustomerDeleteKey,
    ),
    /** Get a list of currently active models. */
    customerGetDetailedModels: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetDetailedModels,
    ),
    /** Get ai hosting plan and usages of a customer by planId. */
    customerGetPlan: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetPlan,
    ),
    /** Renames an AI hosting plan. */
    customerUpdatePlan: this.requestFunctionFactory(
      descriptors.aiHostingCustomerUpdatePlan,
    ),
    /**
     * Get ai hosting plan and usages of a customer.
     * @deprecated
     */
    customerGetUsage: this.requestFunctionFactory(
      descriptors.aiHostingCustomerGetUsage,
    ),
    /** Rotates a customer's key. */
    customerRotateKey: this.requestFunctionFactory(
      descriptors.aiHostingCustomerRotateKey,
    ),
    /** Get a list of currently active models. */
    getModels: this.requestFunctionFactory(descriptors.aiHostingGetModels),
    /** List the contract months of an ai hosting plan. */
    planGetBillingPeriods: this.requestFunctionFactory(
      descriptors.aiHostingPlanGetBillingPeriods,
    ),
    /** Get aggregated token usage statistics for an ai hosting plan of a customer. */
    planGetUsageStats: this.requestFunctionFactory(
      descriptors.aiHostingPlanGetUsageStats,
    ),
    /** Get a list of keys of a project. */
    projectGetKeys: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetKeys,
    ),
    /** Creates a new key for a project. */
    projectCreateKey: this.requestFunctionFactory(
      descriptors.aiHostingProjectCreateKey,
    ),
    /** Get a key of a project. */
    projectGetKey: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetKey,
    ),
    /** Update a key for a project. */
    projectUpdateKey: this.requestFunctionFactory(
      descriptors.aiHostingProjectUpdateKey,
    ),
    /** Delete a key for a project. */
    projectDeleteKey: this.requestFunctionFactory(
      descriptors.aiHostingProjectDeleteKey,
    ),
    /** Get a list of currently active models. */
    projectGetDetailedModels: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetDetailedModels,
    ),
    /** Get ai hosting plan and usages of a project by planId. */
    projectGetPlan: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetPlan,
    ),
    /** Get all ai hosting plans and usages of a project. */
    projectGetPlans: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetPlans,
    ),
    /**
     * Get ai hosting plan and usages of a project.
     * @deprecated
     */
    projectGetUsage: this.requestFunctionFactory(
      descriptors.aiHostingProjectGetUsage,
    ),
    /** Links a container with a project licence. */
    projectLinkContainer: this.requestFunctionFactory(
      descriptors.aiHostingProjectLinkContainer,
    ),
    /** Rotates a project's key. */
    projectRotateKey: this.requestFunctionFactory(
      descriptors.aiHostingProjectRotateKey,
    ),
  };

  /** The App API allows you to manage your apps within a project, and all the system softwares that are installed as dependencies. */
  public readonly app = {
    /** Detach a staging AppInstallation from its source. */
    detachAppinstallationStaging: this.requestFunctionFactory(
      descriptors.appDetachAppinstallationStaging,
    ),
    /** Get the installed `SystemSoftware' for a specific `AppInstallation`. */
    getAppInstallationSystemSoftware: this.requestFunctionFactory(
      descriptors.appGetAppInstallationSystemSoftware,
    ),
    /** Get an App. */
    getApp: this.requestFunctionFactory(descriptors.appGetApp),
    /** Get an analysis of the error of an AppInstallation. */
    getAppinstallationErrorAnalysis: this.requestFunctionFactory(
      descriptors.appGetAppinstallationErrorAnalysis,
    ),
    /**
     * Get an AppInstallation.
     * @deprecated
     */
    getV2AppinstallationsAppInstallationId: this.requestFunctionFactory(
      descriptors.getV2AppinstallationsAppInstallationId,
    ),
    /**
     * Trigger an uninstallation process for an AppInstallation.
     * @deprecated
     */
    deleteV2AppinstallationsAppInstallationId: this.requestFunctionFactory(
      descriptors.deleteV2AppinstallationsAppInstallationId,
    ),
    /**
     * Update properties belonging to an AppInstallation.
     * @deprecated
     */
    patchV2AppinstallationsAppInstallationId: this.requestFunctionFactory(
      descriptors.patchV2AppinstallationsAppInstallationId,
    ),
    /** Get an AppInstallation. */
    getAppinstallation: this.requestFunctionFactory(
      descriptors.appGetAppinstallation,
    ),
    /** Trigger an uninstallation process for an AppInstallation. */
    uninstallAppinstallation: this.requestFunctionFactory(
      descriptors.appUninstallAppinstallation,
    ),
    /** Update properties belonging to an AppInstallation. */
    patchAppinstallation: this.requestFunctionFactory(
      descriptors.appPatchAppinstallation,
    ),
    /** Get an AppVersion. */
    getAppversion: this.requestFunctionFactory(descriptors.appGetAppversion),
    /**
     * Get the installed `SystemSoftware' for a specific `AppInstallation`.
     * @deprecated
     */
    getInstalledSystemsoftwareForAppinstallation: this.requestFunctionFactory(
      descriptors.appGetInstalledSystemsoftwareForAppinstallation,
    ),
    /**
     * Get the missing requirements of an appInstallation for a specific target AppVersion.
     * @deprecated
     */
    getV2AppinstallationsAppInstallationIdMissingDependencies:
      this.requestFunctionFactory(
        descriptors.getV2AppinstallationsAppInstallationIdMissingDependencies,
      ),
    /** Get the missing requirements of an appInstallation for a specific target AppVersion. */
    getMissingDependenciesForAppinstallation: this.requestFunctionFactory(
      descriptors.appGetMissingDependenciesForAppinstallation,
    ),
    /**
     * Get a SystemSoftware.
     * @deprecated
     */
    getV2SystemsoftwaresSystemSoftwareId: this.requestFunctionFactory(
      descriptors.getV2SystemsoftwaresSystemSoftwareId,
    ),
    /** Get a SystemSoftware. */
    getSystemsoftware: this.requestFunctionFactory(
      descriptors.appGetSystemsoftware,
    ),
    /**
     * Get a SystemSoftwareVersion.
     * @deprecated
     */
    getV2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId:
      this.requestFunctionFactory(
        descriptors.getV2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId,
      ),
    /**
     * Get a SystemSoftwareVersion.
     * @deprecated
     */
    getV2SystemSoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId:
      this.requestFunctionFactory(
        descriptors.getV2SystemSoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId,
      ),
    /** Get a SystemSoftwareVersion. */
    getSystemsoftwareversion: this.requestFunctionFactory(
      descriptors.appGetSystemsoftwareversion,
    ),
    /**
     * Create linkage between an AppInstallation and a MySQLDatabase.
     * @deprecated
     */
    linkDatabase: this.requestFunctionFactory(descriptors.appLinkDatabase),
    /** List AppInstallations that a user has access to. */
    listAppinstallationsForUser: this.requestFunctionFactory(
      descriptors.appListAppinstallationsForUser,
    ),
    /**
     * List AppInstallations belonging to a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdAppinstallations: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdAppinstallations,
    ),
    /**
     * Request an AppInstallation.
     * @deprecated
     */
    postV2ProjectsProjectIdAppinstallations: this.requestFunctionFactory(
      descriptors.postV2ProjectsProjectIdAppinstallations,
    ),
    /** List AppInstallations belonging to a Project. */
    listAppinstallations: this.requestFunctionFactory(
      descriptors.appListAppinstallations,
    ),
    /** Request an AppInstallation. */
    requestAppinstallation: this.requestFunctionFactory(
      descriptors.appRequestAppinstallation,
    ),
    /** List Apps. */
    listApps: this.requestFunctionFactory(descriptors.appListApps),
    /** List AppVersions belonging to an App. */
    listAppversions: this.requestFunctionFactory(
      descriptors.appListAppversions,
    ),
    /**
     * List SystemSoftwares.
     * @deprecated
     */
    getV2Systemsoftwares: this.requestFunctionFactory(
      descriptors.getV2Systemsoftwares,
    ),
    /** List SystemSoftwares. */
    listSystemsoftwares: this.requestFunctionFactory(
      descriptors.appListSystemsoftwares,
    ),
    /**
     * List SystemSoftwareVersions belonging to a SystemSoftware.
     * @deprecated
     */
    getV2SystemSoftwareSystemSoftwareIdVersions: this.requestFunctionFactory(
      descriptors.getV2SystemSoftwareSystemSoftwareIdVersions,
    ),
    /**
     * List SystemSoftwareVersions belonging to a SystemSoftware.
     * @deprecated
     */
    getV2SystemsoftwareSystemSoftwareIdVersions: this.requestFunctionFactory(
      descriptors.getV2SystemsoftwareSystemSoftwareIdVersions,
    ),
    /** List SystemSoftwareVersions belonging to a SystemSoftware. */
    listSystemsoftwareversions: this.requestFunctionFactory(
      descriptors.appListSystemsoftwareversions,
    ),
    /** List update candidates belonging to an AppVersion. */
    listUpdateCandidatesForAppversion: this.requestFunctionFactory(
      descriptors.appListUpdateCandidatesForAppversion,
    ),
    /** Promote a staging AppInstallation. */
    promoteAppinstallationStaging: this.requestFunctionFactory(
      descriptors.appPromoteAppinstallationStaging,
    ),
    /**
     * Request a copy of an AppInstallation.
     * @deprecated
     */
    postV2AppinstallationsAppInstallationIdActionsCopy:
      this.requestFunctionFactory(
        descriptors.postV2AppinstallationsAppInstallationIdActionsCopy,
      ),
    /** Request a copy of an AppInstallation. */
    requestAppinstallationCopy: this.requestFunctionFactory(
      descriptors.appRequestAppinstallationCopy,
    ),
    /** Request a staging for an AppInstallation. */
    requestAppinstallationStaging: this.requestFunctionFactory(
      descriptors.appRequestAppinstallationStaging,
    ),
    /**
     * Get runtime status belonging to an AppInstallation.
     * @deprecated
     */
    getV2AppinstallationsAppInstallationIdStatus: this.requestFunctionFactory(
      descriptors.getV2AppinstallationsAppInstallationIdStatus,
    ),
    /** Get runtime status belonging to an AppInstallation. */
    retrieveStatus: this.requestFunctionFactory(descriptors.appRetrieveStatus),
    /**
     * Create linkage between an AppInstallation and DatabaseUsers.
     * @deprecated
     */
    putV2AppInstallationsAppInstallationIdDatabasesDatabaseId:
      this.requestFunctionFactory(
        descriptors.putV2AppInstallationsAppInstallationIdDatabasesDatabaseId,
      ),
    /** Remove linkage between an AppInstallation and a Database. */
    unlinkDatabase: this.requestFunctionFactory(descriptors.appUnlinkDatabase),
    /**
     * Create linkage between an AppInstallation and DatabaseUsers.
     * @deprecated
     */
    putV2AppinstallationsAppInstallationIdDatabasesDatabaseId:
      this.requestFunctionFactory(
        descriptors.putV2AppinstallationsAppInstallationIdDatabasesDatabaseId,
      ),
    /**
     * Remove linkage between an AppInstallation and a Database.
     * @deprecated
     */
    deleteV2AppinstallationsAppInstallationIdDatabasesDatabaseId:
      this.requestFunctionFactory(
        descriptors.deleteV2AppinstallationsAppInstallationIdDatabasesDatabaseId,
      ),
    /**
     * Create linkage between an AppInstallation and DatabaseUsers.
     * @deprecated
     */
    setDatabaseUsers: this.requestFunctionFactory(
      descriptors.appSetDatabaseUsers,
    ),
    /**
     * Trigger a runtime action belonging to an AppInstallation.
     * @deprecated
     */
    postV2AppinstallationsAppInstallationIdActionsAction:
      this.requestFunctionFactory(
        descriptors.postV2AppinstallationsAppInstallationIdActionsAction,
      ),
    /**
     * Trigger a runtime action belonging to an AppInstallation.
     * @deprecated
     */
    deprecatedAppInstallationExecuteAction: this.requestFunctionFactory(
      descriptors.deprecatedAppInstallationExecuteAction,
    ),
    /**
     * Create linkage between an AppInstallation and a MySql-Database.
     * @deprecated
     */
    deprecatedAppLinkDatabase: this.requestFunctionFactory(
      descriptors.deprecatedAppLinkDatabase,
    ),
    /**
     * Replace a MySQL Database with another MySQL Database.
     * @deprecated
     */
    deprecatedAppReplaceDatabase: this.requestFunctionFactory(
      descriptors.deprecatedAppReplaceDatabase,
    ),
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
      descriptors.backupCreateProjectBackupExport,
    ),
    /** Delete a ProjectBackupExport. */
    deleteProjectBackupExport: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupExport,
    ),
    /** List BackupSchedules belonging to a Project. */
    listProjectBackupSchedules: this.requestFunctionFactory(
      descriptors.backupListProjectBackupSchedules,
    ),
    /** Create a BackupSchedule for a Project. */
    createProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackupSchedule,
    ),
    /** List Backups belonging to a Project. */
    listProjectBackups: this.requestFunctionFactory(
      descriptors.backupListProjectBackups,
    ),
    /** Create a Backup of a Project. */
    createProjectBackup: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackup,
    ),
    /** Get a ProjectBackupSchedule. */
    getProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupSchedule,
    ),
    /** Delete a ProjectBackupSchedule. */
    deleteProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupSchedule,
    ),
    /** Update a ProjectBackupSchedule. */
    updateProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackupSchedule,
    ),
    /** Get a ProjectBackup. */
    getProjectBackup: this.requestFunctionFactory(
      descriptors.backupGetProjectBackup,
    ),
    /** Delete a ProjectBackup. */
    deleteProjectBackup: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackup,
    ),
    /** Update a ProjectBackup. */
    updateProjectBackup: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackup,
    ),
    /** List database dump's for a ProjectBackup. */
    getProjectBackupDatabaseDumps: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupDatabaseDumps,
    ),
    /** List paths for a ProjectBackup. */
    getProjectBackupDirectories: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupDirectories,
    ),
    /**
     * Restore a ProjectBackup's path.
     * @deprecated
     */
    requestProjectBackupRestorePathDeprecated: this.requestFunctionFactory(
      descriptors.backupRequestProjectBackupRestorePathDeprecated,
    ),
    /** Restore a ProjectBackup. */
    requestProjectBackupRestore: this.requestFunctionFactory(
      descriptors.backupRequestProjectBackupRestore,
    ),
    /**
     * Update a Backup's expiration time.
     * @deprecated
     */
    deprecatedBackupReplaceProjectBackupExpirationTime:
      this.requestFunctionFactory(
        descriptors.deprecatedBackupReplaceProjectBackupExpirationTime,
      ),
    /**
     * Change the description of a ProjectBackup.
     * @deprecated
     */
    deprecatedBackupUpdateProjectBackupDescription: this.requestFunctionFactory(
      descriptors.deprecatedBackupUpdateProjectBackupDescription,
    ),
  };

  /** The container API allows you to manage your stacks, containers, volumes and registries. */
  public readonly container = {
    /** Add a template component to a Stack. */
    addTemplateComponent: this.requestFunctionFactory(
      descriptors.containerAddTemplateComponent,
    ),
    /** Call a Service pull-image webhook. */
    callPullImageWebhookForService: this.requestFunctionFactory(
      descriptors.containerCallPullImageWebhookForService,
    ),
    /** List Registries belonging to a Project. */
    listRegistries: this.requestFunctionFactory(
      descriptors.containerListRegistries,
    ),
    /** Create a Registry. */
    createRegistry: this.requestFunctionFactory(
      descriptors.containerCreateRegistry,
    ),
    /** List Stacks belonging to a Project. */
    listStacks: this.requestFunctionFactory(descriptors.containerListStacks),
    /** Create a Stack. */
    createStack: this.requestFunctionFactory(descriptors.containerCreateStack),
    /** Get a Stack. */
    getStack: this.requestFunctionFactory(descriptors.containerGetStack),
    /** Declaratively create, update or delete Services or Volumes belonging to a Stack. */
    declareStack: this.requestFunctionFactory(
      descriptors.containerDeclareStack,
    ),
    /** Delete a Stack. */
    deleteStack: this.requestFunctionFactory(descriptors.containerDeleteStack),
    /** Create, update or delete Services or Volumes belonging to a Stack. */
    updateStack: this.requestFunctionFactory(descriptors.containerUpdateStack),
    /** Get a Registry. */
    getRegistry: this.requestFunctionFactory(descriptors.containerGetRegistry),
    /** Delete a Registry. */
    deleteRegistry: this.requestFunctionFactory(
      descriptors.containerDeleteRegistry,
    ),
    /** Update a Registry. */
    updateRegistry: this.requestFunctionFactory(
      descriptors.containerUpdateRegistry,
    ),
    /** Get a Volume belonging to a Stack. */
    getVolume: this.requestFunctionFactory(descriptors.containerGetVolume),
    /** Delete a Volume belonging to a Stack. */
    deleteVolume: this.requestFunctionFactory(
      descriptors.containerDeleteVolume,
    ),
    /** Get a ContainerImageConfig. */
    getContainerImageConfig: this.requestFunctionFactory(
      descriptors.containerGetContainerImageConfig,
    ),
    /** Get an analysis of the logs belonging to a Service. */
    getServiceLogsAnalysis: this.requestFunctionFactory(
      descriptors.containerGetServiceLogsAnalysis,
    ),
    /** Get logs belonging to a Service. */
    getServiceLogs: this.requestFunctionFactory(
      descriptors.containerGetServiceLogs,
    ),
    /** Get a Service belonging to a Stack. */
    getService: this.requestFunctionFactory(descriptors.containerGetService),
    /** Get a Container Template asset. */
    getTemplateAsset: this.requestFunctionFactory(
      descriptors.containerGetTemplateAsset,
    ),
    /** Get a Container Template by ID. */
    getTemplate: this.requestFunctionFactory(descriptors.containerGetTemplate),
    /** List Services the executing user has access to. */
    listAccessibleServices: this.requestFunctionFactory(
      descriptors.containerListAccessibleServices,
    ),
    /** List Stacks belonging to the executing user. */
    listSelfStacks: this.requestFunctionFactory(
      descriptors.containerListSelfStacks,
    ),
    /** List Services belonging to a Project. */
    listServices: this.requestFunctionFactory(
      descriptors.containerListServices,
    ),
    /** List Volumes belonging to a Stack. */
    listStackVolumes: this.requestFunctionFactory(
      descriptors.containerListStackVolumes,
    ),
    /**
     * List Container Template statistics.
     * @deprecated
     */
    listTemplateStatistics: this.requestFunctionFactory(
      descriptors.containerListTemplateStatistics,
    ),
    /** List Container Templates. */
    listTemplates: this.requestFunctionFactory(
      descriptors.containerListTemplates,
    ),
    /** List Volumes belonging to a Project. */
    listVolumes: this.requestFunctionFactory(descriptors.containerListVolumes),
    /** Pull a Service image and recreate. */
    pullImageForService: this.requestFunctionFactory(
      descriptors.containerPullImageForService,
    ),
    /** Recreate a Service. */
    recreateService: this.requestFunctionFactory(
      descriptors.containerRecreateService,
    ),
    /** Restart a started Service. */
    restartService: this.requestFunctionFactory(
      descriptors.containerRestartService,
    ),
    /** Create or rotate a Service pull-image webhook token. */
    rotatePullImageWebhookForService: this.requestFunctionFactory(
      descriptors.containerRotatePullImageWebhookForService,
    ),
    /** Start a stopped Service. */
    startService: this.requestFunctionFactory(
      descriptors.containerStartService,
    ),
    /** Stop a started Service. */
    stopService: this.requestFunctionFactory(descriptors.containerStopService),
    /**
     * Get a Container Template icon.
     * @deprecated
     */
    deprecatedContainerGetTemplateIcon: this.requestFunctionFactory(
      descriptors.deprecatedContainerGetTemplateIcon,
    ),
    /**
     * Set an update schedule for a Stack.
     * @deprecated
     */
    deprecatedContainerSetStackUpdateSchedule: this.requestFunctionFactory(
      descriptors.deprecatedContainerSetStackUpdateSchedule,
    ),
    /**
     * Validate a Registries' URI.
     * @deprecated
     */
    deprecatedContainerValidateContainerRegistryUri:
      this.requestFunctionFactory(
        descriptors.deprecatedContainerValidateContainerRegistryUri,
      ),
    /**
     * Validate a Registries' credentials.
     * @deprecated
     */
    deprecatedContainerValidateRegistryCredentials: this.requestFunctionFactory(
      descriptors.deprecatedContainerValidateRegistryCredentials,
    ),
  };

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract = {
    /** Schedule the Termination of a ContractItem. */
    terminateContractItem: this.requestFunctionFactory(
      descriptors.contractTerminateContractItem,
    ),
    /** Cancel the Termination for the referred ContractItem. */
    cancelContractItemTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractItemTermination,
    ),
    /** Cancel the TariffChange for the referred ContractItem. */
    cancelContractTariffChange: this.requestFunctionFactory(
      descriptors.contractCancelContractTariffChange,
    ),
    /** Schedule the Termination of a Contract. */
    terminateContract: this.requestFunctionFactory(
      descriptors.contractTerminateContract,
    ),
    /** Cancel the Termination for the referred Contract. */
    cancelContractTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractTermination,
    ),
    /** Return the BaseItem of the Contract with the given ID. */
    getBaseItemOfContract: this.requestFunctionFactory(
      descriptors.contractGetBaseItemOfContract,
    ),
    /** Return the AI Hosting Contract for the given Customer. */
    getDetailOfContractByAiHosting: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByAiHosting,
    ),
    /** Return the Contract for the given Certificate. */
    getDetailOfContractByCertificate: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByCertificate,
    ),
    /** Return the Contract for the given Domain. */
    getDetailOfContractByDomain: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByDomain,
    ),
    /** Return the Contract for the given LeadFyndrProfile. */
    getDetailOfContractByLeadFyndr: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByLeadFyndr,
    ),
    /** Return the Contract for the given License. */
    getDetailOfContractByLicense: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByLicense,
    ),
    /** Return the Contract for the given Mail Address. */
    getDetailOfContractByMailAddress: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByMailAddress,
    ),
    /** Return the Contract for the given Project. */
    getDetailOfContractByProject: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByProject,
    ),
    /** Return the Contract for the given Server. */
    getDetailOfContractByServer: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByServer,
    ),
    /** Get the ContractItem with the given ID. */
    getDetailOfContractItem: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractItem,
    ),
    /** Returns the Contract with the given ID. */
    getDetailOfContract: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContract,
    ),
    /** Return a list of Contracts for the given Customer. */
    listContracts: this.requestFunctionFactory(
      descriptors.contractListContracts,
    ),
    /**
     * Return the AI Hosting Contract for the given Customer.
     * @deprecated
     */
    deprecatedContractGetDetailOfContractByAiHosting:
      this.requestFunctionFactory(
        descriptors.deprecatedContractGetDetailOfContractByAiHosting,
      ),
    /**
     * Return the next TerminationDate for the ContractItem with the given ID.
     * @deprecated
     */
    deprecatedContractGetNextTerminationDateForItem:
      this.requestFunctionFactory(
        descriptors.deprecatedContractGetNextTerminationDateForItem,
      ),
    /**
     * Get details of an Invoice.
     * @deprecated
     */
    deprecatedInvoiceDetailOfInvoice: this.requestFunctionFactory(
      descriptors.deprecatedInvoiceDetailOfInvoice,
    ),
    /** Get details of an Invoice. */
    invoiceDetail: this.requestFunctionFactory(descriptors.invoiceDetail),
    /** Get InvoiceSettings of a Customer. */
    invoiceGetDetailOfInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceGetDetailOfInvoiceSettings,
    ),
    /** Update InvoiceSettings of a Customer. */
    invoiceUpdateInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceUpdateInvoiceSettings,
    ),
    /** Request an Access Token for a file of the Invoice. */
    invoiceGetFileAccessToken: this.requestFunctionFactory(
      descriptors.invoiceGetFileAccessToken,
    ),
    /** List Invoices of a Customer. */
    invoiceListCustomerInvoices: this.requestFunctionFactory(
      descriptors.invoiceListCustomerInvoices,
    ),
    /** Get list of Orders. */
    orderListOrders: this.requestFunctionFactory(descriptors.orderListOrders),
    /** Create an Order. */
    orderCreateOrder: this.requestFunctionFactory(descriptors.orderCreateOrder),
    /** Create TariffChange Order. */
    orderCreateTariffChange: this.requestFunctionFactory(
      descriptors.orderCreateTariffChange,
    ),
    /** Get Order for Customer. */
    orderGetOrder: this.requestFunctionFactory(descriptors.orderGetOrder),
    /** Get list of Orders of a Customer. */
    orderListCustomerOrders: this.requestFunctionFactory(
      descriptors.orderListCustomerOrders,
    ),
    /** Get list of Orders of a Project. */
    orderListProjectOrders: this.requestFunctionFactory(
      descriptors.orderListProjectOrders,
    ),
    /** Preview Order. */
    orderPreviewOrder: this.requestFunctionFactory(
      descriptors.orderPreviewOrder,
    ),
    /** Preview TariffChange. */
    orderPreviewTariffChange: this.requestFunctionFactory(
      descriptors.orderPreviewTariffChange,
    ),
  };

  /** The marketplace API allows you to manage extensions and more information regaring the marketplace. */
  public readonly marketplace = {
    /** Start the verification process of a contributor. */
    contributorRequestVerification: this.requestFunctionFactory(
      descriptors.contributorRequestVerification,
    ),
    /** Cancel the verification-process of a contributor. */
    contributorCancelVerification: this.requestFunctionFactory(
      descriptors.contributorCancelVerification,
    ),
    /** Get a Contributor. */
    extensionGetContributor: this.requestFunctionFactory(
      descriptors.extensionGetContributor,
    ),
    /** Delete a Contributor. */
    contributorDeleteContributor: this.requestFunctionFactory(
      descriptors.contributorDeleteContributor,
    ),
    /** Patch Contributor. */
    contributorPatchContributor: this.requestFunctionFactory(
      descriptors.contributorPatchContributor,
    ),
    /** Express interest to be a contributor. */
    contributorExpressInterestToContribute: this.requestFunctionFactory(
      descriptors.contributorExpressInterestToContribute,
    ),
    /** Get Contributor Billing Information. */
    contributorGetBillingInformation: this.requestFunctionFactory(
      descriptors.contributorGetBillingInformation,
    ),
    /** Update Contributor Billing Information. */
    contributorUpdateBillingInformation: this.requestFunctionFactory(
      descriptors.contributorUpdateBillingInformation,
    ),
    /** Get the Stripe Billing Portal Link for a Customer */
    contributorGetCustomerBillingPortalLink: this.requestFunctionFactory(
      descriptors.contributorGetCustomerBillingPortalLink,
    ),
    /** Get the Stripe Dashboard Link for a Contributor. */
    contributorGetLoginLink: this.requestFunctionFactory(
      descriptors.contributorGetLoginLink,
    ),
    /** Get a specific OAuth2 client. */
    contributorGetOauthClient: this.requestFunctionFactory(
      descriptors.contributorGetOauthClient,
    ),
    /** List ContractPartners of the contributor. */
    contributorListContractPartnersOfContributor: this.requestFunctionFactory(
      descriptors.contributorListContractPartnersOfContributor,
    ),
    /** List incoming Invoices of a Contributor. */
    contributorListIncomingInvoices: this.requestFunctionFactory(
      descriptors.contributorListIncomingInvoices,
    ),
    /** List all invoices on behalf of a contributor. */
    contributorListOnbehalfInvoices: this.requestFunctionFactory(
      descriptors.contributorListOnbehalfInvoices,
    ),
    /** Request an Access Token for the Incoming Invoice file. */
    contributorReceiptGetFileAccessToken: this.requestFunctionFactory(
      descriptors.contributorReceiptGetFileAccessToken,
    ),
    /** Add a deviating avatar to a Contributor. */
    contributorRequestDeviatingContributorAvatarUpload:
      this.requestFunctionFactory(
        descriptors.contributorRequestDeviatingContributorAvatarUpload,
      ),
    /** Delete deviating contributor avatar und return to the inherited customer avatar. */
    contributorResetContributorAvatar: this.requestFunctionFactory(
      descriptors.contributorResetContributorAvatar,
    ),
    /** Rotate the secret for an extension instance. */
    contributorRotateSecretForExtensionInstance: this.requestFunctionFactory(
      descriptors.contributorRotateSecretForExtensionInstance,
    ),
    /** Authenticate your external application using the extensionInstanceSecret. */
    extensionAuthenticateInstance: this.requestFunctionFactory(
      descriptors.extensionAuthenticateInstance,
    ),
    /** Authenticate your external application using a session token and an extension secret */
    extensionAuthenticateWithSessionToken: this.requestFunctionFactory(
      descriptors.extensionAuthenticateWithSessionToken,
    ),
    /** Schedule an Extension Instance Termination for the next possible date. */
    extensionScheduleExtensionTermination: this.requestFunctionFactory(
      descriptors.extensionScheduleExtensionTermination,
    ),
    /** Cancel an Extension Instance Termination. */
    extensionCancelExtensionTermination: this.requestFunctionFactory(
      descriptors.extensionCancelExtensionTermination,
    ),
    /** Schedule an Extension Instance Variant change for the next possible date. */
    extensionScheduleExtensionVariantChange: this.requestFunctionFactory(
      descriptors.extensionScheduleExtensionVariantChange,
    ),
    /** Cancel an Extension Instance Variant Change. */
    extensionCancelExtensionVariantChange: this.requestFunctionFactory(
      descriptors.extensionCancelExtensionVariantChange,
    ),
    /** Change the context of an Extension. */
    extensionChangeContext: this.requestFunctionFactory(
      descriptors.extensionChangeContext,
    ),
    /** Check if an Extension is unchargable for this specific context or if it must be charged. */
    extensionCheckExtensionIsChargable: this.requestFunctionFactory(
      descriptors.extensionCheckExtensionIsChargable,
    ),
    /** Consent to extension scopes. */
    extensionConsentToExtensionScopes: this.requestFunctionFactory(
      descriptors.extensionConsentToExtensionScopes,
    ),
    /** Create the OnboardingProcess of a Contributor. */
    extensionCreateContributorOnboardingProcess: this.requestFunctionFactory(
      descriptors.extensionCreateContributorOnboardingProcess,
    ),
    /** List ExtensionInstances. */
    extensionListExtensionInstances: this.requestFunctionFactory(
      descriptors.extensionListExtensionInstances,
    ),
    /** Create an ExtensionInstance. */
    extensionCreateExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionCreateExtensionInstance,
    ),
    /** Create an access token retrieval key for an extension instance. */
    extensionCreateRetrievalKey: this.requestFunctionFactory(
      descriptors.extensionCreateRetrievalKey,
    ),
    /** Get an ExtensionInstance. */
    extensionGetExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstance,
    ),
    /** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead. */
    extensionDeleteExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionDeleteExtensionInstance,
    ),
    /** Get Extension of own contributor. */
    extensionGetOwnExtension: this.requestFunctionFactory(
      descriptors.extensionGetOwnExtension,
    ),
    /** Delete an Extension. */
    extensionDeleteExtension: this.requestFunctionFactory(
      descriptors.extensionDeleteExtension,
    ),
    /** Patch Extension. */
    extensionPatchExtension: this.requestFunctionFactory(
      descriptors.extensionPatchExtension,
    ),
    /** Disable an ExtensionInstance. */
    extensionDisableExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionDisableExtensionInstance,
    ),
    /** Dry run a webhook with random or given values. */
    extensionDryRunWebhook: this.requestFunctionFactory(
      descriptors.extensionDryRunWebhook,
    ),
    /** Enable an ExtensionInstance. */
    extensionEnableExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionEnableExtensionInstance,
    ),
    /** Generate an Extension secret for the given Extension. */
    extensionGenerateExtensionSecret: this.requestFunctionFactory(
      descriptors.extensionGenerateExtensionSecret,
    ),
    /** Generate a session token to transmit it to the extensions frontend fragment. */
    extensionGenerateSessionToken: this.requestFunctionFactory(
      descriptors.extensionGenerateSessionToken,
    ),
    /** Get all open extension orders for given customer */
    extensionGetCustomerExtensionInstanceOrders: this.requestFunctionFactory(
      descriptors.extensionGetCustomerExtensionInstanceOrders,
    ),
    /** Get the Contract Strategy of an Extension Instance */
    extensionGetExtensionInstanceContract: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceContract,
    ),
    /** Update or Create Contract for existing Extension Instances. */
    extensionUpdateExtensionInstanceContract: this.requestFunctionFactory(
      descriptors.extensionUpdateExtensionInstanceContract,
    ),
    /** Get the ExtensionInstance of a specific customer and extension, if existing. */
    extensionGetExtensionInstanceForCustomer: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceForCustomer,
    ),
    /** Get the ExtensionInstance of a specific project and extension, if existing. */
    extensionGetExtensionInstanceForProject: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceForProject,
    ),
    /** Get an Extension. */
    extensionGetExtension: this.requestFunctionFactory(
      descriptors.extensionGetExtension,
    ),
    /** Get all open extension orders for given project */
    extensionGetProjectExtensionInstanceOrders: this.requestFunctionFactory(
      descriptors.extensionGetProjectExtensionInstanceOrders,
    ),
    /**
     * Get the public key to verify the webhook signature.
     * @deprecated
     */
    getV2WebhookPublicKeysSerial: this.requestFunctionFactory(
      descriptors.getV2WebhookPublicKeysSerial,
    ),
    /** Get the public key to verify the webhook signature. */
    extensionGetPublicKey: this.requestFunctionFactory(
      descriptors.extensionGetPublicKey,
    ),
    /** Invalidate the given Extension secret immediately. */
    extensionInvalidateExtensionSecret: this.requestFunctionFactory(
      descriptors.extensionInvalidateExtensionSecret,
    ),
    /** List all Webhook Executions. */
    extensionListAllExtensionInstanceWebhookExecutions:
      this.requestFunctionFactory(
        descriptors.extensionListAllExtensionInstanceWebhookExecutions,
      ),
    /** List Contributors. */
    extensionListContributors: this.requestFunctionFactory(
      descriptors.extensionListContributors,
    ),
    /** List Extensions. */
    extensionListExtensions: this.requestFunctionFactory(
      descriptors.extensionListExtensions,
    ),
    /** List Extensions of own contributor. */
    extensionListOwnExtensions: this.requestFunctionFactory(
      descriptors.extensionListOwnExtensions,
    ),
    /** Register an Extension. */
    extensionRegisterExtension: this.requestFunctionFactory(
      descriptors.extensionRegisterExtension,
    ),
    /** List Scopes. */
    extensionListScopes: this.requestFunctionFactory(
      descriptors.extensionListScopes,
    ),
    /** Order Extension with saved payment method */
    extensionOrderExtension: this.requestFunctionFactory(
      descriptors.extensionOrderExtension,
    ),
    /** Remove an asset of an extension. */
    extensionRemoveAsset: this.requestFunctionFactory(
      descriptors.extensionRemoveAsset,
    ),
    /** Add a logo to an extension. */
    extensionRequestLogoUpload: this.requestFunctionFactory(
      descriptors.extensionRequestLogoUpload,
    ),
    /** Remove the logo of an extension. */
    extensionRemoveLogo: this.requestFunctionFactory(
      descriptors.extensionRemoveLogo,
    ),
    /** Add an asset to an extension. */
    extensionRequestAssetUpload: this.requestFunctionFactory(
      descriptors.extensionRequestAssetUpload,
    ),
    /** Start the verification process of an Extension. */
    extensionRequestExtensionVerification: this.requestFunctionFactory(
      descriptors.extensionRequestExtensionVerification,
    ),
    /** Resume the webhook execution of an ExtensionInstance. */
    extensionResumeWebhookExecutionForExtensionInstance:
      this.requestFunctionFactory(
        descriptors.extensionResumeWebhookExecutionForExtensionInstance,
      ),
    /** Publish or withdraw an Extension. */
    extensionSetExtensionPublishedState: this.requestFunctionFactory(
      descriptors.extensionSetExtensionPublishedState,
    ),
    /** Creates or Updates Pricing for an Extension. */
    extensionUpdateExtensionPricing: this.requestFunctionFactory(
      descriptors.extensionUpdateExtensionPricing,
    ),
    /** Get payment method details */
    customerGetPaymentMethod: this.requestFunctionFactory(
      descriptors.marketplaceCustomerGetPaymentMethod,
    ),
    /** Get the link to update the marketplace payment method */
    customerUpdatePaymentMethod: this.requestFunctionFactory(
      descriptors.marketplaceCustomerUpdatePaymentMethod,
    ),
  };

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation = {
    /** Get all conversation the authenticated user has created or has access to. */
    listConversations: this.requestFunctionFactory(
      descriptors.conversationListConversations,
    ),
    /** Create a conversation. */
    createConversation: this.requestFunctionFactory(
      descriptors.conversationCreateConversation,
    ),
    /** Get all message of the conversation. */
    listMessagesByConversation: this.requestFunctionFactory(
      descriptors.conversationListMessagesByConversation,
    ),
    /** Send a new message in the conversation. */
    createMessage: this.requestFunctionFactory(
      descriptors.conversationCreateMessage,
    ),
    /** Get a specific conversation category. */
    getCategory: this.requestFunctionFactory(
      descriptors.conversationGetCategory,
    ),
    /** Get members of a support conversation. */
    getConversationMembers: this.requestFunctionFactory(
      descriptors.conversationGetConversationMembers,
    ),
    /** Get preferences for customer conversations. */
    getConversationPreferencesOfCustomer: this.requestFunctionFactory(
      descriptors.conversationGetConversationPreferencesOfCustomer,
    ),
    /** Get a support conversation. */
    getConversation: this.requestFunctionFactory(
      descriptors.conversationGetConversation,
    ),
    /** Update the basic properties of the conversation. */
    updateConversation: this.requestFunctionFactory(
      descriptors.conversationUpdateConversation,
    ),
    /** Request an access token for the File belonging to the Conversation. */
    getFileAccessToken: this.requestFunctionFactory(
      descriptors.conversationGetFileAccessToken,
    ),
    /** Get all conversation categories. */
    listCategories: this.requestFunctionFactory(
      descriptors.conversationListCategories,
    ),
    /** Request a file upload token for the conversation. */
    requestFileUpload: this.requestFunctionFactory(
      descriptors.conversationRequestFileUpload,
    ),
    /** Update the status of a conversation. */
    setConversationStatus: this.requestFunctionFactory(
      descriptors.conversationSetConversationStatus,
    ),
    /** Update the content of the message */
    updateMessage: this.requestFunctionFactory(
      descriptors.conversationUpdateMessage,
    ),
  };

  /** The cronjob API allows you to manage cronjobs within a project. */
  public readonly cronjob = {
    /** List Cronjobs belonging to a Project. */
    listCronjobs: this.requestFunctionFactory(descriptors.cronjobListCronjobs),
    /** Create a Cronjob. */
    createCronjob: this.requestFunctionFactory(
      descriptors.cronjobCreateCronjob,
    ),
    /** List CronjobExecutions belonging to a Cronjob. */
    listExecutions: this.requestFunctionFactory(
      descriptors.cronjobListExecutions,
    ),
    /** Trigger a Cronjob. */
    createExecution: this.requestFunctionFactory(
      descriptors.cronjobCreateExecution,
    ),
    /** Get a Cronjob. */
    getCronjob: this.requestFunctionFactory(descriptors.cronjobGetCronjob),
    /** Delete a Cronjob. */
    deleteCronjob: this.requestFunctionFactory(
      descriptors.cronjobDeleteCronjob,
    ),
    /** Update a Cronjob. */
    updateCronjob: this.requestFunctionFactory(
      descriptors.cronjobUpdateCronjob,
    ),
    /** Get a CronjobExecution analysis for failed executions. */
    getExecutionAnalysis: this.requestFunctionFactory(
      descriptors.cronjobGetExecutionAnalysis,
    ),
    /** Get a CronjobExecution. */
    getExecution: this.requestFunctionFactory(descriptors.cronjobGetExecution),
    /**
     * Update a Cronjob's app installation id.
     * @deprecated
     */
    deprecatedCronjobReplaceCronjobAppInstallationId:
      this.requestFunctionFactory(
        descriptors.deprecatedCronjobReplaceCronjobAppInstallationId,
      ),
    /**
     * Update a Cronjob's app installation id.
     * @deprecated
     */
    deprecatedCronjobUpdateCronjobAppId: this.requestFunctionFactory(
      descriptors.deprecatedCronjobUpdateCronjobAppId,
    ),
    /**
     * Update a Cronjob's app installation id.
     * @deprecated
     */
    patchV2CronjobsCronjobIdAppId: this.requestFunctionFactory(
      descriptors.patchV2CronjobsCronjobIdAppId,
    ),
  };

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer = {
    /** Accept a CustomerInvite. */
    acceptCustomerInvite: this.requestFunctionFactory(
      descriptors.customerAcceptCustomerInvite,
    ),
    /**
     * Create a CustomerInvite.
     * @deprecated
     */
    postV2CustomerCustomerIdInvites: this.requestFunctionFactory(
      descriptors.postV2CustomerCustomerIdInvites,
    ),
    /** List Invites belonging to a Customer. */
    listInvitesForCustomer: this.requestFunctionFactory(
      descriptors.customerListInvitesForCustomer,
    ),
    /** Create a CustomerInvite. */
    createCustomerInvite: this.requestFunctionFactory(
      descriptors.customerCreateCustomerInvite,
    ),
    /** Get all customer profiles the authenticated user has access to. */
    listCustomers: this.requestFunctionFactory(
      descriptors.customerListCustomers,
    ),
    /** Create a new customer profile. */
    createCustomer: this.requestFunctionFactory(
      descriptors.customerCreateCustomer,
    ),
    /** Lets us know your idea for our recommendation programm. */
    createRecommendationSuggestion: this.requestFunctionFactory(
      descriptors.customerCreateRecommendationSuggestion,
    ),
    /** Gets the Wallet of the Customer. */
    getWallet: this.requestFunctionFactory(descriptors.customerGetWallet),
    /** Create the Wallet for the Customer. */
    createWallet: this.requestFunctionFactory(descriptors.customerCreateWallet),
    /** Decline a CustomerInvite. */
    declineCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeclineCustomerInvite,
    ),
    /** Get a CustomerInvite. */
    getCustomerInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerInvite,
    ),
    /** Delete a CustomerInvite. */
    deleteCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerInvite,
    ),
    /** Get a CustomerMembership. */
    getCustomerMembership: this.requestFunctionFactory(
      descriptors.customerGetCustomerMembership,
    ),
    /** Delete a CustomerMembership. */
    deleteCustomerMembership: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerMembership,
    ),
    /** Update a CustomerMembership. */
    updateCustomerMembership: this.requestFunctionFactory(
      descriptors.customerUpdateCustomerMembership,
    ),
    /** Get a customer profile. */
    getCustomer: this.requestFunctionFactory(descriptors.customerGetCustomer),
    /** Update a customer profile. */
    updateCustomer: this.requestFunctionFactory(
      descriptors.customerUpdateCustomer,
    ),
    /** Delete a customer profile. */
    deleteCustomer: this.requestFunctionFactory(
      descriptors.customerDeleteCustomer,
    ),
    /** Get a CustomerInvite by token. */
    getCustomerTokenInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerTokenInvite,
    ),
    /** Check if the customer profile has a valid contract partner configured. */
    isCustomerLegallyCompetent: this.requestFunctionFactory(
      descriptors.customerIsCustomerLegallyCompetent,
    ),
    /** List CustomerInvites belonging to the executing user. */
    listCustomerInvites: this.requestFunctionFactory(
      descriptors.customerListCustomerInvites,
    ),
    /** List CustomerMemberships belonging to the executing user. */
    listCustomerMemberships: this.requestFunctionFactory(
      descriptors.customerListCustomerMemberships,
    ),
    /** List Memberships belonging to a Customer. */
    listMembershipsForCustomer: this.requestFunctionFactory(
      descriptors.customerListMembershipsForCustomer,
    ),
    /** Request a new avatar upload for the customer profile. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.customerRequestAvatarUpload,
    ),
    /** Remove the avatar picture of the customer profile. */
    removeAvatar: this.requestFunctionFactory(descriptors.customerRemoveAvatar),
    /** Resend the mail for a CustomerInvite. */
    resendCustomerInviteMail: this.requestFunctionFactory(
      descriptors.customerResendCustomerInviteMail,
    ),
    /** Set how the customer became aware of mittwald. */
    setCustomerReferralSource: this.requestFunctionFactory(
      descriptors.customerSetCustomerReferralSource,
    ),
    /**
     * Leave a Customer.
     * @deprecated
     */
    postV2CustomerCustomerIdActionsLeave: this.requestFunctionFactory(
      descriptors.postV2CustomerCustomerIdActionsLeave,
    ),
    /**
     * Leave a Customer.
     * @deprecated
     */
    deprecatedCustomerLeaveCustomer: this.requestFunctionFactory(
      descriptors.deprecatedCustomerLeaveCustomer,
    ),
  };

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database = {
    /** Copy a MySQLDatabase with a MySQLUser. */
    copyMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseCopyMysqlDatabase,
    ),
    /** List MySQLDatabases belonging to a Project. */
    listMysqlDatabases: this.requestFunctionFactory(
      descriptors.databaseListMysqlDatabases,
    ),
    /** Create a MySQLDatabase with a MySQLUser. */
    createMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlDatabase,
    ),
    /** List MySQLUsers belonging to a Database. */
    listMysqlUsers: this.requestFunctionFactory(
      descriptors.databaseListMysqlUsers,
    ),
    /** Create a MySQLUser. */
    createMysqlUser: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlUser,
    ),
    /** List RedisDatabases belonging to a Project. */
    listRedisDatabases: this.requestFunctionFactory(
      descriptors.databaseListRedisDatabases,
    ),
    /** Create a RedisDatabase. */
    createRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateRedisDatabase,
    ),
    /** Get a MySQLDatabase. */
    getMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseGetMysqlDatabase,
    ),
    /** Delete a MySQLDatabase. */
    deleteMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlDatabase,
    ),
    /** Update a MySqlDatabase. */
    patchMysqlDatabase: this.requestFunctionFactory(
      descriptors.databasePatchMysqlDatabase,
    ),
    /** Get a MySQLUser. */
    getMysqlUser: this.requestFunctionFactory(descriptors.databaseGetMysqlUser),
    /**
     * Update a MySQLUser.
     * @deprecated
     */
    deprecatedDatabaseReplaceMysqlUser: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseReplaceMysqlUser,
    ),
    /** Delete a MySQLUser. */
    deleteMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlUser,
    ),
    /** Update a MySQLUser. */
    updateMysqlUser: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlUser,
    ),
    /** Get a RedisDatabase. */
    getRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseGetRedisDatabase,
    ),
    /** Delete a RedisDatabase. */
    deleteRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteRedisDatabase,
    ),
    /** Update a RedisDatabase. */
    patchRedisDatabase: this.requestFunctionFactory(
      descriptors.databasePatchRedisDatabase,
    ),
    /** Disable a MySQLUser. */
    disableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDisableMysqlUser,
    ),
    /** Enable a MySQLUser. */
    enableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseEnableMysqlUser,
    ),
    /** Get a MySQLUser's PhpMyAdmin-URL. */
    getMysqlUserPhpMyAdminUrl: this.requestFunctionFactory(
      descriptors.databaseGetMysqlUserPhpMyAdminUrl,
    ),
    /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
    listMysqlCharsets: this.requestFunctionFactory(
      descriptors.databaseListMysqlCharsets,
    ),
    /** List MySQLVersions. */
    listMysqlVersions: this.requestFunctionFactory(
      descriptors.databaseListMysqlVersions,
    ),
    /** List RedisVersions. */
    listRedisVersions: this.requestFunctionFactory(
      descriptors.databaseListRedisVersions,
    ),
    /**
     * Update a MySQLDatabase's default character settings.
     * @deprecated
     */
    deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset,
      ),
    /**
     * Update a MySQLDatabase's description.
     * @deprecated
     */
    deprecatedDatabaseUpdateMysqlDatabaseDescription:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateMysqlDatabaseDescription,
      ),
    /**
     * Update a MySQLUser's password.
     * @deprecated
     */
    deprecatedDatabaseUpdateMysqlUserPassword: this.requestFunctionFactory(
      descriptors.deprecatedDatabaseUpdateMysqlUserPassword,
    ),
    /**
     * Update a RedisDatabase's configuration.
     * @deprecated
     */
    deprecatedDatabaseUpdateRedisDatabaseConfiguration:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateRedisDatabaseConfiguration,
      ),
    /**
     * Update a RedisDatabase's description.
     * @deprecated
     */
    deprecatedDatabaseUpdateRedisDatabaseDescription:
      this.requestFunctionFactory(
        descriptors.deprecatedDatabaseUpdateRedisDatabaseDescription,
      ),
  };

  /** The domain API allows you to manage your domains, DNS records, SSL certificates and ingress resources. */
  public readonly domain = {
    /**
     * updates a-records for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordAsetCustom: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordAsetCustom,
    ),
    /**
     * set a-records managed by ingress for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordAsetManagedByIngress: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordAsetManagedByIngress,
    ),
    /**
     * updates cname-record for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordCnameSet: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordCnameSet,
    ),
    /**
     * updates mx-records for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordMxSetCustom: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordMxSetCustom,
    ),
    /**
     * sets mx-records to managed for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordMxSetManaged: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordMxSetManaged,
    ),
    /**
     * updates srv-records for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordSrvSet: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordSrvSet,
    ),
    /**
     * updates txt-records for a specific zone
     * @deprecated
     */
    deprecatedDnsRecordTxtSet: this.requestFunctionFactory(
      descriptors.deprecatedDnsRecordTxtSet,
    ),
    /**
     * Change the owner contact of a domain.
     * @deprecated
     */
    deprecatedDomainChangeOwnercOfDomain: this.requestFunctionFactory(
      descriptors.deprecatedDomainChangeOwnercOfDomain,
    ),
    /**
     * Change the Project relation of a Domain.
     * @deprecated
     */
    deprecatedDomainChangeProjectOfDomain: this.requestFunctionFactory(
      descriptors.deprecatedDomainChangeProjectOfDomain,
    ),
    /** List Domains */
    listDomains: this.requestFunctionFactory(descriptors.domainListDomains),
    /**
     * Check if a Domain is available to register.
     * @deprecated
     */
    deprecatedDomainCheckDomainRegistrability: this.requestFunctionFactory(
      descriptors.deprecatedDomainCheckDomainRegistrability,
    ),
    /**
     * Change all nameservers of a Domain.
     * @deprecated
     */
    deprecatedDomainDeclareNameservers: this.requestFunctionFactory(
      descriptors.deprecatedDomainDeclareNameservers,
    ),
    /** Update the nameservers of a Domain. */
    updateDomainNameservers: this.requestFunctionFactory(
      descriptors.domainUpdateDomainNameservers,
    ),
    /**
     * Update an AuthCode.
     * @deprecated
     */
    deprecatedDomainDeclareProcessChangeAuthcode: this.requestFunctionFactory(
      descriptors.deprecatedDomainDeclareProcessChangeAuthcode,
    ),
    /**
     * Update a Domain's OwnerC handle.
     * @deprecated
     */
    deprecatedDomainDeclareProcessChangeHandles: this.requestFunctionFactory(
      descriptors.deprecatedDomainDeclareProcessChangeHandles,
    ),
    /**
     * Get a HandleSchema.
     * @deprecated
     */
    deprecatedDomainGetHandleFields: this.requestFunctionFactory(
      descriptors.deprecatedDomainGetHandleFields,
    ),
    /**
     * Get File Service Reference for a Screenshot of a domain.
     * @deprecated
     */
    deprecatedDomainGetScreenshotForDomain: this.requestFunctionFactory(
      descriptors.deprecatedDomainGetScreenshotForDomain,
    ),
    /**
     * List Domains belonging to a Project.
     * @deprecated
     */
    deprecatedDomainListDomains: this.requestFunctionFactory(
      descriptors.deprecatedDomainListDomains,
    ),
    /**
     * List Ingresses belonging to a project.
     * @deprecated
     */
    deprecatedIngressListIngresses: this.requestFunctionFactory(
      descriptors.deprecatedIngressListIngresses,
    ),
    /**
     * Update an Ingresses paths.
     * @deprecated
     */
    deprecatedIngressPaths: this.requestFunctionFactory(
      descriptors.deprecatedIngressPaths,
    ),
    /** Update the paths of an Ingress. */
    ingressUpdateIngressPaths: this.requestFunctionFactory(
      descriptors.ingressUpdateIngressPaths,
    ),
    /**
     * Update an Ingresses tls settings.
     * @deprecated
     */
    deprecatedIngressTls: this.requestFunctionFactory(
      descriptors.deprecatedIngressTls,
    ),
    /** Update the tls settings of an Ingress. */
    ingressUpdateIngressTls: this.requestFunctionFactory(
      descriptors.ingressUpdateIngressTls,
    ),
    /** List DNS zone-file import jobs belonging to a Project. */
    dnsListDnsZoneFileImports: this.requestFunctionFactory(
      descriptors.dnsListDnsZoneFileImports,
    ),
    /** Import a DNS zone file into a Project, or preview it with dry-run. */
    dnsCreateDnsZoneFileImport: this.requestFunctionFactory(
      descriptors.dnsCreateDnsZoneFileImport,
    ),
    /**
     * Create a DNSZone (deprecated).
     * @deprecated
     */
    postV2DnsZones: this.requestFunctionFactory(descriptors.postV2DnsZones),
    /**
     * Create a DNSZone (deprecated).
     * @deprecated
     */
    dnsCreateDnsZone: this.requestFunctionFactory(descriptors.dnsCreateDnsZone),
    /** List DNSZones belonging to a Project. */
    dnsListDnsZones: this.requestFunctionFactory(descriptors.dnsListDnsZones),
    /** Create a DNSZone for a verified Ingress in a Project. */
    dnsCreateProjectDnsZone: this.requestFunctionFactory(
      descriptors.dnsCreateProjectDnsZone,
    ),
    /**
     * Get a DNSZone.
     * @deprecated
     */
    getV2DnsZonesDnsZoneId: this.requestFunctionFactory(
      descriptors.getV2DnsZonesDnsZoneId,
    ),
    /**
     * Delete a DNSZone.
     * @deprecated
     */
    deleteV2DnsZonesDnsZoneId: this.requestFunctionFactory(
      descriptors.deleteV2DnsZonesDnsZoneId,
    ),
    /** Get a DNSZone. */
    dnsGetDnsZone: this.requestFunctionFactory(descriptors.dnsGetDnsZone),
    /** Delete a DNSZone. */
    dnsDeleteDnsZone: this.requestFunctionFactory(descriptors.dnsDeleteDnsZone),
    /** Get the status of a DNS zone-file import job. */
    dnsGetDnsZoneFileImport: this.requestFunctionFactory(
      descriptors.dnsGetDnsZoneFileImport,
    ),
    /** Get a zone file for a DNSZone. */
    dnsGetZoneFile: this.requestFunctionFactory(descriptors.dnsGetZoneFile),
    /**
     * List DNSZones belonging to a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdDnsZones: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdDnsZones,
    ),
    /** Set a record set on a DNSZone to managed. */
    dnsSetRecordSetManaged: this.requestFunctionFactory(
      descriptors.dnsSetRecordSetManaged,
    ),
    /** Update a record set on a DNSZone. */
    dnsUpdateRecordSet: this.requestFunctionFactory(
      descriptors.dnsUpdateRecordSet,
    ),
    /**
     * Abort a Domain declaration.
     * @deprecated
     */
    deleteV2DomainsDomainIdDeclarations: this.requestFunctionFactory(
      descriptors.deleteV2DomainsDomainIdDeclarations,
    ),
    /** Abort a Domain declaration. */
    abortDomainDeclaration: this.requestFunctionFactory(
      descriptors.domainAbortDomainDeclaration,
    ),
    /** Create a scheduled deletion of a Domain. */
    createScheduledDeletion: this.requestFunctionFactory(
      descriptors.domainCreateScheduledDeletion,
    ),
    /** Cancel a scheduled deletion of a Domain. */
    cancelScheduledDeletion: this.requestFunctionFactory(
      descriptors.domainCancelScheduledDeletion,
    ),
    /** Check if a Domain is available to register. */
    checkDomainRegistrability: this.requestFunctionFactory(
      descriptors.domainCheckDomainRegistrability,
    ),
    /** Check if a Domain is available to transfer. */
    checkDomainTransferability: this.requestFunctionFactory(
      descriptors.domainCheckDomainTransferability,
    ),
    /**
     * Create an auth code for a Domains transfer-out process.
     * @deprecated
     */
    postV2DomainsDomainIdActionsCreateAuthcode: this.requestFunctionFactory(
      descriptors.postV2DomainsDomainIdActionsCreateAuthcode,
    ),
    /** Create an auth code for a Domains transfer-out process. */
    createDomainAuthCode: this.requestFunctionFactory(
      descriptors.domainCreateDomainAuthCode,
    ),
    /** Get a Domain. */
    getDomain: this.requestFunctionFactory(descriptors.domainGetDomain),
    /** Delete a Domain. */
    deleteDomain: this.requestFunctionFactory(descriptors.domainDeleteDomain),
    /** Get a Contact-Verification. */
    getContactVerification: this.requestFunctionFactory(
      descriptors.domainGetContactVerification,
    ),
    /** Get the latest screenshot's FileReference belonging to a Domain. */
    getLatestScreenshot: this.requestFunctionFactory(
      descriptors.domainGetLatestScreenshot,
    ),
    /** List Contact-Verifications belonging to the executing user. */
    listContactVerifications: this.requestFunctionFactory(
      descriptors.domainListContactVerifications,
    ),
    /** List the contact schemas for a TLD. */
    listTldContactSchemas: this.requestFunctionFactory(
      descriptors.domainListTldContactSchemas,
    ),
    /**
     * List TLDs.
     * @deprecated
     */
    getV2DomainsSupportedTlds: this.requestFunctionFactory(
      descriptors.getV2DomainsSupportedTlds,
    ),
    /** List TLDs. */
    listTlds: this.requestFunctionFactory(descriptors.domainListTlds),
    /** List Domain-Migrations belonging to a Project. */
    migrationListMigrationsByProjectId: this.requestFunctionFactory(
      descriptors.domainMigrationListMigrationsByProjectId,
    ),
    /** Resends a Contact-Verification email. */
    resendContactVerificationEmail: this.requestFunctionFactory(
      descriptors.domainResendContactVerificationEmail,
    ),
    /** Resend a Domain email. */
    resendDomainEmail: this.requestFunctionFactory(
      descriptors.domainResendDomainEmail,
    ),
    /** Suggest a list of domains based on a prompt using AI. */
    suggest: this.requestFunctionFactory(descriptors.domainSuggest),
    /**
     * Update the auth code of a Domain.
     * @deprecated
     */
    patchV2DomainsDomainIdAuthcode: this.requestFunctionFactory(
      descriptors.patchV2DomainsDomainIdAuthcode,
    ),
    /** Update the auth code of a Domain. */
    updateDomainAuthCode: this.requestFunctionFactory(
      descriptors.domainUpdateDomainAuthCode,
    ),
    /** Update a contact of a Domain. */
    updateDomainContact: this.requestFunctionFactory(
      descriptors.domainUpdateDomainContact,
    ),
    /** Update a Domain's project id. */
    updateDomainProjectId: this.requestFunctionFactory(
      descriptors.domainUpdateDomainProjectId,
    ),
    /** List Ingresses. */
    ingressListIngresses: this.requestFunctionFactory(
      descriptors.ingressListIngresses,
    ),
    /** Create an Ingress. */
    ingressCreateIngress: this.requestFunctionFactory(
      descriptors.ingressCreateIngress,
    ),
    /** Get an Ingress. */
    ingressGetIngress: this.requestFunctionFactory(
      descriptors.ingressGetIngress,
    ),
    /** Delete an Ingress. */
    ingressDeleteIngress: this.requestFunctionFactory(
      descriptors.ingressDeleteIngress,
    ),
    /** Verifiy the ownership of an Ingress. */
    ingressIngressVerifyOwnership: this.requestFunctionFactory(
      descriptors.ingressIngressVerifyOwnership,
    ),
    /** List Ingresses compatible with a certificate. */
    ingressListIngressesCompatibleWithCertificate: this.requestFunctionFactory(
      descriptors.ingressListIngressesCompatibleWithCertificate,
    ),
    /** Request the ACME certificate issuance of an Ingress. */
    ingressRequestIngressAcmeCertificateIssuance: this.requestFunctionFactory(
      descriptors.ingressRequestIngressAcmeCertificateIssuance,
    ),
    /** Check the replacement of a Certificate. */
    sslCheckReplaceCertificate: this.requestFunctionFactory(
      descriptors.sslCheckReplaceCertificate,
    ),
    /** List CertificateRequests belonging to a Project or an Ingress. */
    sslListCertificateRequests: this.requestFunctionFactory(
      descriptors.sslListCertificateRequests,
    ),
    /** Create a CertificateRequest. */
    sslCreateCertificateRequest: this.requestFunctionFactory(
      descriptors.sslCreateCertificateRequest,
    ),
    /** Delete a CertificateRequest. */
    sslDeleteCertificateRequest: this.requestFunctionFactory(
      descriptors.sslDeleteCertificateRequest,
    ),
    /** Delete a Certificate. */
    sslDeleteCertificate: this.requestFunctionFactory(
      descriptors.sslDeleteCertificate,
    ),
    /** Get a CertificateRequest. */
    sslGetCertificateRequest: this.requestFunctionFactory(
      descriptors.sslGetCertificateRequest,
    ),
    /** Get a Certificate. */
    sslGetCertificate: this.requestFunctionFactory(
      descriptors.sslGetCertificate,
    ),
    /** Update a Certificate. */
    sslReplaceCertificate: this.requestFunctionFactory(
      descriptors.sslReplaceCertificate,
    ),
    /** List Certificates belonging to a Project or an Ingress. */
    sslListCertificates: this.requestFunctionFactory(
      descriptors.sslListCertificates,
    ),
  };

  /** The file API allows you to manage your files, for example for conversations attachments and avatar uploads. */
  public readonly file = {
    /**
     * Get a Token's upload rules.
     * @deprecated
     */
    deprecatedFileGetFileTokenRules: this.requestFunctionFactory(
      descriptors.deprecatedFileGetFileTokenRules,
    ),
    /**
     * Get a Type's upload rules.
     * @deprecated
     */
    deprecatedFileGetFileTypeRules: this.requestFunctionFactory(
      descriptors.deprecatedFileGetFileTypeRules,
    ),
    /** Create a File. */
    createFile: this.requestFunctionFactory(descriptors.fileCreateFile),
    /** Get a File's meta. */
    getFileMeta: this.requestFunctionFactory(descriptors.fileGetFileMeta),
    /** Get a FileUploadToken's rules. */
    getFileUploadTokenRules: this.requestFunctionFactory(
      descriptors.fileGetFileUploadTokenRules,
    ),
    /** Get a FileUploadType's rules. */
    getFileUploadTypeRules: this.requestFunctionFactory(
      descriptors.fileGetFileUploadTypeRules,
    ),
    /** Get a File. */
    getFile: this.requestFunctionFactory(descriptors.fileGetFile),
    /** Get a File with user-friendly url. */
    getFileWithName: this.requestFunctionFactory(
      descriptors.fileGetFileWithName,
    ),
  };

  /** The mail API allows you to manage your mail accounts. */
  public readonly mail = {
    /**
     * Update the description of an deliverybox
     * @deprecated
     */
    deprecatedMailDeliveryboxUpdateDescription: this.requestFunctionFactory(
      descriptors.deprecatedMailDeliveryboxUpdateDescription,
    ),
    /**
     * Update the password for a specific deliverybox
     * @deprecated
     */
    deprecatedMailDeliveryboxUpdatePassword: this.requestFunctionFactory(
      descriptors.deprecatedMailDeliveryboxUpdatePassword,
    ),
    /**
     * Update mail-address
     * @deprecated
     */
    deprecatedMailMailaddressUpdateAddress: this.requestFunctionFactory(
      descriptors.deprecatedMailMailaddressUpdateAddress,
    ),
    /**
     * Update blacklist for a given project ID
     * @deprecated
     */
    deprecatedMailProjectsettingUpdateBlacklist: this.requestFunctionFactory(
      descriptors.deprecatedMailProjectsettingUpdateBlacklist,
    ),
    /**
     * Update whitelist for a given project ID
     * @deprecated
     */
    deprecatedMailProjectsettingUpdateWhitelist: this.requestFunctionFactory(
      descriptors.deprecatedMailProjectsettingUpdateWhitelist,
    ),
    /**
     * Update the autoresponder of a MailAddress.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdAutoResponder: this.requestFunctionFactory(
      descriptors.putV2MailaddressesMailAddressIdAutoResponder,
    ),
    /**
     * Update the autoresponder of a MailAddress.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressAutoresponder: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateMailAddressAutoresponder,
    ),
    /** Update the autoresponder of a MailAddress. */
    updateMailAddressAutoresponder: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressAutoresponder,
    ),
    /**
     * Update the catchall of a MailAddress.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdCatchAll: this.requestFunctionFactory(
      descriptors.putV2MailaddressesMailAddressIdCatchAll,
    ),
    /**
     * Update the catchall of a MailAddress.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressCatchall: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateMailAddressCatchall,
    ),
    /**
     * Update the forward addresses of a MailAddresses.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdForwardaddresses:
      this.requestFunctionFactory(
        descriptors.putV2MailaddressesMailAddressIdForwardaddresses,
      ),
    /**
     * Update the forward addresses of a MailAddresses.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressForwardAddresses:
      this.requestFunctionFactory(
        descriptors.deprecatedMailUpdateMailAddressForwardAddresses,
      ),
    /** Update the forward addresses of a MailAddresses. */
    updateMailAddressForwardAddresses: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressForwardAddresses,
    ),
    /**
     * Update the password for a MailAddress.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdPassword: this.requestFunctionFactory(
      descriptors.putV2MailaddressesMailAddressIdPassword,
    ),
    /**
     * Update the password for a MailAddress.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressPassword: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateMailAddressPassword,
    ),
    /** Update the password for a MailAddress. */
    updateMailAddressPassword: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressPassword,
    ),
    /**
     * Update the quota of a MailAddress.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdQuota: this.requestFunctionFactory(
      descriptors.putV2MailaddressesMailAddressIdQuota,
    ),
    /**
     * Update the quota of a MailAddress.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressQuota: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateMailAddressQuota,
    ),
    /** Update the quota of a MailAddress. */
    updateMailAddressQuota: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressQuota,
    ),
    /**
     * Update the spam protection of a MailAddress.
     * @deprecated
     */
    putV2MailaddressesMailAddressIdSpamprotection: this.requestFunctionFactory(
      descriptors.putV2MailaddressesMailAddressIdSpamprotection,
    ),
    /**
     * Update the spam protection of a MailAddress.
     * @deprecated
     */
    deprecatedMailUpdateMailAddressSpamProtection: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateMailAddressSpamProtection,
    ),
    /** Update the spam protection of a MailAddress. */
    updateMailAddressSpamProtection: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressSpamProtection,
    ),
    /**
     * Update a mail setting of a Project.
     * @deprecated
     */
    deprecatedMailUpdateProjectMailSetting: this.requestFunctionFactory(
      descriptors.deprecatedMailUpdateProjectMailSetting,
    ),
    /** Update a mail setting of a Project. */
    updateProjectMailSetting: this.requestFunctionFactory(
      descriptors.mailUpdateProjectMailSetting,
    ),
    /**
     * List DeliveryBoxes belonging to a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdDeliveryboxes: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdDeliveryboxes,
    ),
    /**
     * Create a DeliveryBox.
     * @deprecated
     */
    postV2ProjectsProjectIdDeliveryboxes: this.requestFunctionFactory(
      descriptors.postV2ProjectsProjectIdDeliveryboxes,
    ),
    /** List DeliveryBoxes belonging to a Project. */
    listDeliveryBoxes: this.requestFunctionFactory(
      descriptors.mailListDeliveryBoxes,
    ),
    /** Create a DeliveryBox. */
    createDeliverybox: this.requestFunctionFactory(
      descriptors.mailCreateDeliverybox,
    ),
    /**
     * List MailAddresses belonging to a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdMailaddresses: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdMailaddresses,
    ),
    /**
     * Create a MailAddress.
     * @deprecated
     */
    postV2ProjectsProjectIdMailaddresses: this.requestFunctionFactory(
      descriptors.postV2ProjectsProjectIdMailaddresses,
    ),
    /** List MailAddresses belonging to a Project. */
    listMailAddresses: this.requestFunctionFactory(
      descriptors.mailListMailAddresses,
    ),
    /** Create a MailAddress. */
    createMailAddress: this.requestFunctionFactory(
      descriptors.mailCreateMailAddress,
    ),
    /**
     * Get a DeliveryBox.
     * @deprecated
     */
    getV2DeliveryboxesDeliveryBoxId: this.requestFunctionFactory(
      descriptors.getV2DeliveryboxesDeliveryBoxId,
    ),
    /**
     * Delete a DeliveryBox.
     * @deprecated
     */
    deleteV2DeliveryboxesDeliveryBoxId: this.requestFunctionFactory(
      descriptors.deleteV2DeliveryboxesDeliveryBoxId,
    ),
    /** Get a DeliveryBox. */
    getDeliveryBox: this.requestFunctionFactory(descriptors.mailGetDeliveryBox),
    /** Delete a DeliveryBox. */
    deleteDeliveryBox: this.requestFunctionFactory(
      descriptors.mailDeleteDeliveryBox,
    ),
    /**
     * Get a MailAddress.
     * @deprecated
     */
    getV2MailaddressesMailAddressId: this.requestFunctionFactory(
      descriptors.getV2MailaddressesMailAddressId,
    ),
    /**
     * Delete a MailAddress.
     * @deprecated
     */
    deleteV2MailaddressesMailAddressId: this.requestFunctionFactory(
      descriptors.deleteV2MailaddressesMailAddressId,
    ),
    /** Get a MailAddress. */
    getMailAddress: this.requestFunctionFactory(descriptors.mailGetMailAddress),
    /** Delete a MailAddress. */
    deleteMailAddress: this.requestFunctionFactory(
      descriptors.mailDeleteMailAddress,
    ),
    /** Disable the mail-archive of a MailAddress. */
    disableMailArchive: this.requestFunctionFactory(
      descriptors.mailDisableMailArchive,
    ),
    /** Get a Mail RateLimit. */
    getMailRateLimit: this.requestFunctionFactory(
      descriptors.mailGetMailRateLimit,
    ),
    /** List backups belonging to a MailAddress. */
    listBackupsForMailAddress: this.requestFunctionFactory(
      descriptors.mailListBackupsForMailAddress,
    ),
    /** List MailAddresses. */
    listMailAddressesForUser: this.requestFunctionFactory(
      descriptors.mailListMailAddressesForUser,
    ),
    /** List Mail RateLimits. */
    listMailRateLimits: this.requestFunctionFactory(
      descriptors.mailListMailRateLimits,
    ),
    /**
     * List mail settings of a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdMailsettings: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdMailsettings,
    ),
    /** List mail settings of a Project. */
    listProjectMailSettings: this.requestFunctionFactory(
      descriptors.mailListProjectMailSettings,
    ),
    /** Recover emails for a MailAddress from a backup. */
    recoverMailAddressEmails: this.requestFunctionFactory(
      descriptors.mailRecoverMailAddressEmails,
    ),
    /** Request a rate limit change for a MailAddress. */
    requestMailAddressRateLimitChange: this.requestFunctionFactory(
      descriptors.mailRequestMailAddressRateLimitChange,
    ),
    /** Update the description of a DeliveryBox. */
    updateDeliveryBoxDescription: this.requestFunctionFactory(
      descriptors.mailUpdateDeliveryBoxDescription,
    ),
    /** Update the password of a DeliveryBox. */
    updateDeliveryBoxPassword: this.requestFunctionFactory(
      descriptors.mailUpdateDeliveryBoxPassword,
    ),
    /** Update a MailAddress. */
    updateMailAddressAddress: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressAddress,
    ),
    /** Update the catch-all of a MailAddress. */
    updateMailAddressCatchAll: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressCatchAll,
    ),
  };

  /** The notification API allows you to manage your notifications. */
  public readonly notification = {
    /** Subscribe a user to the mStudio newsletter. */
    newsletterSubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterSubscribeUser,
    ),
    /** Getting the subscription status of the subscription. */
    newsletterGetInfo: this.requestFunctionFactory(
      descriptors.newsletterGetInfo,
    ),
    /** Unsubscribe a user from the mStudio newsletter. */
    newsletterUnsubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterUnsubscribeUser,
    ),
    /** Adjust notification settings for message type. */
    sadjustNotificationMessageTypeSettings: this.requestFunctionFactory(
      descriptors.notificationsAdjustNotificationMessageTypeSettings,
    ),
    /**
     * Get the counts for unread notifications of the user.
     * @deprecated
     */
    getV2NotificationsUnreadCounts: this.requestFunctionFactory(
      descriptors.getV2NotificationsUnreadCounts,
    ),
    /** Get the counts for unread notifications of the user. */
    scountUnreadNotifications: this.requestFunctionFactory(
      descriptors.notificationsCountUnreadNotifications,
    ),
    /** Get notification settings for a user. */
    sgetNotificationSettings: this.requestFunctionFactory(
      descriptors.notificationsGetNotificationSettings,
    ),
    /** List all unread notifications. */
    slistNotifications: this.requestFunctionFactory(
      descriptors.notificationsListNotifications,
    ),
    /** Mark all notifications as read. */
    sreadAllNotifications: this.requestFunctionFactory(
      descriptors.notificationsReadAllNotifications,
    ),
    /** Update a notification's read status. */
    supdateNotificationStatus: this.requestFunctionFactory(
      descriptors.notificationsUpdateNotificationStatus,
    ),
  };

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project = {
    /**
     * Leave a Project.
     * @deprecated
     */
    deprecatedProjectLeaveProject: this.requestFunctionFactory(
      descriptors.deprecatedProjectLeaveProject,
    ),
    /**
     * Update a Project's description.
     * @deprecated
     */
    deprecatedProjectUpdateProjectDescription: this.requestFunctionFactory(
      descriptors.deprecatedProjectUpdateProjectDescription,
    ),
    /**
     * Update a Servers's description.
     * @deprecated
     */
    deprecatedProjectUpdateServerDescription: this.requestFunctionFactory(
      descriptors.deprecatedProjectUpdateServerDescription,
    ),
    /**
     * Update a Project's storage space notification threshold.
     * @deprecated
     */
    deprecatedStoragespaceReplaceProjectNotificationThreshold:
      this.requestFunctionFactory(
        descriptors.deprecatedStoragespaceReplaceProjectNotificationThreshold,
      ),
    /**
     * Update a Server's storage space notification threshold.
     * @deprecated
     */
    deprecatedStoragespaceReplaceServerNotificationThreshold:
      this.requestFunctionFactory(
        descriptors.deprecatedStoragespaceReplaceServerNotificationThreshold,
      ),
    /** Accept a ProjectInvite. */
    acceptProjectInvite: this.requestFunctionFactory(
      descriptors.projectAcceptProjectInvite,
    ),
    /**
     * Create a ProjectInvite.
     * @deprecated
     */
    postV2ProjectProjectIdInvites: this.requestFunctionFactory(
      descriptors.postV2ProjectProjectIdInvites,
    ),
    /** List Invites belonging to a Project. */
    listInvitesForProject: this.requestFunctionFactory(
      descriptors.projectListInvitesForProject,
    ),
    /** Create a ProjectInvite. */
    createProjectInvite: this.requestFunctionFactory(
      descriptors.projectCreateProjectInvite,
    ),
    /** Create a Project belonging to a Server. */
    createProject: this.requestFunctionFactory(
      descriptors.projectCreateProject,
    ),
    /** Decline a ProjectInvite. */
    declineProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeclineProjectInvite,
    ),
    /** Request a Project avatar upload. */
    requestProjectAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestProjectAvatarUpload,
    ),
    /** Delete a Project's avatar. */
    deleteProjectAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteProjectAvatar,
    ),
    /** Get a ProjectInvite. */
    getProjectInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectInvite,
    ),
    /** Delete a ProjectInvite. */
    deleteProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeleteProjectInvite,
    ),
    /** Get a ProjectMembership. */
    getProjectMembership: this.requestFunctionFactory(
      descriptors.projectGetProjectMembership,
    ),
    /** Delete a ProjectMembership. */
    deleteProjectMembership: this.requestFunctionFactory(
      descriptors.projectDeleteProjectMembership,
    ),
    /** Update a ProjectMembership. */
    updateProjectMembership: this.requestFunctionFactory(
      descriptors.projectUpdateProjectMembership,
    ),
    /** Get a Project. */
    getProject: this.requestFunctionFactory(descriptors.projectGetProject),
    /** Delete a Project. */
    deleteProject: this.requestFunctionFactory(
      descriptors.projectDeleteProject,
    ),
    /** Update a Project. */
    updateProject: this.requestFunctionFactory(
      descriptors.projectUpdateProject,
    ),
    /** Request a Server avatar upload. */
    requestServerAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestServerAvatarUpload,
    ),
    /** Delete a Server's avatar. */
    deleteServerAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteServerAvatar,
    ),
    /** Get a ProjectInvite by token. */
    getProjectTokenInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectTokenInvite,
    ),
    /** Get the executing user's membership in a Project. */
    getSelfMembershipForProject: this.requestFunctionFactory(
      descriptors.projectGetSelfMembershipForProject,
    ),
    /** Get a Server. */
    getServer: this.requestFunctionFactory(descriptors.projectGetServer),
    /** Update a Server. */
    updateServer: this.requestFunctionFactory(descriptors.projectUpdateServer),
    /** List Projects belonging to a Customer. */
    listCustomerProjects: this.requestFunctionFactory(
      descriptors.projectListCustomerProjects,
    ),
    /** List Memberships belonging to a Project. */
    listMembershipsForProject: this.requestFunctionFactory(
      descriptors.projectListMembershipsForProject,
    ),
    /** Get the activities of a project. */
    listProjectActivities: this.requestFunctionFactory(
      descriptors.projectListProjectActivities,
    ),
    /** List ProjectInvites belonging to the executing user. */
    listProjectInvites: this.requestFunctionFactory(
      descriptors.projectListProjectInvites,
    ),
    /** List ProjectMemberships belonging to the executing user. */
    listProjectMemberships: this.requestFunctionFactory(
      descriptors.projectListProjectMemberships,
    ),
    /** List Projects belonging to the executing user. */
    listProjects: this.requestFunctionFactory(descriptors.projectListProjects),
    /** List Servers belonging to the executing user. */
    listServers: this.requestFunctionFactory(descriptors.projectListServers),
    /** Resend the mail for a ProjectInvite. */
    resendProjectInviteMail: this.requestFunctionFactory(
      descriptors.projectResendProjectInviteMail,
    ),
    /** Get storage space Statistics belonging to a Project. */
    storagespaceGetProjectStatistics: this.requestFunctionFactory(
      descriptors.storagespaceGetProjectStatistics,
    ),
    /** Update a Project's storage space statistics. */
    storagespaceUpdateProjectStatistics: this.requestFunctionFactory(
      descriptors.storagespaceUpdateProjectStatistics,
    ),
    /** Get storage space Statistics belonging to a Server. */
    storagespaceGetServerStatistics: this.requestFunctionFactory(
      descriptors.storagespaceGetServerStatistics,
    ),
    /** Update a Server's storage space statistics. */
    storagespaceUpdateServerStatistics: this.requestFunctionFactory(
      descriptors.storagespaceUpdateServerStatistics,
    ),
  };

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user = {
    /**
     * Get your verified Email-Address.
     * @deprecated
     */
    getV2SignupEmail: this.requestFunctionFactory(descriptors.getV2SignupEmail),
    /**
     * Change your Email-Address. Replaced by `PUT` `/v2/users/self/credentials/email`.
     * @deprecated
     */
    deprecatedUserChangeEmail: this.requestFunctionFactory(
      descriptors.deprecatedUserChangeEmail,
    ),
    /**
     * Check token for validity.
     * @deprecated
     */
    postV2SignupTokenCheck: this.requestFunctionFactory(
      descriptors.postV2SignupTokenCheck,
    ),
    /**
     * Check token for validity.
     * @deprecated
     */
    deprecatedUserCheckToken: this.requestFunctionFactory(
      descriptors.deprecatedUserCheckToken,
    ),
    /**
     * Confirm password reset. Replaced by `POST` `/v2/users/self/credentials/password/confirm-reset`.
     * @deprecated
     */
    deprecatedUserConfirmPasswordReset: this.requestFunctionFactory(
      descriptors.deprecatedUserConfirmPasswordReset,
    ),
    /**
     * Create a new issue.
     * @deprecated
     */
    deprecatedUserCreateIssue: this.requestFunctionFactory(
      descriptors.deprecatedUserCreateIssue,
    ),
    /**
     * Get a specific ApiToken.
     * @deprecated
     */
    getV2SignupTokenApiApiTokenId: this.requestFunctionFactory(
      descriptors.getV2SignupTokenApiApiTokenId,
    ),
    /**
     * Update an existing `ApiToken`. Replaced by `PUT` `/v2/users/{userId}/api-tokens/{apiTokenId}`.
     * @deprecated
     */
    deprecatedUserEditApiToken: this.requestFunctionFactory(
      descriptors.deprecatedUserEditApiToken,
    ),
    /**
     * Deletes an ApiToken. Replaces by `DELETE` `/v2/user/{userid}/api-tokens/{apiTokenId}`.
     * @deprecated
     */
    deprecatedUserDeleteApiToken: this.requestFunctionFactory(
      descriptors.deprecatedUserDeleteApiToken,
    ),
    /**
     * Get a specific stored ssh-key.
     * @deprecated
     */
    getV2SignupSshSshKeyId: this.requestFunctionFactory(
      descriptors.getV2SignupSshSshKeyId,
    ),
    /**
     * Edit a stored ssh-key. Replaced by `PUT` `/v2/users/self/ssh-keys/{sshKeyId}`.
     * @deprecated
     */
    deprecatedUserEditSshKey: this.requestFunctionFactory(
      descriptors.deprecatedUserEditSshKey,
    ),
    /**
     * Remove a ssh-key. Replaced by `DELETE` `/v2/users/self/ssh-keys/{sshKeyId}`.
     * @deprecated
     */
    deprecatedUserDeleteSshKey: this.requestFunctionFactory(
      descriptors.deprecatedUserDeleteSshKey,
    ),
    /**
     * Get your current multi factor auth status.
     * @deprecated
     */
    getV2SignupMfa: this.requestFunctionFactory(descriptors.getV2SignupMfa),
    /**
     * Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa.
     * @deprecated
     */
    postV2SignupMfa: this.requestFunctionFactory(descriptors.postV2SignupMfa),
    /**
     * Disable Multi Factor Authentication. Replaced by `DELETE` `/v2/users/self/credentials/mfa`.
     * @deprecated
     */
    deprecatedUserDisableMfa: this.requestFunctionFactory(
      descriptors.deprecatedUserDisableMfa,
    ),
    /**
     * Get your account information. Replaced by `GET` `/v2/users/self`.
     * @deprecated
     */
    getV2SignupProfile: this.requestFunctionFactory(
      descriptors.getV2SignupProfile,
    ),
    /**
     * Update your account information.
     * @deprecated
     */
    deprecatedUserUpdateAccount: this.requestFunctionFactory(
      descriptors.deprecatedUserUpdateAccount,
    ),
    /**
     * Delete your account and all your personal data.
     * @deprecated
     */
    deleteV2SignupProfile: this.requestFunctionFactory(
      descriptors.deleteV2SignupProfile,
    ),
    /**
     * Get your account information. Replaced by `GET` `/v2/users/self`.
     * @deprecated
     */
    deprecatedUserGetOwnAccount: this.requestFunctionFactory(
      descriptors.deprecatedUserGetOwnAccount,
    ),
    /** Update your account information. */
    updateAccount: this.requestFunctionFactory(descriptors.userUpdateAccount),
    /**
 * Initialize password reset process. Replaced by `POST` `/v2/users/self/credentials/actions/init-password-reset`.

 * @deprecated
 */
    deprecatedUserInitPasswordReset: this.requestFunctionFactory(
      descriptors.deprecatedUserInitPasswordReset,
    ),
    /**
     * Terminate session and invalidate access token. Replaced by `DELETE` `/v2/users/self/sessions/{current}`.
     * @deprecated
     */
    deprecatedUserLogout: this.requestFunctionFactory(
      descriptors.deprecatedUserLogout,
    ),
    /**
 * Resend the Email-Address verification email. Replaced by `POST` `/v2/users/self/credentials/email/actions/resend-email`.

 * @deprecated
 */
    deprecatedUserResendVerificationEmail: this.requestFunctionFactory(
      descriptors.deprecatedUserResendVerificationEmail,
    ),
    /**
     * Request a new avatar upload
     * @deprecated
     */
    deprecatedUserServiceAvatarRequestUpload: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceAvatarRequestUpload,
    ),
    /**
     * Remove Avatar
     * @deprecated
     */
    deprecatedUserServiceAvatarRemove: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceAvatarRemove,
    ),
    /**
     * Returns your submitted feedback
     * @deprecated
     */
    deprecatedUserServiceFeedbackList: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceFeedbackList,
    ),
    /**
     * Submit user feedback
     * @deprecated
     */
    deprecatedUserServiceFeedbackCreate: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceFeedbackCreate,
    ),
    /**
     * create a new issue
     * @deprecated
     */
    deprecatedUserServiceIssueNew: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceIssueNew,
    ),
    /**
     * Get profile information for the specified user if the user is related to the executing user
     * @deprecated
     */
    deprecatedUserServiceUserGet: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceUserGet,
    ),
    /**
     * Change your personal information
     * @deprecated
     */
    deprecatedUserServicePersonalInformationUpdate: this.requestFunctionFactory(
      descriptors.deprecatedUserServicePersonalInformationUpdate,
    ),
    /**
     * Get personalized settings for the user executing the request
     * @deprecated
     */
    deprecatedUserServicePersonalizedSettingsGet: this.requestFunctionFactory(
      descriptors.deprecatedUserServicePersonalizedSettingsGet,
    ),
    /**
     * update personalized settings
     * @deprecated
     */
    deprecatedUserServicePersonalizedSettingsUpdate:
      this.requestFunctionFactory(
        descriptors.deprecatedUserServicePersonalizedSettingsUpdate,
      ),
    /**
     * Add phone number and init verification process
     * @deprecated
     */
    deprecatedUserServicePhoneNumberAdd: this.requestFunctionFactory(
      descriptors.deprecatedUserServicePhoneNumberAdd,
    ),
    /**
     * remove your PhoneNumber
     * @deprecated
     */
    deprecatedUserServicePhoneNumberRemove: this.requestFunctionFactory(
      descriptors.deprecatedUserServicePhoneNumberRemove,
    ),
    /**
     * Verify phone number
     * @deprecated
     */
    deprecatedUserServicePhoneNumberVerify: this.requestFunctionFactory(
      descriptors.deprecatedUserServicePhoneNumberVerify,
    ),
    /**
     * Get profile information for the executing user
     * @deprecated
     */
    deprecatedUserServiceUserGetOwn: this.requestFunctionFactory(
      descriptors.deprecatedUserServiceUserGetOwn,
    ),
    /**
     * List all sessions.
     * @deprecated
     */
    getV2SignupSessions: this.requestFunctionFactory(
      descriptors.getV2SignupSessions,
    ),
    /**
     * Terminate all sessions, except the current session. Replaced by `DELETE` `/v2/users/self/sessions`.
     * @deprecated
     */
    deprecatedUserTerminateAllSessions: this.requestFunctionFactory(
      descriptors.deprecatedUserTerminateAllSessions,
    ),
    /**
     * Get a specific session.
     * @deprecated
     */
    getV2SignupSessionsTokenId: this.requestFunctionFactory(
      descriptors.getV2SignupSessionsTokenId,
    ),
    /**
     * Terminate a specific Session. Replaced by `DELETE` `/v2/users/self/sessions/{tokenId}`.
     * @deprecated
     */
    deprecatedUserTerminateSession: this.requestFunctionFactory(
      descriptors.deprecatedUserTerminateSession,
    ),
    /**
     * Verify an added Email-Address. Replaced by `POST` `/v2/users/self/credentials/email/actions/verify-email`.
     * @deprecated
     */
    deprecatedUserVerifyEmail: this.requestFunctionFactory(
      descriptors.deprecatedUserVerifyEmail,
    ),
    /** Get a PasswordPolicy. */
    passwordValidationGetPasswordPolicy: this.requestFunctionFactory(
      descriptors.passwordValidationGetPasswordPolicy,
    ),
    /**
     * DEPRECAED. Use `GET` `/v2/password-policies/{passwordPolicy}` instead.
     * @deprecated
     */
    passwordValidationGetPasswordPolicyV2Deprecated:
      this.requestFunctionFactory(
        descriptors.passwordValidationGetPasswordPolicyV2Deprecated,
      ),
    /** Add phone number and start verification process. */
    addPhoneNumber: this.requestFunctionFactory(descriptors.userAddPhoneNumber),
    /** Remove phone number. */
    removePhoneNumber: this.requestFunctionFactory(
      descriptors.userRemovePhoneNumber,
    ),
    /**
     * Validate your second factor.
     * @deprecated
     */
    postV2SignupAuthenticationMfa: this.requestFunctionFactory(
      descriptors.postV2SignupAuthenticationMfa,
    ),
    /** Validate your second factor. */
    authenticateMfa: this.requestFunctionFactory(
      descriptors.userAuthenticateMfa,
    ),
    /**
     * Authenticate yourself to get an access token.
     * @deprecated
     */
    postV2SignupAuthentication: this.requestFunctionFactory(
      descriptors.postV2SignupAuthentication,
    ),
    /** Authenticate yourself to get an access token. */
    authenticate: this.requestFunctionFactory(descriptors.userAuthenticate),
    /** Authenticate an user with an access token retrieval key. */
    authenticateWithAccessTokenRetrievalKey: this.requestFunctionFactory(
      descriptors.userAuthenticateWithAccessTokenRetrievalKey,
    ),
    /** Get your verified Email-Address. */
    getOwnEmail: this.requestFunctionFactory(descriptors.userGetOwnEmail),
    /** Change your Email-Address. */
    changeEmail: this.requestFunctionFactory(descriptors.userChangeEmail),
    /**
     * The timestamp of your latest password change.
     * @deprecated
     */
    getV2SignupPassword: this.requestFunctionFactory(
      descriptors.getV2SignupPassword,
    ),
    /**
     * Change your password.
     * @deprecated
     */
    putV2SignupPassword: this.requestFunctionFactory(
      descriptors.putV2SignupPassword,
    ),
    /** Change your password. */
    changePassword: this.requestFunctionFactory(descriptors.userChangePassword),
    /**
     * Confirm Multi Factor Authentication.
     * @deprecated
     */
    postV2SignupMfaConfirm: this.requestFunctionFactory(
      descriptors.postV2SignupMfaConfirm,
    ),
    /** Get your current multi factor auth status. */
    getMfaStatus: this.requestFunctionFactory(descriptors.userGetMfaStatus),
    /** Reset RecoveryCodes for MFA. */
    resetRecoverycodes: this.requestFunctionFactory(
      descriptors.userResetRecoverycodes,
    ),
    /** Confirm Multi Factor Authentication. */
    confirmMfa: this.requestFunctionFactory(descriptors.userConfirmMfa),
    /** Disable Multi Factor Authentication. */
    disableMfa: this.requestFunctionFactory(descriptors.userDisableMfa),
    /** Confirm password reset. */
    confirmPasswordReset: this.requestFunctionFactory(
      descriptors.userConfirmPasswordReset,
    ),
    /**
     * List all of your ApiTokens.
     * @deprecated
     */
    getV2SignupTokenApi: this.requestFunctionFactory(
      descriptors.getV2SignupTokenApi,
    ),
    /**
     * Create a new ApiToken.
     * @deprecated
     */
    postV2SignupTokenApi: this.requestFunctionFactory(
      descriptors.postV2SignupTokenApi,
    ),
    /** List all of your ApiTokens. */
    listApiTokens: this.requestFunctionFactory(descriptors.userListApiTokens),
    /** Create a new ApiToken. */
    createApiToken: this.requestFunctionFactory(descriptors.userCreateApiToken),
    /** Submit your user feedback. */
    createFeedback: this.requestFunctionFactory(descriptors.userCreateFeedback),
    /**
     * Get your stored ssh-keys.
     * @deprecated
     */
    getV2SignupSsh: this.requestFunctionFactory(descriptors.getV2SignupSsh),
    /**
     * Store a new ssh-key.
     * @deprecated
     */
    postV2SignupSsh: this.requestFunctionFactory(descriptors.postV2SignupSsh),
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
    /** Check status of the current session. */
    getCurrentSessionStatus: this.requestFunctionFactory(
      descriptors.userGetCurrentSessionStatus,
    ),
    /** The timestamp of your latest password change. */
    getPasswordUpdatedAt: this.requestFunctionFactory(
      descriptors.userGetPasswordUpdatedAt,
    ),
    /** Get personalized settings. */
    getPersonalizedSettings: this.requestFunctionFactory(
      descriptors.userGetPersonalizedSettings,
    ),
    /** Update personalized GUI settings. */
    updatePersonalizedSettings: this.requestFunctionFactory(
      descriptors.userUpdatePersonalizedSettings,
    ),
    /** Get poll settings for the specified user. */
    getPollStatus: this.requestFunctionFactory(descriptors.userGetPollStatus),
    /** Store new or update poll settings. */
    postPollStatus: this.requestFunctionFactory(descriptors.userPostPollStatus),
    /** Get a specific session. */
    getSession: this.requestFunctionFactory(descriptors.userGetSession),
    /** Terminate a specific Session. */
    terminateSession: this.requestFunctionFactory(
      descriptors.userTerminateSession,
    ),
    /** Submitted feedback of the given user. */
    getSpotlightInfo: this.requestFunctionFactory(
      descriptors.userGetSpotlightInfo,
    ),
    /** Submit your usage of the spotlight. */
    spotlightUsage: this.requestFunctionFactory(descriptors.userSpotlightUsage),
    /** Get profile information for a user. */
    getUser: this.requestFunctionFactory(descriptors.userGetUser),
    /** Change personal information. */
    updatePersonalInformation: this.requestFunctionFactory(
      descriptors.userUpdatePersonalInformation,
    ),
    /** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa. */
    initMfa: this.requestFunctionFactory(descriptors.userInitMfa),
    /** Initialize password reset process. */
    initPasswordReset: this.requestFunctionFactory(
      descriptors.userInitPasswordReset,
    ),
    /** Submitted feedback of the given user. */
    listFeedback: this.requestFunctionFactory(descriptors.userListFeedback),
    /** List all sessions. */
    listSessions: this.requestFunctionFactory(descriptors.userListSessions),
    /** Refresh a session. */
    refreshSession: this.requestFunctionFactory(descriptors.userRefreshSession),
    /** Terminate all sessions, except the current session. */
    terminateAllSessions: this.requestFunctionFactory(
      descriptors.userTerminateAllSessions,
    ),
    /** Terminate session and invalidate access token. */
    logout: this.requestFunctionFactory(descriptors.userLogout),
    /** Obtain authorization from the resource owner. */
    oauthGetAuthorization: this.requestFunctionFactory(
      descriptors.userOauthGetAuthorization,
    ),
    /** Retrieve Access Token from Authorization Code. */
    oauthRetrieveAccessToken: this.requestFunctionFactory(
      descriptors.userOauthRetrieveAccessToken,
    ),
    /**
     * Register with email and password.
     * @deprecated
     */
    postV2SignupRegistration: this.requestFunctionFactory(
      descriptors.postV2SignupRegistration,
    ),
    /** Register with email and password. */
    register: this.requestFunctionFactory(descriptors.userRegister),
    /** Request a new avatar image upload. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.userRequestAvatarUpload,
    ),
    /** Remove Avatar. */
    removeAvatar: this.requestFunctionFactory(descriptors.userRemoveAvatar),
    /** Resend the Email-Address verification email. */
    resendVerificationEmail: this.requestFunctionFactory(
      descriptors.userResendVerificationEmail,
    ),
    /**
     * Reset RecoveryCodes for MFA.
     * @deprecated
     */
    putV2SignupMfaResetRecoverycodes: this.requestFunctionFactory(
      descriptors.putV2SignupMfaResetRecoverycodes,
    ),
    /** Check if a password is leaked. */
    searchedLeakedPasswordsByRange: this.requestFunctionFactory(
      descriptors.userSearchedLeakedPasswordsByRange,
    ),
    /** Submit your spotlight usage. */
    spotlightFeedback: this.requestFunctionFactory(
      descriptors.userSpotlightFeedback,
    ),
    /**
     * Request a support code.
     * @deprecated
     */
    getV2SignupSupportcode: this.requestFunctionFactory(
      descriptors.getV2SignupSupportcode,
    ),
    /**
     * Request a support code.
     * @deprecated
     */
    getV2SignupSupportcodes: this.requestFunctionFactory(
      descriptors.getV2SignupSupportcodes,
    ),
    /** Request a support code. */
    supportCodeRequest: this.requestFunctionFactory(
      descriptors.userSupportCodeRequest,
    ),
    /** Verify an added Email-Address. */
    verifyEmail: this.requestFunctionFactory(descriptors.userVerifyEmail),
    /**
     * Verify phone number.
     * @deprecated
     */
    postV2UsersUserIdPhoneVerify: this.requestFunctionFactory(
      descriptors.postV2UsersUserIdPhoneVerify,
    ),
    /** Verify phone number. */
    verifyPhoneNumber: this.requestFunctionFactory(
      descriptors.userVerifyPhoneNumber,
    ),
    /**
     * Verify your registration.
     * @deprecated
     */
    postV2SignupRegistrationVerification: this.requestFunctionFactory(
      descriptors.postV2SignupRegistrationVerification,
    ),
    /** Verify your registration. */
    verifyRegistration: this.requestFunctionFactory(
      descriptors.userVerifyRegistration,
    ),
  };

  /** The lead fyndr api allow you to manage you leads and your fyndr profile. */
  public readonly leadFyndr = {
    /**
     * Get your LeadFyndr request.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdLeadFyndrProfileRequest:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdLeadFyndrProfileRequest,
      ),
    /**
     * Create a new access request for LeadFyndr.
     * @deprecated
     */
    postExperimentalV2CustomersCustomerIdLeadFyndrProfileRequest:
      this.requestFunctionFactory(
        descriptors.postExperimentalV2CustomersCustomerIdLeadFyndrProfileRequest,
      ),
    /**
     * Get your LeadFyndr request.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdLeadFyndrProfileRequest:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdLeadFyndrProfileRequest,
      ),
    /**
     * Create a new access request for LeadFyndr.
     * @deprecated
     */
    postV2ExperimentalCustomersCustomerIdLeadFyndrProfileRequest:
      this.requestFunctionFactory(
        descriptors.postV2ExperimentalCustomersCustomerIdLeadFyndrProfileRequest,
      ),
    /** Get your LeadFyndr request. */
    leadfyndrGetLeadFyndrProfileRequest: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfileRequest,
    ),
    /** Create a new access request for LeadFyndr. */
    leadfyndrCreateLeadFyndrAccessRequest: this.requestFunctionFactory(
      descriptors.leadfyndrCreateLeadFyndrAccessRequest,
    ),
    /**
     * Create an export of unlocked leads for the given customerId.
     * @deprecated
     */
    postExperimentalV2CustomersCustomerIdUnlockedLeadsExport:
      this.requestFunctionFactory(
        descriptors.postExperimentalV2CustomersCustomerIdUnlockedLeadsExport,
      ),
    /**
     * Create an export of unlocked leads for the given customerId.
     * @deprecated
     */
    postV2ExperimentalCustomersCustomerIdUnlockedLeadsExport:
      this.requestFunctionFactory(
        descriptors.postV2ExperimentalCustomersCustomerIdUnlockedLeadsExport,
      ),
    /** Create an export of unlocked leads for the given customerId. */
    leadfyndrCreateLeadsExport: this.requestFunctionFactory(
      descriptors.leadfyndrCreateLeadsExport,
    ),
    /**
     * Get cities in DACH.
     * @deprecated
     */
    getExperimentalV2Cities: this.requestFunctionFactory(
      descriptors.getExperimentalV2Cities,
    ),
    /**
     * Get cities in DACH.
     * @deprecated
     */
    getV2ExperimentalCities: this.requestFunctionFactory(
      descriptors.getV2ExperimentalCities,
    ),
    /** Get cities in DACH. */
    leadfyndrGetCities: this.requestFunctionFactory(
      descriptors.leadfyndrGetCities,
    ),
    /**
     * Get lead tariff options. How many leads did you unlock this month?
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdLeadFyndrProfileTariff:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdLeadFyndrProfileTariff,
      ),
    /**
     * Get lead tariff options. How many leads did you unlock this month?
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdLeadFyndrProfileTariff:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdLeadFyndrProfileTariff,
      ),
    /** Get lead tariff options. How many leads did you unlock this month? */
    leadfyndrGetLeadFyndrProfileTariffOptions: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfileTariffOptions,
    ),
    /**
     * Get your LeadFyndr profile.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdLeadFyndrProfile:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdLeadFyndrProfile,
      ),
    /**
     * Get your LeadFyndr profile.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdLeadFyndrProfile:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdLeadFyndrProfile,
      ),
    /** Get your LeadFyndr profile. */
    leadfyndrGetLeadFyndrProfile: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfile,
    ),
    /**
     * Get a simple lead. Use the unlocked route for more detail leads.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdLeadsLeadId,
      ),
    /**
     * Get a simple lead. Use the unlocked route for more detail leads.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdLeadsLeadId,
      ),
    /** Get a simple lead. Use the unlocked route for more detail leads. */
    leadfyndrGetLead: this.requestFunctionFactory(descriptors.leadfyndrGetLead),
    /**
     * Get unlocked leads export history for the given customerId.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdUnlockedLeadsExports:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdUnlockedLeadsExports,
      ),
    /**
     * Get unlocked leads export history for the given customerId.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdUnlockedLeadsExports:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdUnlockedLeadsExports,
      ),
    /** Get unlocked leads export history for the given customerId. */
    leadfyndrGetLeadsExportHistory: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadsExportHistory,
    ),
    /**
     * Get a detail of a unlocked lead. Organisation can unlock leads.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdUnlockedLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdUnlockedLeadsLeadId,
      ),
    /**
     * Unlock a lead for the given customerId.
     * @deprecated
     */
    postExperimentalV2CustomersCustomerIdUnlockedLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.postExperimentalV2CustomersCustomerIdUnlockedLeadsLeadId,
      ),
    /**
     * Get a detail of a unlocked lead. Organisation can unlock leads.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadId,
      ),
    /**
     * Unlock a lead for the given customerId.
     * @deprecated
     */
    postV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadId:
      this.requestFunctionFactory(
        descriptors.postV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadId,
      ),
    /** Get a detail of a unlocked lead. Organisation can unlock leads. */
    leadfyndrGetUnlockedLead: this.requestFunctionFactory(
      descriptors.leadfyndrGetUnlockedLead,
    ),
    /** Unlock a lead for the given customerId. */
    leadfyndrUnlockLead: this.requestFunctionFactory(
      descriptors.leadfyndrUnlockLead,
    ),
    /**
     * Get all leads. Use the unlocked routes for more lead details.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdLeads: this.requestFunctionFactory(
      descriptors.getExperimentalV2CustomersCustomerIdLeads,
    ),
    /**
     * Get all leads. Use the unlocked routes for more lead details.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdLeads: this.requestFunctionFactory(
      descriptors.getV2ExperimentalCustomersCustomerIdLeads,
    ),
    /** Get all leads. Use the unlocked routes for more lead details. */
    leadfyndrListLeads: this.requestFunctionFactory(
      descriptors.leadfyndrListLeads,
    ),
    /**
     * Get all unlocked leads. Organisation can unlock leads.
     * @deprecated
     */
    getExperimentalV2CustomersCustomerIdUnlockedLeads:
      this.requestFunctionFactory(
        descriptors.getExperimentalV2CustomersCustomerIdUnlockedLeads,
      ),
    /**
     * Get all unlocked leads. Organisation can unlock leads.
     * @deprecated
     */
    getV2ExperimentalCustomersCustomerIdUnlockedLeads:
      this.requestFunctionFactory(
        descriptors.getV2ExperimentalCustomersCustomerIdUnlockedLeads,
      ),
    /** Get all unlocked leads. Organisation can unlock leads. */
    leadfyndrListUnlockedLeads: this.requestFunctionFactory(
      descriptors.leadfyndrListUnlockedLeads,
    ),
    /**
     * Reserve a unlocked lead for the given customerId.
     * @deprecated
     */
    postExperimentalV2CustomersCustomerIdUnlockedLeadsLeadIdReservation:
      this.requestFunctionFactory(
        descriptors.postExperimentalV2CustomersCustomerIdUnlockedLeadsLeadIdReservation,
      ),
    /**
     * Removes a reservation on a unlocked lead for the given customerId.
     * @deprecated
     */
    deleteExperimentalV2CustomersCustomerIdUnlockedLeadsLeadIdReservation:
      this.requestFunctionFactory(
        descriptors.deleteExperimentalV2CustomersCustomerIdUnlockedLeadsLeadIdReservation,
      ),
    /**
     * Reserve a unlocked lead for the given customerId.
     * @deprecated
     */
    postV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadIdReservation:
      this.requestFunctionFactory(
        descriptors.postV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadIdReservation,
      ),
    /**
     * Removes a reservation on a unlocked lead for the given customerId.
     * @deprecated
     */
    deleteV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadIdReservation:
      this.requestFunctionFactory(
        descriptors.deleteV2ExperimentalCustomersCustomerIdUnlockedLeadsLeadIdReservation,
      ),
    /** Reserve a unlocked lead for the given customerId. */
    leadfyndrReserveUnlockedLead: this.requestFunctionFactory(
      descriptors.leadfyndrReserveUnlockedLead,
    ),
    /** Removes a reservation on a unlocked lead for the given customerId. */
    leadfyndrRemoveUnlockedLeadReservation: this.requestFunctionFactory(
      descriptors.leadfyndrRemoveUnlockedLeadReservation,
    ),
  };

  /** The license API allows you to manage your paid licenses. */
  public readonly license = {
    /** Get a license. */
    getLicense: this.requestFunctionFactory(descriptors.licenseGetLicense),
    /** List Licenses belonging to a Project. */
    listLicensesForProject: this.requestFunctionFactory(
      descriptors.licenseListLicensesForProject,
    ),
    /** Rotate a License's key, i.e. revoke the old and generate a new one. */
    rotateLicenseKey: this.requestFunctionFactory(
      descriptors.licenseRotateLicenseKey,
    ),
    /** Validate a License's key for a project. */
    validateLicenseKeyForProject: this.requestFunctionFactory(
      descriptors.licenseValidateLicenseKeyForProject,
    ),
  };

  /** API endpoints that are not related to any specific API domain */
  public readonly misc = {
    /** List valid time zones. */
    ellaneousListTimeZones: this.requestFunctionFactory(
      descriptors.miscellaneousListTimeZones,
    ),
    /** Check if an email is from mittwald. */
    verificationDetectPhishingEmail: this.requestFunctionFactory(
      descriptors.verificationDetectPhishingEmail,
    ),
    /** Check if an address exists. */
    verificationVerifyAddress: this.requestFunctionFactory(
      descriptors.verificationVerifyAddress,
    ),
    /** Check if a company exists. */
    verificationVerifyCompany: this.requestFunctionFactory(
      descriptors.verificationVerifyCompany,
    ),
  };

  /** The page insights API allows you to get page insights information. */
  public readonly pageInsights = {
    /**
     * Get detailed performance data for a given domain and path.
     * @deprecated
     */
    getV2Pageinsights: this.requestFunctionFactory(
      descriptors.getV2Pageinsights,
    ),
    /** Get detailed performance data for a given domain and path. */
    pageinsightsGetPerformanceData: this.requestFunctionFactory(
      descriptors.pageinsightsGetPerformanceData,
    ),
    /** Get all data for a given strace. */
    pageinsightsGetStraceData: this.requestFunctionFactory(
      descriptors.pageinsightsGetStraceData,
    ),
    /**
     * List websites (specified as domain and path) from a project where performance data is available.
     * @deprecated
     */
    getV2ProjectsProjectIdPageinsights: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdPageinsights,
    ),
    /** List websites (specified as domain and path) from a project where performance data is available. */
    pageinsightsListPerformanceDataForProject: this.requestFunctionFactory(
      descriptors.pageinsightsListPerformanceDataForProject,
    ),
    /** Schedule a strace measurement for a single http request. */
    pageinsightsScheduleStrace: this.requestFunctionFactory(
      descriptors.pageinsightsScheduleStrace,
    ),
  };

  /** The filesystem API allows you to directly access the filesystem of your project. */
  public readonly projectFileSystem = {
    /**
     * List directories belonging to a Project.
     * @deprecated
     */
    getV2ProjectsProjectIdFilesystemDirectories: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdFilesystemDirectories,
    ),
    /** List directories belonging to a Project. */
    getDirectories: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDirectories,
    ),
    /**
     * Get a Project directory filesystem usage.
     * @deprecated
     */
    getV2ProjectsProjectIdFilesystemUsagesDisk: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdFilesystemUsagesDisk,
    ),
    /** Get a Project directory filesystem usage. */
    getDiskUsage: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDiskUsage,
    ),
    /**
     * Get a Project file's content.
     * @deprecated
     */
    getV2ProjectsProjectIdFilesystemFilesRaw: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdFilesystemFilesRaw,
    ),
    /** Get a Project file's content. */
    getFileContent: this.requestFunctionFactory(
      descriptors.projectFileSystemGetFileContent,
    ),
    /** Get a Project's file/filesystem authorization token. */
    getJwt: this.requestFunctionFactory(descriptors.projectFileSystemGetJwt),
    /**
     * Get a Project file's information.
     * @deprecated
     */
    getV2ProjectsProjectIdFilesystemFiles: this.requestFunctionFactory(
      descriptors.getV2ProjectsProjectIdFilesystemFiles,
    ),
    /** Get a Project file's information. */
    listFiles: this.requestFunctionFactory(
      descriptors.projectFileSystemListFiles,
    ),
  };

  /** The relocation API allows you to manage your relocations. */
  public readonly relocation = {
    /** Relocate an external Project to mittwald. */
    createRelocation: this.requestFunctionFactory(
      descriptors.relocationCreateRelocation,
    ),
  };

  /** The SSH/SFTP User API allows you to manage your SSH/SFTP users within a project. */
  public readonly sshsftpUser = {
    /** Get all SFTPUsers for a Project. */
    sftpUserListSftpUsers: this.requestFunctionFactory(
      descriptors.sftpUserListSftpUsers,
    ),
    /** Create an SFTPUser for a Project. */
    sftpUserCreateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserCreateSftpUser,
    ),
    /** Get an SFTPUser. */
    sftpUserGetSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserGetSftpUser,
    ),
    /** Delete an SFTPUser. */
    sftpUserDeleteSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserDeleteSftpUser,
    ),
    /** Update an SFTPUser. */
    sftpUserUpdateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserUpdateSftpUser,
    ),
    /**
     * Get all SFTPUsers for a Project.
     * @deprecated
     */
    getV2ProjectProjectIdSftpUsers: this.requestFunctionFactory(
      descriptors.getV2ProjectProjectIdSftpUsers,
    ),
    /** Get all SSHUsers for a Project. */
    sshUserListSshUsers: this.requestFunctionFactory(
      descriptors.sshUserListSshUsers,
    ),
    /** Create an SSHUser for a Project. */
    sshUserCreateSshUser: this.requestFunctionFactory(
      descriptors.sshUserCreateSshUser,
    ),
    /** Get an SSHUser. */
    sshUserGetSshUser: this.requestFunctionFactory(
      descriptors.sshUserGetSshUser,
    ),
    /** Delete an SSHUser. */
    sshUserDeleteSshUser: this.requestFunctionFactory(
      descriptors.sshUserDeleteSshUser,
    ),
    /** Update an SSHUser. */
    sshUserUpdateSshUser: this.requestFunctionFactory(
      descriptors.sshUserUpdateSshUser,
    ),
    /**
     * Update an SSHUser.
     * @deprecated
     */
    patchV2SshusersSshUserId: this.requestFunctionFactory(
      descriptors.patchV2SshusersSshUserId,
    ),
  };
}

export default MittwaldAPIV2Client;
