'use client'

import { useEffect, useState } from "react";

export default function ClientSide(){

    const[loading,setLoading] = useState(false);
    const[users,setUsers] = useState([]);

    const fetchUserList=async()=>{
        try{
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users/");
            const data = await response.json();
            if(data?.users){
                setUsers(data.users);
                setLoading(false);
            }
        }catch(err){
            //throw new Error(err);
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUserList();
    },[]);
    if(loading)
        return(<h3 className="font-extrabold text-3xl">Loading users!!! Please Wait</h3>);
    return (<div>
        <h1>This is client Side data fetching : UserList</h1>
        {users&&users.length
        ?users.map((user)=><li key={user.id}>{user.firstName}</li>):null}
    </div>)
}