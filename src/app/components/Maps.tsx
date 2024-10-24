"use client";

import React, { useEffect, useRef } from "react";

interface BaiduMapProps {
  center: { lng: number; lat: number }; // 中心点的经纬度
  zoom: number; // 地图缩放等级
}

const BaiduMap: React.FC<BaiduMapProps> = ({ center, zoom }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBaiduMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=R7HmZ6LRXneE6N1wRr8PJaqOo18zgyVH"`;
      script.onload = () => {
        initMap(); // 脚本加载完成后初始化地图
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      if (window.BMapGL && mapContainerRef.current) {
        const map = new window.BMapGL.Map(mapContainerRef.current); // 创建地图实例
        const point = new window.BMapGL.Point(center.lng, center.lat); // 创建中心点坐标
        map.centerAndZoom(point, zoom); // 初始化地图，设置中心点坐标和地图缩放级别
        map.enableScrollWheelZoom(); // 启用滚轮缩放
        // 设置默认样式
        map.setMapStyleV2({ styleId: "dark" });
      }
    };

    loadBaiduMapScript(); // 加载百度地图脚本

    return () => {
      // 组件卸载时清理百度地图实例
      const script = document.querySelector(
        'script[src*="api.map.baidu.com"]',
      ) as HTMLScriptElement;
      if (script && script.parentNode) {
        // document.body.removeChild(script);
        script.parentNode.removeChild(script);
      }
    };
  }, [center, zoom]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default BaiduMap;
