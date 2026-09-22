import type {
  ImageMetaVolumeData,
  ImageMetaPortData,
  ImageMetaEnvData,
  ImageMetaData,
} from "./types";

import { shellJoin } from "../lib/shellwords";
import { DataModel } from "../../base";

export class ImageMeta extends DataModel<ImageMetaData> {
  public readonly command?: string;
  public readonly entrypoint?: string;
  public readonly envs?: ImageMetaEnvData[];
  public readonly imageRef: string;
  public readonly needsAiGeneration: boolean;
  public readonly ports?: ImageMetaPortData[];
  public readonly volumes?: ImageMetaVolumeData[];

  public constructor(data: ImageMetaData, imageRef: string) {
    super(data);
    this.imageRef = imageRef;
    this.command = shellJoin(data.command ?? []);
    this.entrypoint = shellJoin(data.entrypoint ?? []);
    this.envs = data.env;
    this.ports = data.exposedPorts;
    this.volumes = data.volumes;
    this.needsAiGeneration = data.isAiAvailable && !data.hasAiGeneratedData;
  }
}
