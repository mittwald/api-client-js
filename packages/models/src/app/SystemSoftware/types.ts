import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareData =
  MittwaldAPIV2.Operations.AppGetSystemsoftware.ResponseData;

export type SystemSoftwareListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwares.ResponseData[number];

export type SystemSoftwareListQueryData =
  MittwaldAPIV2.Paths.V2SystemSoftwares.Get.Parameters.Query;

export enum SystemSoftwareNames {
  composer = "composer",
  curl = "curl",
  ghostscript = "gs",
  git = "git",
  graphicsmagick = "gm",
  imagemagick = "im",
  midnightCommander = "mc",
  mysql = "mysql",
  nano = "nano",
  node = "node",
  pdftools = "pdftools",
  perl = "perl",
  php = "php",
  python = "python",
  rediscli = "redis-cli",
  webp = "webp",
  wpcli = "wp-cli",
  zip = "zip",
}

export enum SystemSoftwareFullNames {
  composer = "Composer",
  curl = "curl",
  ghostscript = "Ghostscript",
  git = "Git",
  graphicsmagick = "GraphicsMagick",
  imagemagick = "ImageMagick",
  midnightCommander = "Midnight Commander",
  mysql = "MySQL",
  nano = "nano",
  node = "Node.js",
  pdftools = "PDF-Tools",
  perl = "Perl",
  php = "PHP",
  python = "Python",
  rediscli = "Redis CLI",
  webp = "WebP",
  wpcli = "WP-CLI",
  zip = "ZIP",
}
