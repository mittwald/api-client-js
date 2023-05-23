/* eslint-disable */
/* prettier-ignore */

/**
* This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript)
*/

import { MittwaldApiV2 } from "./types.js";
import { Simplify } from "@mittwald/api-client-commons/dist/type-fest";
import { Request } from "@mittwald/api-client-commons/dist/types/Request.js";
import { Response } from "@mittwald/api-client-commons/dist/types/Response.js";
import { OpenAPIOperation } from "@mittwald/api-client-commons/dist/types/OpenAPIOperation.js";

export const appGetApp: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}",
  method: "GET",
  operationId: "appGetApp",
};

export const appListApps: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps",
  method: "GET",
  operationId: "appListApps",
};

export const appExecuteAction: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Actions_Action.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/actions/{action}",
  method: "POST",
  operationId: "appExecuteAction",
};

export const appGetAppinstallation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "GET",
  operationId: "appGetAppinstallation",
};

export const appPatchAppinstallation: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "PATCH",
  operationId: "appPatchAppinstallation",
};

export const appUninstallAppinstallation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}",
  method: "DELETE",
  operationId: "appUninstallAppinstallation",
};

export const appListAppinstallations: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "GET",
  operationId: "appListAppinstallations",
};

export const appRequestAppinstallation: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Appinstallations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/appinstallations",
  method: "POST",
  operationId: "appRequestAppinstallation",
};

export const appLinkDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases",
  method: "PUT",
  operationId: "appLinkDatabase",
};

export const appRetrieveStatus: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Status.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/status",
  method: "GET",
  operationId: "appRetrieveStatus",
};

export const appSetDatabaseUsers: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "PUT",
  operationId: "appSetDatabaseUsers",
};

export const appUnlinkDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_AppInstallationId_Databases_DatabaseId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{appInstallationId}/databases/{databaseId}",
  method: "DELETE",
  operationId: "appUnlinkDatabase",
};

export const appUpdateStatus: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Appinstallations_Id_Actions_Update_Status.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/appinstallations/{id}/actions/update-status",
  method: "POST",
  operationId: "appUpdateStatus",
};

export const deprecatedAppGetAppversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions_AppVersionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/app/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "deprecatedAppGetAppversion",
};

export const deprecatedAppListAppversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_App_AppId_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/app/{appId}/versions",
  method: "GET",
  operationId: "deprecatedAppListAppversions",
};

export const articleServiceGetArticle: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles_ArticleId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles/{articleId}",
  method: "GET",
  operationId: "articleServiceGetArticle",
};

export const articleServiceListArticles: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Articles.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Articles.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Articles.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/articles",
  method: "GET",
  operationId: "articleServiceListArticles",
};

export const contractCancelContractItemTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "DELETE",
  operationId: "contractCancelContractItemTermination",
};

export const contractTerminateContractItem: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Termination.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/termination",
  method: "POST",
  operationId: "contractTerminateContractItem",
};

export const contractCancelContractTariffChange: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-change",
  method: "DELETE",
  operationId: "contractCancelContractTariffChange",
};

export const contractCancelContractTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "DELETE",
  operationId: "contractCancelContractTermination",
};

export const contractTerminateContract: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Termination.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/termination",
  method: "POST",
  operationId: "contractTerminateContract",
};

export const contractGetDetailOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}",
  method: "GET",
  operationId: "contractGetDetailOfContract",
};

export const deprecatedContractGetDetailOfContractByAggregate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts",
  method: "GET",
  operationId: "deprecatedContractGetDetailOfContractByAggregate",
};

export const deprecatedContractDetailOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts_ContractId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts/{contractId}",
  method: "GET",
  operationId: "deprecatedContractDetailOfContract",
};

export const contractGetDetailOfContractItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}",
  method: "GET",
  operationId: "contractGetDetailOfContractItem",
};

export const contractListContracts: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/contracts",
  method: "GET",
  operationId: "contractListContracts",
};

export const deprecatedContractGetNextTerminationDateForItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-date",
  method: "GET",
  operationId: "deprecatedContractGetNextTerminationDateForItem",
};

export const conversationCreateConversation: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "POST",
  operationId: "conversationCreateConversation",
};

export const conversationListConversations: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations",
  method: "GET",
  operationId: "conversationListConversations",
};

export const conversationCreateMessage: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "POST",
  operationId: "conversationCreateMessage",
};

export const conversationListMessagesByConversation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages",
  method: "GET",
  operationId: "conversationListMessagesByConversation",
};

export const conversationListCategories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversation-categories",
  method: "GET",
  operationId: "conversationListCategories",
};

export const conversationGetCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversation_Categories_CategoryId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversation-categories/{categoryId}",
  method: "GET",
  operationId: "conversationGetCategory",
};

export const conversationGetConversation: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "GET",
  operationId: "conversationGetConversation",
};

export const conversationUpdateConversation: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}",
  method: "PUT",
  operationId: "conversationUpdateConversation",
};

export const conversationRequestFileUpload: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Files.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/files",
  method: "POST",
  operationId: "conversationRequestFileUpload",
};

export const conversationSetConversationStatus: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/status",
  method: "PUT",
  operationId: "conversationSetConversationStatus",
};

export const conversationUpdateMessage: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Conversations_ConversationId_Messages_MessageId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/conversations/{conversationId}/messages/{messageId}",
  method: "PATCH",
  operationId: "conversationUpdateMessage",
};

export const cronjobCreateCronjob: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "POST",
  operationId: "cronjobCreateCronjob",
};

export const cronjobListCronjobs: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Cronjobs.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/cronjobs",
  method: "GET",
  operationId: "cronjobListCronjobs",
};

export const cronjobCreateExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "POST",
  operationId: "cronjobCreateExecution",
};

export const cronjobListExecutions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions",
  method: "GET",
  operationId: "cronjobListExecutions",
};

export const cronjobDeleteCronjob: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "DELETE",
  operationId: "cronjobDeleteCronjob",
};

export const cronjobGetCronjob: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "GET",
  operationId: "cronjobGetCronjob",
};

export const cronjobUpdateCronjob: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}",
  method: "PATCH",
  operationId: "cronjobUpdateCronjob",
};

export const cronjobGetExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}",
  method: "GET",
  operationId: "cronjobGetExecution",
};

export const customerRemoveAvatar: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "DELETE",
  operationId: "customerRemoveAvatar",
};

export const customerRequestAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Avatar.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/avatar",
  method: "POST",
  operationId: "customerRequestAvatarUpload",
};

export const customerCreateCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories",
  method: "POST",
  operationId: "customerCreateCategoryDeprecated",
};

export const customerListOfCustomerCategoriesDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories",
  method: "GET",
  operationId: "customerListOfCustomerCategoriesDeprecated",
};

export const customerCreateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "POST",
  operationId: "customerCreateCustomer",
};

export const customerListCustomers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers",
  method: "GET",
  operationId: "customerListCustomers",
};

export const customerCreateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "POST",
  operationId: "customerCreateNote",
};

export const customerListOfNotes: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes",
  method: "GET",
  operationId: "customerListOfNotes",
};

export const customerIsCustomerLegallyCompetent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Legally_Competent.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/legally-competent",
  method: "GET",
  operationId: "customerIsCustomerLegallyCompetent",
};

export const customerDeleteCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "DELETE",
  operationId: "customerDeleteCategoryDeprecated",
};

export const customerDetailOfCustomerCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "GET",
  operationId: "customerDetailOfCustomerCategoryDeprecated",
};

export const customerUpdateCategoryDeprecated: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customercategories_CategoryId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customercategories/{categoryId}",
  method: "PUT",
  operationId: "customerUpdateCategoryDeprecated",
};

export const customerDeleteCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "DELETE",
  operationId: "customerDeleteCustomer",
};

export const customerGetCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "GET",
  operationId: "customerGetCustomer",
};

export const customerUpdateCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}",
  method: "PUT",
  operationId: "customerUpdateCustomer",
};

export const customerDeleteNote: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "DELETE",
  operationId: "customerDeleteNote",
};

export const customerUpdateNote: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Notes_NoteId.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/notes/{noteId}",
  method: "POST",
  operationId: "customerUpdateNote",
};

export const deprecatedDatabaseListMysqlCharsets: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets_Version.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-charsets/{version}",
  method: "GET",
  operationId: "deprecatedDatabaseListMysqlCharsets",
};

export const databaseListMysqlCharsets: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Charsets.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-charsets",
  method: "GET",
  operationId: "databaseListMysqlCharsets",
};

export const deprecatedDatabaseCreateMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "POST",
  operationId: "deprecatedDatabaseCreateMysqlDatabase",
};

export const deprecatedDatabaseListMysqlDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases",
  method: "GET",
  operationId: "deprecatedDatabaseListMysqlDatabases",
};

export const databaseDeleteMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "DELETE",
  operationId: "databaseDeleteMysqlDatabase",
};

export const databaseGetMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}",
  method: "GET",
  operationId: "databaseGetMysqlDatabase",
};

export const databaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PATCH",
  operationId: "databaseUpdateMysqlDatabaseDefaultCharset",
};

export const deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Default_Charset.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/default-charset",
  method: "PUT",
  operationId: "deprecatedDatabaseUpdateMysqlDatabaseDefaultCharset",
};

export const databaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PATCH",
  operationId: "databaseUpdateMysqlDatabaseDescription",
};

export const deprecatedDatabaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Id_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{id}/description",
  method: "PUT",
  operationId: "deprecatedDatabaseUpdateMysqlDatabaseDescription",
};

export const deprecatedDatabaseCreateMysqlDatabaseWithUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Databases_With_User.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-databases-with-user",
  method: "POST",
  operationId: "deprecatedDatabaseCreateMysqlDatabaseWithUser",
};

export const databaseCreateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "POST",
  operationId: "databaseCreateMysqlUser",
};

export const databaseListMysqlUsers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_DatabaseId_Users.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/{databaseId}/users",
  method: "GET",
  operationId: "databaseListMysqlUsers",
};

export const deprecatedDatabaseDeleteMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "DELETE",
  operationId: "deprecatedDatabaseDeleteMysqlUser",
};

export const deprecatedDatabaseGetMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "GET",
  operationId: "deprecatedDatabaseGetMysqlUser",
};

export const deprecatedDatabaseUpdateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}",
  method: "PUT",
  operationId: "deprecatedDatabaseUpdateMysqlUser",
};

export const deprecatedDatabaseDisableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Disable.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/disable",
  method: "PUT",
  operationId: "deprecatedDatabaseDisableMysqlUser",
};

export const deprecatedDatabaseEnableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Enable.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/enable",
  method: "PUT",
  operationId: "deprecatedDatabaseEnableMysqlUser",
};

export const deprecatedDatabaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Php_My_Admin.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/php-my-admin",
  method: "GET",
  operationId: "deprecatedDatabaseGetMysqlUserPhpMyAdminUrl",
};

export const deprecatedDatabaseSetMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/password",
  method: "PUT",
  operationId: "deprecatedDatabaseSetMysqlUserPassword",
};

export const deprecatedDatabaseUpdateMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Databases_Users_UserId_Password.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-databases/users/{userId}/password",
  method: "PATCH",
  operationId: "deprecatedDatabaseUpdateMysqlUserPassword",
};

export const deprecatedDatabaseListMysqlVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Mysql_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/mysql-versions",
  method: "GET",
  operationId: "deprecatedDatabaseListMysqlVersions",
};

export const deprecatedDatabaseCreateRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "POST",
  operationId: "deprecatedDatabaseCreateRedisDatabase",
};

export const deprecatedDatabaseListRedisDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-databases",
  method: "GET",
  operationId: "deprecatedDatabaseListRedisDatabases",
};

export const databaseDeleteRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "DELETE",
  operationId: "databaseDeleteRedisDatabase",
};

export const databaseGetRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}",
  method: "GET",
  operationId: "databaseGetRedisDatabase",
};

export const databaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PATCH",
  operationId: "databaseUpdateRedisDatabaseDescription",
};

export const deprecatedDatabaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Databases_Id_Description.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-databases/{id}/description",
  method: "PUT",
  operationId: "deprecatedDatabaseUpdateRedisDatabaseDescription",
};

export const deprecatedDatabaseListRedisVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Database_Redis_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/database/redis-versions",
  method: "GET",
  operationId: "deprecatedDatabaseListRedisVersions",
};

export const dnsRecordASetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/custom",
  method: "PUT",
  operationId: "dnsRecordASetCustom",
};

export const dnsRecordASetManagedByIngress: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.$204.Content.Application_Json,
      204,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/acombined/managed/ingress",
  method: "POST",
  operationId: "dnsRecordASetManagedByIngress",
};

export const dnsRecordCnameSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Cname.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/cname",
  method: "PUT",
  operationId: "dnsRecordCnameSet",
};

export const dnsRecordMxSetCustom: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Custom.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/custom",
  method: "PUT",
  operationId: "dnsRecordMxSetCustom",
};

export const dnsRecordMxSetManaged: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Mx_Managed.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/mx/managed",
  method: "POST",
  operationId: "dnsRecordMxSetManaged",
};

export const dnsRecordTxtSet: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId_Recordset_Txt.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}/recordset/txt",
  method: "PUT",
  operationId: "dnsRecordTxtSet",
};

export const dnsZoneGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Dns_Zones_ZoneId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/dns/zones/{zoneId}",
  method: "GET",
  operationId: "dnsZoneGetSpecific",
};

export const dnsZonesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Dns_Zones.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/dns/zones",
  method: "GET",
  operationId: "dnsZonesForProject",
};

export const domainServiceAbortDeclareProcess: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations",
  method: "DELETE",
  operationId: "domainServiceAbortDeclareProcess",
};

export const domainServiceChangeOwnercOfDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Handles_Ownerc.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/handles/ownerc",
  method: "PUT",
  operationId: "domainServiceChangeOwnercOfDomain",
};

export const domainServiceChangeProjectOfDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_ProjectId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/projectId",
  method: "PUT",
  operationId: "domainServiceChangeProjectOfDomain",
};

export const domainServiceCheckDomainAvailability: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains",
  method: "POST",
  operationId: "domainServiceCheckDomainAvailability",
};

export const domainServiceCreateAuthcodeForDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode",
  method: "POST",
  operationId: "domainServiceCreateAuthcodeForDomain",
};

export const domainServiceCreateAuthcode2ForDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Create_Authcode2.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/create-authcode2",
  method: "POST",
  operationId: "domainServiceCreateAuthcode2ForDomain",
};

export const domainServiceDeclareNameservers: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Nameservers.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/nameservers",
  method: "PUT",
  operationId: "domainServiceDeclareNameservers",
};

export const domainServiceDeclareProcessChangeAuthcode: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Authcode.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/authcode",
  method: "PUT",
  operationId: "domainServiceDeclareProcessChangeAuthcode",
};

export const domainServiceDeclareProcessChangeHandles: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Declarations_Handles.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/declarations/handles",
  method: "PUT",
  operationId: "domainServiceDeclareProcessChangeHandles",
};

export const domainServiceDeleteDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "DELETE",
  operationId: "domainServiceDeleteDomain",
};

export const domainServiceGetDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}",
  method: "GET",
  operationId: "domainServiceGetDomain",
};

export const domainServiceGetHandleFields: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_Handle_Schema_DomainName.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/handle-schema/{domainName}",
  method: "GET",
  operationId: "domainServiceGetHandleFields",
};

export const domainServiceGetSpecificDomainOwnership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "GET",
  operationId: "domainServiceGetSpecificDomainOwnership",
};

export const domainServiceVerifyDomainOwnership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domain_Ownerships_DomainOwnershipId.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domain-ownerships/{domainOwnershipId}",
  method: "POST",
  operationId: "domainServiceVerifyDomainOwnership",
};

export const domainServiceGetToplevelDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains_Tld.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/toplevel-domains/{tld}",
  method: "GET",
  operationId: "domainServiceGetToplevelDomain",
};

export const domainServiceListDomainOwnerships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domain_Ownerships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domain-ownerships",
  method: "GET",
  operationId: "domainServiceListDomainOwnerships",
};

export const domainServiceListDomains: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Domains.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/domains",
  method: "GET",
  operationId: "domainServiceListDomains",
};

export const domainServiceListToplevelDomains: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Toplevel_Domains.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/toplevel-domains",
  method: "GET",
  operationId: "domainServiceListToplevelDomains",
};

export const domainServiceResendDomainEmail: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Actions_Resend_Email.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/actions/resend-email",
  method: "POST",
  operationId: "domainServiceResendDomainEmail",
};

export const fileCreateFile: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files",
  method: "POST",
  operationId: "fileCreateFile",
};

export const fileGetFile: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$200.Content.Application_Octet_Stream,
      200,
      "application/octet-stream"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$200.Content.Base64,
      200,
      "base64"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files/{id}",
  method: "GET",
  operationId: "fileGetFile",
};

export const fileGetFileMeta: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Files_Id_Meta.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/files/{id}/meta",
  method: "GET",
  operationId: "fileGetFileMeta",
};

export const fileGetFileTokenRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Token_Rules_Token.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/file-token-rules/{token}",
  method: "GET",
  operationId: "fileGetFileTokenRules",
};

export const ingressServiceCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/",
  method: "POST",
  operationId: "ingressServiceCreate",
};

export const ingressServiceDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "DELETE",
  operationId: "ingressServiceDelete",
};

export const ingressServiceGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}",
  method: "GET",
  operationId: "ingressServiceGetSpecific",
};

export const ingressServiceListAccessible: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses",
  method: "GET",
  operationId: "ingressServiceListAccessible",
};

export const ingressServicePaths: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Paths.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/paths",
  method: "PUT",
  operationId: "ingressServicePaths",
};

export const ingressServiceTls: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ingresses_IngressId_Tls.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ingresses/{ingressId}/tls",
  method: "PUT",
  operationId: "ingressServiceTls",
};

export const invoiceDetailOfInvoice: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices_InvoiceId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoiceDetailOfInvoice",
};

export const deprecatedInvoiceInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "GET",
  operationId: "deprecatedInvoiceInvoiceSettings",
};

export const deprecatedInvoiceUpdateInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoicesettings.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoicesettings",
  method: "PUT",
  operationId: "deprecatedInvoiceUpdateInvoiceSettings",
};

export const invoiceListCustomerInvoices: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoices.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoices",
  method: "GET",
  operationId: "invoiceListCustomerInvoices",
};

export const mailServiceDeliveryboxCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "POST",
  operationId: "mailServiceDeliveryboxCreate",
};

export const mailServiceDeliveryboxList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Deliveryboxes.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/deliveryboxes",
  method: "GET",
  operationId: "mailServiceDeliveryboxList",
};

export const mailServiceDeliveryboxDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "DELETE",
  operationId: "mailServiceDeliveryboxDelete",
};

export const mailServiceDeliveryboxGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Deliveryboxes_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}",
  method: "GET",
  operationId: "mailServiceDeliveryboxGetSpecific",
};

export const mailServiceDeliveryboxUpdateDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Description.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}/description",
  method: "PUT",
  operationId: "mailServiceDeliveryboxUpdateDescription",
};

export const mailServiceDeliveryboxUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Deliveryboxes_Id_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/deliveryboxes/{id}/password",
  method: "PUT",
  operationId: "mailServiceDeliveryboxUpdatePassword",
};

export const mailServiceMailaddressCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "POST",
  operationId: "mailServiceMailaddressCreate",
};

export const mailServiceMailaddressList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailaddresses.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailaddresses",
  method: "GET",
  operationId: "mailServiceMailaddressList",
};

export const mailServiceMailaddressDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}",
  method: "DELETE",
  operationId: "mailServiceMailaddressDelete",
};

export const mailServiceMailaddressGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mailaddresses_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}",
  method: "GET",
  operationId: "mailServiceMailaddressGetSpecific",
};

export const mailServiceMailaddressUpdateAddress: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Address.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/address",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateAddress",
};

export const mailServiceMailaddressUpdateAutoresponder: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_AutoResponder.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/autoResponder",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateAutoresponder",
};

export const mailServiceMailaddressUpdateCatchall: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mailaddresses_Id_CatchAll.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/catchAll",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateCatchall",
};

export const mailServiceMailaddressUpdateForwardaddresses: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Forwardaddresses.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/forwardaddresses",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateForwardaddresses",
};

export const mailServiceMailaddressUpdatePassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Password.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/password",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdatePassword",
};

export const mailServiceMailaddressUpdateQuota: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Quota.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/quota",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateQuota",
};

export const mailServiceMailaddressUpdateSpamprotection: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mailaddresses_Id_Spamprotection.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/mailaddresses/{id}/spamprotection",
  method: "PUT",
  operationId: "mailServiceMailaddressUpdateSpamprotection",
};

export const mailServiceProjectsettingGetSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings",
  method: "GET",
  operationId: "mailServiceProjectsettingGetSpecific",
};

export const mailServiceProjectsettingUpdateBlacklist: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Blacklist.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings/blacklist",
  method: "PUT",
  operationId: "mailServiceProjectsettingUpdateBlacklist",
};

export const mailServiceProjectsettingUpdateWhitelist: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mailsettings_Whitelist.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 403, null>
  | Response<null, 404, null>
  | Response<null, 500, null>
  | Response<null, 503, null>
> = {
  path: "/v2/projects/{projectId}/mailsettings/whitelist",
  method: "PUT",
  operationId: "mailServiceProjectsettingUpdateWhitelist",
};

export const deprecatedCustomerAcceptCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/accept",
  method: "POST",
  operationId: "deprecatedCustomerAcceptCustomerInvite",
};

export const deprecatedCustomerAcceptCustomerInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/accept/",
  method: "POST",
  operationId: "deprecatedCustomerAcceptCustomerInviteWithToken",
};

export const deprecatedProjectAcceptProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/accept",
  method: "POST",
  operationId: "deprecatedProjectAcceptProjectInvite",
};

export const deprecatedProjectAcceptProjectInviteWithToken: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/accept/",
  method: "POST",
  operationId: "deprecatedProjectAcceptProjectInviteWithToken",
};

export const deprecatedCustomerChangeCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "PUT",
  operationId: "deprecatedCustomerChangeCustomerMembership",
};

export const deprecatedCustomerDeleteCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}",
  method: "DELETE",
  operationId: "deprecatedCustomerDeleteCustomerMembership",
};

export const deprecatedProjectChangeProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "PUT",
  operationId: "deprecatedProjectChangeProjectMembership",
};

export const deprecatedProjectDeleteProjectMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}",
  method: "DELETE",
  operationId: "deprecatedProjectDeleteProjectMembership",
};

export const deprecatedCustomerCreateCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer",
  method: "POST",
  operationId: "deprecatedCustomerCreateCustomerInvite",
};

export const deprecatedProjectCreateProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project",
  method: "POST",
  operationId: "deprecatedProjectCreateProjectInvite",
};

export const deprecatedCustomerDeclineCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Decline.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/decline",
  method: "DELETE",
  operationId: "deprecatedCustomerDeclineCustomerInvite",
};

export const deprecatedProjectDeclineProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Decline.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/decline",
  method: "DELETE",
  operationId: "deprecatedProjectDeclineProjectInvite",
};

export const deprecatedCustomerGetCustomerInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/specific/{inviteId}",
  method: "GET",
  operationId: "deprecatedCustomerGetCustomerInviteSpecific",
};

export const deprecatedCustomerGetCustomerMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId_Specific_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers/{customerId}/specific/{membershipId}",
  method: "GET",
  operationId: "deprecatedCustomerGetCustomerMembershipSpecific",
};

export const projectGetOwnMembershipForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/memberships/me",
  method: "GET",
  operationId: "projectGetOwnMembershipForProject",
};

export const deprecatedProjectGetProjectInviteSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Specific_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/specific/{inviteId}",
  method: "GET",
  operationId: "deprecatedProjectGetProjectInviteSpecific",
};

export const deprecatedProjectGetProjectMembershipSpecific: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId_Specific_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects/{projectId}/specific/{membershipId}",
  method: "GET",
  operationId: "deprecatedProjectGetProjectMembershipSpecific",
};

export const deprecatedCustomerLeaveCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customer_MembershipId_Leave.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customer/{membershipId}/leave",
  method: "DELETE",
  operationId: "deprecatedCustomerLeaveCustomer",
};

export const deprecatedProjectLeaveProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Project_MembershipId_Leave.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/project/{membershipId}/leave",
  method: "DELETE",
  operationId: "deprecatedProjectLeaveProject",
};

export const deprecatedCustomerListCustomerMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers",
  method: "GET",
  operationId: "deprecatedCustomerListCustomerMembershipsForUser",
};

export const deprecatedCustomerListInvitesForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/{customerId}",
  method: "GET",
  operationId: "deprecatedCustomerListInvitesForCustomer",
};

export const deprecatedProjectListInvitesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_ProjectId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/{projectId}",
  method: "GET",
  operationId: "deprecatedProjectListInvitesForProject",
};

export const deprecatedCustomerListMembershipsForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Customers_CustomerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/customers/{customerId}",
  method: "GET",
  operationId: "deprecatedCustomerListMembershipsForCustomer",
};

export const deprecatedProjectListMembershipsForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects_ProjectId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects/{projectId}",
  method: "GET",
  operationId: "deprecatedProjectListMembershipsForProject",
};

export const deprecatedCustomerListOwnCustomerInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customers_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customers/me",
  method: "GET",
  operationId: "deprecatedCustomerListOwnCustomerInvites",
};

export const deprecatedProjectListOwnProjectInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Projects_Me.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/projects/me",
  method: "GET",
  operationId: "deprecatedProjectListOwnProjectInvites",
};

export const deprecatedProjectListProjectMembershipsForUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_Projects.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/projects",
  method: "GET",
  operationId: "deprecatedProjectListProjectMembershipsForUser",
};

export const deprecatedCustomerResendCustomerInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}/resend",
  method: "POST",
  operationId: "deprecatedCustomerResendCustomerInviteMail",
};

export const deprecatedProjectResendProjectInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}/resend",
  method: "POST",
  operationId: "deprecatedProjectResendProjectInviteMail",
};

export const deprecatedCustomerRevokeCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Customer_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/customer/{inviteId}",
  method: "DELETE",
  operationId: "deprecatedCustomerRevokeCustomerInvite",
};

export const deprecatedProjectRevokeProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_Project_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/project/{inviteId}",
  method: "DELETE",
  operationId: "deprecatedProjectRevokeProjectInvite",
};

export const notificationsCountUnreadNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Unread_Counts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Unread_Counts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Unread_Counts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications/unread-counts",
  method: "GET",
  operationId: "notificationsCountUnreadNotifications",
};

export const notificationsListNotifications: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications",
  method: "GET",
  operationId: "notificationsListNotifications",
};

export const notificationsReadAllNotifications: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Status.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications/status",
  method: "PUT",
  operationId: "notificationsReadAllNotifications",
};

export const notificationsReadNotification: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Notifications_MessageId_Status.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/notifications/{messageId}/status",
  method: "PUT",
  operationId: "notificationsReadNotification",
};

export const newsletterGetInfo: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "GET",
  operationId: "newsletterGetInfo",
};

export const newsletterUnsubscribeUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions_Email.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions/{email}",
  method: "DELETE",
  operationId: "newsletterUnsubscribeUser",
};

export const newsletterSubscribeUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Newsletter_Subscriptions.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/newsletter/subscriptions",
  method: "POST",
  operationId: "newsletterSubscribeUser",
};

export const orderChangeProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/change-projecthosting",
  method: "POST",
  operationId: "orderChangeProjecthosting",
};

export const orderChangeServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Change_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/change-server",
  method: "POST",
  operationId: "orderChangeServer",
};

export const orderGetOrder: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_OrderId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/{orderId}",
  method: "GET",
  operationId: "orderGetOrder",
};

export const orderListCustomerOrders: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Orders.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/orders",
  method: "GET",
  operationId: "orderListCustomerOrders",
};

export const orderOrderDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Domain.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-domain",
  method: "POST",
  operationId: "orderOrderDomain",
};

export const orderOrderProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-projecthosting",
  method: "POST",
  operationId: "orderOrderProjecthosting",
};

export const orderOrderServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Order_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/order-server",
  method: "POST",
  operationId: "orderOrderServer",
};

export const orderPreviewChangeProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-change-projecthosting",
  method: "POST",
  operationId: "orderPreviewChangeProjecthosting",
};

export const orderPreviewChangeServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Change_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-change-server",
  method: "POST",
  operationId: "orderPreviewChangeServer",
};

export const orderPreviewOrderDomain: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Domain.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-domain",
  method: "POST",
  operationId: "orderPreviewOrderDomain",
};

export const orderPreviewOrderProjecthosting: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Projecthosting.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-projecthosting",
  method: "POST",
  operationId: "orderPreviewOrderProjecthosting",
};

export const orderPreviewOrderServer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Orders_Actions_Preview_Order_Server.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/orders/actions/preview-order-server",
  method: "POST",
  operationId: "orderPreviewOrderServer",
};

export const passwordValidationServiceGetPasswordPolicy: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Password_Policies_Path.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/password/policies/{path}",
  method: "GET",
  operationId: "passwordValidationServiceGetPasswordPolicy",
};

export const projectFileSystemGetDirectories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Directories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/directories",
  method: "GET",
  operationId: "projectFileSystemGetDirectories",
};

export const projectFileSystemGetFileContent: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$200.Content.Text_Plain,
      200,
      "text/plain"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files_Raw.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files/raw",
  method: "GET",
  operationId: "projectFileSystemGetFileContent",
};

export const projectFileSystemListFiles: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Files.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/files",
  method: "GET",
  operationId: "projectFileSystemListFiles",
};

export const projectFileSystemGetJwt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Jwt.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/jwt",
  method: "GET",
  operationId: "projectFileSystemGetJwt",
};

export const projectFileSystemGetDiskUsage: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.$503.Content.Application_Json,
      503,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Filesystem_Usages_Disk.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/filesystem/usages/disk",
  method: "GET",
  operationId: "projectFileSystemGetDiskUsage",
};

export const projectDeleteProjectAvatar: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "DELETE",
  operationId: "projectDeleteProjectAvatar",
};

export const projectRequestProjectAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/avatar",
  method: "POST",
  operationId: "projectRequestProjectAvatarUpload",
};

export const projectDeleteProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}",
  method: "DELETE",
  operationId: "projectDeleteProject",
};

export const projectGetProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{id}",
  method: "GET",
  operationId: "projectGetProject",
};

export const projectUpdateProjectDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_Id_Description.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{id}/description",
  method: "PATCH",
  operationId: "projectUpdateProjectDescription",
};

export const projectListProjects: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects",
  method: "GET",
  operationId: "projectListProjects",
};

export const redirectusCreateRelocation: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Relocation.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Relocation.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Relocation.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Relocation.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/relocation",
  method: "POST",
  operationId: "redirectusCreateRelocation",
};

export const signupApiApiTokenCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api",
  method: "POST",
  operationId: "signupApiApiTokenCreate",
};

export const signupApiApiTokenList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api",
  method: "GET",
  operationId: "signupApiApiTokenList",
};

export const signupApiApiTokenDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "DELETE",
  operationId: "signupApiApiTokenDelete",
};

export const signupApiApiTokenEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "PUT",
  operationId: "signupApiApiTokenEdit",
};

export const signupApiApiTokenGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Api_ApiTokenId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/api/{apiTokenId}",
  method: "GET",
  operationId: "signupApiApiTokenGet",
};

export const signupApiAuthenticate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication",
  method: "POST",
  operationId: "signupApiAuthenticate",
};

export const signupApiAuthenticateLegacy: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Legacy.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication/legacy",
  method: "POST",
  operationId: "signupApiAuthenticateLegacy",
};

export const signupApiAuthenticateMfa: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$408.Content.Application_Json,
      408,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Authentication_Mfa.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/authentication/mfa",
  method: "POST",
  operationId: "signupApiAuthenticateMfa",
};

export const signupApiAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/avatar",
  method: "DELETE",
  operationId: "signupApiAvatarRemove",
};

export const signupApiAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Avatar.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/avatar",
  method: "POST",
  operationId: "signupApiAvatarRequestUpload",
};

export const signupApiEmailChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email",
  method: "PUT",
  operationId: "signupApiEmailChange",
};

export const signupApiEmailGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email",
  method: "GET",
  operationId: "signupApiEmailGet",
};

export const signupApiEmailResend: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Resend.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email/resend",
  method: "POST",
  operationId: "signupApiEmailResend",
};

export const signupApiEmailVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Email_Verify.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/email/verify",
  method: "POST",
  operationId: "signupApiEmailVerify",
};

export const signupApiLogout: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Logout.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Logout.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Logout.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/logout",
  method: "PUT",
  operationId: "signupApiLogout",
};

export const signupApiMfaConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Confirm.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/confirm",
  method: "POST",
  operationId: "signupApiMfaConfirm",
};

export const signupApiMfaDisable: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "DELETE",
  operationId: "signupApiMfaDisable",
};

export const signupApiMfaGetStatus: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "GET",
  operationId: "signupApiMfaGetStatus",
};

export const signupApiMfaInit: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa",
  method: "POST",
  operationId: "signupApiMfaInit",
};

export const signupApiPasswordChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password",
  method: "PUT",
  operationId: "signupApiPasswordChange",
};

export const signupApiPasswordGetUpdatedAt: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password",
  method: "GET",
  operationId: "signupApiPasswordGetUpdatedAt",
};

export const signupApiPasswordResetConfirm: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset_Confirm.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password/reset/confirm",
  method: "POST",
  operationId: "signupApiPasswordResetConfirm",
};

export const signupApiPasswordResetInit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Password_Reset.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/password/reset",
  method: "POST",
  operationId: "signupApiPasswordResetInit",
};

export const signupApiPhoneNumberDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "DELETE",
  operationId: "signupApiPhoneNumberDelete",
};

export const signupApiPhoneNumberGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "GET",
  operationId: "signupApiPhoneNumberGet",
};

export const signupApiPhoneNumberInitProcess: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone",
  method: "POST",
  operationId: "signupApiPhoneNumberInitProcess",
};

export const signupApiPhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Phone_Verify.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/phone/verify",
  method: "POST",
  operationId: "signupApiPhoneNumberVerify",
};

export const signupApiProfileChange: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "PUT",
  operationId: "signupApiProfileChange",
};

export const signupApiProfileDelete: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "DELETE",
  operationId: "signupApiProfileDelete",
};

export const signupApiProfileGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Profile.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Profile.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/profile",
  method: "GET",
  operationId: "signupApiProfileGet",
};

export const signupApiRecoverycodesReset: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Mfa_Reset_Recoverycodes.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/mfa/reset-recoverycodes",
  method: "PUT",
  operationId: "signupApiRecoverycodesReset",
};

export const signupApiRegister: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$408.Content.Application_Json,
      408,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/registration",
  method: "POST",
  operationId: "signupApiRegister",
};

export const signupApiRegistrationVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Registration_Verification.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/registration/verification",
  method: "POST",
  operationId: "signupApiRegistrationVerify",
};

export const signupApiSessionGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "GET",
  operationId: "signupApiSessionGet",
};

export const signupApiSessionTerminate: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions_TokenId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions/{tokenId}",
  method: "DELETE",
  operationId: "signupApiSessionTerminate",
};

export const signupApiSessionsList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions",
  method: "GET",
  operationId: "signupApiSessionsList",
};

export const signupApiSessionsTerminateAll: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Sessions.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/sessions",
  method: "DELETE",
  operationId: "signupApiSessionsTerminateAll",
};

export const signupApiSshCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Parameters.Header>
  >,
  | Response<null, 201, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh",
  method: "POST",
  operationId: "signupApiSshCreate",
};

export const signupApiSshList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh",
  method: "GET",
  operationId: "signupApiSshList",
};

export const signupApiSshDelete: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Delete.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "DELETE",
  operationId: "signupApiSshDelete",
};

export const signupApiSshEdit: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Put.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "PUT",
  operationId: "signupApiSshEdit",
};

export const signupApiSshGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Ssh_SshKeyId.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/ssh/{sshKeyId}",
  method: "GET",
  operationId: "signupApiSshGet",
};

export const signupApiSupportCodeRequest: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Supportcode.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/supportcode",
  method: "GET",
  operationId: "signupApiSupportCodeRequest",
};

export const signupApiTokenCheck: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<null, 429, null>
  | Response<
      MittwaldApiV2.Paths.V2_Signup_Token_Check.Post.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
> = {
  path: "/v2/signup/token/check",
  method: "POST",
  operationId: "signupApiTokenCheck",
};

export const appGetSystemsoftware: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares_SystemSoftwareId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares/{systemSoftwareId}",
  method: "GET",
  operationId: "appGetSystemsoftware",
};

export const appListSystemsoftwares: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftwares.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftwares",
  method: "GET",
  operationId: "appListSystemsoftwares",
};

export const appGetSystemsoftwareversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "appGetSystemsoftwareversion",
};

export const appListSystemsoftwareversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Systemsoftware_SystemSoftwareId_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/systemsoftware/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "appListSystemsoftwareversions",
};

export const userServiceAvatarRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "DELETE",
  operationId: "userServiceAvatarRemove",
};

export const userServiceAvatarRequestUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/avatar",
  method: "POST",
  operationId: "userServiceAvatarRequestUpload",
};

export const userServiceFeedbackCreate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$401.Content.Application_Json,
      401,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/feedback",
  method: "POST",
  operationId: "userServiceFeedbackCreate",
};

export const userServiceFeedbackList: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Feedback.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Feedback.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/feedback",
  method: "GET",
  operationId: "userServiceFeedbackList",
};

export const userServiceIssueNew: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Issues.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Issues.Post.Parameters.Header>
  >,
  | Response<null, 201, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_Issues.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/issues",
  method: "POST",
  operationId: "userServiceIssueNew",
};

export const userServicePersonalInformationUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}",
  method: "PUT",
  operationId: "userServicePersonalInformationUpdate",
};

export const userServiceUserGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}",
  method: "GET",
  operationId: "userServiceUserGet",
};

export const userServicePersonalizedSettingsGet: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/settings",
  method: "GET",
  operationId: "userServicePersonalizedSettingsGet",
};

export const userServicePersonalizedSettingsUpdate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Put.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_Settings.Put.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_Settings.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/settings",
  method: "PUT",
  operationId: "userServicePersonalizedSettingsUpdate",
};

export const userServicePhoneNumberAdd: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone",
  method: "POST",
  operationId: "userServicePhoneNumberAdd",
};

export const userServicePhoneNumberRemove: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone",
  method: "DELETE",
  operationId: "userServicePhoneNumberRemove",
};

export const userServicePhoneNumberVerify: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User_UserId_Phone_Verify.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user/{userId}/phone/verify",
  method: "POST",
  operationId: "userServicePhoneNumberVerify",
};

export const userServiceUserGetOwn: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_User.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_User.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_User.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/user",
  method: "GET",
  operationId: "userServiceUserGetOwn",
};

export const varnishServiceListValidators: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Get.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Get.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "GET",
  operationId: "varnishServiceListValidators",
};

export const varnishServiceValidate: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Parameters.Header>
  >,
  Response<
    MittwaldApiV2.Paths.V2_Varnish_Config_Validate.Post.Responses.$200.Content.Application_Json,
    200,
    "application/json"
  >
> = {
  path: "/v2/varnish/config/validate",
  method: "POST",
  operationId: "varnishServiceValidate",
};

export const fileGetFileTypeRules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.$500.Content.Application_Json,
      500,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_File_Type_Rules_Name.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/file-type-rules/{name}",
  method: "GET",
  operationId: "fileGetFileTypeRules",
};

export const orderListProjectOrders: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Orders.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Orders.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Orders.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Orders.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/orders",
  method: "GET",
  operationId: "orderListProjectOrders",
};

export const cronjobAbortExecution: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/executions/{executionId}/actions/abort",
  method: "POST",
  operationId: "cronjobAbortExecution",
};

export const backupCreateProjectBackup: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "POST",
  operationId: "backupCreateProjectBackup",
};

export const backupListProjectBackups: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backups.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backups",
  method: "GET",
  operationId: "backupListProjectBackups",
};

export const backupCreateProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "POST",
  operationId: "backupCreateProjectBackupSchedule",
};

export const backupListProjectBackupSchedules: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Backup_Schedules.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/backup-schedules",
  method: "GET",
  operationId: "backupListProjectBackupSchedules",
};

export const backupDeleteProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "DELETE",
  operationId: "backupDeleteProjectBackup",
};

export const backupGetProjectBackup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}",
  method: "GET",
  operationId: "backupGetProjectBackup",
};

export const backupCreateProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "POST",
  operationId: "backupCreateProjectBackupExport",
};

export const backupDeleteProjectBackupExport: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Export.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/export",
  method: "DELETE",
  operationId: "backupDeleteProjectBackupExport",
};

export const backupDeleteProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Delete.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "DELETE",
  operationId: "backupDeleteProjectBackupSchedule",
};

export const backupGetProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "GET",
  operationId: "backupGetProjectBackupSchedule",
};

export const backupUpdateProjectBackupSchedule: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backup_Schedules_ProjectBackupScheduleId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backup-schedules/{projectBackupScheduleId}",
  method: "PATCH",
  operationId: "backupUpdateProjectBackupSchedule",
};

export const backupUpdateProjectBackupDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Backups_ProjectBackupId_Description.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-backups/{projectBackupId}/description",
  method: "PATCH",
  operationId: "backupUpdateProjectBackupDescription",
};

export const cronjobUpdateCronjobAppId: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Cronjobs_CronjobId_App_Id.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/cronjobs/{cronjobId}/app-id",
  method: "PATCH",
  operationId: "cronjobUpdateCronjobAppId",
};

export const deprecatedContractCancelContractItemTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/terminations",
  method: "DELETE",
  operationId: "deprecatedContractCancelContractItemTermination",
};

export const deprecatedContractTerminateContractItem: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Terminations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/terminations",
  method: "POST",
  operationId: "deprecatedContractTerminateContractItem",
};

export const deprecatedContractCancelContractTariffChange: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/tariff-changes",
  method: "DELETE",
  operationId: "deprecatedContractCancelContractTariffChange",
};

export const deprecatedContractCancelContractTermination: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/terminations",
  method: "DELETE",
  operationId: "deprecatedContractCancelContractTermination",
};

export const deprecatedContractTerminateContract: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Terminations.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/terminations",
  method: "POST",
  operationId: "deprecatedContractTerminateContract",
};

export const contractGetBaseItemOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Items.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/base-items",
  method: "GET",
  operationId: "contractGetBaseItemOfContract",
};

export const contractGetNextTerminationDateForItem: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/items/{contractItemId}/next-termination-dates",
  method: "GET",
  operationId: "contractGetNextTerminationDateForItem",
};

export const customerCreateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories.Post.Parameters.RequestBody>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-categories",
  method: "POST",
  operationId: "customerCreateCategory",
};

export const customerListOfCustomerCategories: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-categories",
  method: "GET",
  operationId: "customerListOfCustomerCategories",
};

export const customerDeleteCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Delete.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Delete.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "DELETE",
  operationId: "customerDeleteCategory",
};

export const customerGetCustomerCategory: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "GET",
  operationId: "customerGetCustomerCategory",
};

export const customerUpdateCategory: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Categories_CategoryId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-categories/{categoryId}",
  method: "PUT",
  operationId: "customerUpdateCategory",
};

export const deprecatedContractGetBaseItemOfContract: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Contracts_ContractId_Base_Item.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/contracts/{contractId}/base-item",
  method: "GET",
  operationId: "deprecatedContractGetBaseItemOfContract",
};

export const invoiceGetDetailOfInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "GET",
  operationId: "invoiceGetDetailOfInvoiceSettings",
};

export const invoiceUpdateInvoiceSettings: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invoice_Settings.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invoice-settings",
  method: "PUT",
  operationId: "invoiceUpdateInvoiceSettings",
};

export const projectCreateProject: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Projects.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/projects",
  method: "POST",
  operationId: "projectCreateProject",
};

export const projectDeleteServerAvatar: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "DELETE",
  operationId: "projectDeleteServerAvatar",
};

export const projectRequestServerAvatarUpload: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Post.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Avatar.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/avatar",
  method: "POST",
  operationId: "projectRequestServerAvatarUpload",
};

export const projectGetServer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}",
  method: "GET",
  operationId: "projectGetServer",
};

export const projectListServers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Servers.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Servers.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers",
  method: "GET",
  operationId: "projectListServers",
};

export const projectUpdateServerDescription: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Description.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Description.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Description.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Description.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/description",
  method: "PATCH",
  operationId: "projectUpdateServerDescription",
};

export const deprecatedCustomerUpdateCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Memberships_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Memberships_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Memberships_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Memberships_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer/{customerId}/memberships/{membershipId}",
  method: "PUT",
  operationId: "deprecatedCustomerUpdateCustomerMembership",
};

export const deprecatedMembershipAcceptInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "deprecatedMembershipAcceptInvite",
};

export const deprecatedMembershipDeclineInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Decline.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Decline.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Decline.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Decline.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "deprecatedMembershipDeclineInvite",
};

export const deprecatedMembershipDeleteMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/{membershipId}",
  method: "DELETE",
  operationId: "deprecatedMembershipDeleteMembership",
};

export const deprecatedMembershipGetMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/{membershipId}",
  method: "GET",
  operationId: "deprecatedMembershipGetMembership",
};

export const deprecatedMembershipGetInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteIdentifier.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteIdentifier.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteIdentifier.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteIdentifier.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteIdentifier.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/{inviteIdentifier}",
  method: "GET",
  operationId: "deprecatedMembershipGetInvite",
};

export const deprecatedMembershipLeaveMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId_Actions_Leave.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId_Actions_Leave.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships_MembershipId_Actions_Leave.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Memberships_MembershipId_Actions_Leave.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships/{membershipId}/actions/leave",
  method: "POST",
  operationId: "deprecatedMembershipLeaveMembership",
};

export const deprecatedMembershipListInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Invites.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites",
  method: "GET",
  operationId: "deprecatedMembershipListInvites",
};

export const deprecatedMembershipListMemberships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Memberships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Memberships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Memberships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/memberships",
  method: "GET",
  operationId: "deprecatedMembershipListMemberships",
};

export const deprecatedMembershipResendInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Resend.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Resend.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId_Actions_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "deprecatedMembershipResendInviteMail",
};

export const deprecatedMembershipRevokeInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Invites_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Invites_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/invites/{inviteId}",
  method: "DELETE",
  operationId: "deprecatedMembershipRevokeInvite",
};

export const deprecatedProjectUpdateProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Memberships_MembershipId.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Memberships_MembershipId.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Memberships_MembershipId.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Memberships_MembershipId.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project/{projectId}/memberships/{membershipId}",
  method: "PUT",
  operationId: "deprecatedProjectUpdateProjectMembership",
};

export const appGetAppversion: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId_Versions_AppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId_Versions_AppVersionId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId_Versions_AppVersionId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId_Versions_AppVersionId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId_Versions_AppVersionId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "appGetAppversion",
};

export const appListAppversions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId_Versions.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Apps_AppId_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Apps_AppId_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/apps/{appId}/versions",
  method: "GET",
  operationId: "appListAppversions",
};

export const contractGetDetailOfContractByDomain: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Domains_DomainId_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/domains/{domainId}/contracts",
  method: "GET",
  operationId: "contractGetDetailOfContractByDomain",
};

export const contractGetDetailOfContractByPlacementGroup: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Servers_ServerId_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/servers/{serverId}/contracts",
  method: "GET",
  operationId: "contractGetDetailOfContractByPlacementGroup",
};

export const contractGetDetailOfContractByProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Contracts.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/contracts",
  method: "GET",
  operationId: "contractGetDetailOfContractByProject",
};

export const customerAcceptCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "customerAcceptCustomerInvite",
};

export const customerCreateCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Invites.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer/{customerId}/invites",
  method: "POST",
  operationId: "customerCreateCustomerInvite",
};

export const customerDeclineCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Decline.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Decline.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Decline.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Decline.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "customerDeclineCustomerInvite",
};

export const customerDeleteCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}",
  method: "DELETE",
  operationId: "customerDeleteCustomerInvite",
};

export const customerGetCustomerInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}",
  method: "GET",
  operationId: "customerGetCustomerInvite",
};

export const customerDeleteCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "DELETE",
  operationId: "customerDeleteCustomerMembership",
};

export const customerGetCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "GET",
  operationId: "customerGetCustomerMembership",
};

export const customerUpdateCustomerMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships_MembershipId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-memberships/{membershipId}",
  method: "PATCH",
  operationId: "customerUpdateCustomerMembership",
};

export const customerGetCustomerTokenInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Token_Invite.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Token_Invite.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Token_Invite.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Token_Invite.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-token-invite",
  method: "GET",
  operationId: "customerGetCustomerTokenInvite",
};

export const customerLeaveCustomer: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Actions_Leave.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Actions_Leave.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_CustomerId_Actions_Leave.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_CustomerId_Actions_Leave.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer/{customerId}/actions/leave",
  method: "POST",
  operationId: "customerLeaveCustomer",
};

export const customerListCustomerInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites",
  method: "GET",
  operationId: "customerListCustomerInvites",
};

export const customerListCustomerMemberships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Memberships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Memberships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-memberships",
  method: "GET",
  operationId: "customerListCustomerMemberships",
};

export const customerListInvitesForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invites.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Invites.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invites.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invites.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Invites.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/invites",
  method: "GET",
  operationId: "customerListInvitesForCustomer",
};

export const customerListMembershipsForCustomer: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Memberships.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customers_CustomerId_Memberships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Memberships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Memberships.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customers_CustomerId_Memberships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customers/{customerId}/memberships",
  method: "GET",
  operationId: "customerListMembershipsForCustomer",
};

export const customerResendCustomerInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Resend.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Resend.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Customer_Invites_InviteId_Actions_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/customer-invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "customerResendCustomerInviteMail",
};

export const databaseCreateMysqlDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Responses.$202.Content.Application_Json,
      202,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "POST",
  operationId: "databaseCreateMysqlDatabase",
};

export const databaseListMysqlDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Mysql_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/mysql-databases",
  method: "GET",
  operationId: "databaseListMysqlDatabases",
};

export const databaseCreateRedisDatabase: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "POST",
  operationId: "databaseCreateRedisDatabase",
};

export const databaseListRedisDatabases: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Redis_Databases.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/redis-databases",
  method: "GET",
  operationId: "databaseListRedisDatabases",
};

export const databaseDeleteMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Delete.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Delete.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Delete.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "DELETE",
  operationId: "databaseDeleteMysqlUser",
};

export const databaseGetMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "GET",
  operationId: "databaseGetMysqlUser",
};

export const databaseUpdateMysqlUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id.Put.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}",
  method: "PUT",
  operationId: "databaseUpdateMysqlUser",
};

export const databaseDisableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Disable.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Disable.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Disable.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Disable.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Disable.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/actions/disable",
  method: "POST",
  operationId: "databaseDisableMysqlUser",
};

export const databaseEnableMysqlUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Enable.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Enable.Post.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Enable.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Enable.Post.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Actions_Enable.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/actions/enable",
  method: "POST",
  operationId: "databaseEnableMysqlUser",
};

export const databaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Php_My_Admin_Url.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/php-my-admin-url",
  method: "GET",
  operationId: "databaseGetMysqlUserPhpMyAdminUrl",
};

export const databaseListMysqlVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-versions",
  method: "GET",
  operationId: "databaseListMysqlVersions",
};

export const databaseListRedisVersions: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Redis_Versions.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Versions.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Versions.Get.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Versions.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Redis_Versions.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/redis-versions",
  method: "GET",
  operationId: "databaseListRedisVersions",
};

export const databaseUpdateMysqlUserPassword: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Parameters.Header>
  >,
  | Response<null, 200, null>
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Mysql_Users_Id_Password.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/mysql-users/{id}/password",
  method: "PATCH",
  operationId: "databaseUpdateMysqlUserPassword",
};

export const ingressServiceListForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ingresses.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ingresses.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ingresses.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ingresses.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ingresses.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ingresses",
  method: "GET",
  operationId: "ingressServiceListForProject",
};

export const projectAcceptProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Responses.$412.Content.Application_Json,
      412,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Accept.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/accept",
  method: "POST",
  operationId: "projectAcceptProjectInvite",
};

export const projectCreateProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Responses.$409.Content.Application_Json,
      409,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Invites.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project/{projectId}/invites",
  method: "POST",
  operationId: "projectCreateProjectInvite",
};

export const projectDeclineProjectInvite: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Decline.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Decline.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Decline.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Decline.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/decline",
  method: "POST",
  operationId: "projectDeclineProjectInvite",
};

export const projectDeleteProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}",
  method: "DELETE",
  operationId: "projectDeleteProjectInvite",
};

export const projectGetProjectInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}",
  method: "GET",
  operationId: "projectGetProjectInvite",
};

export const projectDeleteProjectMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "DELETE",
  operationId: "projectDeleteProjectMembership",
};

export const projectGetProjectMembership: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "GET",
  operationId: "projectGetProjectMembership",
};

export const projectUpdateProjectMembership: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships_MembershipId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-memberships/{membershipId}",
  method: "PATCH",
  operationId: "projectUpdateProjectMembership",
};

export const projectGetProjectTokenInvite: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Token_Invite.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Token_Invite.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Token_Invite.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Token_Invite.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-token-invite",
  method: "GET",
  operationId: "projectGetProjectTokenInvite",
};

export const projectLeaveProject: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Leave.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Leave.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Leave.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Leave.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/leave",
  method: "POST",
  operationId: "projectLeaveProject",
};

export const projectListInvitesForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Invites.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Invites.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Invites.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Invites.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Invites.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/invites",
  method: "GET",
  operationId: "projectListInvitesForProject",
};

export const projectListMembershipsForProject: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Memberships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/memberships",
  method: "GET",
  operationId: "projectListMembershipsForProject",
};

export const projectListProjectInvites: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites",
  method: "GET",
  operationId: "projectListProjectInvites",
};

export const projectListProjectMemberships: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Memberships.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Memberships.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-memberships",
  method: "GET",
  operationId: "projectListProjectMemberships",
};

export const projectResendProjectInviteMail: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Resend.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Resend.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Resend.Post.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Resend.Post.Responses.$403.Content.Application_Json,
      403,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_Invites_InviteId_Actions_Resend.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project-invites/{inviteId}/actions/resend",
  method: "POST",
  operationId: "projectResendProjectInviteMail",
};

export const sftpUserCreateSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Sftp_Users.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/sftp-users",
  method: "POST",
  operationId: "sftpUserCreateSftpUser",
};

export const sftpUserDeleteSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "DELETE",
  operationId: "sftpUserDeleteSftpUser",
};

export const sftpUserGetSftpUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "GET",
  operationId: "sftpUserGetSftpUser",
};

export const sftpUserUpdateSftpUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sftp_Users_SftpUserId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sftp-users/{sftpUserId}",
  method: "PATCH",
  operationId: "sftpUserUpdateSftpUser",
};

export const sftpUserListSftpUsers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Sftp_Users.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Project_ProjectId_Sftp_Users.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Sftp_Users.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Sftp_Users.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Project_ProjectId_Sftp_Users.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/project/{projectId}/sftp-users",
  method: "GET",
  operationId: "sftpUserListSftpUsers",
};

export const sshUserCreateSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Responses.$201.Content.Application_Json,
      201,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Post.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ssh-users",
  method: "POST",
  operationId: "sshUserCreateSshUser",
};

export const sshUserListSshUsers: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Projects_ProjectId_Ssh_Users.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/projects/{projectId}/ssh-users",
  method: "GET",
  operationId: "sshUserListSshUsers",
};

export const sshUserDeleteSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Delete.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Delete.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Delete.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ssh-users/{sshUserId}",
  method: "DELETE",
  operationId: "sshUserDeleteSshUser",
};

export const sshUserGetSshUser: OpenAPIOperation<
  Request<
    Simplify<null>,
    Simplify<MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Get.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Get.Parameters.Header>
  >,
  | Response<
      MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Get.Responses.$200.Content.Application_Json,
      200,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Get.Responses.$404.Content.Application_Json,
      404,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Ssh_Users_SshUserId.Get.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/ssh-users/{sshUserId}",
  method: "GET",
  operationId: "sshUserGetSshUser",
};

export const sshUserUpdateSshUser: OpenAPIOperation<
  Request<
    Simplify<MittwaldApiV2.Paths.V2_Sshusers_SshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldApiV2.Paths.V2_Sshusers_SshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldApiV2.Paths.V2_Sshusers_SshUserId.Patch.Parameters.Header>
  >,
  | Response<null, 204, null>
  | Response<
      MittwaldApiV2.Paths.V2_Sshusers_SshUserId.Patch.Responses.$400.Content.Application_Json,
      400,
      "application/json"
    >
  | Response<
      MittwaldApiV2.Paths.V2_Sshusers_SshUserId.Patch.Responses.Default.Content.Application_Json,
      0,
      "application/json"
    >
> = {
  path: "/v2/sshusers/{sshUserId}",
  method: "PATCH",
  operationId: "sshUserUpdateSshUser",
};
