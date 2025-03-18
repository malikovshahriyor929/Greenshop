import { Link } from "react-router-dom";

import home from "../../../shared/assets/svg/headerHome.svg";
// import scan from "../../../shared/assets/svg/scanHeader";
// import headerItem from "../../../shared/assets/svg/headerItem.svg";
import { BsHeartFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const HeaderItem = () => {
  return (
    <div className="hidden max-[600px]:block bg-white rounded-t-2xl shadow-[1px_2px_30px_0px_rgba(0,0,0,0.12)]  w-full fixed bottom-0 left-0 ">
      {/* <div className="fixed bottom-0 left-0 w-full   ">
     <img className="h-[135px] w-full" src={headerItem} alt="" /> 
      </div> */}
      <div className="  flex items-center  justify-between p-7   ">
        <Link to={"/"}>
          <img src={home} alt="" />
        </Link>

        <Link to={"/blogs"}>
          <BsHeartFill className="text-[#D9D9D9]" />
        </Link>
        <Link to={"/"}>
          <IoMdCart size={20} className="text-[#D9D9D9]" />
        </Link>
        <Link to={"/blogs"}>
          <FaUser size={20} className="text-[#D9D9D9]" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderItem;
