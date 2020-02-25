import { Operation } from "./IntermediateFormat";
import { pascalCase } from "@mittwald/awesome-node-utils/text/formatter";

export const getDescriptorName = (method: string, operation: Operation): string => {
    return method.toLowerCase() + pascalCase(operation.operationId);
};
