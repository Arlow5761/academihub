'use server'

import { sql } from "@vercel/postgres";
import { BeasiswaData } from "./types";

export default async function GetBeasiswa(beasiswaID : string) {
    const data = await sql<BeasiswaData>`SELECT id, title, description FROM beasiswa WHERE id=${beasiswaID};`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
