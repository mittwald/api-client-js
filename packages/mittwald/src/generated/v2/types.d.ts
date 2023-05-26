/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
declare namespace MittwaldAPIV2 {
  namespace Components {
    namespace Schemas {
      /**
       * An `Action` is a string that describes a runtime concerning action which can be executed on an `AppInstallation` or an `App` can be capable of
       */
      export type AppAction = "start" | "stop" | "restart";

      /**
       * `ActionCapabilities` is an array that contains supported actions of an `App`
       */
      export type AppActionCapabilities =
        MittwaldAPIV2.Components.Schemas.AppAction[];

      /**
       * An `App` is to be understood as a manifest for `AppInstallations`. E.g. "WordPress" only exists inside our ecosystem, because there is an `App`-Manifest for it
       */
      export interface AppApp {
        actionCapabilities?: MittwaldAPIV2.Components.Schemas.AppActionCapabilities;
        id: string;
        name: string;
        tags: string[];
      }

      /**
       * `AppInstallationStatus` describes the overall runtime status of an `AppInstallation`
       */
      export interface AppAppInstallationStatus {
        lastExitCode?: number;
        logFileLocation: string;
        state: "running" | "stopped" | "exited";
        uptimeSeconds?: number;
      }

      /**
       * `AppUpdatePolicy` describes which updates should be applied automatically by our systems
       */
      export type AppAppUpdatePolicy = "none" | "patchLevel" | "all";

      /**
       * An `AppInstallation` is a concrete manifestation of an `App` in a specific `AppVersion`.
       */
      export interface AppAppInstallation {
        appId: string;
        appVersion: MittwaldAPIV2.Components.Schemas.AppVersionStatus;
        customDocumentRoot?: string;
        description: string;
        disabled: boolean;
        id: string;
        installationPath: string;
        linkedDatabases?: MittwaldAPIV2.Components.Schemas.AppLinkedDatabase[];
        processes?: string[];
        projectId?: string;
        screenshotId?: string;
        screenshotRef?: string;
        systemSoftware?: MittwaldAPIV2.Components.Schemas.AppInstalledSystemSoftware[];
        updatePolicy?: MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;
        userInputs?: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
      }

      /**
       * The `AppInstallationLifecycle` can be used to express a specific point in the `AppInstallation` Lifecycle, e.g. while installing a new `AppInstallation`
       */
      export type AppAppInstallationLifecycle =
        | "installation"
        | "update"
        | "reconfigure";

      /**
       * An `AppVersion` is an officially supported version of an `App`, containing the necessary and recommended configuration und dependencies
       */
      export interface AppAppVersion {
        breakingNote?: MittwaldAPIV2.Components.Schemas.AppBreakingNote;
        databases?: MittwaldAPIV2.Components.Schemas.AppDatabaseDependency[];
        docRoot: string;
        docRootUserEditable: boolean;
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        requestHandler?: MittwaldAPIV2.Components.Schemas.AppRequestHandlerRequirement;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.AppUserInput[];
      }

      export interface AppBreakingNote {
        faqLink: string;
      }

      export interface AppDatabaseDependency {
        description: string;
        kind: "mysql";
        parameters?: {
          [k: string]: string;
        };
        version: string;
      }

      export interface AppError {
        message: string;
        type: string;
      }

      export interface AppInstalledSystemSoftware {
        systemSoftwareId: string;
        systemSoftwareVersion: MittwaldAPIV2.Components.Schemas.AppVersionStatus;
        updatePolicy: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareUpdatePolicy;
      }

      export interface AppLinkedDatabase {
        databaseId: string;
        databaseUserIds?: {
          [k: string]: string;
        };
        kind: "mysql" | "redis";
        purpose: "primary" | "cache" | "custom";
      }

      export interface AppRequestHandlerRequirement {
        exampleValues?: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
        name: string;
        namespace: string;
        parametersTemplate: string;
      }

      export interface AppSavedUserInput {
        name: string;
        value: string;
      }

      export interface AppSystemSoftwareDependency {
        systemSoftwareId: string;
        versionRange: string;
      }

      export type AppSystemSoftwareUpdatePolicy =
        | "none"
        | "inheritedFromApp"
        | "patchLevel"
        | "all";

      export interface AppSystemSoftware {
        id: string;
        name: string;
        tags: string[];
      }

      /**
       * A `SystemSoftwareVersion` is an officially  supported version of a `SystemSoftware`, containing the necessary and recommended configuration und dependencies
       */
      export interface AppSystemSoftwareVersion {
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.AppUserInput[];
      }

      export interface AppUserInput {
        /**
         * Optional field to tell the frontend, which data to put into the select
         */
        dataSource?: string;
        dataType: MittwaldAPIV2.Components.Schemas.AppUserInputDataType;
        defaultValue?: string;
        format?: MittwaldAPIV2.Components.Schemas.AppUserInputFormat;
        lifecycleConstraint: MittwaldAPIV2.Components.Schemas.AppAppInstallationLifecycle;
        name: string;
        positionMeta?: MittwaldAPIV2.Components.Schemas.AppUserInputPositionMeta;
        required: boolean;
        /**
         * JSON Schema formatted (https://json-schema.org/)
         */
        validationSchema: string;
      }

      export type AppUserInputDataType =
        | "text"
        | "number"
        | "boolean"
        | "select";

      export type AppUserInputFormat = "email" | "password" | "url";

      export interface AppUserInputPositionMeta {
        index?: number;
        section?: string;
        step?: string;
      }

      export interface AppVersionStatus {
        current?: string;
        desired: string;
      }

      export interface ArticleArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface ArticleArticleAttributes {
        customerEditable?: boolean;
        key: string;
        mergeType?: "add" | "set";
        readonly?: boolean;
        required?: boolean;
        unit?: string;
        value: string;
      }

      export interface ArticleReadableBookableArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount?: number;
      }

      export interface ArticleReadableChangeArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
      }

      export interface ArticleReadableModifierArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount: number;
      }

      export interface ArticleArticleTag {
        description: string;
        hexColor: string;
        id: string;
        name: string;
      }

      export interface ArticleArticleTemplate {
        additionalArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableBookableArticleOptions[];
        addons?: MittwaldAPIV2.Components.Schemas.ArticleArticleAddons[];
        attributes?: MittwaldAPIV2.Components.Schemas.ArticleArticleAttributes[];
        description?: string;
        id?: string;
        isManagedByDomain: boolean;
        isRecurring: boolean;
        modifierArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableModifierArticleOptions[];
        name: string;
        type:
          | "miscellaneous"
          | "base"
          | "additional"
          | "modifier"
          | "setup_fee";
      }

      export interface ArticleReadableArticle {
        additionalArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableBookableArticleOptions[];
        addons?: MittwaldAPIV2.Components.Schemas.ArticleArticleAddons[];
        articleId: string;
        attributes?: MittwaldAPIV2.Components.Schemas.ArticleArticleAttributes[];
        balanceAddonKey?: string;
        contractDurationInMonth: number;
        description: string;
        hasIndependentContractPeriod?: boolean;
        hideOnInvoice?: boolean;
        machineType?: {
          cpu: string;
          memory: string;
          name: string;
        };
        modifierArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableModifierArticleOptions[];
        name: string;
        orderable:
          | "forbidden"
          | "internal"
          | "beta_testing"
          | "full"
          | "deprecated";
        picture?: string;
        possibleArticleChanges?: MittwaldAPIV2.Components.Schemas.ArticleReadableChangeArticleOptions[];
        price?: number;
        tags?: MittwaldAPIV2.Components.Schemas.ArticleArticleTag[];
        template: MittwaldAPIV2.Components.Schemas.ArticleArticleTemplate;
      }

      export interface BackupBackupTemplate {
        expirationTime: string;
        ignoredSources?: MittwaldAPIV2.Components.Schemas.BackupIgnoredSources;
      }

      export interface BackupDatabaseReference {
        kind: string;
        name: string;
      }

      export interface BackupIgnoredSources {
        databases?: MittwaldAPIV2.Components.Schemas.BackupDatabaseReference[];
        files: boolean;
      }

      export interface BackupProjectBackup {
        createdAt?: string;
        deletable: boolean;
        description?: string;
        expiresAt?: string;
        export?: MittwaldAPIV2.Components.Schemas.BackupProjectBackupExport;
        id: string;
        parentId?: string;
        projectId: string;
        status: string;
      }

      export interface BackupProjectBackupExport {
        downloadURL?: string;
        expiresAt?: string;
        format: string;
        phase?:
          | ""
          | "Pending"
          | "Exporting"
          | "Failed"
          | "Completed"
          | "Expired";
        withPassword: boolean;
      }

      export interface BackupProjectBackupSchedule {
        createdAt?: string;
        /**
         * Description of this ProjectBackupSchedule.
         */
        description?: string;
        /**
         * ID of this ProjectBackupSchedule.
         */
        id: string;
        /**
         * True if this ProjectBackupSchedule was created and is managed by mittwald.
         */
        isSystemBackup: boolean;
        /**
         * ID of the Project this ProjectBackupSchedule belongs to.
         */
        projectId: string;
        /**
         * Execution schedule in crontab notation.
         */
        schedule: string;
        /**
         * TTL of the ProjectBackupSchedule as time string.
         */
        ttl?: string;
        updatedAt?: string;
      }

      export interface ContractAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface ContractArticle {
        amount: number;
        articleTemplateId: string;
        description: string;
        id: string;
        name: string;
        unitPrice: MittwaldAPIV2.Components.Schemas.ContractPrice;
      }

      export interface ContractContact {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface ContractContractItem {
        activationDate?: string;
        aggregateReference?: MittwaldAPIV2.Components.Schemas.ContractAggregateReference;
        articles: MittwaldAPIV2.Components.Schemas.ContractArticle[];
        contractPeriod: number;
        description: string;
        groupByProjectId?: string;
        invoicingPeriod: number;
        isActivated: boolean;
        isBaseItem: boolean;
        isInclusive?: boolean;
        itemId: string;
        /**
         * If this attribute is not set, termination is not allowed.
         */
        nextPossibleDowngradeDate?: string;
        /**
         * If this attribute is not set, a tariff change is not allowed.
         */
        nextPossibleTerminationDate?: string;
        /**
         * If this attribute is not set, a tariff change is not allowed.
         */
        nextPossibleUpgradeDate?: string;
        orderDate: string;
        replacedByItem?: string;
        tariffChange?: MittwaldAPIV2.Components.Schemas.ContractTariffChange;
        termination?: MittwaldAPIV2.Components.Schemas.ContractTermination;
        totalPrice: MittwaldAPIV2.Components.Schemas.ContractPrice;
      }

      export interface ContractContract {
        additionalItems?: MittwaldAPIV2.Components.Schemas.ContractContractItem[];
        baseItem: MittwaldAPIV2.Components.Schemas.ContractContractItem;
        contractId: string;
        contractNumber: string;
        customerId: string;
        isInvoicingDeactivated?: boolean;
        isInvoicingPaused?: boolean;
        owner: MittwaldAPIV2.Components.Schemas.ContractContact;
        termination?: MittwaldAPIV2.Components.Schemas.ContractTermination;
      }

      export interface ContractError {
        message: string;
        type: string;
      }

      export interface ContractPrice {
        currency: "EUR";
        value: number;
      }

      export interface ContractTariffChange {
        /**
         * This is only set if the tariff change has already been carried out.
         */
        executedAtDate?: string;
        newArticles: MittwaldAPIV2.Components.Schemas.ContractArticle[];
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface ContractTermination {
        reason?: string;
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface ConversationAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface ConversationCategory {
        categoryId: string;
        name: string;
      }

      export interface ConversationConversation {
        category?: MittwaldAPIV2.Components.Schemas.ConversationCategory;
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        lastMessageAt?: string;
        lastMessageBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        relatedTo?: MittwaldAPIV2.Components.Schemas.ConversationAggregateReference;
        relations?: MittwaldAPIV2.Components.Schemas.ConversationAggregateReference[];
        sharedWith?: MittwaldAPIV2.Components.Schemas.ConversationAggregateReference;
        shortId: string;
        status: "open" | "closed" | "answered";
        title: string;
      }

      export interface ConversationGetConversationIdResponse {
        conversationId: string;
        shortId: string;
      }

      export type ConversationDepartment =
        | "development"
        | "mail"
        | "infra"
        | "marketing"
        | "network"
        | "dataCenter"
        | "accounting"
        | "customerService"
        | "cloudHosting"
        | "software"
        | "generic"
        | "security";

      export interface ConversationError {
        message: string;
        type: string;
      }

      export interface ConversationRequestedFile {
        id: string;
        status: "requested";
      }

      export type ConversationFile =
        | MittwaldAPIV2.Components.Schemas.ConversationRequestedFile
        | MittwaldAPIV2.Components.Schemas.ConversationUploadedFile;

      export interface ConversationUploadedFile {
        id: string;
        name: string;
        status: "uploaded";
        type: string;
      }

      export interface ConversationMessageHistoryItem {
        content: string;
        updatedAt: string;
        updatedBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
      }

      export interface ConversationMessage {
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        files?: MittwaldAPIV2.Components.Schemas.ConversationFile[];
        history: MittwaldAPIV2.Components.Schemas.ConversationMessageHistoryItem[];
        internal?: boolean;
        messageContent?: string;
        messageId: string;
        type: "MESSAGE";
      }

      export interface ConversationStatusUpdate {
        conversationId: string;
        createdAt: string;
        internal?: boolean;
        messageContent: string;
        meta?: {
          user?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        };
        type: "STATUS_UPDATE";
      }

      export interface ConversationUser {
        avatarRefId?: string;
        clearName?: string;
        department?: MittwaldAPIV2.Components.Schemas.ConversationDepartment;
        userId: string;
      }

      export interface CronjobCronjobCommand {
        interpreter: string;
        parameters?: string;
        path: string;
      }

      export interface CronjobCronjob {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
        email?: string;
        id: string;
        interval: string;
        latestExecution?: MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution;
        nextExecutionTime?: string;
        projectId?: string;
        shortId: string;
        updatedAt: string;
      }

      export interface CronjobCronjobExecution {
        abortedBy?: {
          id?: string;
        };
        durationInMilliseconds: number;
        executionEnd?: string;
        executionStart?: string;
        id: string;
        logPath: string;
        status:
          | "Complete"
          | "Failed"
          | "AbortedBySystem"
          | "Pending"
          | "Running"
          | "AbortedByUser";
        successful: boolean;
        triggeredBy?: {
          id?: string;
        };
      }

      export interface CronjobCronjobRequest {
        active: boolean;
        appId: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
        email?: string;
        interval: string;
      }

      export interface CronjobCronjobSpecific {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
        email?: string;
        executions?: MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution[];
        id: string;
        interval: string;
        nextExecutionTime?: string;
        shortId: string;
        updatedAt: string;
      }

      export interface CronjobCronjobUrl {
        url: string;
      }

      export interface CustomerCategory {
        id: string;
        isPublic: boolean;
        name: string;
        useAgencyDomainPrices: boolean;
        useAgencySslPrices: boolean;
      }

      export interface CustomerContact {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface CustomerCustomerMeta {
        avatarRefId?: string;
        customerId: string;
        name: string;
      }

      /**
       * the role within a customer
       */
      export type CustomerRole = "owner" | "member" | "accountant";

      export interface CustomerCustomer {
        avatarRefId?: string;
        categoryId?: string;
        creationDate: string;
        customerId: string;
        customerNumber: string;
        executingUserRoles?: MittwaldAPIV2.Components.Schemas.CustomerRole[];
        memberCount: number;
        name: string;
        owner?: MittwaldAPIV2.Components.Schemas.CustomerContact;
        projectCount: number;
        vatId?: string;
        vatIdValidationState?: "valid" | "invalid" | "pending" | "unspecified";
      }

      export interface CustomerNote {
        author: string;
        creationDate: string;
        id: string;
        isImportant: boolean;
        message: string;
        subject: string;
      }

      export interface DatabaseMySqlCharacterSettings {
        collations: string[];
        name: string;
        versionId: string;
      }

      export interface DatabaseCharacterSettings {
        characterSet: string;
        collation: string;
      }

      export interface DatabaseMySqlDatabase {
        characterSettings?: MittwaldAPIV2.Components.Schemas.DatabaseCharacterSettings;
        createdAt?: string;
        description?: string;
        finalizers?: string[];
        hostname?: string;
        id: string;
        isReady: boolean;
        isShared: boolean;
        name?: string;
        projectId: string;
        size?: number;
        updatedAt?: string;
        version: string;
      }

      export interface DatabasePhpMyAdminURL {
        url: string;
      }

      export interface DatabaseMySqlUser {
        accessIpMask?: string;
        accessLevel: "full" | "readonly";
        createdAt?: string;
        databaseId: string;
        description?: string;
        disabled?: boolean;
        externalAccess?: boolean;
        id: string;
        mainUser?: boolean;
        name?: string;
        password: string;
        passwordUpdatedAt?: string;
        updatedAt?: string;
      }

      export interface DatabaseMySqlVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      /**
       * The configuration for a RedisDatabase.
       */
      export interface DatabaseRedisDatabaseConfiguration {
        /**
         * Additional flags passed to the database.
         */
        additionalFlags?: string[];
        /**
         * The database's maximum memory.
         */
        maxMemory?: string;
        /**
         * The database's key eviction policy.
         */
        maxMemoryPolicy?: string;
      }

      export interface DatabaseRedisDatabase {
        configuration?: MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabaseConfiguration;
        createdAt: string;
        description: string;
        finalizers: string[];
        hostname: string;
        id: string;
        name: string;
        port: number;
        projectId: string;
        updatedAt: string;
        version: string;
      }

      export interface DatabaseRedisVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      export type DnsRecordCNAME =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordCNAMEComponent;

      export interface DnsRecordCNAMEComponent {
        fqdn: string;
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export type DnsRecordCombinedA =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsCombinedACustom
        | MittwaldAPIV2.Components.Schemas.DnsCombinedAManaged;

      export type DnsCombinedAManagedAAAARecord = string;

      export type DnsCombinedAManagedARecord = string;

      export interface DnsCombinedACustom {
        /**
         * @maxItems 6
         */
        a: MittwaldAPIV2.Components.Schemas.DnsCombinedAManagedARecord[];
        /**
         * @maxItems 6
         */
        aaaa: MittwaldAPIV2.Components.Schemas.DnsCombinedAManagedAAAARecord[];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsCombinedAManaged {
        managedBy?: {
          ingressId: string;
        };
      }

      export type DnsRecordMX =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordMXManaged
        | MittwaldAPIV2.Components.Schemas.DnsRecordMXCustom;

      export interface DnsRecordMXCustom {
        /**
         * @minItems 1
         * @maxItems 5
         */
        records:
          | [MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord]
          | [
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord
            ];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordMXManaged {
        managed: boolean;
      }

      export interface DnsRecordMXRecord {
        fqdn: string;
        priority: number;
      }

      export interface DnsRecordSettings {
        ttl?:
          | MittwaldAPIV2.Components.Schemas.DnsTtlSeconds
          | MittwaldAPIV2.Components.Schemas.DnsTtlAuto;
      }

      export type DnsRecordTXT =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordTXTComponent;

      export interface DnsRecordTXTComponent {
        /**
         * @maxItems 20
         */
        entries: string[];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordUnset {}

      export interface DnsTtlAuto {
        /**
         * this will always be true
         */
        auto: boolean;
      }

      export interface DnsTtlSeconds {
        seconds: number;
      }

      export interface DnsZone {
        domain: string;
        id: string;
        recordSet: {
          cname: MittwaldAPIV2.Components.Schemas.DnsRecordCNAME;
          combinedARecords: MittwaldAPIV2.Components.Schemas.DnsRecordCombinedA;
          mx: MittwaldAPIV2.Components.Schemas.DnsRecordMX;
          txt: MittwaldAPIV2.Components.Schemas.DnsRecordTXT;
        };
      }

      export interface DomainAuthCode {
        expires?: string;
        value: string;
      }

      export interface DomainAuthCode2 {
        expires: string;
      }

      export interface DomainCreateDomainHandleData {
        adminC?: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
        ownerC: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
      }

      export interface DomainDomainOwnership {
        domain: string;
        id: string;
        projectId: string;
        txtRecord: string;
      }

      export interface DomainDomain {
        authCode?: MittwaldAPIV2.Components.Schemas.DomainAuthCode;
        authCode2?: MittwaldAPIV2.Components.Schemas.DomainAuthCode2;
        connected: boolean;
        deleted: boolean;
        domain: string;
        domainId: string;
        handles: {
          adminC?: MittwaldAPIV2.Components.Schemas.DomainHandleReadable;
          ownerC: MittwaldAPIV2.Components.Schemas.DomainHandleReadable;
        };
        hasAuthCode: boolean;
        /**
         * @minItems 2
         */
        nameservers: [string, string, ...string[]];
        processes?: MittwaldAPIV2.Components.Schemas.DomainProcess[];
        projectId: string;
        transferInAuthCode?: string;
        usesDefaultNameserver: boolean;
      }

      export interface DomainHandleData {
        handleFields?: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
        handleRef?: string;
      }

      export interface DomainHandleField {
        name: string;
        value: string;
      }

      export interface DomainHandleReadable {
        current: MittwaldAPIV2.Components.Schemas.DomainHandleData;
        desired?: MittwaldAPIV2.Components.Schemas.DomainHandleData;
      }

      export interface DomainProcess {
        error?: string;
        lastUpdate: string;
        processType: MittwaldAPIV2.Components.Schemas.DomainProcessType;
        state: MittwaldAPIV2.Components.Schemas.DomainProcessState;
        status?: string;
        statusCode?: string;
        transactionId: string;
      }

      export type DomainProcessState = "UNSPECIFIED" | "REQUESTED" | "FAILED";

      export type DomainProcessType =
        | "UNSPECIFIED"
        | "REGISTER"
        | "TRANSFER"
        | "DELETE"
        | "TRANSIT"
        | "RESTORE"
        | "UPDATE"
        | "TRANSFER_OUT"
        | "OWNER_CHANGE"
        | "DECLARE_REQUESTED";

      export type DomainRegistrar = "INTERNETX" | "DENIC" | "HEXONET";

      export interface DomainTopLevel {
        rgpDays: number;
        tld: string;
        transitAllowed: boolean;
        type:
          | "unknown"
          | "countryCode"
          | "generic"
          | "newGeneric"
          | "centralNic"
          | "other";
      }

      export interface FileFileMeta {
        friendlyURL: string;
        id: string;
        name: string;
        sizeInBytes: number;
        type: string;
      }

      export interface FileFileUploadRules {
        maxSizeInKB: number;
        mimeTypes: string[];
        properties?: {
          imageDimensions?: {
            max?: {
              height?: number;
              width?: number;
            };
            min?: {
              height?: number;
              width?: number;
            };
          };
        };
      }

      export interface IngressIngress {
        /**
         * A list of errors that occurred while validating the ingress's dns before requesting a certificate.
         */
        dnsValidationErrors: (
          | "ERROR_UNSPECIFIED"
          | "ERROR_QUAD_A"
          | "ERROR_NO_A_RECORD"
        )[];
        hostname: string;
        id: string;
        ips: {
          v4: string[];
        };
        /**
         * Whether this ingress is the default ingress or not. A default ingress is automatically created, it cannot be deleted. There can be only one default ingress per project.
         */
        isDefault: boolean;
        isEnabled: boolean;
        /**
         * A list of paths. The default path `/` is always present and cannot be removed.
         */
        paths: MittwaldAPIV2.Components.Schemas.IngressPath[];
        projectId: string;
        tls:
          | MittwaldAPIV2.Components.Schemas.IngressTlsAcme
          | MittwaldAPIV2.Components.Schemas.IngressTlsCertificate;
      }

      export interface IngressPath {
        path: string;
        target:
          | MittwaldAPIV2.Components.Schemas.IngressTargetDirectory
          | MittwaldAPIV2.Components.Schemas.IngressTargetUrl
          | MittwaldAPIV2.Components.Schemas.IngressTargetInstallation;
      }

      export interface IngressTargetDirectory {
        directory: string;
      }

      export interface IngressTargetInstallation {
        installationId: string;
      }

      export interface IngressTargetUrl {
        url: string;
      }

      export interface IngressTlsAcme {
        /**
         * Has to be `true`, as ssl cannot be deactivated.
         */
        acme: boolean;
      }

      export interface IngressTlsCertificate {
        certificateId: string;
      }

      export interface InvoiceCancellation {
        cancelledAt: string;
        correctionNumber: string;
        pdfId: string;
        reason?: string;
      }

      export interface InvoiceContractInvoiceDefinition {
        contractId: string;
        items: MittwaldAPIV2.Components.Schemas.InvoiceContractItemInvoiceDefinition[];
      }

      export interface InvoiceContractItemInvoiceDefinition {
        contractItemId: string;
        isDue?: boolean;
        serviceDate?: MittwaldAPIV2.Components.Schemas.InvoiceServiceDate;
        servicePeriod: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
        vatRate: number;
      }

      export interface InvoiceCorrectionDefinition {
        contractItemId: string;
        creditPeriod: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
      }

      export interface InvoiceDatePeriod {
        end: string;
        start: string;
      }

      export interface InvoiceError {
        message: string;
        type: string;
      }

      export interface InvoiceInvoiceItem {
        additionalDescription?: string;
        contractItemId: string;
        description: string;
        id: string;
        price: MittwaldAPIV2.Components.Schemas.InvoicePrice;
        reference?: {
          sourceInvoiceId: string;
          sourceInvoiceItemId: string;
        };
        serviceDate?: MittwaldAPIV2.Components.Schemas.InvoiceServiceDate;
        servicePeriod?: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
        vatRate: number;
      }

      export interface InvoiceInvoice {
        amountPaid: number;
        cancellation?: MittwaldAPIV2.Components.Schemas.InvoiceCancellation;
        /**
         * The ID of the invoice that this invoice cancels.
         */
        cancellationOf?: string;
        currency: string;
        customerId: string;
        date: string;
        groups: {
          contractId?: string;
          description: string;
          items: MittwaldAPIV2.Components.Schemas.InvoiceInvoiceItem[];
        }[];
        id: string;
        invoiceNumber: string;
        invoiceType: "REGULAR" | "REISSUE" | "CORRECTION" | "CANCELLATION";
        paymentSettings?: MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;
        pdfId: string;
        recipient: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
        status:
          | "NEW"
          | "CONFIRMED"
          | "DENIED"
          | "PAID"
          | "PARTIALLY_PAID"
          | "OVERPAID";
        totalGross: number;
        totalNet: number;
        vatId?: string;
      }

      export interface InvoiceInvoiceSettings {
        additionalEmailRecipients?: string[];
        id: string;
        invoicePeriod?: number;
        nextInvoiceCheck?: string;
        paymentSettings?: MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;
        printedInvoices?: boolean;
        recipient?: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
        recipientSameAsOwner?: boolean;
        targetDay?: number;
      }

      export interface InvoicePaymentSettingsDebit {
        accountHolder: string;
        bic: string;
        iban: string;
        method: "debit";
      }

      export interface InvoicePaymentSettingsInvoice {
        method: "invoice";
      }

      export type InvoicePaymentSettings =
        | MittwaldAPIV2.Components.Schemas.InvoicePaymentSettingsDebit
        | MittwaldAPIV2.Components.Schemas.InvoicePaymentSettingsInvoice;

      export interface InvoicePrice {
        currency: "EUR";
        value: number;
      }

      export interface InvoiceRecipient {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export type InvoiceServiceDate = string;

      export interface MailCreateMailAddress {
        address: string;
        isCatchAll: boolean;
        mailbox: {
          enableSpamProtection: boolean;
          password: string;
          quotaInBytes: number;
        };
      }

      export interface MailDeliverybox {
        authenticationEnabled: boolean;
        description: string;
        id: string;
        name: string;
        passwordUpdatedAt: string;
        projectId: string;
        sendingEnabled: boolean;
        updatedAt: string;
      }

      export interface MailError {
        message: string;
        type: string;
      }

      export interface MailCreateForwardAddress {
        address: string;
        forwardAddresses: string[];
      }

      export interface MailMailAddress {
        address: string;
        autoResponder: {
          active: boolean;
          expiresAt?: string;
          message: string;
          startsAt?: string;
        };
        forwardAddresses: string[];
        id: string;
        isArchived: boolean;
        isCatchAll: boolean;
        mailbox?: {
          passwordUpdatedAt: string;
          sendingEnabled: boolean;
          spamProtection: {
            active: boolean;
            autoDeleteSpam: boolean;
            folder: "spam" | "inbox";
            relocationMinSpamScore: number;
          };
          storageInBytes: {
            current: {
              updatedAt: string;
              value: number;
            };
            limit: number;
          };
        };
        projectId: string;
        receivingDisabled: boolean;
        updatedAt: string;
      }

      export type MembershipCustomerInheritedRoles =
        | "notset"
        | "owner"
        | "member"
        | "accountant";

      export interface MembershipCustomerInvite {
        /**
         * Reference to the Customer's avatar.
         */
        avatarRefId: string;
        /**
         * ID of the Customer the invite is for.
         */
        customerId: string;
        /**
         * Name of the Customer the user is invited to.
         */
        customerName: string;
        /**
         * ID of the CustomerInvite.
         */
        id: string;
        information: MittwaldAPIV2.Components.Schemas.MembershipInviteInformation;
        /**
         * Mail-address of the user the invite is for.
         */
        mailAddress: string;
        /**
         * Time the CustomerMembership should expire at.
         */
        membershipExpiresAt?: string;
        /**
         * Message contained in the CustomerInvite.
         */
        message?: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
      }

      export interface MembershipCustomerMembership {
        /**
         * ID of the Customer the CustomerMembership is for.
         */
        customerId: string;
        /**
         * Time the CustomerMembership should expire at.
         */
        expiresAt?: string;
        /**
         * ID of the CustomerMembership.
         */
        id: string;
        /**
         * ID of the CustomerInvite the membership was created from.
         */
        inviteId: string;
        /**
         * Date the CustomerMembership was created at.
         */
        memberSince?: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
        /**
         * ID of the user the CustomerMembership is for.
         */
        userId: string;
      }

      export type MembershipCustomerRoles = "owner" | "member" | "accountant";

      export interface MembershipInviteInformation {
        /**
         * Token for authentication purposes.
         */
        invitationToken: string;
        /**
         * ID of the user that created the invite.
         */
        invitedBy: string;
        /**
         * ID of the user this invite is for.
         */
        userId: string;
      }

      export interface MembershipProjectInvite {
        /**
         * ID of the ProjectInvite.
         */
        id: string;
        information: MittwaldAPIV2.Components.Schemas.MembershipInviteInformation;
        /**
         * Mail-address of the user the ProjectInvite is for.
         */
        mailAddress: string;
        /**
         * Time the ProjectMembership should expire at.
         */
        membershipExpiresAt?: string;
        /**
         * Message contained in the ProjectInvite.
         */
        message?: string;
        /**
         * Description of the Project the invite is created for.
         */
        projectDescription: string;
        /**
         * ID of the Project the invitation is for.
         */
        projectId: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
      }

      export interface MembershipProjectMembership {
        /**
         * Time the ProjectMembership should expire at.
         */
        expiresAt?: string;
        /**
         * ID of the ProjectMembership.
         */
        id: string;
        /**
         * Whether the ProjectMembership was inherited from a CustomerMembership.
         */
        inherited: boolean;
        /**
         * ID of the ProjectInvite the membership was created from.
         */
        inviteId: string;
        /**
         * Date the projectMembership was created at.
         */
        memberSince?: string;
        /**
         * ID of the Project the membership is for.
         */
        projectId: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
        /**
         * ID of the user the ProjectMembership is for.
         */
        userId: string;
      }

      export type MembershipProjectRoles =
        | "notset"
        | "owner"
        | "emailadmin"
        | "external";

      export interface MessagingAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface MessagingNotification {
        createdAt: string;
        id: string;
        read: boolean;
        reference: MittwaldAPIV2.Components.Schemas.MessagingAggregateReference;
        severity: "success" | "info" | "warning" | "error";
        type: string;
      }

      export type MessagingNotificationStatus = "read";

      export interface OrderAddons {
        hidden?: boolean;
        key: string;
        value: string;
      }

      export interface OrderArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface OrderAttributeConfiguration {
        key: string;
        value: string;
      }

      export interface OrderCustomerOrder {
        contractChangeContractId?: string;
        customerId: string;
        dueDate?: string;
        invoicingPeriod: number;
        items: MittwaldAPIV2.Components.Schemas.OrderOrderItem[];
        offerId?: string;
        orderDate: string;
        orderId: string;
        orderNumber: string;
        profile?: MittwaldAPIV2.Components.Schemas.OrderProfile;
        refLink?: string;
        status: MittwaldAPIV2.Components.Schemas.OrderOrderStatus;
        summary: MittwaldAPIV2.Components.Schemas.OrderOrderSummary;
        type: MittwaldAPIV2.Components.Schemas.OrderOrderType;
      }

      export interface OrderDomainHandleField {
        name: string;
        value: string;
      }

      export interface OrderHardwareSpec {
        ram?: number;
        vcpu?: number;
      }

      export interface OrderMachineTypeSpec {
        machineType?: string;
      }

      export interface OrderOrderItem {
        addons?: MittwaldAPIV2.Components.Schemas.OrderAddons[];
        amount: number;
        articleId: string;
        articleTemplateName?: string;
        attributeConfiguration?: MittwaldAPIV2.Components.Schemas.OrderAttributeConfiguration[];
        isInclusive: boolean;
        offerItemId?: string;
        orderItemId: string;
        predefinedDomainAggregateId?: string;
        price: number;
        reference?: MittwaldAPIV2.Components.Schemas.OrderReference;
      }

      export interface OrderReference {
        contractItemId?: string;
        offerItemId?: string;
        orderItemId?: string;
      }

      export type OrderOrderStatus =
        | "NEW"
        | "CONFIRMED"
        | "REJECTED"
        | "ABORTED"
        | "EXECUTED";

      export interface OrderOrderSummary {
        nonRecurring: number;
        recurring: number;
        summary: number;
      }

      export type OrderOrderType = "NEW_ORDER" | "CONTRACT_CHANGE";

      export interface OrderProfile {
        email: string;
        first_name?: string;
        last_name?: string;
        /**
         * the users title
         */
        title?: "other" | "mr" | "ms";
        userId: string;
      }

      export type PolicyPolicy = string;

      export interface ProjectAvatarRules {
        maxSizeInKB: number;
        mimeTypes: string[];
        properties?: {
          imageDimensions?: {
            max?: {
              height?: number;
              width?: number;
            };
            min?: {
              height?: number;
              width?: number;
            };
          };
        };
      }

      export type ProjectDisableReason =
        | "maliciousCode"
        | "illegalContent"
        | "maliciousConduct";

      export interface ProjectFilesystemDirectoryListing {
        absolutePath: string;
        isDirectory?: boolean;
        isExecutable?: boolean;
        isFile?: boolean;
        isSymlink?: boolean;
        items?: MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing[];
        name: string;
        size: number;
        target?: string;
      }

      export interface ProjectFilesystemUsagesDisk {
        path?: string;
        totalBytes?: number;
        usedBytes?: number;
      }

      export interface ProjectFsApiJwt {
        jwt: string;
      }

      export interface ProjectHardwareSpec {
        cpu: string;
        mem: string;
        storage: string;
      }

      export interface ProjectMachineType {
        cpu: string;
        memory: string;
        name: string;
      }

      export interface ProjectProject {
        clusterDomain?: string;
        clusterID?: string;
        createdAt: string;
        customerId: string;
        description: string;
        directories: {
          [k: string]: string;
        };
        disableReason?: MittwaldAPIV2.Components.Schemas.ProjectDisableReason;
        enabled: boolean;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        projectHostingId?: string;
        serverId?: string;
        serverShortId?: string;
        shortId: string;
        spec?:
          | MittwaldAPIV2.Components.Schemas.ProjectVisitorSpec
          | MittwaldAPIV2.Components.Schemas.ProjectHardwareSpec;
      }

      export interface ProjectServer {
        customerId: string;
        description: string;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        machineType: MittwaldAPIV2.Components.Schemas.ProjectMachineType;
        shortId: string;
        storage: string;
      }

      export interface ProjectVisitorSpec {
        storage: string;
        visitors: number;
      }

      export interface DirectusDomain {
        /**
         * The authcode of the domain. Leave empty when mittwald can generate a authcode on its own
         */
        authCode?: string;
        /**
         * Leave empty when mittwald should keep the same domain owner
         */
        domainOwnerData?: string;
        name: string;
      }

      export interface DomainEmptyResponse {
        error_props: {};
        error_reason: string;
      }

      export interface DomainError {
        message: string;
        type: string;
      }

      export interface SignupApiToken {
        apiTokenId: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        roles: ("api_read" | "api_write")[];
      }

      export interface SignupDeviceInfo {
        browser?: string;
        model?: string;
        os?: string;
        type?: string;
      }

      export interface SignupDomainError {
        /**
         * A json object, given further information about the error
         */
        info?: {};
        /**
         * Some more detailed information about the error
         */
        message: string;
        /**
         * Unique key for the error type
         */
        name: string;
      }

      export interface SignupLocation {
        city?: string;
        country?: string;
        ipAddress?: string;
      }

      /**
       * The users personal information, e.g. first name.
       */
      export interface SignupPerson {
        /**
         * The users first name
         */
        firstName: string;
        /**
         * the users last name
         */
        lastName: string;
        /**
         * the users title
         */
        title?: "other" | "mr" | "ms";
      }

      export interface SignupProfile {
        avatarRef?: string;
        email?: string;
        /**
         * the users mfa details
         */
        mfaDetails?: {
          mfaConfirmed?: boolean;
          mfaInitialized?: boolean;
        };
        passwordUpdatedAt?: string;
        person?: MittwaldAPIV2.Components.Schemas.SignupPerson;
        userId?: string;
      }

      export interface SignupSshKey {
        algorithm: string;
        comment: string;
        createdAt: string;
        expiresAt?: string;
        fingerprint: string;
        key: string;
        sshKeyId: string;
      }

      export interface SignupUserSession {
        created: string;
        device: MittwaldAPIV2.Components.Schemas.SignupDeviceInfo;
        lastAccess?: string;
        location?: MittwaldAPIV2.Components.Schemas.SignupLocation;
        tokenId: string;
      }

      export interface CommonValidationError {
        /**
         * The object with the additional information about the error that can be used to create custom error messages. Keys depend on the
         * type that failed validation (e.g. "missingProperty" for type "required")
         *
         */
        context?: {
          [k: string]: string;
        };
        /**
         * The standard error message
         */
        message: string;
        /**
         * The path to the part of the data that was validated. JavaScript property access notation (e.g., ".prop[1].subProp") is used.
         *
         */
        path: string;
        /**
         * ajv validation error type (e.g. "format", "required", "type") or own valiation error types
         */
        type: string;
      }

      export interface CommonValidationErrors {
        errorObjects: MittwaldAPIV2.Components.Schemas.CommonValidationError[];
        name: "ValidationError";
      }

      export type SshuserEntityTypes = "ssh" | "sftp";

      /**
       * The level of access for an SFTPUser.
       */
      export type SshuserAccessLevel = "full" | "read" | "unspecified";

      /**
       * Method of authentication that a given SFTPUser or SSHuser supports.
       */
      export type SshuserAuthType = "password" | "publicKey";

      /**
       * Method of authentication for an SFTPUser or SSHUser. Can be password or public-keys.
       */
      export type SshuserAuthentication =
        | {
            password: string;
          }
        | {
            publicKeys: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
          };

      /**
       * A representation of an ssh-public-key.
       */
      export interface SshuserPublicKey {
        comment: string;
        key: string;
      }

      /**
       * A representation of an SFTPUser.
       */
      export interface SshuserSftpUser {
        accessLevel: MittwaldAPIV2.Components.Schemas.SshuserAccessLevel;
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        directories?: string[];
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      /**
       * A representation of an SSHUser.
       */
      export interface SshuserSshUser {
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      export interface UserUserFeedback {
        id: string;
        message: string;
        origin: string;
        subject: string;
        vote: number;
      }

      export interface UserUser {
        avatarRef?: string;
        email?: string;
        person: MittwaldAPIV2.Components.Schemas.SignupPerson;
        phoneNumber?: string;
        userId: string;
      }

      export interface VarnishConfigRevision {
        expire?: number;
        files: MittwaldAPIV2.Components.Schemas.VarnishConfigFileRef[];
        note?: string;
        revision: number;
        updated: string;
      }

      export interface VarnishConfigTemplate {
        /**
         * A set of config file references.
         */
        files: MittwaldAPIV2.Components.Schemas.VarnishConfigFileRef[];
        isGlobal?: boolean;
        note?: string;
        projectId?: string;
        softwareConfigTemplateId: string;
        softwareTemplateId: string;
        updatedAt?: string;
      }

      export interface VarnishConfigFile {
        content: string;
        meta?: MittwaldAPIV2.Components.Schemas.VarnishConfigFileMetadata;
      }

      export interface VarnishConfigFileMetadata {
        name: string;
        path?: string;
      }

      export interface VarnishConfigFileRef {
        meta?: MittwaldAPIV2.Components.Schemas.VarnishConfigFileMetadata;
        refId?: string;
      }

      export interface VarnishGlobalConfigTemplate {
        data: string;
        name: string;
        updatedAt: string;
      }

      export interface VarnishSoftware {
        config: MittwaldAPIV2.Components.Schemas.VarnishSoftwareConfig;
        projectId: string;
        settings?: {
          [k: string]: string;
        };
        softwareId: string;
        softwareTemplateId: string;
        softwareVersion: string;
        updatedAt: string;
      }

      export interface VarnishSoftwareConfig {
        configExpiration?: MittwaldAPIV2.Components.Schemas.VarnishConfigExpiration;
        latestConfigRevision?: number;
        revisions?: MittwaldAPIV2.Components.Schemas.VarnishConfigRevision[];
      }

      export interface VarnishConfigExpiration {
        maxVersions?: number;
        retentionTime?: number;
      }

      export interface VarnishSoftwareSetting {
        name: string;
        value: string;
      }

      export interface CommonsAddress {
        street: string;
        houseNumber: string;
        city: string;
        zip: string;
        /**
         * ISO 3166-1 alpha-2 country code
         */
        countryCode: string;
      }

      export interface CommonsError {
        message: string;
        type: string;
      }

      /**
       * The users personal information, e.g. first name.
       */
      export interface CommonsPerson {
        /**
         * The users first name
         */
        firstName: string;
        /**
         * the users last name
         */
        lastName: string;
        title?: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
      }

      export type CommonsSalutation = "mr" | "ms" | "other";

      export interface CommonsValidationErrorSchema {
        /**
         * The standard error message
         */
        message: string;
        /**
         * The path to the part of the data that was validated. JavaScript property access notation (e.g., ".prop[1].subProp") is used.
         *
         */
        path: string;
        /**
         * ajv validation error type (e.g. "format", "required", "type") or own validation error types
         */
        type: string;
        /**
         * The object with the additional information about the error that can be used to create custom error messages. Keys depend on the
         * type that failed validation (e.g. "missingProperty" for type "required")
         *
         */
        context?: {
          [k: string]: string;
        };
      }

      export interface CommonsValidationErrors {
        type: "ValidationError";
        message?: string;
        validationErrors: MittwaldAPIV2.Components.Schemas.CommonsValidationErrorSchema[];
      }
    }

    namespace Parameters {}

    namespace RequestBodies {}

    namespace Responses {
      namespace AppGenericResponse {
        export interface ApplicationJson {}
      }

      namespace CustomerGenericResponse {
        export interface ApplicationJson {}
      }

      namespace CustomerFailedPreconditionError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace DnsGenericResponse {
        export interface ApplicationJson {}
      }

      namespace DomainSuccessResponse {
        export interface ApplicationJson {
          isAsync?: boolean;
          transactionId?: string;
        }
      }

      namespace InvoiceEmptyResponse {
        export interface ApplicationJson {}
      }

      namespace MailEmptyResponse {
        export interface ApplicationJson {}
      }

      namespace OrderGenericResponse {
        export interface ApplicationJson {}
      }

      namespace OrderNotFoundError {
        export interface ApplicationJson {}
      }

      namespace DomainDefaultError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.DomainError;
      }

      namespace DomainGenericResponse {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.DomainEmptyResponse;
      }

      namespace DomainEmptyResponse {
        export interface ApplicationJson {}
      }

      namespace DomainNotFoundError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.DomainError;
      }

      namespace DomainValidationError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.DomainError;
      }

      namespace SignupInternalServerError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "InternalServerError";
          };
      }

      namespace SignupNoValidAccessTokenError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "NoAccessTokenProvided";
          };
      }

      namespace CommonRateLimitError {}

      namespace SignupRemovingLastOwnerNotAllowedError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "RemovingLastOwnerNotAllowedError";
          };
      }

      namespace SignupSecondFactorRequiredError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "SecondFactorRequired";
          };
      }

      namespace CommonsDefaultError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace CommonsNotFoundError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace CommonsValidationError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
      }
    }

    namespace SecuritySchemes {
      /**
       * Access Token is required in header
       */
      export interface CommonAccessToken {
        "x-access-token"?: string;
      }

      /**
       * Legacy Access Token is required in header
       */
      export interface CommonLegacyAccessToken {
        Authorization: string;
      }

      /**
       * Access Token is required in header
       */
      export interface CommonsAccessToken {
        "x-access-token"?: string;
      }
    }
  }

  namespace Paths {
    namespace V2AppinstallationsAppInstallationIdActionsAction {
      namespace Post {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            action: MittwaldAPIV2.Components.Schemas.AppAction;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppApp;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallation;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppIdVersionsAppVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
            appVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppVersion;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemsoftwaresSystemSoftwareId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftware;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
            systemSoftwareVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftwareVersion;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdDatabases {
      namespace Put {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdAppinstallations {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallation[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                processId: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Apps {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppApp[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppVersion[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Systemsoftwares {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftware[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemsoftwareSystemSoftwareIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            versionRange?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftwareVersion[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdStatus {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallationStatus;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdDatabasesDatabaseId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsIdActionsUpdateStatus {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ArticlesArticleId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            articleId: string;
          };

          export type Header = {};

          export type Query = {
            customerId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ArticleReadableArticle;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Articles {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            customerId?: string;
            limit?: number;
            skip?: number;
            page?: number;
            tags?: string[];
            templateNames?: string[];
            articleIds?: string[];
            orderable?: (
              | "forbidden"
              | "internal"
              | "beta_testing"
              | "full"
              | "deprecated"
            )[];
            name?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ArticleReadableArticle[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupIdExport {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdBackupSchedules {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdBackups {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupSchedulesProjectBackupScheduleId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTermination {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTariffChange {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdTermination {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                itemsScheduledForTermination?: string[];
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdBaseItems {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdNextTerminationDates {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractItemId: string;
                nextTerminationDate: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Conversations {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversation[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdMessages {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = (
                | MittwaldAPIV2.Components.Schemas.ConversationMessage
                | MittwaldAPIV2.Components.Schemas.ConversationStatusUpdate
              )[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationCategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationCategory;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversation;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationCategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationCategory[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdFiles {
      namespace Post {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
                rules: {
                  maxSizeInKB: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
                uploadToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdMessagesMessageId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            conversationId: string;
            messageId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort {
      namespace Post {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
            executionId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdCronjobs {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjob[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            since?: string;
            until?: string;
            status?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * execution-id
                 */
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjob;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutionsExecutionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            executionId: string;
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdAppId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Customercategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                categories?: MittwaldAPIV2.Components.Schemas.CustomerCategory[];
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerCategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                categories?: MittwaldAPIV2.Components.Schemas.CustomerCategory[];
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerCustomerIdInvites {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Customers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            role?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCustomer[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdNotes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerNote[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                author?: string;
                customerId: string;
                isImportant?: boolean;
                message?: string;
                noteId: string;
                subject?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomercategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCategory;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerCategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCategory;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerMembershipsMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCustomer;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdNotesNoteId {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                author?: string;
                customerId: string;
                isImportant?: boolean;
                message?: string;
                noteId: string;
                subject?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
            noteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerTokenInvite {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {
            token: string;
          } & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLegallyCompetent {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                isLegallyCompetent?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerCustomerIdActionsLeave {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: {
                  maxSizeInKB: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMysqlDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesDatabaseIdUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            databaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlUser[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            databaseId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdRedisDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisDatabasesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersIdActionsDisable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersIdActionsEnable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersIdPhpMyAdminUrl {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabasePhpMyAdminURL;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlCharsets {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            version?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlCharacterSettings[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesIdDefaultCharset {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersIdPassword {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisDatabasesIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTerminations {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTariffChanges {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdTerminations {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                itemsScheduledForTermination?: string[];
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdContractsContractId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                msg?: string;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                msg?: string;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdBaseItem {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Contracts {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
            placementgroupId?: string;
            domainId?: string;
            projectHostingId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdNextTerminationDate {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractItemId: string;
                nextTerminationDate: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetAcombinedCustom {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetAcombinedManagedIngress {
      namespace Post {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {
                ingressId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetCname {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetMxCustom {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetMxManaged {
      namespace Post {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetTxt {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesZoneId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DnsZone;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDnsZones {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DnsZone[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarations {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdHandlesOwnerc {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdProjectId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Domains {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                available: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsCreateAuthcode {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                authCode: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsCreateAuthcode2 {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdNameservers {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarationsAuthcode {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarationsHandles {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomain;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsHandleSchemaDomainName {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainName: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                jsonSchemaAdminC?: {};
                jsonSchemaOwnerC: {};
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainOwnershipsDomainOwnershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainOwnershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomainOwnership;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            domainOwnershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ToplevelDomainsTld {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tld: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainTopLevel;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDomainOwnerships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomainOwnership[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDomains {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            page?: number;
            limit?: number;
            domainSearchName?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomain[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ToplevelDomains {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainTopLevel[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsResendEmail {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Files {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {
            Token: string;
          };

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileMeta;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FilesIdMeta {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileMeta;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FileTokenRulesToken {
      namespace Get {
        namespace Parameters {
          export type Path = {
            token: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FileTypeRulesName {
      namespace Get {
        namespace Parameters {
          export type Path = {
            name: "avatar" | "conversation";
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FilesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header = {
            Accept?: "binary" | "base64";
            Download?: boolean;
          };

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationOctetStream = string;

              export type Base64 = string;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Ingresses {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Ingresses {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdIngresses {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressIdPaths {
      namespace Put {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressIdTls {
      namespace Put {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesInvoiceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            invoiceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoice;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoiceSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoices {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            invoiceTypes?: (
              | "REGULAR"
              | "REISSUE"
              | "CORRECTION"
              | "CANCELLATION"
            )[];
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoice[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDeliveryboxes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              /**
               * A set of deliveryboxes
               */
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailDeliverybox[];
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailDeliverybox;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesIdDescription {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesIdPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailaddresses {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              /**
               * A set of mail addresses
               */
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailMailAddress[];
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailMailAddress;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdAddress {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdAutoResponder {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdCatchAll {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdForwardaddresses {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdQuota {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdSpamprotection {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                blacklist: string[];
                projectId: string;
                whitelist: string[];
              }
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettingsBlacklist {
      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettingsWhitelist {
      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NewsletterSubscriptionsEmail {
      namespace Get {
        namespace Parameters {
          export type Path = {
            email: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            email: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NewsletterSubscriptions {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationsUnreadCounts {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                error: number;
                info: number;
                success: number;
                total: number;
                warning: number;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Notifications {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            status?: "unread" | "read";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MessagingNotification[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationsStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.MessagingNotificationStatus;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationsMessageIdStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {
            messageId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.MessagingNotificationStatus;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsChangeProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsChangeServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersOrderId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            orderId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsOrderDomain {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                dueDate?: string;
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsOrderProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsOrderServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewChangeProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewChangeServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderDomain {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                domainPrice?: number;
                feePrice?: number;
                totalPrice?: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PasswordPoliciesPath {
      namespace Get {
        namespace Parameters {
          export type Path = {
            path: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.PolicyPolicy;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectProjectIdInvites {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdProjects {
      namespace Post {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectMembershipsMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemDirectories {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            directory?: string;
            name?: string;
            max_depth?: number;
            type?: string[];
            executable?: boolean;
            hidden?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemUsagesDisk {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            directory?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemUsagesDisk;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemFilesRaw {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            file?: string;
            inline?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type TextPlain = string;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdJwt {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFsApiJwt;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemFiles {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            file?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectTokenInvite {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {
            token: string;
          } & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectProject;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMembershipsSelf {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectServer;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdLeave {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Projects {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            customerId?: string;
            serverId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                createdAt: string;
                customerId: string;
                customerMeta: {
                  id: string;
                };
                description: string;
                enabled: boolean;
                id: string;
                imageRefId?: string;
                isReady: boolean;
                projectHostingId?: string;
                serverId?: string;
                shortId: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Servers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            customerId?: string;
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectServer[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Relocation {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdSftpUsers {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SftpUsersSftpUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectProjectIdSftpUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupTokenApi {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupApiToken[];
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The `ApiToken`
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupTokenApiApiTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupApiToken;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupAuthentication {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
                 */
                expires: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "SecondFactorRequired";
                };
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupAuthenticationLegacy {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupAuthenticationMfa {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
                 */
                expires: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "FirstAuthenticationFactorExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupEmail {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                email: string;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupEmailResend {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupEmailVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupLogout {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupMfaConfirm {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupMfa {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                confirmed: boolean;
                initialized: boolean;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * base64 encoded barcode content to scan from your mfa app. e.g. `iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAAAAADYoy...`. You
                 * can display it with `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUh.." />`
                 *
                 */
                barcode: string;
                /**
                 * Same as barcode,  but in URL form. e.g.
                 * `otpauth://totp/Google:test@gmail.com?algorithm=SHA1&digits=6&issuer=Google&period=30&secret=HTXT7KJFVNAJUPYWQRWMNVQE5AF5YZI2"`
                 *
                 */
                url: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPassword {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                passwordUpdatedAt: string;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
                 */
                expires: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPasswordResetConfirm {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPasswordReset {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPhone {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The phone number
                 */
                phoneNumber?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPhoneVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupProfile {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupProfile;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupMfaResetRecoverycodes {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupRegistration {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                userId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "LegacyAuthenticationExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupRegistrationVerification {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "EmailNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupSessionsTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupUserSession;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupSessions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupUserSession[];
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupSsh {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKeys?: MittwaldAPIV2.Components.Schemas.SignupSshKey[];
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupSshSshKeyId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKey: MittwaldAPIV2.Components.Schemas.SignupSshKey;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "SshKeyNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupSupportcode {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            forceRecreate?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration of the support code
                 */
                expiresAt?: string;
                /**
                 * support code to authenticate yourself against the mittwald support via telephone
                 */
                supportCode?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupTokenCheck {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                publicToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdSshUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SshUsersSshUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SshusersSshUserId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserUserIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: {
                  maxSizeInKB: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserFeedback {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            subject?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.UserUserFeedback[];
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserIssues {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.UserUser;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                settingsString?: string;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserUserIdPhone {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UserUserIdPhoneVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2User {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.UserUser;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2VarnishConfigValidate {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                /**
                 * The name of the validator.
                 */
                name: string;
                /**
                 * Semantic version describing all of supported versions
                 */
                version: string;
              }[];
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                stages?: {
                  /**
                   * The 'error_context' may contain validator / error_type specific content like
                   * 'line' and 'pos'.
                   *
                   */
                  errorContext?: {};
                  /**
                   * The 'errorMessage' may contain a human readable error message,
                   * if the error could be parsed / is known
                   * or the complete, unparsed validator output otherwise.
                   *
                   */
                  errorMessage?: string;
                  /**
                   * The 'errorType' is
                   * * empty, when the stage is successful
                   * * unknown, when the error type is now known / not parsed
                   * * or some validator specific string.
                   *
                   */
                  errorType?: string;
                  /**
                   * The name of the stage.
                   */
                  name?: string;
                }[];
                /**
                 * A validation request is successful, if all stages are successful.
                 */
                success: boolean;
              }
            }
          }
        }
      }
    }
  }
}
