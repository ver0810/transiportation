import { chartConfig } from "@/app/components/Charts/vars";
import { ChartContainer } from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const carFlowData = [
  { x: "杭州西站", y: 6600 },
  { x: "龙翔桥", y: 9500 },
  { x: "奥体中心", y: 5700 },
  { x: "海创园", y: 6900 },
  { x: "定安路", y: 6200 },
  { x: "杭州东站", y: 9800 },
];

export default function BarDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-[80%] w-full">
      <BarChart layout="vertical" data={carFlowData} barGap={0}>
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
