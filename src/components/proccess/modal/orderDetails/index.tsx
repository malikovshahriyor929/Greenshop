import { Divider, Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setModalVisibiltyForOrder } from "../../../../redux/modalSlice";

import thanks from "../../../../shared/assets/svg/thank-you 1 (1).svg";
import CardForAddress from "../../totalForAddress/card";
import Button from "../../../../shared/generics/btn";
import { useNavigate } from "react-router-dom";

const OrderDetails = ({ props }: { props: any }) => {
  let { ModalVisibiltyForOrder } = useReduxSelector(
    (state) => state.modalSlice
  );
  let navigate = useNavigate();
  let dispatch = useReduxDispatch();
  return (
    <div>
      <Modal
        footer={false}
        onCancel={() => dispatch(setModalVisibiltyForOrder())}
        open={ModalVisibiltyForOrder}
        width={700}
      >
        <div className="">
          <div className="flex  flex-col items-center gap-3 pt-3 pb-2 border-b border-[rgba(70,163,88,0.2)]">
            <img src={thanks} alt="" />
            <p className="text-[#727272]">Your order has been received</p>
          </div>
          <div className="flex justify-between max-[565px]:grid grid-cols-2  items-center gap-2 py-3 border-b border-[rgba(70,163,88,0.2)]">
            <div>
              <p className="text-[#727272] text-[14px]">Order Number</p>
              <p className="text-[#727272] font-bold">19586687</p>
            </div>
            <Divider type="vertical" className="max-[565px]:!hidden" />
            <div>
              <p className="text-[#727272] text-[14px]">Date</p>
              <p className="text-[#727272] font-bold">15 Sep, 2021</p>
            </div>
            <Divider type="vertical" className="max-[565px]:!hidden" />

            <div>
              <p className="text-[#727272] text-[14px]">Total</p>
              <p className="text-[#727272] font-bold">
                $ {props?.extra_shop_info?.total}
              </p>
            </div>
            <Divider type="vertical" className="max-[565px]:!hidden" />
            <div>
              <p className="text-[#727272] text-[14px] max-[310px]:text-[12px]">
                Payment Method
              </p>
              <p
                className="text-[#727272] font-bold max-[310px]:text-[12px] 
               "
              >
                {props?.extra_shop_info?.method}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#3d3d3d] font-bold">Order Details</h2>
            <div className="text-[#3d3d3d] font-medium flex items-center justify-between ">
              <h2 className="">Products</h2>
              <h2>Qty</h2>
              <h2>Subtotal</h2>
            </div>
            {props?.shop_list?.map((value: any) => (
              <div key={value?._id}>
                <CardForAddress params={value} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-5 mt-5">
            <p className="">Shiping</p>
            <p className="text-[#3d3d3d] text-[18px] font-medium ">$16.00</p>
          </div>
          <div className="flex items-center justify-between px-5 mt-3 py-3 border-b border-[rgba(70,163,88,0.2)]">
            <p className="font-bold text-[#3d3d3d]   ">Total</p>
            <p className="text-[#46a358] text-[18px] font-bold">
              $ {props?.extra_shop_info?.total}
            </p>
          </div>
          <p className="text-[14px] text-[#727272] text-center py-3 ">
            Your order is currently being processed. You will receive an order{" "}
            <br />
            confirmation email shortly with the expected delivery date for your
            items.
          </p>
          <button
            onClick={() => {
              navigate("/profile/tracking"), localStorage.removeItem("product");
              localStorage.removeItem("coupon");
            }}
            className="flex items-center flex-col w-full"
          >
            <Button x={20} y={10}>
              Track your order
            </Button>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OrderDetails;
