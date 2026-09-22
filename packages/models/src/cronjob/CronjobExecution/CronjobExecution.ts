import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { DownloadableFile } from "../../common";
import type { Cronjob } from "../Cronjob";
import type {
  CronjobExecutionListQueryData,
  CronjobExecutionListItemData,
  CronjobExecutionStatus,
  CronjobExecutionData,
  StructuredLogLine,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { User } from "../../user/User/User";
import { config } from "../../config";
import { ListQueryModel, ReferenceModel, WithListData, WithData } from "../../base";

const messageExtractionRegex = /"message"\s*:\s*"((?:\\.|[^"\\])*)"/g;

@GhostMakerModel({
  name: "CronjobExecution",
})
export class CronjobExecution extends ReferenceModel {
  public readonly cronjob: Cronjob;

  public constructor(id: string, cronjob: Cronjob) {
    super(id);
    this.cronjob = cronjob;
  }
  public static async find(id: string, cronjob: Cronjob) {
    const data = await config.behaviors.cronjobExecution.find(id, cronjob.id);
    if (data !== undefined) {
      return new CronjobExecutionDetailed(data, cronjob);
    }
  }

  public static async get(id: string, cronjob: Cronjob) {
    const cronjobExecution = await this.find(id, cronjob);
    assertObjectFound(cronjobExecution, CronjobExecution, id);
    return cronjobExecution;
  }

  public static ofId(id: string, cronjob: Cronjob) {
    return new CronjobExecution(id, cronjob);
  }

  public static query(
    cronjob: Cronjob,
    query: CronjobExecutionListQueryData = {},
  ) {
    return new CronjobExecutionListQuery(cronjob, query);
  }

  public async findCommon(): Promise<CronjobExecutionCommon | undefined> {
    return this instanceof CronjobExecutionCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<CronjobExecutionDetailed | undefined> {
    return CronjobExecution.find(this.id, this.cronjob);
  }

  public async getCommon(): Promise<CronjobExecutionCommon> {
    return this instanceof CronjobExecutionCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<CronjobExecutionDetailed> {
    return CronjobExecution.get(this.id, this.cronjob);
  }
}

export class CronjobExecutionCommon extends WithData<
  CronjobExecutionListItemData | CronjobExecutionData
>()(CronjobExecution) {
  public override readonly data: CronjobExecutionListItemData | CronjobExecutionData;
  public readonly durationInSeconds?: number;
  public readonly exitCode?: number;
  public readonly isRunning: boolean;
  public readonly logPath?: string;
  public readonly start?: DateTime;
  public readonly status: CronjobExecutionStatus;
  public readonly successful: boolean;
  public readonly triggeredBy?: User;

  public constructor(
    data: CronjobExecutionListItemData | CronjobExecutionData,
    cronjob: Cronjob,
  ) {
    super(data.id, cronjob);
    this.data = data;
    this.status = data.status;
    this.isRunning = data.status === "Running" || data.status === "Pending";
    this.start = data.start
      ? DateTime.fromISO(data.start, { zone: "utc" })
      : undefined;
    this.exitCode = data.exitCode;
    this.successful = data.successful;
    this.durationInSeconds =
      data.durationInMilliseconds !== undefined
        ? Math.floor(data.durationInMilliseconds / 1000)
        : undefined;
    this.triggeredBy = data.triggeredBy?.id
      ? User.ofId(data.triggeredBy.id)
      : undefined;
    this.logPath = data.logPath;
  }

  public async findLog(projectId: string) {
    if (!this.logPath) {
      return;
    }

    const response = await config.behaviors.cronjobExecution.findLog(
      projectId,
      this.logPath,
    );

    let finalLog: string | undefined;

    if (typeof response === "object" && "message" in response) {
      finalLog = response.message as string;
    } else if (response && messageExtractionRegex.test(response)) {
      messageExtractionRegex.lastIndex = 0;
      const messages = Array.from(
        response.matchAll(messageExtractionRegex),
        (m) => m[1],
      );
      finalLog = messages.join("\n");
    } else {
      finalLog = response;
    }
    return finalLog;
  }

  public async findStructuredLog(
    projectId: string,
  ): Promise<StructuredLogLine[] | undefined> {
    if (!this.logPath) {
      return undefined;
    }

    const response = await config.behaviors.cronjobExecution.findLog(
      projectId,
      this.logPath,
    );

    if (!response) {
      return undefined;
    }

    if (typeof response === "object") {
      const parsedLine = this.parseLogLine(JSON.stringify(response));
      return parsedLine ? [parsedLine] : undefined;
    }

    if (typeof response !== "string") {
      return undefined;
    }

    try {
      const lines = response.trim().split("\n");
      const parsedLines: StructuredLogLine[] = [];

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;

        const parsedLine = this.parseLogLine(trimmedLine);
        if (parsedLine) {
          parsedLines.push(parsedLine);
        }
      }

      return parsedLines.length > 0 ? parsedLines : undefined;
    } catch {
      return undefined;
    }
  }

  public async getExecutionAnalysis(
    language?: "de" | "en",
    requestConfig?: AxiosRequestConfig,
  ) {
    return await config.behaviors.cronjobExecution.getExecutionAnalysis(
      this.id,
      this.cronjob.id,
      language,
      requestConfig,
    );
  }

  public async getLogDownload(
    projectId: string,
  ): Promise<DownloadableFile | undefined> {
    const log = await this.findLog(projectId);
    if (!log) {
      return undefined;
    }
    return { filename: "cronjob.log", content: log };
  }

  private parseLogLine(line: string): StructuredLogLine | null {
    try {
      const parsed = JSON.parse(line);

      if (
        !parsed ||
        typeof parsed.message !== "string" ||
        typeof parsed.dev !== "string"
      ) {
        return null;
      }

      const message =
        typeof parsed.time === "string"
          ? `${parsed.time} ${parsed.message}`
          : parsed.message;

      return {
        stream: parsed.dev === "stderr" ? "stderr" : "stdout",
        message,
      };
    } catch {
      return null;
    }
  }
}

export class CronjobExecutionDetailed extends CronjobExecutionCommon {
  public override readonly data: CronjobExecutionData;
  public constructor(data: CronjobExecutionData, cronjob: Cronjob) {
    super(data, cronjob);
    this.data = data;
  }
}

export class CronjobExecutionListItem extends CronjobExecutionCommon {
  public override readonly data: CronjobExecutionListItemData;
  public constructor(data: CronjobExecutionListItemData, cronjob: Cronjob) {
    super(data, cronjob);
    this.data = data;
  }
}

export class CronjobExecutionListQuery extends ListQueryModel<CronjobExecutionListQueryData> {
  public readonly cronjob: Cronjob;

  public constructor(
    cronjob: Cronjob,
    query: CronjobExecutionListQueryData = {},
  ) {
    super(query, {
      dependencies: [cronjob.id],
    });
    this.cronjob = cronjob;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.cronjobExecution.list(
      this.cronjob.id,
      this.query,
    );
    return new CronjobExecutionList(
      this.cronjob,
      this.query,
      items.map((d) => new CronjobExecutionListItem(d, this.cronjob)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: CronjobExecutionListQueryData) {
    return new CronjobExecutionListQuery(this.cronjob, {
      ...this.query,
      ...query,
    });
  }
}

export class CronjobExecutionList extends WithListData<CronjobExecutionListItem>()(
  CronjobExecutionListQuery,
) {
  public override readonly items: readonly CronjobExecutionListItem[];
  public override readonly totalCount: number;
  public constructor(
    cronjob: Cronjob,
    query: CronjobExecutionListQueryData,
    cronjobExecutions: CronjobExecutionListItem[],
    totalCount: number,
  ) {
    super(cronjob, query);
    this.items = Object.freeze(cronjobExecutions);
    this.totalCount = totalCount;
  }
}
