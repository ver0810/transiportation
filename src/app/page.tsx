import Card from "./components/Card";
import { Card2, Card3 } from "./components/Card2";
import BaiduMap from "./components/Maps";
import HomePie from "./components/Charts/HomePie";
import {
  AreaOptionzatedCharts,
  BeforeAfterBar,
} from "./components/MyBarcharts";

import HomeVerticalBar from "./components/Charts/HomeVerBar";
import HomeHoriBar from "./components/Charts/HomeHoriBar";

const chartData = [
  { x: "龙翔桥", y: 9.5 },
  { x: "凤起路", y: 8.7 },
  { x: "武林广场", y: 7.2 },
  { x: "定安路", y: 6.1 },
  { x: "西湖文化广场", y: 6 },
];

const scheduleData = [
  { x: "一号线", y: 1 },
  { x: "", y: 2 },
  { x: "五号线", y: 2 },
  { x: "", y: 3 },
  { x: "十九号线", y: 3 },
];

const optimizatednData = [
  { x: "一号线", before: 75, after: 90 },
  { x: "", before: 70, after: 80 },
  { x: "五号线", before: 65, after: 75 },
  { x: "", before: 80, after: 95 },
  { x: "十九号线", before: 68, after: 80 },
];

const beforePieData = [
  { name: "一号线", value: 1048 },
  { name: "三号线", value: 735 },
  { name: "五号线", value: 580 },
  { name: "十九号线", value: 484 },
  { name: "十六号线", value: 300 },
];
const afterPieData = [
  { name: "一号线", value: 1800 },
  { name: "三号线", value: 1000 },
  { name: "五号线", value: 690 },
  { name: "十九号线", value: 680 },
  { name: "十六号线", value: 500 },
];

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="grid grid-cols-4 gap-4">
          {/* 左侧栏 */}
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <Card2 title="地铁流量优化TOP5">
                <HomeHoriBar data={chartData} />
              </Card2>
            </div>
            <Card title="优化后地铁发车时间间隔展示">
              <HomeVerticalBar data={scheduleData} />
            </Card>
          </div>

          {/* 中间栏 */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="h-[200px] w-full flex ">
              <Card3>
                {/* lng: 经, lat:纬 */}
                <BaiduMap center={{ lng: 120.1551, lat: 30.2741 }} zoom={15} />
              </Card3>
            </div>
            <div className="w-full h-full flex items-center justify-between">
              <HomePie data={beforePieData} />
              <HomePie data={afterPieData} />
            </div>
          </div>

          {/* 右侧栏 */}
          <div className="h-full flex-col flex gap-4">
            <Card title="司机工时优化对比(效率)">
              <BeforeAfterBar data={optimizatednData} />
            </Card>
            <Card title="优化前后排班效率对比">
              <AreaOptionzatedCharts data={optimizatednData} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
