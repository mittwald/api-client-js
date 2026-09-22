import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { AxiosRequestConfig } from "axios";

import type { FinderProfileRequestListItemData } from "../types";
import type { FinderProfileRequestBehaviors } from "./types";

import { withAxiosRequestConfig } from "../../../base/api/withModelRequestOptions";
import { validateResponse } from "../../../base/api/validateResponse";
import { Customer } from "../../../customer/Customer";

export const apiFinderProfileRequestBehaviors = (
  client: MittwaldAPIV2Client,
): FinderProfileRequestBehaviors => ({
  list: async () => {
    const customerList = await Customer.query().execute();

    const customersAndFinderProfile = await Promise.all(
      customerList.items.map(async (customer) => {
        const finderProfileRequestResult =
          await client.leadFyndr.leadfyndrGetLeadFyndrProfileRequest({
            customerId: customer.id,
          });

        return finderProfileRequestResult.status === 200
          ? finderProfileRequestResult.data
          : undefined;
      }),
    );

    const finderProfileRequests = customersAndFinderProfile.filter(
      (e) => e !== undefined,
    ) as FinderProfileRequestListItemData[];

    return {
      totalCount: finderProfileRequests.length,
      items: finderProfileRequests,
    };
  },
  find: async (customerId: string, options?: AxiosRequestConfig) => {
    const response = await client.leadFyndr.leadfyndrGetLeadFyndrProfileRequest(
      {
        customerId,
      },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
  },
  create: async (customerId, data) => {
    const response =
      await client.leadFyndr.leadfyndrCreateLeadFyndrAccessRequest({
        customerId,
        data,
      });

    validateResponse(response, 201);
  },
});
