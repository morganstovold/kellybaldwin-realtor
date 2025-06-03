import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import { env } from "@/app/env";

const db = drizzle({
  connection: env.DATABASE_URL,
  ws: ws,
});

export default db;
