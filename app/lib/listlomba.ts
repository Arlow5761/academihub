'use server'

import { sql } from "@vercel/postgres"
import { LombaBriefData, LombaListData } from "./types";

export default async function ListLomba( start : Number, count : Number, search : string, sortby : string ) {
    if (search === "") {
        const data = await sql<LombaBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Lomba LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, lomba: data.rows } as LombaListData;
    } else {
        const tickedsearch = `%${search}%`;
        const data = await sql<LombaBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Lomba WHERE tags LIKE ${tickedsearch} OR account LIKE ${tickedsearch} OR caption LIKE ${tickedsearch} LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, lomba: data.rows } as LombaListData;
    }
}
