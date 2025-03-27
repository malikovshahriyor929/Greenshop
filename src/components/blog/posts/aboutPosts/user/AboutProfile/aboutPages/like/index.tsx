import { Empty } from "antd";
import { useParams } from "react-router-dom";
import useQueryHandler from "../../../../../../../../hooks/useQueryHandler";
import { CardType } from "../../../../../../../../@types";
import Card from "./card";
import { cardSkeleton } from "../../../../../../../../shared/generics/loader";

const Liked = () => {
  let { user } = useParams();
  let { data, isLoading, isError } = useQueryHandler({
    pathname: `user-${user}`,
    url: `user/wishlist`,
    params: {
      access_token: user,
    },
  });
  let datas: CardType[] = Array.isArray(data) ? data : [];

  return (
    <div className="w-full grid grid-cols-4 my-5 gap-5  max-[1130px]:grid-cols-3 max-[710px]:grid-cols-3 max-[600px]:grid-cols-2 max-[340px]:grid-cols-1">
      {isLoading || isError
        ? Array.from({ length: 4 }).map((_, idx: number) => (
            <div key={idx}>{cardSkeleton()}</div>
          ))
        : datas?.map((value: any, idx: number) => (
            <div key={idx} className={`${value?.main_image ? "" : "hidden"}`}>
              <Card {...value} />
            </div>
          ))}

      {isError && <Empty className="mx-auto my-10" />}
    </div>
  );
};

export default Liked;
