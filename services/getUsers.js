export default async function() {

    const users = await fetch('https://dummyjson.com/users');
    return users.json();
}