"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import KMedoids1LegendChart from "@/components/charts/KMedoids/KMedoids1Legend";

export default function KMedoids1Legend() {
    return (
        <MasterSlide title="Making Sense of Payment Behaviour" subheading="Pillar Three: Patterns" darkMode={false}>
            <KMedoids1LegendChart />

        </MasterSlide>
    );
}
