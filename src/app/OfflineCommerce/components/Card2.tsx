import { ButtonDemo } from "@/app/components/ButtonDemo";
import offline1 from "@/app/assets/Offline1.jpg";
import offline2 from "@/app/assets/Offline2.jpg";
import offline3 from "@/app/assets/Offline3.jpg";
import offline4 from "@/app/assets/Offline4.jpg";

export default function Card2() {
  return (
    <div>
      <div className="flex flex-col w-full gap-4 px-4">
        <div className="w-full pt-4">
          <img src={offline1.src} className="rounded-[30px]" />
        </div>

        <div className="w-full">
          <img src={offline2.src} className="rounded-[10px]" />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[20px] font-bold">联合营销与跨界合作</h2>
          <div>
            <p>
              通过OD分析，与其他行业的商家进行联合营销。
              例如，公共交通工具上的广告可以与附近的商家优惠活动相结合，
              鼓励用户在出行途中消费。
            </p>
          </div>

          <ButtonDemo>查看详情</ButtonDemo>
        </div>
      </div>
    </div>
  );
}
