import express, { Express } from "express";
import dotenv from "dotenv";
import { envs } from "./config/plugins/envs.plugin";
import { Router } from "./presentation/routes/routes";
import cors from "cors";

export class Server {
  app: Express = express();

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(new Router().routes);
  }

  public start() {
    this.middlewares();

    this.app.listen(envs.PORT, () => {
      console.log(`Server is running on port ${envs.PORT}`);
    });
  }

  constructor() {
    dotenv.config();
  }
}
