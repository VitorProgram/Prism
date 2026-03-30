import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBackground from "./_components/HeroBackground"
import { Input } from "@/components/ui/input"

const features = [
    {
        label: "Catálogo",
        title: "Catálogo de tecnologias",
        description:
            "Navegue pelas tecnologias disponíveis e veja as últimas releases diretamente do GitHub. Tudo organizado, sem precisar abrir repositório nenhum.",
    },
    {
        label: "Assinaturas",
        title: "Assinaturas personalizadas",
        description:
            "Siga só o que você usa no dia a dia. Monte sua lista de tecnologias e receba apenas o que importa para a sua stack.",
    },
    {
        label: "Digest",
        title: "Digest por e-mail",
        description:
            "Receba um resumo consolidado com todas as novidades na frequência que preferir — diário, semanal ou mensal.",
    },
]

const technologies = [
    { name: "React", version: "v19.1" },
    { name: "TypeScript", version: "v5.8" },
    { name: "Next.js", version: "v15.3" },
    { name: "Vue", version: "v3.5" },
    { name: "Tailwind CSS", version: "v4.1" },
    { name: "Vite", version: "v6.3" },
    { name: "Node.js", version: "v22.14" },
    { name: "Prisma", version: "v6.5" },
]

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
                            <Button className="h-8 text-sm">
                                Criar conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16">
                <div className="absolute inset-0 z-0">
                    <HeroBackground />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />

                <div className="relative z-20 flex flex-col items-center gap-6 max-w-3xl">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest font-mono bg-primary/10 border border-primary/20 text-primary">
                        Agregador de release notes
                    </span>

                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                        Todas as atualizações da sua stack{" "}
                        <span className="text-primary">num só lugar</span>
                    </h1>

                    <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl">
                        Assine as tecnologias que você usa e receba um digest por e-mail com as
                        novidades — no ritmo que fizer sentido para você.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <Link href="/auth">
                            <Button className="h-10 px-6 text-sm font-medium">
                                Começar grátis
                            </Button>
                        </Link>
                        <Link href="/techs">
                            <Button variant="outline" className="h-10 px-6 text-sm text-foreground">
                                Ver tecnologias
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-surface border-t border-border">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col items-center text-center gap-4 mb-16">
                        <span className="text-xs uppercase tracking-widest font-mono text-primary">
                            Funcionalidades
                        </span>
                        <h2 className="font-display font-bold text-3xl text-foreground">
                            Simples de assinar, fácil de acompanhar
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex flex-col gap-3 p-6 rounded-xl bg-surface-raised border border-border"
                            >
                                <span className="text-xs uppercase tracking-widest font-mono text-primary/70">
                                    {feature.label}
                                </span>
                                <div className="w-8 h-px bg-primary" />
                                <h3 className="font-display font-semibold text-base text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 border-t border-border">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col items-center text-center gap-4 mb-16">
                        <span className="text-xs uppercase tracking-widest font-mono text-primary">
                            Catálogo
                        </span>
                        <h2 className="font-display font-bold text-3xl text-foreground">
                            As tecnologias que você já usa, acompanhadas de perto
                        </h2>
                        <p className="text-sm text-foreground-muted max-w-md leading-relaxed">
                            Releases coletadas automaticamente via GitHub. Sem curadoria manual, sem atraso.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex flex-col gap-1 p-5 rounded-xl border border-border bg-surface hover:border-border-strong transition-colors"
                            >
                                <span className="font-display font-semibold text-base text-foreground">
                                    {tech.name}
                                </span>
                                <span className="text-xs font-mono text-primary/80">
                                    {tech.version}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Link href="/tech">
                            <Button variant="outline" className="h-9 px-5 text-sm text-foreground">
                                Ver catálogo completo
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-surface border-t border-border">
                <div className="container mx-auto max-w-xl flex flex-col items-center text-center gap-6">
                    <span className="text-xs uppercase tracking-widest font-mono text-primary">
                        Comece agora
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-snug">
                        Não precisa mais abrir 15 repositórios por semana.
                    </h2>
                    <p className="text-sm text-foreground-muted leading-relaxed max-w-md">
                        Crie uma conta gratuita, escolha suas tecnologias e receba tudo
                        organizado direto no seu e-mail.
                    </p>

                    <form action="/signup" method="GET" className="w-full flex flex-col sm:flex-row gap-3 mt-2">
                        <Input
                            id="email"
                            className="h-10 lg:h-10 ring-0 focus-visible:ring-0 border border-gray-600 focus-visible:border-primary"
                            type="email"
                            placeholder="seu@email.com"
                            required
                        />

                        <Button
                            type="submit"
                            className="h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium font-display hover:bg-primary-hover transition-colors whitespace-nowrap"
                        >
                            Criar conta grátis
                        </Button>
                    </form>
                </div>
            </section>

            <footer className="border-t border-border px-6 py-8">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/prism-icon.svg" alt="Prism" width={20} height={20} />
                        <span className="font-display font-semibold text-sm text-foreground">Prism</span>
                    </Link>
                    <p className="text-xs text-foreground-muted font-mono">
                        © {new Date().getFullYear()} Prism. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}
