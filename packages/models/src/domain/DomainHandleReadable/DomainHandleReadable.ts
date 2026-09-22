import type { HandleReadableData } from "./types";

import { DomainHandle } from "../DomainHandle";
import { DataModel } from "../../base";

export class DomainHandleReadable extends DataModel<HandleReadableData> {
  public readonly current: DomainHandle;
  public readonly desired?: DomainHandle;
  public constructor(data: HandleReadableData) {
    super(data);
    this.current = new DomainHandle(data.current);
    if (data.desired) {
      this.desired = new DomainHandle(data.desired);
    }
  }
}
