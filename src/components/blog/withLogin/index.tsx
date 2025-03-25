import { Form, Input } from "antd";
import { useSearchParams } from "react-router-dom";
import Button from "../../../shared/generics/btn";

const WithLogin = () => {
  let [_, setParams] = useSearchParams({ search: "" });
  let finish = (e: any) => {
    if (e == undefined) {
      setParams("");
    }
    setParams(e);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl mx-auto py-5 font-bold">My Feed</h1>
      <Form onFinish={finish} className=" flex items-center gap-5 ">
        <Form.Item name="search" className="w-full">
          <Input placeholder="Search posts" />
        </Form.Item>
        <button type="submit">
          <Button y={6} styles="w-fit *:flex text-nowrap ">
            🔍 Search
          </Button>
        </button>
      </Form>
    </div>
  );
};

export default WithLogin;
