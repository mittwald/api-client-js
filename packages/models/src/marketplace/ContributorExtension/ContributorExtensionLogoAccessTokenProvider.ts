import type { ContributorExtension } from "./ContributorExtension";
import type { FileAccessTokenProvider } from "../../file";

import { config } from "../../config";

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
