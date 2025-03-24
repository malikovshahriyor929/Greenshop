import {
  EllipsisOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { BlogPosts } from "../../../@types";
import { useNavigate } from "react-router-dom";
import { BlogView } from "../../../hooks/useQueryHandler/useQueryAction";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { renderView } from "../../../redux/cardViewSlice";

const Posts = () => {
  let { data } = useQueryHandler({
    pathname: "posts",
    url: "user/blog",
    params: {
      search: "",
    },
  });
  let dispatch = useReduxDispatch()
  // console.log(data);
  let { mutate } = BlogView();
   let setView = (id: string) => {
    //user/blog/view
    mutate({ _id: id });
  };

  let navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-5 my-10">
      {data?.map((value: BlogPosts) => (
        <Card
          key={value._id}
          onClick={() => {
            navigate(`/blogs/${value.created_by}`);
            setView(value?._id);
            dispatch(renderView(value.views))
          }}
          actions={[
            <div className=" flex items-center justify-center gap-2">
              <EyeOutlined key="view" />
              <p>{value?.views}</p>
            </div>,
            <SettingOutlined key="setting" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          className=" flex flex-col justify-between"
        >
          <Card.Meta
            title={value?.title}
            description={
              <>
                <p>{value?.short_description.slice(0, 140)}...</p>
                </>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default Posts;
