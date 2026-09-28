import type { IngressPath } from "../IngressPath/index.js";
import type {
  IngressAppInstallationTargetData,
  IngressContainerTargetData,
  IngressUndefinedTargetData,
  IngressRedirectTargetData,
  IngressTargetData,
} from "./types.js";

import { AppInstallation } from "../../app/AppInstallation/AppInstallation.js";
import { Container } from "../../container/Container/Container.js";
import { DataModel } from "../../base/index.js";

export abstract class IngressTargetBase<
  T extends IngressTargetData,
> extends DataModel<T> {
  public readonly path: IngressPath;

  public constructor(path: IngressPath, data: T) {
    super(data);
    this.path = path;
  }
}

export class IngressRedirectTarget extends IngressTargetBase<IngressRedirectTargetData> {
  public readonly type = "redirect";
  public readonly url: URL;

  public constructor(path: IngressPath, data: IngressRedirectTargetData) {
    super(path, data);
    this.url = new URL(data.url);
  }
}

export class IngressAppInstallationTarget extends IngressTargetBase<IngressAppInstallationTargetData> {
  public readonly appInstallation: AppInstallation;
  public readonly type = "appInstallation";

  public constructor(
    path: IngressPath,
    data: IngressAppInstallationTargetData,
  ) {
    super(path, data);
    this.appInstallation = AppInstallation.ofId(data.installationId);
  }
}

export class IngressContainerTarget extends IngressTargetBase<IngressContainerTargetData> {
  public readonly container: Container;
  public readonly portProtocol: string;
  public readonly type = "container";

  public constructor(path: IngressPath, data: IngressContainerTargetData) {
    super(path, data);
    this.container = Container.ofId(data.container.id, path.project.id);
    this.portProtocol = data.container.portProtocol;
  }
}

export class IngressUndefinedTarget extends IngressTargetBase<IngressUndefinedTargetData> {
  public readonly type = "undefined";
}

export type IngressTarget =
  | IngressAppInstallationTarget
  | IngressUndefinedTarget
  | IngressContainerTarget
  | IngressRedirectTarget;

export const ingressTargetFactory = (
  path: IngressPath,
  data: IngressTargetData,
): IngressTarget | undefined => {
  if ("url" in data) {
    return new IngressRedirectTarget(path, data);
  }

  if ("installationId" in data) {
    return new IngressAppInstallationTarget(path, data);
  }

  if ("container" in data) {
    return new IngressContainerTarget(path, data);
  }

  if ("useDefaultPage" in data) {
    return new IngressUndefinedTarget(path, data);
  }
};
