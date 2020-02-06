import * as changeCase from "change-case";

const separator = "_";

export function transformNamespaceName(name: string): string {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, separator);
    const pascalCased = snakedName
        .split(separator)
        .map((s) => changeCase.pascalCase(s))
        .filter((s) => s.trim() !== "")
        .join(separator);

    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
}
