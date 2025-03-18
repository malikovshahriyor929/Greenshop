import { Skeleton } from "antd";

let CategorySkeleton = ({ length }: { length: number }) => {
  return (
    <div>
      {Array(length)
        .fill(0)
        .map((_, idx) => (
          <Skeleton.Input className="!w-full my-2 !h-[10px]" key={idx} />
        ))}
    </div>
  );
};
let CategorySideDiscount = () => {
  return "";
};
export { CategorySkeleton, CategorySideDiscount };
