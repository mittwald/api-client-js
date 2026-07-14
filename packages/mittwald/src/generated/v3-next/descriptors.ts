/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import { Simplify } from "@mittwald/api-client-commons";
import { RequestType } from "@mittwald/api-client-commons";
import { Response } from "@mittwald/api-client-commons";
import { OpenAPIOperation } from "@mittwald/api-client-commons";
import { MittwaldAPIV3Next } from "./types.js";

/** Accepts the model terms for a customer. */
export const aiHostingCustomerAcceptModelTerms: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModelsActionsAcceptTerms.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-models/actions/accept-terms",
  method: "POST",
  operationId: "ai-hosting-customer-accept-model-terms",
};

/** Get a list of already created keys. */
export const aiHostingCustomerGetKeys: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-keys",
  method: "GET",
  operationId: "ai-hosting-customer-get-keys",
};

/** Creates a new key. */
export const aiHostingCustomerCreateKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeys.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-keys",
  method: "POST",
  operationId: "ai-hosting-customer-create-key",
};

/** Get a key of a customer. */
export const aiHostingCustomerGetKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-keys/{keyId}",
  method: "GET",
  operationId: "ai-hosting-customer-get-key",
};

/** Update a key for a customer. */
export const aiHostingCustomerUpdateKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-keys/{keyId}",
  method: "PUT",
  operationId: "ai-hosting-customer-update-key",
};

/** Delete a key for a customer. */
export const aiHostingCustomerDeleteKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingKeysKeyId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-keys/{keyId}",
  method: "DELETE",
  operationId: "ai-hosting-customer-delete-key",
};

/** Get a list of currently active models. */
export const aiHostingCustomerGetDetailedModels: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingModels.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting-models",
  method: "GET",
  operationId: "ai-hosting-customer-get-detailed-models",
};

/** Get ai hosting plan and usages of a customer by planId. */
export const aiHostingCustomerGetPlan: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hostings/{planId}",
  method: "GET",
  operationId: "ai-hosting-customer-get-plan",
};

/** Renames an AI hosting plan. */
export const aiHostingCustomerUpdatePlan: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingsPlanId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hostings/{planId}",
  method: "PUT",
  operationId: "ai-hosting-customer-update-plan",
};

/** Get all ai hosting plans of a customer. */
export const aiHostingCustomerGetPlans: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hostings",
  method: "GET",
  operationId: "ai-hosting-customer-get-plans",
};

/** Get ai hosting plan and usages of a customer. Deprecated: use /ai-hostings/{planId} instead. */
export const aiHostingCustomerGetUsage: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHosting.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting",
  method: "GET",
  operationId: "ai-hosting-customer-get-usage",
};

/** Get a list of currently active models. */
export const aiHostingGetModels: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAiHostingModels.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ai-hosting-models",
  method: "GET",
  operationId: "ai-hosting-get-models",
};

/** Get a list of keys of a project. */
export const aiHostingProjectGetKeys: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys",
  method: "GET",
  operationId: "ai-hosting-project-get-keys",
};

/** Creates a new key for a project. */
export const aiHostingProjectCreateKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeys.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys",
  method: "POST",
  operationId: "ai-hosting-project-create-key",
};

/** Get a key of a project. */
export const aiHostingProjectGetKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys/{keyId}",
  method: "GET",
  operationId: "ai-hosting-project-get-key",
};

/** Update a key for a project. */
export const aiHostingProjectUpdateKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys/{keyId}",
  method: "PUT",
  operationId: "ai-hosting-project-update-key",
};

/** Delete a key for a project. */
export const aiHostingProjectDeleteKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys/{keyId}",
  method: "DELETE",
  operationId: "ai-hosting-project-delete-key",
};

/** Get a list of currently active models. */
export const aiHostingProjectGetDetailedModels: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingModels.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-models",
  method: "GET",
  operationId: "ai-hosting-project-get-detailed-models",
};

/** Get ai hosting plan and usages of a project. Same as the customer route, but less details. */
export const aiHostingProjectGetUsage: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHosting.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting",
  method: "GET",
  operationId: "ai-hosting-project-get-usage",
};

/** Links a container with a project licence. */
export const aiHostingProjectLinkContainer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAiHostingKeysKeyIdActionsLinkContainer.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ai-hosting-keys/{keyId}/actions/link-container",
  method: "POST",
  operationId: "ai-hosting-project-link-container",
};

/** Get an App. */
export const appGetApp: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/apps/{appId}",
  method: "GET",
  operationId: "app-get-app",
};

/** Get an AppInstallation. */
export const appGetAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}",
  method: "GET",
  operationId: "app-get-appinstallation",
};

/** Trigger an uninstallation process for an AppInstallation. */
export const appUninstallAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}",
  method: "DELETE",
  operationId: "app-uninstall-appinstallation",
};

/** Update properties belonging to an AppInstallation. */
export const appPatchAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}",
  method: "PATCH",
  operationId: "app-patch-appinstallation",
};

/** Get an AppVersion. */
export const appGetAppversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsAppVersionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/apps/{appId}/versions/{appVersionId}",
  method: "GET",
  operationId: "app-get-appversion",
};

/** Get the installed `SystemSoftware' for a specific `AppInstallation`. */
export const appGetInstalledSystemsoftwareForAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdSystemSoftware.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/systemSoftware",
  method: "GET",
  operationId: "app-get-installed-systemsoftware-for-appinstallation",
};

/** Get the missing requirements of an appInstallation for a specific target AppVersion. */
export const appGetMissingDependenciesForAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdMissingDependencies.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/missing-dependencies",
  method: "GET",
  operationId: "app-get-missing-dependencies-for-appinstallation",
};

/** Get a SystemSoftware. */
export const appGetSystemsoftware: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/system-softwares/{systemSoftwareId}",
  method: "GET",
  operationId: "app-get-systemsoftware",
};

/** Get a SystemSoftwareVersion. */
export const appGetSystemsoftwareversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/system-softwares/{systemSoftwareId}/versions/{systemSoftwareVersionId}",
  method: "GET",
  operationId: "app-get-systemsoftwareversion",
};

/** Create linkage between an AppInstallation and a MySQLDatabase. */
export const appLinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabase.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/database",
  method: "PATCH",
  operationId: "app-link-database",
};

/** List AppInstallations that a user has access to. */
export const appListAppinstallationsForUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations",
  method: "GET",
  operationId: "app-list-appinstallations-for-user",
};

/** List AppInstallations belonging to a Project. */
export const appListAppinstallations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/app-installations",
  method: "GET",
  operationId: "app-list-appinstallations",
};

/** Request an AppInstallation. */
export const appRequestAppinstallation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAppInstallations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/app-installations",
  method: "POST",
  operationId: "app-request-appinstallation",
};

/** List Apps. */
export const appListApps: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextApps.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/apps",
  method: "GET",
  operationId: "app-list-apps",
};

/** List AppVersions belonging to an App. */
export const appListAppversions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/apps/{appId}/versions",
  method: "GET",
  operationId: "app-list-appversions",
};

/** List SystemSoftwares. */
export const appListSystemsoftwares: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwares.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/system-softwares",
  method: "GET",
  operationId: "app-list-systemsoftwares",
};

/** List SystemSoftwareVersions belonging to a SystemSoftware. */
export const appListSystemsoftwareversions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSystemSoftwaresSystemSoftwareIdVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/system-softwares/{systemSoftwareId}/versions",
  method: "GET",
  operationId: "app-list-systemsoftwareversions",
};

/** List update candidates belonging to an AppVersion. */
export const appListUpdateCandidatesForAppversion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppsAppIdVersionsBaseAppVersionIdUpdateCandidates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/apps/{appId}/versions/{baseAppVersionId}/update-candidates",
  method: "GET",
  operationId: "app-list-update-candidates-for-appversion",
};

/** Replace a MySQL Database with another MySQL Database. */
export const appReplaceDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabaseReplace.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/database/replace",
  method: "PATCH",
  operationId: "app-replace-database",
};

/** Request a copy of an AppInstallation. */
export const appRequestAppinstallationCopy: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdActionsCopy.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/actions/copy",
  method: "POST",
  operationId: "app-request-appinstallation-copy",
};

/** Get runtime status belonging to an AppInstallation. */
export const appRetrieveStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdStatus.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/status",
  method: "GET",
  operationId: "app-retrieve-status",
};

/** Create linkage between an AppInstallation and DatabaseUsers. */
export const appSetDatabaseUsers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseIdUsers.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/databases/{databaseId}/users",
  method: "PUT",
  operationId: "app-set-database-users",
};

/** Remove linkage between an AppInstallation and a Database. */
export const appUnlinkDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAppInstallationsAppInstallationIdDatabasesDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/app-installations/{appInstallationId}/databases/{databaseId}",
  method: "DELETE",
  operationId: "app-unlink-database",
};

/** Get an Article. */
export const articleGetArticle: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticlesArticleId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/articles/{articleId}",
  method: "GET",
  operationId: "article-get-article",
};

/** List Articles. */
export const articleListArticles: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextArticles.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/articles",
  method: "GET",
  operationId: "article-list-articles",
};

/** Export a ProjectBackup for download. */
export const backupCreateProjectBackupExport: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/export",
  method: "POST",
  operationId: "backup-create-project-backup-export",
};

/** Delete a ProjectBackupExport. */
export const backupDeleteProjectBackupExport: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExport.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/export",
  method: "DELETE",
  operationId: "backup-delete-project-backup-export",
};

/** List BackupSchedules belonging to a Project. */
export const backupListProjectBackupSchedules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/backup-schedules",
  method: "GET",
  operationId: "backup-list-project-backup-schedules",
};

/** Create a BackupSchedule for a Project. */
export const backupCreateProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackupSchedules.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/backup-schedules",
  method: "POST",
  operationId: "backup-create-project-backup-schedule",
};

/** List Backups belonging to a Project. */
export const backupListProjectBackups: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/backups",
  method: "GET",
  operationId: "backup-list-project-backups",
};

/** Create a Backup of a Project. */
export const backupCreateProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdBackups.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/backups",
  method: "POST",
  operationId: "backup-create-project-backup",
};

/** Get a ProjectBackupSchedule. */
export const backupGetProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backup-schedules/{projectBackupScheduleId}",
  method: "GET",
  operationId: "backup-get-project-backup-schedule",
};

/** Delete a ProjectBackupSchedule. */
export const backupDeleteProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backup-schedules/{projectBackupScheduleId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup-schedule",
};

/** Update a ProjectBackupSchedule. */
export const backupUpdateProjectBackupSchedule: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupSchedulesProjectBackupScheduleId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backup-schedules/{projectBackupScheduleId}",
  method: "PATCH",
  operationId: "backup-update-project-backup-schedule",
};

/** Get a ProjectBackup. */
export const backupGetProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}",
  method: "GET",
  operationId: "backup-get-project-backup",
};

/** Delete a ProjectBackup. */
export const backupDeleteProjectBackup: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}",
  method: "DELETE",
  operationId: "backup-delete-project-backup",
};

/** List database dump's for a ProjectBackup. */
export const backupGetProjectBackupDatabaseDumps: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDatabaseDumps.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/database-dumps",
  method: "GET",
  operationId: "backup-get-project-backup-database-dumps",
};

/** List paths for a ProjectBackup. */
export const backupGetProjectBackupDirectories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdPath.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/path",
  method: "GET",
  operationId: "backup-get-project-backup-directories",
};

/** Update a Backup's expiration time. */
export const backupReplaceProjectBackupExpirationTime: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdExpirationTime.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/expiration-time",
  method: "PUT",
  operationId: "backup-replace-project-backup-expiration-time",
};

/** Restore a ProjectBackup. */
export const backupRequestProjectBackupRestore: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdRestore.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/restore",
  method: "POST",
  operationId: "backup-request-project-backup-restore",
};

/** Change the description of a ProjectBackup. */
export const backupUpdateProjectBackupDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectBackupsProjectBackupIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-backups/{projectBackupId}/description",
  method: "PATCH",
  operationId: "backup-update-project-backup-description",
};

/** Call pull-image webhook */
export const containerCallPullImageWebhookForService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdWebhooksPullImage.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/webhooks/pull-image",
  method: "GET",
  operationId: "container-call-pull-image-webhook-for-service",
};

/** List Registries belonging to a Project. */
export const containerListRegistries: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/registries",
  method: "GET",
  operationId: "container-list-registries",
};

/** Create a Registry. */
export const containerCreateRegistry: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRegistries.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/registries",
  method: "POST",
  operationId: "container-create-registry",
};

/** List Stacks belonging to a Project. */
export const containerListStacks: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/stacks",
  method: "GET",
  operationId: "container-list-stacks",
};

/** Create a Stack. */
export const containerCreateStack: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStacks.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/stacks",
  method: "POST",
  operationId: "container-create-stack",
};

/** Get a Stack. */
export const containerGetStack: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}",
  method: "GET",
  operationId: "container-get-stack",
};

/** Declaratively create, update or delete Services or Volumes belonging to a Stack. */
export const containerDeclareStack: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}",
  method: "PUT",
  operationId: "container-declare-stack",
};

/** Delete a Stack. */
export const containerDeleteStack: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}",
  method: "DELETE",
  operationId: "container-delete-stack",
};

/** Create, update or delete Services or Volumes belonging to a Stack. */
export const containerUpdateStack: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}",
  method: "PATCH",
  operationId: "container-update-stack",
};

/** Get a Registry. */
export const containerGetRegistry: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/registries/{registryId}",
  method: "GET",
  operationId: "container-get-registry",
};

/** Delete a Registry. */
export const containerDeleteRegistry: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/registries/{registryId}",
  method: "DELETE",
  operationId: "container-delete-registry",
};

/** Update a Registry. */
export const containerUpdateRegistry: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegistriesRegistryId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/registries/{registryId}",
  method: "PATCH",
  operationId: "container-update-registry",
};

/** Get a Volume belonging to a Stack. */
export const containerGetVolume: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/volumes/{volumeId}",
  method: "GET",
  operationId: "container-get-volume",
};

/** Delete a Volume belonging to a Stack. */
export const containerDeleteVolume: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumesVolumeId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/volumes/{volumeId}",
  method: "DELETE",
  operationId: "container-delete-volume",
};

/** Get a ContainerImageConfig. */
export const containerGetContainerImageConfig: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerImageConfig.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/container-image-config",
  method: "GET",
  operationId: "container-get-container-image-config",
};

/** Get logs belonging to a Service. */
export const containerGetServiceLogs: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$200.Content.TextPlain>,
      200,
      "text/plain"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdLogs.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/logs",
  method: "GET",
  operationId: "container-get-service-logs",
};

/** Get a Service belonging to a Stack. */
export const containerGetService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}",
  method: "GET",
  operationId: "container-get-service",
};

/** Get a Container Template icon. */
export const containerGetTemplateIcon: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$200.Content.ImageJpeg>,
      200,
      "image/jpeg"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$200.Content.ImagePng>,
      200,
      "image/png"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$200.Content.ImageSvgXml>,
      200,
      "image/svg+xml"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateIdIcon.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/container-templates/{templateId}/icon",
  method: "GET",
  operationId: "container-get-template-icon",
};

/** Get a Container Template by ID. */
export const containerGetTemplate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplatesTemplateId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/container-templates/{templateId}",
  method: "GET",
  operationId: "container-get-template",
};

/** List Stacks belonging to the executing user. */
export const containerListSelfStacks: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacks.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks",
  method: "GET",
  operationId: "container-list-self-stacks",
};

/** List Services belonging to a Project. */
export const containerListServices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdServices.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/services",
  method: "GET",
  operationId: "container-list-services",
};

/** List Volumes belonging to a Stack. */
export const containerListStackVolumes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdVolumes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/volumes",
  method: "GET",
  operationId: "container-list-stack-volumes",
};

/** List Container Templates. */
export const containerListTemplates: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContainerTemplates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/container-templates",
  method: "GET",
  operationId: "container-list-templates",
};

/** List Volumes belonging to a Project. */
export const containerListVolumes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdVolumes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/volumes",
  method: "GET",
  operationId: "container-list-volumes",
};

/** Pull image and recreate */
export const containerPullImageForService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsPull.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/actions/pull",
  method: "POST",
  operationId: "container-pull-image-for-service",
};

/** Recreate a Service. */
export const containerRecreateService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRecreate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/actions/recreate",
  method: "POST",
  operationId: "container-recreate-service",
};

/** Restart a started Service. */
export const containerRestartService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsRestart.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/actions/restart",
  method: "POST",
  operationId: "container-restart-service",
};

/** Create or rotate pull-image webhook token */
export const containerRotatePullImageWebhookForService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdWebhookToken.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/webhook-token",
  method: "POST",
  operationId: "container-rotate-pull-image-webhook-for-service",
};

/** Set an update schedule for a Stack. */
export const containerSetStackUpdateSchedule: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdUpdateSchedule.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/update-schedule",
  method: "PUT",
  operationId: "container-set-stack-update-schedule",
};

/** Start a stopped Service. */
export const containerStartService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStart.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/actions/start",
  method: "POST",
  operationId: "container-start-service",
};

/** Stop a started Service. */
export const containerStopService: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextStacksStackIdServicesServiceIdActionsStop.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/stacks/{stackId}/services/{serviceId}/actions/stop",
  method: "POST",
  operationId: "container-stop-service",
};

/** Schedule the Termination of a ContractItem. */
export const contractTerminateContractItem: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/items/{contractItemId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract-item",
};

/** Cancel the Termination for the referred ContractItem. */
export const contractCancelContractItemTermination: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/items/{contractItemId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-item-termination",
};

/** Cancel the TariffChange for the referred ContractItem. */
export const contractCancelContractTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemIdTariffChange.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/items/{contractItemId}/tariff-change",
  method: "DELETE",
  operationId: "contract-cancel-contract-tariff-change",
};

/** Schedule the Termination of a Contract. */
export const contractTerminateContract: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/termination",
  method: "POST",
  operationId: "contract-terminate-contract",
};

/** Cancel the Termination for the referred Contract. */
export const contractCancelContractTermination: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/termination",
  method: "DELETE",
  operationId: "contract-cancel-contract-termination",
};

/** Return the BaseItem of the Contract with the given ID. */
export const contractGetBaseItemOfContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdBaseItems.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/base-items",
  method: "GET",
  operationId: "contract-get-base-item-of-contract",
};

/** Return the AI Hosting Contract for the given Customer. */
export const contractGetDetailOfContractByAiHosting: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAiHostingContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/ai-hosting/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-ai-hosting",
};

/** Return the Contract for the given Certificate. */
export const contractGetDetailOfContractByCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificates/{certificateId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-certificate",
};

/** Return the Contract for the given Domain. */
export const contractGetDetailOfContractByDomain: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-domain",
};

/** Return the Contract for the given LeadFyndrProfile. */
export const contractGetDetailOfContractByLeadFyndr: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/lead-fyndr-profile/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-lead-fyndr",
};

/** Return the Contract for the given License. */
export const contractGetDetailOfContractByLicense: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/licenses/{licenseId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-license",
};

/** Return the Contract for the given Mail Address. */
export const contractGetDetailOfContractByMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-mail-address",
};

/** Return the Contract for the given Project. */
export const contractGetDetailOfContractByProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-project",
};

/** Return the Contract for the given Server. */
export const contractGetDetailOfContractByServer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/contract",
  method: "GET",
  operationId: "contract-get-detail-of-contract-by-server",
};

/** Get the ContractItem with the given ID. */
export const contractGetDetailOfContractItem: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractIdItemsContractItemId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}/items/{contractItemId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract-item",
};

/** Returns the Contract with the given ID. */
export const contractGetDetailOfContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContractsContractId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contracts/{contractId}",
  method: "GET",
  operationId: "contract-get-detail-of-contract",
};

/** Return a list of Contracts for the given Customer. */
export const contractListContracts: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContracts.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/contracts",
  method: "GET",
  operationId: "contract-list-contracts",
};

/** Start the verification process of a contributor. */
export const contributorRequestVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/verification-process",
  method: "POST",
  operationId: "contributor-request-verification",
};

/** Cancel the verification-process of a contributor. */
export const contributorCancelVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdVerificationProcess.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/verification-process",
  method: "DELETE",
  operationId: "contributor-cancel-verification",
};

/** Get a Contributor. */
export const extensionGetContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}",
  method: "GET",
  operationId: "extension-get-contributor",
};

/** Delete a Contributor. */
export const contributorDeleteContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}",
  method: "DELETE",
  operationId: "contributor-delete-contributor",
};

/** Patch Contributor. */
export const contributorPatchContributor: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}",
  method: "PATCH",
  operationId: "contributor-patch-contributor",
};

/** Express interest to be a contributor. */
export const contributorExpressInterestToContribute: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdContributor.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/contributor",
  method: "POST",
  operationId: "contributor-express-interest-to-contribute",
};

/** Get Contributor Billing Information. */
export const contributorGetBillingInformation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/billing-information",
  method: "GET",
  operationId: "contributor-get-billing-information",
};

/** Update Contributor Billing Information. */
export const contributorUpdateBillingInformation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdBillingInformation.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/billing-information",
  method: "PUT",
  operationId: "contributor-update-billing-information",
};

/** Get the Stripe Billing Portal Link for a Customer */
export const contributorGetCustomerBillingPortalLink: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdBillingPortal.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/billing-portal",
  method: "GET",
  operationId: "contributor-get-customer-billing-portal-link",
};

/** Get the Stripe Dashboard Link for a Contributor. */
export const contributorGetLoginLink: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdDashboard.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/dashboard",
  method: "GET",
  operationId: "contributor-get-login-link",
};

/** List ContractPartners of the contributor. */
export const contributorListContractPartnersOfContributor: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdContractPartners.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/contract-partners",
  method: "GET",
  operationId: "contributor-list-contract-partners-of-contributor",
};

/** List incoming Invoices of a Contributor. */
export const contributorListIncomingInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncoming.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/invoices/incoming",
  method: "GET",
  operationId: "contributor-list-incoming-invoices",
};

/** List all invoices on behalf of a contributor. */
export const contributorListOnbehalfInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesOutgoing.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/invoices/outgoing",
  method: "GET",
  operationId: "contributor-list-onbehalf-invoices",
};

/** Request an Access Token for the Incoming Invoice file. */
export const contributorReceiptGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/invoices/incoming/{contributorReceiptId}/file-access-token",
  method: "GET",
  operationId: "contributor-receipt-get-file-access-token",
};

/** Add a deviating avatar to a Contributor. */
export const contributorRequestDeviatingContributorAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/avatar",
  method: "POST",
  operationId: "contributor-request-deviating-contributor-avatar-upload",
};

/** Delete deviating contributor avatar und return to the inherited customer avatar. */
export const contributorResetContributorAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/avatar",
  method: "DELETE",
  operationId: "contributor-reset-contributor-avatar",
};

/** Rotate the secret for an extension instance. */
export const contributorRotateSecretForExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/secret",
  method: "PUT",
  operationId: "contributor-rotate-secret-for-extension-instance",
};

/** Get all conversation the authenticated user has created or has access to. */
export const conversationListConversations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations",
  method: "GET",
  operationId: "conversation-list-conversations",
};

/** Create a conversation. */
export const conversationCreateConversation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations",
  method: "POST",
  operationId: "conversation-create-conversation",
};

/** Get all message of the conversation. */
export const conversationListMessagesByConversation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/messages",
  method: "GET",
  operationId: "conversation-list-messages-by-conversation",
};

/** Send a new message in the conversation. */
export const conversationCreateMessage: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessages.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/messages",
  method: "POST",
  operationId: "conversation-create-message",
};

/** Get a specific conversation category. */
export const conversationGetCategory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategoriesCategoryId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversation-categories/{categoryId}",
  method: "GET",
  operationId: "conversation-get-category",
};

/** Get members of a support conversation. */
export const conversationGetConversationMembers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMembers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/members",
  method: "GET",
  operationId: "conversation-get-conversation-members",
};

/** Get preferences for customer conversations. */
export const conversationGetConversationPreferencesOfCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdConversationPreferences.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/conversation-preferences",
  method: "GET",
  operationId: "conversation-get-conversation-preferences-of-customer",
};

/** Get a support conversation. */
export const conversationGetConversation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}",
  method: "GET",
  operationId: "conversation-get-conversation",
};

/** Update the basic properties of the conversation. */
export const conversationUpdateConversation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}",
  method: "PUT",
  operationId: "conversation-update-conversation",
};

/** Request an access token for the File belonging to the Conversation. */
export const conversationGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFilesFileIdAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/files/{fileId}/access-token",
  method: "GET",
  operationId: "conversation-get-file-access-token",
};

/** Get all conversation categories. */
export const conversationListCategories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationCategories.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversation-categories",
  method: "GET",
  operationId: "conversation-list-categories",
};

/** Request a file upload token for the conversation. */
export const conversationRequestFileUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdFiles.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/files",
  method: "POST",
  operationId: "conversation-request-file-upload",
};

/** Update the status of a conversation. */
export const conversationSetConversationStatus: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/status",
  method: "PUT",
  operationId: "conversation-set-conversation-status",
};

/** Update the content of the message */
export const conversationUpdateMessage: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextConversationsConversationIdMessagesMessageId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/conversations/{conversationId}/messages/{messageId}",
  method: "PATCH",
  operationId: "conversation-update-message",
};

/** List Cronjobs belonging to a Project. */
export const cronjobListCronjobs: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/cronjobs",
  method: "GET",
  operationId: "cronjob-list-cronjobs",
};

/** Create a Cronjob. */
export const cronjobCreateCronjob: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdCronjobs.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/cronjobs",
  method: "POST",
  operationId: "cronjob-create-cronjob",
};

/** List CronjobExecutions belonging to a Cronjob. */
export const cronjobListExecutions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}/executions",
  method: "GET",
  operationId: "cronjob-list-executions",
};

/** Trigger a Cronjob. */
export const cronjobCreateExecution: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}/executions",
  method: "POST",
  operationId: "cronjob-create-execution",
};

/** Get a Cronjob. */
export const cronjobGetCronjob: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}",
  method: "GET",
  operationId: "cronjob-get-cronjob",
};

/** Delete a Cronjob. */
export const cronjobDeleteCronjob: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}",
  method: "DELETE",
  operationId: "cronjob-delete-cronjob",
};

/** Update a Cronjob. */
export const cronjobUpdateCronjob: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}",
  method: "PATCH",
  operationId: "cronjob-update-cronjob",
};

/** Get a CronjobExecution analysis for failed executions. */
export const cronjobGetExecutionAnalysis: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionIdAnalysis.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}/executions/{executionId}/analysis",
  method: "GET",
  operationId: "cronjob-get-execution-analysis",
};

/** Get a CronjobExecution. */
export const cronjobGetExecution: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdExecutionsExecutionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}/executions/{executionId}",
  method: "GET",
  operationId: "cronjob-get-execution",
};

/** Update a Cronjob's app installation id. */
export const cronjobReplaceCronjobAppInstallationId: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCronjobsCronjobIdAppInstallationId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cronjobs/{cronjobId}/app-installation-id",
  method: "PUT",
  operationId: "cronjob-replace-cronjob-app-installation-id",
};

/** Accept a CustomerInvite. */
export const customerAcceptCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites/{customerInviteId}/actions/accept",
  method: "POST",
  operationId: "customer-accept-customer-invite",
};

/** List Invites belonging to a Customer. */
export const customerListInvitesForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invites",
  method: "GET",
  operationId: "customer-list-invites-for-customer",
};

/** Create a CustomerInvite. */
export const customerCreateCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invites",
  method: "POST",
  operationId: "customer-create-customer-invite",
};

/** Get all customer profiles the authenticated user has access to. */
export const customerListCustomers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers",
  method: "GET",
  operationId: "customer-list-customers",
};

/** Create a new customer profile. */
export const customerCreateCustomer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers",
  method: "POST",
  operationId: "customer-create-customer",
};

/** Lets us know your idea for our recommendation programm. */
export const customerCreateRecommendationSuggestion: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdRecommendationSuggestions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/recommendation-suggestions",
  method: "POST",
  operationId: "customer-create-recommendation-suggestion",
};

/** Gets the Wallet of the Customer. */
export const customerGetWallet: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/wallet",
  method: "GET",
  operationId: "customer-get-wallet",
};

/** Create the Wallet for the Customer. */
export const customerCreateWallet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdWallet.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/wallet",
  method: "POST",
  operationId: "customer-create-wallet",
};

/** Decline a CustomerInvite. */
export const customerDeclineCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites/{customerInviteId}/actions/decline",
  method: "POST",
  operationId: "customer-decline-customer-invite",
};

/** Get a CustomerInvite. */
export const customerGetCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites/{customerInviteId}",
  method: "GET",
  operationId: "customer-get-customer-invite",
};

/** Delete a CustomerInvite. */
export const customerDeleteCustomerInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites/{customerInviteId}",
  method: "DELETE",
  operationId: "customer-delete-customer-invite",
};

/** Get a CustomerMembership. */
export const customerGetCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-memberships/{customerMembershipId}",
  method: "GET",
  operationId: "customer-get-customer-membership",
};

/** Delete a CustomerMembership. */
export const customerDeleteCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-memberships/{customerMembershipId}",
  method: "DELETE",
  operationId: "customer-delete-customer-membership",
};

/** Update a CustomerMembership. */
export const customerUpdateCustomerMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMembershipsCustomerMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-memberships/{customerMembershipId}",
  method: "PATCH",
  operationId: "customer-update-customer-membership",
};

/** Get a customer profile. */
export const customerGetCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}",
  method: "GET",
  operationId: "customer-get-customer",
};

/** Update a customer profile. */
export const customerUpdateCustomer: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}",
  method: "PUT",
  operationId: "customer-update-customer",
};

/** Delete a customer profile. */
export const customerDeleteCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}",
  method: "DELETE",
  operationId: "customer-delete-customer",
};

/** Get a CustomerInvite by token. */
export const customerGetCustomerTokenInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerTokenInvite.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-token-invite",
  method: "GET",
  operationId: "customer-get-customer-token-invite",
};

/** Check if the customer profile has a valid contract partner configured. */
export const customerIsCustomerLegallyCompetent: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLegallyCompetent.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/legally-competent",
  method: "GET",
  operationId: "customer-is-customer-legally-competent",
};

/** List CustomerInvites belonging to the executing user. */
export const customerListCustomerInvites: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites",
  method: "GET",
  operationId: "customer-list-customer-invites",
};

/** List CustomerMemberships belonging to the executing user. */
export const customerListCustomerMemberships: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-memberships",
  method: "GET",
  operationId: "customer-list-customer-memberships",
};

/** List Memberships belonging to a Customer. */
export const customerListMembershipsForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/memberships",
  method: "GET",
  operationId: "customer-list-memberships-for-customer",
};

/** Request a new avatar upload for the customer profile. */
export const customerRequestAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/avatar",
  method: "POST",
  operationId: "customer-request-avatar-upload",
};

/** Remove the avatar picture of the customer profile. */
export const customerRemoveAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdAvatar.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/avatar",
  method: "DELETE",
  operationId: "customer-remove-avatar",
};

/** Resend the mail for a CustomerInvite. */
export const customerResendCustomerInviteMail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomerInvitesCustomerInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customer-invites/{customerInviteId}/actions/resend",
  method: "POST",
  operationId: "customer-resend-customer-invite-mail",
};

/** Copy a MySQLDatabase with a MySQLUser. */
export const databaseCopyMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdActionsCopy.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}/actions/copy",
  method: "POST",
  operationId: "database-copy-mysql-database",
};

/** List MySQLDatabases belonging to a Project. */
export const databaseListMysqlDatabases: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mysql-databases",
  method: "GET",
  operationId: "database-list-mysql-databases",
};

/** Create a MySQLDatabase with a MySQLUser. */
export const databaseCreateMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMysqlDatabases.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mysql-databases",
  method: "POST",
  operationId: "database-create-mysql-database",
};

/** List MySQLUsers belonging to a Database. */
export const databaseListMysqlUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}/users",
  method: "GET",
  operationId: "database-list-mysql-users",
};

/** Create a MySQLUser. */
export const databaseCreateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}/users",
  method: "POST",
  operationId: "database-create-mysql-user",
};

/** List RedisDatabases belonging to a Project. */
export const databaseListRedisDatabases: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/redis-databases",
  method: "GET",
  operationId: "database-list-redis-databases",
};

/** Create a RedisDatabase. */
export const databaseCreateRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdRedisDatabases.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/redis-databases",
  method: "POST",
  operationId: "database-create-redis-database",
};

/** Get a MySQLDatabase. */
export const databaseGetMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}",
  method: "GET",
  operationId: "database-get-mysql-database",
};

/** Delete a MySQLDatabase. */
export const databaseDeleteMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}",
  method: "DELETE",
  operationId: "database-delete-mysql-database",
};

/** Update a MySqlDatabase. */
export const databasePatchMysqlDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}",
  method: "PATCH",
  operationId: "database-patch-mysql-database",
};

/** Get a MySQLUser. */
export const databaseGetMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}",
  method: "GET",
  operationId: "database-get-mysql-user",
};

/** Update a MySQLUser. */
export const databaseUpdateMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}",
  method: "PUT",
  operationId: "database-update-mysql-user",
};

/** Delete a MySQLUser. */
export const databaseDeleteMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}",
  method: "DELETE",
  operationId: "database-delete-mysql-user",
};

/** Get a RedisDatabase. */
export const databaseGetRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-databases/{redisDatabaseId}",
  method: "GET",
  operationId: "database-get-redis-database",
};

/** Delete a RedisDatabase. */
export const databaseDeleteRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-databases/{redisDatabaseId}",
  method: "DELETE",
  operationId: "database-delete-redis-database",
};

/** Update a RedisDatabase. */
export const databasePatchRedisDatabase: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-databases/{redisDatabaseId}",
  method: "PATCH",
  operationId: "database-patch-redis-database",
};

/** Disable a MySQLUser. */
export const databaseDisableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsDisable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}/actions/disable",
  method: "POST",
  operationId: "database-disable-mysql-user",
};

/** Enable a MySQLUser. */
export const databaseEnableMysqlUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdActionsEnable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}/actions/enable",
  method: "POST",
  operationId: "database-enable-mysql-user",
};

/** Get a MySQLUser's PhpMyAdmin-URL. */
export const databaseGetMysqlUserPhpMyAdminUrl: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPhpMyAdminUrl.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}/php-my-admin-url",
  method: "GET",
  operationId: "database-get-mysql-user-php-my-admin-url",
};

/** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
export const databaseListMysqlCharsets: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlCharsets.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-charsets",
  method: "GET",
  operationId: "database-list-mysql-charsets",
};

/** List MySQLVersions. */
export const databaseListMysqlVersions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-versions",
  method: "GET",
  operationId: "database-list-mysql-versions",
};

/** List RedisVersions. */
export const databaseListRedisVersions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisVersions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-versions",
  method: "GET",
  operationId: "database-list-redis-versions",
};

/** Update a MySQLDatabase's default character settings. */
export const databaseUpdateMysqlDatabaseDefaultCharset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDefaultCharset.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}/default-charset",
  method: "PATCH",
  operationId: "database-update-mysql-database-default-charset",
};

/** Update a MySQLDatabase's description. */
export const databaseUpdateMysqlDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlDatabasesMysqlDatabaseIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-databases/{mysqlDatabaseId}/description",
  method: "PATCH",
  operationId: "database-update-mysql-database-description",
};

/** Update a MySQLUser's password. */
export const databaseUpdateMysqlUserPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMysqlUsersMysqlUserIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mysql-users/{mysqlUserId}/password",
  method: "PATCH",
  operationId: "database-update-mysql-user-password",
};

/** Update a RedisDatabase's configuration. */
export const databaseUpdateRedisDatabaseConfiguration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdConfiguration.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-databases/{redisDatabaseId}/configuration",
  method: "PATCH",
  operationId: "database-update-redis-database-configuration",
};

/** Update a RedisDatabase's description. */
export const databaseUpdateRedisDatabaseDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRedisDatabasesRedisDatabaseIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/redis-databases/{redisDatabaseId}/description",
  method: "PATCH",
  operationId: "database-update-redis-database-description",
};

/** List domains. */
export const domainServiceNextListDomains: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomains.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains",
  method: "GET",
  operationId: "domain-service-next-list-domains",
};

/** Update the nameservers of a Domain. */
export const domainUpdateDomainNameservers: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdNameservers.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/nameservers",
  method: "PATCH",
  operationId: "domain-update-domain-nameservers",
};

/** Update the paths of an Ingress. */
export const ingressUpdateIngressPaths: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdPaths.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}/paths",
  method: "PATCH",
  operationId: "ingress-update-ingress-paths",
};

/** Update the tls settings of an Ingress. */
export const ingressUpdateIngressTls: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdTls.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}/tls",
  method: "PATCH",
  operationId: "ingress-update-ingress-tls",
};

/** Update the autoresponder of a MailAddress. */
export const mailUpdateMailAddressAutoresponder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAutoresponder.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/autoresponder",
  method: "PATCH",
  operationId: "mail-update-mail-address-autoresponder",
};

/** Update the forward addresses of a MailAddresses. */
export const mailUpdateMailAddressForwardAddresses: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdForwardAddresses.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/forward-addresses",
  method: "PATCH",
  operationId: "mail-update-mail-address-forward-addresses",
};

/** Update the password for a MailAddress. */
export const mailUpdateMailAddressPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/password",
  method: "PATCH",
  operationId: "mail-update-mail-address-password",
};

/** Update the quota of a MailAddress. */
export const mailUpdateMailAddressQuota: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdQuota.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/quota",
  method: "PATCH",
  operationId: "mail-update-mail-address-quota",
};

/** Update the spam protection of a MailAddress. */
export const mailUpdateMailAddressSpamProtection: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdSpamProtection.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/spam-protection",
  method: "PATCH",
  operationId: "mail-update-mail-address-spam-protection",
};

/** Update a mail setting of a Project. */
export const mailUpdateProjectMailSetting: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettingsMailSetting.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mail-settings/{mailSetting}",
  method: "PATCH",
  operationId: "mail-update-project-mail-setting",
};

/** Subscribe a user to the mStudio newsletter. */
export const newsletterSubscribeUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/newsletter-subscriptions",
  method: "POST",
  operationId: "newsletter-subscribe-user",
};

/** Update your account information. */
export const userUpdateAccount: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfPersonalInformation.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/personal-information",
  method: "PUT",
  operationId: "user-update-account",
};

/** Create a DNSZone. */
export const dnsCreateDnsZone: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZones.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones",
  method: "POST",
  operationId: "dns-create-dns-zone",
};

/** Get a DNSZone. */
export const dnsGetDnsZone: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones/{dnsZoneId}",
  method: "GET",
  operationId: "dns-get-dns-zone",
};

/** Delete a DNSZone. */
export const dnsDeleteDnsZone: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones/{dnsZoneId}",
  method: "DELETE",
  operationId: "dns-delete-dns-zone",
};

/** Get a zone file for a DNSZone. */
export const dnsGetZoneFile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Responses.$200.Content.TextPlain>,
      200,
      "text/plain"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdZoneFile.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones/{dnsZoneId}/zone-file",
  method: "GET",
  operationId: "dns-get-zone-file",
};

/** List DNSZones belonging to a Project. */
export const dnsListDnsZones: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDnsZones.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/dns-zones",
  method: "GET",
  operationId: "dns-list-dns-zones",
};

/** Set a record set on a DNSZone to managed. */
export const dnsSetRecordSetManaged: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones/{dnsZoneId}/record-sets/{recordSet}/actions/set-managed",
  method: "POST",
  operationId: "dns-set-record-set-managed",
};

/** Update a record set on a DNSZone. */
export const dnsUpdateRecordSet: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDnsZonesDnsZoneIdRecordSetsRecordSet.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/dns-zones/{dnsZoneId}/record-sets/{recordSet}",
  method: "PUT",
  operationId: "dns-update-record-set",
};

/** Abort a Domain declaration. */
export const domainAbortDomainDeclaration: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdDeclaration.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/declaration",
  method: "DELETE",
  operationId: "domain-abort-domain-declaration",
};

/** Create a scheduled deletion of a Domain. */
export const domainCreateScheduledDeletion: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/scheduled-deletion",
  method: "POST",
  operationId: "domain-create-scheduled-deletion",
};

/** Cancel a scheduled deletion of a Domain. */
export const domainCancelScheduledDeletion: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdScheduledDeletion.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/scheduled-deletion",
  method: "DELETE",
  operationId: "domain-cancel-scheduled-deletion",
};

/** Check if a Domain is available to register. */
export const domainCheckDomainRegistrability: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainRegistrable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-registrable",
  method: "POST",
  operationId: "domain-check-domain-registrability",
};

/** Check if a Domain is available to transfer. */
export const domainCheckDomainTransferability: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTransferable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-transferable",
  method: "POST",
  operationId: "domain-check-domain-transferability",
};

/** Create an auth code for a Domains transfer-out process. */
export const domainCreateDomainAuthCode: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsAuthCode.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/actions/auth-code",
  method: "POST",
  operationId: "domain-create-domain-auth-code",
};

/** Get a domain. */
export const domainServiceNextGetDomain: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}",
  method: "GET",
  operationId: "domain-service-next-get-domain",
};

/** Delete a Domain. */
export const domainDeleteDomain: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}",
  method: "DELETE",
  operationId: "domain-delete-domain",
};

/** Get a Contact-Verification. */
export const domainGetContactVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contact-verifications/{contactVerificationId}",
  method: "GET",
  operationId: "domain-get-contact-verification",
};

/** Get the latest screenshot's FileReference belonging to a Domain. */
export const domainGetLatestScreenshot: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsLatestScreenshot.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/latest-screenshot",
  method: "GET",
  operationId: "domain-get-latest-screenshot",
};

/** List Contact-Verifications belonging to the executing user. */
export const domainListContactVerifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerifications.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contact-verifications",
  method: "GET",
  operationId: "domain-list-contact-verifications",
};

/** List the contact schemas for a TLD. */
export const domainListTldContactSchemas: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTldsTldContactSchemas.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-tlds/{tld}/contact-schemas",
  method: "GET",
  operationId: "domain-list-tld-contact-schemas",
};

/** List TLDs. */
export const domainListTlds: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainTlds.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-tlds",
  method: "GET",
  operationId: "domain-list-tlds",
};

/** Check if a Domain-Migration from a pAccount into a Project is possible. */
export const domainMigrationCheckMigrationIsPossible: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrationsActionsPossibilityCheck.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-migrations/actions/possibility-check",
  method: "POST",
  operationId: "domain-migration-check-migration-is-possible",
};

/** List Domain-Migrations belonging to a pAccount. */
export const domainMigrationListMigrationsByPaccount: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPAccountsPAccountDomainMigrations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/p-accounts/{pAccount}/domain-migrations",
  method: "GET",
  operationId: "domain-migration-list-migrations-by-p-account",
};

/** List Domain-Migrations belonging to a Project. */
export const domainMigrationListMigrationsByProjectId: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDomainMigrations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/domain-migrations",
  method: "GET",
  operationId: "domain-migration-list-migrations-by-project-id",
};

/** Order a Domain-Migration from a pAccount into a Project. */
export const domainMigrationOrderDomainMigration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainMigrations.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-migrations",
  method: "POST",
  operationId: "domain-migration-order-domain-migration",
};

/** Resends a Contact-Verification email. */
export const domainResendContactVerificationEmail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContactVerificationsContactVerificationIdActionsResendContactVerificationEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contact-verifications/{contactVerificationId}/actions/resend-contact-verification-email",
  method: "POST",
  operationId: "domain-resend-contact-verification-email",
};

/** Resend a Domain email. */
export const domainResendDomainEmail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdActionsResendEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/actions/resend-email",
  method: "POST",
  operationId: "domain-resend-domain-email",
};

/** Suggest a list of domains based on a prompt using AI. */
export const domainSuggest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainSuggestions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domain-suggestions",
  method: "GET",
  operationId: "domain-suggest",
};

/** Update the auth code of a Domain. */
export const domainUpdateDomainAuthCode: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdAuthCode.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/auth-code",
  method: "PATCH",
  operationId: "domain-update-domain-auth-code",
};

/** Update a contact of a Domain. */
export const domainUpdateDomainContact: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdContactsContact.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/contacts/{contact}",
  method: "PATCH",
  operationId: "domain-update-domain-contact",
};

/** Update a Domain's project id. */
export const domainUpdateDomainProjectId: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDomainsDomainIdProjectId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/domains/{domainId}/project-id",
  method: "PATCH",
  operationId: "domain-update-domain-project-id",
};

/** Authenticate your external application using the extensionInstanceSecret. */
export const extensionAuthenticateInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTokens.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/tokens",
  method: "POST",
  operationId: "extension-authenticate-instance",
};

/** Authenticate your external application using a session token and an extension secret */
export const extensionAuthenticateWithSessionToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateSessionToken.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/authenticate-session-token",
  method: "POST",
  operationId: "extension-authenticate-with-session-token",
};

/** Schedule an Extension Instance Termination for the next possible date. */
export const extensionScheduleExtensionTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/termination",
  method: "POST",
  operationId: "extension-schedule-extension-termination",
};

/** Cancel an Extension Instance Termination. */
export const extensionCancelExtensionTermination: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdTermination.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/termination",
  method: "DELETE",
  operationId: "extension-cancel-extension-termination",
};

/** Schedule an Extension Instance Variant change for the next possible date. */
export const extensionScheduleExtensionVariantChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/contract/variant-change",
  method: "POST",
  operationId: "extension-schedule-extension-variant-change",
};

/** Cancel an Extension Instance Variant Change. */
export const extensionCancelExtensionVariantChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContractVariantChange.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/contract/variant-change",
  method: "DELETE",
  operationId: "extension-cancel-extension-variant-change",
};

/** Change the context of an Extension. */
export const extensionChangeContext: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdContext.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/context",
  method: "PUT",
  operationId: "extension-change-context",
};

/** Check if an Extension is unchargable for this specific context or if it must be charged. */
export const extensionCheckExtensionIsChargable: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdContextsContextIdChargability.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extensions/{extensionId}/contexts/{contextId}/chargability",
  method: "GET",
  operationId: "extension-check-extension-is-chargable",
};

/** Consent to extension scopes. */
export const extensionConsentToExtensionScopes: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdScopes.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/scopes",
  method: "PATCH",
  operationId: "extension-consent-to-extension-scopes",
};

/** Create the OnboardingProcess of a Contributor. */
export const extensionCreateContributorOnboardingProcess: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdOnboardingProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/onboarding-process",
  method: "POST",
  operationId: "extension-create-contributor-onboarding-process",
};

/** List ExtensionInstances. */
export const extensionListExtensionInstances: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances",
  method: "GET",
  operationId: "extension-list-extension-instances",
};

/** Create an ExtensionInstance. */
export const extensionCreateExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstances.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances",
  method: "POST",
  operationId: "extension-create-extension-instance",
};

/** Create an access token retrieval key for an extension instance. */
export const extensionCreateRetrievalKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/actions/create-access-token-retrieval-key",
  method: "POST",
  operationId: "extension-create-retrieval-key",
};

/** Get an ExtensionInstance. */
export const extensionGetExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}",
  method: "GET",
  operationId: "extension-get-extension-instance",
};

/** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead. */
export const extensionDeleteExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}",
  method: "DELETE",
  operationId: "extension-delete-extension-instance",
};

/** Get Extension of own contributor. */
export const extensionGetOwnExtension: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-own-extension",
};

/** Delete an Extension. */
export const extensionDeleteExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}",
  method: "DELETE",
  operationId: "extension-delete-extension",
};

/** Patch Extension. */
export const extensionPatchExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}",
  method: "PATCH",
  operationId: "extension-patch-extension",
};

/** Disable an ExtensionInstance. */
export const extensionDisableExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsDisable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/actions/disable",
  method: "POST",
  operationId: "extension-disable-extension-instance",
};

/** Dry run a webhook with random or given values. */
export const extensionDryRunWebhook: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/extension-instances/{extensionInstanceId}/actions/dry-run/{webhookKind}",
  method: "POST",
  operationId: "extension-dry-run-webhook",
};

/** Enable an ExtensionInstance. */
export const extensionEnableExtensionInstance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdActionsEnable.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/actions/enable",
  method: "POST",
  operationId: "extension-enable-extension-instance",
};

/** Generate an Extension secret for the given Extension. */
export const extensionGenerateExtensionSecret: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecret.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/secret",
  method: "POST",
  operationId: "extension-generate-extension-secret",
};

/** Generate a session token to transmit it to the extensions frontend fragment. */
export const extensionGenerateSessionToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdSessionsSessionId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/sessions/{sessionId}",
  method: "POST",
  operationId: "extension-generate-session-token",
};

/** Get all open extension orders for given customer */
export const extensionGetCustomerExtensionInstanceOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/extension-orders",
  method: "GET",
  operationId: "extension-get-customer-extension-instance-orders",
};

/** Get the Contract Strategy of an Extension Instance */
export const extensionGetExtensionInstanceContract: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/contract",
  method: "GET",
  operationId: "extension-get-extension-instance-contract",
};

/** Update or Create Contract for existing Extension Instances. */
export const extensionUpdateExtensionInstanceContract: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionInstancesExtensionInstanceIdContract.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extension-instances/{extensionInstanceId}/contract",
  method: "PUT",
  operationId: "extension-update-extension-instance-contract",
};

/** Get the ExtensionInstance of a specific customer and extension, if existing. */
export const extensionGetExtensionInstanceForCustomer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension-instance-for-customer",
};

/** Get the ExtensionInstance of a specific project and extension, if existing. */
export const extensionGetExtensionInstanceForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension-instance-for-project",
};

/** Get an Extension. */
export const extensionGetExtension: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extensions/{extensionId}",
  method: "GET",
  operationId: "extension-get-extension",
};

/** Get all open extension orders for given project */
export const extensionGetProjectExtensionInstanceOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdExtensionOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/extension-orders",
  method: "GET",
  operationId: "extension-get-project-extension-instance-orders",
};

/** Get the public key to verify the webhook signature. */
export const extensionGetPublicKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPublicKeysSerial.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/public-keys/{serial}",
  method: "GET",
  operationId: "extension-get-public-key",
};

/** Invalidate the given Extension secret immediately. */
export const extensionInvalidateExtensionSecret: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/secret/{extensionSecretId}",
  method: "DELETE",
  operationId: "extension-invalidate-extension-secret",
};

/** List all Webhook Executions. */
export const extensionListAllExtensionInstanceWebhookExecutions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdWebhookExecutions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/webhook-executions",
  method: "GET",
  operationId: "extension-list-all-extension-instance-webhook-executions",
};

/** List Contributors. */
export const extensionListContributors: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributors.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors",
  method: "GET",
  operationId: "extension-list-contributors",
};

/** List Extensions. */
export const extensionListExtensions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extensions",
  method: "GET",
  operationId: "extension-list-extensions",
};

/** List Extensions of own contributor. */
export const extensionListOwnExtensions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions",
  method: "GET",
  operationId: "extension-list-own-extensions",
};

/** Register an Extension. */
export const extensionRegisterExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensions.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions",
  method: "POST",
  operationId: "extension-register-extension",
};

/** List Scopes. */
export const extensionListScopes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextScopes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/scopes",
  method: "GET",
  operationId: "extension-list-scopes",
};

/** Order Extension with saved payment method */
export const extensionOrderExtension: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextExtensionsExtensionIdOrder.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/extensions/{extensionId}/order",
  method: "POST",
  operationId: "extension-order-extension",
};

/** Remove an asset of an extension. */
export const extensionRemoveAsset: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/assets/{assetRefId}",
  method: "DELETE",
  operationId: "extension-remove-asset",
};

/** Add a logo to an extension. */
export const extensionRequestLogoUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/logo",
  method: "POST",
  operationId: "extension-request-logo-upload",
};

/** Remove the logo of an extension. */
export const extensionRemoveLogo: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdLogo.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/logo",
  method: "DELETE",
  operationId: "extension-remove-logo",
};

/** Add an asset to an extension. */
export const extensionRequestAssetUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdAssets.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/assets",
  method: "POST",
  operationId: "extension-request-asset-upload",
};

/** Start the verification process of an Extension. */
export const extensionRequestExtensionVerification: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$204.Content.ApplicationJson>,
      204,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdVerificationProcess.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/verification-process",
  method: "POST",
  operationId: "extension-request-extension-verification",
};

/** Publish or withdraw an Extension. */
export const extensionSetExtensionPublishedState: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPublished.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/published",
  method: "PUT",
  operationId: "extension-set-extension-published-state",
};

/** Creates or Updates Pricing for an Extension. */
export const extensionUpdateExtensionPricing: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextContributorsContributorIdExtensionsExtensionIdPricing.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/contributors/{contributorId}/extensions/{extensionId}/pricing",
  method: "PUT",
  operationId: "extension-update-extension-pricing",
};

/** Create a File. */
export const fileCreateFile: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$406.Content.ApplicationJson>,
      406,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFiles.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/files",
  method: "POST",
  operationId: "file-create-file",
};

/** Get a File's meta. */
export const fileGetFileMeta: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdMeta.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/files/{fileId}/meta",
  method: "GET",
  operationId: "file-get-file-meta",
};

/** Get a FileUploadToken's rules. */
export const fileGetFileUploadTokenRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTokensFileUploadTokenRules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/file-upload-tokens/{fileUploadToken}/rules",
  method: "GET",
  operationId: "file-get-file-upload-token-rules",
};

/** Get a FileUploadType's rules. */
export const fileGetFileUploadTypeRules: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFileUploadTypesFileUploadTypeRules.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/file-upload-types/{fileUploadType}/rules",
  method: "GET",
  operationId: "file-get-file-upload-type-rules",
};

/** Get a File. */
export const fileGetFile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$200.Content.TextPlainBase64>,
      200,
      "text/plain;base64"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/files/{fileId}",
  method: "GET",
  operationId: "file-get-file",
};

/** Get a File with user-friendly url. */
export const fileGetFileWithName: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$200.Content.TextPlainBase64>,
      200,
      "text/plain;base64"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextFilesFileIdFileName.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/files/{fileId}/{fileName}",
  method: "GET",
  operationId: "file-get-file-with-name",
};

/** List Ingresses. */
export const ingressListIngresses: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses",
  method: "GET",
  operationId: "ingress-list-ingresses",
};

/** Create an Ingress. */
export const ingressCreateIngress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngresses.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses",
  method: "POST",
  operationId: "ingress-create-ingress",
};

/** Get an Ingress. */
export const ingressGetIngress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}",
  method: "GET",
  operationId: "ingress-get-ingress",
};

/** Delete an Ingress. */
export const ingressDeleteIngress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}",
  method: "DELETE",
  operationId: "ingress-delete-ingress",
};

/** Verifiy the ownership of an Ingress. */
export const ingressIngressVerifyOwnership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsVerifyOwnership.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}/actions/verify-ownership",
  method: "POST",
  operationId: "ingress-ingress-verify-ownership",
};

/** List Ingresses compatible with a certificate. */
export const ingressListIngressesCompatibleWithCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsListIngressesCompatibleWithCertificate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/actions/list-ingresses-compatible-with-certificate",
  method: "POST",
  operationId: "ingress-list-ingresses-compatible-with-certificate",
};

/** Request the ACME certificate issuance of an Ingress. */
export const ingressRequestIngressAcmeCertificateIssuance: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextIngressesIngressIdActionsRequestAcmeCertificateIssuance.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ingresses/{ingressId}/actions/request-acme-certificate-issuance",
  method: "POST",
  operationId: "ingress-request-ingress-acme-certificate-issuance",
};

/** Get details of an Invoice. */
export const invoiceDetail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextInvoicesInvoiceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/invoices/{invoiceId}",
  method: "GET",
  operationId: "invoice-detail",
};

/** Get InvoiceSettings of a Customer. */
export const invoiceGetDetailOfInvoiceSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invoice-settings",
  method: "GET",
  operationId: "invoice-get-detail-of-invoice-settings",
};

/** Update InvoiceSettings of a Customer. */
export const invoiceUpdateInvoiceSettings: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoiceSettings.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invoice-settings",
  method: "PUT",
  operationId: "invoice-update-invoice-settings",
};

/** Request an Access Token for the Invoice file. */
export const invoiceGetFileAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoicesInvoiceIdFileAccessToken.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invoices/{invoiceId}/file-access-token",
  method: "GET",
  operationId: "invoice-get-file-access-token",
};

/** List Invoices of a Customer. */
export const invoiceListCustomerInvoices: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdInvoices.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/invoices",
  method: "GET",
  operationId: "invoice-list-customer-invoices",
};

/** Get your LeadFyndr request. */
export const leadfyndrGetLeadFyndrProfileRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/lead-fyndr-profile-request",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile-request",
};

/** Create a new access request for LeadFyndr. */
export const leadfyndrCreateLeadFyndrAccessRequest: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileRequest.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/lead-fyndr-profile-request",
  method: "POST",
  operationId: "leadfyndr-create-lead-fyndr-access-request",
};

/** Create an export of unlocked leads for the given customerId. */
export const leadfyndrCreateLeadsExport: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$200.Content.TextCsv>,
      200,
      "text/csv"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExport.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads-export",
  method: "POST",
  operationId: "leadfyndr-create-leads-export",
};

/** Get cities in DACH. */
export const leadfyndrGetCities: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCities.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/cities",
  method: "GET",
  operationId: "leadfyndr-get-cities",
};

/** Get lead tariff options. How many leads did you unlock this month? */
export const leadfyndrGetLeadFyndrProfileTariffOptions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfileTariff.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/lead-fyndr-profile/tariff",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile-tariff-options",
};

/** Get your LeadFyndr profile. */
export const leadfyndrGetLeadFyndrProfile: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadFyndrProfile.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/lead-fyndr-profile",
  method: "GET",
  operationId: "leadfyndr-get-lead-fyndr-profile",
};

/** Get a simple lead. Use the unlocked route for more detail leads. */
export const leadfyndrGetLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeadsLeadId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/leads/{leadId}",
  method: "GET",
  operationId: "leadfyndr-get-lead",
};

/** Get unlocked leads export history for the given customerId. */
export const leadfyndrGetLeadsExportHistory: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsExports.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads-exports",
  method: "GET",
  operationId: "leadfyndr-get-leads-export-history",
};

/** Get a detail of a unlocked lead. Organisation can unlock leads. */
export const leadfyndrGetUnlockedLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads/{leadId}",
  method: "GET",
  operationId: "leadfyndr-get-unlocked-lead",
};

/** Unlock a lead for the given customerId. */
export const leadfyndrUnlockLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads/{leadId}",
  method: "POST",
  operationId: "leadfyndr-unlock-lead",
};

/** Get all leads. Use the unlocked routes for more lead details. */
export const leadfyndrListLeads: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdLeads.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/leads",
  method: "GET",
  operationId: "leadfyndr-list-leads",
};

/** Get all unlocked leads. Organisation can unlock leads. */
export const leadfyndrListUnlockedLeads: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeads.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads",
  method: "GET",
  operationId: "leadfyndr-list-unlocked-leads",
};

/** Reserve a unlocked lead for the given customerId. */
export const leadfyndrReserveUnlockedLead: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads/{leadId}/reservation",
  method: "POST",
  operationId: "leadfyndr-reserve-unlocked-lead",
};

/** Removes a reservation on a unlocked lead for the given customerId. */
export const leadfyndrRemoveUnlockedLeadReservation: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdUnlockedLeadsLeadIdReservation.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/unlocked-leads/{leadId}/reservation",
  method: "DELETE",
  operationId: "leadfyndr-remove-unlocked-lead-reservation",
};

/** Get a license. */
export const licenseGetLicense: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/licenses/{licenseId}",
  method: "GET",
  operationId: "license-get-license",
};

/** List Licenses belonging to a Project. */
export const licenseListLicensesForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdLicenses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/licenses",
  method: "GET",
  operationId: "license-list-licenses-for-project",
};

/** rotate a License's key, i.e. revoke the old and generate a new one. */
export const licenseRotateLicenseKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLicensesLicenseIdActionsRotateKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/licenses/{licenseId}/actions/rotate-key",
  method: "POST",
  operationId: "license-rotate-license-key",
};

/** Validate a License's key for a project. */
export const licenseValidateLicenseKeyForProject: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActionsValidateLicenseKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/actions/validate-license-key",
  method: "POST",
  operationId: "license-validate-license-key-for-project",
};

/** List DeliveryBoxes belonging to a Project. */
export const mailListDeliveryBoxes: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/delivery-boxes",
  method: "GET",
  operationId: "mail-list-delivery-boxes",
};

/** Create a DeliveryBox. */
export const mailCreateDeliverybox: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDeliveryBoxes.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/delivery-boxes",
  method: "POST",
  operationId: "mail-create-deliverybox",
};

/** List MailAddresses belonging to a Project. */
export const mailListMailAddresses: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mail-addresses",
  method: "GET",
  operationId: "mail-list-mail-addresses",
};

/** Create a MailAddress. */
export const mailCreateMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailAddresses.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mail-addresses",
  method: "POST",
  operationId: "mail-create-mail-address",
};

/** Get a DeliveryBox. */
export const mailGetDeliveryBox: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/delivery-boxes/{deliveryBoxId}",
  method: "GET",
  operationId: "mail-get-delivery-box",
};

/** Delete a DeliveryBox. */
export const mailDeleteDeliveryBox: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/delivery-boxes/{deliveryBoxId}",
  method: "DELETE",
  operationId: "mail-delete-delivery-box",
};

/** Get a MailAddress. */
export const mailGetMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}",
  method: "GET",
  operationId: "mail-get-mail-address",
};

/** Delete a MailAddress. */
export const mailDeleteMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}",
  method: "DELETE",
  operationId: "mail-delete-mail-address",
};

/** Disable the mail-archive of a MailAddress. */
export const mailDisableMailArchive: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdMailArchive.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/mail-archive",
  method: "DELETE",
  operationId: "mail-disable-mail-archive",
};

/** Get a Mail RateLimit. */
export const mailGetMailRateLimit: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimitsMailRateLimitId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-rate-limits/{mailRateLimitId}",
  method: "GET",
  operationId: "mail-get-mail-rate-limit",
};

/** List backups belonging to a MailAddress. */
export const mailListBackupsForMailAddress: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackups.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/backups",
  method: "GET",
  operationId: "mail-list-backups-for-mail-address",
};

/** List MailAddresses. */
export const mailListMailAddressesForUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddresses.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/",
  method: "GET",
  operationId: "mail-list-mail-addresses-for-user",
};

/** List Mail RateLimits. */
export const mailListMailRateLimits: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailRateLimits.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-rate-limits",
  method: "GET",
  operationId: "mail-list-mail-rate-limits",
};

/** List mail settings of a Project. */
export const mailListProjectMailSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMailSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/mail-settings",
  method: "GET",
  operationId: "mail-list-project-mail-settings",
};

/** Check if a Migration between two projects is possible. */
export const mailMigrationCheckMigrationIsPossible: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsPossibilityCheck.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-migrations/actions/possibility-check",
  method: "POST",
  operationId: "mail-migration-check-migration-is-possible",
};

/** Get a Migration. */
export const mailMigrationGetMigration: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsMigrationId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-migrations/{migrationId}",
  method: "GET",
  operationId: "mail-migration-get-migration",
};

/** List Migrations belonging to a Project in customer center or mStudio. */
export const mailMigrationListMigrations: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrations.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-migrations",
  method: "GET",
  operationId: "mail-migration-list-migrations",
};

/** Request a Mail Migration between two projects. */
export const mailMigrationRequestMailMigration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailMigrationsActionsRequest.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-migrations/actions/request",
  method: "POST",
  operationId: "mail-migration-request-mail-migration",
};

/** Recover emails for a MailAddress from a backup. */
export const mailRecoverMailAddressEmails: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdBackupsBackupIdRecovery.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/backups/{backupId}/recovery",
  method: "POST",
  operationId: "mail-recover-mail-address-emails",
};

/** Request a rate limit change for a MailAddress. */
export const mailRequestMailAddressRateLimitChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdActionsRequestRateLimitChange.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/actions/request-rate-limit-change",
  method: "POST",
  operationId: "mail-request-mail-address-rate-limit-change",
};

/** Update the description of a DeliveryBox. */
export const mailUpdateDeliveryBoxDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/delivery-boxes/{deliveryBoxId}/description",
  method: "PATCH",
  operationId: "mail-update-delivery-box-description",
};

/** Update the password of a DeliveryBox. */
export const mailUpdateDeliveryBoxPassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextDeliveryBoxesDeliveryBoxIdPassword.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/delivery-boxes/{deliveryBoxId}/password",
  method: "PATCH",
  operationId: "mail-update-delivery-box-password",
};

/** Update a MailAddress. */
export const mailUpdateMailAddressAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdAddress.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/address",
  method: "PATCH",
  operationId: "mail-update-mail-address-address",
};

/** Update the catch-all of a MailAddress. */
export const mailUpdateMailAddressCatchAll: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextMailAddressesMailAddressIdCatchAll.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/mail-addresses/{mailAddressId}/catch-all",
  method: "PATCH",
  operationId: "mail-update-mail-address-catch-all",
};

/** Get payment method details */
export const marketplaceCustomerGetPaymentMethod: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/payment-method",
  method: "GET",
  operationId: "marketplace-customer-get-payment-method",
};

/** Get the link to update the marketplace payment method */
export const marketplaceCustomerUpdatePaymentMethod: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdPaymentMethod.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/payment-method",
  method: "PUT",
  operationId: "marketplace-customer-update-payment-method",
};

/** List valid time zones. */
export const miscellaneousListTimeZones: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTimeZones.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/time-zones",
  method: "GET",
  operationId: "miscellaneous-list-time-zones",
};

/** Getting the subscription status of the subscription. */
export const newsletterGetInfo: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/newsletter-subscriptions/self",
  method: "GET",
  operationId: "newsletter-get-info",
};

/** Unsubscribe a user from the mStudio newsletter. */
export const newsletterUnsubscribeUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNewsletterSubscriptionsSelf.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/newsletter-subscriptions/self",
  method: "DELETE",
  operationId: "newsletter-unsubscribe-user",
};

/** Get the counts for unread notifications of the user. */
export const notificationsCountUnreadNotifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationUnreadCounts.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/notification-unread-counts",
  method: "GET",
  operationId: "notifications-count-unread-notifications",
};

/** List all unread notifications. */
export const notificationsListNotifications: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotifications.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/notifications",
  method: "GET",
  operationId: "notifications-list-notifications",
};

/** Mark all notifications as read. */
export const notificationsReadAllNotifications: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsActionsReadAll.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/notifications/actions/read-all",
  method: "POST",
  operationId: "notifications-read-all-notifications",
};

/** Mark notification as read. */
export const notificationsReadNotification: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextNotificationsNotificationIdStatus.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/notifications/{notificationId}/status",
  method: "PUT",
  operationId: "notifications-read-notification",
};

/** Get list of Orders. */
export const orderListOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/orders",
  method: "GET",
  operationId: "order-list-orders",
};

/** Create an Order. */
export const orderCreateOrder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrders.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/orders",
  method: "POST",
  operationId: "order-create-order",
};

/** Create TariffChange Order. */
export const orderCreateTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChanges.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/tariff-changes",
  method: "POST",
  operationId: "order-create-tariff-change",
};

/** Get Order for Customer. */
export const orderGetOrder: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrdersOrderId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/orders/{orderId}",
  method: "GET",
  operationId: "order-get-order",
};

/** Get list of Orders of a Customer. */
export const orderListCustomerOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/orders",
  method: "GET",
  operationId: "order-list-customer-orders",
};

/** Get list of Orders of a Project. */
export const orderListProjectOrders: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdOrders.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/orders",
  method: "GET",
  operationId: "order-list-project-orders",
};

/** Preview Order. */
export const orderPreviewOrder: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOrderPreviews.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/order-previews",
  method: "POST",
  operationId: "order-preview-order",
};

/** Preview TariffChange. */
export const orderPreviewTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Responses.$422.Content.ApplicationJson>,
      422,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextTariffChangePreviews.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/tariff-change-previews",
  method: "POST",
  operationId: "order-preview-tariff-change",
};

/** Get detailed performance data for a given domain and path. */
export const pageinsightsGetPerformanceData: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPageInsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/page-insights",
  method: "GET",
  operationId: "pageinsights-get-performance-data",
};

/** Get all data for a given strace. */
export const pageinsightsGetStraceData: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStracesStraceId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/straces/{straceId}",
  method: "GET",
  operationId: "pageinsights-get-strace-data",
};

/** List websites (specified as domain and path) from a project where performance data is available. */
export const pageinsightsListPerformanceDataForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdPageInsights.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/page-insights",
  method: "GET",
  operationId: "pageinsights-list-performance-data-for-project",
};

/** Schedule a strace measurement for a single http request. */
export const pageinsightsScheduleStrace: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStraces.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/straces",
  method: "POST",
  operationId: "pageinsights-schedule-strace",
};

/** Get a PasswordPolicy. */
export const passwordValidationGetPasswordPolicy: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPasswordPoliciesPasswordPolicy.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/password-policies/{passwordPolicy}",
  method: "GET",
  operationId: "password-validation-get-password-policy",
};

/** Accept a ProjectInvite. */
export const projectAcceptProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsAccept.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites/{projectInviteId}/actions/accept",
  method: "POST",
  operationId: "project-accept-project-invite",
};

/** List Invites belonging to a Project. */
export const projectListInvitesForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/invites",
  method: "GET",
  operationId: "project-list-invites-for-project",
};

/** Create a ProjectInvite. */
export const projectCreateProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdInvites.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/invites",
  method: "POST",
  operationId: "project-create-project-invite",
};

/** Create a Project belonging to a Server. */
export const projectCreateProject: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdProjects.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/projects",
  method: "POST",
  operationId: "project-create-project",
};

/** Decline a ProjectInvite. */
export const projectDeclineProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsDecline.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites/{projectInviteId}/actions/decline",
  method: "POST",
  operationId: "project-decline-project-invite",
};

/** Request a Project avatar upload. */
export const projectRequestProjectAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/avatar",
  method: "POST",
  operationId: "project-request-project-avatar-upload",
};

/** Delete a Project's avatar. */
export const projectDeleteProjectAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/avatar",
  method: "DELETE",
  operationId: "project-delete-project-avatar",
};

/** Get a ProjectInvite. */
export const projectGetProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites/{projectInviteId}",
  method: "GET",
  operationId: "project-get-project-invite",
};

/** Delete a ProjectInvite. */
export const projectDeleteProjectInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites/{projectInviteId}",
  method: "DELETE",
  operationId: "project-delete-project-invite",
};

/** Get a ProjectMembership */
export const projectGetProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-memberships/{projectMembershipId}",
  method: "GET",
  operationId: "project-get-project-membership",
};

/** Delete a ProjectMembership. */
export const projectDeleteProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-memberships/{projectMembershipId}",
  method: "DELETE",
  operationId: "project-delete-project-membership",
};

/** Update a ProjectMembership. */
export const projectUpdateProjectMembership: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMembershipsProjectMembershipId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-memberships/{projectMembershipId}",
  method: "PATCH",
  operationId: "project-update-project-membership",
};

/** Get a Project. */
export const projectGetProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}",
  method: "GET",
  operationId: "project-get-project",
};

/** Delete a Project. */
export const projectDeleteProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}",
  method: "DELETE",
  operationId: "project-delete-project",
};

/** Request a Server avatar upload. */
export const projectRequestServerAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/avatar",
  method: "POST",
  operationId: "project-request-server-avatar-upload",
};

/** Delete a Server's avatar. */
export const projectDeleteServerAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/avatar",
  method: "DELETE",
  operationId: "project-delete-server-avatar",
};

/** List directories belonging to a Project. */
export const projectFileSystemGetDirectories: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDirectories.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/filesystem-directories",
  method: "GET",
  operationId: "project-file-system-get-directories",
};

/** Get a Project directory filesystem usage. */
export const projectFileSystemGetDiskUsage: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemDiskUsage.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/filesystem-disk-usage",
  method: "GET",
  operationId: "project-file-system-get-disk-usage",
};

/** Get a Project file's content. */
export const projectFileSystemGetFileContent: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$200.Content.ApplicationOctetStream>,
      200,
      "application/octet-stream"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFileContent.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/filesystem-file-content",
  method: "GET",
  operationId: "project-file-system-get-file-content",
};

/** Get a Project's file/filesystem authorization token. */
export const projectFileSystemGetJwt: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdJwt.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/jwt",
  method: "GET",
  operationId: "project-file-system-get-jwt",
};

/** Get a Project file's information. */
export const projectFileSystemListFiles: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$502.Content.ApplicationJson>,
      502,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.$503.Content.ApplicationJson>,
      503,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdFilesystemFiles.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/filesystem-files",
  method: "GET",
  operationId: "project-file-system-list-files",
};

/** Get a ProjectInvite by token. */
export const projectGetProjectTokenInvite: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectTokenInvite.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-token-invite",
  method: "GET",
  operationId: "project-get-project-token-invite",
};

/** Get the executing user's membership in a Project. */
export const projectGetSelfMembershipForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMembershipsSelf.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/memberships/self",
  method: "GET",
  operationId: "project-get-self-membership-for-project",
};

/** Get a Server. */
export const projectGetServer: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}",
  method: "GET",
  operationId: "project-get-server",
};

/** List Projects belonging to a Customer. */
export const projectListCustomerProjects: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCustomersCustomerIdProjects.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/customers/{customerId}/projects",
  method: "GET",
  operationId: "project-list-customer-projects",
};

/** List Memberships belonging to a Project. */
export const projectListMembershipsForProject: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/memberships",
  method: "GET",
  operationId: "project-list-memberships-for-project",
};

/** Get the activities of a project. */
export const projectListProjectActivities: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdActivities.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/activities",
  method: "GET",
  operationId: "project-list-project-activities",
};

/** List ProjectInvites belonging to the executing user. */
export const projectListProjectInvites: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvites.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites",
  method: "GET",
  operationId: "project-list-project-invites",
};

/** List ProjectMemberships belonging to the executing user. */
export const projectListProjectMemberships: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectMemberships.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-memberships",
  method: "GET",
  operationId: "project-list-project-memberships",
};

/** List Projects belonging to the executing user. */
export const projectListProjects: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjects.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects",
  method: "GET",
  operationId: "project-list-projects",
};

/** List Servers belonging to the executing user. */
export const projectListServers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers",
  method: "GET",
  operationId: "project-list-servers",
};

/** Resend the mail for a ProjectInvite. */
export const projectResendProjectInviteMail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectInvitesProjectInviteIdActionsResend.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/project-invites/{projectInviteId}/actions/resend",
  method: "POST",
  operationId: "project-resend-project-invite-mail",
};

/** Update a Project's description. */
export const projectUpdateProjectDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/description",
  method: "PATCH",
  operationId: "project-update-project-description",
};

/** Update a Servers's description. */
export const projectUpdateServerDescription: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdDescription.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/description",
  method: "PATCH",
  operationId: "project-update-server-description",
};

/** Register a tariff change for a legacy tariff. */
export const relocationCreateLegacyTariffChange: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLegacyTariffChange.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/legacy-tariff-change",
  method: "POST",
  operationId: "relocation-create-legacy-tariff-change",
};

/** Relocate an external Project to mittwald. */
export const relocationCreateRelocation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRelocation.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/relocation",
  method: "POST",
  operationId: "relocation-create-relocation",
};

/** Get all SFTPUsers for a Project. */
export const sftpUserListSftpUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/sftp-users",
  method: "GET",
  operationId: "sftp-user-list-sftp-users",
};

/** Create an SFTPUser for a Project. */
export const sftpUserCreateSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSftpUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/sftp-users",
  method: "POST",
  operationId: "sftp-user-create-sftp-user",
};

/** Get an SFTPUser. */
export const sftpUserGetSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/sftp-users/{sftpUserId}",
  method: "GET",
  operationId: "sftp-user-get-sftp-user",
};

/** Delete an SFTPUser. */
export const sftpUserDeleteSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/sftp-users/{sftpUserId}",
  method: "DELETE",
  operationId: "sftp-user-delete-sftp-user",
};

/** Update an SFTPUser. */
export const sftpUserUpdateSftpUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSftpUsersSftpUserId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/sftp-users/{sftpUserId}",
  method: "PATCH",
  operationId: "sftp-user-update-sftp-user",
};

/** Get all SSHUsers for a Project. */
export const sshUserListSshUsers: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ssh-users",
  method: "GET",
  operationId: "ssh-user-list-ssh-users",
};

/** Create an SSHUser for a Project. */
export const sshUserCreateSshUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdSshUsers.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/ssh-users",
  method: "POST",
  operationId: "ssh-user-create-ssh-user",
};

/** Get an SSHUser. */
export const sshUserGetSshUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ssh-users/{sshUserId}",
  method: "GET",
  operationId: "ssh-user-get-ssh-user",
};

/** Delete an SSHUser. */
export const sshUserDeleteSshUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ssh-users/{sshUserId}",
  method: "DELETE",
  operationId: "ssh-user-delete-ssh-user",
};

/** Update an SSHUser. */
export const sshUserUpdateSshUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextSshUsersSshUserId.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/ssh-users/{sshUserId}",
  method: "PATCH",
  operationId: "ssh-user-update-ssh-user",
};

/** Check the replacement of a Certificate. */
export const sslCheckReplaceCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateIdActionsCheckReplaceCertificate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificates/{certificateId}/actions/check-replace-certificate",
  method: "POST",
  operationId: "ssl-check-replace-certificate",
};

/** List CertificateRequests belonging to a Project or an Ingress. */
export const sslListCertificateRequests: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate-requests",
  method: "GET",
  operationId: "ssl-list-certificate-requests",
};

/** Create a CertificateRequest. */
export const sslCreateCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequests.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate-requests",
  method: "POST",
  operationId: "ssl-create-certificate-request",
};

/** Delete a CertificateRequest. */
export const sslDeleteCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestCertificateRequestId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate-request/{certificateRequestId}",
  method: "DELETE",
  operationId: "ssl-delete-certificate-request",
};

/** Delete a Certificate. */
export const sslDeleteCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateCertificateId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate/{certificateId}",
  method: "DELETE",
  operationId: "ssl-delete-certificate",
};

/** Get a CertificateRequest. */
export const sslGetCertificateRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate-requests/{certificateRequestId}",
  method: "GET",
  operationId: "ssl-get-certificate-request",
};

/** Get a Certificate. */
export const sslGetCertificate: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificates/{certificateId}",
  method: "GET",
  operationId: "ssl-get-certificate",
};

/** Update a Certificate. */
export const sslReplaceCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificatesCertificateId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificates/{certificateId}",
  method: "PUT",
  operationId: "ssl-replace-certificate",
};

/** List Certificates belonging to a Project or an Ingress. */
export const sslListCertificates: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificates.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificates",
  method: "GET",
  operationId: "ssl-list-certificates",
};

/** Update the certificate of a CertificateRequest. */
export const sslSetCertificateRequestCertificate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextCertificateRequestsCertificateRequestIdCertificate.Patch.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/certificate-requests/{certificateRequestId}/certificate",
  method: "PATCH",
  operationId: "ssl-set-certificate-request-certificate",
};

/** Get storage space Statistics belonging to a Project. */
export const storagespaceGetProjectStatistics: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceStatistics.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/storage-space-statistics",
  method: "GET",
  operationId: "storagespace-get-project-statistics",
};

/** Get storage space Statistics belonging to a Server. */
export const storagespaceGetServerStatistics: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceStatistics.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/storage-space-statistics",
  method: "GET",
  operationId: "storagespace-get-server-statistics",
};

/** Update a Project's storage space notification threshold. */
export const storagespaceReplaceProjectNotificationThreshold: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextProjectsProjectIdStorageSpaceNotificationThreshold.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/projects/{projectId}/storage-space-notification-threshold",
  method: "PUT",
  operationId: "storagespace-replace-project-notification-threshold",
};

/** Update a Server's storage space notification threshold. */
export const storagespaceReplaceServerNotificationThreshold: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Responses.$500.Content.ApplicationJson>,
      500,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextServersServerIdStorageSpaceNotificationThreshold.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/servers/{serverId}/storage-space-notification-threshold",
  method: "PUT",
  operationId: "storagespace-replace-server-notification-threshold",
};

/** Add phone number and start verification process. */
export const userAddPhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/phone",
  method: "POST",
  operationId: "user-add-phone-number",
};

/** Remove phone number. */
export const userRemovePhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdPhone.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/phone",
  method: "DELETE",
  operationId: "user-remove-phone-number",
};

/** Validate your second factor. */
export const userAuthenticateMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.$408.Content.ApplicationJson>,
      408,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/authenticate-mfa",
  method: "POST",
  operationId: "user-authenticate-mfa",
};

/** Authenticate yourself to get an access token. */
export const userAuthenticate: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticate.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/authenticate",
  method: "POST",
  operationId: "user-authenticate",
};

/** Authenticate an user with an access token retrieval key. */
export const userAuthenticateWithAccessTokenRetrievalKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextAuthenticateTokenRetrievalKey.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/authenticate-token-retrieval-key",
  method: "POST",
  operationId: "user-authenticate-with-access-token-retrieval-key",
};

/** Get your verified Email-Address. */
export const userGetOwnEmail: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/email",
  method: "GET",
  operationId: "user-get-own-email",
};

/** Change your Email-Address. */
export const userChangeEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmail.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/email",
  method: "PUT",
  operationId: "user-change-email",
};

/** Change your password. */
export const userChangePassword: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPassword.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/password",
  method: "PUT",
  operationId: "user-change-password",
};

/** Get your current multi factor auth status. */
export const userGetMfaStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/mfa",
  method: "GET",
  operationId: "user-get-mfa-status",
};

/** Reset RecoveryCodes for MFA. */
export const userResetRecoverycodes: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/mfa",
  method: "PUT",
  operationId: "user-reset-recoverycodes",
};

/** Confirm Multi Factor Authentication. */
export const userConfirmMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/mfa",
  method: "POST",
  operationId: "user-confirm-mfa",
};

/** Disable Multi Factor Authentication. */
export const userDisableMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsMfa.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/mfa",
  method: "DELETE",
  operationId: "user-disable-mfa",
};

/** Confirm password reset. */
export const userConfirmPasswordReset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordConfirmReset.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/password/confirm-reset",
  method: "POST",
  operationId: "user-confirm-password-reset",
};

/** List all of your ApiTokens. */
export const userListApiTokens: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/api-tokens",
  method: "GET",
  operationId: "user-list-api-tokens",
};

/** Create a new ApiToken. */
export const userCreateApiToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokens.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/api-tokens",
  method: "POST",
  operationId: "user-create-api-token",
};

/** Submit your user feedback. */
export const userCreateFeedback: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Responses.$401.Content.ApplicationJson>,
      401,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfFeedback.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/feedback",
  method: "POST",
  operationId: "user-create-feedback",
};

/** Get your stored ssh-keys. */
export const userListSshKeys: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/ssh-keys",
  method: "GET",
  operationId: "user-list-ssh-keys",
};

/** Store a new ssh-key. */
export const userCreateSshKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeys.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/ssh-keys",
  method: "POST",
  operationId: "user-create-ssh-key",
};

/** Get a specific ApiToken. */
export const userGetApiToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/api-tokens/{apiTokenId}",
  method: "GET",
  operationId: "user-get-api-token",
};

/** Update an existing `ApiToken`. */
export const userEditApiToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/api-tokens/{apiTokenId}",
  method: "PUT",
  operationId: "user-edit-api-token",
};

/** Deletes an ApiToken. */
export const userDeleteApiToken: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfApiTokensApiTokenId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/api-tokens/{apiTokenId}",
  method: "DELETE",
  operationId: "user-delete-api-token",
};

/** Get a specific stored ssh-key. */
export const userGetSshKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/ssh-keys/{sshKeyId}",
  method: "GET",
  operationId: "user-get-ssh-key",
};

/** Edit a stored ssh-key. */
export const userEditSshKey: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/ssh-keys/{sshKeyId}",
  method: "PUT",
  operationId: "user-edit-ssh-key",
};

/** Remove a ssh-key. */
export const userDeleteSshKey: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSshKeysSshKeyId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/ssh-keys/{sshKeyId}",
  method: "DELETE",
  operationId: "user-delete-ssh-key",
};

/** Delete your account and all your personal data. */
export const userDeleteUser: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.$200.Content.Empty>,
      200,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.$202.Content.ApplicationJson>,
      202,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelf.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self",
  method: "DELETE",
  operationId: "user-delete-user",
};

/** Check status of the current session. */
export const userGetCurrentSessionStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsCurrentStatus.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions/current/status",
  method: "GET",
  operationId: "user-get-current-session-status",
};

/** The timestamp of your latest password change. */
export const userGetPasswordUpdatedAt: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsPasswordUpdatedAt.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/password-updated-at",
  method: "GET",
  operationId: "user-get-password-updated-at",
};

/** Get personalized settings. */
export const userGetPersonalizedSettings: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/settings",
  method: "GET",
  operationId: "user-get-personalized-settings",
};

/** Update personalized GUI settings. */
export const userUpdatePersonalizedSettings: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdSettings.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/settings",
  method: "PUT",
  operationId: "user-update-personalized-settings",
};

/** Get poll settings for the specified user. */
export const userGetPollStatus: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/poll-settings/{userId}",
  method: "GET",
  operationId: "user-get-poll-status",
};

/** Store new or update poll settings. */
export const userPostPollStatus: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextPollSettingsUserId.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/poll-settings/{userId}",
  method: "POST",
  operationId: "user-post-poll-status",
};

/** Get a specific session. */
export const userGetSession: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions/{tokenId}",
  method: "GET",
  operationId: "user-get-session",
};

/** Terminate a specific Session. */
export const userTerminateSession: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessionsTokenId.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions/{tokenId}",
  method: "DELETE",
  operationId: "user-terminate-session",
};

/** Get profile information for a user. */
export const userGetUser: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Responses.$403.Content.ApplicationJson>,
      403,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}",
  method: "GET",
  operationId: "user-get-user",
};

/** Change personal information. */
export const userUpdatePersonalInformation: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserId.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}",
  method: "PUT",
  operationId: "user-update-personal-information",
};

/** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa. */
export const userInitMfa: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsInitMfa.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/init-mfa",
  method: "POST",
  operationId: "user-init-mfa",
};

/** Initialize password reset process. */
export const userInitPasswordReset: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsActionsInitPasswordReset.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/actions/init-password-reset",
  method: "POST",
  operationId: "user-init-password-reset",
};

/** Submitted feedback of the given user. */
export const userListFeedback: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdFeedback.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/feedback",
  method: "GET",
  operationId: "user-list-feedback",
};

/** List all sessions. */
export const userListSessions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions",
  method: "GET",
  operationId: "user-list-sessions",
};

/** Refresh a session. */
export const userRefreshSession: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions",
  method: "PUT",
  operationId: "user-refresh-session",
};

/** Terminate all sessions, except the current session. */
export const userTerminateAllSessions: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfSessions.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/sessions",
  method: "DELETE",
  operationId: "user-terminate-all-sessions",
};

/** Terminate session and invalidate access token. */
export const userLogout: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextLogout.Put.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/logout",
  method: "PUT",
  operationId: "user-logout",
};

/** Obtain authorization from the resource owner. */
export const userOauthGetAuthorization: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Responses.$302.Content.Empty>,
      302,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Authorize.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/oauth2/authorize",
  method: "GET",
  operationId: "user-oauth-get-authorization",
};

/** Retrieve Access Token from Authorization Code. */
export const userOauthRetrieveAccessToken: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextOauth2Token.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/oauth2/token",
  method: "POST",
  operationId: "user-oauth-retrieve-access-token",
};

/** Register with email and password. */
export const userRegister: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Responses.$201.Content.ApplicationJson>,
      201,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextRegister.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/register",
  method: "POST",
  operationId: "user-register",
};

/** Request a new avatar image upload. */
export const userRequestAvatarUpload: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/avatar",
  method: "POST",
  operationId: "user-request-avatar-upload",
};

/** Remove Avatar. */
export const userRemoveAvatar: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdAvatar.Delete.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/avatar",
  method: "DELETE",
  operationId: "user-remove-avatar",
};

/** Resend the Email-Address verification email. */
export const userResendVerificationEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$412.Content.ApplicationJson>,
      412,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsResendEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/email/actions/resend-email",
  method: "POST",
  operationId: "user-resend-verification-email",
};

/** Request a support code. */
export const userSupportCodeRequest: OpenAPIOperation<
  RequestType<
    Simplify<null>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsSupportCode.Get.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/support-code",
  method: "GET",
  operationId: "user-support-code-request",
};

/** Verify an added Email-Address. */
export const userVerifyEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersSelfCredentialsEmailActionsVerifyEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/self/credentials/email/actions/verify-email",
  method: "POST",
  operationId: "user-verify-email",
};

/** Verify phone number. */
export const userVerifyPhoneNumber: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.$204.Content.Empty>,
      204,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.$409.Content.ApplicationJson>,
      409,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextUsersUserIdActionsVerifyPhone.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/users/{userId}/actions/verify-phone",
  method: "POST",
  operationId: "user-verify-phone-number",
};

/** Verify your registration. */
export const userVerifyRegistration: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Responses.$404.Content.ApplicationJson>,
      404,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextVerifyRegistration.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/verify-registration",
  method: "POST",
  operationId: "user-verify-registration",
};

/** Check if an email is from mittwald. */
export const verificationDetectPhishingEmail: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Responses.$400.Content.ApplicationJson>,
      400,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsDetectPhishingEmail.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/actions/detect-phishing-email",
  method: "POST",
  operationId: "verification-detect-phishing-email",
};

/** Check if an address exists. */
export const verificationVerifyAddress: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyAddress.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/actions/verify-address",
  method: "POST",
  operationId: "verification-verify-address",
};

/** Check if a company exists. */
export const verificationVerifyCompany: OpenAPIOperation<
  RequestType<
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Parameters.RequestBody>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Parameters.Path>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Parameters.Query>,
    Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Parameters.Header>
  >,
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Responses.$200.Content.ApplicationJson>,
      200,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Responses.$412.Content.Empty>,
      412,
      "empty"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Responses.$429.Content.ApplicationJson>,
      429,
      "application/json"
    >
  | Response<
      Simplify<MittwaldAPIV3Next.Paths.V3NextActionsVerifyCompany.Post.Responses.Default.Content.ApplicationJson>,
      "default",
      "application/json"
    >
> = {
  path: "/v3-next/actions/verify-company",
  method: "POST",
  operationId: "verification-verify-company",
};
