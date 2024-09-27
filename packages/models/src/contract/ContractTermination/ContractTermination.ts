import {
  ContractTerminationCreateRequest,
  ContractTerminationCreateResponse,
  ContractTerminationCancelResponse,
} from "./types.js";
import { classes } from "polytype";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";

export class ContractTermination extends ReferenceModel {
  public static schedule = provideReact(
    async (
      contractId: string,
      data: ContractTerminationCreateRequest,
    ): Promise<ContractTerminationScheduled> => {
      const response =
        await config.behaviors.contractTermination.scheduleTermination(
          contractId,
          data,
        );
      return new ContractTerminationScheduled(response);
    },
  );

  public static cancel = provideReact(
    async (contractId: string): Promise<ContractTerminationCancelled> => {
      const response =
        await config.behaviors.contractTermination.cancelTermination(
          contractId,
        );
      return new ContractTerminationCancelled(response);
    },
  );
}

export class ContractTerminationScheduled extends classes(
  DataModel<ContractTerminationCreateResponse>,
  ContractTermination,
) {
  public constructor(data: ContractTerminationCreateResponse) {
    super([data]);
  }
}

export class ContractTerminationCancelled extends classes(
  DataModel<ContractTerminationCancelResponse>,
  ContractTermination,
) {
  public constructor(data: ContractTerminationCancelResponse) {
    super([data]);
  }
}
