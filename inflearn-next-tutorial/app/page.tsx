import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Next.js tutorial for beginners",
};

export default function Home() {
  return (
    <main>
      HOME
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
