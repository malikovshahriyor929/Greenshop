import { CardType } from "antd/es/card/Card";
import useQueryHandler from "../../../hooks/useQueryHandler";
import Card from "./card";
import { cardSkeleton } from "../../../shared/generics/loader";
import { Empty } from "antd";

const Wishlist = () => {
  let { data, isError, isLoading } = useQueryHandler({
    pathname: "asd",
    url: "user/wishlist",
  });

  console.log(data, 'datas');
  


  for (let i = 0; i < data?.length; i++) {
    if (data[i] !== null) {
      return (
        <div>
          <div className="grid grid-cols-3 my-5 gap-5  max-[1130px]:grid-cols-2 max-[710px]:grid-cols-1 max-[600px]:grid-cols-2 max-[340px]:grid-cols-1">
            {isLoading || isError ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div className="" key={idx}>
                  {cardSkeleton()}
                </div>
              ))
            ) : data ? (
              data?.map((value: CardType, idx: number) => (
                <div key={idx}>
                  {value !== null ? (
                    <Card {...(typeof value === "object" ? value : {})} />
                  ) : (
                    ""
                  )}
                </div>
              ))
            ) : (
              <Empty />
            )}
          </div>
        </div>
      );
    } else {
      data.slice(i, i + 1);
    }
  }
};

export default Wishlist;
