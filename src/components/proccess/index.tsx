import { useState } from "react";
import Footer from "../footer";
import AddressInfo from "./adressInfo/inedx";
import Path from "./pathForAddress";
import Total from "./totalForAddress";
import { Form, message } from "antd";
import Button from "../../shared/generics/btn";

const ProccessComponents = () => {
  // let { data } = useQueryHandler({
  //   pathname: "order",
  //   url: "user/address",
  // });
  // console.log(data);
  const [form] = Form.useForm();
  const [selectedPayment, setSelectedPayment] = useState(null);
  // let [addressInfo, setAddressInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   country: "",
  //   city: "",
  //   street: "",
  //   state: "",
  //   zip: "",
  //   phone: "",
  //   email: "",
  // });
  // console.log(form);
  const onFinish = (values: any) => {
    if (!selectedPayment) {
      message.error("Please select a payment method!");
      return;
    }

    // Collecting form data & selected payment method
    const orderDetails = {
      ...values,
      paymentMethod: selectedPayment,
      totalAmount: 473.88, // Assuming fixed total
    };

    console.log("Order Details:", orderDetails);
    // message.success("Order placed successfully!");
  };

  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px]">
        <Path />
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              first_name: "John",
              last_name: "Doe",
              address: "USA",
              email: "johndoe@example.com",
            }}
            className="flex max-[800px]:flex-col max-[800px]:gap-14 relative gap-4 items-start mb-10 max-[577px]:gap-5 "
          >
            <div className="w-full">
              <AddressInfo form={form} />
            </div>
            <div className=" w-[530px] max-[800px]:w-full">
              <Total setSelectedPayment={setSelectedPayment} />
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
