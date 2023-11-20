import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center">
      <h1>home</h1>
      <Link href="/profile">Lets go to my resume</Link>
    </main>
  );
}
