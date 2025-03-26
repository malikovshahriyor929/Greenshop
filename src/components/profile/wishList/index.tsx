import { CardType } from "antd/es/card/Card";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { cardSkeleton } from "../../../shared/generics/loader";
import Card from "./card";

const Wishlist = () => {
  let { data, isError, isLoading } = useQueryHandler({
    pathname: "asd",
    url: "user/wishlist",
  });
  data?.splice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-3 my-5 gap-5  max-[1130px]:grid-cols-2 max-[710px]:grid-cols-1 max-[600px]:grid-cols-2 max-[340px]:grid-cols-1">
        {isLoading || isError
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div className="" key={idx}>
                {cardSkeleton()}
              </div>
            ))
          : data?.map((value: CardType, idx: number) => (
              <div key={idx}>
                {value !== null && (
                  <Card {...(typeof value === "object" ? value : {})} />
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Wishlist;
