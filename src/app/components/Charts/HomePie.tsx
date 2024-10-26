"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { chartConfig } from "./vars";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#73EC8B"];

// 绘制饼图
export default function HomePie({
  data,
  labelOpen = true,
  innerRadius = "0%",
  legendLayout = "vertical",
  legendAlign = "left",
  legendVerticalAlign = "verticalAlign",
}: any) {
  return (
    <ChartContainer config={chartConfig} className="max-h-[80%] w-full">
      <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <Pie
          data={data}
          isAnimationActive={false}
          cx={"50%"}
          cy={"50%"}
          innerRadius={innerRadius}
          outerRadius="80%"
          label={labelOpen ? (entry: any) => `${entry.name} ` : undefined}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout={legendLayout}
          align={legendAlign}
          verticalAlign={legendVerticalAlign}
          fontStyle={"#fff"}
        />
      </PieChart>
    </ChartContainer>
  );
}
