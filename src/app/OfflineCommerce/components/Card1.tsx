import Decoration11 from "@jiaminghi/data-view-react/es/decoration11";
import BarDemo from "./Bar";
import { ButtonDemo } from "@/app/components/ButtonDemo";

export default function Card1() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div>
        <Decoration11 style={{ width: "200px", height: "60px", borderopcity: "0" }}>
          不同区域流量
        </Decoration11>
      </div>

      <div className="w-full h-[50vh] flex items-center justify-center px-4">
        <BarDemo />
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        <h2 className="text-[24px] font-bold">精准市场定位</h2>
        <div className="flex items-center justify-center px-4">
          <p>通过OD分析，了解不同区域的客流起始和目的地分布，
            为商家提供精准的市场定位， 帮助他们选择合适的地
            点开设店铺，最大化客流量。 </p>
        </div>
        <ButtonDemo>查看详情</ButtonDemo>
      </div>
    </div>
  );
}
