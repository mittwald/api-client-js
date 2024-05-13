import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SystemSoftwareData =
  MittwaldAPIV2.Operations.AppGetSystemsoftware.ResponseData;

export type SystemSoftwareListItemData =
  MittwaldAPIV2.Operations.AppListSystemsoftwares.ResponseData[number];

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
