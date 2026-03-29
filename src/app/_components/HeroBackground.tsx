"use client"

import LightRays from "@/components/LightRays"

const HeroBackground = () => {
    return (
        <LightRays
            raysOrigin="top-center"
            raysColor="#C8F042"
            raysSpeed={0.6}
            lightSpread={0.8}
            rayLength={2.5}
            fadeDistance={0.9}
            saturation={0.7}
            followMouse
            mouseInfluence={0.12}
            noiseAmount={0.05}
        />
    )
}

export default HeroBackground
