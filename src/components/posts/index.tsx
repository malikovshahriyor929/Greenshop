import { ArrowRightOutlined } from "@ant-design/icons";
import post1 from "../../shared/assets/svg/post1.svg";
import post2 from "../../shared/assets/svg/post2.svg";
import post3 from "../../shared/assets/svg/post3.svg";
import post4 from "../../shared/assets/svg/post4.svg";

const posts = [
  {
    id: 1,
    img: post1,
    text_small: "September 12 I Read in 6 minutes",
    big_text: " Cactus & Succulent Care Tips",
    descr: " Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    id: 2,
    img: post2,
    text_small: "  September 13  I Read in 2 minutes",
    big_text: " Top 10 Succulents for Your Home",
    descr: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    id: 3,
    img: post3,
    text_small: "  September 15  I Read in 3 minutes",
    big_text: " Cactus & Succulent Care Tips",
    descr: " Cacti and succulents thrive in containers and because most are.",
  },
  {
    id: 4,
    img: post4,
    text_small: "  September 15  I Read in 2 minutes",
    big_text: "Best Houseplants Room by Room",
    descr: " The benefits of houseplants are endless. In addition to.",
  },
];

const Posts = () => {
  return (
    <div className="w-[90%] mb-10 mx-auto max-w-[1440px] grid grid-cols-4 max-[911px]:grid-cols-2 max-[429px]:grid-cols-1 gap-5 ">
      {posts.map((value) => (
        <div key={value.id} className="flex  flex-col hover:scale-105 hover:shadow-lg duration-300 rounded-lg ">
          <img src={value.img} className="rounded-t-lg" alt="" />
          <div className="flex flex-col justify-between h-full gap-1 p-3 bg-[#fbfbfb] rounded-b-lg  ">
            <p className="text-[14px] max-[1165px]:text-[12px] text-[#46a358] font-medium ">
              {value.text_small}
            </p>
            <h2 className="text-[20px] max-[1165px]:text-[18px] text-[#3d3d3d] font-bold ">
              {value.big_text}
            </h2>
            <p className="text-[#727272] max-[1165px]:text-[14px]">{value.descr} </p>
            <div className="text-[#3d3d3d] flex items-center gap-1">
              <p>Read More</p>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
