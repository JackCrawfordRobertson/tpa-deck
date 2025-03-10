"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Mobile from "@/components/charts/Usage/Mobile";

export default function Usage1() {
    return (
        <MasterSlide title="The Great Device Divide" subheading="Pillar One: Usage" darkMode={false}>
            <Mobile />

        </MasterSlide>
    );
}
