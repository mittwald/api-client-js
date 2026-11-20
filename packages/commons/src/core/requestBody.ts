import { HttpMediaType } from "../types/index.js";

export const multipartMediaType = "multipart/form-data";
export const jsonMediaType = "application/json";

export interface SerializedRequestBody {
  data: unknown;
  /**
   * Content type that has to be set explicitly on the request. Deliberately
   * left `undefined` for multipart bodies, because the boundary is only known
   * to whoever serializes the `FormData`.
   */
  contentType?: HttpMediaType;
}

/**
 * Only values created as object literals are treated as "a bag of body fields".
 * Everything else (`FormData`, `URLSearchParams`, `Blob`, `Buffer`, streams,
 * class instances, …) is assumed to be an already encoded body and is passed
 * through to axios untouched.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype: unknown = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

const isBlob = (value: unknown): value is Blob =>
  typeof Blob !== "undefined" && value instanceof Blob;

const appendFormDataValue = (
  formData: FormData,
  key: string,
  value: unknown,
): void => {
  if (value === undefined || value === null) {
    return;
  }

  if (isBlob(value)) {
    formData.append(key, value);
    return;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
  ) {
    formData.append(key, value.toString());
    return;
  }

  formData.append(key, JSON.stringify(value));
};

export const buildFormData = (data: Record<string, unknown>): FormData => {
  if (typeof FormData === "undefined") {
    throw new Error(
      "This runtime does not provide a global FormData implementation, which " +
        "is required for multipart/form-data requests. Either upgrade to " +
        "Node.js >= 18 or pass an already built FormData object as request data.",
    );
  }

  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        appendFormDataValue(formData, key, item);
      }
    } else {
      appendFormDataValue(formData, key, value);
    }
  }

  return formData;
};

/**
 * Encodes the request data according to the media type declared for the
 * operation in the OpenAPI document.
 *
 * `application/json` (and operations without a declared media type) are left to
 * axios, which already does the right thing. Multipart bodies are converted
 * into a `FormData` object here, because axios' own multipart conversion falls
 * back to the `form-data` package on Node.js, which cannot handle `Blob`s.
 * Every other media type (e.g. `application/x-www-form-urlencoded`) is handled
 * by axios as well, but only once the content type is known to it.
 */
export const serializeRequestBody = (
  data: unknown,
  contentType: HttpMediaType | undefined,
): SerializedRequestBody => {
  if (
    data === undefined ||
    contentType === undefined ||
    contentType.startsWith(jsonMediaType) ||
    !isPlainObject(data)
  ) {
    return { data };
  }

  if (contentType.startsWith(multipartMediaType)) {
    return { data: buildFormData(data) };
  }

  return { data, contentType };
};
