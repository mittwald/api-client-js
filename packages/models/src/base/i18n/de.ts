export const de = {
  toolCategory: {
    project: "Projekt",
    accounting: "Buchhaltung",
    conversation: "Ticket",
    customer: "Organisation",
    general: "Allgemein",
    order: "Bestellung",
    server: "Server",
    user: "User",
    dev: "Dev",
  } as Record<string, string>,
  relativeDateTime: {
    justNow: "gerade eben",
    yesterday: "gestern",
    dayBeforeYesterday: "vorgestern",
  },
  customer: {
    role: {
      accountant: "Organisationsbuchhalter",
      notset: "Keine Rolle",
      owner: "Organisationsinhaber",
      member: "Organisationsmitglied",
    },
  },
  project: {
    role: {
      emailadmin: "E-Mail-Administrator",
      notset: "Keine Rolle",
      owner: "Projektadministrator",
      external: "Projektentwickler",
    },
  },
  conversation: {
    category: {
      apps: "Apps",
      articles: "Vertragspositionen",
      backups: "Backups",
      contractOwner: "Vertragspartner",
      cronjobs: "Cronjobs",
      databases: "Datenbanken",
      domains: "Domains",
      emails: "E-Mails",
      general: "Allgemein",
      invoices: "Rechnungen",
      payment: "Zahlungsmodalitäten",
      ssh: "SSH/SFTP",
      workload: "Auslastungen",
      extension: "Extension",
    },
    status: {
      closed: "Geschlossen",
      open: "Offen",
      answered: "Beantwortet",
      waiting: "Wartend",
      inProgress: "In Bearbeitung",
    },
  },
};

export type Translations = typeof de;
