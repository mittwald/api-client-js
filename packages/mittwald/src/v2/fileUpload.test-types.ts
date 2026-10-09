import { InferredRequestData } from "@mittwald/api-client-commons";
import * as descriptors from "../generated/v2/descriptors.js";

/**
 * Regression test for https://github.com/mittwald/api-client-js/issues/264:
 * request bodies of `multipart/form-data` operations used to be generated as `{
 * [p: string]: unknown }`, which forced consumers to cast their `File` to
 * `unknown`.
 */
type DetectPhishingEmailData = InferredRequestData<
  typeof descriptors.verificationDetectPhishingEmail
>;

type CreateFileData = InferredRequestData<typeof descriptors.fileCreateFile>;

function ignoredFileUploadsAcceptFilesAndBlobs(file: File, blob: Blob): void {
  const ignoredFile: DetectPhishingEmailData = { emailEml: file };
  const ignoredBlob: DetectPhishingEmailData = { emailEml: blob };
  const ignoredCreateFile: CreateFileData = { file };
}

function ignoredFileUploadsRejectNonBinaryValues(): void {
  // @ts-expect-error A string is not a valid binary payload
  const ignoredString: DetectPhishingEmailData = { emailEml: "not a file" };
  // @ts-expect-error The field is required
  const ignoredEmpty: DetectPhishingEmailData = {};
}
