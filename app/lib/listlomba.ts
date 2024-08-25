'use server'

import { sql } from "@vercel/postgres"
import { LombaBriefData, LombaListData } from "./types";

export default async function ListLomba( start : Number, count : Number, search : string, sortby : string ) {
    const data = await sql<LombaBriefData>`SELECT ID, Title FROM Lomba LIMIT ${count.toString()} OFFSET ${start.toString()};`;

    return { count: data.rowCount || 0, lomba: data.rows } as LombaListData;
}
