import aboutFLower1 from "../../shared/assets/svg/aboutFlower.svg";
import aboutFLower2 from "../../shared/assets/svg/aboutFlower2.svg";
import Button from "../../shared/generics/btn";

const AboutFlower = () => {
  return (
    <div className="w-[90%] mx-auto max-w-[1440px] *:rounded-lg max-[1173px]:*:flex-col max-[1173px]:**:items-center max-[1173px]:**:text-center max-[600px]:mt-0 grid grid-cols-2 max-[434px]:grid-cols-1 gap-5 my-10">
      <div className="flex items-center p-4 bg-[#fbfbfb] gap-4  ">
        <img src={aboutFLower1} className="-mt-5 " alt="" />
        <div className="flex flex-col gap-2 items-end text-end">
          <p className="text-[18px] font-black text-[#3d3d3d]">
            Summer cactus & succulents
          </p>
          <p className="text-[14px] text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <div className="w-fit">
            <Button>Find More</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-[#fbfbfb] gap-4  ">
        <img src={aboutFLower2} className="-mt-5" alt="" />
        <div className="flex flex-col gap-2 items-end text-end">
          <p className="text-[18px] font-black text-[#3d3d3d]">
            Styling Trends & much more
          </p>
          <p className="text-[14px] text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <div className="w-fit">
            <Button>Find More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFlower;
