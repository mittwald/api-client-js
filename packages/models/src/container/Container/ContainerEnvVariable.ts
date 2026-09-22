import type {
  ContainerEnvVariableListData,
  ContainerEnvVariableData,
} from "./types.js";

import { ListDataModel, DataModel } from "../../base/index.js";

export class ContainerEnvVariable extends DataModel<ContainerEnvVariableData> {
  public readonly key: string;
  public readonly value: string;

  public constructor(data: ContainerEnvVariableData) {
    super(data);
    this.key = data.key.trim();
    this.value = data.value.trim();
  }

  public toString(): string {
    return this.key || this.value
      ? `${this.key ? this.key : ""}=${this.value ? this.value : ""}`
      : "";
  }
}

export class ContainerEnvVariableList extends ListDataModel<ContainerEnvVariable> {
  public readonly data: ContainerEnvVariableListData;

  public constructor(envs: ContainerEnvVariableListData) {
    const envArray = [];
    for (const [key, value] of Object.entries(envs)) {
      envArray.push(new ContainerEnvVariable({ value, key }));
    }
    super(envArray, envArray.length);
    this.data = envs;
  }

  public static fromText(text: string): ContainerEnvVariableList {
    const envs = text
      .split("\n")
      .filter((line) => line !== "" && !line.startsWith("#"))
      .reduce((prev, curr) => {
        // eslint-disable-next-line prefer-const
        let [key, value] = curr.split(/=(.*)/s);
        if (!key || !value) {
          return prev;
        }

        const commentIndex = value.indexOf(" # ");
        if (
          commentIndex &&
          commentIndex > -1 &&
          !value.includes('"') &&
          !value.includes("'")
        ) {
          value = value.substring(0, commentIndex).trim();
        }

        return { ...prev, [key]: value.replace(/['"]/g, "") };
      }, {});

    return new ContainerEnvVariableList(envs);
  }

  public static fromVariables(
    variables: ContainerEnvVariable[],
  ): ContainerEnvVariableList {
    return new ContainerEnvVariableList(
      variables.reduce((prev, curr) => {
        return Object.assign(prev, { [curr.key]: curr.value });
      }, {}),
    );
  }

  public toApiDataObject(): ContainerEnvVariableListData {
    return this.items.reduce((prev, curr) => {
      return Object.assign(prev, { [curr.key]: curr.value });
    }, {});
  }

  public toString(): string {
    return this.items.map((v) => v.toString()).join("\n");
  }
}
