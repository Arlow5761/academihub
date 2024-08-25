'use server'

import { sql } from "@vercel/postgres";
import { LombaData } from "./types";

export default async function GetLomba(lombaID : string) {
    const data = await sql<LombaData>`SELECT id, title, description FROM lomba WHERE id=${lombaID};`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
