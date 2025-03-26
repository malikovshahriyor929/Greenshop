import { useParams } from "react-router-dom";
import { UserInfoType } from "../../../../../../../../@types";
import useQueryHandler from "../../../../../../../../hooks/useQueryHandler";
import Card from "./card";
import { Empty } from "antd";

const Liked = () => {
//   let { user } = useParams();
//   let { data, isLoading, isError } = useQueryHandler({
//     pathname: "userhg",
//     url: `user/by_id/${user}`,
//   });
//   let datas: UserInfoType = data;
//   if (!isLoading || !isError) {
//     datas?.wishlist?.filter((value: any) => {
//       console.log(value);
//       //   let { data: flower } = useQueryHandler({
//       //     pathname: "flowers",
//       //     url: `flower/category/${value.route_path}/${value.flower_id}`,
//       //   });
//     });
//   }
  //   console.log(datas.wishlist);

  return (
    <div className="w-full">
      {/* {datas?.wishlist?.map((value: any,idx:number) => (
        <div key={idx}>
          <Card {...value} />
        </div>
      ))} */}

      <Empty className="mx-auto my-10" />
    </div>
  );
};

export default Liked;
