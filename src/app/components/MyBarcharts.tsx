"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Legend,
  Cell,
  Tooltip,
  LineChart,
  Line,
  ReferenceLine,
  Label,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#C63C51",
  },
} satisfies ChartConfig;

// 垂直条形统计图
export function VerticalBar({ data }: any) {
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

// 水平条形统计图
export function HorizontalBar({ data }: any) {
  return (
    <ChartContainer config={chartConfig} className="h-[80%] w-full">
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

// 优化前后条形统计图
export function BeforeAfterBar({ data }: any) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[30vh] w-full">
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="doubleBarColorUv" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="5%" stopColor="#C63C51" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="doubleBarColorPv" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="5%" stopColor="#2563eb" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="x" />
        <YAxis />
        <Bar
          dataKey="before"
          fill="url(#doubleBarColorUv)"
          barSize={20}
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="after"
          fill="url(#doubleBarColorPv)"
          barSize={20}
          radius={[4, 4, 0, 0]}
        />
        <Legend />
      </BarChart>
    </ChartContainer>
  );
}

// 优化前后面积图
export function AreaOptionzatedCharts({ data }: any) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[30vh] w-full">
      <AreaChart data={data} width={600} height={300}>
        <defs>
          <linearGradient id="colorAreaUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="ccolorAreaUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0} />
            <stop offset="95%" stopColor="#f01861" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={"x"} />
        <YAxis />
        <Area
          dataKey={"before"}
          type={"monotone"}
          stroke="#FF9D3D"
          fill="url(#colorAreaUv)"
        />
        <Area
          dataKey={"after"}
          type={"monotone"}
          stroke="#7CF5FF"
          fill="url(#colorAreaUv)"
        />
        <Legend />
      </AreaChart>
    </ChartContainer>
  );
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#73EC8B"];

// 绘制饼图
export function PieComponent({
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

// 曲线统计图

export function LineComponent({ data }: any) {
  return (
    <ResponsiveContainer minHeight={200}>
      <LineChart
        data={data}
        margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="x" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <ReferenceLine y="y" label="-" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
}

// 双曲线图
export function DoubleLineComponent({ data }: any) {
  return (
    <div className="w-full">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis>
            <Label
              value="车流量/百万"
              position="top"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Line
            type="monotone"
            dataKey="intput"
            stroke="var(--color-mobile)"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="output"
            stroke="var(--color-desktop)"
            activeDot={{ r: 8 }}
          />
          <Legend verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
