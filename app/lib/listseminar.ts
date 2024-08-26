'use server'

import { sql } from "@vercel/postgres"
import { SeminarBriefData, SeminarListData } from "./types";

export default async function ListSeminar( start : Number, count : Number, search : string, sortby : string ) {
    if (search === "") {
        const data = await sql<SeminarBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Seminar LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, seminar: data.rows } as SeminarListData;
    } else {
        const tickedsearch = `'%` + search + `%'`;
        const data = await sql<SeminarBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Seminar WHERE tags LIKE ${tickedsearch} LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, seminar: data.rows } as SeminarListData;
    }
}
