import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {

    console.log(params)
    const productId = params.productId;
    const filter = {
        _id: productId
    }

    const payload = await request.json();
    console.log(payload);

    await mongoose.connect(connectionSrt);

    const result = await Product.findOneAndUpdate(filter, payload);

    return NextResponse.json({result : "Updated Sucessfully", success: true}, {status : 200})
}

export async function GET(request, {params}) {

    const productid = params.productId;
    const record = {
        _id: productid
    }

    mongoose.connect(connectionSrt)

    const result = await Product.findById(record);

    return NextResponse.json({result: result}, {status: 200})
}

export async function DELETE(request, {params}) {

    const productId = params.productId;
    const record = {
        _id: productId
    }

    mongoose.connect(connectionSrt)
    const result = await Product.deleteOne(record);
    console.log(result)
    return NextResponse.json({result: 'deleted'})

}