'use server'

import ListBeasiswa from "@/app/lib/listbeasiswa";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    const list = await ListBeasiswa(requestBody.start, requestBody.count, requestBody.search, requestBody.sortby);

    return new NextResponse(JSON.stringify(list), { status: 200 });
}
