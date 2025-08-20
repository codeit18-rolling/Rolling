import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecipientsDetailData } from "../../../service/ListDetails/getRecipientsDetailData";

const useGetRecipientsDetailData = ({ id, offset, limit }) => {
  return useInfiniteQuery({
    queryKey: ["getRecipientsDetailData", id],
    queryFn: () => getRecipientsDetailData({ id, offset, limit }),
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};

export default useGetRecipientsDetailData;

