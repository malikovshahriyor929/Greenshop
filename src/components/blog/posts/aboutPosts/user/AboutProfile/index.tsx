import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../../../../../footer";
import useQueryHandler from "../../../../../../hooks/useQueryHandler";
import { Avatar, Skeleton } from "antd";
import { UserInfoType } from "../../../../../../@types";
import Button from "../../../../../../shared/generics/btn";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { PlusCircleOutlined } from "@ant-design/icons";

const AboutProfile = () => {
  const { pathname } = useLocation();
  const { user } = useParams();
  const { data, isLoading, isError } = useQueryHandler({
    pathname: "userhg",
    url: `user/by_id/${user}`,
  });
  const datas: UserInfoType = data;
  const load = isLoading || isError;
  return (
    <>
      <div className="w-[90%] max-w-[1440px] mx-auto mt-4">
        <div>
          <div>
            {isLoading || isError ? (
              <Skeleton.Image active className="!w-full mb-2 !h-[320px]" />
            ) : (
              <img
                className="rounded-lg "
                src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
                alt=""
              />
            )}
          </div>
          <div className="w-[98%] mx-auto flex justify-between items-center ">
            <div className="flex items-end gap-5">
              <div className="-mt-10">
                {load ? (
                  <Skeleton.Avatar size={130} active />
                ) : (
                  <Avatar
                    size={130}
                    className="!border-2 !border-[#46a358]"
                    src={datas?.profile_photo}
                  />
                )}
              </div>
              <div className="mb-4 flex flex-col gap-1">
                {load ? (
                  <Skeleton.Input active />
                ) : (
                  <h2 className="text-[24px] font-bold ">
                    {datas?.name}
                    {datas?.surname}
                  </h2>
                )}
                {load ? (
                  <Skeleton.Input active />
                ) : (
                  <p>Followers {datas?.followers?.length}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button styles="w-fit items-center">
                <IoChatbubbleEllipsesOutline size={20} />
                <p>Start chat</p>
              </Button>
              <Button styles="w-fit items-center">
                <LuSend size={20} />
                <p>Send Invitation</p>
              </Button>

              <Button styles="w-fit items-center">
                <PlusCircleOutlined size={20} />
                <p>Follow</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className=" flex gap-5 border-b **:duration-300  border-[#e1dfdf] ">
            <Link to={`.`}>
              <p
                className={` ${
                  pathname == `/blogs/profile/${datas?._id}` &&
                  "!text-[#46a358] !border-b-[#46a359] "
                } border-b-2  text-[#727272] border-b-transparent `}
              >
                About
              </p>
            </Link>
            <Link to={`liked`}>
              <p
                className={` ${
                  pathname == `/blogs/profile/${datas?._id}/liked` &&
                  "!text-[#46a358] !border-b-[#46a359] "
                } border-b-2  text-[#727272] border-b-transparent `}
              >
                Liked
              </p>
            </Link>
            <Link to={`followers`}>
              <p
                className={` ${
                  pathname == `/blogs/profile/${datas?._id}/followers` &&
                  "!text-[#46a358] !border-b-[#46a359] "
                } border-b-2  text-[#727272] border-b-transparent `}
              >
                Followers
              </p>
            </Link>
            <Link to={`posts`}>
              <p
                className={` ${
                  pathname == `/blogs/profile/${datas?._id}/posts` &&
                  "!text-[#46a358] !border-b-[#46a359] "
                } border-b-2  text-[#727272] border-b-transparent `}
              >
                Posts
              </p>
            </Link>
           </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutProfile;
