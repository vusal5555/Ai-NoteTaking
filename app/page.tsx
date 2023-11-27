import { Button } from "@/components/ui/button";
import logo from "./assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5 px-2">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="FlowBrain logo" width={100} height={100}></Image>
        <span className="font-extrabold tracking-tighter text-4xl lg:text-5xl">
          FlowBrain
        </span>
      </div>
      <p className="max-w-prose text-center">
        An Intelligent note taking app with ai intergation built with OpenAi,
        Pinecone, Shadcn ui, Clerk and more.
      </p>

      <Button asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
