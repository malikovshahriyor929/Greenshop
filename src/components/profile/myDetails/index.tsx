import {  Form, Input } from "antd";

const MyDeaitls = () => {
let handleChange =(formValue:object)=>{
console.log(formValue);

}
  return (
    <div className=" w-full ">
      <Form onFinish={handleChange} layout="vertical" className="grid grid-cols-2 gap-5">
        <Form.Item label="First name" name="name" rules={[{ required: true,message: 'Please input your username!' }]}>
          <Input placeholder="Name" type="text" />
        </Form.Item>
        <Form.Item label="Last name" name="surname" rules={[{ required: true,message: 'Please input your username!' }]}>
          <Input placeholder="Last Name" type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true,message: 'Please input your username!' }]}>
          <Input placeholder="Email" type="text" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone_number" rules={[{ required: true,message: 'Please input your username!' }]}>
          <Input placeholder="Phone Number" type="text" />
        </Form.Item>
        <Form.Item label="nickname" name="username" rules={[{ required: true,message: 'Please input your username!' }]}>
          <Input placeholder="nickname" type="text" />
        </Form.Item>
 
      </Form>
    </div>
  );
};

export default MyDeaitls;
