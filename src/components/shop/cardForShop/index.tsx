import { Image } from "antd";
import { CardType } from "../../../@types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { decrement, deleteCart, increment } from "../../../redux/shopSlice";
import { TbTrash } from "react-icons/tb";

const Card = ({ ...props }: CardType) => {
  let dispatch = useReduxDispatch();
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] pr-4  items-center ">
      <div className="flex items-center gap-2">
        <Image
          src={props?.main_image}
          className="!h-[70px] !w-[70px] p-1 rounded-lg"
          alt=""
        />
        <div>
          <p className="text-[#3d3d3d] font-medium">{props?.title}</p>
          <p className="text-[14px] text-[#a5a5a5] ">
            SKU:{" "}
            <span className="text-[#727272]">{props._id?.slice(0, 10)}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#727272] font-medium ">
          ${props?.price?.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={() => dispatch(decrement({ id: props._id }))}
          className="bg-[#46a358] cursor-pointer h-6 w-6 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
        >
          <MinusOutlined />
        </div>
        <span>{props?.count}</span>
        <div
          onClick={() => dispatch(increment({ id: props._id }))}
          className="bg-[#46a358] cursor-pointer h-6 w-6 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
        >
          <PlusOutlined />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#46a358] font-bold ">
          $ {(props.price! * props.count!).toFixed(2)}
        </p>
        <div onClick={() => dispatch(deleteCart({ id: props._id }))}>
          <TbTrash className="text-[#727272]" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Card;