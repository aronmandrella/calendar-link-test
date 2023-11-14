import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-between p-12 ${inter.className}`}
    >
      Hello world
    </main>
  );
}
