import { Slider } from "antd";
import { useState } from "react";
import Button from "../../../../shared/generics/btn";
import { useSearchParams } from "react-router-dom";

const Price = () => {
  let [params, setParams] = useSearchParams({});
  let range_min = params.get("range_min") || 0;
  let range_max = params.get("range_max") || 1000;
  const category = params.get("category") || "accessories";
  const sort = params.get("sort") || "defualt-sorting";
  const type = params.get("type") || "all-plants";
  let [range, setRange] = useState([+range_min, +range_max]);

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
        Price:
        <span className="text-[#46a358] font-bold ">
          ${range[0]} - ${range[1]}
        </span>
      </p>
      <div
        onClick={() =>
          setParams({
            category,
            range_min: range[0].toString(),
            range_max: range[1].toString(),
            sort,
            type,
          })
        }
        className="w-fit mt-3"
      >
        <Button x={20} y={8}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default Price;
