'use server'

import { sql } from "@vercel/postgres";
import { BookmarkData, BookmarkListData } from "./types";
import { cookies } from "next/headers";

export default async function ListBookmark( start : Number, count : Number, search : string, sortby : string, userID? : string ) {
    if (userID === undefined) {
        if (!cookies().has("session")) return { count: 0, bookmark: [] } as BookmarkListData;
        userID = cookies().get("session")?.value;
    }

    const bookmarksQuery = await sql<{ bookmark : string | null }>`SELECT bookmark FROM users WHERE id = ${userID};`

    if (bookmarksQuery.rowCount != 1) return { count: 0, bookmark: [] } as BookmarkListData;

    const bookmarkString = bookmarksQuery.rows[0].bookmark;

    if (bookmarkString === null) return { count: 0, bookmark: [] } as BookmarkListData;

    const formattedSearch = '%' + search + '%';

    const bookmarks = bookmarkString.split(';');
    let bookmarkDataArray = [] as BookmarkData[];

    for (let bookmark of bookmarks) {
        let bookmarkProperties = bookmark.split('.');
        let bookmarkType = bookmarkProperties[0];
        let bookmarkID = bookmarkProperties[1];

        let bookmarkQuery = null;

        if (bookmarkType === "beasiswa") {
            bookmarkQuery = await sql<{ id : string, title : string, account : string, image_link : string, image_alt : string }>`SELECT id, title, account, image_link, image_alt FROM beasiswa WHERE id = ${bookmarkID} AND tags LIKE ${formattedSearch};`
        } else if (bookmarkType === "lomba") {
            bookmarkQuery = await sql<{ id : string, title : string, account : string, image_link : string, image_alt : string }>`SELECT id, title, account, image_link, image_alt FROM lomba WHERE id = ${bookmarkID} AND tags LIKE ${formattedSearch};`
        } else if (bookmarkType === "seminar") {
            bookmarkQuery = await sql<{ id : string, title : string, account : string, image_link : string, image_alt : string }>`SELECT id, title, account, image_link, image_alt FROM seminar WHERE id = ${bookmarkID} AND tags LIKE ${formattedSearch};`
        }

        if (bookmarkQuery === null || bookmarkQuery.rowCount != 1) continue;

        bookmarkDataArray = bookmarkDataArray.concat({ type: bookmarkType, ...bookmarkQuery.rows[0] });
    }

    return { count: bookmarkDataArray.length, bookmark: bookmarkDataArray } as BookmarkListData;
}
