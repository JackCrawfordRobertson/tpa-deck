"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function SectionTitle({ title, subtitle }) {
    // tsParticles Init
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative w-screen h-screen flex flex-col justify-start items-start bg-white text-black p-12 overflow-hidden">
            {/* Inverted tsParticles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "white" },
                    particles: {
                        number: { value: 80 },
                        color: { value: "#2a9d90" }, // Black particles
                        links: { enable: true, distance: 150, color: "#2a9d90", opacity: 1 },
                        move: { enable: true, speed: 2 },
                        size: { value: 5 },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            push: { quantity: 4 },
                        },
                    },
                }}
                className="absolute top-0 left-0 w-full h-full"
            />

            {/* Animated Title */}
            <motion.h1
                className="text-6xl font-extrabold tracking-tight leading-tight relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {title}
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.h2
                className="text-4xl opacity-80 mt-2 relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                {subtitle}
            </motion.h2>

          {/* Logos at Bottom-Right */}
          <div className="absolute bottom-6 right-8 flex items-center space-x-4">
                <img
                    src={ "/logo/Payments Association Logo.svg"}
                    alt="Logo 1"
                    className="w-24 h-24 opacity-100"
                />
                <span className="text-6xl font-bold opacity-60">×</span>
                <img
                    src={"/logo/PAY360 2025 Logo.svg"}
                    alt="Logo 2"
                    className="w-24 h-24 opacity-100"
                />
            </div>
        </div>
    );
}