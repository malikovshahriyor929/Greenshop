import { CategorySideType } from "../../../@types";
import useQueryHandler from "../../../hooks/useQueryHandler";
import SideCategoryItem from "./categorySideItem";

const CategorySide = () => {
    
  let { data } = useQueryHandler({
    pathname: "catecory",
    url: "flower/category",
  });
  console.log(data);

  return (
    <div>
      <div className="bg-[#fbfbfb] rounded-lg">
        <p className="text-[18px] text-[#3d3d3d] font-bold  ">Categories</p>
        <div>
          {data?.map((value: CategorySideType) => (
            <div key={value?._id}>
                
              <SideCategoryItem  {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySide;
