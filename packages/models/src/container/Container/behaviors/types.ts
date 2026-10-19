import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  ContainerStackUpdateSchedulePatchRequestData,
  ContainerAddTemplateComponentData,
  ContainerAccessibleListQueryData,
  ContainerStackDeclareRequestData,
  ContainerStackCreateRequestData,
  ContainerStackPatchRequestData,
  ContainerTemplateListQueryData,
  ContainerTemplateListItemData,
  ContainerStackListItemData,
  ContainerTemplateApiData,
  ContainerListQueryData,
  ContainerListItemData,
  ContainerStackData,
  ContainerLogChunk,
  ContainerData,
  ImageMetaData,
} from "../types.js";

export interface ContainerBehaviors {
  updateStackUpdateSchedule: (
    stackId: string,
    updateSchedule: ContainerStackUpdateSchedulePatchRequestData["updateSchedule"],
  ) => Promise<ContainerStackData>;
  list: (
    projectId: string,
    query?: ContainerListQueryData,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<ContainerListItemData>>;

  listAccessible: (
    query?: ContainerAccessibleListQueryData,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<ContainerListItemData>>;

  getLogChunk: (
    containerId: string,
    stackId: string,
    range: string,
    requestOptions?: AxiosRequestConfig,
  ) => Promise<ContainerLogChunk>;

  getImageMeta: (
    imageRef: string,
    projectId: string,
    generateAiData?: boolean,
    language?: string,
  ) => Promise<ImageMetaData | string>;

  listStacksOfProject: (
    projectId: string,
    query?: ContainerListQueryData,
  ) => Promise<QueryResponseData<ContainerStackListItemData>>;

  listTemplates: (
    query?: ContainerTemplateListQueryData,
  ) => Promise<QueryResponseData<ContainerTemplateListItemData>>;

  createStack: (
    data: ContainerStackCreateRequestData,
    projectId: string,
  ) => Promise<ContainerStackData>;

  declareStack: (
    stackId: string,
    data: ContainerStackDeclareRequestData,
  ) => Promise<ContainerStackData>;

  findStack: (
    stackId: string,
    options?: AxiosRequestConfig,
  ) => Promise<ContainerStackData | undefined>;

  updateStack: (
    stackId: string,
    data: ContainerStackPatchRequestData,
  ) => Promise<ContainerStackData>;

  listStacks: (
    query?: ContainerListQueryData,
  ) => Promise<QueryResponseData<ContainerStackListItemData>>;

  addTemplateComponent: (
    stackId: string,
    data: ContainerAddTemplateComponentData,
  ) => Promise<void>;

  create: (
    stackId: string,
    data: ContainerStackPatchRequestData,
  ) => Promise<{ id: string }>;

  find: (
    containerId: string,
    stackId: string,
  ) => Promise<ContainerData | undefined>;

  rotateImagePullWebhook: (
    containerId: string,
    stackId: string,
  ) => Promise<string>;

  updateStackDescription: (
    stackId: string,
    description: string,
  ) => Promise<void>;

  findTemplate: (
    templateId: string,
  ) => Promise<ContainerTemplateApiData | undefined>;

  pullImage: (containerId: string, stackId: string) => Promise<void>;

  recreate: (containerId: string, stackId: string) => Promise<void>;

  getLog: (containerId: string, stackId: string) => Promise<string>;

  restart: (containerId: string, stackId: string) => Promise<void>;

  delete: (serviceName: string, stackId: string) => Promise<void>;

  start: (containerId: string, stackId: string) => Promise<void>;

  stop: (containerId: string, stackId: string) => Promise<void>;

  getStack: (stackId: string) => Promise<ContainerStackData>;

  deleteStack: (stackId: string) => Promise<void>;
}
