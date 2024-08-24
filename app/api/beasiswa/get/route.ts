'use server'

import GetBeasiswa from "@/app/lib/getbeasiswa";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    const requestBody = await request.json();
    const data = await GetBeasiswa(requestBody.id);

    if (data === null) {
        return new NextResponse(null, { status: 402 });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
}
