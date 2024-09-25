"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);

  const handleNavigate =()=>{
    router.push('/products');
  };
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Welcome to nextJs course </h1>
          <Link href={'/products'}>Navigate to product page</Link>
          <Link href={'/account'}>Account PAge</Link>

          <h2 className="font-bold mt-4 text-lg text-red-500">Another way of navigating</h2>
          <button onClick={handleNavigate}>Navigate to Product page using useRouterHOOk</button>
      </main>
    
  );
}
