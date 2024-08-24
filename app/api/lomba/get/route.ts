'use server'

import GetLomba from "@/app/lib/getlomba";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    const data = await GetLomba(requestBody.id);

    if (data === null) {
        return new NextResponse(null, { status: 402 });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
}
