import { useReduxSelector } from "../../../hooks/useRedux";
import CardForAddress from "./card";
import paypal from "../../../shared/assets/svg/paymentType.svg";
import { Empty, Radio } from "antd";
let options = [
  { value: "online", label: <img src={paypal} alt="" /> },
  { value: "bank", label: "Dorect bank transfer" },
  { value: "cash", label: "Cash on delivery" },
];
const TotalForAddress = ({
  setSelectedPayment,
  setTotalPrice,
}: {
  setSelectedPayment: any;
  setTotalPrice: any;
}) => {
  let { product } = useReduxSelector((state) => state.ShopSlice);
  let total = product?.reduce(
    (acc, value) => acc + value.price! * value.count!,
    0
  );
  setTotalPrice(total)
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[17px] text-[#3d3d3d] font-bold mb-1 ">Your Order</h3>
      <div className="border-b border-[rgba(70,163,88,0.5)] flex items-center justify-between py-2 ">
        <p className="text-[#3d3d3d] font-medium ">Products</p>
        <p className="text-[#3d3d3d] font-medium ">Subtotal</p>
      </div>
      {product.map((value) => (
        <div key={value._id}>
          <CardForAddress params={value} />
        </div>
      ))}
      {!product.length && <Empty />}
      <div className="flex flex-col gap-5 max-[800px]:flex-row max-[800px]:items-center max-[500px]:flex-col ">
        <div className="max-[800px]:w-full">
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center text-[#3d3d3d]  justify-between">
              <p className="">Subtotal</p>
              <p className="font-medium text-[18px] ">$ {total.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between text-[#3d3d3d]  ">
              <p>Coupon Discount</p>
              <p>(-)00.00</p>
            </div>
            <div className="flex items-center text-[#3d3d3d]  justify-between">
              <p className="">Shiping</p>
              <p className="font-medium text-[18px] ">$ 0</p>
            </div>
          </div>
          <div className="flex items-center text-[#3d3d3d] mt-5  justify-between">
            <p className="">Total</p>
            <p className="font-bold text-[#46a358] text-[18px] ">
              $ {total.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-[800px]:w-full   ">
          <div className="flex items-center     ">
            <Radio.Group
              className={`!flex !flex-col *:!flex  !gap-3 *:rounded-lg *:!p-2 *:items-center  w-full *:border *:border-[#46a358]`}
              id="paypal"
              options={options}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalForAddress;
