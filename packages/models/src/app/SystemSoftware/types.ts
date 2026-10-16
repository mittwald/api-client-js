import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareData =
  MittwaldAPIV2.Operations.AppGetSystemsoftware.ResponseData;

export type SystemSoftwareListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwares.ResponseData[number];

export type SystemSoftwareListQueryData =
  MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Parameters.Query;

export type SystemSoftwareName =
  | "redis-cli"
  | "composer"
  | "pdftools"
  | "libvips"
  | "python"
  | "wp-cli"
  | "mysql"
  | "nano"
  | "node"
  | "perl"
  | "webp"
  | "php"
  | "gs"
  | "gm"
  | "im"
  | "mc";

export enum SystemSoftwareFullNames {
  mc = "Midnight Commander",
  "redis-cli" = "Redis CLI",
  mysql = "MySQL Client",
  pdftools = "PDF Tools",
  composer = "Composer",
  gm = "GraphicsMagick",
  libvips = "libvips",
  "wp-cli" = "WP-CLI",
  gs = "Ghostscript",
  im = "ImageMagick",
  python = "Python",
  node = "Node.js",
  nano = "nano",
  perl = "Perl",
  webp = "WebP",
  php = "PHP",
}

export function isSystemSoftwareKey(
  value: string,
): value is keyof typeof SystemSoftwareFullNames {
  return value in SystemSoftwareFullNames;
}

export enum SystemSoftwareId {
  "redis-cli" = "218091c6-049b-4834-8fda-42dda74b7c78",
  composer = "2390ee6c-0f09-4781-bb11-a9359c17a0d4",
  pdftools = "55311bea-b9b9-40d0-9ffc-dd943a16a540",
  "wp-cli" = "9c55807a-f3b4-49f4-8849-8c7923a1225f",
  libvips = "46188c81-dadd-4997-b7b9-5e0cb95aabc9",
  python = "5ff298ad-40c6-4a8a-a5b6-1ac1bf75c71c",
  mysql = "e3668337-e473-4b01-a334-52ff042ede9d",
  nano = "97ce8755-489d-474f-adc3-87b0384972e6",
  node = "1d80c3ff-f932-424e-813a-17c49c0fb837",
  perl = "8187e28c-dc32-4db2-8274-25372836ff2f",
  webp = "ee8e2a45-8ac2-48cb-8838-f73eb7cc1431",
  php = "c42293f3-c2df-40d9-a5c9-4fa2ffdc36aa",
  gm = "b0b5880a-0fc0-413e-8e6a-308d1dc01179",
  gs = "685cb377-c685-42b0-a598-142eee4c945a",
  im = "e015b8f3-c0bd-43c3-a8bf-2865028bbb50",
  mc = "f2e61269-aaeb-46a0-a720-ca00491fef47",
}
