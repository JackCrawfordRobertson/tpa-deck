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

const data = [
  { name: "Smartwatch", Chargeback: 32.14, Completed: 21.43, Failed: 39.29, Pending: 7.14 }
];

export default function ChartComponent() {
  return (
    <Card className="bg-white border border-border shadow-md">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown Smartwatch</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          A bar chart showing transaction types across smartwatch devices.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[700px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
              <Tooltip />
              <Legend />
              <Bar dataKey="Chargeback" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Completed" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Failed" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Pending" fill="hsl(var(--chart-4))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}