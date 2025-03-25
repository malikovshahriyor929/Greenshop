import { Form, Input } from "antd";

const AddressInfo = () => {
  return (
    <div>
      <p className="text-[17px] text-[#3d3d3d] font-bold mb-5 ">
        Billing Address
      </p>
      <div>
        <div className="grid grid-cols-2 gap-5 gap-y-14 max-[400px]:grid-cols-1 max-[577px]:gap-y-2">
          <Form.Item
            layout="vertical"
            label="First Name"
            name="name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Last Name"
            name="surname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Country / Region"
            name="country"
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
            name="town"
            rules={[
              { required: true, message: "Please input your Town / City!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Street Address"
            name="street_address"
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
          {/* <Form.Item
            layout="vertical"
            label="Email address"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="text" />
          </Form.Item> */}
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



export default AddressInfo;
