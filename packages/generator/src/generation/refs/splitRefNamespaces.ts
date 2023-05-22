export const splitRefNamespaces = ($ref: string): string[] =>
  $ref.split("/").filter((ns) => ns !== "#" && ns !== "");
