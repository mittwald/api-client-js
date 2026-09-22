import type { ErrorCode as YamlErrorCode } from "yaml";
import type { z } from "zod";

import { YAMLParseError, stringify, parse } from "yaml";

import type { ContainerStackCommon } from "./ContainerStack";
import type { ContainerListItem } from "./Container";
import type { VolumeListItem } from "../Volume";
import type {
  DockerComposeServiceData,
  DockerComposeData,
} from "./DockerComposeSchema";
import type {
  ContainerStackDeclareRequestData,
  ContainerDeclareServiceData,
} from "./types";

import { containerServiceNameMaxLength, containerMaxTextLength } from "./types";
import { ContainerVolumeRelation } from "./ContainerVolumeRelation";
import { ContainerEnvVariableList } from "./ContainerEnvVariable";
import { shellSplit } from "../lib/shellwords";
import { Container } from "./Container";
import {
  containerCommandMaxLength,
  dockerComposeSchema,
} from "./DockerComposeSchema";

const getServiceVolumes = (container: ContainerListItem): string[] =>
  container.pendingState.volumes.items
    .filter((relation) => relation.containerPath)
    .map((relation) => relation.data);

const getServiceEnvironment = (
  container: ContainerListItem,
): Record<string, string> | undefined => {
  const envs = container.pendingState.envs;

  return envs.items.length > 0 ? envs.toApiDataObject() : undefined;
};

const getServiceDeploy = (container: ContainerListItem) => {
  if (!container.cpuLimit && !container.ramLimit) {
    return undefined;
  }

  return {
    resources: {
      limits: {
        ...(container.cpuLimit ? { cpus: container.cpuLimit } : {}),
        ...(container.ramLimit ? { memory: container.ramLimit } : {}),
      },
    },
  };
};

const getService = (container: ContainerListItem) => {
  const ports = container.pendingState.ports.items.map((port) =>
    port.toString(),
  );
  const volumes = getServiceVolumes(container);
  const environment = getServiceEnvironment(container);
  const deploy = getServiceDeploy(container);

  return {
    image: container.pendingState.imageReference,
    ...(container.pendingState.command
      ? { command: container.pendingState.command }
      : {}),
    ...(container.pendingState.entrypoint
      ? { entrypoint: container.pendingState.entrypoint }
      : {}),
    ...(environment ? { environment } : {}),
    ...(ports.length > 0 ? { ports } : {}),
    ...(volumes.length > 0 ? { volumes } : {}),
    ...(deploy ? { deploy } : {}),
  };
};

const getVolumes = (
  volumes: VolumeListItem[],
): Record<string, Record<string, never>> | undefined =>
  volumes.length > 0
    ? Object.fromEntries(volumes.map((volume) => [volume.name, {}]))
    : undefined;

export interface DockerComposeValidationIssue {
  params?: Record<string, unknown>;
  key: string;
}

export class DockerComposeValidationError extends Error {
  public readonly issues: readonly DockerComposeValidationIssue[];

  public constructor(issues: readonly DockerComposeValidationIssue[]) {
    super(
      `Invalid docker-compose YAML: ${issues.map((issue) => issue.key).join(", ")}`,
    );
    this.issues = issues;
  }
}

/**
 * Unwraps an `invalid_union` issue to whichever branch isn't a generic type
 * mismatch.
 */
const resolveUnionIssue = (issue: z.core.$ZodIssue): z.core.$ZodIssue => {
  if (issue.code !== "invalid_union") {
    return issue;
  }

  const candidates = issue.errors.flat();
  const specific =
    candidates.find((nested) => nested.code !== "invalid_type") ??
    candidates[0];

  return specific
    ? { ...specific, path: [...issue.path, ...specific.path] }
    : issue;
};

/**
 * Maps `yaml`'s error codes to German messages — its own `error.message` is
 * English-only.
 */
const YAML_SYNTAX_ERROR_KEYS: Partial<Record<YamlErrorCode, string>> = {
  UNEXPECTED_TOKEN: "dockerComposeEditor.yaml.syntaxError.unexpectedToken",
  BAD_SCALAR_START: "dockerComposeEditor.yaml.syntaxError.badScalarStart",
  DUPLICATE_KEY: "dockerComposeEditor.yaml.syntaxError.duplicateKey",
  MULTIPLE_DOCS: "dockerComposeEditor.yaml.syntaxError.multipleDocs",
  TAB_AS_INDENT: "dockerComposeEditor.yaml.syntaxError.tabAsIndent",
  BAD_DQ_ESCAPE: "dockerComposeEditor.yaml.syntaxError.badDqEscape",
  MISSING_CHAR: "dockerComposeEditor.yaml.syntaxError.missingChar",
  BAD_INDENT: "dockerComposeEditor.yaml.syntaxError.badIndent",
};

const formatYamlParseError = (
  error: YAMLParseError,
): DockerComposeValidationIssue => {
  const [start] = error.linePos ?? [];

  return {
    key:
      YAML_SYNTAX_ERROR_KEYS[error.code] ??
      "dockerComposeEditor.yaml.syntaxErrorGeneric",
    params: {
      column: start?.col ?? 1,
      line: start?.line ?? 1,
      code: error.code,
    },
  };
};

const serviceNameFromPath = (issue: z.core.$ZodIssue): unknown => issue.path[1];

/** Maps each segment's issue reason to a message, per segment. */
const SEGMENT_ISSUE_RULES: Record<
  string,
  {
    byReason: Record<
      string,
      (issue: z.core.$ZodIssueCustom) => DockerComposeValidationIssue
    >;
    customFallback: (
      issue: z.core.$ZodIssueCustom,
    ) => DockerComposeValidationIssue;
    nonCustomFallback: (
      issue: z.core.$ZodIssue,
    ) => DockerComposeValidationIssue;
  }
> = {
  environment: {
    byReason: {
      duplicateEnvKey: (issue) => ({
        params: {
          service: serviceNameFromPath(issue),
          key: issue.params?.envKey,
        },
        key: "dockerComposeEditor.yaml.duplicateEnvKey",
      }),
      invalidEnvValue: (issue) => ({
        params: {
          service: serviceNameFromPath(issue),
          key: issue.params?.envKey,
        },
        key: "dockerComposeEditor.yaml.invalidEnvValue",
      }),
      invalidEnvKey: (issue) => ({
        params: { service: serviceNameFromPath(issue) },
        key: "dockerComposeEditor.yaml.invalidEnvKey",
      }),
    },
    customFallback: (issue) => ({
      params: {
        service: serviceNameFromPath(issue),
        key: issue.params?.envKey,
      },
      key: "dockerComposeEditor.yaml.invalidEnvValue",
    }),
    nonCustomFallback: (issue) => ({
      params: { service: serviceNameFromPath(issue), key: undefined },
      key: "dockerComposeEditor.yaml.invalidEnvValue",
    }),
  },
  volumes: {
    byReason: {
      relativeBindMount: (issue) => ({
        key: "dockerComposeEditor.yaml.relativeBindMountNotSupported",
        params: { service: serviceNameFromPath(issue) },
      }),
      unsupportedMountMode: (issue) => ({
        key: "dockerComposeEditor.yaml.volumeModeNotSupported",
        params: { service: serviceNameFromPath(issue) },
      }),
      duplicateVolumePath: (issue) => ({
        key: "dockerComposeEditor.yaml.duplicateVolumePath",
        params: { service: serviceNameFromPath(issue) },
      }),
    },
    customFallback: (issue) => ({
      key: "dockerComposeEditor.yaml.invalidVolumeMountPath",
      params: { service: serviceNameFromPath(issue) },
    }),
    nonCustomFallback: (issue) => ({
      params: { service: serviceNameFromPath(issue) },
      key: "dockerComposeEditor.yaml.emptyVolume",
    }),
  },
  ports: {
    byReason: {
      mappingNotSupported: (issue) => ({
        key: "dockerComposeEditor.yaml.portMappingNotSupported",
        params: { service: serviceNameFromPath(issue) },
      }),
      duplicatePort: (issue) => ({
        params: { service: serviceNameFromPath(issue) },
        key: "dockerComposeEditor.yaml.duplicatePort",
      }),
      invalidFormat: (issue) => ({
        params: { service: serviceNameFromPath(issue) },
        key: "dockerComposeEditor.yaml.invalidPort",
      }),
    },
    customFallback: (issue) => ({
      key: "dockerComposeEditor.yaml.portMappingNotSupported",
      params: { service: serviceNameFromPath(issue) },
    }),
    nonCustomFallback: (issue) => ({
      params: { service: serviceNameFromPath(issue) },
      key: "dockerComposeEditor.yaml.emptyPort",
    }),
  },
};

const resolveSegmentIssue = (
  segment: unknown,
  issue: z.core.$ZodIssue,
): DockerComposeValidationIssue | undefined => {
  const rules =
    typeof segment === "string" ? SEGMENT_ISSUE_RULES[segment] : undefined;
  if (!rules) {
    return undefined;
  }

  if (issue.code !== "custom") {
    return rules.nonCustomFallback(issue);
  }

  const reason =
    typeof issue.params?.reason === "string" ? issue.params.reason : undefined;
  const rule = reason ? rules.byReason[reason] : undefined;

  return rule ? rule(issue) : rules.customFallback(issue);
};

const formatDockerComposeIssue = (
  rawIssue: z.core.$ZodIssue,
): DockerComposeValidationIssue => {
  const issue = resolveUnionIssue(rawIssue);
  const path = issue.path.join(".");
  const parentSegment = issue.path[issue.path.length - 2];

  if (issue.code === "unrecognized_keys") {
    const field = issue.keys[0] ?? "";

    return path
      ? {
          key: "dockerComposeEditor.yaml.unsupportedField",
          params: { field, path },
        }
      : {
          key: "dockerComposeEditor.yaml.unsupportedTopLevelField",
          params: { field },
        };
  }

  if (issue.path.length === 0) {
    return { key: "dockerComposeEditor.yaml.emptyDocument" };
  }

  if (path === "services") {
    return { key: "dockerComposeEditor.yaml.missingServices" };
  }

  if (issue.code === "invalid_key" && parentSegment === "environment") {
    return {
      key: "dockerComposeEditor.yaml.invalidEnvKey",
      params: { service: issue.path[1] },
    };
  }

  if (issue.code === "invalid_key") {
    const isServiceKey = issue.path[0] === "services";
    const name = issue.path[1];
    const codes = issue.issues.map((nested) => nested.code);

    if (codes.includes("too_small")) {
      return {
        key: isServiceKey
          ? "dockerComposeEditor.yaml.emptyServiceName"
          : "dockerComposeEditor.yaml.emptyVolumeName",
      };
    }

    if (codes.includes("too_big")) {
      return {
        params: {
          maxLength: isServiceKey
            ? containerServiceNameMaxLength
            : containerMaxTextLength,
          name,
        },
        key: isServiceKey
          ? "dockerComposeEditor.yaml.serviceNameTooLong"
          : "dockerComposeEditor.yaml.volumeNameTooLong",
      };
    }

    return {
      key: isServiceKey
        ? "dockerComposeEditor.yaml.invalidServiceName"
        : "dockerComposeEditor.yaml.invalidVolumeName",
      params: { name },
    };
  }

  if (path.endsWith(".image")) {
    return {
      key: "dockerComposeEditor.yaml.imageRequired",
      params: { service: issue.path[1] },
    };
  }

  if (path.endsWith(".command") || path.endsWith(".entrypoint")) {
    const field = path.endsWith(".command") ? "command" : "entrypoint";
    const isTooLong =
      issue.code === "custom" && issue.params?.reason === "tooLong";

    return {
      key: isTooLong
        ? `dockerComposeEditor.yaml.${field}TooLong`
        : `dockerComposeEditor.yaml.${field}Required`,
      params: {
        service: issue.path[1],
        ...(isTooLong ? { maxLength: containerCommandMaxLength } : {}),
      },
    };
  }

  if (parentSegment === "limits" && issue.code === "custom") {
    return {
      key:
        issue.params?.reason === "invalidCpuLimit"
          ? "dockerComposeEditor.yaml.invalidCpuLimit"
          : "dockerComposeEditor.yaml.invalidMemoryLimit",
      params: { service: issue.path[1] },
    };
  }

  const segmentIssue = resolveSegmentIssue(parentSegment, issue);
  if (segmentIssue) {
    return segmentIssue;
  }

  return { key: "dockerComposeEditor.yaml.fieldInvalid", params: { path } };
};

const toArgArray = (value: string[] | string): string[] =>
  Array.isArray(value) ? value : shellSplit(value);

const toEnvironmentRecord = (
  environment: DockerComposeServiceData["environment"],
): Record<string, string> | undefined => {
  if (!environment) {
    return undefined;
  }

  if (Array.isArray(environment)) {
    return ContainerEnvVariableList.fromText(
      environment.join("\n"),
    ).toApiDataObject();
  }

  return Object.fromEntries(
    Object.entries(environment).map(([key, value]) => [key, String(value)]),
  );
};

const buildServiceDeclaration = (
  service: DockerComposeServiceData,
  description: string,
): ContainerDeclareServiceData => {
  const environment = toEnvironmentRecord(service.environment);

  return {
    image: service.image,
    description,
    ...(service.command ? { command: toArgArray(service.command) } : {}),
    ...(service.entrypoint
      ? { entrypoint: toArgArray(service.entrypoint) }
      : {}),
    ...(environment ? { environment } : {}),
    ...(service.ports ? { ports: service.ports } : {}),
    ...(service.volumes ? { volumes: service.volumes } : {}),
    ...(service.deploy ? { deploy: service.deploy } : {}),
  };
};

export interface ExistingContainerInfo {
  serviceName: string;
  description: string;
  image: string;
}

export class DockerCompose {
  private constructor(private readonly data: DockerComposeData) {}

  public static fromStack(
    stack: Pick<ContainerStackCommon, "containers" | "volumes">,
  ): DockerCompose {
    const services = Object.fromEntries(
      stack.containers.map((container) => [
        container.serviceName,
        getService(container),
      ]),
    );
    const volumes = getVolumes(stack.volumes);

    return new DockerCompose({
      services,
      ...(volumes ? { volumes } : {}),
    });
  }

  /**
   * @throws {DockerComposeValidationError} If `yamlText` is not valid YAML, or
   *   not compatible with the supported docker-compose subset.
   */
  public static parse(yamlText: string): DockerCompose {
    let parsed: unknown;

    try {
      parsed = parse(yamlText, { merge: true });
    } catch (error) {
      throw new DockerComposeValidationError([
        error instanceof YAMLParseError
          ? formatYamlParseError(error)
          : {
              params: {
                message: error instanceof Error ? error.message : String(error),
              },
              key: "dockerComposeEditor.yaml.invalidSyntax",
            },
      ]);
    }

    const result = dockerComposeSchema.safeParse(parsed);
    if (result.success) {
      return new DockerCompose(result.data);
    }

    throw new DockerComposeValidationError(
      result.error.issues.length > 0
        ? result.error.issues.map(formatDockerComposeIssue)
        : [
            {
              key: "dockerComposeEditor.yaml.fieldInvalid",
              params: { path: "" },
            },
          ],
    );
  }

  /**
   * Validates each changed service's image, like `ImageReferenceField`; stops
   * at the first invalid one.
   */
  public async findInvalidImage(
    existingContainers: readonly ExistingContainerInfo[],
    projectId: string,
    language?: string,
  ): Promise<{ service: string; reason: string } | undefined> {
    const imageByServiceName = new Map(
      existingContainers.map((container) => [
        container.serviceName,
        container.image,
      ]),
    );

    for (const [serviceName, service] of Object.entries(this.data.services)) {
      if (imageByServiceName.get(serviceName) === service.image) {
        continue;
      }

      const imageMeta = await Container.getImageMeta(
        service.image,
        projectId,
        undefined,
        language,
      );

      if (typeof imageMeta === "string") {
        return { service: serviceName, reason: imageMeta };
      }
    }

    return undefined;
  }

  public getUndeclaredVolumeReferences(
    existingVolumeNames: readonly string[],
  ): string[] {
    const declaredVolumeNames = new Set([
      ...Object.keys(this.data.volumes ?? {}),
      ...existingVolumeNames,
    ]);

    const referencedVolumeNames = new Set(
      Object.values(this.data.services)
        .flatMap((service) => service.volumes ?? [])
        .map((mount) => new ContainerVolumeRelation(mount))
        .filter((relation) => relation.type === "volume")
        .map((relation) => relation.volume)
        .filter((name): name is string => !!name),
    );

    return [...referencedVolumeNames].filter(
      (name) => !declaredVolumeNames.has(name),
    );
  }

  /**
   * Maps to the stack's declarative PUT payload — an omitted service is
   * deleted, an omitted volume is detached. Descriptions are carried over from
   * `existingContainers` since compose has no such field.
   */
  public toStackDeclareRequest(
    existingContainers: readonly Pick<
      ExistingContainerInfo,
      "serviceName" | "description"
    >[],
  ): ContainerStackDeclareRequestData {
    const descriptionByServiceName = new Map(
      existingContainers.map((container) => [
        container.serviceName,
        container.description,
      ]),
    );

    const services = Object.fromEntries(
      Object.entries(this.data.services).map(([key, service]) => [
        key,
        buildServiceDeclaration(
          service,
          descriptionByServiceName.get(key) ?? key,
        ),
      ]),
    );

    const volumes = this.data.volumes
      ? Object.fromEntries(
          Object.keys(this.data.volumes).map((key) => [key, { name: key }]),
        )
      : undefined;

    return {
      services,
      ...(volumes ? { volumes } : {}),
    };
  }

  public toYaml(): string {
    return stringify(this.data);
  }
}
