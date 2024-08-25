'use server'

import { sql } from "@vercel/postgres"
import { BeasiswaBriefData, BeasiswaListData } from "./types";

export default async function ListBeasiswa( start : Number, count : Number, search : string, sortby : string ) {
    const data = await sql<BeasiswaBriefData>`SELECT ID, Title FROM Beasiswa LIMIT ${count.toString()} OFFSET ${start.toString()};`;

    return { count: data.rowCount || 0, beasiswa: data.rows } as BeasiswaListData;
}
