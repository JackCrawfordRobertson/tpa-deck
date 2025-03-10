"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Tablet from "@/components/charts/Usage/Tablet";

export default function Usage3() {
    return (
        <MasterSlide title="The Great Device Divide" subheading="Pillar One: Usage" darkMode={false}>
            <Tablet />

        </MasterSlide>
    );
}
