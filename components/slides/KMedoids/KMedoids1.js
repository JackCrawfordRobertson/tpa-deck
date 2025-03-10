"use client";

import MasterSlide from "@/components/slides/MasterSlide";
import KMedoids1C from "@/components/charts/KMedoids/KMedoids1C";

const clusterInfo = {
  0: {
    title: "High-Value, Middle-Aged Customers",
    description: "Middle-aged users making large, reliable transactions.",
    section: "Usage & Reliability",
    color: "hsl(var(--chart-2))",
  },
  1: {
    title: "Young Adults with Mid-Range Transactions",
    description: "18–25-year-olds spending £100-£500, showing emerging habits.",
    section: "Patterns",
    color: "hsl(var(--chart-3))",
  },
  2: {
    title: "Seniors Facing Transaction Delays",
    description: "Older users struggle with slow payments and pending issues.",
    section: "Reliability",
    color: "hsl(var(--chart-5))",
  },
  3: {
    title: "Diverse Group with Varied Spending",
    description: "A mixed group with unpredictable transaction patterns.",
    section: "Patterns",
    color: "hsl(var(--chart-4))",
  },
  4: {
    title: "Smartwatch Users with High Failure Rates",
    description: "Wearable payments fail often due to UX limitations.",
    section: "Usage",
    color: "hsl(var(--chart-1))",
  },
};

export default function KMedoids1() {
  return (
    <MasterSlide title="Making Sense of Payment Behaviour" subheading="Pillar Three: Patterns" darkMode={false}>
      <div className="flex">
        <KMedoids1C />
        <div className="w-1/3 pl-4 space-y-4">
          {Object.entries(clusterInfo).map(([cluster, info]) => (
            <div key={cluster} className="p-4 rounded-lg shadow-md border bg-white border-gray-300">
              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full inline-block mr-2"
                  style={{ backgroundColor: info.color }}
                ></span>
                <h4 className="text-lg font-semibold text-gray-700">{info.title}</h4>
              </div>
              <p className="text-sm text-gray-700 mt-1">{info.description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Related to:</strong> {info.section}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MasterSlide>
  );
}