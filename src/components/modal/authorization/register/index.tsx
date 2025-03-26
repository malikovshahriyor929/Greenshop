import { Divider, Form, Input } from "antd";
import { FieldType } from "../../../../@types";

import google from "../../../../shared/assets/svg/google.svg";
import face from "../../../../shared/assets/svg/faceBook.svg";
import {
  RegisterWithGoogle,
  useRegiterMutation,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";

const Register = () => {
  let { mutate, isPending } = useRegiterMutation();
  let { mutate: registers } = RegisterWithGoogle();
  let register = (e: FieldType) => {
    mutate(e);
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="text-[13px] text-[#3d3d3d]  ">
          Enter your email and password to register.
        </p>
        <Form onFinish={register} className="**:pb-1">
          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item<FieldType>
            name="surname"
            rules={[{ required: true, message: "Please input your surname!" }]}
          >
            <Input placeholder="Surname" />
          </Form.Item>
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="almamun_uxui@outlook.com" />
          </Form.Item>
          <Form.Item<FieldType>
            name="phone_number"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input placeholder="+99890000000" />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="***********" />
          </Form.Item>
          <p className="text-[14px] text-[#46a358] text-end">
            Forgot Password?
          </p>

          <button
            type="submit"
            className="bg-[#46a358] rounded-lg  py-2 w-full font-bold text-white mt-4"
          >
            {isPending ? <LoadingOutlined /> : "Register"}
          </button>
        </Form>
        <div>
          <Divider>Or register with</Divider>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => registers()}
            className="text-sm text-[#727272] font-medium border border-[#eaeaea] rounded-lg py-3 flex items-center gap-4 w-full justify-center "
          >
            <img src={google} alt="" />
            Continue with Google
          </button>
          <button className="text-sm text-[#727272] font-medium border border-[#eaeaea] rounded-lg py-3 flex items-center gap-4 w-full justify-center ">
            <img src={face} alt="" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
