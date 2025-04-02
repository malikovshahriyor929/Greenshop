import type { CardType, UserInfoType, wishlistType } from "../../../../@types";

import { BiHeart } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { TbShoppingCart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { addToCart } from "../../../../redux/shopSlice";
import {
  Create_Wishlist,
  Delete_Wishlist_Mutation,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import CookiesInfo from "../../../../shared/generics/cookie";
import { useState } from "react";

const Card = (props: CardType) => {
  let dispatch = useReduxDispatch();
  let navigate = useNavigate();
  let { mutate } = Create_Wishlist();
  let { mutate: DeleteWish } = Delete_Wishlist_Mutation();
  let { getCookie, setCookie } = CookiesInfo();
  let user: UserInfoType = getCookie("user") as any;
  let [wishlist, setWishlist] = useState<wishlistType[]>(user?.wishlist || []);
  let isLiked = wishlist.some((value) => value?.flower_id == props?._id);
  let liked = (flower_value: CardType) => {
    user = {
      ...user,
      wishlist: [
        ...(user.wishlist as wishlistType[]),
        { route_path: flower_value.category, flower_id: flower_value._id },
      ],
    };
    setWishlist(user.wishlist!);
    mutate({ route_path: flower_value.category, flower_id: flower_value._id });
    setCookie("user", user);
  };
  let disLiked = (flower_value: CardType) => {
    user = {
      ...user,
      wishlist: [
        ...user.wishlist!?.filter(
          (value: wishlistType) => value.flower_id !== props._id
        ),
      ],
    };
    DeleteWish({ _id: flower_value._id });
    setWishlist(user.wishlist!);
    setCookie("user", user);
  };

  return (
    <div className=" flex flex-col gap-3">
      <div className="cartHover overflow-hidden relative">
        <div className="flex items-center flex-col bg-[#fbfbfb] max-[472px]:bg-[linear-gradient(135deg,#f4f4f4_0%,#fafafa_100%)] max-[472px]:rounded-2xl p-5">
          <img
            className="max-w-[250px] max-[420px]:p-5 max-[420px]:object-contain max-[460px]:max-h-[200px]  max-h-[250px]"
            src={props.main_image}
            alt={props.title}
          />
        </div>
        <div className="absolute z-10 left-1/3 max-[360px]:gap-2 -bottom-20  flex items-center gap-5 cartHoverChild">
          <div
            onClick={() => dispatch(addToCart(props))}
            className="bg-white p-1 rounded-lg"
          >
            <TbShoppingCart size={25} />
          </div>
          {isLiked ? (
            <div
              onClick={() => {
                disLiked(props);
              }}
              className={`${isLiked && "!text-[red]"} bg-white p-1 rounded-lg`}
            >
              <BiHeart size={25} />
            </div>
          ) : (
            <div
              onClick={() => {
                liked(props);
              }}
              className={` bg-white p-1 rounded-lg`}
            >
              <BiHeart size={25} />
            </div>
          )}
          <div
            onClick={() => navigate(`/shop/${props.category}/${props._id}`)}
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
