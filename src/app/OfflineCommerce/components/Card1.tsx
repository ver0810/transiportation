import Decoration11 from "@jiaminghi/data-view-react/es/decoration11";
import BarDemo from "./Bar";

export default function Card1() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div>
        <Decoration11 style={{ width: "200px", height: "60px" }}>
          Decoration11
        </Decoration11>
      </div>

      <div>
        <BarDemo />
      </div>

      <div className="flex flex-col items-center w-full">
        <h2>精准市场定位</h2>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
