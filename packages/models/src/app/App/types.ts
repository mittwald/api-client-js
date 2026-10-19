import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppData = MittwaldAPIV2.Operations.AppGetApp.ResponseData;

export type AppListItemData =
  MittwaldAPIV2.Operations.AppListApps.ResponseData[number];

export type AppListQueryData = MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Query;

export type AppUpdatePolicyData =
  MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;

export type AppName =
  | "Roundcube Webmail"
  | "Static Files"
  | "Drupal Core"
  | "PHP-Worker"
  | "PrestaShop"
  | "Shopware 5"
  | "Shopware 6"
  | "Drupal CMS"
  | "Nextcloud"
  | "WordPress"
  | "Joomla!"
  | "Node.js"
  | "Contao"
  | "Matomo"
  | "Python"
  | "TYPO3"
  | "PHP";

export enum AppId {
  staticFiles = "d20baefd-81d2-42aa-bfba-9a3220ae839b",
  nextcloud = "0b97d59f-ee13-4f18-a1f6-53e1beaf2e70",
  phpWorker = "fcac178a-e606-4460-a5fd-b3ad0ae7a3cc",
  roundcube = "f37a8798-2785-4186-8d74-a98146bff3c3",
  shopware5 = "a23acf9c-9298-4082-9e7d-25356f9976dc",
  shopware6 = "12d54d05-7e55-4cf3-90c4-093516e0eaf8",
  wordPress = "da3aa3ae-4b6b-4398-a4a8-ee8def827876",
  drupalCms = "0548e45c-28cf-4da4-8827-246a67ba0b98",
  contao = "4916ce3e-cba4-4d2e-9798-a8764aa14cf3",
  drupal = "3d8a261a-3d6f-4e09-b68c-bfe90aece514",
  joomla = "8d404bff-6d75-4833-9eed-1b83b0552585",
  matomo = "91fa05e7-34f7-42e8-a8d3-a9c42abd5f8c",
  nodejs = "3e7f920b-a711-4d2f-9871-661e1b41a2f0",
  python = "be57d166-dae9-4480-bae2-da3f3c6f0a2e",
  typo3 = "352971cc-b96a-4a26-8651-b08d7c8a7357",
  php = "34220303-cb87-4592-8a95-2eb20a97b2ac",
}
