import { NextResponse } from "next/server";
import { user } from "@/util/db";

export async function GET(request) {
    return NextResponse.json(user, {status : 200})
}

export async function POST(request, response) {
    const payload = await request.json();

    return !payload.name || !payload.email || !payload.password ? NextResponse.json({result: 'Something Went Wrong', success: false}, {status: 404}) :NextResponse.json({result: payload, success: true}, {status: 200})
}

