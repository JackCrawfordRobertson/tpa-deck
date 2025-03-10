"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function TitleSlide({ title, subheading, logo1, logo2 }) {
    // tsParticles Init
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative w-screen h-screen flex flex-col justify-center items-start bg-black text-white p-12 overflow-hidden">
            {/* tsParticles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "black" },
                    particles: {
                        number: { value: 80 },
                        color: { value: "#ffffff" },
                        links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
                        move: { enable: true, speed: 2 },
                        size: { value: 2 },
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

            {/* Title & Subheading */}
            <motion.div
                className="absolute top-12 left-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="text-7xl font-extrabold tracking-tight leading-tight">{title}</h1>
                <p className="text-3xl opacity-80 mt-4">{subheading}</p>
            </motion.div>

            {/* Logos at Bottom-Right */}
            <div className="absolute bottom-6 right-8 flex items-center space-x-4">
                <img
                    src={logo1 || "/logo/Payments_Association_Logo_white.svg"}
                    alt="Logo 1"
                    className="w-24 h-24 opacity-100"
                />
                <span className="text-6xl font-bold opacity-60">×</span>
                <img
                    src={logo2 || "/logo/PAY360_2025_Logo_white.svg"}
                    alt="Logo 2"
                    className="w-24 h-24 opacity-100"
                />
            </div>
        </div>
    );
}