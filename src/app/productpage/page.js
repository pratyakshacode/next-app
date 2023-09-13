'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [products, setProducts] = useState([])
    const getData = async ()=> {

        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();

        setProducts(data.result)

    }
    useEffect(()=> {
        getData();

    },[products])

    const deleteProduct = async (id)=> {

        const result = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE"
        })

        const response = await result.json();
        
    }
    
  return (
    <div>
       <table border={'2px solid black'} cellPadding={'7px'}>
        <thead>
            <tr>

                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Update</td>
                <td>Delete</td>


            </tr>
        </thead>

        <tbody>

            {
                products.map((product)=> {

                    return <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        
                        <td><Link href={`http://localhost:3000/productpage/${product._id}`} >Update</Link></td>
                        <td><button onClick={()=> deleteProduct(product._id)} style={{backgroundColor: "rgba(250, 20, 20, 0.8)", color: 'white', border: "1px solid black", padding: '4px 7px', borderRadius: '7px', cursor: 'pointer'}}>Delete</button></td>
                        
                    </tr>
                })
            }
        </tbody>
       </table>
    </div>
  )
}

export default Page
