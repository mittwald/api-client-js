import yaml from "js-yaml";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { LockFileContent } from "./LockFileContent.js";
import lockFileContentTypeChecks from "./LockFileContent-ti.js";
import { createCheckers } from "ts-interface-checker";
import { getStatusLog } from "./statusLog.js";
import { NormalizedSpec } from "./NormalizedSpec.js";
import { deepEqual } from "fast-equals";
import { Change, diffLines } from "diff";
import "colors";
import clone from "clone";

export type ChangeType = "new" | "changed" | "removed";
export type CompareTargetType =
  | "path"
  | "parameter"
  | "schema"
  | "requestBody"
  | "response";

export interface CompareResult {
  name: string;
  target: CompareTargetType;
  changeType: ChangeType;
  diffInfos?: Change[];
}

const emptyLockFileContent = (): LockFileContent => ({
  version: "v1",
  spec: {
    paths: {},
  },
});

export class LockFile {
  public readonly content: LockFileContent;

  public constructor(content: LockFileContent = emptyLockFileContent()) {
    this.content = content;
  }

  public static fromSpec(spec: NormalizedSpec): LockFile {
    const log = getStatusLog();
    log?.start("Creating new lock file from spec");
    const content: LockFileContent = {
      version: "v1",
      spec,
    };
    const checkers = createCheckers(lockFileContentTypeChecks);
    log?.update("Checking lockfile content");
    checkers.LockFileContent.check(content);
    log?.succeed("Creating new lock file from spec done");
    return new LockFile(content);
  }

  public static fromString(content: string): LockFile {
    const log = getStatusLog();
    log?.start("Processing lock file");
    log?.update("Reading lock file YAML");
    const lockFileContent = yaml.load(content);
    log?.update("Validating lock file");
    const checkers = createCheckers(lockFileContentTypeChecks);
    checkers.LockFileContent.check(lockFileContent);
    log?.succeed("Lock file successfully loaded and validated");
    return new LockFile(lockFileContent as LockFileContent);
  }

  public static fromFile(filename: string): LockFile | undefined {
    const log = getStatusLog();
    log?.start(`Loading lock file from ${filename}`);
    if (!existsSync(filename)) {
      log?.warn(`Lock file ${filename} not found`);
      return;
    }
    const content = readFileSync(filename, "utf8");
    return LockFile.fromString(content);
  }

  public compare(spec: NormalizedSpec): CompareResult[] {
    const result: CompareResult[] = [];

    const compareForTarget = (
      compareType: CompareTargetType,
      source: Record<string, unknown> = {},
      target: Record<string, unknown> = {},
    ): void => {
      for (const [name] of Object.entries(source)) {
        const targetEntry = target[name];
        if (!targetEntry) {
          result.push({
            name,
            target: compareType,
            changeType: "removed",
          });
        }
      }

      for (const [name, targetEntry] of Object.entries(target)) {
        const sourceEntry = source[name];
        if (!sourceEntry) {
          result.push({
            name,
            target: compareType,
            changeType: "new",
          });
        } else if (!deepEqual(sourceEntry, targetEntry)) {
          const sourceEntryYaml = yaml.dump(sourceEntry, { noRefs: true });
          const targetEntryYaml = yaml.dump(targetEntry, { noRefs: true });

          result.push({
            name,
            target: compareType,
            changeType: "changed",
            diffInfos: diffLines(sourceEntryYaml, targetEntryYaml),
          });
        }
      }
    };

    compareForTarget("path", this.content.spec.paths, spec.paths);
    compareForTarget(
      "parameter",
      this.content.spec.components?.parameters,
      spec.components?.parameters,
    );
    compareForTarget(
      "schema",
      this.content.spec.components?.schemas,
      spec.components?.schemas,
    );
    compareForTarget(
      "response",
      this.content.spec.components?.responses,
      spec.components?.responses,
    );
    compareForTarget(
      "requestBody",
      this.content.spec.components?.requestBodies,
      spec.components?.requestBodies,
    );

    return result;
  }

  public export(): string {
    return yaml.dump(this.content, { noRefs: true });
  }

  public write(filename: string): void {
    const log = getStatusLog();
    log?.start(`Writing lock file to ${filename}`);
    writeFileSync(filename, this.export());
    log?.succeed(`Lock file written to ${filename}`);
  }

  public applyChanges(
    targetSpec: NormalizedSpec,
    acceptedChanges: CompareResult[],
  ): NormalizedSpec {
    const result = clone(this.content.spec);

    const syncForTarget = (
      compareType: CompareTargetType,
      target: Record<string, unknown> = {},
      source: Record<string, unknown> = {},
    ): void => {
      for (const acceptedChange of acceptedChanges.filter(
        (c) => c.target === compareType,
      )) {
        const name = acceptedChange.name;
        const entry = source[name];
        if (
          acceptedChange.changeType === "new" ||
          acceptedChange.changeType === "changed"
        ) {
          target[name] = entry;
        } else {
          delete target[name];
        }
      }
    };

    syncForTarget("path", result.paths, targetSpec.paths);
    syncForTarget(
      "schema",
      result.components?.schemas,
      targetSpec.components?.schemas,
    );
    syncForTarget(
      "parameter",
      result.components?.parameters,
      targetSpec.components?.parameters,
    );
    syncForTarget(
      "response",
      result.components?.responses,
      targetSpec.components?.responses,
    );
    syncForTarget(
      "requestBody",
      result.components?.requestBodies,
      targetSpec.components?.requestBodies,
    );

    this.content.spec = clone(result);
    return result;
  }
}
