import { useState } from "react";
import { CategorySideType } from "../../../@types";
import useQueryHandler from "../../../hooks/useQueryHandler";
import SideCategoryItem from "./categorySideItem";
import { useSearchParams } from "react-router-dom";
import { CategorySkeleton } from "../../../shared/generics/loader";

const CategorySide = () => {
  let [param, setParam] = useState("house-plants");

  let [_, setUrlParams] = useSearchParams({ category: "house-plants" });

  let { data, isLoading } = useQueryHandler({
    pathname: "catecory",
    url: "flower/category",
  });
  return (
    <>
      <div className="bg-[#fbfbfb] rounded-lg p-3 flex flex-col gap-2 ">
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
                  setUrlParams({ category: value.route_path! }),
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
      </div>
    </>
  );
};

export default CategorySide;
