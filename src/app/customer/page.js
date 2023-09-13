'use client'
import React, { useState } from "react";

export default function Page() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/hello', {
            method:'POST',
            body: JSON.stringify({name, email, password})
        });

        const data = await response.json()
        if (data.success) alert("Thanks for your interest");
        else alert(data.result);

    }
    return (
        <>
        <div><h1>Hello Customer</h1></div>
        <h2>provide your details here</h2>

        <form onSubmit={handleSubmit} >
            Name: <input type="text" id='name' name="name" onChange={(e)=>setName(e.target.value)} value={name}/><br />
            Email: <input type="email" id='email' name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/><br />
            Password: <input type="password" id='pass' name="pass" onChange={(e)=>setPassword(e.target.value)} value={password}/><br />

            <button type="submit">Submit</button>
        </form>
        </>
    )
}