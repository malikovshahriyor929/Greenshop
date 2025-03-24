import useQueryHandler from "../../../../../hooks/useQueryHandler";
import { Avatar } from "antd";
import Button from "../../../../../shared/generics/btn";
import { useNavigate } from "react-router-dom";

const Profile = ({ props }: { props: string }) => {
  let { data } = useQueryHandler({
    pathname: "userhg",
    url: `user/by_id/${props}`,
  });
let navigate = useNavigate()
  return (
    <div className="flex items-center justify-between pt-5">
      <div onClick={()=>navigate(`blog/profile/${props}`)} className="flex items-center gap-3 ">
        <Avatar size={60} src={data?.profile_photo} />
        <div>
          <p className="text-[18px] font-semibold ">
            {data?.name} {data?.surname}
          </p>
          <p>{data?.followers?.length} followers</p>
        </div>
      </div>
      <Button x={20} y={10}>Follow</Button>
    </div>
  );
};

export default Profile;
