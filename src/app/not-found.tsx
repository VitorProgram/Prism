import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <Link href="/" className="flex items-center gap-3 mb-16">
        <Image src="/prism-icon.svg" alt="Prism" width={28} height={28} />
        <span className="font-display font-semibold text-base text-foreground">Prism</span>
      </Link>

      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-subtle mb-4">
        Erro 404
      </p>

      <h1 className="font-display font-bold text-6xl md:text-8xl text-foreground leading-none mb-4">
        404
      </h1>

      <p className="font-mono text-sm text-foreground-muted max-w-sm leading-relaxed mb-8">
        A página que você procura não existe ou foi movida.
      </p>

      <div className="flex items-center gap-3">
        <Link href="/">
          <Button className="h-9 px-5 text-sm">Voltar ao início</Button>
        </Link>
        
        <Link href="/tech">
          <Button variant="outline" className="h-9 px-5 text-sm text-foreground">
            Ver catálogo
          </Button>
        </Link>
      </div>
    </div>
  )
}
