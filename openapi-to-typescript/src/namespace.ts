import { pascalCase } from "@mittwald/awesome-node-utils/text/formatter";

export const NAMESPACE_NAME_SEPARATOR = "_";

export const transformNamespaceName = (name: string): string => {
    const snakedName = name.replace(/[^a-zA-Z0-9_]/gm, NAMESPACE_NAME_SEPARATOR);
    const pascalCased = snakedName
        .split(NAMESPACE_NAME_SEPARATOR)
        .map(pascalCase)
        .filter((s) => s.trim() !== "")
        .join(NAMESPACE_NAME_SEPARATOR);

    return /^\d/.test(pascalCased) ? "$" + pascalCased : pascalCased;
};

export const makeNamespace = (...args: string[]): string => {
    return args.map(transformNamespaceName).join(".");
};
