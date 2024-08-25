'use server'

import GetSeminar from "@/app/lib/getseminar";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    const data = await GetSeminar(requestBody.id);

    if (data === null) {
        return new NextResponse(null, { status: 402 });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
}
