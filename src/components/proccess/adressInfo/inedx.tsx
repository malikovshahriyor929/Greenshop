import { Form, Input } from "antd";

const AddressInfo = ({
  form,
}: {
  form: any;
}) => {
  // console.log(setAddressInfo());

  // let addressInfo = (formValue: any) => {
  //   console.log(formValue);
  // };
  return (
    <div>
      <p className="text-[17px] text-[#3d3d3d] font-bold mb-5 ">
        Billing Address
      </p>
      <div>
        <div
          className="grid grid-cols-2 gap-5 gap-y-14 max-[400px]:grid-cols-1 max-[577px]:gap-y-2"
        >
          <Form.Item
            layout="vertical"
            label="First Name"
            name="first_name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Last Name"
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Country / Region"
            name="country_region"
            rules={[
              {
                required: true,
                message: "Please input your Country / Region!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Town / City"
            name="town_city"
            rules={[
              { required: true, message: "Please input your Town / City!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Street Address"
            name="address"
            rules={[
              { required: true, message: "Please input your street address!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your State!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Zip"
            name="zip"
            rules={[{ required: true, message: "Please input your Zip!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Email address"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Phone Number"
            name="phone_number"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
// {
//   "_id": "64bebc1e2c6d3f056a8c85b7",
//   "name": "User",
//   "surname": "Userov",
//   "country": "Uzbekistan",
//   "town": "Namangan",
//   "street_address": "Muruvvat",
//   "state": "Uchkurgan",
//   "zip": "190001",
//   "email": "user@gmail.com",
//   "phone_number": "+998777771565"
// }

export default AddressInfo;
