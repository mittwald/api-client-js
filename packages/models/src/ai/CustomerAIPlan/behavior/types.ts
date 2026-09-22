import type { MittwaldAPIV2 } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { CustomerAIPlanListQueryData, CustomerAIPlanData } from "../types";
import type { QueryResponseData } from "../../../base";

type ContractData =
  MittwaldAPIV2.Operations.ContractGetDetailOfContractByAiHosting.ResponseData;

export interface CustomerAIPlanBehavior {
  list(
    customerId: string,
    query?: CustomerAIPlanListQueryData,
    options?: AxiosRequestConfig,
  ): Promise<QueryResponseData<CustomerAIPlanData>>;
  find(
    customerId: string,
    planId: string,
    topUsageCount?: number,
    options?: AxiosRequestConfig,
  ): Promise<CustomerAIPlanData | undefined>;
  findContract(
    customerId: string,
    planId: string,
    options?: AxiosRequestConfig,
  ): Promise<ContractData | undefined>;
  updateName(customerId: string, planId: string, name: string): Promise<void>;
  acceptModelTerms(customerId: string): Promise<void>;
  declareProfile(customerId: string): Promise<void>;
}
