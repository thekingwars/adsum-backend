import { ContactSupport } from "../entities/contact_support";

export abstract class ContactSupportDataSource {
  abstract createContactSupport(
    contactSupport: ContactSupport
  ): Promise<ContactSupport>;

  abstract getContactSupports(): Promise<ContactSupport[]>;
}
