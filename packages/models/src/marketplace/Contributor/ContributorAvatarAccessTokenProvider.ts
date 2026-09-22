import type { FileAccessTokenProvider } from "../../file";
import type { Contributor } from "./Contributor";

import { config } from "../../config";

export class ContributorAvatarAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly contributor: Contributor;

  public constructor(contributor: Contributor) {
    this.contributor = contributor;
  }

  public async createUploadToken() {
    return await config.behaviors.contributor.createAvatarUploadToken(
      this.contributor.id,
    );
  }
}
