// components/charts/KMedoids/KMedoids1C.js
"use client";

import React, { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChartContainer } from "@/components/ui/chart";

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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="min-w-[12rem] p-3 rounded-lg border bg-background text-xs shadow-md border-border/50 text-foreground">
        <div className="mb-1 text-sm font-medium">Cluster Group {data.cluster}</div>
        <div className="grid gap-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction Amount:</span>
            <span className="font-mono font-semibold">£{data.x.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Customer Segment:</span>
            <span className="font-semibold">{data.y}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction Count:</span>
            <span className="font-mono font-semibold">{data.size}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function KMedoidsScatterPlot() {
  const [clusterData, setClusterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [zoomLevel, setZoomLevel] = useState("all");

  useEffect(() => {
    fetch("/recharts_data.json")
      .then((res) => res.json())
      .then((data) => {
        setClusterData(data);
        setFilteredData(data);
      });
  }, []);

  const filterData = (range) => {
    setZoomLevel(range);
    if (range === "all") {
      setFilteredData(clusterData);
    } else if (range === "low") {
      setFilteredData(clusterData.filter((d) => d.x < 100));
    } else if (range === "mid") {
      setFilteredData(clusterData.filter((d) => d.x >= 100 && d.x <= 500));
    } else if (range === "high") {
      setFilteredData(clusterData.filter((d) => d.x > 500));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Segmentation (K-Medoids)</CardTitle>
        <CardDescription>Clustered customer segments based on transaction behavior.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-2 mb-4">
            <Button variant={zoomLevel === "all" ? "default" : "outline"} onClick={() => filterData("all")}>
              All
            </Button>
            <Button variant={zoomLevel === "low" ? "default" : "outline"} onClick={() => filterData("low")}>
              Low (£-320 - £100)
            </Button>
            <Button variant={zoomLevel === "mid" ? "default" : "outline"} onClick={() => filterData("mid")}>
              Mid (£100 - £500)
            </Button>
            <Button variant={zoomLevel === "high" ? "default" : "outline"} onClick={() => filterData("high")}>
              High (£500+)
            </Button>
          </div>

          <ChartContainer className="w-full h-[650px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 30, left: 15, bottom: 5 }}>
                <XAxis
                  dataKey="x"
                  name="Transaction Amount"
                  type="number"
                  label={{
                    value: "Transaction Amount (GBP)",
                    position: "insideBottomRight",
                    offset: -20,
                  }}
                />

                <YAxis
                  dataKey="y"
                  type="category"
                  allowDuplicatedCategory={false}
                  domain={["18-25", "26-35", "36-45", "46-60", "60+"]}
                  reversed={false}
                  label={{
                    value: "Age Group",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                  }}
                />
                <ZAxis dataKey="size" range={[300, 300]} />
                <Tooltip content={<CustomTooltip />} />

                {Object.entries(clusterInfo).map(([cluster, info]) => (
                  <Scatter
                    key={cluster}
                    name={`Cluster ${cluster}`}
                    data={filteredData.filter((d) => d.cluster === Number(cluster))}
                    fill={info.color}
                    stroke="#fff"
                    strokeWidth={1.5}
                  />
                ))}
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}