import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import getRecipientsLists from "../../../service/Lists/getRecipientsLists";

const useInfiniteQueryList = ({ sortOrder }) => {
  return useInfiniteQuery({
    queryKey: ["recipients", sortOrder],
    queryFn: ({ pageParam = 0 }) => {
      return getRecipientsLists({
        index: pageParam,
        sortOrder,
      });
    },
    getNextPageParam: (currentPage, allPages) => {
      if (currentPage?.next === null) return undefined;
      return allPages.length;
    },
    retry: 1,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};

export default useInfiniteQueryList;
