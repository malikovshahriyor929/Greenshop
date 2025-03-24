import { useParams } from "react-router-dom";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import { BlogPosts } from "../../../../@types";
import Footer from "../../../footer";
import { EyeOutlined } from "@ant-design/icons";
import Profile from "./user";
import {  useReduxSelector } from "../../../../hooks/useRedux";

const AboutPost = () => {
  let { id } = useParams();
  let { data } = useQueryHandler({
    pathname: "created_by",
    url: `user/blog/created-by/${id}`,
  });
  let { category } = useReduxSelector((state) => state.CardSlice);
  return (
    <>
      <div className="w-[90%] mx-auto max-w-[1440px] mb-10">
        {data?.map((value: BlogPosts) => (
          <div key={value?._id}>
            <Profile props={value?.created_by} />
            <h2 className="text-3xl font-bold my-3 ">{value?.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: value?.content }} />
            <div className=" mt-5 flex items-center gap-3 ">
              <EyeOutlined />
              <p >
                {category}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AboutPost;

[
  {
    content:
      '<p>Flowers are an essential element or accessory for every wedding. These are needed for the bridal bouquet, table flowers, entrances, interior décor, and bridesmaids’ posies.</p><p><br></p><p>However, picking ideal flowers for a wedding is an extremely confusing task for most brides and grooms. In fact, it is natural for them to argue over such subjects too.</p><p><br></p><p>To avoid confusion, florists at<a href="https://flowercompany.ca/" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">&nbsp;https://flowercompany.ca/</a>&nbsp;suggest picking flowers that go with every wedding theme and décor. Contact a local flower company to help you pick such flowers.</p><p><br></p><p>However, if you are extremely theme-oriented or picky, you would want to pick your own flowers. You can find hundreds of varieties of flowers to choose from, which makes the task even more difficult.</p><p>Take a look at these useful tips to pick your wedding flowers.</p><p><br></p><h2><strong>Consider the Color Scheme or Theme of Your Wedding</strong></h2><p>Naturally, you must first consider your wedding theme to make an ideal choice regarding the type of flowers. A white, pink, golden, or rose gold are some common&nbsp;<a href="https://www.theknot.com/content/wedding-color-inspiration-boards" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">wedding colors</a>. Ideal flower choices for these color palettes include white roses, dahlia, white anemone, or gypsophila.</p><p><br></p><p>In fact, any flower company will show you these options first. Similarly, multi-colored hydrangeas and calla lilies go with a musical or artistic-style wedding. As you can see, considering your wedding theme and the color palette is one of the easiest ways to pick flowers that complement the former.</p><p><br></p><h2><strong>Consider Your Wedding Venue and Location</strong></h2><p><br></p><p>Even though&nbsp;<a href="https://www.yeahweddings.com/how-much-do-wedding-flowers-cost/" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">choosing</a>&nbsp;flowers based on your wedding theme works, you must also consider your wedding venue to determine the height and volume of the flowers that will be placed in the center.</p><p>If your wedding venue is an indoor setting that has high ceilings, short or stumps flowers will barely be visible.&nbsp;To avoid this situation, choose flowers that are tall and voluminous. Such flowers fill the space and act as the focal point of the wedding décor.</p><p><br></p><p>On the other hand, a wedding setting with lower ceilings or less carpet area must not be crowded with heavy or tall flowers. Consult a flower company or a florist in case of ambiguity.</p><p><br></p><h2><strong>Determine the End Results of Your Photos</strong></h2><p>How do you want your wedding photos to look? Do you want to add a pop of color to all photos? Or do you want them to be simple and monochrome?</p><p><br></p><p>To add a pop of color and some life to your photos, you must pick your wedding flowers accordingly. A bouquet of flowers enhances any space and adds some life to a photograph.</p><p><br></p><p>Pick your flowers based on the colors or subtle touches you want to achieve in your photos. After all, your wedding photos are a montage of one of the most significant days of your life, and you want them to be perfect. Every flower company suggests adding a pop of color in the center of your photographs.</p><p><br></p><h2><strong>Consider Your Budget</strong></h2><p>In the end, it all boils down to how much you can actually&nbsp;<a href="https://www.thebalance.com/how-much-should-you-spend-on-your-wedding-day-4053100" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">spend on your wedding</a>. Flowers are usually expensive and take up a significant part of your budget. Before you choose your flowers, prepare a budget, and determine the amount of&nbsp;<a href="https://www.yeahweddings.com/how-much-do-wedding-flowers-cost/" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">money that can be spent on flowers</a>.</p><p><br></p><p>By doing this, you are saving yourself from disappointment and expectations. By working and planning backward, you can pick ideal flowers and other elements for your wedding while staying within budget and experiencing your dream wedding.</p><p><br></p><h2><strong>Consult a Flower Company or a Florist</strong></h2><p>As mentioned, contact your local flower company to help you make a wise decision. When it comes to weddings and similar events, these experts have a lot of experience. Ask them if you can visit an existing decorated venue or look at photos of their previous work.</p><p><br></p><p>By doing so, you might even get a new idea for your wedding theme. Ask your flower company if they can accompany you to your venue and ask for suggestions regarding the flower placement and other décor ideas.</p><p><br></p><p><strong>If you are still confused, take a look at this list of flowers that are ideal for a wedding setting and go with almost every décor or theme:</strong></p><h3><strong>1. Rose</strong></h3><p>Roses are the safest and one of the prettiest choices as a&nbsp;<a href="https://www.yeahweddings.com/wedding-flower-guide/" rel="noopener noreferrer" target="_blank" style="color: rgb(140, 216, 216);">wedding flower</a>. You can choose from a variety of roses that differ in color, size, and volume. While choosing roses, pick the ones that are larger and fluffier. If you want roses to act as centerpieces or add them to your bouquet, choose smaller or delicate flowers.</p><p><br></p><h3><strong>2. Dahlia</strong></h3><p>The presence of dahlias in any setting increases the grandeur of the space. If you are unsure about the wedding theme or the venue yet, pick dahlias as these are available in many sizes and colors.</p><p><br></p><h3><strong>3. Anemone</strong></h3><p>If you want your wedding to be modern or contemporary, this flower should be your top choice. These are usually black and white and go well with monochrome or colorful wedding themes.</p><p><br></p><h3><strong>4. Lilac</strong></h3><p>Whether it’s a bouquet or the entrance arch, the placement of lilacs in any décor item enhances its feel and beauty. Get these as fresh as possible as they tend to wilt faster.</p><p><br></p><h3><strong>5. Sweet Pea</strong></h3><p>These dainty and sweet-smelling flowers are a perfect addition to your bouquet. Pair them up with a silk ribbon to enhance their beauty. You can choose from a variety of colors.</p><h3><br></h3><h3><strong>6. Hydrangea</strong></h3><p>Hydrangeas are an interesting addition to your wedding décor, mainly due to their distinctive colors and composition. These are available in blue and white shades and are extremely sophisticated.</p><p><br></p><h3><strong>7. Peony</strong></h3><p>Peonies are extremely beautiful, which also makes them one of the most picked flowers for weddings and events. However, since these are too expensive, most people are unable to afford this option. If you have the luxury, pick peonies to accentuate your wedding theme.</p><p><br></p><p><br></p><p><em>These flower choices are some top choices that would be suggested by a flower company or a florist.</em></p><p><em>When picking flowers for your wedding, there is no right or wrong. If it blends with the décor and makes you happy, you are good to go. Since every wedding theme differs in various ways, the choice of flowers falls on the bride and groom.</em></p><p><em>In the end, you can take help from a flower company or a florist to pick the best flowers for your event.</em></p>',
    created_at: "2023-08-27T11:27:44.485Z",
    created_by: "64ea18e295085f00ce1714bc",
    reaction_length: 0,
    short_description:
      "Flowers are an essential element or accessory for every wedding. These are needed for the bridal bouquet, table flowers, entrances, interior décor, and bridesmaids’ posies.\n\nHowever, picking ideal flowers for a wedding is an extremely confusing task for most brides and grooms. In fact, it is natural for them to argue over such subjects too.",
    title: "How To Choose Wedding Flowers",
    views: 232,
    __v: 0,
    _id: "64eb33302d1395b146e189ee",
  },
];
