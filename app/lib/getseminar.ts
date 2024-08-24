'use server'

import { sql } from "@vercel/postgres";

export default async function GetSeminar(seminarID : string) {
    const data = await sql<{ id : string, title : string }>`SELECT id, title FROM Seminar WHERE ID='${seminarID}';`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
