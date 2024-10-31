import Card from "../components/Card";
import OfflineImage from "../assets/Offline1.jpg"; // 导入图片路径
import trafficFlow from "../assets/traffic1.png"; // 导入图片路径
import trafficCapacity from "../assets/traffic1.png"; // 导入图片路径
import { Header } from "../components/Header";
import BaiduMap from "../components/Maps";

const trafficInformation = [
  "文一路: 畅通 (22:00)",
  "上塘高架: 畅通 (22:00)",
  "庆春路: 畅通 (22:00)",
  "中河高架: 畅通 (22:00)",
  "之江路: 畅通 (22:00)",
];

const trafficMonitorStates = [
  "杭州公交 1314 路: 运行中 (更新于 22:11)",
  "杭州地铁 4 号线: 空闲 (更新于 22:11)",
  "出租车 12 号车队: 服务中[空闲：9辆] (更新于 22:11)",
  "摆渡车 A1: 运行中 (更新于 22:11)",
  "秋涛路共享单车: 可用余量14 (更新于 22:11)",
];

export default function Maasview() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-full p-8">
        <div className="grid grid-cols-3 gap-4">
          {/* 左侧栏 */}
          <div className="flex flex-col gap-4">
            <Card title="运力供需匹配地图" className="h-1/2">
              <div className="w-full h-[300px] border border-[#0fa5ec] rounded-md p-1">
                <BaiduMap center={{ lng: 120.1551, lat: 30.2741 }} zoom={15} />
              </div>
            </Card>
            <Card title="实时路况信息" className="h-1/2">
              <ul className="list-none block p-2">
                {trafficInformation.map((trafficeInfo) => (
                  <li className="m-2 border-none rounded-md text-[15px] bold p-4 bg-[#184e6d] bg-opacity-80 text-white">
                    {trafficeInfo}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* 中间栏 */}
          <div className="flex flex-col gap-4">
            <Card title="交通运力监控" className="h-1/2">
              <ul className="list-none block p-2">
                {trafficMonitorStates.map((monitorInfo) => (
                  <li className="m-2 border-none rounded-md text-[15px] bold p-4 bg-[#184e6d] bg-opacity-80 text-white">
                    {monitorInfo}
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="五条路段流量变化" className="h-1/2">
              <div className="border border-[#0fa5ec] rounded-lg p-1">
                <img src={trafficFlow.src} />
              </div>
            </Card>
          </div>

          {/* 右侧栏 */}
          <div className="flex flex-col gap-4">
            <Card title="运力供需分析" className="h-1/2">
              <div className="border border-[#0fa5ec] rounded-lg p-1">
                <img src={trafficFlow.src} />
              </div>
            </Card>

            <Card title="交通工具调度状态" className="h-1/2">
              <div className="border border-[#0fa5ec] rounded-lg p-1">
                <img src={trafficFlow.src} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
