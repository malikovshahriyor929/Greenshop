import { Slider } from "antd";
import { useState } from "react";
import Button from "../../../../shared/generics/btn";

const Price = () => {
  let [range, setRange] = useState<number[]>([0, 1000]);

  return (
    <div>
      <Slider
        onChange={(e) => setRange(e)}
        range
        defaultValue={range}
        max={1000}
        min={0}
      />
      <p className="text-[15px] text-[#3d3d3d]">
        Price:{" "}
        <span className="text-[#46a358] font-bold ">
          {" "}
          ${range[0]} - ${range[1]}
        </span>
      </p>
      <div className="w-fit mt-3">
        <Button x={20} y={8}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Price;
