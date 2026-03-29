"use client"
import Image from "next/image";
import Shuffle from "../Shuffle";

const AnimatedLogo = () => {
    return (  
        <div className="flex items-center justify-start gap-4 w-full">
            <Image draggable={false} src="/prism-icon.svg" alt="Logo" width={50} height={50} />

            
            <Shuffle
                text="Prism"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
            />
        </div>
    );
}
 
export default AnimatedLogo;