import { Divider, Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setModalVisibiltyForOrder } from "../../../../redux/modalSlice";

import thanks from "../../../../shared/assets/svg/thank-you 1 (1).svg";

const OrderDetails = ({ props }: { props: object }) => {
  // shop_list: product,
  // billing_address: { name: values.name, surname: values.surname },
  // extra_shop_info: {
  //   total: totalPrice,
  //   method: selectedPayment,
  // },
  console.log(props);

  let { ModalVisibiltyForOrder } = useReduxSelector(
    (state) => state.modalSlice
  );
  let dispatch = useReduxDispatch();
  return (
    <div>
      <Modal
        footer={false}
        onCancel={() => dispatch(setModalVisibiltyForOrder())}
        open={true}
        width={700}
      >
        <div className="flex  flex-col items-center gap-3 pt-3">
          <img src={thanks} alt="" />
          <p className="text-[#727272]">Your order has been received</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>
            <p className="text-[#727272] text-[14px]">Order Number</p>
            <p>19586687</p>
          </div>
          <Divider type="vertical" />
          <div>
            <p className="text-[#727272] text-[14px]">Date</p>
            <p>15 Sep, 2021</p>
          </div>
          <Divider type="vertical" />

          <div>
            <p className="text-[#727272] text-[14px]">Total</p>
            <p>19586687</p>
          </div>
          <Divider type="vertical" />

          <div>
            <p className="text-[#727272] text-[14px]">Payment Method</p>
            <p>19586687</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderDetails;
