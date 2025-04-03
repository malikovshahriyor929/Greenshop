import Button from "../../shared/generics/btn";
import { Form, Input } from "antd";
import { Join_NewsMutation } from "../../hooks/useQueryHandler/useQueryAction";

import logo from "../../shared/assets/svg/Logo (2).svg";
import flower1 from "../../shared/assets/svg/flower1.svg";
import flower2 from "../../shared/assets/svg/flower2.svg";
import flower3 from "../../shared/assets/svg/flower3.svg";
import paymentType from "../../shared/assets/svg/paymentType.svg";

import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  let { mutate } = Join_NewsMutation();
  let join = (formValue: object) => {
    mutate(formValue);
  };
  return (
    <div className="w-[90%] mx-auto max-w-[1440px] max-[600px]:mb-20 ">
      <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr] max-[940px]:grid-cols-[1fr_1.2fr] max-[450px]:grid-cols-1 gap-5 p-5 bg-[#fbfbfb] ">
        <div>
          <img src={flower1} alt="" />
          <p className="text-[#3d3d3d] text-[17px] font-bold ">Garden Care</p>
          <p className="text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <img src={flower2} alt="" />
          <p className="text-[#3d3d3d] text-[17px] font-bold ">
            Plant Renovation
          </p>
          <p className="text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <img src={flower3} alt="" />
          <p className="text-[#3d3d3d] text-[17px] font-bold ">
            Watering Graden
          </p>
          <p className="text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col justify-between  gap-3  ">
          <p className="text-[#3d3d3d] text-[17px] font-bold rounded-l-none ">
            Would you like to join newsletters?
          </p>
          <Form onFinish={join} className="flex *:!w-full   ">
            <div className="!flex  w-full bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.06)] ">
              <Form.Item className="w-full" name="email">
                <Input
                  className="!w-full !bg-red-500 !outline-none !
                  my-auto !p-2 !border-none !rounded-l-lg"
                  placeholder="enter your email address..."
                />
              </Form.Item>
              <button type="submit" className="bg-[#46a358] !rounded-r-lg rounded-l-none cursor-pointer  max-[530px]:!p-[8px_10px] ">
                <Button
                  x={20}
                  // y={8}
                  styles="!rounded-r-lg rounded-l-none cursor-pointer  max-[530px]:!p-[8px_10px]  "
                >
                  Join
                </Button>
              </button>
            </div>
          </Form>
          <p className="text-[13px] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="bg-[rgba(70,163,88,0.1)] grid gap-5 p-5 grid-cols-[1fr_1.2fr_1fr_1.5fr]  max-[940px]:grid-cols-[1fr_1.2fr] max-[450px]:grid-cols-1">
        <img src={logo} alt="" />
        <div className="flex items-center gap-1">
          <IoLocationOutline size={30} className="text-[#46A358] !font-bold" />
          <p className="text-[#3d3d3d] text-[14px] max-[510px]:text-[12px]">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IoMailOutline size={20} className="text-[#46A358] !font-bold" />
          <a
            href="mailto:contact@greenshop.com"
            className="text-[#3d3d3d] text-[14px]"
          >
            contact@greenshop.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <BsTelephone size={20} className="text-[#46A358] !font-bold" />
          <a
            href="tel:+88 01911 717 490"
            className="text-[#3d3d3d] text-[14px]"
          >
            +88 01911 717 490
          </a>
        </div>
      </div>
      <div className="bg-[#fbfbfb] p-5  grid grid-cols-[1fr_1fr_1fr_1.5fr] max-[750px]:grid-cols-[1fr_1.2fr] max-[406px]:grid-cols-1 max-[750px]:gap-5  max-[406px]:*:items-center">
        <div className=" flex flex-col gap-2">
          <h2 className="text-[18px] text-[#3d3d3d] font-bold mb-1">
            My Account
          </h2>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            My Account
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Our stores
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Contact us
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Career
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Specials
          </a>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-[18px] text-[#3d3d3d] font-bold mb-1">
            Help & Guide
          </h2>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Help Center
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            How to Buy
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Shipping & Delivery
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Product Policy
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            How to Return
          </a>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-[18px] text-[#3d3d3d] font-bold mb-1">
            Categories
          </h2>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            House Plants
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Potter Plants
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Seeds
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Small Plants
          </a>
          <a href="#" className="text-[#3d3d3d] text-[14px]">
            Accessories
          </a>
        </div>
        <div className="flex flex-col gap-4   ">
          <h2 className="text-[18px] text-[#3d3d3d] font-bold mb-1">
            Social Media
          </h2>
          <div className="flex items-center gap-2 *:p-1 ">
            <div className="border-2 text-[#46A358] border-[rgba(70,163,88,0.2)] rounded-lg  ">
              <TiSocialFacebook size={20} />
            </div>
            <div className="border-2 text-[#46A358] border-[rgba(70,163,88,0.2)] rounded-lg  ">
              <FaInstagram size={20} />
            </div>
            <div className="border-2 text-[#46A358] border-[rgba(70,163,88,0.2)] rounded-lg  ">
              <FaTwitter size={20} />
            </div>
            <div className="border-2 text-[#46A358] border-[rgba(70,163,88,0.2)] rounded-lg  ">
              <FaLinkedinIn size={20} />
            </div>
            <div className="border-2 text-[#46A358] border-[rgba(70,163,88,0.2)] rounded-lg  ">
              <FaYoutube size={20} />
            </div>
          </div>
          <h2 className="text-[18px] text-[#3d3d3d] font-bold mb-1">
            We accept
          </h2>
          <img className="w-fit" src={paymentType} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
