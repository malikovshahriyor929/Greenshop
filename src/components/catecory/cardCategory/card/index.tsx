import { CardType } from "../../../../@types";

import { BiHeart } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { TbShoppingCart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Card = (props: CardType) => {
  let navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-3">
      <div className="cartHover overflow-hidden relative">
        <div className="flex items-center flex-col bg-[#fbfbfb] p-5">
          <img
            className="max-w-[250px] max-h-[250px]"
            src={props.main_image}
            alt=""
          />
        </div>
        <div className="absolute z-10 left-1/3 -bottom-20  flex items-center gap-5 cartHoverChild">
          <div className="bg-white p-1 rounded-lg">
            <TbShoppingCart size={25} />
          </div>
          <div className="bg-white p-1 rounded-lg">
            <BiHeart size={25} />
          </div>
          <div
            onClick={() => navigate(`/${props._id}`)}
            className="bg-white p-1 rounded-lg"
          >
            <LuSearch size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-col static z-50 gap-1 pl-2  ">
        <p className="text-[#3d3d3d]">{props.title}</p>
        <p className="text-[#46a358] text-lg font-bold">${props.price}</p>
      </div>
    </div>
  );
};

export default Card;
