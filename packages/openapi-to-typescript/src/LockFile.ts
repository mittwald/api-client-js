import yaml from "js-yaml";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { LockFileContent } from "./LockFileContent";
import lockFileContentTypeChecks from "./LockFileContent-ti";
import { createCheckers } from "ts-interface-checker";
import { getStatusLog } from "./statusLog";
import { NormalizedSpec } from "./NormalizedSpec";
import { deepEqual } from "fast-equals";
import clone from "clone";

export type ChangeType = "new" | "changed" | "removed";
export type CompareTargetType = "path" | "parameter" | "schema";

export interface CompareResult {
    name: string;
    target: CompareTargetType;
    changeType: ChangeType;
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
        const content: LockFileContent = {
            version: "v1",
            spec,
        };
        const checkers = createCheckers(lockFileContentTypeChecks);
        checkers.LockFileContent.check(content);
        return new LockFile(content);
    }

    public static fromString(content: string): LockFile {
        const log = getStatusLog();
        log?.start("Processing lock file");
        log?.update("Reading lock file YAML");
        const lockFileContent = yaml.safeLoad(content);
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
            return;
        }
        const content = readFileSync(filename, "utf8");
        log?.succeed("Lock file loaded");
        return LockFile.fromString(content);
    }

    public compare(spec: NormalizedSpec): CompareResult[] {
        const result: CompareResult[] = [];

        const compareForTarget = (
            compareType: CompareTargetType,
            source: Record<string, any> = {},
            target: Record<string, any> = {},
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
                    result.push({
                        name,
                        target: compareType,
                        changeType: "changed",
                    });
                }
            }
        };

        compareForTarget("path", this.content.spec.paths, spec.paths);
        compareForTarget("parameter", this.content.spec.components?.parameters, spec.components?.parameters);
        compareForTarget("schema", this.content.spec.components?.schemas, spec.components?.schemas);

        return result;
    }

    public export(): string {
        return yaml.dump(this.content, { noRefs: true });
    }

    public write(filename: string): void {
        writeFileSync(filename, this.export());
    }

    public syncSpecs(targetSpec: NormalizedSpec, acceptedChanges: CompareResult[]): NormalizedSpec {
        const result = clone(this.content.spec);

        const syncForTarget = (
            compareType: CompareTargetType,
            target: Record<string, any> = {},
            source: Record<string, any> = {},
        ): void => {
            for (const acceptedChange of acceptedChanges.filter((c) => c.target === compareType)) {
                const name = acceptedChange.name;
                const entry = source[name];
                if (acceptedChange.changeType === "new" || acceptedChange.changeType === "changed") {
                    target[name] = entry;
                } else {
                    delete target[name];
                }
            }
        };

        syncForTarget("path", result.paths, targetSpec.paths);
        syncForTarget("schema", result.components?.schemas, targetSpec.components?.schemas);
        syncForTarget("parameter", result.components?.parameters, targetSpec.components?.parameters);

        this.content.spec = result;

        return result;
    }
}
