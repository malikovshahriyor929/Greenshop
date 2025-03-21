import { useNavigate } from "react-router-dom";
import Button from "../../../shared/generics/btn";
import { CardType } from "../../../@types";
// import useQueryHandler from "../../../hooks/useQueryHandler";
import { Form, Input } from "antd";
// import { useState } from "react";

const Total = ({ params }: { params: CardType[] }) => {
  //   let [cupon, setCupon] = useState("");
  let navigate = useNavigate();
  let total = params?.reduce(
    (acc, value) => acc + value.price! * value.count!,
    0
  );
  //   let { data, isLoading } = useQueryHandler({
  //     pathname: `total-${cupon}`,
  //     url: "features/coupon",
  //     params: {
  //       coupon_code: { cupon },
  //     },
  //   });
  //   if (!isLoading) {
  //     console.log(data, isLoading);
  //   }

  let appliedCupon = (formValue: string) => {
    // setCupon(formValue);
    console.log(formValue);
  };

  return (
    <div className="w-full">
      <p className="text-[18px] text-[#3d3d3d] font-bold pb-5 border-b border-[rgba(70,163,88,0.5)]">
        Cart Totals
      </p>
      <div className="mt-3">
        <p className="text-[14px] text-[#3d3d3d] mb-2 ">Coupon Apply</p>
        
        <Form
          onFinish={appliedCupon}
          className="!flex !border !items-center !rounded-lg !border-[#46a358] "
        >
          <Form.Item name="coupon_code" className="w-full">
            <Input
              className="!p-2 !*:placeholder:text-[#a5a5a5] !w-full !border-none !outline-none"
              type="text"
              placeholder="Enter coupon code here..."
            />
          </Form.Item>
          <button type="submit">
            <Button
              x={10}
              y={9}
              styles="cursor-pointer max-[530px]:!py-2 rounded-l-none rounded-r-md"
            >
              Apply
            </Button>
          </button>
        </Form>
      </div>

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
      {/* navigate prossecc page */}
      <div className="mt-5 ">
        <div onClick={()=>navigate("/shop/checkout")}>
          <Button y={8} styles=" flex items-center cursor-pointer flex-col">
            Proceed To Checkout
          </Button>
        </div>
        <button
          onClick={() => navigate("/shop/checkout")}
          className=" flex items-center flex-col cursor-pointer rounded-lg px-4 py-2 w-full gap-1 text-[#46a358]"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Total;
