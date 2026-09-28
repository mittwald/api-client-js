import { Bytes } from "../../common/index.js";

export const toPositiveLimit = (value?: number): number | undefined => {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : undefined;
};

export const parseCpuLimit = (
  cpuLimit?: string | number,
): number | undefined => {
  if (!cpuLimit) {
    return undefined;
  }

  const normalized = String(cpuLimit).trim().replace(",", ".");
  return toPositiveLimit(Number.parseFloat(normalized));
};

export const parseRamLimitToGb = (
  ramLimit?: string | number,
): number | undefined => {
  if (!ramLimit) {
    return undefined;
  }

  const normalized = String(ramLimit).trim();

  try {
    return toPositiveLimit(Bytes.parse(normalized).in("GiB"));
  } catch {
    return toPositiveLimit(Number.parseFloat(normalized));
  }
};

export const formatRamLimit = (ramLimitInGb?: number): string | undefined => {
  const limit = toPositiveLimit(ramLimitInGb);

  if (limit === undefined) {
    return undefined;
  }

  const limitInMb = Math.round(Bytes.of(limit, "GiB").in("MiB"));
  return limitInMb > 0 ? `${limitInMb}mb` : undefined;
};
