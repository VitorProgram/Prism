import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TECHNOLOGIES } from "./_data/technologies"
import TechCatalogClient from "./_components/TechCatalogClient"

export const metadata: Metadata = {
  title: "Catálogo de tecnologias — Prism",
  description:
    "Explore todas as tecnologias disponíveis no Prism e assine para receber releases por e-mail.",
}

export default function TechCatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/prism-icon.svg" alt="Prism" width={28} height={28} />
            <span className="font-display font-semibold text-base text-foreground">Prism</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth">
              <Button variant="outline" className="h-8 text-sm">
                Entrar
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="h-8 text-sm">Criar conta</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Page header */}
        <section className="border-b border-border px-6 py-16">
          <div className="container mx-auto max-w-5xl">
            <span className="inline-block font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-subtle mb-5">
              Catálogo
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Tecnologias
            </h1>
            <p className="font-mono text-sm text-foreground-muted max-w-lg leading-relaxed">
              {TECHNOLOGIES.length} tecnologias disponíveis. Releases coletadas
              automaticamente via GitHub — sem curadoria manual, sem atraso.
            </p>
          </div>
        </section>

        {/* Catalog (client — handles search + grid) */}
        <section className="px-6 py-12">
          <div className="container mx-auto max-w-5xl">
            <TechCatalogClient technologies={TECHNOLOGIES} />
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/prism-icon.svg" alt="Prism" width={20} height={20} />
            <span className="font-display font-semibold text-sm text-foreground">Prism</span>
          </Link>
          
          <p className="font-mono text-[11px] text-foreground-subtle">
            © {new Date().getFullYear()} Prism. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
