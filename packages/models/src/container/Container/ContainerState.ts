import type { ContainerStateData } from "./types";

import { ContainerVolumeRelationList, ContainerEnvVariableList } from ".";
import { ContainerPortList } from "./ContainerPort";
import { shellJoin } from "../lib/shellwords";
import { DataModel } from "../../base";

export class ContainerState extends DataModel<ContainerStateData> {
  public readonly command?: string;
  public readonly entrypoint?: string;
  public readonly envs: ContainerEnvVariableList;
  public readonly imageDigest?: string;
  public readonly imageReference: string;
  public readonly ports: ContainerPortList;
  public readonly shortDigest?: string;
  public readonly volumes: ContainerVolumeRelationList;

  public constructor(data: ContainerStateData) {
    super(data);
    this.imageReference = data.image.trim();
    this.imageDigest = data.imageDigest
      ? data.imageDigest.split(":")[1]
      : undefined;
    this.shortDigest = this.imageDigest?.substring(0, 12);
    this.envs = new ContainerEnvVariableList(data.envs ?? {});
    this.volumes = new ContainerVolumeRelationList(data.volumes ?? []);
    this.ports = new ContainerPortList(data.ports ?? []);
    this.entrypoint = shellJoin(data.entrypoint ?? []);
    this.command = shellJoin(data.command ?? []);
  }
}
