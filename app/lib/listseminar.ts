'use server'

import { sql } from "@vercel/postgres"

export default async function ListSeminar( start : Number, count : Number, search : string, sortby : string ) {
    const data = await sql<{ id : string, title : string }>`SELECT ID, Title FROM Seminar LIMIT ${count.toString()} OFFSET ${start.toString()};`;

    return { count: data.rowCount || 0, seminar: data.rows };
}
