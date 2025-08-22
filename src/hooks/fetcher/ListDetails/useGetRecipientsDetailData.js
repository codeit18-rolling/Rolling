import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getRecipientsDetailData } from "../../../service/ListDetails/getRecipientsDetailData";

const useGetRecipientsDetailData = ({ id }) => {
  return useInfiniteQuery({
    queryKey: ["getRecipientsDetailData", id],
    queryFn: ({ pageParam = 0 }) =>
      getRecipientsDetailData({
        id,
        offset: pageParam * 6,
        limit: 6,
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length;
    },
    retry: 1,
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};

export default useGetRecipientsDetailData;

