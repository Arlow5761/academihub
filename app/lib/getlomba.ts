'use server'

import { sql } from "@vercel/postgres";

export default async function GetLomba(lombaID : string) {
    const data = await sql<{ id : string, title : string }>`SELECT id, title FROM Lomba WHERE ID='${lombaID}';`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
