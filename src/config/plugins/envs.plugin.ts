import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").default("3000").asPortNumber(),
  URL: env.get("URL").required().asString(),
  DB_NAME: env.get("DBNAME").required().asString(),
};
