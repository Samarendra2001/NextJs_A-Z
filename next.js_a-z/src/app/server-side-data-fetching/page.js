import Link from "next/link";

const fetchUserList =async()=>{
   try{
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
   }catch(err){
        throw new Error(err);
   }
}



export default async function serverSideData(){
    const listOfUsers = await fetchUserList();
    //console.log(listOfUsers);
    return(<div>
        <h1 className="mt-4">This is Server side Data fetching : UserList</h1>
        <ul className="p-5">
        {listOfUsers&&listOfUsers.length?
           listOfUsers.map((users)=><li className="cursor-pointer mt-2">
            <Link href = {`/server-side-data-fetching/${users.id}`}>{users.firstName}</Link></li>) : null}
    </ul>
    </div>)
}