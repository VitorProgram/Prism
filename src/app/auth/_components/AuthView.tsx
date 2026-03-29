"use client"

import AnimatedLogo from "@/components/core/AnimatedLogo"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"

const AuthView = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggleForm = () => setShowLogin((prev) => !prev)

    return (
        <div className="neon-glow-card flex flex-col gap-10">
            <AnimatedLogo />

            {showLogin
                ? <Login onSwitchtoRegister={toggleForm} />
                : <Register onSwitchToLogin={toggleForm} />
            }
        </div>
    )
}

export default AuthView
