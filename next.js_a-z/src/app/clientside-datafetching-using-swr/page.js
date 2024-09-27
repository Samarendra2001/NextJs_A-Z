'use client'
import useSWR from 'swr';
const fetcher = (...args) =>fetch(...args).then((res)=>res.json())

export default function UsingSwrhook(){

    const {data,error,isLoading} = useSWR(
        "https://dummyjson.com/users",
        fetcher
    );
    if(error){
        return <div>Failed to Load</div>
    }
    if(isLoading)
        return(<h3 className="font-extrabold text-3xl">
            Loading users ! Please Wait
        </h3>)
    return <div>
        <h1>This is data fegtching using Swr hook.</h1>
        {data && data?.users && data?.users.length ? 
            data?.users.map(user=>(<li key={user.id}>{user.firstName}</li>))
            : null }
    </div>
}