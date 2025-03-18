import CardCategory from "../../components/catecory/cardCategory";
import CategorySide from "../../components/catecory/category";
import Showcase from "../../components/showcase";

const Home = () => {
  return (
    <div>
      <Showcase />
      <div className="flex gap-5 w-[93%] mt-5 mx-auto max-w-[1440px] ">
        <div className="w-[300px]">
          <CategorySide />
        </div>
        <div className="w-full">
          <CardCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
