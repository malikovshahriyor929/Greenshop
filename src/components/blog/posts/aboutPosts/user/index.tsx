import useQueryHandler from "../../../../../hooks/useQueryHandler";
import { Avatar, Tooltip } from "antd";
import Button from "../../../../../shared/generics/btn";
import { useNavigate } from "react-router-dom";

const Profile = ({ props }: { props: string }) => {
  let { data } = useQueryHandler({
    pathname: "userhg",
    url: `user/by_id/${props}`,
  });

  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-between pt-5">
      <div
        onClick={() => navigate(`/blogs/profile/${props}`)}
        className="flex items-center gap-3 cursor-pointer "
      >
        <Tooltip title={`${data?.name } ${ data?.surname}`}>
          <Avatar size={60} src={data?.profile_photo} className="cursor-pointer " />
        </Tooltip>
        <div>
          <p className="text-[18px] font-semibold ">
            {data?.name} {data?.surname}
          </p>
          <p>{data?.followers?.length} followers</p>
        </div>
      </div>
      <Button x={20} y={10} styles="cursor-pointer">
        Follow
      </Button>
    </div>
  );
};

export default Profile;
