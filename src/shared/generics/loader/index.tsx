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
      <Skeleton.Image active className="min-w-[250px] max-[600px]:max-w-[200px] max-[520px]:!max-w-[50px] max-[400px]:min-w-[100%] min-h-[250px] w-full mx-auto " />
      <Skeleton active className="mx-auto max-w-[250px]" />
    </div>
  );
};
export { CategorySkeleton, cardSkeleton };
