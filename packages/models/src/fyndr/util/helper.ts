const formatSalesVolume = (
  revenue: number,
  currencySuffix: string | undefined = undefined,
  digits = 1,
): string => {
  const formatted = revenue.toLocaleString("de-DE", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

  return [formatted, currencySuffix, "€"].filter(Boolean).join(" ");
};

export const getFormattedSalesVolume = (
  revenue: number | undefined = 0,
): string => {
  switch (true) {
    case revenue >= 1_000_000_000:
      return formatSalesVolume(revenue / 1_000_000_000, "Mrd.");
    case revenue >= 1_000_000:
      return formatSalesVolume(revenue / 1_000_000, "Mio.");
    case revenue >= 1_000:
      return formatSalesVolume(revenue / 1_000, "Tsd.");
    default:
      return formatSalesVolume(revenue);
  }
};
