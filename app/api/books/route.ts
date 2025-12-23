import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query(
      "SELECT title, category, price, availability, rating, image_url FROM books"
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching books:", err);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
