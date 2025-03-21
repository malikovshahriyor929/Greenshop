import Footer from "../footer";
import Path from "./path";
import Card from "./cardForShop";
import Total from "./total";
import { useReduxSelector } from "../../hooks/useRedux";
import { Empty } from "antd";

const ShopComponents = () => {
  let { product } = useReduxSelector((state) => state.ShopSlice);
  console.log(product);
  

  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px] ">
        <Path />
        <div className="flex relative max-[870px]:flex-col gap-4 items-start mb-10 ">
          <div className="w-full">
            <div className="text-[#3d3d3d] grid grid-cols-[2fr_1fr_1fr_1fr]  border-b py-3 border-[rgba(70,163,88,0.5)] ">
              <p>Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <div>
              {product.map((value) => (
                <div key={value._id}>
                  <Card {...value}  />
                </div>
              ))}
             <div className="flex items-center pt-24 max-[870px]:py-0 justify-center">
             {!product.length&& <Empty/>}
             </div>
            </div>
          </div>
          <div className="w-[430px] sticky top-0 max-[1000px]:w-[300px]  max-[870px]:w-full">
            <Total params={product} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopComponents;
