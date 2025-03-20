import AboutFlower from "../../components/aboutFlower";
import CardCategory from "../../components/catecory/cardCategory";
import CategorySide from "../../components/catecory/category";
import Showcase from "../../components/showcase";

const Home = () => {
  return (
    <div>
      <Showcase />
      <div className="flex gap-5 relative max-[600px]:mb-20 w-[93%] mt-5 mx-auto max-w-[1440px] ">
        <div className="w-[300px] max-[600px]:hidden">
          <CategorySide />
        </div>
        <div className="w-full">
          <CardCategory />
        </div>
      </div>
      <AboutFlower />
    </div>
  );
};

export default Home;
