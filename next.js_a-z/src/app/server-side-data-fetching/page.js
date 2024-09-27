import Link from "next/link";


async function fetchListOfUsers(){
    try{
        const response = await fetch('https://dummyjson.com/users')
    const result = await response.json();
    return result.users;
    
 }catch(error){
    throw new Error (error);
 }
}
export default async function ServerSideDataFetching(){

    const listOfUsers = await fetchListOfUsers();
    console.log(listOfUsers);
    return(
        <div>
            <h1 className="p-10">ServerSideDataFetching : Users List</h1>
            <ul>
                {
                  listOfUsers && listOfUsers.length > 0 ?
                  listOfUsers.map(users=><li className=" text-blue-500 mt-5 cursor-pointer">
                    <Link href = {`/server-side-data-fetching/${users.id}`}>{users.firstName}</Link></li>)
                  :null
                }
            </ul>
        </div>
    )
}