import RegisterUser from "@/app/lib/register";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const registerStatus = await RegisterUser(requestBody.username, requestBody.password);
    const response = new NextResponse;
    
    if (registerStatus!.status) {
        return new NextResponse(null, { status: 200 })
    }

    return new NextResponse(null, { status: 400 })
}
