import { Empty } from "antd";


const Follow = () => {
  // let [folowers, setFollower] = useState<any[]>([]);
  // let { user } = useParams();
  // let { data, isLoading, isError } = useQueryHandler({
  //   pathname: "userhg",
  //   url: `user/by_id/${user}`,
  // });
  // useEffect(() => {
  //   if (data?.folowers?.length && !isLoading) {
  //     Promise.all(
  //       data.followers.map(
  //         (value: any) =>
  //           useQueryHandler({
  //             pathname: `user-${value}`,
  //             url: `user/by_id/${value}`,
  //           }).data
  //       )
  //     ).then((item) => setFollower([...folowers, item]));
  //   }
  // }, [data]);

  // data?.followers.map((value: any) => {

  // let {
  //   data: folower,
  //   // isLoading,
  //   // isError,
  // } = useQueryHandler({
  //   pathname: `user-${value}`,
  //   url: `user/by_id/${value}`,
  // });
  // console.log(folower);
  // if (!isError || !isLoading) {
  //   setFollower([...folowers, folower]);
  // }
  // });
  // const followersQueries = useQueries({
  //   queries: (data?.followers ?? []).map((_id: string) => ({
  //     queryKey: ["user", _id],
  //     queryFn: () =>
  //       useQueryHandler({
  //         pathname: `user-${_id}`,
  //         url: `user/by_id/${_id}`,
  //       }).data,
  //     enabled: !!_id, // Ensures query only runs if `followerId` exists
  //   })),
  // });
  // // console.log(followersQueries);
  // const followersData = followersQueries.map((query) => query.data).filter(Boolean);
  // console.log(followersData);
  
  
  return (
    <div>
      <Empty className="mx-auto my-10" />
    </div>
  );
};

export default Follow;
