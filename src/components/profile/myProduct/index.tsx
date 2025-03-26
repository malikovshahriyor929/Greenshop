import { Card, Empty } from "antd";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { cardSkeleton } from "../../../shared/generics/loader";
import { CardType } from "../../../@types";

const MyProduct = () => {
  let { data, isLoading, isError } = useQueryHandler({
    pathname: "get",
    url: "user/products",
  });

  return (
    <div>
      <div className="grid grid-cols-3 my-5 gap-5  max-[1130px]:grid-cols-2 max-[710px]:grid-cols-1 max-[600px]:grid-cols-2 max-[340px]:grid-cols-1">
        {isLoading || isError
          ? Array?.from({ length: 6 }).map((_, idx) => (
              <div className="" key={idx}>
                {cardSkeleton()}
              </div>
            ))
          : data?.map((value:CardType) => (
              <div key={value?._id}>
                <Card {...value}  />
              </div>
            ))}
      </div>
      <div className="h-full w-full">
        <Empty />
      </div>
    </div>
  );
};

export default MyProduct;
