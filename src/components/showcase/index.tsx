import Button from "../../shared/generics/btn";

import showcaseImage from "../../shared/assets/svg/showcaseFlower.svg";
import showSmall from "../../shared/assets/svg/showcaseSmall.svg";

const Showcase = () => {
    // ededed
  return (
    <div className="showbg w-[93%] p-5 max-[310px]:py-0 rounded-lg mt-5 mx-auto bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)] max-w-[1440px]">
      <div className="flex items-center justify-between  ">
        <div className="max-[500px]:flex flex-col gap-2 ">
          <p className="text-[14px] max-[390px]:text-[12px]  text-[#3d3d3d] font-medium">
            Welcome to GreenShop
          </p>
          <h2 className="text-[70px] max-[323px]:text-[18px] max-[390px]:text-[20px] max-[524px]:text-[24px] max-[1125px]:text-[50px] max-[870px]:text-[30px] text-[3d3d3d] uppercase font-black max-w-[600px]">
            Let’s Make a Better <span className="text-[#46a358]"> Planet</span>
          </h2>
          <p className="text-[14px] text-[#727272] max-[700px]:hidden ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <div className=" w-fit mt-8 max-[500px]:mt-0">
            <Button x={20} y={10} >SHOP NOW</Button>
          </div>
        </div>
        <div>
            <img className="max-[475px]:flex hidden max-[340px]:-mr-14 max-[320px]:min-w-[120px] ax-[320px]:min-w-[150px]" src={showSmall} alt="" />
          <img className=" max-[475px]:hidden max-[900px]:min-w-[250px] max-[640px]:!max-w-[200px] max-[640px]:min-w-[200px]" src={showcaseImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
