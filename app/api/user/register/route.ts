import RegisterUser from "@/app/lib/register";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const registerStatus = await RegisterUser(requestBody.username, requestBody.password);
    const response = new NextResponse;
    
    if (registerStatus) {
        response.headers.set("status", "200");
    } else {
        response.headers.set("status", "404");
    }

    return response;
}
