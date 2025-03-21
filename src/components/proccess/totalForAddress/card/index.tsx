import { Image } from "antd";
import { CardType } from "../../../../@types";

const CardForAddress = ({ params }: { params: CardType }) => {
  return (
    <div className="flex justify-between items-center  bg-[#fbfbfb] ">
      <div className="flex items-center gap-2">
        <Image
          src={params?.main_image}
          className="!h-[60px] !w-[60px] p-1 rounded-lg"
          alt=""
        />
        <div>
          <p className="text-[#3d3d3d] font-medium">{params?.title}</p>
          <p className="text-[14px] text-[#a5a5a5] ">
            SKU:{" "}
            <span className="text-[#727272]">{params._id?.slice(0, 7)}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 max-[340px]:flex-col max-[340px]:gap-1 ">
      <p className="text-[14px] text-[#727272]">(x {params?.count})</p>
      <p className="text-[#46a358] font-bold text-nowrap ">
        $ {(params.price! * params.count!).toFixed(2)}
      </p>
      </div>
    </div>
  );
};

export default CardForAddress;
