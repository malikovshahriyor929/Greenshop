import {  Form, Input, Upload, UploadProps } from "antd";
import CookiesInfo from "../../../shared/generics/cookie";
import Button from "../../../shared/generics/btn";
import { AccountDetails } from "../../../hooks/useQueryHandler/useQueryAction";
import { useState } from "react";

const MyDeaitls = () => {
  let { getCookie, setCookie } = CookiesInfo();
  let id = getCookie("user")?._id;
  let { mutate } = AccountDetails();
  const [_, setImageUrl] = useState(
    "https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg"
  );

  const defaultUserData = {
    _id: "",
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    username: "",
    profile_photo: "",
  };
  const handleChange = async (formValue: any) => {
    // console.log(formValue.profile_photo.file.response?.url );
    setImageUrl(formValue.profile_photo[0].thumbUrl);
    mutate({
      ...formValue,
      _id: id,
      profile_photo: formValue.profile_photo[0].thumbUrl,
    });
      let datas = { ...getCookie("user"), ...formValue };
      setCookie("user", datas);
  };
  const uploadProps: UploadProps = {
    beforeUpload: () => false,
  };
  const userData = getCookie("user") || defaultUserData;
  return (
    <div className=" w-full mt-6 ">
      {/* <Avatar src={imageUrl} /> */}
      <Form
        onFinish={handleChange}
        layout="vertical"
        className="grid grid-cols-2 max-[450px]:grid-cols-1 gap-5 items-center"
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
          label="nickname"
          name="username"
          rules={[{ required: true, message: "Please input your username !" }]}
        >
          <Input placeholder="nickname" type="text" />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Image</span>}
          name="profile_photo"
          valuePropName="image"
          getValueFromEvent={(e) => e && e.fileList}
          rules={[{ required: true }]}
        >
          <Upload {...uploadProps} listType="picture">
            <Button>Upload</Button>
          </Upload>
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

export default MyDeaitls;
