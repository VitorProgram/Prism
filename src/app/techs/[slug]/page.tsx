import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  TECHNOLOGIES,
  TYPESCRIPT_RELEASES,
  type Technology,
  type Release,
} from "../_data/technologies"

// ─── Helpers ────────────────────────────────────────────

function getReleasesForTech(slug: string): Release[] {
  if (slug === "typescript") return TYPESCRIPT_RELEASES
  return []
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function truncateMarkdown(body: string, maxChars = 320): string {
  const stripped = body
    .replace(/^#{1,3}\s.+$/gm, "")   // remove headings
    .replace(/\*\*(.+?)\*\*/g, "$1") // strip bold
    .replace(/`(.+?)`/g, "$1")       // strip inline code
    .replace(/\n{2,}/g, "\n")        // collapse blank lines
    .trim()
  if (stripped.length <= maxChars) return stripped
  return stripped.slice(0, maxChars).replace(/\s\S+$/, "") + "…"
}

const RELEASE_TYPE_STYLES: Record<
  Release["type"],
  { label: string; color: string }
> = {
  major: { label: "Major", color: "#FFB347" },
  minor: { label: "Minor", color: "#7B5CFF" },
  patch: { label: "Patch", color: "#00D4AA" },
}

// ─── Static params ───────────────────────────────────────

export function generateStaticParams() {
  return TECHNOLOGIES.map((t) => ({ slug: t.slug }))
}

// ─── Metadata ────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tech = TECHNOLOGIES.find((t) => t.slug === slug)
  if (!tech) return {}
  return {
    title: `${tech.name} releases — Prism`,
    description: tech.description,
  }
}

// ─── Page ─────────────────────────────────────────────────

export default async function TechPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tech = TECHNOLOGIES.find((t) => t.slug === slug)
  if (!tech) notFound()

  const releases = getReleasesForTech(slug)
  const otherTechs = TECHNOLOGIES.filter((t) => t.slug !== slug).slice(0, 4)

  // Stats derived from releases data
  const totalReleases = releases.length
  const firstReleaseDate =
    releases.length > 0 ? formatDate(releases[releases.length - 1].date) : null
  const latestReleaseDate =
    releases.length > 0 ? formatDate(releases[0].date) : null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/prism-icon.svg" alt="Prism" width={28} height={28} />
              <span className="font-display font-semibold text-base text-foreground">
                Prism
              </span>
            </Link>
            <span className="text-border-strong select-none">/</span>
            <Link
              href="/tech"
              className="font-mono text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              Catálogo
            </Link>
            <span className="text-border-strong select-none">/</span>
            <span className="font-mono text-sm text-foreground">{tech.name}</span>
          </div>
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
        {/* ── Hero ── */}
        <section className="border-b border-border px-6 py-14">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              {/* Left: identity */}
              <div className="flex items-start gap-5">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl shrink-0 font-mono text-lg font-semibold"
                  style={{
                    backgroundColor: `${tech.accentColor}18`,
                    border: `1px solid ${tech.accentColor}35`,
                    color: tech.accentColor,
                  }}
                >
                  {tech.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
                      {tech.name}
                    </h1>
                    <span
                      className="inline-flex items-center h-6 px-2.5 rounded-full font-mono text-[10px] font-medium border"
                      style={{
                        backgroundColor: `${tech.accentColor}15`,
                        borderColor: `${tech.accentColor}30`,
                        color: tech.accentColor,
                      }}
                    >
                      {tech.latestVersion}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-foreground-muted max-w-lg leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="flex items-center gap-4 mt-1 flex-wrap">
                    <a
                      href={tech.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-foreground-subtle hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      Site oficial ↗
                    </a>
                    <a
                      href={tech.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-foreground-subtle hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      GitHub ↗
                    </a>
                    <span className="font-mono text-[11px] text-foreground-subtle">
                      {tech.subscribers.toLocaleString("pt-BR")} assinantes
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <Link href="/auth">
                  <Button className="h-10 px-6 text-sm font-medium whitespace-nowrap">
                    Seguir tecnologia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content: feed + sidebar ── */}
        <div className="container mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ── Releases feed ── */}
            <div className="flex-1 min-w-0">
              <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-subtle mb-6">
                Releases
              </span>

              {releases.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 border border-border rounded-xl bg-surface text-center">
                  <p className="font-mono text-sm text-foreground-muted">
                    Releases em breve.
                  </p>
                  <p className="font-mono text-[11px] text-foreground-subtle max-w-xs">
                    O histórico de releases será sincronizado automaticamente via GitHub.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {releases.map((release) => {
                    const typeStyle = RELEASE_TYPE_STYLES[release.type]
                    return (
                      <article
                        key={release.version}
                        className="flex flex-col gap-4 p-6 bg-surface border border-border rounded-xl hover:border-border-strong transition-colors"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-mono font-medium text-base text-foreground">
                              {release.version}
                            </span>
                            {/* Type badge */}
                            <span
                              className="inline-flex items-center h-5 px-2.5 rounded-full font-mono text-[9px] uppercase tracking-[0.08em] border"
                              style={{
                                backgroundColor: `${typeStyle.color}12`,
                                borderColor: `${typeStyle.color}30`,
                                color: typeStyle.color,
                              }}
                            >
                              {typeStyle.label}
                            </span>
                          </div>
                          <time
                            dateTime={release.date}
                            className="font-mono text-[11px] text-foreground-subtle whitespace-nowrap"
                          >
                            {formatDate(release.date)}
                          </time>
                        </div>

                        {/* Title */}
                        <h2 className="font-display font-semibold text-lg text-foreground leading-snug">
                          {release.title}
                        </h2>

                        {/* Preview */}
                        <p className="font-mono text-[12px] text-foreground-muted leading-relaxed whitespace-pre-line">
                          {truncateMarkdown(release.body)}
                        </p>

                        {/* Link */}
                        <a
                          href={release.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline underline-offset-2 self-start mt-1"
                        >
                          Ver release completa ↗
                        </a>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:w-64 shrink-0 flex flex-col gap-6">
              {/* Stats */}
              {releases.length > 0 && (
                <div className="flex flex-col gap-1 p-5 bg-surface border border-border rounded-xl">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-subtle mb-3">
                    Estatísticas
                  </span>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">
                        Releases cadastradas
                      </p>
                      <p className="font-display font-semibold text-xl text-foreground">
                        {totalReleases}
                      </p>
                    </div>
                    {firstReleaseDate && (
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">
                          Primeira release
                        </p>
                        <p className="font-mono text-[12px] text-foreground-muted">
                          {firstReleaseDate}
                        </p>
                      </div>
                    )}
                    {latestReleaseDate && (
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">
                          Última release
                        </p>
                        <p className="font-mono text-[12px] text-foreground-muted">
                          {latestReleaseDate}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-subtle mb-1">
                        Frequência média
                      </p>
                      <p className="font-mono text-[12px] text-foreground-muted">
                        ~1 release / mês
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Other technologies */}
              <div className="flex flex-col gap-1 p-5 bg-surface border border-border rounded-xl">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-subtle mb-3">
                  Outras tecnologias
                </span>
                <div className="flex flex-col gap-2">
                  {otherTechs.map((other: Technology) => (
                    <Link
                      key={other.slug}
                      href={`/tech/${other.slug}`}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-surface-raised hover:bg-surface-overlay border border-transparent hover:border-border transition-colors"
                    >
                      <div
                        className="flex items-center justify-center w-7 h-7 rounded shrink-0 font-mono text-[10px] font-medium"
                        style={{
                          backgroundColor: `${other.accentColor}18`,
                          border: `1px solid ${other.accentColor}30`,
                          color: other.accentColor,
                        }}
                      >
                        {other.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[12px] text-foreground truncate">
                          {other.name}
                        </p>
                        <p className="font-mono text-[10px] text-foreground-subtle">
                          {other.latestVersion}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/tech"
                  className="mt-2 font-mono text-[11px] text-primary hover:underline underline-offset-2 self-start"
                >
                  Ver catálogo completo →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 mt-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/prism-icon.svg" alt="Prism" width={20} height={20} />
            <span className="font-display font-semibold text-sm text-foreground">
              Prism
            </span>
          </Link>
          <p className="font-mono text-[11px] text-foreground-subtle">
            © {new Date().getFullYear()} Prism. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
