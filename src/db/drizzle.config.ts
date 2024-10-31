import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './src/db/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',

  migrations: {
    prefix: 'timestamp',
    table: '__migrations__',
  },

  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
