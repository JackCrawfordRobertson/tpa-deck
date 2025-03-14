"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

// ✅ Convert nested data into a flat structure
const rawData = {
  "18-25": { Chargeback: 4.88, Completed: 56.10, Failed: 9.76, Pending: 17.07, Refunded: 12.20 },
  "26-35": { Chargeback: 0, Completed: 97.14, Failed: 0, Pending: 0, Refunded: 2.86 },
  "36-45": { Chargeback: 2.94, Completed: 85.29, Failed: 5.88, Pending: 5.88, Refunded: 0 },
  "46-60": { Chargeback: 34.48, Completed: 24.14, Failed: 27.59, Pending: 13.79, Refunded: 0 },
  "60+": { Chargeback: 11.11, Completed: 11.11, Failed: 27.78, Pending: 44.44, Refunded: 5.56 }
};

// Convert to an array with missing values set to 0
const data = Object.keys(rawData).map((key) => ({
  name: key,
  Chargeback: rawData[key].Chargeback ?? 0,
  Completed: rawData[key].Completed ?? 0,
  Failed: rawData[key].Failed ?? 0,
  Pending: rawData[key].Pending ?? 0,
  Refunded: rawData[key].Refunded ?? 0
}));

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
      const { category, value } = payload[0].payload;
      return (
          <div className="p-5 border border-gray-500 rounded-lg shadow-md bg-white text-base">
              <div className="font-semibold text-gray-900 mb-3 text-xl">{category}</div>
              <div className="flex justify-between items-center gap-5">
                  <span className="text-gray-800 text-lg">Value:</span>
                  <span className="font-semibold text-gray-900 text-xl">{value.toFixed(2)}%</span>
              </div>
          </div>
      );
  }
  return null;
};

export default function ChartComponent() {
  return (
    <Card className="bg-white border border-border shadow-md">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown Across Generations</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          A bar chart showing transaction types across different generations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[700px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(tick) => `${tick}%`}
                label={{
                  value: "Percentage (%)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))" }
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
              <Legend />
              <Bar dataKey="Chargeback" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Completed" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Failed" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Pending" fill="hsl(var(--chart-4))" />
              <Bar dataKey="Refunded" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}