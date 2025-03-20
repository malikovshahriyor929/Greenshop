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
let cardSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton.Image className="min-w-[250px] min-h-[250px] w-full mx-auto " />
      <Skeleton className="mx-auto max-w-[250px]" />
    </div>
  );
};
export { CategorySkeleton, cardSkeleton };
