import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppData = MittwaldAPIV2.Operations.AppGetApp.ResponseData;

export type AppListItemData =
  MittwaldAPIV2.Operations.AppListApps.ResponseData[number];

export type AppListQueryData = MittwaldAPIV2.Paths.V2Apps.Get.Parameters.Query;

export type AppUpdatePolicyData =
  MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;

export enum AppNames {
  bookstack = "BookStack",
  contao = "Contao",
  drupal = "Drupal",
  grav = "Grav",
  humhub = "HumHub",
  joomla = "Joomla!",
  magento = "Magento",
  matomo = "Matomo",
  moodle = "Moodle",
  neos = "NEOS",
  nextcloud = "Nextcloud",
  node = "Node.js",
  php = "PHP",
  prestashop = "PrestaShop",
  python = "Python",
  shopware5 = "Shopware 5",
  shopware6 = "Shopware 6",
  staticapp = "Static Files",
  typo3 = "TYPO3",
  wordpress = "WordPress",
}
