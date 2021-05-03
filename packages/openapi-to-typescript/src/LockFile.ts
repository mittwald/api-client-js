import yaml from "js-yaml";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { LockFileContent } from "./LockFileContent";
import lockFileContentTypeChecks from "./LockFileContent-ti";
import { createCheckers } from "ts-interface-checker";
import { getStatusLog } from "./statusLog";
import { NormalizedSpec, Operations } from "./NormalizedSpec";
import { deepEqual } from "fast-equals";
import clone from "clone";

export type ChangeType = "new" | "changed" | "removed";
export type CompareTargetType = "path" | "components" | "definitions";

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

        for (const [path] of Object.entries(this.content.spec.paths)) {
            const newPathSpec = spec.paths[path] as Operations | undefined;
            if (!newPathSpec) {
                result.push({
                    name: path,
                    target: "path",
                    changeType: "removed",
                });
            }
        }

        for (const [path, pathSpec] of Object.entries(spec.paths)) {
            const thisPathSpec = this.content.spec.paths[path] as Operations | undefined;
            if (!thisPathSpec) {
                result.push({
                    name: path,
                    target: "path",
                    changeType: "new",
                });
            } else if (!deepEqual(thisPathSpec, pathSpec)) {
                result.push({
                    name: path,
                    target: "path",
                    changeType: "changed",
                });
            }
        }

        return result;
    }

    public export(): string {
        return yaml.dump(this.content, { noRefs: true });
    }

    public write(filename: string): void {
        writeFileSync(filename, this.export());
    }

    public syncSpecs(targetSpec: NormalizedSpec, acceptedChanges: CompareResult[]): NormalizedSpec {
        const source = clone(this.content.spec);

        for (const acceptedChange of acceptedChanges) {
            if (acceptedChange.target === "path") {
                const pathName = acceptedChange.name;
                const path = source.paths[pathName];
                if (acceptedChange.changeType === "new" || acceptedChange.changeType === "changed") {
                    targetSpec.paths[pathName] = path;
                } else {
                    delete targetSpec.paths[pathName];
                }
            }
        }

        this.content.spec = clone(targetSpec);

        return targetSpec;
    }
}
