import { DataModel } from "../../base/DataModel.js";
import {
  IngressUndefinedTargetData,
  IngressDirectoryTargetData,
  IngressAppInstallationTargetData,
  IngressRedirectTargetData,
  IngressTargetData,
} from "./types.js";
import { IngressPath } from "../IngressPath/IngressPath.js";
import { AppInstallation } from "../../app/AppInstallation/index.js";

abstract class IngressTargetBase<
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

export class IngressDirectoryTarget extends IngressTargetBase<IngressDirectoryTargetData> {
  public readonly type = "directory";
  public readonly directory: string;

  public constructor(path: IngressPath, data: IngressDirectoryTargetData) {
    super(path, data);
    this.directory = data.directory;
  }
}

export class IngressAppInstallationTarget extends IngressTargetBase<IngressAppInstallationTargetData> {
  public readonly type = "installation";
  public readonly appInstallation: AppInstallation;

  public constructor(
    path: IngressPath,
    data: IngressAppInstallationTargetData,
  ) {
    super(path, data);
    this.appInstallation = AppInstallation.ofId(data.installationId);
  }
}

export class IngressUndefinedTarget extends IngressTargetBase<IngressUndefinedTargetData> {
  public readonly type = "undefined";
}

export type IngressTarget =
  | IngressRedirectTarget
  | IngressDirectoryTarget
  | IngressAppInstallationTarget
  | IngressUndefinedTarget;

export const ingressTargetFactory = (
  path: IngressPath,
  data: IngressTargetData,
): IngressTarget => {
  if ("directory" in data) {
    return new IngressDirectoryTarget(path, data);
  }

  if ("url" in data) {
    return new IngressRedirectTarget(path, data);
  }

  if ("installationId" in data) {
    return new IngressAppInstallationTarget(path, data);
  }

  if ("useDefaultPage" in data) {
    return new IngressUndefinedTarget(path, data);
  }

  throw new Error("Ingress target type is not supported.");
};
