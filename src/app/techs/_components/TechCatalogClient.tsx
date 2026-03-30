"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import type { Technology } from "../_data/technologies"

type Props = {
  technologies: Technology[]
}

export default function TechCatalogClient({ technologies }: Props) {
  const [query, setQuery] = useState("")

  const filtered = query.trim()
    ? technologies.filter((t) =>
        t.name.toLowerCase().includes(query.toLowerCase())
      )
    : technologies

  return (
    <div className="flex flex-col gap-8">
      <Input
        type="search"
        placeholder="Buscar tecnologia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-sm h-9 bg-surface border-border text-foreground placeholder:text-foreground-subtle font-mono text-sm focus-visible:ring-0 focus-visible:border-primary"
      />

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-foreground-subtle">
          Nenhuma tecnologia encontrada para &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((tech) => (
            <Link key={tech.slug} href={`/tech/${tech.slug}`} className="group">
              <article className="flex flex-col gap-4 p-5 bg-surface border border-border rounded-xl transition-colors hover:border-border-strong hover:bg-surface-raised h-full">
                {/* Badge + name */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 font-mono text-sm font-medium"
                    style={{
                      backgroundColor: `${tech.accentColor}18`,
                      border: `1px solid ${tech.accentColor}35`,
                      color: tech.accentColor,
                    }}
                  >
                    {tech.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base text-foreground leading-tight truncate">
                      {tech.name}
                    </h3>
                    <span className="font-mono text-[11px] text-primary/80">
                      {tech.latestVersion}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-mono text-[12px] text-foreground-muted leading-relaxed line-clamp-3 flex-1">
                  {tech.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-mono text-[11px] text-foreground-subtle">
                    {tech.subscribers.toLocaleString("pt-BR")} assinantes
                  </span>
                  <span className="font-mono text-[11px] text-primary group-hover:underline">
                    Ver →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
