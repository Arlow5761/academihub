'use server'

import { sql } from "@vercel/postgres";
import { SeminarData } from "./types";

export default async function GetSeminar(seminarID : string) {
    const data = await sql<SeminarData>`SELECT id, title, description FROM seminar WHERE id=${seminarID};`;

    if (data.rowCount != 1) {
        return null;
    }

    return data.rows[0];
}
