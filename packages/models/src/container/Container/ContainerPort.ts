import invariant from "tiny-invariant";

import { type ContainerPortData, containerMaxPort } from "./types.js";
import { ListDataModel, DataModel } from "../../base/index.js";

const parsePortOrRange = (portStr: string) => {
  const [start, end] = portStr.split("-");
  invariant(start, "Invalid container port definition!");
  return {
    end: end ? parseInt(end) : undefined,
    start: parseInt(start),
  };
};

export class ContainerPort extends DataModel<ContainerPortData> {
  public readonly external: number;
  public readonly externalRangeEnd?: number;
  public readonly internal: number;
  public readonly internalRangeEnd?: number;
  public readonly isRange: boolean;
  public readonly protocol?: string;

  public constructor(data: ContainerPortData) {
    super(data);
    const [portString, protocol] = data.split("/");
    invariant(portString, "Invalid container port definition!");
    const [internalPart, externalPart] = portString.split(":");
    invariant(internalPart, "Invalid container port definition!");

    const internal = parsePortOrRange(internalPart);
    const external = externalPart ? parsePortOrRange(externalPart) : internal;

    this.internal = internal.start;
    this.internalRangeEnd = internal.end;
    this.external = external.start;
    this.externalRangeEnd = external.end;
    this.isRange = internal.end !== undefined && external.end !== undefined;
    this.protocol = protocol?.trim() ?? "tcp";
  }

  /** The API doesn't support port mapping yet — ports must be equal. */
  public static hasEqualMapping(port: string): boolean {
    const portObj = new ContainerPort(port);
    return (
      portObj.internal === portObj.external &&
      portObj.internalRangeEnd === portObj.externalRangeEnd
    );
  }

  public static validatePort(port: string): boolean {
    const portObj = new ContainerPort(port);
    const validPortOrRange = (portStart: number, portRangeEnd?: number) =>
      portStart > 0 &&
      portStart <= containerMaxPort &&
      (portRangeEnd === undefined ||
        (portRangeEnd > 0 &&
          portRangeEnd <= containerMaxPort &&
          portRangeEnd >= portStart));
    const internalLength =
      (portObj.internalRangeEnd ?? portObj.internal) - portObj.internal;
    const externalLength =
      (portObj.externalRangeEnd ?? portObj.external) - portObj.external;

    return (
      validPortOrRange(portObj.internal, portObj.internalRangeEnd) &&
      validPortOrRange(portObj.external, portObj.externalRangeEnd) &&
      (!portObj.isRange || internalLength === externalLength)
    );
  }

  public toString(externalOnly?: boolean): string {
    const internalStr =
      this.internalRangeEnd !== undefined
        ? `${this.internal}-${this.internalRangeEnd}`
        : `${this.internal}`;
    const externalStr =
      this.externalRangeEnd !== undefined
        ? `${this.external}-${this.externalRangeEnd}`
        : `${this.external}`;
    const protocol = this.protocol ? `/${this.protocol}` : "";

    if (externalOnly || internalStr === externalStr) {
      return `${externalStr}${protocol}`;
    }
    return `${internalStr}:${externalStr}${protocol}`;
  }
}

export class ContainerPortList extends ListDataModel<ContainerPort> {
  public constructor(ports: ContainerPortData[]) {
    super(
      ports.map((p) => new ContainerPort(p)),
      ports.length,
    );
  }

  public static fromPorts(ports: ContainerPort[]): ContainerPortList {
    return new ContainerPortList(ports.map((p) => p.toString()));
  }

  public toStringArray(): string[] {
    return this.items.map((p) => p.toString());
  }
}
