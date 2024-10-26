"use client";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { chartConfig } from "./vars";

// 垂直条形统计图
export default function HomeVerticalBar({ data }: any) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[30vh] w-full">
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="verBarColorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={1} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="x" style={{ font: "white" }} />
        <YAxis fontStyle={"white"} />
        <Bar
          dataKey="y"
          fill="url(#verBarColorUv)"
          barSize={20}
          radius={[4, 4, 0, 0]}
          fontStyle={"white"}
        />
      </BarChart>
    </ChartContainer>
  );
}
