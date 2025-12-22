import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "webscrape",
  user: "postgres",
  password: "12341",
});

// No generic, no `any`
export async function query(
  text: string,
  params?: unknown[]
) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res; // type is QueryResult<any>, which is fine
  } finally {
    client.release();
  }
}
