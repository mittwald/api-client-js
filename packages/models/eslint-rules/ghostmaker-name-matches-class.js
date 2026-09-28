const { ghostNameLiteral } = require("./ghostDecorator.js");

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

      const value = ghostNameLiteral(node);
      if (!value || value.value === className) return;

      context.report({
        node: value,
        messageId: "nameMismatch",
        data: { name: value.value, className },
        fix: value.range
          ? (fixer) => fixer.replaceTextRange(value.range, `"${className}"`)
          : undefined,
      });
    };

    return {
      ClassDeclaration: check,
      ClassExpression: check,
    };
  },
};

module.exports = rule;
