import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import invariant from "tiny-invariant";
import { DateTime } from "luxon";

import type { UsageMetricsBehaviors } from "./types";

export const apiUsageMetricsBehaviors = (
  client: MittwaldAPIV2Client,
  backendUri: string,
): UsageMetricsBehaviors => ({
  getData: async (request) => {
    const { from, to, ...restApiData } = request;

    const response = await client.axios.post(backendUri, {
      from: from ? from : DateTime.now().toISO(),
      to: to ? to : DateTime.now().toISO(),
      ...restApiData,
    });

    invariant(response.status === 200, "Failed to fetch metrics data");

    return response.data;
  },
});
