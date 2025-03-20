import type { CardType } from "../../../@types";

const Descr = ({ data }: { data: CardType }) => {
  return (
    <div className="w-[90%] mx-auto max-w-[1440px]">
      <h2 className="text-[#46a358] text-[17px] font-bold border-b-2 border-[#46a358]">
        Product Description
      </h2>
      {/* dangerouslySetInnerHTML={__html:data?.description} */}
      <div className="my-5">
        {data?.description?.length! < 10 ? (
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            <br /> <br /> Pellentesque aliquet, sem eget laoreet ultrices, ipsum
            metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac
            tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
            sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere
            nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et
            blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
            imperdiet ligula euismod eget. The ceramic cylinder planters come
            with a wooden stand to help elevate your plants off the ground.
          </p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: data?.description as string }}>
            {data?.description?.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Descr;
