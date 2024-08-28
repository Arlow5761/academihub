'use server'

import { sql } from "@vercel/postgres"

export async function AddBookmark(userID : string, type : string, itemID : string) {
    const bookmarkQuery= await sql<{ bookmark : string | null }>`SELECT bookmark FROM users WHERE id = ${userID}`;

    if (bookmarkQuery.rowCount === null || bookmarkQuery.rowCount != 1) {
        return false;
    }

    const bookmarkString = bookmarkQuery.rows[0].bookmark;
    const newBookmarkString = bookmarkString? bookmarkString + ';' + type + '.' + itemID : type + '.' + itemID;

    await sql`UPDATE users SET bookmark = ${newBookmarkString} WHERE id = ${userID};`;

    return true;
}

export async function RemoveBookmark(userID : string, type : string, itemID : string) {
    const bookmarkQuery= await sql<{ bookmark : string | null }>`SELECT bookmark FROM users WHERE id = ${userID}`;

    if (bookmarkQuery.rowCount === null || bookmarkQuery.rowCount != 1) {
        return false;
    }

    const bookmarkString = bookmarkQuery.rows[0].bookmark;

    if (bookmarkString === null) return false;

    const bookmarks = bookmarkString.split(';');
    let newBookmarkString : string | null = "";

    for (let bookmark of bookmarks) {
        let bookmarkInfo = bookmark.split('.');
        let bookmarkType = bookmarkInfo[0];
        let bookmarkID = bookmarkInfo[1];

        if (bookmarkType === type && bookmarkID === itemID) continue;

        newBookmarkString = newBookmarkString.concat(bookmark + ';');
    }

    newBookmarkString = newBookmarkString.slice(0, newBookmarkString.length - 1);

    if (newBookmarkString.length === 0) {
        newBookmarkString = null;
    }

    await sql`UPDATE users SET bookmark = ${newBookmarkString} WHERE id = ${userID};`

    return true;
}
