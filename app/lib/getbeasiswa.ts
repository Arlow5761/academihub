'use server'

import { sql } from "@vercel/postgres";

export default async function GetBeasiswa(beasiswaID : string) {
    const data = await sql<{ id : string, title : string, description : string }>`SELECT id, title, description FROM beasiswa WHERE id=${beasiswaID};`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
