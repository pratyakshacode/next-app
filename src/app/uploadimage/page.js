'use client'

import { useState } from "react"

export default function Page() {

    const uploadImage = async (e)=> {
        e.preventDefault();
        
        const data = new FormData();
        data.set("image", file);

        const result = await fetch('api/upload', {
            method: "POST",
            body: data
        });

        console.log(await result.json());
    }

    const [file, setFile] = useState('')
    return (
        <>
        <div>
            <form onSubmit={uploadImage}>
                Name: <input type="text" name="name" id="name" /><br />
                Image : <input type="file" name="image" id="image" onChange={(e)=> setFile(e.target.files?.[0])}/> <br />
                <button type="submit">Upload</button>
            </form>
        </div>
        </>
    )
}