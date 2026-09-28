import type { Data } from "convert";

import filesizeParser from "filesize-parser";
import prettyBytes from "pretty-bytes";
import convert from "convert";

export class Bytes {
  public readonly gib: number;
  public readonly value: number;

  public constructor(bytes: number) {
    this.value = bytes;
    this.gib = this.in("GiB");
  }

  public static of(amount: number, unit: string | Data): Bytes {
    return new Bytes(convert(amount, unit as Data).to("bytes"));
  }

  public static parse(asString: string): Bytes {
    return new Bytes(filesizeParser(asString));
  }

  public add(other: Bytes): Bytes {
    return new Bytes(this.value + other.value);
  }

  public equals(other: Bytes) {
    return this.value === other.value;
  }

  public in(unit: Data, digits?: number): number {
    const converted = convert(this.value, "bytes").to(unit);
    if (!digits) {
      return converted;
    }
    return Math.round(converted * 10 ** digits) / 10 ** digits;
  }

  public isDifferent(other: Bytes) {
    return !this.equals(other);
  }

  public isGreaterThan(other: Bytes): boolean {
    return this.value > other.value;
  }

  public multiply(by: number): Bytes {
    return new Bytes(this.value * by);
  }

  public percentOf(other: Bytes): string {
    return `${((100 / other.value) * this.value).toFixed(1).replace(".", ",")} %`;
  }

  public text(options: { binary?: boolean } = {}): string {
    const { binary = true } = options;

    return prettyBytes(this.value, {
      binary: binary,
      locale: "de",
    });
  }
}
