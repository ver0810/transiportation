"use client";

import { LineComponent } from "./compoents/LineCompoent";
import traffictImg1 from "../assets/traffic1.png";
import traffictImg2 from "../assets/traffic2.png";
import BaiduMap from "../components/Maps";
import BorderBox11 from "@jiaminghi/data-view-react/es/borderBox11";
import BorderBox12 from "@jiaminghi/data-view-react/es/borderBox12";
import BorderBox13 from "@jiaminghi/data-view-react/es/borderBox13";
import { Header } from "../components/Header";

import DoubleLineAndPie from "@/app/TrafficManagementView/compoents/DoubleLineAndPie";

export default function TrafficManagementView() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-[calc(100vh - 300px)] m-4 gap-4">
        {/* 第一栏 */}
        <div className="h-full w-[30%] flex flex-col">
          <div className="flex w-full">
            <BorderBox11 title="车流量" titleWidth={200}>
              <LineComponent />
            </BorderBox11>
          </div>
          <div>
            <BorderBox13>
              <DoubleLineAndPie />
            </BorderBox13>
          </div>
        </div>

        {/* 第二栏 */}
        <div className="flex w-[50%] h-[80vh]">
          <BorderBox12>
            {/* lng: 经, lat:纬 */}
            <BaiduMap center={{ lng: 120.1551, lat: 30.2741 }} zoom={15} />
          </BorderBox12>
        </div>

        {/* 第三栏 */}
        <div className="w-[30%] h-full flex flex-col items-center">
          <h1 className="text-[20px] font-bold">流量案例</h1>
          <div className="w-[80%] h-[300px]">
            <BorderBox12>
              <img
                className="w-full h-full object-cover p-2"
                src={traffictImg1.src}
              />
            </BorderBox12>
          </div>
          <div className="w-[80%] h-[300px]">
            <BorderBox12>
              <img
                className="w-full h-full rounded-lg object-cover p-2"
                src={traffictImg2.src}
              />
            </BorderBox12>
          </div>
        </div>
      </div>
    </>
  );
}
