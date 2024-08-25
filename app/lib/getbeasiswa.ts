'use server'

import { sql } from "@vercel/postgres";

export default async function GetBeasiswa(beasiswaID : string) {
    const data = await sql<{ id : string, title : string }>`SELECT id, title FROM beasiswa WHERE id='${beasiswaID}';`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
