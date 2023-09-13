import Link from 'next/link';
import React from 'react'

const Page = async () => {

  const getData = async () => {
    
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    return data;

  }

  const users = await getData();
  return (
    <div>

      {users.map((user)=> {
        return <div key={user.id} style={{border: '2px solid black'}}>
          <h2>id: {user.id}</h2>
          <h2>name : {user.name}</h2>
          <h2>class: {user.class}</h2>
          <Link href={`/userlist/${user.id}`}>{user.name}</Link>
          <p><Link href={`/userlist/${user.id}/update`}>Edit</Link></p>
        </div>
      })}
       
    </div>
  )
}

export default Page
