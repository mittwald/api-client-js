import { createUseContext } from "@mittwald/awesome-node-utils/context/use.js";
import ora, { Ora } from "ora";

export class OraStatusLog implements StatusLog {
  private instance: Ora = ora();

  public start(msg: string): void {
    this.instance.start(msg);
  }

  public succeed(msg?: string): void {
    this.instance.succeed(msg);
  }

  public fail(msg?: string): void {
    this.instance.fail(msg);
  }

  public update(msg: string): void {
    this.instance.text = msg;
  }

  public info(msg: string): void {
    this.instance.info(msg);
  }

  public warn(msg: string): void {
    this.instance.warn(msg);
  }
}

export interface StatusLog {
  start: (msg: string) => void;
  succeed: (msg?: string) => void;
  update: (msg: string) => void;
  info: (msg: string) => void;
  warn: (msg: string) => void;
  fail: (msg?: string) => void;
}

export const useStatusLog = createUseContext<StatusLog>(
  "@mittwald/openapi-to-typescript:statusLog",
);
export const getStatusLog = (): StatusLog | undefined => useStatusLog().get();
