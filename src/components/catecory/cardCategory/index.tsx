import { Select } from "antd";
import { useSearchParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { CardType } from "../../../@types";
import Card from "./card";
import { cardSkeleton } from "../../../shared/generics/loader";
import { title_category } from "../../../utils";

const CardCategory = () => {
  let [params, setParams] = useSearchParams({});
  let range_min = params.get("range_min") || "0";
  let range_max = params.get("range_max") || "1000";
  const category = params.get("category") || "house-plants";
  const sort = params.get("sort") || "defualt-sorting";
  const type = params.get("type") || "all-plants";
  let { data, isLoading, isError } = useQueryHandler({
    pathname: `catecory-${category}-${range_min}-${range_max}-${type}-${sort}`,
    url: `flower/category/${category}`,
    params: {
      range_min,
      range_max,
      sort,
      type,
    },
  });

  let setSelect = (e: string) => {
    setParams({ category, range_min, range_max, type, sort: e });
  };

  return (
    <>
      <div className=" flex items-center justify-between ">
        <div className="flex items-center gap-4 max-[700px]:gap-2">
          {title_category?.map((value) => (
            <p
              onClick={() =>
                setParams({
                  category,
                  range_min,
                  range_max,
                  type: value.label,
                  sort,
                })
              }
              className={`text-[15px] ${
                params.get("type") == value.label &&
                "!text-[#46a358] !font-bold"
              } text-[#3d3d3d] max-[750px]:text-[14px]  cursor-pointer`}
              key={value.id}
            >
              {value.title}
            </p>
          ))}
        </div>
        <div className="flex items-center max-[340px]:hidden ">
          <p className="text-[#3d3d3d] max-[750px]:text-[14px] text-[15px] max-[655px]:hidden">
            Short by:
          </p>
          <Select
            defaultValue="Default sorting"
            className="!border-none max-[750px]:text-[14px] max-[710px]:w-[100px] max-[700px]:!-px-1"
            onChange={(e) => setSelect(e)}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "Most Expansive" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 my-5 gap-5  max-[1130px]:grid-cols-2 max-[710px]:grid-cols-1 max-[600px]:grid-cols-2 max-[340px]:grid-cols-1">
        {isLoading || isError
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div className="" key={idx}>
                {cardSkeleton()}
              </div>
            ))
          : data?.map((value: CardType) => (
              <div key={value._id}>
                <Card {...value} category={category as string} />
              </div>
            ))}
      </div>
    </>
  );
};

export default CardCategory;
