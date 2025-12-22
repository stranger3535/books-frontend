import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "webscrape",
  user: "postgres",
  password: "12341",
});

export async function query<T = unknown>(text: string, params?: unknown[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}
