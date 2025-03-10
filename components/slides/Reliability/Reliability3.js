"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Generational from "@/components/charts/Reliability/Generational";

export default function Usage3() {
    return (
        <MasterSlide title="The Hidden Costs of Payment Choice" subheading="Pillar Two: Reliability" darkMode={false}>
            <Generational />

        </MasterSlide>
    );
}
