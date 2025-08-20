import { useQuery } from "@tanstack/react-query";
import getLists from "../../../service/Lists/getLists";

const useQueryList = (index, sort) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipients", index, sort],
    queryFn: () => getLists(index, sort),
    staleTime: 6000,
    keepPreviousData: true,
  });
  return { isLoading, error, data };
};

export default useQueryList;
