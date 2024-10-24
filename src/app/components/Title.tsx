"use client";

import { ButtonComponent } from "./ButtonComponet";
import { useEffect, useState } from "react";

import headerImg1 from "/src/app/assets/home-header-img.svg";
import headerImg2 from "/src/app/assets/home-header-img2.svg";
import headerImg3 from "/src/app/assets/home-header-img3.svg";
import headerImg4 from "/src/app/assets/heatmap-header-img.svg";
import headerImg5 from "/src/app/assets/simulation-header-img.svg";


type Page = {
  path: string;
  name: string;
  label: string;
  img: string;
};

const pages = [
  {
    // 智能排班
    path: "/",
    name: "home",
    label: "智能排班",
    img: headerImg1.src,
  },
  {
    // 线网优化
    path: "/OptimizationView",
    name: "OptimizationView",
    label: "线网优化",
    img: headerImg4.src,
  },
  {
    // 城市交通管理
    path: "/TrafficManagementView",
    name: "TrafficManagementView",
    label: "城市交通管理",
    img: headerImg5.src,
  },
  {
    // 实时运力检测
    path: "/Maasview",
    name: "Maasview",
    label: "实时运力检测",
    img: headerImg2.src,
  },
  {
    // 线下商业化
    path: "/OfflineCommerce",
    name: "OfflineCommerce",
    label: "线下商业化",
    img: headerImg3.src,
  },
];

export function Title() {
  const [currentPath, setCurrentPath] = useState("/");
  const [renderPages, setRenderPages] = useState<Page[]>(pages);
  const [currentPage, setCurrentPage] = useState<Page | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    console.log(currentPath);
    const newPages = renderPages.filter((page) => page.path !== path);
    
    setCurrentPage(pages.find((page: Page) => page.path === path) || null);
    
    console.log(currentPage);
    console.log(currentPage?.img);
    setRenderPages(newPages);
  }, [currentPath]);

  return (
    <div className="flex items-center justify-center w-full h-[15vh] bg-center">
      {renderPages.slice(0, 2).map(
        (page: any) =>
          currentPath !== page.path && (
            <ButtonComponent
              key={page.name}
              href={page.path}
              text={page.label}
              className="bg-gradient-to-tl skew-x-[45deg] rounded-bl-[20px]"
              styleSpan="skew-x-[-45deg]"
            />
          )
      )}

      <div className="h-full flex items-center justify-center">
        <div
          className={`h-full flex items-center justify-center bg-contain bg-top bg-no-repeat`} style={{backgroundImage: `url(${currentPage?.img})`}}>
          <span className="whitespace-nowrap text-[30px] mb-[10%] font-bold opacity-0">
            占位占位占位占位占
          </span>
        </div>
      </div>

      {renderPages.slice(2).map(
        (page: any) =>
          currentPath !== page.path && (
            <ButtonComponent
              key={page.name}
              href={page.path}
              text={page.label}
              className="bg-gradient-to-tl skew-x-[-45deg] rounded-br-[20px]"
              styleSpan="skew-x-[45deg]"
            />
          )
      )}
    </div>
  );
}
