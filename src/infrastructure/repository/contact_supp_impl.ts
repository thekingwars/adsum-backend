import { ContactSupportDataSource } from "../../domain/datasources/contact_support";
import { ContactSupport } from "../../domain/entities/contact_support";
import { ContactSupportRepository } from "../../domain/repository/contact_support";

export class ContactSupportRepositoryImpl implements ContactSupportRepository {
  constructor(
    private readonly contactSupportDataSource: ContactSupportDataSource
  ) {}

  createContactSupport(
    contactSupport: ContactSupport
  ): Promise<ContactSupport> {
    return this.contactSupportDataSource.createContactSupport(contactSupport);
  }

  getContactSupports(): Promise<ContactSupport[]> {
    return this.contactSupportDataSource.getContactSupports();
  }
}
