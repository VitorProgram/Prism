import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="container mx-auto h-20 flex items-center">
        <div className="flex gap-4 justify-start items-center">
          <Image
            src="/prism-icon.svg"
            alt="Prism Logo"
            width={40}
            height={40}
          />

          <h1 className="text-2xl font-bold">Prism</h1>
        </div>
      </header>
    </>
  );  
}
