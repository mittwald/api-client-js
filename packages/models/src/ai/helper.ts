export const formatTokenUsage = (tokens: number, digits = 1) => {
  const value = tokens / 1_000_000;
  const nf = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

  if (value === 0) {
    return "0";
  }

  const threshold = Math.pow(10, -digits); // bei digits=1 -> 0.1
  if (value > 0 && value < threshold) {
    return `< ${nf.format(threshold)}`;
  }

  return nf.format(value);
};
