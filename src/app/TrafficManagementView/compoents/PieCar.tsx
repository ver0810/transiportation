import { chartConfig } from "@/app/components/Charts/vars";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

type statusDataType = {
  name: string;
  value: number;
};

interface PieCarProps {
  data: statusDataType[];
}

// colors for the chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#73EC8B"];

export default function PieCar(PieCarProps: PieCarProps) {
  const { data } = PieCarProps;
  return (
    <ChartContainer config={chartConfig} className="w-full">
      <PieChart
        width={100}
        height={120}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <Pie
          data={data}
          isAnimationActive={false}
          cx={"50%"}
          cy={"50%"}
          innerRadius={"30%"}
          outerRadius="50%"
          label={(entry: any) => `${entry.name} `}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="top" align="right" fontStyle={"#fff"} />
      </PieChart>
    </ChartContainer>
  );
}
