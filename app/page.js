"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TitleSlide from "@/components/slides/TitleSlide";
import SectionTitle from "@/components/SectionTitle";
import Contents from "@/components/Contents";

import Usage1 from "@/components/slides/Usage/Usage1";
import Usage2 from "@/components/slides/Usage/Usage2";
import Usage3 from "@/components/slides/Usage/Usage3";
import Usage4C from "@/components/slides/Usage/Usage4C";

import Reliability1 from "@/components/slides/Reliability/Reliability1";
import Reliability2 from "@/components/slides/Reliability/Reliability2";


import BreakSlide from "@/components/BreakSlide";
import Explain from "@/components/slides/KMedoids/Explain"

import KMedoids1Legend from "@/components/slides/KMedoids/KMedoids1Legend";
import KMedoids1 from "@/components/slides/KMedoids/KMedoids1"

import ConclusionSlide from "@/components/ConclusionSlide"

const slides = [
    { id: 0, title: "Intro", component: <TitleSlide title="LEGO AND THE MEDOIDS"   subheading="Assembling Payment Insights, One Data Brick at a Time 🧱" /> },
          { id: 2, title: "Contents", component: <Contents /> },
    { id: 1, title: "Pillar One: Usage", component: <SectionTitle title="Pillar One: Usage" subtitle="The Great Device Divide" /> },
    
    { id: 3, title: "Usage 1", component: <Usage1 /> },
    { id: 4, title: "Usage 2", component: <Usage2 /> },
    { id: 5, title: "Usage 3", component: <Usage3 /> },
    { id: 6, title: "Usage 4C", component: <Usage4C /> },

    { id: 7, title: "Pillar Two: Reliability", component: <SectionTitle title="Pillar Two: Reliability" subtitle="The Hidden Costs of Payment Choice" /> },
    { id: 8, title: "Reliability 1", component: <Reliability1 /> },
    { id: 9, title: "Reliability 2", component: <Reliability2 /> },

    { id: 10, title: "Breath", component: <BreakSlide /> },
    { id: 11, title: "Explain", component: <Explain /> },

    { id: 12, title: "Pillar Three: Patterns", component: <SectionTitle title="Pillar Three: Patterns" subtitle="Making Sense of Payment Behaviour" /> },
    { id: 13, title: "KMedoids1Legend", component: <KMedoids1Legend /> },
    { id: 14, title: "KMedoids1", component: <KMedoids1 /> },
    { id: 15, title: "ConclusionSlide", component:   <ConclusionSlide
        title="Payments Intelligence"
        subheading="Turning insights into action"
        qrCode="/QR_Code.svg"
      
    /> },


    


];

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else if (e.key === "ArrowLeft" && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden relative">
            {/* Slide Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                    className="absolute w-full h-full flex justify-center items-center"
                >
                    {slides[currentSlide].component}
                </motion.div>
            </AnimatePresence>

        
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex justify-center bg-white shadow-lg rounded-lg p-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`px-3 py-1 text-sm font-medium rounded-md mx-1 transition-all ${
                            index === currentSlide
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        {slide.title}
                    </button>
                ))}
            </div> */}
        </div>
    );
}