import { Category } from "../../config/shared/enums/category";
import { ContactSupportInterface } from "../../config/shared/interfaces/contact_support";

export class ContactSupport {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: Category;
  message: string;

  constructor(options: ContactSupportInterface) {
    const { fullName, companyName, email, phone, category, message } = options;

    this.fullName = fullName;
    this.companyName = companyName;
    this.email = email;
    this.phone = phone;
    this.category = category;
    this.message = message;
  }
}
