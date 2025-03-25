import { Form, Input, Upload } from "antd";
import CookiesInfo from "../../../shared/generics/cookie";
import Button from "../../../shared/generics/btn";
import { AccountDetails } from "../../../hooks/useQueryHandler/useQueryAction";
import { useState } from "react";

const MyDeaitls = () => {
  let { getCookie, setCookie } = CookiesInfo();
  let id = getCookie("user")?._id;
  let { mutate, isError } = AccountDetails();
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(
    "https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg"
  );
  // const handleUploadChange = (info: any) => {
  //   if (info.file.status === "done") {
  //     console.log("File uploaded successfully:", info.file.response);

  //     const uploadedUrl = info.file.response?.url||""
  //     if (uploadedUrl) {
  //       setImageUrl(uploadedUrl);
  //     } else {
  //       const file = info.file.originFileObj;
  //       const reader = new FileReader();
  //       reader.onload = (e) => setImageUrl(e.target?.result as string);
  //       reader.readAsDataURL(file);
  //       console.log(file);

  //     }

  //     setFileList(info.fileList); // Update file list
  //   } else if (info.file.status === "error") {
  //     console.error("Upload failed:", info.file.response);
  //   }
  // };

  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      console.log("File uploaded successfully:", info.file.response);

      // Extract the URL from the response
      const uploadedUrl = info.file.response?.url || "";
      if (uploadedUrl) {
        setImageUrl(uploadedUrl);
      } else {
        console.error("No URL returned from server!");
      }
      setFileList(info.fileList);
    } else if (info.file.status === "error") {
      console.error("Upload failed:", info.file.response);
    }
  };
  const handlePreview = (file: any) => {
    const url = file.url || file.thumbUrl;
    window.open(url, "_blank");
  };

  const defaultUserData = {
    _id: "",
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    username: "",
    profile_photo: "",
  };
  const handleChange = async (formValue: object) => {
    // console.log(formValue.profile_photo.file.response?.url );
    mutate({ ...formValue, _id: id, profile_photo: imageUrl });
    if (!isError) {
      let datas = { ...getCookie("user"), ...formValue };
      setCookie("user", datas);
    }
  };
  const userData = getCookie("user") || defaultUserData;
  return (
    <div className=" w-full ">
      <Form
        onFinish={handleChange}
        layout="vertical"
        className="grid grid-cols-2 gap-5 items-center"
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
        {/* img */}
        <Form.Item
          label="profile img"
          name="profile_photo"
          rules={[{ required: true, message: "Please give your photo !" }]}
          className="cursor-pointer "
        >
          <Upload
            name="profile_photo"
            action="https://beckend-n14.onrender.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
            method="POST"
            listType="picture"
            data={{ type: "img" }}
            headers={{
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }}
            accept=".png,.jpg,.jpeg"
            onPreview={handlePreview}
            fileList={fileList}
            onChange={handleUploadChange}
          >
            <Button>Click to Upload</Button>
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
