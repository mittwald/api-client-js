import { z } from "zod";

import { ContainerVolumeRelation } from "./ContainerVolumeRelation";
import { parseRamLimitToGb, parseCpuLimit } from "./resourceLimits";
import { ContainerPort } from "./ContainerPort";
import { volumeNameRegExp } from "../Volume";
import {
  containerServiceNameMaxLength,
  containerServiceNameRegex,
  containerFilePathRegex,
  containerMaxTextLength,
  containerEnvKeyRegex,
  containerPortRegExp,
} from "./types";

export const containerCommandMaxLength = 8000;

const commandLength = (value: string[] | string): number =>
  Array.isArray(value) ? value.join(" ").length : value.length;

/** Omitting the field means "use the image's default"; an empty value doesn't. */
const dockerComposeCommandSchema = z
  .union([z.string(), z.array(z.string())])
  .superRefine((value, ctx) => {
    const length = commandLength(value);

    if (length === 0) {
      ctx.addIssue({ params: { reason: "required" }, code: "custom" });
      return;
    }

    if (length > containerCommandMaxLength) {
      ctx.addIssue({ params: { reason: "tooLong" }, code: "custom" });
    }
  });

/**
 * Format must pass first — `ContainerPort`'s constructor throws on a malformed
 * value.
 */
const isValidPortFormat = (port: string): boolean =>
  containerPortRegExp.test(port) && ContainerPort.validatePort(port);

const nonEmptyPortSchema = z.preprocess(
  (value) => (typeof value === "number" ? String(value) : value),
  z
    .string()
    .min(1)
    .superRefine((port, ctx) => {
      if (!isValidPortFormat(port)) {
        ctx.addIssue({ params: { reason: "invalidFormat" }, code: "custom" });
        return;
      }
      if (!ContainerPort.hasEqualMapping(port)) {
        ctx.addIssue({
          params: { reason: "mappingNotSupported" },
          code: "custom",
        });
      }
    }),
);

/** Rejects duplicate ports, matching the manual "add port" form. */
const dockerComposePortsSchema = z
  .array(nonEmptyPortSchema)
  .superRefine((ports, ctx) => {
    const seen = new Set<string>();

    ports.forEach((port, index) => {
      if (!isValidPortFormat(port)) {
        return;
      }

      const normalized = new ContainerPort(port).toString();
      if (seen.has(normalized)) {
        ctx.addIssue({
          params: { reason: "duplicatePort" },
          code: "custom",
          path: [index],
        });
        return;
      }
      seen.add(normalized);
    });
  });

/** Compose reserves `x-*` keys for user extensions — ignored, not errored on. */
const stripExtensionFields = (value: unknown): unknown =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? Object.fromEntries(
        Object.entries(value).filter(([key]) => !key.startsWith("x-")),
      )
    : value;

/** Valid but unused top-level fields — dropped like `x-*` extensions. */
const TOP_LEVEL_IGNORED_KEYS = new Set(["version", "name"]);

const stripIgnoredTopLevelFields = (value: unknown): unknown => {
  const withoutExtensions = stripExtensionFields(value);

  return typeof withoutExtensions === "object" &&
    withoutExtensions !== null &&
    !Array.isArray(withoutExtensions)
    ? Object.fromEntries(
        Object.entries(withoutExtensions).filter(
          ([key]) => !TOP_LEVEL_IGNORED_KEYS.has(key),
        ),
      )
    : withoutExtensions;
};

const isValidEnvKey = (key: string): boolean =>
  key.length > 0 &&
  key.length <= containerMaxTextLength &&
  containerEnvKeyRegex.test(key);

const isValidEnvValue = (value: string): boolean =>
  value.trim().length > 0 && value.length <= containerMaxTextLength;

/**
 * List-form entries aren't keyed like the map form, so each is checked
 * individually.
 */
const dockerComposeEnvListEntrySchema = z
  .string()
  .min(1)
  .superRefine((entry, ctx) => {
    const [key = "", value = ""] = entry.split(/=(.*)/s);

    if (!isValidEnvKey(key)) {
      ctx.addIssue({ params: { reason: "invalidEnvKey" }, code: "custom" });
      return;
    }

    if (!isValidEnvValue(value)) {
      ctx.addIssue({
        params: { reason: "invalidEnvValue", envKey: key },
        code: "custom",
      });
    }
  });

const dockerComposeEnvListSchema = z
  .array(dockerComposeEnvListEntrySchema)
  .superRefine((entries, ctx) => {
    const seenKeys = new Set<string>();

    entries.forEach((entry, index) => {
      const [key = ""] = entry.split(/=(.*)/s);

      if (seenKeys.has(key)) {
        ctx.addIssue({
          params: { reason: "duplicateEnvKey", envKey: key },
          code: "custom",
          path: [index],
        });
      }
      seenKeys.add(key);
    });
  });

const dockerComposeEnvMapSchema = z
  .record(
    z.string().min(1).max(containerMaxTextLength).regex(containerEnvKeyRegex),
    z.union([z.string(), z.number(), z.boolean(), z.null()]),
  )
  .superRefine((entries, ctx) => {
    Object.entries(entries).forEach(([key, value]) => {
      const stringValue =
        typeof value === "string" ? value : String(value ?? "");

      if (
        (typeof value === "string" || value === null) &&
        !isValidEnvValue(stringValue)
      ) {
        ctx.addIssue({
          params: { reason: "invalidEnvValue", envKey: key },
          code: "custom",
          path: [key],
        });
      }
    });
  });

const dockerComposeEnvironmentSchema = z.union([
  dockerComposeEnvMapSchema,
  dockerComposeEnvListSchema,
]);

/**
 * Only the container-facing half of `<source>:<containerPath>` has a format to
 * check.
 */
const isValidVolumeMount = (mount: string): boolean => {
  const relation = new ContainerVolumeRelation(mount);

  if (
    !relation.containerPath ||
    relation.containerPath.length > containerMaxTextLength ||
    !containerFilePathRegex.test(relation.containerPath)
  ) {
    return false;
  }

  return (
    relation.type !== "directory" ||
    (relation.projectPath?.length ?? 0) <= containerMaxTextLength
  );
};

const isRelativeBindMountSource = (source: string): boolean =>
  !source.startsWith("/") &&
  (source === "." || source === ".." || source.includes("/"));

/** Rejects mount-mode suffixes like `:ro` — the API has no mode of its own. */
const hasUnsupportedMountMode = (mount: string): boolean =>
  mount.split(":").length > 2;

const dockerComposeVolumeMountSchema = z
  .string()
  .min(1)
  .superRefine((mount, ctx) => {
    const [source = ""] = mount.split(":");

    if (isRelativeBindMountSource(source)) {
      ctx.addIssue({ params: { reason: "relativeBindMount" }, code: "custom" });
      return;
    }

    if (hasUnsupportedMountMode(mount)) {
      ctx.addIssue({
        params: { reason: "unsupportedMountMode" },
        code: "custom",
      });
      return;
    }

    if (!isValidVolumeMount(mount)) {
      ctx.addIssue({ code: "custom" });
    }
  });

/** Rejects a second mount at the same container path, matching the manual modal. */
const dockerComposeVolumesSchema = z
  .array(dockerComposeVolumeMountSchema)
  .superRefine((mounts, ctx) => {
    const seenPaths = new Set<string>();

    mounts.forEach((mount, index) => {
      const { containerPath } = new ContainerVolumeRelation(mount);
      if (!containerPath) {
        return;
      }

      if (seenPaths.has(containerPath)) {
        ctx.addIssue({
          params: { reason: "duplicateVolumePath" },
          code: "custom",
          path: [index],
        });
        return;
      }
      seenPaths.add(containerPath);
    });
  });

/** Reuses the manual "Edit Resource Limits" modal's own parsers. */
const dockerComposeDeployLimitsSchema = z
  .object({
    memory: z.union([z.string(), z.number()]).transform(String).optional(),
    cpus: z.union([z.string(), z.number()]).transform(String).optional(),
  })
  .strict()
  .superRefine((limits, ctx) => {
    if (limits.cpus !== undefined && parseCpuLimit(limits.cpus) === undefined) {
      ctx.addIssue({
        params: { reason: "invalidCpuLimit" },
        code: "custom",
        path: ["cpus"],
      });
    }

    if (
      limits.memory !== undefined &&
      parseRamLimitToGb(limits.memory) === undefined
    ) {
      ctx.addIssue({
        params: { reason: "invalidMemoryLimit" },
        path: ["memory"],
        code: "custom",
      });
    }
  });

const dockerComposeDeploySchema = z
  .object({
    resources: z
      .object({ limits: dockerComposeDeployLimitsSchema.optional() })
      .strict()
      .optional(),
  })
  .strict();

const dockerComposeServiceObjectSchema = z
  .object({
    environment: dockerComposeEnvironmentSchema.optional(),
    entrypoint: dockerComposeCommandSchema.optional(),
    command: dockerComposeCommandSchema.optional(),
    volumes: dockerComposeVolumesSchema.optional(),
    deploy: dockerComposeDeploySchema.optional(),
    ports: dockerComposePortsSchema.optional(),
    image: z.string().min(1),
  })
  .strict();

const dockerComposeServiceSchema = z.preprocess(
  stripExtensionFields,
  dockerComposeServiceObjectSchema,
);

const dockerComposeObjectSchema = z
  .object({
    services: z.record(
      z
        .string()
        .min(1)
        .max(containerServiceNameMaxLength)
        .regex(containerServiceNameRegex),
      dockerComposeServiceSchema,
    ),
    volumes: z
      .record(
        z.string().min(1).max(containerMaxTextLength).regex(volumeNameRegExp),
        z.unknown(),
      )
      .optional(),
  })
  .strict();

export const dockerComposeSchema = z.preprocess(
  stripIgnoredTopLevelFields,
  dockerComposeObjectSchema,
);

export const supportedDockerComposeTopLevelFields = Object.keys(
  dockerComposeObjectSchema.shape,
).sort();

export const supportedDockerComposeServiceFields = Object.keys(
  dockerComposeServiceObjectSchema.shape,
).sort();

export type DockerComposeData = z.infer<typeof dockerComposeSchema>;
export type DockerComposeServiceData = z.infer<
  typeof dockerComposeServiceSchema
>;
