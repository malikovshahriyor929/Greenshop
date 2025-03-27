import { Link } from "react-router-dom";

import home from "../../../shared/assets/svg/headerHome.svg";
import { BsHeartFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Badge } from "antd";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setModalVisibilty } from "../../../redux/modalSlice";
import { BiLogIn } from "react-icons/bi";
import CookiesInfo from "../../../shared/generics/cookie";

const HeaderItem = ({ length }: { length: number }) => {
  let dispatch = useReduxDispatch();
  let {isAuthorization} = CookiesInfo()
  
  return (
    <div className="hidden z-[999] max-[600px]:block bg-white rounded-t-2xl shadow-[1px_2px_30px_0px_rgba(0,0,0,0.12)]  w-full fixed bottom-0 left-0 ">
      <div className="  flex items-center  justify-between p-7   ">
        <Link to={"/"}>
          <img src={home} alt="" />
        </Link>
        <Link to={"/"}>
          <BsHeartFill className="text-[#D9D9D9]" />
        </Link>
        <Badge dot count={length}>
          <Link to={"/shopping_cart"}>
            <IoMdCart size={20} className="text-[#D9D9D9]" />
          </Link>
        </Badge>
        <Link to={"/profile"}>
          <FaUser size={20} className="text-[#D9D9D9]" />
        </Link>

        <div className={`${isAuthorization&& "hidden"}`} onClick={() => dispatch(setModalVisibilty())}>
          <BiLogIn size={20} className="text-[#D9D9D9]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
