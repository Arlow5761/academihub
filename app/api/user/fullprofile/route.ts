'use server'

import FetchProfile from "@/app/lib/profile"
import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export async function GET() {
    const session = cookies().get("session")?.value

    if (session === null) {
        return new NextResponse(null, { status: 404 });
    }

    const responseBody = await FetchProfile(session!, true);

    if (responseBody === null) {
        return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 })
}
