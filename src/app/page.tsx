import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen border-2 border-red-200 flex justify-center items-center">
      <h1>home</h1>
      <Link href="/profile">Lets go to my resume</Link>
    </main>
  );
}
