import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";

import Cookies from "js-cookie";

import {
  HeartOutlined,
  MenuOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Button, Drawer, message } from "antd";
import { useState } from "react";

const ProfileComponent = () => {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  let logOut = () => {
    navigate("/");
    localStorage.removeItem("token");
    Cookies.remove("user");
    message.success(" you log out");
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-[90%] relative mx-auto max-w-[1440px] flex gap-5 max-[752px]:flex-col my-10 mb-20 ">
        <div className="!hidden max-[752px]:!flex w-fit gap-5">
          <Button className="!bg-[#46a358] border-none !text-lg !text-white" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <p className="font-bold text-2xl ">My Account</p>
        </div>
        <Drawer onClose={onClose} open={open}>
          <div className="flex  flex-col gap-5 w-[250px] *:px-4 ">
            <p className="font-bold text-2xl ">My Account</p>
            <Link to={"/profile"}>
              <div
                className={` ${
                  pathname == "/profile" &&
                  "!text-[#46a358] scale-110 ease-in-out   duration-300 "
                } flex items-center gap-4 text-[20px] text-[black]`}
              >
                <UserOutlined size={25} />
                <p className="text-[18px] font-medium ">Account Details</p>
              </div>
            </Link>
            <Link to={"/profile/myProducts"}>
              <div
                className={` ${
                  pathname == "/profile/myProducts" &&
                  "!text-[#46a358] scale-110 ease-in-out   duration-300 "
                } flex items-center gap-4 text-[20px] text-[black]`}
              >
                <ShoppingOutlined size={30} />
                <p className="text-[18px] font-medium ">My Products</p>
              </div>
            </Link>
            <Link to={"/profile/address"}>
              <div
                className={` ${
                  pathname == "/profile/address" &&
                  "!text-[#46a358] scale-110 ease-in-out   duration-300 "
                } flex items-center gap-3 text-[20px] text-[black]`}
              >
                <IoLocationOutline size={25} />
                <p className="text-[18px] font-medium ">Address</p>
              </div>
            </Link>
            <Link to={"/profile/wishList"}>
              <div
                className={` ${
                  pathname == "/profile/wishList" &&
                  "!text-[#46a358] scale-110 ease-in-out   duration-300 "
                } flex items-center gap-4 text-[20px] text-[black]`}
              >
                <HeartOutlined size={25} />
                <p className="text-[18px] font-medium ">Wish List</p>
              </div>
            </Link>
            <Link to={"/profile/tracking"}>
              <div
                className={` ${
                  pathname == "/profile/tracking" &&
                  "!text-[#46a358] scale-110 ease-in-out   duration-300 "
                } flex items-center gap-4 text-[20px] text-[black]`}
              >
                <BsTruck size={20} />
                <p className="text-[18px] font-medium ">Track Order</p>
              </div>
            </Link>
            <div className="border-t my-2  border-[#46a358] pt-6">
              <button
                onClick={() => logOut()}
                className="flex text-[18px] text-red-500 items-center gap-4"
              >
                <IoMdLogOut size={25} /> Log Out
              </button>
            </div>
          </div>
        </Drawer>
        <div className="flex max-[752px]:hidden  flex-col gap-5 w-[270px] *:px- ">
          <p className="font-bold text-2xl ">My Account</p>
          <Link to={"/profile"}>
            <div
              className={` ${
                pathname == "/profile" &&
                "!text-[#46a358] scale-110 ease-in-out   duration-300 "
              } flex items-center gap-4 text-[20px] text-[black]`}
            >
              <UserOutlined size={25} />
              <p className="text-[18px] font-medium ">Account Details</p>
            </div>
          </Link>
          <Link to={"/profile/myProducts"}>
            <div
              className={` ${
                pathname == "/profile/myProducts" &&
                "!text-[#46a358] scale-110 ease-in-out   duration-300 "
              } flex items-center gap-4 text-[20px] text-[black]`}
            >
              <ShoppingOutlined size={30} />
              <p className="text-[18px] font-medium ">My Products</p>
            </div>
          </Link>
          <Link to={"/profile/address"}>
            <div
              className={` ${
                pathname == "/profile/address" &&
                "!text-[#46a358] scale-110 ease-in-out   duration-300 "
              } flex items-center gap-3 text-[20px] text-[black]` }
            >
              <IoLocationOutline size={25} />
              <p className="text-[18px] font-medium ">Address</p>
            </div>
          </Link>
          <Link to={"/profile/wishList"}>
            <div
              className={` ${
                pathname == "/profile/wishList" &&
                "!text-[#46a358] scale-110 ease-in-out   duration-300 "
              } flex items-center gap-4 text-[20px] text-[black]`}
            >
              <HeartOutlined size={25} />
              <p className="text-[18px] font-medium ">Wish List</p>
            </div>
          </Link>
          <Link to={"/profile/tracking"}>
            <div
              className={` ${
                pathname == "/profile/tracking" &&
                "!text-[#46a358] scale-110 ease-in-out   duration-300 "
              } flex items-center gap-4 text-[20px] text-[black]`}
            >
              <BsTruck size={20} />
              <p className="text-[18px] font-medium ">Track Order</p>
            </div>
          </Link>
          <div className="border-t my-2  border-[#46a358] pt-6">
            <button
              onClick={() => logOut()}
              className="flex text-[18px] text-red-500 items-center gap-4"
            >
              <IoMdLogOut size={25} /> Log Out
            </button>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProfileComponent;
