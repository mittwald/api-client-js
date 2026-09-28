const GHOST_DECORATOR = "GhostMakerModel";

const propertyName = (key) => {
  if (!key) return undefined;
  if (key.type === "Identifier") return key.name;
  if (key.type === "Literal" && typeof key.value === "string") return key.value;
  return undefined;
};

/**
 * The `name` of a class's `@GhostMakerModel({ name })` decorator as its string
 * `Literal` node, so a rule can both read the name and report or fix it in
 * place.
 *
 * Returns `undefined` when the class carries no such decorator, when the
 * decorator has no `name` (the abstract bases `ReferenceModel`/`ListQueryModel`
 * pass only `getId`), or when `name` is not a static string (the scoped-AI
 * factory's `name: cfg.ghostName`) — nothing to check statically in any of
 * these cases.
 *
 * @param {import("estree").Node & { decorators?: any[] }} classNode
 * @returns {(import("estree").Literal & { value: string }) | undefined}
 */
const ghostNameLiteral = (classNode) => {
  for (const decorator of classNode.decorators ?? []) {
    const expr = decorator.expression;
    if (
      !expr ||
      expr.type !== "CallExpression" ||
      expr.callee?.type !== "Identifier" ||
      expr.callee.name !== GHOST_DECORATOR
    ) {
      continue;
    }
    const arg = (expr.arguments ?? [])[0];
    if (!arg || arg.type !== "ObjectExpression") continue;
    for (const prop of arg.properties ?? []) {
      if (prop.type !== "Property") continue;
      if (propertyName(prop.key) !== "name") continue;
      const value = prop.value;
      if (value?.type === "Literal" && typeof value.value === "string") {
        return value;
      }
      return undefined;
    }
  }
  return undefined;
};

module.exports = { ghostNameLiteral };
