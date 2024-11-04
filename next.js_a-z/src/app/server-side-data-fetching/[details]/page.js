const fetchUserDetails = async(id)=>{
   try{
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
   }catch(err){
    throw new Error(err);
   }
}

export default async function userDetails({params}){
    console.log(params);
    const userDetails = await fetchUserDetails(params.details);
    return(<div>
        <h1>This is User Details page</h1>
        <p>{userDetails?.firstName} {userDetails?.lastName}
            <p>{userDetails?.age}</p>
            <p>{userDetails?.phone}</p>
            <p>{userDetails?.email}</p>
        </p>
    </div>)
}