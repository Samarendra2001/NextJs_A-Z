import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div><h1>Welcome to receipe App</h1>
    <Link href={'recipe-list'}>Explore Receipe list</Link>
    </div>
  );
}
