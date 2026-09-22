import { ghostMakerModel } from "@mittwald/react-ghostmaker";
import is from "@sindresorhus/is";
import { ListQueryModel, Money, ReferenceModel } from "@mittwald/api-models";

function isMoney(something: unknown): something is Money {
  return (
    is.object(something) &&
    "getAmount" in something &&
    "getCurrency" in something &&
    is.function(something.getAmount) &&
    is.function(something.getCurrency)
  );
}

ghostMakerModel((something) => {
  if (!is.object(something)) {
    return undefined;
  }

  if (something instanceof ReferenceModel) {
    return {
      name: something.constructor.name,
      getId: () => something.id,
    };
  }

  if (something instanceof ListQueryModel) {
    return {
      name: something.constructor.name,
      getId: () => something.queryId,
    };
  }

  if (isMoney(something)) {
    return {
      name: "Money",
      getId: () => `${something.getAmount()}${something.getCurrency()}`,
    };
  }
});
