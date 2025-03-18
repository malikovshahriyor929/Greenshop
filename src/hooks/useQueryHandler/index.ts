import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface userQueryType {
  pathname: string;
  url: string;
  params: object;
}

const useQueryHandler = ({ params, pathname, url }: userQueryType) => {
  let axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }).then(data=>data.data),
  });
};

export default useQueryHandler;
