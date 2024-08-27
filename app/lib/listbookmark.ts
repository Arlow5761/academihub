import { BookmarkListData } from "./types";

export default async function ListBookmark( start : Number, count : Number, search : string, sortby : string ) {
    return { count: 0, bookmark: [] } as BookmarkListData;
}
