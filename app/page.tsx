import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href={'/sampleOne'} className="border border-black hover:border-white p-5">sampleOne -&gt;</Link>
      </div>
    </main>
  );
}
