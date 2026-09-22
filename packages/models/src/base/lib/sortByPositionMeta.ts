interface WithPositionMeta {
  positionMeta?: {
    index?: number;
    step?: string;
  };
}

export function sortByPositionMeta<T extends WithPositionMeta>(
  items: T[],
  commonStep = "common",
): T[] {
  return [...items].sort((a, b) => {
    const aIsCommon = (a.positionMeta?.step ?? commonStep) === commonStep;
    const bIsCommon = (b.positionMeta?.step ?? commonStep) === commonStep;
    if (aIsCommon !== bIsCommon) {
      return aIsCommon ? -1 : 1;
    }
    return (a.positionMeta?.index ?? 0) - (b.positionMeta?.index ?? 0);
  });
}
