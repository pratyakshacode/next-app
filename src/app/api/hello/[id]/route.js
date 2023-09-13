import { NextResponse } from "next/server";
import { user } from "@/util/db";

export async function GET(request, content) {
    console.log(typeof content.params.id)
    
    
    return NextResponse.json(user.filter((item => {
        
        return item.id.toString() == content.params.id
    })))
}

export async function PUT(request, content) {

    let payload = await request.json();
    let userId = content.params.id;
    console.log(payload, userId);

    if(!userId) return NextResponse.json({result: 'Some Error Occured'}, {status: 404})
    return NextResponse.json({result: 'Updated Succesfully'}, {status: 200})
}