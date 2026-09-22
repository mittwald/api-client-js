import type { AlertProps } from "@mittwald/flow-react-components";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { ContainerListItem } from "./Container";
import type { Project } from "../../project";
import type {
  ContainerTemplateTechnicalDetailData,
  ContainerTemplateUserInputValues,
  ContainerTemplateUserInputsData,
  ContainerTemplateListQueryData,
  ContainerTemplateListItemData,
  ContainerTemplateLicenseData,
  ContainerTemplateDomainData,
  ContainerTemplateCategory,
  ContainerTemplateApiData,
  ContainerTemplateType,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { maskSensitiveEnvValue } from "../lib/sensitiveEnvKeys";
import { ContainerStack } from "./ContainerStack";
import { AggregateMetaData } from "../../common";
import { config } from "../../config";
import {
  sortByPositionMeta,
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

export function localizeTemplateText(
  value: Record<"de" | "en", string>,
): string {
  return value[config.locale()] ?? value.de;
}

const hostnamePattern = /\$\{([^.]+)\.hostname\}/g;
const envPattern = /\$\{([^.]+)\.env\.(\w+)\}/g;
const domainPattern = /\$\{domain\.(\w+)\}/g;
const unresolvedPlaceholderPattern = /\$\{[^}]+\}/;

const resolveTechnicalDetailValue = (
  value: string,
  containers: ContainerListItem[],
  domains: Record<string, string>,
  mask: boolean,
): string =>
  value
    .replace(hostnamePattern, (match, serviceName) => {
      const container = containers.find((c) => c.serviceName === serviceName);
      return container ? container.serviceName : match;
    })
    .replace(envPattern, (match, serviceName, envKey) => {
      const container = containers.find((c) => c.serviceName === serviceName);
      const envValue = container?.pendingState.envs.data[envKey];
      if (envValue === undefined) return match;
      return mask ? maskSensitiveEnvValue(envKey, envValue) : envValue;
    })
    .replace(domainPattern, (match, purpose) => domains[purpose] ?? match);

@GhostMakerModel({
  name: "ContainerTemplate",
})
export class ContainerTemplate extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "container",
    "template",
  );

  public constructor(id: string) {
    super(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.container.findTemplate(id);
    if (data) {
      return new ContainerTemplateDetailed(data);
    }
  }

  public static findAggregate(templateId?: string) {
    return templateId
      ? { id: templateId, ...ContainerTemplate.aggregateMetaData }
      : undefined;
  }

  public static async get(id: string) {
    const template = await ContainerTemplate.find(id);
    assertObjectFound(template, ContainerTemplate, id);
    return template;
  }

  public static ofId(id: string) {
    return new ContainerTemplate(id);
  }

  public static query(query: ContainerTemplateListQueryData = {}) {
    return new ContainerTemplateListQuery(query);
  }

  public async findCommon(): Promise<ContainerTemplateCommon | undefined> {
    return this instanceof ContainerTemplateCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ContainerTemplateDetailed | undefined> {
    return ContainerTemplate.find(this.id);
  }

  public async getCommon(): Promise<ContainerTemplateCommon> {
    return this instanceof ContainerTemplateCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<ContainerTemplateDetailed> {
    return ContainerTemplate.get(this.id);
  }
}

export class ContainerTemplateCommon extends WithData<
  ContainerTemplateListItemData | ContainerTemplateApiData
>()(ContainerTemplate) {
  public readonly categories: ContainerTemplateCategory[];
  public override readonly data:
    | ContainerTemplateListItemData
    | ContainerTemplateApiData;
  public readonly developer: string;
  public readonly domains: ContainerTemplateDomainData;
  public readonly icon: string;
  public readonly license?: ContainerTemplateLicenseData;
  public readonly manifestVersion: string;
  public readonly repository?: string;
  public readonly support?: string;
  public readonly technicalDetails: ContainerTemplateTechnicalDetailData;
  public readonly type: ContainerTemplateType;
  public readonly userInputs: ContainerTemplateUserInputsData;
  public readonly version: string;
  public readonly website?: string;

  get alerts() {
    return (this.data.help?.alerts ?? []).map((alert) => ({
      linkText: alert.linkText
        ? localizeTemplateText(alert.linkText)
        : undefined,
      link: alert.link ? localizeTemplateText(alert.link) : undefined,
      status: alert.status as AlertProps["status"],
      heading: localizeTemplateText(alert.heading),
      content: localizeTemplateText(alert.content),
    }));
  }

  get description(): string {
    return localizeTemplateText(this.data.description);
  }

  get name(): string {
    return localizeTemplateText(this.data.name);
  }

  get screenshots() {
    return (this.data.screenshots ?? []).map((screenshot) => ({
      text: localizeTemplateText(screenshot.text),
      screenshot: screenshot.screenshot,
      background: screenshot.bg,
    }));
  }

  get tagline(): string {
    return localizeTemplateText(this.data.tagline);
  }

  public constructor(
    data: ContainerTemplateListItemData | ContainerTemplateApiData,
  ) {
    super(data.id);
    this.data = data;
    this.categories = data.categories as ContainerTemplateCategory[];
    this.developer = data.developer;
    this.domains = data.domains;
    this.icon = data.iconUrl;
    this.license = data.license;
    this.manifestVersion = data.manifestVersion;
    this.repository = data.repository;
    this.userInputs = data.userInputs
      ? sortByPositionMeta(data.userInputs)
      : undefined;
    this.version = data.version;
    this.website = data.website;
    this.support = data.supportLink;
    this.technicalDetails = data.help?.technicalDetails;
    this.type = data.type;
  }

  public async createStack(
    project: Project,
    data: {
      userInputs?: ContainerTemplateUserInputValues;
      description: string;
    },
  ) {
    return ContainerStack.create(project, {
      templateConfig: { userInputs: data.userInputs, templateId: this.id },
      description: data.description,
    });
  }

  public resolveTechnicalDetails(
    containers: ContainerListItem[],
    domains: Record<string, string> = {},
  ) {
    return (this.technicalDetails ?? [])
      .map((detail) => ({
        displayValue: resolveTechnicalDetailValue(
          detail.value,
          containers,
          domains,
          true,
        ),
        copyValue: resolveTechnicalDetailValue(
          detail.value,
          containers,
          domains,
          false,
        ),
        label: localizeTemplateText(detail.key),
      }))
      .filter(({ copyValue }) => !unresolvedPlaceholderPattern.test(copyValue));
  }
}

export class ContainerTemplateDetailed extends ContainerTemplateCommon {
  public override readonly data: ContainerTemplateApiData;

  public constructor(data: ContainerTemplateApiData) {
    super(data);
    this.data = data;
  }
}

export class ContainerTemplateListItem extends ContainerTemplateCommon {
  public override readonly data: ContainerTemplateListItemData;

  public constructor(data: ContainerTemplateListItemData) {
    super(data);
    this.data = data;
  }
}

export class ContainerTemplateListQuery extends ListQueryModel<ContainerTemplateListQueryData> {
  public constructor(query: ContainerTemplateListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } =
      await config.behaviors.container.listTemplates(this.query);

    return new ContainerTemplateList(
      this.query,
      items.map((c) => new ContainerTemplateListItem(c)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<ContainerTemplateListQueryData> = {}) {
    return new ContainerTemplateListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ContainerTemplateList extends WithListData<ContainerTemplateListItem>()(
  ContainerTemplateListQuery,
) {
  public override readonly items: readonly ContainerTemplateListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: ContainerTemplateListQueryData,
    containers: ContainerTemplateListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(containers);
    this.totalCount = totalCount;
  }
}
