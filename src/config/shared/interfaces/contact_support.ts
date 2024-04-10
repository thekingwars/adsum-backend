import { Category } from "../enums/category";

export interface ContactSupportInterface {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: Category;
  message: string;
}
