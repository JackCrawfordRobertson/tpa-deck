"use client";

const clusterInfo = {
  0: {
    title: "High-Value, Middle-Aged Customers",
    description: "Middle-aged users making large, reliable transactions.",
    section: "Usage & Reliability",
    color: "hsl(var(--chart-2))",
  },
  1: {
    title: "Young Adults with Mid-Range Transactions",
    description: "18–25-year-olds spending £100–£500, showing emerging habits.",
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
    description: "Wearable payments fail potentially due to UX limitations.",
    section: "Usage",
    color: "hsl(var(--chart-1))",
  },
};

export default function KMedoids1LegendChart() {
  return (
    <div className="space-y-6">
      {Object.entries(clusterInfo).map(([cluster, info]) => (
        <div key={cluster} className="p-6 rounded-xl shadow-lg border bg-white border-gray-300">
          <div className="flex items-center">
            <span
              className="w-8 h-8 rounded-full inline-block mr-4"
              style={{ backgroundColor: info.color }}
            />
            <h4 className="text-2xl font-bold text-gray-900">
              Cluster {cluster}: {info.title}
            </h4>
          </div>
          <p className="text-lg text-gray-800 mt-2">{info.description}</p>
          <p className="text-base text-gray-600 mt-2">
            <strong>Related to:</strong> {info.section}
          </p>
        </div>
      ))}
    </div>
  );
}