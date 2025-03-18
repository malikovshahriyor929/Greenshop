import { useSearchParams } from "react-router-dom";
import { CategorySideType } from "../../../../@types";

const SideCategoryItem = (props: CategorySideType) => {
  console.log(props);

  let [Urlparams, setUrlParams] = useSearchParams();
  console.log(Urlparams);

  return (
    <div className="flex items-center justify-between">
      <p className="">{props.title}</p>
      <p>{Math.abs(props.count!)}</p>
    </div>
  );
};

export default SideCategoryItem;
