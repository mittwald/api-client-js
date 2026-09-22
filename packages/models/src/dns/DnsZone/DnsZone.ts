import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { DomainMigrationList } from "../../domain/DomainMigration/index.js";
import type { DnsRecordSettingsData } from "../DnsRecordSettings/index.js";
import type { DnsRecordCaaEntry } from "../DnsRecordCaa/index.js";
import type { DnsRecordMxEntry } from "../DnsRecordMx/index.js";
import type {
  DnsUpdateMultipleRecordsRequest,
  DnsZoneListQueryModelData,
  DnsZoneListItemData,
  DnsSrvRecord,
  DnsZoneData,
} from "./types.js";

import {
  type DownloadableFile,
  AggregateMetaData,
} from "../../common/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { DnsRecordSet } from "../DnsRecordSet/index.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "DnsZone",
})
export class DnsZone extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("dns", "zone");

  public static autoDnsSettings: DnsRecordSettingsData = {
    ttl: { auto: true },
  };
  public static dkim =
    "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3U8kqa4SiUlO5WBe8DwVPhhLNooNNe8VLEJ+9PbDHVeEw0O6mY2O6AvcqbnSeBO5Ac9Ix0RQzxe9krqSgWDR84IvROW/u4kMxELn+Q+Jy2QXYASbVWnYs4T6p1yIqBEgRfWDFnNtmRDvNFCAcRv2VkA0ykkRMq3u9E6FZTLMnGQIDAQAB";
  public static dkim2048 =
    "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1BM9Prf00dhyP0i/fH0/k01oMSafqpl7biZMPjz/zxRJn+1YgSdeXt84NR3wZ5w+HWhtR27p1IEjchu179VOOyZ+xOte4owM+6FO7BVGnr/5IAlmRnC4fMvSeePdwun9fBExfkOroxwdEM4Y1+BqaSnpMT2xV6a2hRklymFzDkNQdmKrtm2AWSqg44iiMt3buEtZ0/y5SSBNd41zJYsp7UdPO2fgzF+C5gJrpyKhTWGB9ELLK83cd2Vdb8N+CC1Oh62eybgsMt2iBmxgnYAwp1LdTuxxNFYT2gEOFGL5KE01WM0L0+KALhwDQBcGcSC7Eup855OI/v8F4YDTZ3NCgQIDAQAB";

  public static mittwaldMxRecords: DnsRecordMxEntry[] = [
    { fqdn: "mx1.agenturserver.de", priority: 10 },
    { fqdn: "mx2.agenturserver.de", priority: 20 },
    { fqdn: "mx3.agenturserver.de", priority: 30 },
    { fqdn: "mx4.agenturserver.de", priority: 40 },
  ];

  public static spf = "v=spf1 include:agenturserver.de ~all";

  public static async create(name: string, parentZoneId: string) {
    const result = await config.behaviors.dnsZone.create(name, parentZoneId);

    return DnsZone.ofId(result.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.dnsZone.find(id);
    if (data) {
      return new DnsZoneDetailed(data);
    }
  }

  public static async get(id: string) {
    const zone = await this.find(id);
    assertObjectFound(zone, DnsZone, id);
    return zone;
  }

  public static getDkim2048Hostname = (hostname: string) =>
    `agenturserver2048._domainkey.${hostname}`;

  public static getDkimHostname = (hostname: string) =>
    `agenturserver._domainkey.${hostname}`;

  public static ofId(id: string) {
    return new DnsZone(id);
  }

  public static query(query: DnsZoneListQueryModelData) {
    return new DnsZoneListQuery(query);
  }

  public async createSubZone(name: string): Promise<DnsZone> {
    const result = await config.behaviors.dnsZone.create(name, this.id);

    return DnsZone.ofId(result.id);
  }

  public async delete() {
    await config.behaviors.dnsZone.delete(this.id);
  }

  public async findCommon(): Promise<DnsZoneCommon | undefined> {
    return this instanceof DnsZoneCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<DnsZoneDetailed | undefined> {
    return DnsZone.find(this.id);
  }

  public async getCommon(): Promise<DnsZoneCommon> {
    return this instanceof DnsZoneCommon ? this : this.getDetailed();
  }
  public getDetailed(): Promise<DnsZoneDetailed> {
    return DnsZone.get(this.id);
  }

  public async removeCname() {
    await config.behaviors.dnsZone.removeCname(this.id);
  }

  public async setCaaRecord(
    records: DnsRecordCaaEntry[],
    settings?: DnsRecordSettingsData,
  ) {
    return await config.behaviors.dnsZone.setCaaRecord(
      this.id,
      records,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async setCname(fqdn?: string, settings?: DnsRecordSettingsData) {
    await config.behaviors.dnsZone.setCname(
      this.id,
      fqdn,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async setCustomARecord(
    a: string[],
    aaaa: string[],
    settings?: DnsRecordSettingsData,
  ) {
    return await config.behaviors.dnsZone.setARecord(
      this.id,
      a,
      aaaa,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async setCustomMxRecord(
    records: DnsRecordMxEntry[],
    settings?: DnsRecordSettingsData,
  ) {
    return await config.behaviors.dnsZone.setMxRecord(
      this.id,
      records,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async setRecordManaged(record: "mx" | "a") {
    await config.behaviors.dnsZone.setRecordManaged(this.id, record);
  }

  public async setSrvRecord(
    entries: DnsSrvRecord[],
    settings?: DnsRecordSettingsData,
  ) {
    return await config.behaviors.dnsZone.setSrvRecord(
      this.id,
      entries,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async setTxtRecord(
    entries: string[],
    settings?: DnsRecordSettingsData,
  ) {
    return await config.behaviors.dnsZone.setTxtRecord(
      this.id,
      entries,
      settings ?? DnsZone.autoDnsSettings,
    );
  }

  public async updateDnsRecords(
    update: DnsUpdateMultipleRecordsRequest,
    settings?: DnsRecordSettingsData,
  ) {
    const { cname, aaaa, txt, srv, caa, mx, a } = update;
    const dnsSettings = settings ?? DnsZone.autoDnsSettings;

    if (a.length > 0 || aaaa.length > 0) {
      await this.setCustomARecord(a, aaaa, dnsSettings);
    }

    if (mx.data.length > 0 && !mx.managed) {
      await this.setCustomMxRecord(mx.data, dnsSettings);
    }
    if (mx.managed) await this.setRecordManaged("mx");

    if (txt.length > 0) await this.setTxtRecord(txt, dnsSettings);
    if (srv.length > 0) await this.setSrvRecord(srv, dnsSettings);
    if (cname) await this.setCname(cname, dnsSettings);
    if (caa.length > 0) await this.setCaaRecord(caa, dnsSettings);
  }
}

export class DnsZoneCommon extends WithData<DnsZoneData>()(DnsZone) {
  public override readonly data: DnsZoneData;
  public readonly domain: string;
  public readonly recordSet: DnsRecordSet;
  public constructor(data: DnsZoneData) {
    super(data.id);
    this.data = data;
    this.domain = data.domain;
    this.recordSet = new DnsRecordSet(this, data.recordSet);
  }
  public findMigrationARecordIp(
    migrations: DomainMigrationList,
  ): string | undefined {
    const ip = migrations
      .findSucceededMigrationDomain(this.domain)
      ?.findFirstARecord()?.value;

    return ip !== undefined && this.recordSet.combinedA.hasIpAddress(ip)
      ? ip
      : undefined;
  }

  public async getZoneFileDownload(): Promise<DownloadableFile> {
    const response = await config.behaviors.dnsZone.getZoneFile(this.id);
    return { filename: `${this.domain}.txt`, content: response };
  }

  public hasARecordOfMigration(migrations: DomainMigrationList): boolean {
    return this.findMigrationARecordIp(migrations) !== undefined;
  }

  public hasCname() {
    return this.recordSet.cname.fqdn !== undefined;
  }
}

export class DnsZoneDetailed extends DnsZoneCommon {
  public constructor(data: DnsZoneData) {
    super(data);
  }
}

export class DnsZoneListQuery extends ListQueryModel<DnsZoneListQueryModelData> {
  public constructor(query: DnsZoneListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { domain } = this.query;
    const { totalCount, items } = await config.behaviors.dnsZone.query(
      extractId(this.query.project),
    );
    // List Zones does not support a domain query parameter, so filtering is needed
    const zones = domain
      ? items.filter((i) => i.domain.endsWith(domain))
      : items;
    return new DnsZoneList(
      this.query,
      zones.map((z) => new DnsZoneListItem(z)),
      totalCount,
    );
  }

  public refine(query: Partial<DnsZoneListQueryModelData> = {}) {
    return new DnsZoneListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class DnsZoneListItem extends DnsZoneCommon {
  public override readonly data: DnsZoneListItemData;
  public constructor(data: DnsZoneListItemData) {
    super(data);
    this.data = data;
  }
}

export class DnsZoneList extends WithListData<DnsZoneListItem>()(
  DnsZoneListQuery,
) {
  public override readonly items: readonly DnsZoneListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: DnsZoneListQueryModelData,
    zones: DnsZoneListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(zones);
    this.totalCount = totalCount;
  }

  public findByHostname(hostname: string) {
    return this.items.find((i) => i.domain === hostname);
  }

  public hasARecordOfMigration(migrations: DomainMigrationList): boolean {
    return this.items.some((i) => i.hasARecordOfMigration(migrations));
  }
}
