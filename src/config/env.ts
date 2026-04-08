import { envSchema, Env } from "@schemas/env-schema";

export const env: Env = envSchema.parse({
    BASE_URL: process.env.BASE_URL,
    SITE_NAME: process.env.SITE_NAME,
    GOOGLE_VERIFICATION_CODE: process.env.GOOGLE_VERIFICATION_CODE,
  }
)

export const { BASE_URL, SITE_NAME, GOOGLE_VERIFICATION_CODE } = env;
