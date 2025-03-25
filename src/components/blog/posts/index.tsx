import {
  EllipsisOutlined,
  EyeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Card, Empty, Skeleton } from "antd";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { BlogPosts } from "../../../@types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BlogView } from "../../../hooks/useQueryHandler/useQueryAction";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { renderView } from "../../../redux/cardViewSlice";

const Posts = () => {
  let [params, _] = useSearchParams({ search: "" }) || "";

  let { data, isLoading } = useQueryHandler({
    pathname: `posts-${params}`,
    url: "user/blog",
    params: {
      search: params.get("search"),
    },
  });
  let dispatch = useReduxDispatch();
  let { mutate } = BlogView();
  let setView = (id: string) => {
    mutate({ _id: id });
  };

  let navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-4 max-[890px]:grid-cols-3 max-[690px]:grid-cols-2 max-[430px]:grid-cols-1 max-[600px]:mb-10 gap-5 my-10">
        {data?.map((value: BlogPosts) => (
          <Card
            key={value._id}
            onClick={() => {
              navigate(`/blogs/${value.created_by}`);
              setView(value?._id);
              dispatch(renderView(value.views));
            }}
            actions={[
              <div className=" flex items-center justify-center gap-2">
                <EyeOutlined key="view" />
                <p>{value?.views }</p>
              </div>,
              <HeartOutlined key="setting" />,
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
        {isLoading &&
          Array(15)
            .fill("1")
            .map((_, idx) => <Skeleton key={idx} />)}
      </div>
      {data?.length == 0 && <Empty className="mx-auto mb-10 " />}
    </>
  );
};

export default Posts;
