import mongoose from "mongoose";
import { ConnectionMongoOption } from "../config/shared/interfaces/connectionMongoOption";

export class MongoDatabase {
  static async connect(options: ConnectionMongoOption) {
    const { dbName, url } = options;

    try {
      await mongoose.connect(url, {
        dbName,
      });
    } catch (err) {
      throw new Error("Error connecting to database");
    }
  }
}
