import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Label,
  Line,
  Legend,
  Tooltip
} from "recharts";

// 双曲线图
export function DoubleLineComponent({ data }: any) {
  return (
      <ResponsiveContainer minHeight={160}>
        <LineChart
          data={data}
          margin={{
            right: 30,
            left: 0,
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
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="output"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Legend verticalAlign="top" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
  );
}
