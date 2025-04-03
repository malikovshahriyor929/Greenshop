import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useQueryHandler from "../../hooks/useQueryHandler";
import { Empty, Image, Rate } from "antd";
import Button from "../../shared/generics/btn";

import { TiSocialFacebook } from "react-icons/ti";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { BiHeart } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import Footer from "../footer";
import Descr from "./derc";
import { addToCart, decrement } from "../../redux/shopSlice";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { useEffect, useState } from "react";
import {
  Create_Wishlist,
  Delete_Wishlist_Mutation,
} from "../../hooks/useQueryHandler/useQueryAction";
import CookiesInfo from "../../shared/generics/cookie";
import { CardType, UserInfoType, wishlistType } from "../../@types";

const CardViewComponents = () => {
  let { mutate } = Create_Wishlist();
  let { mutate: DeleteWish } = Delete_Wishlist_Mutation();
  let { id } = useParams();
  let [params, _] = useSearchParams({ category: "accessories" });
  let { getCookie, setCookie } = CookiesInfo();
  let navagate = useNavigate();
  let dispatch = useReduxDispatch();
  let [counter, setCounter] = useState(1);
  const category = params.get("category") || "accessories";
  let user: UserInfoType = getCookie("user") as any;
  let [wishlist, setWishlist] = useState<wishlistType[]>(user?.wishlist || []);
  let { data } = useQueryHandler({
    pathname: `cardView-${category}`,
    url: `flower/category/${category}/${id}`,
  });
  let isLiked = wishlist.some((value) => value?.flower_id == data?._id);
  let { product } = useReduxSelector((state) => state.ShopSlice);
  useEffect(() => {
    const foundProduct = product.find((value) => value._id === data?._id);
    if (foundProduct) setCounter(foundProduct.count!);
  }, [product, data]);

  if (data == null) {
    return (
      <div className="top-0 left-0 h-full w-full absolute flex-col  gap-5  flex items-center justify-center">
        <Empty />
        <button className=" cursor-pointer   " onClick={() => navagate("/")}>
          <Button>Go to shop</Button>
        </button>
      </div>
    );
  }

  let liked = (flower_value: CardType) => {
    user = {
      ...user,
      wishlist: [
        ...(user.wishlist as wishlistType[]),
        { route_path: flower_value.category, flower_id: flower_value?._id },
      ],
    };
    setWishlist(user.wishlist!);
    mutate({ route_path: flower_value.category, flower_id: flower_value?._id });
    setCookie("user", user);
  };
  let disLiked = (flower_value: CardType) => {
    user = {
      ...user,
      wishlist: [
        ...user.wishlist!?.filter(
          (value: wishlistType) => value.flower_id !== data._id
        ),
      ],
    };
    DeleteWish({ _id: flower_value._id });
    setWishlist(user.wishlist!);
    setCookie("user", user);
  };

  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px] max-[600px]:mb-20">
        <p className="text-[#3d3d3d] mt-5 cursor-pointer ">
          <Link to={"/"} className="font-semibold  ">
            Home
          </Link>
          / Shop
        </p>
        <div className="grid grid-cols-2 max-[827px]:grid-cols-1 max-[1100px]:grid-cols-[2fr_1.7fr] max-[1020px]:grid-cols-[2fr_1.5fr] max-[1000px]:grid-cols-[2fr_1.3fr] my-5 max-[1233px]:gap-5 items-start ">
          <div className="flex max-[910px]:flex-col-reverse  max-[910px]:gap-5 gap-10 max-[1233px]:gap-4 ">
            <div
              className={`grid grid-cols-1  max-[910px]:grid-cols-4 items-center gap-4 max-[995px]:gap-0 max-[995px]:  ${
                data?.detailed_images?.length && "hidden"
              } `}
            >
              {data?.detailed_images.map((value: string, idx: number) => (
                <Image
                  className="!w-[100px]  !h-[100px] max-[475px]:mx-auto max-[475px]:!h-[70px] max-[475px]:!w-[70px] max-[370px]:!h-[60px] max-[370px]:!w-[60px]  !object-cover bg-[#fbfbfb] rounded-lg "
                  key={idx}
                  src={value}
                  alt=""
                />
              ))}
            </div>
            <div className=" **:!rounded-lg mx-auto   max-[9]: p-2 *:!rounded-lg !max-w-[400px] object-contain  !max-h-[400px]">
              <Image
                className="!w-full !h-full bg-[#fbfbfb] ax-w-[400px] max-[910px]:!max-h-[400px]  !p-2  !rounded-lg !object-cover "
                src={data?.main_image}
              />
            </div>
          </div>
          <div>
            <h2 className="text-[#3d3d3d] text-[28px] font-bold max-[300px]:text-[24px]">
              {data?.title}
            </h2>
            <div className="flex items-center justify-between max-[356px]:flex-col max-[356px]:items-start">
              <p className="text-[#46a358] text-[22px] font-bold">
                ${data?.price}
              </p>
              <div className=" flex items-center gap-2">
                <Rate
                  className="!space-x-0.5 !text-[14px]"
                  allowHalf
                  defaultValue={data?.rate}
                />
                <p className="text-[#3d3d3d] text-[15px]">
                  {data?.views} Customer Review
                </p>
              </div>
            </div>
            <div className="border-[rgba(70,163,88,0.5)] border-[0.30px] my-2 w-full"></div>
            <div className="my-2">
              <p className="text-[#3d3d3d] text-[15px] font-medium">
                Short Description:
              </p>
              <p className="text-[14px] text-[#727272] mt-2 ">
                {data?.short_description}
              </p>
            </div>
            <div className="flex flex-col gap-2 my-4 ">
              <p className="text-[#3d3d3d] text-[15px] font-medium">Size:</p>
              <div className="flex  items-center gap-3">
                {["S", "M", "L", "XL"].map((value: string, idx: number) => (
                  <div
                    key={idx}
                    className="h-7 w-7 text-sm font-medium border-[#eaeaea] text-[#727272] cursor-pointer border sizes flex items-center justify-center rounded-full"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="my-5 flex items-center max-[1020px]:items-start max-[1020px]:flex-col gap-5 max-[1059px]:gap-3 ">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => {
                    dispatch(addToCart(data));
                  }}
                  className="!bg-[#46a358] cursor-pointer h-8 w-8 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
                >
                  <PlusOutlined />
                </div>
                <div>{counter}</div>
                <div
                  onClick={() => {
                    dispatch(decrement({ id: data?._id }));
                  }}
                  className="!bg-[#46a358] cursor-pointer h-8 w-8 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
                >
                  <MinusOutlined />
                </div>
              </div>
              <div className="w-fit flex   items-center gap-5 max-[1059px]:gap-3 max-[305px]:gap-1 grid-cols-2">
                <div
                  className="cursor-pointer "
                  onClick={() => {
                    navagate("/shopping_cart"), dispatch(addToCart(data));
                  }}
                >
                  <Button
                    x={15}
                    y={10}
                    styles={"text-nowrap max-[1059px]:!p-[5px_10px]  "}
                  >
                    Buy NOW
                  </Button>
                </div>
                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="border-[#46a358] border text-nowrap cursor-pointer   max-[1059px]:!p-[5px_10px] rounded-lg px-5 py-2.5 flex  gap-1 text-[#46a358] "
                >
                  Add to cart
                </button>
                {isLiked ? (
                  <button
                    onClick={() => {
                      disLiked(data);
                    }}
                    className={`${
                      isLiked && "!text-[red]"
                    } bg-white border-[#46a358] w-fit border  max-[1059px]:!p-[5px_10px] rounded-lg p-2 flex  gap-1 text-[#46a358]`}
                  >
                    <BiHeart size={25} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      liked(data);
                    }}
                    className={` bg-white border-[#46a358] w-fit border  max-[1059px]:!p-[5px_10px] rounded-lg p-2 flex  gap-1 text-[#46a358]`}
                  >
                    <BiHeart size={25} />
                  </button>
                )}
              </div>
            </div>
            <div>
              <p className="text-[#a5a5a5]">
                SKU: <span className="text-[#727272]"> 1995751877966 </span>
              </p>
              <p className="text-[#a5a5a5]">
                Categories:
                <span className="text-[#727272]"> {data?.category} </span>
              </p>
              <p className="text-[#a5a5a5]">
                Tags:{" "}
                <span className="text-[#727272]">
                  {data?.tags.length
                    ? data?.tags.map((value: string) => value)
                    : "empty"}
                </span>
              </p>
            </div>
            <div
              className="flex items-center gap-2 my-4
           "
            >
              <p className="max-[300px]:text-[14px]">Share this products:</p>
              <TiSocialFacebook size={25} />
              <FaTwitter />
              <FaLinkedinIn size={20} />
              <LuMail size={20} />
            </div>
          </div>
        </div>
      </div>
      <Descr data={data} />
      <Footer />
    </>
  );
};

export default CardViewComponents;
