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
    async (project: Project): Promise<MailSettings | undefined> => {
      const data = await config.behaviors.mailSettings.find(project.id);
      if (data !== undefined) {
        return new MailSettingsDetailed(project, data);
      }
    },
  );

  public static get = provideReact(
    async (project: Project): Promise<MailSettings> => {
      const settings = await this.find(project);
      assertObjectFound(settings, this, project);
      return settings;
    },
  );
}

export class MailSettingsDetailed extends classes(
  DataModel<MailSettingsData>,
  MailSettings,
) {
  public constructor(project: Project, data: MailSettingsData) {
    super([data], [project.id]);
  }
}
