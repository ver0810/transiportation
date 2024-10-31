import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  ReferenceLine,
} from "recharts";

// [4, 3, 2, 2.5, 4, 5, 4, 3.5, 4, 2, 4, 1]
const carFlowData = [
  { x: "0", y: 4 },
  { x: "2", y: 3 },
  { x: "4", y: 2 },
  { x: "6", y: 2.5 },
  { x: "8", y: 4 },
  { x: "10", y: 5 },
  { x: "12", y: 3.5 },
  { x: "14", y: 4 },
  { x: "16", y: 2 },
  { x: "18", y: 4 },
  { x: "20", y: 1 },
  { x: "22", y: 3 },
];

export function LineComponent({ data }: any) {
  return (
    <ResponsiveContainer minHeight={200}>
      <LineChart
        data={carFlowData}
        margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
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
