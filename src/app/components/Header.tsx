"use client";

import { Cloud, MapPin } from "lucide-react";
import { Title } from "./Title";
import Link from "next/link";

export function Header() {
  return (
    <div className="w-full flex items-center justify-between h-[15vh] gap-8">
      <div className="flex items-center">
        <MapPin className="h-[30px] mr-[4px]" />
        <span className="bold mr-[20px] whitespace-nowrap">杭州市</span>
        <Cloud className="h-[30px] mr-[4px]" />
        <span className="mr-[10px] whitespace-nowrap">多云</span>
        <span>6℃~17℃</span>
      </div>

      <div>
        <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
      </div>

      <div className="flex items-center justify-center flex-auto">
        <Title />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
        <span>
          <p>李国强</p>
        </span>
      </div>

      <div>
        <Link href="/">退出</Link>
      </div>
    </div>
  );
}
