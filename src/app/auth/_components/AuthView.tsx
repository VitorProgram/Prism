"use client"

import AnimatedLogo from "@/components/core/AnimatedLogo"
import Prism from "@/components/Prism"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"

const AuthView = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggleForm = () => setShowLogin((prev) => !prev)

    return (
        <div className="flex min-h-screen w-full">

            {/* Left — Prism background (desktop only) */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden bg-surface">
                <Prism
                    animationType="3drotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0}
                    glow={1}
                />

                {/* Overlay escuro para garantir legibilidade do texto sobre o canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10" />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12">
                    <h1 className="font-display text-3xl font-bold text-foreground leading-tight max-w-sm">
                        Todas as atualizações da sua stack num só lugar
                    </h1>
                    <p className="mt-4 text-sm text-foreground-muted leading-relaxed max-w-sm">
                        O Prism coleta automaticamente as releases das suas principais tecnologias e entrega um digest por e-mail com o que mudou nas tecnologias que você usa — no ritmo que fizer sentido para você.<br /><br />
                        Você não precisa mais abrir repositório por repositório. Assine sua stack e fique sempre atualizado.
                    </p>
                </div>
            </div>

            {/* Right — auth form */}
            <div className="flex flex-1 flex-col justify-center items-center px-6 py-10 bg-background overflow-x-hidden">
                <div className="neon-glow-card flex flex-col gap-10">
                    <AnimatedLogo />

                    {/* Mobile only — copy institucional sem fundo especial */}
                    <section className="lg:hidden flex flex-col gap-3">
                        <h2 className="font-display text-xl font-bold text-foreground leading-snug">
                            Todas as atualizações da sua stack num só lugar
                        </h2>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                            O Prism coleta automaticamente as releases das suas principais tecnologias e entrega um digest por e-mail com o que mudou nas tecnologias que você usa — no ritmo que fizer sentido para você.
                        </p>
                    </section>

                    {showLogin
                        ? <Login onSwitchtoRegister={toggleForm} />
                        : <Register onSwitchToLogin={toggleForm} />
                    }
                </div>
            </div>

        </div>
    )
}

export default AuthView
