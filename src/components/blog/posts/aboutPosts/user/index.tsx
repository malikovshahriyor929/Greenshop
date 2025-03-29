import useQueryHandler from "../../../../../hooks/useQueryHandler";
import { Avatar, Tooltip } from "antd";
import Button from "../../../../../shared/generics/btn";
import { useNavigate } from "react-router-dom";
import CookiesInfo from "../../../../../shared/generics/cookie";
import { useState } from "react";
import { UserInfoType } from "../../../../../@types";
import { FollowMutation } from "../../../../../hooks/useQueryHandler/useQueryAction";

const Profile = ({ props }: { props: string }) => {
  let [followCheck, setFollowCheck] = useState(false);
  let { getCookie, setCookie } = CookiesInfo();
  let { data }: { data: UserInfoType[] | any } = useQueryHandler({
    pathname: `user-${props}`,
    url: `user/by_id/${props}`,
  });
  let { mutate } = FollowMutation();
  let followFinder: UserInfoType = getCookie("user")?.followers?.find(
    async (value: any) => value !== data?._id
  );

  if (followFinder) {
    setCookie("user", {
      ...getCookie("user"),
      followers: [...getCookie("user")?.folowers, data?._id],
    });
  }
  console.log(data);
// let isFollow = 
  let Follow = () => {
    setFollowCheck(true);
    setCookie("user", { ...getCookie("user"), follow: [data?._id] });
    //   console.log(getCookie("user"));
    mutate({ _id: data?._id });
  };

  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-between pt-5">
      <div
        onClick={() => navigate(`/blogs/profile/${props}`)}
        className="flex items-center gap-3 cursor-pointer "
      >
        <Tooltip title={`${data?.name} ${data?.surname}`}>
          <Avatar
            size={60}
            src={data?.profile_photo}
            className="cursor-pointer "
          />
        </Tooltip>
        <div>
          <p className="text-[18px] font-semibold ">
            {data?.name} {data?.surname}
          </p>
          <p>{data?.followers?.length} followers</p>
        </div>
      </div>
      <button onClick={() => Follow()}>
        <Button x={20} y={10} styles="cursor-pointer">
          {followCheck ? "Followed" : "Follow"}
        </Button>
      </button>
    </div>
  );
};

export default Profile;
