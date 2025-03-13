"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import KMedoids1C from "@/components/charts/KMedoids/KMedoids1C";



export default function KMedoids1() {
  return (
    <MasterSlide title="K-Medoids: Making Sense of Payment Behaviour" subheading="Pillar Three: Patterns" darkMode={false}>
        <KMedoids1C />
    
    </MasterSlide>
  );
}