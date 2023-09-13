import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";

export async function GET(request) {

    const response = await mongoose.connect(connectionSrt);
    const data = await Product.find();

    return NextResponse.json({result: data, success: true}, {status: 200})
}

export async function POST(request) {

    const payload = await request.json();

    await mongoose.connect(connectionSrt)
    let product = new Product(payload);

    const result = await product.save();
    return NextResponse.json({result: 'added succefully'}, {status: 200})
}