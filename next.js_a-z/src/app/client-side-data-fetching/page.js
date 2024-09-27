'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

export default function ClientSide(){
    const[loading,setLoading] =useState(false)
    const[users,setUsers]= useState([]);
   
    const fetchListUser = async()=>{
        try{
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json();

            if(result?.users){
                setUsers(result.users);
                setLoading(false);
            }
        }catch(e){
            console.log(e)
            setUsers([]);
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchListUser();
    },[])

    if(loading) return <h2 className="font-extrabold text-3xl">Loading Users ! Please Wait...</h2>
    return <div>
        <h1 className="font-extrabold text-2xl mb-5">This is Client Side data fetching</h1>
        <ul>
            {users && users.length > 0 ? 
            users.map(user=>(<li className="text-blue-500 mt-5 cursor-pointer " key={user.id}>{user.firstName}</li>))
            : null }
        </ul>
    </div>
}