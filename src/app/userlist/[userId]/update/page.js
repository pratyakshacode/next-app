'use client'
export default function ({params}) {

    const updateDetails = (e)=> {
        e.preventDefault();

        console.log(params.userId);
    }
    return (
        <>
        <form onSubmit={updateDetails}>

            Name: <input type="text" name="name" id="name" /><br />
            Email: <input type="email" name="email" id="email" /><br />
            Password: <input type="password" name="password" id="password" /><br />
            <button type="submit">Update</button>
        </form>
        </>
    )
}