import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
     <ul>
      <li><Link href={"/Home"}>Home</Link></li>
      <li><Link href={"/About"}>About</Link></li>
      <li><Link href={"/Contact"}>Contact</Link></li>
     </ul>
    </main>
  );
}
