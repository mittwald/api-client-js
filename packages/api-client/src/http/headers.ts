import * as Descriptor from "../OperationDescriptor";

export const mapHeaders = (headers?: Headers): Descriptor.Headers => {
    const result: Descriptor.Headers = {};
    if (headers) {
        headers.forEach((val, key) => {
            result[key] = val;
        });
    }
    return result;
};
