

const fetchUserDetails = async(currentUserId)=>{
    console.log(currentUserId);
    try{
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`)
    const result = await apiResponse.json();
    return result;
    }catch(e){
        throw new Error(e);
    }
    
}

export default async function UserDetails({params}){
    console.log(params)
    const userDetails = await fetchUserDetails(params.details);
    return(
     <div>
        <h1 className="mt-5">This is User details Page</h1>
        <p>{userDetails?.firstName} {userDetails?.lastName}</p>
        <p>{userDetails?.age}</p>
        <p>{userDetails?.email}</p>
        <p>{userDetails?.phone}</p>
        <p>{userDetails?.birthdate}</p>
        <p>{userDetails?.bloodGroup}</p>
     </div>
    )
    
}