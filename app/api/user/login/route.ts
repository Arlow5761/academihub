import LoginUser from "@/app/lib/login";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const loginStatus = await LoginUser(requestBody.username, requestBody.password);

    if (loginStatus!.status) {
        return new NextResponse(null, { status: 200 })
    }

    return new NextResponse(null, { status: 400 })
}
