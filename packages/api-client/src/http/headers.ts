import * as Descriptor from "../OperationDescriptor.js";

function isHeaderObjects(headers?: Headers | Descriptor.Headers): headers is Headers {
    return !!headers && "forEach" in headers;
}
export const mapHeaders = (headers?: Headers | Descriptor.Headers): Descriptor.Headers => {
    const result: Descriptor.Headers = {};
    if (!isHeaderObjects(headers)) {
        return headers || {};
    }
    headers.forEach((val, key) => {
        result[key] = val;
    });

    return result;
};
