"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Bank_Transfers from "@/components/charts/Reliability/Bank_Transfers";

export default function Usage2() {
    return (
        <MasterSlide title="The Hidden Costs of Payment Choice" subheading="Pillar Two: Reliability" darkMode={false}>
            <Bank_Transfers />

        </MasterSlide>
    );
}
