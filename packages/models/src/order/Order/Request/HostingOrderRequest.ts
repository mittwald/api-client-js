import invariant from "tiny-invariant";

import type { HostingArticle } from "../../../article/Article/internal";
import type { Contract } from "../../../contract";
import type { Bytes } from "../../../common";

import { HostingOrderPreview } from "../Preview/HostingOrderPreview";
import { ServerArticle } from "../../../article/Article/internal";
import { HostingContractItem } from "../../../contract";
import { config } from "../../../config";
import { Order } from "../Order";

export class HostingOrderRequest {
  public readonly contract?: Contract;
  public readonly freeTrial?: boolean;
  public readonly hostingArticle: HostingArticle;
  public readonly storage: Bytes;

  public constructor(
    hostingArticle: HostingArticle,
    storage: Bytes,
    contract?: Contract,
    freeTrial?: boolean,
  ) {
    this.contract = contract;
    this.hostingArticle = hostingArticle;
    this.storage =
      storage.gib < hostingArticle.baseStorageAttribute.bytes.gib
        ? hostingArticle.baseStorageAttribute.bytes
        : storage;
    this.freeTrial = freeTrial;
  }

  public static create(
    hostingArticle: HostingArticle,
    storage: Bytes,
    contract?: Contract,
    freeTrial?: boolean,
  ) {
    return new HostingOrderRequest(
      hostingArticle,
      storage,
      contract,
      freeTrial,
    );
  }

  public readonly createPlanChange = async () => {
    invariant(this.contract, "Contract is required");

    const baseData = {
      diskspaceInGiB: this.storage.gib,
      contractId: this.contract.id,
    };

    const planChangeData =
      this.hostingArticle instanceof ServerArticle
        ? this.hostingArticle.isProSpace
          ? {
            ...baseData,
            spec: {
              machineType: this.hostingArticle.machineTypeSpecs.machineType,
            },
          }
          : {
            ...baseData,
            machineType: this.hostingArticle.machineTypeSpecs.machineType,
          }
        : {
          ...baseData,
          spec: {
            ram: this.hostingArticle.hardwareSpecs.ram.gib,
            vcpu: this.hostingArticle.hardwareSpecs.vcpu,
          },
        };

    const planChangeType =
      this.hostingArticle instanceof ServerArticle &&
        !this.hostingArticle.isProSpace
        ? "server"
        : "projectHosting";

    return await config.behaviors.order.createTariffChange({
      tariffChangeData: planChangeData,
      tariffChangeType: planChangeType,
    });
  };

  public async getPreview() {
    const baseData = {
      diskspaceInGiB: this.storage.gib,
      useFreeTrial: this.freeTrial,
    };

    const orderData =
      this.hostingArticle instanceof ServerArticle
        ? this.hostingArticle.isProSpace
          ? {
            ...baseData,
            spec: {
              machineType: this.hostingArticle.machineTypeSpecs.machineType,
            },
          }
          : {
            ...baseData,
            machineType: this.hostingArticle.machineTypeSpecs.machineType,
          }
        : {
          ...baseData,
          spec: {
            ram: this.hostingArticle.hardwareSpecs.ram.gib,
            vcpu: this.hostingArticle.hardwareSpecs.vcpu,
          },
        };

    const orderType =
      this.hostingArticle instanceof ServerArticle &&
        !this.hostingArticle.isProSpace
        ? "server"
        : "projectHosting";

    if (this.contract) {
      const planChangeResponse =
        await config.behaviors.order.previewTariffChange({
          tariffChangeData: {
            ...orderData,
            contractId: this.contract.id,
          },
          tariffChangeType: orderType,
        });

      return new HostingOrderPreview(this, planChangeResponse);
    } else {
      const response = await config.behaviors.order.preview({
        orderData,
        orderType,
      });

      invariant(
        "machineTypePrice" in response,
        "Expected machineTypePrice in response",
      );

      return new HostingOrderPreview(this, response);
    }
  }

  public readonly order = async (orderConfig: {
    promotionCode?: string;
    description: string;
    customerId: string;
  }) => {
    const baseData = {
      promotionCode: orderConfig.promotionCode,
      description: orderConfig.description,
      customerId: orderConfig.customerId,
      diskspaceInGiB: this.storage.gib,
      useFreeTrial: this.freeTrial,
    };

    const orderData =
      this.hostingArticle instanceof ServerArticle
        ? this.hostingArticle.isProSpace
          ? {
            ...baseData,
            spec: {
              machineType: this.hostingArticle.machineTypeSpecs.machineType,
            },
          }
          : {
            ...baseData,
            machineType: this.hostingArticle.machineTypeSpecs.machineType,
          }
        : {
          ...baseData,
          spec: {
            ram: this.hostingArticle.hardwareSpecs.ram.gib,
            vcpu: this.hostingArticle.hardwareSpecs.vcpu,
          },
        };

    const orderType =
      this.hostingArticle instanceof ServerArticle &&
        !this.hostingArticle.isProSpace
        ? "server"
        : "projectHosting";

    const order = await config.behaviors.order.create({
      orderData,
      orderType,
    });
    return Order.ofId(order.id);
  };

  protected async hasStorageConfigurationChanged() {
    const contract = await this.contract?.getDetailed();
    if (!contract) {
      return false;
    }

    const hostingContractItem = HostingContractItem.fromContractItem(
      contract.baseItem,
    );

    const contractStorage = await hostingContractItem.getStorage();
    invariant(!!contractStorage, "Contract storage should not be null");
    return !contractStorage.equals(this.storage);
  }
}
