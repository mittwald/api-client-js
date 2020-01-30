import * as changeCase from "change-case";

const NAMESPACE_NAME_SEPERATOR = "_";

export function transformNamespaceName(name: string): string {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, NAMESPACE_NAME_SEPERATOR);
    const pascalCased = snakedName
        .split(NAMESPACE_NAME_SEPERATOR)
        .map((s) => changeCase.pascalCase(s))
        .filter((s) => s.trim() !== "")
        .join(NAMESPACE_NAME_SEPERATOR);

    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
}
