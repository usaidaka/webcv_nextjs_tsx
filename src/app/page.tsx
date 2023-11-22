import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen min-w-screen flex flex-col justify-center items-center">
      <Image src="/cover.png" alt={""} width={300} height={100} />

      <Link
        href="/profile"
        className="bg-blue-600 font-semibold px-4 rounded-md py-2 text-white"
      >
        Lets go to my resume!
      </Link>
    </main>
  );
}
