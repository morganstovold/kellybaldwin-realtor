import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CRON_SECRET: z.string(),
    DATABASE_URL: z.string(),
    DATABASE_URL_UNPOOLED: z.string(),
  },
  runtimeEnv: {
    CRON_SECRET: process.env.CRON_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED,
  },
});
