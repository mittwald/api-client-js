import { expect, test } from "vitest";

import {
  maskedValuePlaceholder,
  maskSensitiveEnvValue,
  maskUrlCredentials,
  isSensitiveEnvKey,
} from "./sensitiveEnvKeys.js";

test("isSensitiveEnvKey identifies sensitive environment keys", () => {
  const sensitiveKeys = [
    "PASSWORD",
    "DB_PASSWORD",
    "MYSQL_PASSWD",
    "admin_pass",
    "PASSPHRASE",
    "JWT_SECRET",
    "CLIENT_SECRET",
    "AUTH_TOKEN",
    "auth_token",
    "API_KEY",
    "api-key",
    "apiKey",
    "APIKEY",
    "AWS_ACCESS_KEY_ID",
    "SSH_PRIVATE_KEY",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "HASH_SALT",
    "SENTRY_DSN",
  ];

  sensitiveKeys.forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeTruthy();
  });
});

test("isSensitiveEnvKey leaves harmless environment keys visible", () => {
  const harmlessKeys = [
    "PWD",
    "GIT_AUTHOR_NAME",
    "AUTH_URL",
    "KEYCLOAK_URL",
    "PORT",
    "NODE_ENV",
    "DEBUG",
    "DATABASE_URL",
    "USE_TLS",
    "USERNAME",
  ];

  harmlessKeys.forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeFalsy();
  });
});

test("isSensitiveEnvKey preserves descriptor word boundaries for non-corpus collision keys", () => {
  ["USER_PASSWORD", "USERPASS", "USER_TOKEN", "REQUIRED_TOKEN"].forEach(
    (key) => {
      expect(isSensitiveEnvKey(key)).toBeTruthy();
    },
  );
});

test("isSensitiveEnvKey masks all real keys covered by the trailing-key rule", () => {
  const trailingKeySecrets = [
    "APP_KEY",
    "CREDS_KEY",
    "ENCRYPTION_KEY",
    "MEILI_MASTER_KEY",
    "N8N_ENCRYPTION_KEY",
    "PWPUSH_MASTER_KEY",
    "SIG_KEY",
  ];

  trailingKeySecrets.forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeTruthy();
  });
});

test("isSensitiveEnvKey masks LICENSE_KEY as an authorization credential", () => {
  expect(isSensitiveEnvKey("LICENSE_KEY")).toBeTruthy();
});

test("isSensitiveEnvKey does not treat non-trailing or descriptor key references as secrets", () => {
  ["KEYBOARD_LAYOUT", "PUBLIC_KEY_PATH"].forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeFalsy();
  });
});

test("isSensitiveEnvKey masks SMTP_PWD but keeps the working-directory PWD visible", () => {
  expect(isSensitiveEnvKey("SMTP_PWD")).toBeTruthy();
  expect(isSensitiveEnvKey("PWD")).toBeFalsy();
});

test("isSensitiveEnvKey masks the real CREDS_IV credential material", () => {
  expect(isSensitiveEnvKey("CREDS_IV")).toBeTruthy();
});

[
  ["SECRETKEY_PATH", "/root/.flowise"],
  ["SECRETKEY_STORAGE_TYPE", "local"],
  ["GENERIC_OPEN_AI_MODEL_TOKEN_LIMIT", "131072"],
  ["NEXT_PUBLIC_CREDENTIALS_ENABLED", "true"],
  ["ALLOW_PASSWORD_RESET", "true"],
].forEach(([key, realValue]) => {
  test(`isSensitiveEnvKey keeps descriptor ${key}=${realValue} visible`, () => {
    expect(isSensitiveEnvKey(key)).toBeFalsy();
  });
});

test("isSensitiveEnvKey descriptor exclusions never unmask confirmed secret-bearing keys", () => {
  const confirmedSecretKeys = [
    "ADMIN_PASSWORD",
    "ADMIN_TOKEN",
    "APP_SECRET",
    "AUTH_SECRET",
    "AUTH_TOKEN",
    "FLOWISE_SECRETKEY_OVERWRITE",
    "JWT_SECRET",
    "SECRET",
    "SECRET_KEY",
    "SECRET_KEY_BASE",
    "SECRET_PASSWORD",
    "POSTGRES_PASSWORD",
    "MARIADB_ROOT_PASSWORD",
    "LISTMONK_db__password",
    "MM_EMAILSETTINGS_SMTPPASSWORD",
    "OPENPROJECT_SMTP__PASSWORD",
    "QDRANT__SERVICE__API_KEY",
    "SIG_SALT",
    "MEMOS_DSN",
    "TOKEN_HASH_SECRET",
    "OPENAI_API_KEY",
    "RAG_OPENAI_API_KEY",
  ];

  confirmedSecretKeys.forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeTruthy();
  });
});

test("isSensitiveEnvKey masks BYPASS_* as an accepted false positive of the pass keyword", () => {
  expect(isSensitiveEnvKey("BYPASS_CACHE")).toBeTruthy();
});

test("isSensitiveEnvKey records known auth-pair limitations as currently visible", () => {
  ["MP_SMTP_AUTH", "MP_UI_AUTH", "CREATE_SUPERUSER"].forEach((key) => {
    expect(isSensitiveEnvKey(key)).toBeFalsy();
  });
});

test("maskUrlCredentials masks only a URL password", () => {
  const masked = maskUrlCredentials(
    "postgres://appuser:s3cr3t@db.example.com:5432/appdb",
  );

  expect(masked).toBe(
    `postgres://appuser:${maskedValuePlaceholder}@db.example.com:5432/appdb`,
  );
  expect(masked).not.toContain("s3cr3t");
});

test("maskUrlCredentials masks a password with an empty username", () => {
  expect(maskUrlCredentials("redis://:supersecret@redis:6379")).toBe(
    `redis://:${maskedValuePlaceholder}@redis:6379`,
  );
});

test("maskUrlCredentials preserves paths and queries after masking", () => {
  const urls = [
    [
      "mongodb://librechat:s3cr3t@mongodb:27017/L?authSource=admin",
      `mongodb://librechat:${maskedValuePlaceholder}@mongodb:27017/L?authSource=admin`,
    ],
    [
      "smtp://box:s3cr3t@mail.agenturserver.de?encryption=tls",
      `smtp://box:${maskedValuePlaceholder}@mail.agenturserver.de?encryption=tls`,
    ],
    [
      "mysql://kimai:s3cr3t@database/kimai?charset=utf8mb4",
      `mysql://kimai:${maskedValuePlaceholder}@database/kimai?charset=utf8mb4`,
    ],
  ];

  urls.forEach(([value, expected]) => {
    expect(maskUrlCredentials(value)).toBe(expected);
  });
});

test("maskUrlCredentials leaves a credential-free URL unchanged", () => {
  const credentialFreeUrls = [
    "redis://redis:6379",
    "https://example.com/path",
    "http://user@example.com/x",
  ];

  credentialFreeUrls.forEach((url) => {
    expect(maskUrlCredentials(url)).toBe(url);
  });
});

test("maskUrlCredentials leaves a plain non-URL value unchanged", () => {
  expect(maskUrlCredentials("8080")).toBe("8080");
});

test("maskSensitiveEnvValue masks a sensitive key regardless of its value", () => {
  expect(maskSensitiveEnvValue("JWT_SECRET", "visible-value")).toBe(
    maskedValuePlaceholder,
  );
});

test("maskSensitiveEnvValue masks URL credentials for a non-sensitive key", () => {
  expect(
    maskSensitiveEnvValue(
      "DATABASE_URL",
      "postgres://appuser:s3cr3t@db.example.com:5432/appdb",
    ),
  ).toBe(
    `postgres://appuser:${maskedValuePlaceholder}@db.example.com:5432/appdb`,
  );
});

test("maskSensitiveEnvValue leaves a harmless key and value unchanged", () => {
  expect(maskSensitiveEnvValue("PORT", "8080")).toBe("8080");
});
