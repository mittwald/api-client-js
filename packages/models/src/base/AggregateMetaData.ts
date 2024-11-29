export class AggregateMetaData {
  public readonly domain: string;
  public readonly aggregate: string;

  public constructor(domain: string, aggregate: string) {
    this.domain = domain;
    this.aggregate = aggregate;
  }
}
