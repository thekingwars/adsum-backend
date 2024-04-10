import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/init";
import { Server } from "./server";

(() => {
  main();
})();

async function main() {
  const server = new Server();

  MongoDatabase.connect({
    dbName: envs.DB_NAME,
    url: envs.URL,
  })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("Error connecting to database", err);
    });

  server.start();
}
