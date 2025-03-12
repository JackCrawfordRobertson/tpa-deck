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

// **Fixed Data Structure**
const data = [
  { name: "Desktop", Chargeback: 5.56, Completed: 47.22, Failed: 16.67, Pending: 30.56, Refunded: 0 },
  { name: "Mobile", Chargeback: 2.38, Completed: 84.52, Failed: 2.38, Pending: 3.57, Refunded: 7.14 },
  { name: "Smartwatch", Chargeback: 32.14, Completed: 21.43, Failed: 39.29, Pending: 7.14, Refunded: 0 },
  { name: "Tablet", Chargeback: 22.22, Completed: 11.11, Failed: 0, Pending: 55.56, Refunded: 11.11 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-5 border border-gray-500 rounded-lg shadow-md bg-white text-base">
        <div className="font-semibold text-gray-900 mb-3 text-lg">Transaction Type</div>
        <div className="space-y-3">
          {payload.map((item) => (
            <div key={item.name} className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-gray-800 text-lg">{item.name}</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">{item.value.toFixed(2)}%</span>
            </div>
          ))}
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
        <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown by Device</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          A bar chart showing transaction types across different devices.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[700px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(tick) => `${tick}%`} // Format Y-axis labels as percentages
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
              <Bar dataKey="Pending" fill="hsl(var(--chart-4))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}