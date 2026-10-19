export const arrayRemoveItem = <T>(
  items: T[],
  pred: (i: T) => boolean,
): void => {
  items.splice(items.findIndex(pred), 1);
};
