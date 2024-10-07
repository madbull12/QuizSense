import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
    DATABASE_URL: z.string().min(1),
    APP_URL: z.string().url().min(1),
    GOOGLE_SITE_VERIFICATION_ID: z.string().optional(),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    EMAIL_SERVER_USER:z.string().min(1),
    EMAIL_SERVER_PASSWORD:z.string().min(1),
    EMAIL_SERVER_HOST:z.string().min(1),
    EMAIL_SERVER_PORT:z.string().min(1),
    EMAIL_FROM:z.string().min(1),
    AUTH_URL: z.string().url().optional(),
    AUTH_SECRET: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET_KEY: z.string().min(1),
    STRIPE_SUBSCRIPTION_PRICE_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD:process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PORT,
    EMAIL_FROM:process.env.EMAIL_FROM,
    AUTH_URL: process.env.AUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET_KEY: process.env.STRIPE_WEBHOOK_SECRET_KEY,
    STRIPE_SUBSCRIPTION_PRICE_ID: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
