'use server'

import { sql } from "@vercel/postgres"
import { SeminarBriefData, SeminarListData } from "./types";

export default async function ListSeminar( start : Number, count : Number, search : string, sortby : string ) {
    const data = await sql<SeminarBriefData>`SELECT ID, Title FROM Seminar LIMIT ${count.toString()} OFFSET ${start.toString()};`;

    return { count: data.rowCount || 0, seminar: data.rows } as SeminarListData;
}
