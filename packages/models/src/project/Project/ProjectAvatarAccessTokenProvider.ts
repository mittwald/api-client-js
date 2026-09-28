import type { FileAccessTokenProvider } from "../../file/index.js";
import type { Project } from "../internal.js";

import { config } from "../../config/index.js";

export class ProjectAvatarAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly project: Project;

  public constructor(project: Project) {
    this.project = project;
  }

  public createUploadToken() {
    return config.behaviors.project.createAvatarUploadToken(this.project.id);
  }
}
