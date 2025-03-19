import useQueryHandler from "../../../../hooks/useQueryHandler";

const Discount = () => {
  let { data } = useQueryHandler({
    pathname: "discount",
    url: "features/discount",
  });

  return (
    <div className="rounded-lg p-3 flex flex-col items-center gap-4 mt-4  bg-[linear-gradient(180deg,rgba(70,163,88,0.1)_0%,rgba(70,163,88,0.03)_100%)]">
      <p className="text-[#46a358] text-3xl text-center">{data?.title}</p>
      <p>UP TO {data?.discoount_up_to}% OFF</p>
      <img src={data?.poster_image_url} alt="" />
    </div>
  );
};

export default Discount;
