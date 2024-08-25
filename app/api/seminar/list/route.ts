'use server'

import ListSeminar from "@/app/lib/listseminar";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    const list = await ListSeminar(requestBody.start, requestBody.count, requestBody.search, requestBody.sortby);

    return new NextResponse(JSON.stringify(list), { status: 200 });
}
