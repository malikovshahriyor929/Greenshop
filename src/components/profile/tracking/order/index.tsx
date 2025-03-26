
const OrderCard = ({ props }: { props: any }) => {
  return (
    <div className=" p-4 shadow-lg rounded-lg">
      <p className="font-bold ">Your Order</p>
      <p>
        <strong>First name: </strong>
        {props.billing_address.name}
      </p>
      <p>
        <strong>Last name: </strong>
        {props.billing_address.surname}
      </p>
      <p>
        <strong>Address: </strong>
        {props.billing_address.address
          ? props.billing_address.address
          : "empty"}
      </p>
      <p>
        <strong>Counrty: </strong>
        {props.billing_address.country
          ? props.billing_address.country
          : "empty"}
      </p>
      <p>
        <strong>Zip code: </strong>
        {props.billing_address.zip ? props.billing_address.zip : "empty"}
      </p>
      <p>
        <strong>Payment method: </strong>
        {props.extra_shop_info.method ? props.extra_shop_info.method : "empty"}
      </p>
      <p className="text-[#46a358] font-bold">
        <strong className="text-[black] font-semibold">Total: </strong> $
        {props.extra_shop_info.total ? props.extra_shop_info.total : "0"}
      </p>
    </div>
  );
};

export default OrderCard;
