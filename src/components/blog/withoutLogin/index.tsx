import Button from "../../../shared/generics/btn";
import Emoji from "./emoji";

const WithoutLogin = () => {
  return (
    <div >
      <div>
        <Emoji />
        <h2 className="text-[#3d3d3d] text-8xl font-bold min-[500px]:leading-[120px]   text-center mt-5 ">
          Monetize your content with{" "}
          <span className="text-[#46a358]">GreenShop</span>
        </h2>
        <p className="text-[#3d3d3d] text-[26px] text-center font-semibold  mt-5">
          Greenshop - a platform for buying and selling, publishing and
          monetizing all types of flowers: acrticles, notes, video, photos,
          podcasts or songs.
        </p>
        <Button x={20} y={10} styles="w-fit mx-auto mt-5 ">
          Join Greenshop
        </Button>
      </div>
    </div>
  );
};

export default WithoutLogin;
