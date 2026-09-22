import type { ContributorExtension } from "./ContributorExtension";
import type { FileAccessTokenProvider } from "../../file";

import { config } from "../../config";

export class ContributorExtensionAssetAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly contributorExtension: ContributorExtension;

  public constructor(contributorExtension: ContributorExtension) {
    this.contributorExtension = contributorExtension;
  }

  public async createAssetUploadToken(assetType: "image" | "video") {
    return await config.behaviors.contributorExtension.createAssetUploadToken(
      this.contributorExtension.contributorId,
      this.contributorExtension.id,
      assetType,
    );
  }

  public async createLogoUploadToken() {
    return await config.behaviors.contributorExtension.createLogoUploadToken(
      this.contributorExtension.contributorId,
      this.contributorExtension.id,
    );
  }
}
