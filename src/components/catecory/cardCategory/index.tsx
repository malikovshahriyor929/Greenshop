import { Select } from "antd";
import { useLocation, useSearchParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { CardType } from "../../../@types";
import Card from "./card";
import { useEffect, useState } from "react";

const CardCategory = () => {
  let { pathname } = useLocation();
  // let [datas, setDatas] = useState([]);
  // let [parm, setparm] = useState("house-plants");
  // let [useParams, setUseparams] = useSearchParams({});
  // let category = useParams.get("category");

  let { data } = useQueryHandler({
    pathname: "cardCategory",
    url: `flower/category/house-plants`,
  });

  // let { data } = useQueryHandler({
  //   pathname: "cardCategory",
  //   url: `flower/category/${category}`,
  // });
  // setparm(useParams.get("category") as string);
  // setDatas(data);
  console.log(data);

  return (
    <div>
      <div className=" flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <p
            className={`text-[15px] ${
              pathname == "/" && "!text-[#46a358] !font-bold"
            } text-[#3d3d3d]  cursor-pointer`}
          >
            All Plants
          </p>
          <p
            className={`text-[15px] ${
              pathname == "/New-Arrivals" && "!text-[#46a358] !font-bold"
            } text-[#3d3d3d]  cursor-pointer`}
          >
            New Arrivals
          </p>
          <p
            className={`text-[15px] ${
              pathname == "/?category=small-plants" &&
              "!text-[#46a358] !font-bold"
            } text-[#3d3d3d]  cursor-pointer`}
          >
            Sale
          </p>
        </div>
        <div className="flex items-center ">
          <p className="text-[#3d3d3d] text-[15px]">Short by:</p>
          <Select
            defaultValue="Default sorting"
            className="!border-none"
            options={[
              { value: "goods", label: "goods" },
              { value: "goods", label: "goods" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 my-5 gap-5">
        {data?.map((value: CardType) => (
          <div key={value._id}>
            <Card {...value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCategory;
