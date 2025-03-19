import { useParams } from "react-router-dom";
import useQueryHandler from "../../hooks/useQueryHandler";
import { Image, Rate } from "antd";
import Button from "../../shared/generics/btn";

import { TiSocialFacebook } from "react-icons/ti";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { BiHeart } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const CardViewComponents = () => {
  let { id } = useParams();
  let { data } = useQueryHandler({
    pathname: "cardView",
    url: `flower/category/house-plants/${id}`,
  });
  console.log(data);

  return (
    <div className="w-[90%] mx-auto max-w-[1440px]">
      <p className="text-[#3d3d3d] ">Home / Shop</p>
      <div className="grid grid-cols-2 max-[910px]:grid-cols-1 max-[1100px]:grid-cols-[2fr_1.7fr] max-[1020px]:grid-cols-[2fr_1.5fr] max-[1000px]:grid-cols-[2fr_1.3fr] my-5 max-[1233px]:gap-5 ">
        <div className="flex  gap-10 max-[1233px]:gap-4 ">
          <div className="grid grid-cols-1 items-center gap-4 max-[995px]:gap-0 max-[995px]:  ">
            {data?.detailed_images.map((value: string, idx: number) => (
              <Image
                className="!w-[100px] !h-[100px] max-[99px]:!h-[70px] max-[99px]:!w-[70px] !object-cover bg-[#fbfbfb] rounded-lg "
                key={idx}
                src={value}
                alt=""
              />
            ))}
          </div>
          <div className=" **:!rounded-lg mx-auto  bg-red-500 max-[9]: p-2 *:!rounded-lg !max-w-[400px] object-contain  !max-h-[400px]">
            <Image
              className="!w-full !h-full bg-[#fbfbfb] max-[910px]:!max-w-[400px] max-[910px]:!max-h-[400px]  !p-2  !rounded-lg !object-cover "
              src={data?.main_image}
            />
          </div>
        </div>
        <div>
          <h2 className="text-[#3d3d3d] text-[28px] font-bold">
            {data?.title}
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-[#46a358] text-[22px] font-bold">
              ${data?.price}
            </p>
            <div className=" flex items-center gap-2">
              <Rate
                className="!space-x-0.5 !text-[14px]"
                allowHalf
                defaultValue={data?.rate}
              />
              <p className="text-[#3d3d3d] text-[15px]">
                {data?.views} Customer Review
              </p>
            </div>
          </div>
          <div className="border-[rgba(70,163,88,0.5)] border-[0.30px] my-2 w-full"></div>
          <div className="my-2">
            <p className="text-[#3d3d3d] text-[15px] font-medium">
              Short Description:
            </p>
            <p className="text-[14px] text-[#727272] mt-2 ">
              {data?.short_description}
            </p>
          </div>
          <div className="flex flex-col gap-2 my-4 ">
            <p className="text-[#3d3d3d] text-[15px] font-medium">Size:</p>
            <div className="flex  items-center gap-3">
              {["S", "M", "L", "XL"].map((value: string, idx: number) => (
                <div
                  key={idx}
                  className="h-7 w-7 text-sm font-medium border-[#eaeaea] text-[#727272] cursor-pointer border sizes flex items-center justify-center rounded-full"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className="my-5 flex items-center max-[1020px]:items-start max-[1020px]:flex-col gap-5 max-[1059px]:gap-3 ">
            <div className="flex items-center gap-3">
              <div className="bg-[#46a358] cursor-pointer h-8 w-8 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full">
                <PlusOutlined />
              </div>
              <div>1</div>
              <div className="bg-[#46a358] cursor-pointer h-8 w-8 active:scale-95 duration-100 flex items-center justify-center  text-white rounded-full">
                <MinusOutlined />
              </div>
            </div>
            <div className="w-fit flex  max-[1100px]:!p-[5px_10px] items-center gap-5 max-[1059px]:gap-3">
              <Button
                x={15}
                y={10}
                styles={"text-nowrap max-[1059px]:!p-[5px_10px]  "}
              >
                Buy NOW
              </Button>
              <button className="border-[#46a358] border text-nowrap   max-[1059px]:!p-[5px_10px] rounded-lg px-5 py-2.5 flex  gap-1 text-[#46a358] ">
                Add to cart
              </button>
              <button className="border-[#46a358] border  max-[1059px]:!p-[5px_10px] rounded-lg p-2 flex  gap-1 text-[#46a358] ">
                <BiHeart size={25} />
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#a5a5a5]">
              SKU: <span className="text-[#727272]"> 1995751877966 </span>
            </p>
            <p className="text-[#a5a5a5]">
              Categories:
              <span className="text-[#727272]"> {data?.category} </span>
            </p>
            <p className="text-[#a5a5a5]">
              Tags:{" "}
              <span className="text-[#727272]">
                {data?.tags.length
                  ? data?.tags.map((value: string) => value)
                  : "empty"}
              </span>
            </p>
          </div>
          <div
            className="flex items-center gap-2 my-4
           "
          >
            <p>Share this products:</p>
            <TiSocialFacebook size={25} />
            <FaTwitter />
            <FaLinkedinIn size={20} />
            <LuMail size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardViewComponents;

{
  category: "house-plants";
  comments: [];
  created_at: "2024-08-22T03:22:18.963Z";
  created_by: "66c48eb24d966b830dd5925e";
  description: "<h4>About Monstera Deliciosa</h4>\n<p>Monstera Deliciosa, commonly referred to as the Swiss Cheese Plant due to its distinctive leaf patterns, is a staple in many plant lovers' collections. This stunning plant originates from the tropical rainforests of Central America, where it climbs trees and absorbs nutrients from the air and soil.</p>\n<p>The Monstera’s leaves are its most striking feature. When young, the leaves are heart-shaped and solid. As the plant matures, the leaves become large and develop characteristic splits and holes, creating the iconic look that many plant enthusiasts adore. These holes and splits are thought to help the plant survive in its native habitat by allowing strong winds to pass through the leaves without causing damage.</p>\n<p>This plant is relatively easy to care for, making it ideal for both beginners and experienced gardeners. It prefers bright, indirect sunlight but can also tolerate lower light conditions. However, the more light it receives, the more dramatic the leaf fenestrations will be. Water the Monstera when the top inch of soil feels dry to the touch. It’s essential to avoid overwatering, as the plant is susceptible to root rot if left sitting in waterlogged soil.</p>\n<p>Monstera Deliciosa can grow quite large, reaching several feet in height if given the right conditions. It’s a slow to moderate grower, so patience is key. You can train the plant to climb a moss pole or trellis, mimicking its natural growth habit. The plant’s aerial roots can be tucked into the soil or wrapped around the support structure to help it climb.</p>\n<p>In addition to its aesthetic appeal, the Monstera Deliciosa is also known for its air-purifying qualities. It helps filter toxins from the air, making your home environment healthier. However, it’s important to note that the plant is toxic if ingested, so it should be kept out of reach of pets and small children.</p>\n<p>Overall, Monstera Deliciosa is a versatile, low-maintenance plant that can transform any indoor space into a tropical oasis. Its striking leaves and impressive size make it a focal point in any room, while its easy care requirements ensure that it remains a beloved member of your plant collection for years to come.</p>\n";
  detailed_images: [
    "http://res.cloudinary.com/dj28bsagl/image/upload/v1724296909/bhot2xhirbcefeubynnu.webp",
    "http://res.cloudinary.com/dj28bsagl/image/upload/v1724296912/qpbfxo5e5nerxktjttsd.webp",
    "http://res.cloudinary.com/dj28bsagl/image/upload/v1724296915/u9rrwdfsz4tivlfrvqer.webp",
    "http://res.cloudinary.com/dj28bsagl/image/upload/v1724296917/lh0m248ekoquq1jgxrfi.webp",
  ];
  discount: true;
  discount_price: "15";
  main_image: "http://res.cloudinary.com/dj28bsagl/image/upload/v1724296904/njkema9dymtyhnyarh1p.webp";
  price: 35.99;
  rate: 0;
  short_description: 'Monstera Deliciosa, often known as the "Swiss Cheese Plant," is a tropical houseplant prized for its large, glossy leaves that develop unique splits and holes as they mature. Originating from the rainforests of Central America, this plant brings a touch of the exotic into any indoor space. It thrive';
  sold_times: 0;
  tags: [];
  title: "Monstera Deliciosa";
  views: 0;
  __v: 0;
  _id: "66c6aeea88d60e51851abf09";
}
