'use server'

import { sql } from "@vercel/postgres"
import { BeasiswaBriefData, BeasiswaListData } from "./types";

export default async function ListBeasiswa( start : Number, count : Number, search : string, sortby : string ) {
    if (search === "") {
        const data = await sql<BeasiswaBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Beasiswa LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, beasiswa: data.rows } as BeasiswaListData;
    } else {
        const tickedsearch = `%${search}%`;
        const data = await sql<BeasiswaBriefData>`SELECT ID, Title, Account, Image_link, Image_alt FROM Beasiswa WHERE tags LIKE ${tickedsearch} OR account LIKE ${tickedsearch} OR caption LIKE ${tickedsearch} LIMIT ${count.toString()} OFFSET ${start.toString()};`;
        return { count: data.rowCount || 0, beasiswa: data.rows } as BeasiswaListData;
    }
}
