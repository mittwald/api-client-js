import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";
import { Customer } from "../../customer/index.js";

export type ExtensionInstanceData =
  MittwaldAPIV2.Operations.ExtensionGetExtensionInstance.ResponseData;

export type ExtensionInstanceListItemData =
  MittwaldAPIV2.Operations.ExtensionListExtensionInstances.ResponseData[number];

export type ExtensionInstanceListQueryData =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Get.Parameters.Query;

export type ExtensionInstanceListQueryModelData = Omit<
  ExtensionInstanceListQueryData,
  "context" | "contextId"
> & {
  context: Project | Customer;
};

export type ExtensionInstanceCreateRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstances.Post.Parameters.RequestBody;

export type ExtensionInstanceConsentToScopesRequestData =
  MittwaldAPIV2.Paths.V2ExtensionInstancesExtensionInstanceIdScopes.Patch.Parameters.RequestBody;
