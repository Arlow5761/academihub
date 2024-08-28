'use server'

import { RemoveBookmark } from "@/app/lib/bookmark";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const userID = cookies().get("session")?.value;

    if (userID === undefined) {
        return new NextResponse(null, { status: 404 });
    }

    const requestBody = await request.json();
    const status = await RemoveBookmark(userID, requestBody.type, requestBody.itemID);

    if (status) {
        return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 500 });
}