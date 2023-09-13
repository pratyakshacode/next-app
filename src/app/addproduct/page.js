'use client'
import { useState } from "react";

export default function Page() {

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/products', {
            method: "POST",
            body: JSON.stringify({name, category, price})
        })

        let data = await response.json();
        console.log(data);

    }

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    return (
        <div>

            <form onSubmit={handleSubmit}>

        Name: <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} value={name}/> <br />
        Category: <input type="text" name="category" id="category" onChange={(e)=> setCategory(e.target.value)} value={category}/>   <br />
        Price : <input type="text" name="price" id="price" onChange={(e)=> setPrice(e.target.value)} value={price}/> <br />

        <button type="submit">Add Product</button>
            </form>
        </div>
    )
}