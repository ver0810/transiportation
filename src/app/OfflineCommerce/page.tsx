'use client';

import { ButtonDemo } from "../components/ButtonDemo";

import Offline1 from "../assets/Offline1.jpg";
import Offline2 from "../assets/Offline2.jpg";
import Offline3 from "../assets/Offline3.jpg";
import Offline4 from "../assets/Offline4.jpg";
import { Header } from "../components/Header";

import BorderBox1 from "@jiaminghi/data-view-react/es/borderBox1";
import Card1 from "./components/Card1";
import LineDemo from "./components/Bar";
import BarDemo from "./components/Bar";

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
      <Header />
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="grid grid-cols-4 gap-8">
          {/* 第一栏 */}
          <div className="w-full col-span-1 h-full">
            <BorderBox1>
              <Card1 />
            </BorderBox1>
          </div>

          {/* 第二栏 */}
          <div className="w-full col-span-1 h-full">
          </div>

          {/* 第三栏 */}
          <div className="w-full col-span-1 h-full"></div>

          {/* 第四栏 */}
          <div className="w-full col-span-1 h-full"></div>
        </div>
      </div>
    </>
  );
}
