import Posts from "./posts";
import WithLogin from "./withLogin";
import WithoutLogin from "./withoutLogin";

const BlogComponents = () => {
  let local = localStorage.getItem("token");
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto">
      {local ? <WithLogin /> : <WithoutLogin />}
      <Posts />
    </div>
  );
};

export default BlogComponents;
