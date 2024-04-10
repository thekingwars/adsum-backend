import { Response, Request } from "express";
import { ContactSupport } from "../../domain/entities/contact_support";
import { ContactSupportRepository } from "../../domain/repository/contact_support";
import { Category } from "../../config/shared/enums/category";

export class ContactSupportController {
  constructor(
    private readonly contactSupportRepository: ContactSupportRepository
  ) {}

  async createContactSupport(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const { fullName, companyName, email, phone, category, message } =
        req.body;

      if (
        !fullName ||
        !companyName ||
        !email ||
        !phone ||
        !category ||
        !message
      ) {
        res.status(400).json({ error: "Missing required fields" });

        return;
      }

      const contactSupport = new ContactSupport({
        fullName,
        companyName,
        email,
        phone,
        category: Category[category as keyof typeof Category],
        message,
      });

      await this.contactSupportRepository.createContactSupport(contactSupport);

      return res.status(201).json({
        message: "Contact support created",
        data: contactSupport,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Internal server error: ${error}` });
    }
  }

  async getContactSupports(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | never[]> {
    try {
      const contactSupports =
        await this.contactSupportRepository.getContactSupports();

      return res.status(200).json({ data: contactSupports });
    } catch (error) {
      res.status(500).json({ error: `Internal server error: ${error}` });

      return [];
    }
  }
}
