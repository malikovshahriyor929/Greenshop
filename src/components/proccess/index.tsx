import { useState } from "react";
import Footer from "../footer";
import AddressInfo from "./adressInfo/inedx";
import Path from "./pathForAddress";
import Total from "./totalForAddress";
import { Form, message } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setModalVisibilty } from "../../redux/modalSlice";
import { orderDataMutation } from "../../hooks/useQueryHandler/useQueryAction";
import OrderDetails from "./modal/orderDetails";

const ProccessComponents = () => {
  let [details, setDetails] = useState({});
  const [form] = Form.useForm();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0) || 0;
  let locale = JSON.parse(localStorage.getItem("user") as string);
  let { product } = useReduxSelector((state) => state.ShopSlice);
  let { mutate, isSuccess } = orderDataMutation();
  let dispatch = useReduxDispatch();

  const onFinish = (values: any) => {
    if (!localStorage.getItem("token")) {
      message.error("Please log in !");
      dispatch(setModalVisibilty());
      return;
    }
    if (!selectedPayment) {
      message.error("Please select a payment method!");
      return;
    }

    mutate({
      shop_list: product,
      billing_address: { name: values.name, surname: values.surname },
      extra_shop_info: {
        total: totalPrice,
        method: selectedPayment,
      },
    });

    setDetails({
      shop_list: product,
      billing_address: { name: values.name, surname: values.surname },
      extra_shop_info: {
        total: totalPrice,
        method: selectedPayment,
      },
    });
  };
  let { ModalVisibiltyForOrder } = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px]">
        <Path />
        <div>{ModalVisibiltyForOrder && <OrderDetails props={details} />}</div>
        {/* <div>{ <OrderDetails props={details} />}</div> */}
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              address: "USA",
              name: locale?.name,
              surname: locale?.surname,
              ...locale?.billing_address,
            }}
            className="flex max-[800px]:flex-col max-[800px]:gap-14 relative gap-4 items-start mb-10 max-[577px]:gap-5 "
          >
            <div className="w-full">
              <AddressInfo />
            </div>
            <div className=" w-[530px] max-[800px]:w-full">
              <Total
                setTotalPrice={setTotalPrice}
                setSelectedPayment={setSelectedPayment}
              />
              <button
                type="submit"
                className="w-full py-2 my-4 flex flex-col items-center bg-[#46a358] rounded-lg px-2   text-white"
              >
                Place Order
              </button>
            </div>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProccessComponents;
