import {NextResponse} from 'next/server';
import {writeFile} from 'fs/promises';

export async function POST(request, {params}) {

    const data = await request.formData();
    const file = data.get('image');

    if(!file) return NextResponse.json({message: "No Image Found", success: false}, {status: 404})

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;

    await writeFile(path, buffer);

    return NextResponse.json({message : "File Uploaded Successfully" , success: true})
}