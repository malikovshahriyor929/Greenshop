import Footer from "../footer";
import Path from "./path";
import Card from "./cardForShop";
import Total from "./total";

const ShopComponents = () => {
  
  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px] ">
        <Path />
        <div className="flex ">
          <div className="w-full">
            <div className="text-[#3d3d3d] grid grid-cols-[2fr_1fr_1fr_1fr] border-b py-3 border-[rgba(70,163,88,0.5)] ">
              <p>Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <div>
              <Card />
            </div>
          </div>
          <div className="w-[430px] bg-red-500">
            <Total />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopComponents;
