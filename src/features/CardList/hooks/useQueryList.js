import { useQuery } from "@tanstack/react-query";
import getRecipientsLists from "../../../service/Lists/getRecipientsLists";

const useQueryList = (index, sortOrder) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipients", index, sortOrder],
    queryFn: () => getRecipientsLists(index, sortOrder),
    retry: 1,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });
  return { isLoading, error, data };
};

export default useQueryList;
