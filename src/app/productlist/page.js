'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'


const Page = () => {

    const [products, setProducts] = useState([])
    const getData = async ()=> {

        
        const data = await fetch('https://dummyjson.com/products');
        const response = await data.json();
        setProducts(response.products);
        console.log(products);
    }

    useEffect(()=> {

      
        getData();
       
    })
  return (
    <div className='loader-div'>
      {
        products.length ? products.map((item)=> {
            return <div key={item.price} style={{border: '2px solid wheat', margin: 10, padding: 10, textAlign: 'center', borderRadius: 10}}>
                <h2>Name : {item.title}</h2>
                <h3>Description : {item.description}</h3>
                <h3>Price : {item.price}</h3>
            </div>
        }): <Image src={"/loader.gif"} width={200} height={200}/>
      }
    </div>
  )
}

export default Page
