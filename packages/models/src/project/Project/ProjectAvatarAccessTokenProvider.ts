import type { FileAccessTokenProvider } from "../../file";
import type { Project } from "../internal";

import { config } from "../../config";

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
