import {config} from "dotenv";
import { Defaults } from "./defaults";

config();

const port: number = parseInt(process.env.DB_PORT!) ?? Defaults.db.PORT;
const host: string = process.env.DB_HOST ?? Defaults.db.HOST;
const dbName: string = process.env.DB_NAME!;
const user: string = process.env.DB_USER!;
const pass: string = process.env.DB_PASSWORD!;

const mongoUri: string = `mongodb://${host}:${port}`;

const mongooseConnectionOptions = {
  dbName,
  user,
  pass,
};

export {mongoUri, mongooseConnectionOptions};
