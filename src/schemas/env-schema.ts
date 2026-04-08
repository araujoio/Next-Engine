import { z } from "zod";

export const envSchema = z.object({
  BASE_URL: z.preprocess(
    (val: string | undefined) => (val === "" || val === undefined ? "http://localhost:3000" : val), z.url()),
  SITE_NAME: z.preprocess(
    (val: string | undefined) => (val === "" || val === undefined ? "Site Name" : val), z.string()),
  GOOGLE_VERIFICATION_CODE: z.preprocess(
    (val: string | undefined) => (val === "" || val === undefined ? "" : val), z.string()),
})

export type Env = z.infer<typeof envSchema>