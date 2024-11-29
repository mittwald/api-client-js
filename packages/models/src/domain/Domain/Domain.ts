import { classes } from "polytype";
import {
  AggregateMetaData,
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  DomainData,
  DomainListItemData,
  DomainListQueryModelData,
  DomainTransferableReasons,
  HandleField,
} from "./types.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ContractDetailed } from "../../contract/index.js";

export class Domain extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("domain", "domain");

  public static ofId(id: string): Domain {
    return new Domain(id);
  }

  public static find = provideReact(
    async (id: string): Promise<DomainDetailed | undefined> => {
      const data = await config.behaviors.domain.find(id);
      if (data !== undefined) {
        return new DomainDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<DomainDetailed> => {
      const domain = await this.find(id);
      assertObjectFound(domain, this, id);
      return domain;
    },
  );

  public findDetailed = provideReact(
    () => Domain.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DomainDetailed | undefined>>;

  public getDetailed = provideReact(
    () => Domain.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DomainDetailed>>;

  public static query = (query: DomainListQueryModelData = {}) => {
    return new DomainListQuery(query);
  };

  public static async checkRegistrability(
    domain: string,
  ): Promise<{ registrable: boolean; isPremium: boolean }> {
    return await config.behaviors.domain.checkDomainRegistrable(domain);
  }

  public static async checkTransferability(
    domain: string,
    authCode: string,
  ): Promise<{ transferable: boolean; reasons: DomainTransferableReasons }> {
    return await config.behaviors.domain.checkDomainTransferable(
      domain,
      authCode,
    );
  }

  public static async suggestDomains(
    prompt: string,
    amount?: number,
    tlds?: string[],
  ): Promise<string[]> {
    return await config.behaviors.domain.getSuggestions(prompt, amount, tlds);
  }

  public async delete(): Promise<void> {
    await config.behaviors.domain.delete(this.id);
  }

  public async createAuthCode(): Promise<void> {
    await config.behaviors.domain.createAuthCode(this.id);
  }

  public async updateNameservers(nameservers: [string, string, ...string[]]) {
    await config.behaviors.domain.updateNameservers(this.id, nameservers);
  }

  public async resendEmail(): Promise<void> {
    await config.behaviors.domain.resendEmail(this.id);
  }

  public async updateOwnerContact(
    contact: [HandleField, ...HandleField[]],
  ): Promise<void> {
    await config.behaviors.domain.updateOwnerContact(this.id, contact);
  }

  public async updateAuthCode(
    authCode: string,
  ): Promise<{ isAsync: boolean; transactionId: string }> {
    return await config.behaviors.domain.updateAuthCode(this.id, authCode);
  }

  public async abortDomainDeclaration(): Promise<void> {
    await config.behaviors.domain.abortDomainDeclaration(this.id);
  }

  public async getContract(): Promise<ContractDetailed> {
    const response = await config.behaviors.domain.getDomainContract(this.id);
    return new ContractDetailed(response);
  }
}

export class DomainCommon extends classes(DataModel<DomainData>, Domain) {
  public constructor(data: DomainData) {
    super([data], [data.domainId]);
  }
}

export class DomainDetailed extends classes(
  DomainCommon,
  DataModel<DomainData>,
) {
  public constructor(data: DomainData) {
    super([data], [data]);
  }
}

export class DomainListItem extends classes(
  DomainCommon,
  DataModel<DomainListItemData>,
) {
  public constructor(data: DomainListItemData) {
    super([data]);
  }
}

export class DomainListQuery extends ListQueryModel<DomainListQueryModelData> {
  public constructor(data: DomainListQueryModelData = {}) {
    super(data);
  }

  public refine(query: DomainListQueryModelData) {
    return new DomainListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.domain.list({
      limit: config.defaultPaginationLimit,
      ...query,
    });

    return new DomainList(
      this.query,
      items.map((d) => new DomainListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class DomainList extends classes(
  DomainListQuery,
  ListDataModel<DomainListItem>,
) {
  public constructor(
    query: DomainListQueryModelData,
    domains: DomainListItem[],
    totalCount: number,
  ) {
    super([query], [domains, totalCount]);
  }
}
