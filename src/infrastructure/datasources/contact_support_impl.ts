import { ContactSupportMongoModel } from "../../data/models/contact_support";
import { ContactSupportDataSource } from "../../domain/datasources/contact_support";
import { ContactSupport } from "../../domain/entities/contact_support";
import { ContactSupportMapper } from "../mapper/contact_support";
import { ContactSupportModel } from "../model/contact_support";

export class ContactSupportDataSourceImpl implements ContactSupportDataSource {
  async createContactSupport(
    contactSupport: ContactSupport
  ): Promise<ContactSupport> {
    const createNewContactSupport = await ContactSupportMongoModel.create(
      contactSupport
    );

    const saveContactSupport = await createNewContactSupport.save();

    return ContactSupportMapper.fromModelToEntity(
      ContactSupportModel.fromJson(saveContactSupport)
    );
  }

  async getContactSupports(): Promise<ContactSupport[]> {
    const contactSupports = await ContactSupportMongoModel.find();

    return contactSupports.map((contactSupport) =>
      ContactSupportMapper.fromModelToEntity(
        ContactSupportModel.fromJson(contactSupport)
      )
    );
  }
}
