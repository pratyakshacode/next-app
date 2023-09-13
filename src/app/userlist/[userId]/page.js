import React from 'react'

const Page = async ({params}) => {

    const getData = async (id) => {
    
        const response = await fetch(`http://localhost:3000/api/hello/${id}`);
        const data = await response.json();
        return data;
    
      }

      let user = await getData(params.userId);
      user = user[0]
      console.log(user)
  return (
    <div key={user.id} style={{border: '2px solid black'}}>
          <h2>id: {user.id}</h2>
          <h2>name : {user.name}</h2>
          <h2>class: {user.class}</h2>
        </div>
  )
}

export default Page
