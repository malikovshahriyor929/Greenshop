import { CategorySideType } from "../../../../@types";

const SideCategoryItem = (props: CategorySideType) => {
  return (
    <div
      className={`flex items-center ${
        props.param == props.route_path && "text-[#46a358] font-bold"
      }  justify-between text-[#3d3d3d]`}
    >
      <p className="">{props.title}</p>
      <p>({Math.abs(props.count!)})</p>
    </div>
  );
};

export default SideCategoryItem;
