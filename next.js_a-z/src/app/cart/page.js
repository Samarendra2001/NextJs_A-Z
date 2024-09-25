"use client"

import { usePathname, useSearchParams } from "next/navigation"

export default function cart(){

    const pathName = usePathname()
    console.log(pathName);
    const searchParams = useSearchParams();
    console.log(searchParams.get('search'),searchParams.get('randomvalue'))
    return <div>
        <h1>This is my Cart.</h1>
    </div>
}