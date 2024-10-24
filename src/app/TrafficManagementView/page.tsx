import Card from "../components/Card";
import {
  DoubleLineComponent,
  LineComponent,
  PieComponent,
} from "../components/MyBarcharts";
import traffictImg1 from "../assets/traffic1.png";
import traffictImg2 from "../assets/traffic2.png";
import { Header } from "../components/Header";

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

const carStatusData = [
  { value: 1048, name: "小型汽车" },
  { value: 735, name: "中型汽车" },
  { value: 580, name: "大型汽车" },
  { value: 484, name: "学生校车" },
];
// [3, 2, 1.5, 2.5, 4, 5, 4, 3.5, 4, 5, 4, 3.5]
// [3.5, 1, 2, 2.5, 3, 1, 3, 1, 4, 4.5, 2, 4]
const inputOutputData = [
  { name: "0", intput: 3, output: 3.5 },
  { name: "2", intput: 2, output: 1 },
  { name: "4", intput: 1.5, output: 2 },
  { name: "6", intput: 2.5, output: 2.5 },
  { name: "8", intput: 4, output: 3 },
  { name: "10", intput: 5, output: 1 },
  { name: "12", intput: 4, output: 3 },
  { name: "14", intput: 3.5, output: 1 },
  { name: "16", intput: 4, output: 3 },
  { name: "18", intput: 3.5, output: 1 },
  { name: "20", intput: 4, output: 4 },
  { name: "22", intput: 4, output: 2 },
  { name: "时间/h" },
];

export default function TrafficManagementView() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="grid grid-cols-6 gap-4">
          {/* 左侧栏 */}
          <div className="flex flex-col col-span-2 gap-4">
            <Card
              title="车流量变化趋势"
              className="w-full h-[300px]">
              <LineComponent data={carFlowData} />
            </Card>

            <div className="border border-emerald-300 flex flex-col h-full">
              <div>
                <div className="flex items-center justify-center">
                  <h2 className="font-bold text-[20px]">车辆状态统计</h2>
                </div>
                <div className="h-[160px]">
                  <PieComponent
                    data={carStatusData}
                    innerRadius="50%"
                    legendLayout="vertical"
                    legendAlign="right"
                    legendVerticalAlign="top"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2 flex items-center justify-center">
                  <h2 className="font-bold text-[20px]">车辆流入/出曲图</h2>
                </div>
                <div className="w-full">
                  <DoubleLineComponent data={inputOutputData} />
                </div>
              </div>
            </div>
          </div>

          {/* 中间栏 */}
          <div className="col-span-3 w-full h-full border border-red-600 rounded-md">
            <p>hello</p>
          </div>

          {/* 右侧栏 */}
          <div>
            <h2 className="text=[20px]">流量案例</h2>
            <div>
              <img src={traffictImg1.src} />
              <img src={traffictImg2.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
