import type {
  ContainerVolumeRelationFormValues,
  ContainerVolumeRelationData,
  ImageMetaVolumeData,
} from "./types.js";

import { ListDataModel, DataModel } from "../../base/index.js";

export class ContainerVolumeRelation extends DataModel<ContainerVolumeRelationData> {
  public readonly combinedName?: string;
  public readonly containerPath?: string;
  public readonly projectPath?: string;
  public readonly type?: "directory" | "volume";
  public readonly volume?: string;
  public readonly volumeCreationRequired: boolean;

  public constructor(data: ContainerVolumeRelationData) {
    super(data);
    const [prefix, suffix] = data.split(":");
    const type =
      prefix && prefix.startsWith("/") && suffix ? "directory" : "volume";
    this.type = type;
    this.volume =
      type === "volume" && suffix?.trim() ? prefix?.trim() : undefined;
    this.projectPath =
      type === "directory" && suffix?.trim() ? prefix?.trim() : "/";
    this.containerPath = suffix?.trim() ?? prefix?.trim();
    this.combinedName =
      this.type === "directory"
        ? `${this.projectPath}-${this.containerPath}`
        : `${this.volume}-${this.containerPath}`;
    this.volumeCreationRequired =
      this.volume === "createNewVolume" && this.type === "volume";
  }

  public static fromFormValues(
    values: ContainerVolumeRelationFormValues,
  ): ContainerVolumeRelation {
    return new ContainerVolumeRelation(
      values.type === "volume"
        ? `${values.volume.trim()}:${values.containerPath.trim()}`
        : `${values.projectPath.trim()}:${values.containerPath.trim()}`,
    );
  }
}

export class ContainerVolumeRelationList extends ListDataModel<ContainerVolumeRelation> {
  public constructor(relations: ContainerVolumeRelationData[]) {
    super(
      relations.map((r) => new ContainerVolumeRelation(r)),
      relations.length,
    );
  }

  public static fromImageMeta(
    meta: ImageMetaVolumeData[],
  ): ContainerVolumeRelationList {
    return ContainerVolumeRelationList.fromRelations(
      meta.map(
        (m) => new ContainerVolumeRelation(`createNewVolume:${m.volume}`),
      ),
    );
  }

  public static fromRelations(
    relations: ContainerVolumeRelation[],
  ): ContainerVolumeRelationList {
    return new ContainerVolumeRelationList(relations.map((r) => r.data));
  }

  public toStringArray(): string[] {
    return this.items.map((v) => v.data);
  }
}
