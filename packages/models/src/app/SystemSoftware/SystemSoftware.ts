import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import {
  SystemSoftwareData,
  SystemSoftwareListItemData,
  SystemSoftwareNames,
} from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class SystemSoftware extends ReferenceModel {
  public static ofId(id: string): SystemSoftware {
    return new SystemSoftware(id);
  }

  public static find = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed | undefined> => {
      const data = await config.behaviors.systemSoftware.find(id);

      if (data) {
        return new SystemSoftwareDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<SystemSoftwareDetailed> => {
      const systemSoftware = await this.find(id);
      assertObjectFound(systemSoftware, this, id);
      return systemSoftware;
    },
  );

  public getDetailed = provideReact(() =>
    SystemSoftware.get(this.id),
  ) as AsyncResourceVariant<SystemSoftwareDetailed, []>;

  public static list = provideReact(
    async (): Promise<Readonly<Array<SystemSoftwareListItem>>> => {
      const data = await config.behaviors.systemSoftware.list();

      return Object.freeze(data.map((d) => new SystemSoftwareListItem(d)));
    },
  );

  public static async findByName(
    name: SystemSoftwareNames,
  ): Promise<SystemSoftwareListItem | undefined> {
    const systemSoftwareList = await SystemSoftware.list();

    return systemSoftwareList.find((s) => s.data.name === name);
  }

  /* ToDo: Activate when SystemSoftwareVersionModel is merged (https://github.com/mittwald/api-client-js/pull/73)
  public async listVersionsInRange(versionRange: string):Promise<SystemSoftwareVersionListItem[]> {
    return SystemSoftwareVersion.list(this.id, { versionRange });
  }
  */
}

class SystemSoftwareCommon extends classes(
  DataModel<SystemSoftwareData | SystemSoftwareListItemData>,
  SystemSoftware,
) {
  public constructor(data: SystemSoftwareData | SystemSoftwareListItemData) {
    super([data], [data.id]);
  }

  public getFullName(): string {
    switch (this.data.name) {
      case SystemSoftwareNames.composer:
        return "Composer";
      case SystemSoftwareNames.curl:
        return "curl";
      case SystemSoftwareNames.ghostscript:
        return "Ghostscript";
      case SystemSoftwareNames.git:
        return "Git";
      case SystemSoftwareNames.graphicsmagick:
        return "GraphicsMagick";
      case SystemSoftwareNames.imagemagick:
        return "ImageMagick";
      case SystemSoftwareNames.midnightCommander:
        return "Midnight Commander";
      case SystemSoftwareNames.mysql:
        return "MySQL";
      case SystemSoftwareNames.nano:
        return "nano";
      case SystemSoftwareNames.node:
        return "Node.js";
      case SystemSoftwareNames.pdftools:
        return "PDF-Tools";
      case SystemSoftwareNames.perl:
        return "Perl";
      case SystemSoftwareNames.php:
        return "PHP";
      case SystemSoftwareNames.python:
        return "Python";
      case SystemSoftwareNames.rediscli:
        return "Redis CLI";
      case SystemSoftwareNames.webp:
        return "WebP";
      case SystemSoftwareNames.wpcli:
        return "WP-CLI";
      case SystemSoftwareNames.zip:
        return "ZIP";
      default:
        return this.data.name;
    }
  }
}

export class SystemSoftwareDetailed extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareData>,
) {
  public constructor(data: SystemSoftwareData) {
    super([data], [data]);
  }
}

export class SystemSoftwareListItem extends classes(
  SystemSoftwareCommon,
  DataModel<SystemSoftwareListItemData>,
) {
  public constructor(data: SystemSoftwareListItemData) {
    super([data], [data]);
  }
}
