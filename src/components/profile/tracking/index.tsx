import useQueryHandler from "../../../hooks/useQueryHandler";
import CookiesInfo from "../../../shared/generics/cookie";
import { cardSkeleton } from "../../../shared/generics/loader";
import OrderCard from "./order";

const Tracking = () => {
  // let [myData, setMyData] = useState<CardType[]>([]);
  let { getCookie } = CookiesInfo();
  let userInfo = getCookie("user");
  let { data, isLoading } = useQueryHandler({
    pathname: "orders",
    url: "order/get-order",
  });
  data?.slice(0, 20);
  let mydata: object[] = []?.slice(0, 10);
  data?.map((value: any) => {
    if (value?.billing_address?.name == userInfo?.name) {
      mydata.push(value);
    }
  });

  return (
    <div className="grid grid-cols-3 my-5 gap-5  max-[1130px]:grid-cols-2 max-[532px]:grid-cols-1 max-[340px]:grid-cols-1">
      {isLoading
        ? Array?.from({ length: 6 }).map((_, idx) => (
            <div className="" key={idx}>
              {cardSkeleton()}
            </div>
          ))
        : mydata?.slice(0, 10)?.map((value, idx) => (
            <div key={idx} className="h-full w-full">
              <OrderCard props={value} />
            </div>
          ))}
    </div>
  );
};

export default Tracking;
