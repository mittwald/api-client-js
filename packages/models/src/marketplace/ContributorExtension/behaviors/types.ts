import type { MarketplaceContext } from "../../ExtensionInstance/types.js";
import type { FileUploadTokenData } from "../../../file/index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  ContributorExtensionUpdatePricingRequestData,
  ContributorExtensionUpdateRequestData,
  ContributorExtensionListQueryData,
  MarketplaceGenerateSecretResponse,
  ContributorExtensionListItemData,
  UpdatePricingResponseData,
  ContributorExtensionData,
} from "../types.js";

export interface ContributorExtensionBehaviors {
  updatePricing: (
    extensionId: string,
    contributorId: string,
    data: ContributorExtensionUpdatePricingRequestData,
  ) => Promise<UpdatePricingResponseData>;

  list: (
    contributorId: string,
    query: ContributorExtensionListQueryData,
  ) => Promise<QueryResponseData<ContributorExtensionListItemData>>;

  createAssetUploadToken: (
    contributorId: string,
    extensionId: string,
    assetType: "image" | "video",
  ) => Promise<FileUploadTokenData>;

  update: (
    contributorId: string,
    extensionId: string,
    data: ContributorExtensionUpdateRequestData,
  ) => Promise<void>;

  generateExtensionSecret: (
    contributorId: string,
    extensionId: string,
  ) => Promise<MarketplaceGenerateSecretResponse>;

  updateContext: (
    context: MarketplaceContext,
    contributorId: string,
    extensionId: string,
  ) => Promise<void>;

  deleteExtensionSecret: (
    contributorId: string,
    extensionId: string,
    secretId: string,
  ) => Promise<void>;

  deleteExtensionAsset: (
    contributorId: string,
    extensionId: string,
    assetId: string,
  ) => Promise<void>;

  find: (
    contributorId: string,
    extensionId: string,
  ) => Promise<ContributorExtensionData | undefined>;

  createLogoUploadToken: (
    contributorId: string,
    extensionId: string,
  ) => Promise<FileUploadTokenData>;

  unpublish: (
    contributorId: string,
    extensionId: string,
    reason: string,
  ) => Promise<void>;

  requestVerification: (
    contributorId: string,
    extensionId: string,
  ) => Promise<void>;

  create: (contributorId: string, name: string) => Promise<{ id: string }>;

  publish: (contributorId: string, extensionId: string) => Promise<void>;

  delete: (contributorId: string, extensionId: string) => Promise<void>;

  getPossibleScopes: () => Promise<{ name: string }[]>;
}
