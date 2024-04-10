import express from "express";
import { ContactSupportController } from "../controller/contact_support";
import { ContactSupportRepositoryImpl } from "../../infrastructure/repository/contact_supp_impl";
import { ContactSupportDataSourceImpl } from "../../infrastructure/datasources/contact_support_impl";

export class Router {
  private readonly contactSupportRepositoryImpl: ContactSupportRepositoryImpl;
  private readonly contactSupportController: ContactSupportController;

  constructor() {
    // Lo ideal seria que se agregue a un service locator para la inyección de dependencias, pero por simplicidad se hace de esta manera
    this.contactSupportRepositoryImpl = new ContactSupportRepositoryImpl(
      new ContactSupportDataSourceImpl()
    );

    this.contactSupportController = new ContactSupportController(
      this.contactSupportRepositoryImpl
    );
  }

  public get routes(): express.Router {
    const router = express.Router();

    router.post("/contact-support", (req, res) =>
      this.contactSupportController.createContactSupport(req, res)
    );

    router.get("/contact-support", (req, res) =>
      this.contactSupportController.getContactSupports(req, res)
    );

    return router;
  }
}
