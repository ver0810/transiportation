import { ButtonDemo } from "../components/ButtonDemo";
import Card from "../components/Card";
import { PieComponent, HorizontalBar } from "../components/MyBarcharts";

import Offline1 from "../assets/Offline1.jpg";
import Offline2 from "../assets/Offline2.jpg";
import Offline3 from "../assets/Offline3.jpg";
import Offline4 from "../assets/Offline4.jpg";
import { Header } from "../components/Header";

const areaFlowData = [
  { x: "杭州西站", y: 6600 },
  { x: "龙翔桥", y: 9500 },
  { x: "奥体中心", y: 5700 },
  { x: "海创园", y: 6900 },
  { x: "定安路", y: 6200 },
  { x: "杭州东站", y: 9800 },
];

// 高流量时段
const trafficData = [
  { value: 4000, name: "杭州东站" },
  { value: 2000, name: "定安路" },
  { value: 3500, name: "海创园" },
  { value: 1000, name: "奥体中心" },
  { value: 8000, name: "龙翔桥" },
  { value: 2500, name: "杭州西站" },
];

export default function OfflineCommerce() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="grid grid-cols-4 gap-8">
          {/* 一 */}
          <Card
            title="不同区域客流量"
            className="flex flex-col h-full">
            <div className="row-span-2">
              <HorizontalBar data={areaFlowData} />
            </div>

            <div className="mt-[50%]">
              <h2 className="text-[20px] font-bold flex items-center justify-center">
                精准市场定位
              </h2>
              <p className="text-[15px] p-4">
                通过OD分析，了解不同区域的客流起始和目的地分布，为商家提供精准的市场定位，
                帮助他们选择合适的地点开设店铺，最大化客流量。
              </p>
              <div className="flex items-center justify-center">
                <ButtonDemo>查看详情</ButtonDemo>
              </div>
            </div>
          </Card>

          {/* 二 */}
          <Card title="">
            <div>
              <img src={Offline2.src} />
              <img src={Offline1.src} />
            </div>

            <div className="mt-8">
              <h2 className="text-[20px] font-bold flex items-center justify-center">
                联合营销与跨界合作
              </h2>
              <p className="text-[15px] p-4">
                通过OD分析，与其他行业的商家进行联合营销。例如，公共交通工具上的广告可以与附近的商家优惠活动相结合，鼓励用户在出行途中消费。
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ButtonDemo>查看详情</ButtonDemo>
            </div>
          </Card>

          {/* 三 */}
          <Card
            title="高流量时段不同区域人数分布"
            className="flex flex-col justify-between">
            <div className="p-2">
              <PieComponent data={trafficData} />
            </div>

            <div className="mt-8">
              <h2 className="text-[20px] font-bold flex items-center justify-center">
                优化营销策略
              </h2>
              <p className="text-[15px] p-4">
                根据OD数据，分析用户的出行行为和偏好，制定个性化的营销策略。例如，在高流量时段或特定区域，向潜在客户推送定制化的优惠活动和广告。
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ButtonDemo>查看详情</ButtonDemo>
            </div>
          </Card>

          {/* 四 */}
          <Card
            title=""
            className="flex justify-between">
            <div>
              <img src={Offline1.src} />
            </div>

            <div className="mt-8">
              <h2 className="text-[20px] font-bold flex items-center justify-center">
                智能化客户服务
              </h2>
              <p className="text-[15px] p-4">
                基于OD分析，商家可以开发智能客服系统，提供出行建议、商家推荐等，提升用户体验并促进消费。
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ButtonDemo>查看详情</ButtonDemo>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
