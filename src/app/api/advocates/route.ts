import { and, ilike, or, sql } from "drizzle-orm";
import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search")?.toLowerCase();

  let data;

  if (query) {
    const terms = query
      .split(",")
      .map((term) => term.trim())
      .filter(Boolean); // remove empty strings

    const filters = terms.map((term) =>
      or(
        ilike(advocates.city, `%${term}%`),
        sql`${advocates.specialties}::text ILIKE ${`%${term}%`}`
      )
    );

    data = await db
      .select()
      .from(advocates)
      .where(and(...filters)); // match ALL terms
  } else {
    data = await db
      .select()
      .from(advocates);
  }

  return Response.json({ data });
}
