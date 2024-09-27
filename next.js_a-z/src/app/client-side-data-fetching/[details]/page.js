import { useSearchParams } from "next/navigation";

export default function UserDetails(){

    const searchParams = useSearchParams();
    console.log(searchParams.get('id'))
    return <div>
        <h1> This is UserDetals Page</h1>
        
    </div>
}