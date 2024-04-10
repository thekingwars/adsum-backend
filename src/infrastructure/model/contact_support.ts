export class ContactSupportModel {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: string;
  message: string;

  constructor(options: any) {
    const { fullName, companyName, email, phone, category, message } = options;

    this.fullName = fullName;
    this.companyName = companyName;
    this.email = email;
    this.phone = phone;
    this.category = category;
    this.message = message;
  }

  static fromJson(json: Record<string, any>): ContactSupportModel {
    const { fullName, companyName, email, phone, category, message } = json;

    const contactSupport = new ContactSupportModel({
      fullName,
      companyName,
      email,
      phone,
      category,
      message,
    });

    return contactSupport;
  }

  toJson(): Record<string, any> {
    return {
      fullName: this.fullName,
      companyName: this.companyName,
      email: this.email,
      phone: this.phone,
      category: this.category,
      message: this.message,
    };
  }
}
