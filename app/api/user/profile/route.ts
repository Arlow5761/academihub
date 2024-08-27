'use server'

import FetchProfile, { UpdateProfile } from "@/app/lib/profile"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const session = cookies().get("session")

    if (session === undefined) {
        return new NextResponse(null, { status: 404 });
    }

    const responseBody = await FetchProfile(session!.value, true);

    if (responseBody === null) {
        return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 })
}

export async function POST(request : NextRequest) {
    const session = cookies().get("session");

    if (session === undefined) {
        return new NextResponse(null, { status: 404 });
    }

    const requestBody = await request.json();
    const status = await UpdateProfile(session.value, requestBody.username, requestBody.password, requestBody.profilepicture, requestBody.job, requestBody.tags, requestBody.description);

    if (status) {
        return new NextResponse(null, { status: 200 });
    }

    return new NextResponse(null, { status: 404 });
}
