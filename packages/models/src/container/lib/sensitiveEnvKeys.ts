/**
 * Sensitive environment-key rules:
 *
 * - `pass` covers password material such as `ADMIN_PASSWORD`; `BYPASS_CACHE` is a
 *   known accepted false positive.
 * - `secret` covers secret material such as `APP_SECRET`.
 * - `token` covers token material such as `ADMIN_TOKEN`.
 * - `apikey` covers API keys such as `OPENAI_API_KEY`.
 * - `accesskey` covers `AWS_ACCESS_KEY_ID`.
 * - `privatekey` covers private keys such as `SSH_PRIVATE_KEY`.
 * - `credential` covers credential references such as
 *   `GOOGLE_APPLICATION_CREDENTIALS`.
 * - `pwd` covers password abbreviations such as `SMTP_PWD`.
 * - `creds` covers credential material such as `CREDS_IV`.
 * - `salt` covers hashing and crypto material such as `SIG_SALT`.
 * - `dsn` covers secret-bearing connection strings such as `MEMOS_DSN`.
 * - Trailing whole-token `key` covers key material such as `APP_KEY`.
 * - Descriptor suffixes match only the final whole token.
 * - Descriptor prefixes match only the first whole token.
 * - `use` is omitted because it collides with secret-bearing `USER_*` keys.
 * - Bare `key` stays omitted because it would match `KEYCLOAK_URL` and
 *   `KEYBOARD_LAYOUT`; only trailing `key` is sensitive.
 * - Bare `auth` stays omitted because harmless keys such as `MAIL_SMTP_AUTH`,
 *   `WEBUI_AUTH`, and `SMTP_AUTHENTICATION` make it too broad.
 * - Exact `PWD` stays visible because it is the standard working-directory
 *   variable.
 * - Known accepted misses are `MP_SMTP_AUTH`, `MP_UI_AUTH`, and
 *   `CREATE_SUPERUSER`; their `user:password` values cannot be inferred safely
 *   from their keys.
 */
const sensitiveEnvKeywords = [
  "pass",
  "secret",
  "token",
  "apikey",
  "accesskey",
  "privatekey",
  "credential",
  "pwd",
  "creds",
  "salt",
  "dsn",
] as const;

const sensitiveEnvSuffixes = ["key"] as const;

const descriptorEnvSuffixes = [
  "path",
  "file",
  "type",
  "limit",
  "enabled",
  "disabled",
  "required",
] as const;

const descriptorEnvPrefixes = [
  "allow",
  "enable",
  "disable",
  "require",
  "skip",
] as const;

export const maskedValuePlaceholder = "•••••••••";

const normalizeEnvKey = (key: string): string =>
  key.toLowerCase().replace(/[^a-z0-9]/g, "");

const envKeyTokens = (key: string): string[] =>
  key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

export const isSensitiveEnvKey = (key: string): boolean => {
  const normalizedKey = normalizeEnvKey(key);
  const tokens = envKeyTokens(key);
  const firstToken = tokens.at(0);
  const lastToken = tokens.at(-1);

  if (
    descriptorEnvSuffixes.some((suffix) => lastToken === suffix) ||
    descriptorEnvPrefixes.some((prefix) => firstToken === prefix)
  ) {
    return false;
  }

  if (normalizedKey === "pwd") {
    return false;
  }

  return (
    sensitiveEnvKeywords.some((keyword) => normalizedKey.includes(keyword)) ||
    sensitiveEnvSuffixes.some((suffix) => lastToken === suffix)
  );
};

export const maskUrlCredentials = (value: string): string =>
  value.replace(
    /(:\/\/[^:/?#]*:)([^@/?#]+)(@)/,
    `$1${maskedValuePlaceholder}$3`,
  );

export const maskSensitiveEnvValue = (key: string, value: string): string =>
  isSensitiveEnvKey(key) ? maskedValuePlaceholder : maskUrlCredentials(value);
