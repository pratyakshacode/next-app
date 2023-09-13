'use client'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
const Page = (props) => {

  const updateData = async (e)=> {
    
    e.preventDefault();
    console.log(props);
    const id = props.params.productId;
    console.log(id)
    
    const result = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({name, category, price})
    });

    const data = await result.json();
    console.log(data);

    if(data.success) {
      alert("Updated successfully");
    } else alert("Something went wrong");
    

  }

  const getData = async ()=> {

    const response = await fetch(`http://localhost:3000/api/products/${props.params.productId}`);
    let data = await response.json()
    data = data.result;

    console.log(data)
    setName(data.name)
    setCategory(data.category)
    setPrice(data.price);

  }

  useEffect(()=> {
    getData();
  },[])
  
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('')

  return (
    <div>
      <h1>Update Data</h1>
      <form onSubmit={updateData}>

        Name : <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} value={name}/> <br />
        Category: <input type="text" name="category" id="category" onChange={(e)=> setCategory(e.target.value)} value={category}/> <br />
        Price : <input type="text" name="price" id="price" onChange={(e)=> setPrice(e.target.value)} value={price}/> <br />
        <button type="submit">UpdateData</button>
      </form>
    </div>
  )
}

export default Page
