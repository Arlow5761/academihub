'use server'

import ListBookmark from "@/app/lib/listbookmark";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const userID = cookies().get("session")?.value;

    if (userID === undefined) {
        return new NextResponse(null, { status: 404 });
    }

    const requestBody = await request.json();
    const list = await ListBookmark(requestBody.start, requestBody.count, requestBody.search, requestBody.sortby, userID);

    return new NextResponse(JSON.stringify(list), { status: 200 });
}
