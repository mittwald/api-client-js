import type { ExtensionAssetData } from "./types.js";

import { File } from "../../file/File/internal.js";
import { DataModel } from "../../base/index.js";

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
