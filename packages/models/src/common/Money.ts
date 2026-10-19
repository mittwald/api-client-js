import Dinero from "dinero.js";

export const Money = Dinero;
Money.defaultCurrency = "EUR";
Money.defaultPrecision = 2;
Money.globalLocale = "de-DE";

export const ZeroMoney = Money({ amount: 0 });

export type Money = ReturnType<typeof Money>;
