"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { chartConfig } from "./vars";

// 水平条形统计图
export default function HomeVerticalBar({ data }: any) {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart layout="vertical" data={data} barGap={0}>
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="1%" stopColor="#c13776" stopOpacity={0.8} />
            <stop offset="99%" stopColor="#635178" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis type="number" hide={true} />
        <YAxis type="category" dataKey="x" width={100} />
        <Bar
          dataKey="y"
          fill="url(#colorUv)"
          barSize={20}
          radius={[0, 8, 8, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
