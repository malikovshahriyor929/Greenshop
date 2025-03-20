import { Link, useNavigate } from "react-router-dom";

const Path = () => {
  let navigate = useNavigate();

  return (
    <div className="py-5">
      <p className="text-[#3d3d3d]  cursor-pointer ">
        <Link to={"/"} className="font-semibold  ">
          Home
        </Link>{" "}
        <span
          className="font-semibold  "
          onClick={() => {
            navigate(-1);
          }}
        >
          / Shop
        </span>
        <span
          className="font-semibold  "
          onClick={() => {
            navigate(-1);
          }}
        >
          / Shopping Cart
        </span>
      </p>
    </div>
  );
};

export default Path;
