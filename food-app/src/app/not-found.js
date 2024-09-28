import Link from "next/link";


export default function NotFound(){
    return <div>
        <h1>This page Can not be Found</h1>
        <Link href ={"/"}>Go to home Page</Link>
    </div>
}