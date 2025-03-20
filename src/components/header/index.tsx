import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderItem from "./headerItem";

import logo from "../../shared/assets/svg/Logo (2).svg";
import cart from "../../shared/assets/svg/cart.svg";
import search from "../../shared/assets/svg/search.svg";
import logIn from "../../shared/assets/svg/login.svg";
import filter from "../../shared/assets/svg/filter.svg";

import { BiSearch } from "react-icons/bi";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setModalVisibilty } from "../../redux/modalSlice";
import { Badge, Drawer } from "antd";
import { useState } from "react";
import CategorySide from "../catecory/category";

const Header = () => {
  let navigate = useNavigate();

  let [filterBtn, setFilterBtn] = useState(false);
  let { pathname } = useLocation();
  let user = JSON.parse(localStorage.getItem("user") as string);
  let dispatch = useReduxDispatch();
  let {product} = useReduxSelector(state=>state.ShopSlice)
  return (
    <div>
      <div className="w-[90%] mx-auto max-w-[1440px]  max-[600px]: pt-5 max-[600px]:border-none border-b border-[rgba(70,163,88,0.5)]">
        <div className="flex   justify-between max-[600px]:hidden">
          <Link to={"/"}>
            <img src={logo} className="max-[640px]:max-w-[150px]" alt="" />
          </Link>
          <div className="flex   gap-5">
            <Link to={"/"}>
              <p
                className={`text-[#3d3d3d] ${
                  pathname == "/" || pathname == "/"
                    ? " font-bold border-b-4"
                    : "font-normal "
                } w-fit border-[#46a358] pb-6 max-[640px]:pb-4`}
              >
                Home
              </p>
            </Link>
            <Link to={"/blogs"}>
              <p
                className={`text-[#3d3d3d] ${
                  pathname == "/blogs"
                    ? " font-bold border-b-4 border-[#46a358]"
                    : "font-normal "
                } w-fit pb-6 max-[640px]:pb-4`}
              >
                Blogs
              </p>
            </Link>
          </div>
          <div className=" flex items-center gap-6 pb-4 max-[640px]:pb-3">
            <img src={search} alt="" />
            <button onClick={() => navigate(`/shopping_cart`)}>
              <Badge count={product.length}>
                <img src={cart} alt="" />
              </Badge>
            </button>
            <button
              onClick={() => dispatch(setModalVisibilty())}
              className="bg-[#46a358] rounded-lg px-2 py-1 flex  gap-1 text-white "
            >
              {user ? (
                user.name
              ) : (
                <>
                  <img src={logIn} alt="" />
                  Login
                </>
              )}
            </button>
          </div>
        </div>

        {/* responsive after 600px */}
        <div className=" hidden items-center gap-4  max-[600px]:flex ">
          <form className="bg-[#f8f8f8] rounded-lg w-full p-3 flex items-center gap-4">
            <BiSearch className=" text-[#A5A5A5]" size={25} />
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Find your plants"
            />
          </form>
          <div
            onClick={() => setFilterBtn(!filterBtn)}
            className="bg_of_filter rounded-lg p-3 w-fit"
          >
            <img src={filter} className="" alt="" />
          </div>
          <Drawer
            title="Filter"
            onClose={() => setFilterBtn(!filterBtn)}
            open={filterBtn}
          >
            <CategorySide />
          </Drawer>
        </div>
      </div>

      <div>
        <HeaderItem />
      </div>
    </div>
  );
};

export default Header;
