"use client";
import { ButtonDemo } from "../components/ButtonDemo";
import Card from "../components/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VerticalBar } from "../components/MyBarcharts";
import { useState } from "react";

import programImg from "../assets/111.png";
import BaiduMap from "../components/Maps";
import { Header } from "../components/Header";

const flowData = [
  { x: "武林广场", y: 1200 },
  { x: "龙翔桥", y: 2000 },
  { x: "杭州东站", y: 1500 },
  { x: "文三路口", y: 800 },
];

const recomendText1 = [
  "方案 1：",
  "    基于OD数据分析得出， 到  之间的客流量较高，特别是在早晚高峰时段，建议通过以下方式进行优化：",
  "     	1. 增加公交线路，缓解高峰期间地铁运力压力。",
  "       2. 增加共享单车投放点，鼓励短途出行方式。",
  "       3. 调整运力配置，确保公共交通资源的高效利用。",
];
const recomendText2 = [
  "方案 1：",
  "    基于OD数据分析得出， 到  之间的客流量较高，特别是在早晚高峰时段，建议通过以下方式进行优化：",
  "     	1. 增加公交线路，缓解峰期间地铁运力压力。",
  "       2. 增加共享单车投放点，鼓励短途出行方式。",
  "       3. 调整运力配置，确保公共交通资源的高效利用。",
];

export default function OptimizationView() {
  const [recomendCount, setRecomendCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="grid grid-cols-4 gap-4 h-full">
          {" "}
          {/* 确保父容器的高度为全高 */}
          {/* 左侧栏 */}
          <div className="flex flex-col w-full h-full gap-4">
            {" "}
            {/* 保持 h-full */}
            <div className="flex justify-center items-center gap-4">
              <Card title="" className="w-full h-full">
                <div className="flex items-center justify-center gap-4 ">
                  <label>起始路段: </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="武林广场" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="opiton1">武林广场</SelectItem>
                      <SelectItem value="opiton2">西湖文化广场</SelectItem>
                      <SelectItem value="opiton3">火车东站</SelectItem>
                      <SelectItem value="opiton4">滨江高新</SelectItem>
                      <SelectItem value="opiton5">文三路口</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-center gap-4 ">
                  <label>终点路段: </label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="武林广场" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="opiton1">武林广场</SelectItem>
                      <SelectItem value="opiton2">西湖文化广场</SelectItem>
                      <SelectItem value="opiton3">火车东站</SelectItem>
                      <SelectItem value="opiton4">滨江高新</SelectItem>
                      <SelectItem value="opiton5">文三路口</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
              <div>
                <ButtonDemo className="bg-white text-black">重置</ButtonDemo>
                <ButtonDemo className="mt-2">优化</ButtonDemo>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1>门到门全量OD数据</h1>
              <div>
                <VerticalBar data={flowData} />
              </div>
            </div>
            <Card title="交通分析" className="flex flex-col h-[140px]">
              <div className="flex-col flex w-full h-full max-h-[100%] overflow-y-auto">
                {recomendCount !== 0 ? (
                  <>
                    <p>{recomendText2}</p>
                    <p>更多内容...</p>
                    <p>更多内容...</p>
                    <p>更多内容...</p>
                    <p>更多内容...</p>
                    <p>更多内容...</p>
                  </>
                ) : (
                  <p>请选择起始路段和终点路段。</p>
                )}
              </div>
            </Card>
          </div>
          {/* 中间栏 */}
          <div className="col-span-2 h-full">
            <div className="w-full h-[80vh] border border-[#409eff] rounded-md">
              <BaiduMap center={{ lng: 120.1551, lat: 30.2741 }} zoom={15} />
            </div>
          </div>
          {/* 右侧栏 */}
          <div className="h-[80vh] w-full bg-[#31bfc4] rounded-lg bg-opacity-30 p-4 ">
            <div className="flex flex-col items-center justify-center gap-4 border rounded-md p-4">
              <h1 className="text-xl">优化方案推荐</h1>
              <p className="text-5xl font-bold">{recomendCount}</p>
              <button
                className="bg-gradient-to-b from-[#f01760] to-[#e44f7f] px-16 shadow-sm text-sm py-1 rounded-md"
                onClick={() => {
                  setRecomendCount(recomendCount + 1);
                }}
              >
                生成新方案
              </button>
            </div>

            <div className="w-full h-[150px]">
              <p>
                {recomendCount !== 0 ? recomendText1.map((text) => text) : ""}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="inline-block rounded-md border p-1 border-[#409eff]">
                <img src={programImg.src} className="h-[200px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
