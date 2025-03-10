"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Smartwatch from "@/components/charts/Usage/Smartwatch";

export default function Usage2() {
    return (
        <MasterSlide title="The Great Device Divide" subheading="Pillar One: Usage" darkMode={false}>
            <Smartwatch />

        </MasterSlide>
    );
}
