import { IngressTarget } from "./IngressTarget.js";

const target = {} as IngressTarget;

// @ts-expect-error use type-guard first
void target.url;

if (target.type === "redirect") {
  void target.url;
}

if (target.type === "directory") {
  void target.directory;
}

if (target.type === "installation") {
  void target.appInstallation.id;
}
