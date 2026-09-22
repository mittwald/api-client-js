export class AggregateMetaData {
  public readonly aggregate: string;
  public readonly domain: string;

  public constructor(domain: string, aggregate: string) {
    this.domain = domain;
    this.aggregate = aggregate;
  }
}
