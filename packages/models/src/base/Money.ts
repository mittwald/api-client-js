import Dinero from "dinero.js";

export const Money = Dinero;
Money.defaultCurrency = "EUR";
Money.defaultPrecision = 2;
Money.globalLocale = "de-DE";

export type Money = ReturnType<typeof Money>;
