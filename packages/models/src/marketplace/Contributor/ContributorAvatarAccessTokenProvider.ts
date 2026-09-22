import type { FileAccessTokenProvider } from "../../file/index.js";
import type { Contributor } from "./Contributor.js";

import { config } from "../../config/index.js";

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
