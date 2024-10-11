import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { MailSettingsData } from "./types.js";
import { classes } from "polytype";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";

export class MailSettings extends ReferenceModel {
  public readonly project: Project;

  public constructor(projectId: string) {
    super(projectId);
    this.project = Project.ofId(projectId);
  }
  public static ofId(projectId: string): MailSettings {
    return new MailSettings(projectId);
  }

  public static find = provideReact(
    async (projectId: string): Promise<MailSettings | undefined> => {
      const data = await config.behaviors.mailSettings.find(projectId);
      if (data !== undefined) {
        return new MailSettingsDetailed(projectId, data);
      }
    },
  );

  public static get = provideReact(
    async (projectId: string): Promise<MailSettings> => {
      const settings = await this.find(projectId);
      assertObjectFound(settings, this, projectId);
      return settings;
    },
  );
}

export class MailSettingsDetailed extends classes(
  DataModel<MailSettingsData>,
  MailSettings,
) {
  public constructor(projectId: string, data: MailSettingsData) {
    super([data], [projectId]);
  }
}
