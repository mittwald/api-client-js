import * as Descriptor from "../OperationDescriptor";

export const mapHeaders = (headers: Headers): Descriptor.Headers => {
    const result: Descriptor.Headers = {};
    headers.forEach((val, key) => {
        result[key] = val;
    });
    return result;
};
