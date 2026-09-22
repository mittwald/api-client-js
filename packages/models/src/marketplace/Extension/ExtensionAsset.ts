import type { ExtensionAssetData } from "./types";

import { File } from "../../file/File/internal";
import { DataModel } from "../../base";

export class ExtensionAsset extends DataModel<ExtensionAssetData> {
  public readonly file: File;
  public readonly id: string;
  public readonly index: number;
  public readonly type: string;

  public constructor(data: ExtensionAssetData) {
    super(data);
    this.file = File.ofId(data.id);
    this.type = data.assetType;
    this.id = data.id;
    this.index = data.index;
  }
}
