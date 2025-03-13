"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import LegoClustering from "@/components/charts/KMedoids/LegoClustering";

export default function Explain() {
    return (
        <MasterSlide title="K-Medoids: Making Sense of Payment Behaviour" subheading="Pillar Three: Patterns" darkMode={false}>
            <LegoClustering />

        </MasterSlide>
    );
}
