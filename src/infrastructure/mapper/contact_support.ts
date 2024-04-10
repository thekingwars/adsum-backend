import { Category } from "../../config/shared/enums/category";
import { ContactSupport } from "../../domain/entities/contact_support";
import { ContactSupportModel } from "../model/contact_support";

export class ContactSupportMapper {
  static fromModelToEntity(model: ContactSupportModel): ContactSupport {
    const newCategory = model.category.toUpperCase() as keyof typeof Category;

    return new ContactSupport({
      fullName: model.fullName,
      companyName: model.companyName,
      email: model.email,
      phone: model.phone,
      category: Category[newCategory],
      message: model.message,
    });
  }
}
