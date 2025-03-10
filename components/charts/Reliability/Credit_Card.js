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

// ✅ Convert raw values to percentages
const rawData = [
  { name: "Credit Card", Chargeback: 0, Completed: 34, Failed: 0, Pending: 0, Refunded: 1 }
];

// Function to normalize data to percentages
const calculatePercentages = (data) => {
  return data.map((entry) => {
    const total = Object.values(entry).reduce((sum, value) => (typeof value === "number" ? sum + value : sum), 0);
    
    return {
      name: entry.name,
      Chargeback: total > 0 ? (entry.Chargeback / total) * 100 : 0,
      Completed: total > 0 ? (entry.Completed / total) * 100 : 0,
      Failed: total > 0 ? (entry.Failed / total) * 100 : 0,
      Pending: total > 0 ? (entry.Pending / total) * 100 : 0,
      Refunded: total > 0 ? (entry.Refunded / total) * 100 : 0
    };
  });
};

const data = calculatePercentages(rawData);

export default function ChartComponent() {
  return (
    <Card className="bg-white border border-border shadow-md">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown Credit Card</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          A bar chart showing transaction rates across credit card payments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[700px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(tick) => `${tick.toFixed(1)}%`} // Ensure Y-axis labels show as percentages
                label={{
                  value: "Percentage (%)",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))" }
                }}
              />
              <Tooltip
                formatter={(value) => `${value.toFixed(1)}%`} // Ensure tooltip shows percentages
              />
              <Legend />
              <Bar dataKey="Completed" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Failed" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Refunded" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}