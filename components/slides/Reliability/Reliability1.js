"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import Credit_Card from "@/components/charts/Reliability/Credit_Card";

export default function Usage1() {
    return (
        <MasterSlide title="The Hidden Costs of Payment Choice" subheading="Pillar Two: Reliability" darkMode={false}>
            <Credit_Card />

        </MasterSlide>
    );
}
