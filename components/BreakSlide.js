"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function BreakSlide() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative min-w-screen w-screen h-screen flex flex-col justify-start items-start bg-white text-black p-12 overflow-hidden">
            {/* Soft Green Particle Effect */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "#e6f4ea" },
                    particles: {
                        number: { value: 60 },
                        color: { value: "#40916c" },
                        links: { enable: true, distance: 120, color: "#52b788", opacity: 0.3 },
                        move: { enable: true, speed: 1.2 },
                        size: { value: 3 },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "bubble" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            bubble: { size: 6, distance: 100 },
                            push: { quantity: 4 },
                        },
                    },
                }}
                className="absolute top-0 left-0 w-full h-full"
            />

            {/* Comedic Heading - No Exit Animation */}
            <motion.h1
                className="text-6xl font-extrabold tracking-tight leading-tight text-[#1b4332] z-30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Let's Take a Breath 🌿
            </motion.h1>

            {/* Lighthearted Subtext - No Exit Animation */}
            <motion.p
                className="text-2xl opacity-80 mt-4 text-[#2d6a4f] z-30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Let’s reflect.
            </motion.p>

            {/* Logos at Bottom-Right */}
            <div className="absolute bottom-6 right-8 flex items-center space-x-4 z-10">
                <img src="/logo/Payments Association Logo.svg" alt="Logo 1" className="w-24 h-24 opacity-100" />
                <span className="text-6xl font-bold opacity-60">×</span>
                <img src="/logo/PAY360 2025 Logo.svg" alt="Logo 2" className="w-24 h-24 opacity-100" />
            </div>
        </div>
    );
}