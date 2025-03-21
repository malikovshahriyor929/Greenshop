import { Divider, Form, Input } from "antd";
import { FieldType } from "../../../../@types";

import google from "../../../../shared/assets/svg/google.svg";
import face from "../../../../shared/assets/svg/faceBook.svg";
import { LoginWithGoogle, useLoginMutation } from "../../../../hooks/useQueryHandler/useQueryAction";

import { LoadingOutlined } from "@ant-design/icons";

const LogIn = () => {
  let { mutate, isPending } = useLoginMutation();
  let {mutate:loginWithGoogle} = LoginWithGoogle()
  let login = (e: FieldType) => {
    mutate(e);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-[13px] text-[#3d3d3d]  ">
          Enter your username and password to login.
        </p>
        <Form onFinish={login} >
          <Form.Item<FieldType>
            name="email"
            className="*:pb-5"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="almamun_uxui@outlook.com" />
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
            {isPending ? <LoadingOutlined /> : "Login"}
          </button>
        </Form>
        <div>
          <Divider>Or login with</Divider>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={()=> loginWithGoogle()} className="text-sm text-[#727272] font-medium border border-[#eaeaea] rounded-lg py-3 flex items-center gap-4 w-full justify-center ">
            <img src={google} alt="" />
            Login with Google
          </button>
          <button className="text-sm text-[#727272] font-medium border border-[#eaeaea] rounded-lg py-3 flex items-center gap-4 w-full justify-center ">
            <img src={face} alt="" />
            Login with Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
