import { useState } from "react";
import { CategorySideType } from "../../../@types";
import useQueryHandler from "../../../hooks/useQueryHandler";
import SideCategoryItem from "./categorySideItem";
import { useSearchParams } from "react-router-dom";
import { CategorySkeleton } from "../../../shared/generics/loader";
import Price from "./price";
import Discount from "./discount";

const CategorySide = () => {
  let [param, setParam] = useState("house-plants");
  let [params, setUrlParams] = useSearchParams({ category: "house-plants" });
  let range_min = params.get("range_min") || "0";
  let range_max = params.get("range_max") || "1000";
  // const category = params.get("category") || "house-plants";
  const sort = params.get("sort") || "defualt-sorting";
  const type = params.get("type") || "all-plants";
  let { data, isLoading } = useQueryHandler({
    pathname: `catecory`,
    url: "flower/category",
  });
  return (
    <>
      <div className="bg-[#fbfbfb] sticky h-screen overflow-y-scroll  max-[1130px]: scroll-auto top-0 rounded-lg p-3 flex flex-col gap-2 ">
        <p className="text-[18px] text-[#3d3d3d] font-bold  ">Categories</p>
        <div className="">
          {isLoading ? (
            <div>
              <CategorySkeleton length={9} />
            </div>
          ) : (
            data?.map((value: CategorySideType) => (
              <div
                onClick={() => {
                  setUrlParams({
                    category: value.route_path!,
                    range_min,
                    range_max,
                    type,
                    sort,
                  }),
                    setParam(value.route_path!);
                }}
                key={value?._id}
                className="my-2 "
              >
                <SideCategoryItem {...value} param={param} />
              </div>
            ))
          )}
        </div>
        <p className="text-[18px] text-[#3d3d3d] font-bold  ">Price Range</p>
        <div>
          <Price />
        </div>
        <div>
          <Discount />
        </div>
      </div>
    </>
  );
};

export default CategorySide;
