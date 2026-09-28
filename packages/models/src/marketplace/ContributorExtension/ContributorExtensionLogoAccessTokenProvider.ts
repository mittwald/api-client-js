import type { ContributorExtension } from "./ContributorExtension.js";
import type { FileAccessTokenProvider } from "../../file/index.js";

import { config } from "../../config/index.js";

export class ContributorExtensionLogoAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly contributorExtension: ContributorExtension;

  public constructor(contributorExtension: ContributorExtension) {
    this.contributorExtension = contributorExtension;
  }

  public async createUploadToken() {
    return await config.behaviors.contributorExtension.createLogoUploadToken(
      this.contributorExtension.contributorId,
      this.contributorExtension.id,
    );
  }
}
