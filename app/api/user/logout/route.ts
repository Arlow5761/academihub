import Logout from "@/app/lib/logout";
import { NextResponse } from "next/server";

export async function GET() {
    Logout();

    return new NextResponse(null, { status: 200 });
}
