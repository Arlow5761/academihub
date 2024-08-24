import LoginUser from "@/app/lib/login";
import { NextRequest, NextResponse } from "next/server";


export default async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const loginStatus = await LoginUser(requestBody.username, requestBody.password);
    const response = new NextResponse;
    
    if (loginStatus)
    {
        response.headers.set("status", "200");
    }
    else
    {
        response.headers.set("status", "404");
    }

    return response;
}
