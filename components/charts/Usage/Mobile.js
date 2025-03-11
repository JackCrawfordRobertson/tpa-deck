"use client";

import React from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {ChartContainer} from "@/components/ui/chart";

// Define colors for each category
const COLORS = {
    Chargeback: "hsl(var(--chart-1))",
    Completed: "hsl(var(--chart-2))",
    Failed: "hsl(var(--chart-3))",
    Pending: "hsl(var(--chart-4))",
    Refunded: "hsl(var(--chart-5))",
};

const data = [
    {category: "Chargeback", value: 2.38},
    {category: "Completed", value: 84.52},
    {category: "Failed", value: 2.38},
    {category: "Pending", value: 3.57},
    {category: "Refunded", value: 7.14},
];

// Custom Tooltip
const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        const {category, value} = payload[0].payload;
        return (
            <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white text-sm">
                <div className="font-semibold text-gray-800 mb-2">{category}</div>
                <div className="flex justify-between items-center gap-4">
                    <span className="text-gray-700">Value:</span>
                    <span className="font-semibold text-gray-900 text-base">{value.toFixed(2)}%</span>
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
                <CardTitle className="text-lg font-semibold text-primary">Transaction Breakdown Mobile</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                    A bar chart showing transaction types across mobile devices.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className="w-full h-[700px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{top: 20, right: 30, left: 20, bottom: 15}}>
                            <XAxis
                                dataKey="category"
                                label={{
                                    value: "Transaction Type",
                                    position: "insideBottom",
                                    offset: -10,
                                    style: {textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))"},
                                }}
                            />
                            <YAxis
                                tickFormatter={(tick) => `${tick}%`}
                                label={{
                                    value: "Percentage (%)",
                                    angle: -90,
                                    position: "insideLeft",
                                    style: {textAnchor: "middle", fontSize: "14px", fill: "hsl(var(--foreground))"},
                                }}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: "transparent"}} />

                            {/* Single Bar Component with Custom Colors */}
                            <Bar
                                dataKey="value"
                                animationBegin={0}
                                animationDuration={1000}
                                animationEasing="ease-out"
                                shape={(props) => {
                                    const {x, y, width, height, payload} = props;
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
