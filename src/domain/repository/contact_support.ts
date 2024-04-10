import { ContactSupport } from "../entities/contact_support";

export abstract class ContactSupportRepository {
  abstract createContactSupport(
    contactSupport: ContactSupport
  ): Promise<ContactSupport>;

  abstract getContactSupports(): Promise<ContactSupport[]>;
}
