/**
 * Enforces that a `@GhostMakerModel({ name: "..." })` decorator's static `name`
 * exactly matches the name of the class it decorates.
 *
 * The ghost name is the identity under which `@mittwald/react-ghostmaker`
 * resolves a model, so a stray/copy-pasted name silently points the resolution
 * at the wrong model. Keeping `name` === class name is a mandatory pattern for
 * every concrete model in the package.
 *
 * Intentionally NOT flagged (nothing to check statically):
 *
 * - Abstract base classes that pass only `getId` and no `name` (`ReferenceModel`,
 *   `ListQueryModel`) — no static name to compare.
 * - A `name` whose value is not a string literal, e.g. the scoped-AI factory's
 *   `name: cfg.ghostName` — resolved at runtime, verified at its call sites.
 */

const propertyName = (key) => {
  if (!key) return undefined;
  if (key.type === "Identifier") return key.name;
  if (key.type === "Literal" && typeof key.value === "string") return key.value;
  return undefined;
};

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description:
        "A @GhostMakerModel `name` must equal the decorated class name.",
    },
    schema: [],
    messages: {
      nameMismatch:
        'GhostMakerModel name "{{name}}" must match the class name "{{className}}". The ghost name is the model\'s identity — keep them in sync.',
    },
  },

  create(context) {
    const check = (node) => {
      const className = node.id?.name;
      if (!className) return;

      for (const decorator of node.decorators ?? []) {
        const expr = decorator.expression;
        if (
          !expr ||
          expr.type !== "CallExpression" ||
          expr.callee?.type !== "Identifier" ||
          expr.callee.name !== "GhostMakerModel"
        ) {
          continue;
        }

        const arg = (expr.arguments ?? [])[0];
        if (!arg || arg.type !== "ObjectExpression") continue;

        for (const prop of arg.properties ?? []) {
          if (prop.type !== "Property") continue;
          if (propertyName(prop.key) !== "name") continue;

          const value = prop.value;
          // Only a static string literal is comparable; skip dynamic names.
          if (
            !value ||
            value.type !== "Literal" ||
            typeof value.value !== "string"
          ) {
            return;
          }
          if (value.value === className) return;

          context.report({
            node: value,
            messageId: "nameMismatch",
            data: { name: value.value, className },
            fix: value.range
              ? (fixer) => fixer.replaceTextRange(value.range, `"${className}"`)
              : undefined,
          });
          return;
        }
      }
    };

    return {
      ClassDeclaration: check,
      ClassExpression: check,
    };
  },
};

module.exports = rule;
