import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg; // perlu karena kita menggunakan module system NodeNext, kita harus mengimpor Pool dari package 'pg' dengan cara ini

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Membuat instance Drizzle ORM dengan menggunakan pool koneksi PostgreSQL
export const db = drizzle({ client: pool });
