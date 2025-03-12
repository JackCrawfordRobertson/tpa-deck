"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

// Define colors for each transaction type
const COLORS = {
  Chargeback: "hsl(var(--chart-1))",
  Completed: "hsl(var(--chart-2))",
  Failed: "hsl(var(--chart-3))",
  Pending: "hsl(var(--chart-4))",
  Refunded: "hsl(var(--chart-5))"
};

// Raw data
const rawData = [
  { category: "Chargeback", value: 2 },
  { category: "Completed", value: 2 },
  { category: "Failed", value: 5 },
  { category: "Pending", value: 8 },
  { category: "Refunded", value: 1 }
];

// Function to normalize data to percentages
const calculatePercentages = (data) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return total > 0
    ? data.map((entry) => ({
        category: entry.category,
        value: (entry.value / total) * 100
      }))
    : data;
};

// Convert data to percentages
const data = calculatePercentages(rawData);

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
        <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown Across Bank Transfers</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          A bar chart showing transaction types across bank transfers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[700px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 15 }}>
              {/* X-Axis with Label */}
              <XAxis
                dataKey="category"
                label={{
                  value: "Transaction Type",
                  position: "insideBottom",
                  offset: -10,
                  style: { textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))" }
                }}
              />

              {/* Y-Axis with Label */}
              <YAxis
                tickFormatter={(tick) => `${tick.toFixed(1)}%`}
                label={{
                  value: "Percentage (%)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))" }
                }}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

              {/* Single Bar Component with Dynamic Colors */}
              <Bar
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-out"
                shape={(props) => {
                  const { x, y, width, height, payload } = props;
                  const color = COLORS[payload.category] || "gray"; // Assign color dynamically
                  return <rect x={x} y={y} width={width} height={height} fill={color} rx="4" />;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}