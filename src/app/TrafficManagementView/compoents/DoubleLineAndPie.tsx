import { DoubleLineComponent } from "./DoubleLine";
import PieCar from "./PieCar";

// [3, 2, 1.5, 2.5, 4, 5, 4, 3.5, 4, 5, 4, 3.5]
// [3.5, 1, 2, 2.5, 3, 1, 3, 1, 4, 4.5, 2, 4]
const inputOutputData = [
  { name: "0", intput: 3, output: 3.5 },
  { name: "2", intput: 2, output: 1 },
  { name: "4", intput: 1.5, output: 2 },
  { name: "6", intput: 2.5, output: 2.5 },
  { name: "8", intput: 4, output: 3 },
  { name: "10", intput: 5, output: 1 },
  { name: "12", intput: 4, output: 3 },
  { name: "14", intput: 3.5, output: 1 },
  { name: "16", intput: 4, output: 3 },
  { name: "18", intput: 3.5, output: 1 },
  { name: "20", intput: 4, output: 4 },
  { name: "22", intput: 4, output: 2 },
  { name: "时间/h" },
];


const carStatusData = [
  { value: 1048, name: "小型汽车" },
  { value: 735, name: "中型汽车" },
  { value: 580, name: "大型汽车" },
  { value: 484, name: "学生校车" },
];

export default function DoubleLineAndPie() {
  return (
    <div className="flex flex-col items-center w-full">
      <span className="pt-4"><p>车辆状态统计</p></span>
      <PieCar data={carStatusData} />
      <span><p>车辆流入/流出统计</p></span>
      <DoubleLineComponent data={inputOutputData} />
    </div>
  );
}
