import { chartConfig } from "@/app/components/Charts/vars";
import { ChartContainer } from "@/components/ui/chart";
import { Cell, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#73EC8B"];
const data = [
  {}
]

export default function Pie() {
  return (
    <ChartContainer config={chartConfig} className="max-h-[80%] w-full">
      <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <Pie
          data={data}
          isAnimationActive={false}
          cx={"50%"}
          cy={"50%"}
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
      </PieChart>
    </ChartContainer>
  );
}
