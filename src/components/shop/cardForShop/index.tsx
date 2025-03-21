import { Image } from "antd";
import { CardType } from "../../../@types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { decrement, deleteCart, increment } from "../../../redux/shopSlice";
import { TbTrash } from "react-icons/tb";

const Card = ({ ...props }: CardType) => {
  let dispatch = useReduxDispatch();
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] max-[1000px]:grid-cols-[2.1fr_1fr_1fr_1fr] max-[552px]:grid-cols-2 max-[460px]:grid-cols-[1.3fr_1fr] max-[414px]:grid-cols-1 max-[552px]:py-2  max-[414px]:border-b  border-[rgba(70,163,88,0.5)] pr-4 max-[590px]:pr-0  max-[552px]:gap-5 items-center ">
      <div className="flex items-center gap-2 max-[870px]:col-span-">
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
      <div className=" max-[552px]:hidden">
        <p className="text-[#727272] font-medium ">
          ${props?.price?.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-3 max-[552px]:hidden">
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
      <div className="flex items-center justify-between max-[552px]:hidden">
        <p className="text-[#46a358] font-bold ">
          $ {(props.price! * props.count!).toFixed(2)}
        </p>
        <div onClick={() => dispatch(deleteCart({ id: props._id }))}>
          <TbTrash className="text-[#727272]" size={20} />
        </div>
      </div>
      <div className="max-[552px]:grid grid-cols-2 max-[414px]:grid-cols-[1fr_1fr_1.7fr]  gap-y-2 w-full hidden ">
        <div className=" ">
          <p className="text-[#727272] font-medium ">
            ${props?.price?.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={() => dispatch(decrement({ id: props._id }))}
            className="bg-[#46a358] cursor-pointer h-5 w-5 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
          >
            <MinusOutlined />
          </div>
          <span>{props?.count}</span>
          <div
            onClick={() => dispatch(increment({ id: props._id }))}
            className="bg-[#46a358] cursor-pointer h-5 w-5 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full"
          >
            <PlusOutlined />
          </div>
        </div>
        <div className="flex items-center justify-between col-span-2 max-[414px]:col-span-1 max-[414px]:pl-5  max-[414px]:pr-0 pr-[30%] max-[481px]:pr-[20%]">
          <p className="text-[#46a358] font-bold  text-nowrap">
            $ {(props.price! * props.count!).toFixed(2)}
          </p>
          <div onClick={() => dispatch(deleteCart({ id: props._id }))}>
            <TbTrash className="text-[#727272]" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
