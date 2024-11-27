import invariant from "invariant";
import { ReferenceModel } from "@mittwald/api-models";
import { ConversationDepartment } from "../../conversation/Conversation/index.js";

export class Department extends ReferenceModel {
  public readonly adGroup: string;
  public readonly name: string;
  public readonly abbreviation: string;

  public constructor(
    id: string,
    adGroup: string,
    name: string,
    abbreviation: string,
  ) {
    super(id);
    this.adGroup = adGroup;
    this.name = name;
    this.abbreviation = abbreviation;
  }

  public get conversationDepartmentId(): ConversationDepartment {
    invariant(
      Departments.allConversationDepartments.some((d) => d.id === this.id),
      `Expected valid conversation department (expected: ${Departments.allConversationDepartments.map((d) => d.id)}, got: ${this.id})`,
    );
    return this.id as ConversationDepartment;
  }
}

export class Departments {
  public static development = new Department(
    "development",
    "Abt_Produktentwicklung",
    "Produktentwicklung",
    "PE",
  );

  public static accounting = new Department(
    "accounting",
    "Abt_Buchhaltung",
    "Buchhaltung",
    "BU",
  );

  public static customerService = new Department(
    "customerService",
    "Abt_Kundenservice",
    "Kundenservice",
    "KS",
  );

  public static cloudHosting = new Department(
    "cloudHosting",
    "Abt_Cloudhosting",
    "Cloud Hosting",
    "CH",
  );

  public static mail = new Department("mail", "Abt_Mail", "Mail", "MAIL");

  public static infra = new Department(
    "infra",
    "Abt_Infrastruktur",
    "Infrastruktur",
    "IN",
  );

  public static marketing = new Department(
    "marketing",
    "Abt_Marketing",
    "Marketing",
    "MA",
  );

  public static network = new Department(
    "network",
    "Abt_Netzwerk",
    "Netzwerk",
    "NT",
  );

  public static dataCenter = new Department(
    "dataCenter",
    "Abt_Rechenzentrum",
    "Rechenzentrum",
    "RZ",
  );

  public static software = new Department(
    "software",
    "Abt_Software",
    "Software",
    "RZ",
  );

  public static security = new Department(
    "security",
    "Abt_Security",
    "Security",
    "SE",
  );

  public static generic = new Department(
    "generic",
    "Abt_KeineAbteilung",
    "Ohne Abteilung",
    "oA",
  );

  public static innovation = new Department(
    "innovation",
    "Abt_Innovation",
    "Innovation",
    "IN",
  );

  public static training = new Department(
    "training",
    "Abt_Ausbildung",
    "Ausbildung",
    "AB",
  );

  public static controlling = new Department(
    "training",
    "Abt_Controlling",
    "Abt_Controlling",
    "CO",
  );

  public static get all(): Department[] {
    return Object.values(Departments).filter((d) => d instanceof Department);
  }

  public static get conversationDepartmentsWithoutGeneric(): Department[] {
    return [
      Departments.customerService,
      Departments.cloudHosting,
      Departments.development,
      Departments.accounting,
      Departments.mail,
    ];
  }

  public static get allConversationDepartments(): Department[] {
    return [...this.conversationDepartmentsWithoutGeneric, Departments.generic];
  }

  public static getById(id: string): Department {
    const department = Departments.all.find((d) => d.id === id);
    invariant(department !== undefined, `Department '${id}' does not exist`);
    return department;
  }

  public static getByRef(ref: string | Department): Department {
    if (ref instanceof Department) {
      return ref;
    }
    return Departments.getById(ref);
  }

  public static getByAdGroup(adGroup: string): Department {
    const department = Departments.all.find((d) => d.adGroup === adGroup);
    invariant(
      department !== undefined,
      `Department '${adGroup}' does not exist`,
    );
    return department;
  }
}
