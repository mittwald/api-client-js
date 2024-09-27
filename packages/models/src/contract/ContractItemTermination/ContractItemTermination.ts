import { DataModel, ReferenceModel } from "../../base/index.js";
import {
  ContractItemTerminationCancelResponse,
  ContractItemTerminationCreateResponse,
} from "./types.js";
import { classes } from "polytype";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";

export class ContractItemTermination extends ReferenceModel {
  public static scheduleTermination = provideReact(
    async (
      contractId: string,
      contractItemId: string,
      data: {
        reason: string;
        terminationTargetDate: string;
      },
    ): Promise<ContractItemTerminationScheduled> => {
      const terminationData =
        await config.behaviors.contractItemTermination.scheduleTermination(
          contractId,
          contractItemId,
          data,
        );

      return new ContractItemTerminationScheduled(terminationData);
    },
  );

  public static cancelTermination = provideReact(
    async (
      contractId: string,
      contractItemId: string,
    ): Promise<ContractItemTerminationCancelled> => {
      const terminationData =
        await config.behaviors.contractItemTermination.cancelTermination(
          contractId,
          contractItemId,
        );

      return new ContractItemTerminationCancelled(terminationData);
    },
  );

  public readonly contractId: string;
  public readonly contractItemId: string;

  public constructor(contractId: string, contractItemId: string) {
    super(contractItemId);
    this.contractId = contractId;
    this.contractItemId = contractItemId;
  }
}

export class ContractItemTerminationScheduled extends classes(
  DataModel<ContractItemTerminationCreateResponse>,
  ContractItemTermination,
) {
  public readonly terminationTargetDate: Date;
  public constructor(data: ContractItemTerminationCreateResponse) {
    super([data]);
    this.terminationTargetDate = data.terminationTargetDate
      ? new Date(data.terminationTargetDate)
      : new Date();
  }
}

export class ContractItemTerminationCancelled extends classes(
  DataModel<ContractItemTerminationCancelResponse>,
  ContractItemTermination,
) {
  public constructor(data: ContractItemTerminationCancelResponse) {
    super([data]);
  }
}
