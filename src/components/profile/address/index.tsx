import { Form, Input } from "antd";
import Button from "../../../shared/generics/btn";
import CookiesInfo from "../../../shared/generics/cookie";
import { AddressMutation } from "../../../hooks/useQueryHandler/useQueryAction";

const Address = () => {
  let { getCookie, setCookie } = CookiesInfo();
  let id = getCookie("user")?._id;
  const defaultUserData = {
    _id: id,
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    country: "",
    town: "",
    street_address: "",
    state: "",
    zip: "",
  };
  let { mutate, isError } = AddressMutation();
  const userData = getCookie("user") || defaultUserData;
  const handleChange = async (formValue: object) => {
    mutate({ ...formValue, _id: id });
    if (!isError) {
      let datas = { ...getCookie("user"), ...formValue };
      setCookie("user", datas);
    }
  };
  return (
    <div className=" mt-6 ">
      <Form
        onFinish={handleChange}
        layout="vertical"
        className="grid grid-cols-2  max-[450px]:grid-cols-1  gap-5 items-center"
        initialValues={userData}
      >
        <Form.Item
          label="First name"
          name="name"
          rules={[{ required: true, message: "Please input your name !" }]}
        >
          <Input placeholder="Name" type="text" />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="surname"
          rules={[{ required: true, message: "Please input your surname !" }]}
        >
          <Input placeholder="Last Name" type="text" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email !" }]}
        >
          <Input placeholder="Email" type="text" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            { required: true, message: "Please input your phone_number !" },
          ]}
        >
          <Input addonBefore="+998" placeholder="Phone Number" type="text" />
        </Form.Item>
        <Form.Item
          label="country"
          name="country"
          rules={[{ required: true, message: "Please input your country !" }]}
        >
          <Input placeholder="country" type="text" />
        </Form.Item>
        <Form.Item
          label="town"
          name="town"
          rules={[{ required: true, message: "Please input your town !" }]}
        >
          <Input placeholder="town" type="text" />
        </Form.Item>
        <Form.Item
          label="state"
          name="state"
          rules={[{ required: true, message: "Please input your state !" }]}
        >
          <Input placeholder="state" type="text" />
        </Form.Item>
        <Form.Item
          label="street_address"
          name="street_address"
          rules={[
            { required: true, message: "Please input your street_address !" },
          ]}
        >
          <Input placeholder="street_address" type="text" />
        </Form.Item>
        <Form.Item
          label="zip"
          name="zip"
          rules={[{ required: true, message: "Please input your zip code !" }]}
        >
          <Input placeholder="zip code" type="text" />
        </Form.Item>

        <button type="submit" className="w-fit mt-auto ">
          <Button x={20} y={8}>
            Save Changes
          </Button>
        </button>
      </Form>
    </div>
  );
};

export default Address;
