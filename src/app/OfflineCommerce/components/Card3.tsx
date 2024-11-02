import { PieComponent } from "@/app/components/MyBarcharts";
import Decoration11 from "@jiaminghi/data-view-react/es/decoration11";
import { Pie } from "recharts";

export default function Card3() {
  return (
    <div className="flex flex-col items-center w-full gap-4 px-4">
      <div className="pt-4">
        <Decoration11
          style={{ width: "300px", height: "60px", borderopcity: "0" }}
        >
          高流量时段不同区域人数分布
        </Decoration11>
      </div>


      <div>
        <PieComponent  data={trafficData} />
      </div>
    </div>
  );
}
