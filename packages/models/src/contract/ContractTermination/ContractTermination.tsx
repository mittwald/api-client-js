import { DateTime } from "luxon";
import { Contract, ContractTerminationData } from "../Contract/index.js";

export class ContractTermination {
  data: ContractTerminationData;
  contract?: Contract;
  targetDate?: DateTime;

  public constructor(data: ContractTerminationData) {
    this.data = data;
    if (data.terminationTargetDate) {
      this.targetDate = DateTime.fromISO(data.terminationTargetDate);
    }
    if (data.contractId) {
      this.contract = Contract.ofId(data.contractId);
    }
  }
}
