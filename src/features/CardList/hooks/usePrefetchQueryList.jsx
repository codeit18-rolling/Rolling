import { useQueryClient } from "@tanstack/react-query";
import getLists from "../../../service/Lists/getLists";
import { useEffect } from "react";

const usePrefetchQueryList = (index, sortOrder, totalIndex) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (index < totalIndex - 1) {
      const nextIndex = index + 1;
      queryClient.prefetchQuery({
        queryKey: ["recipients", nextIndex, sortOrder],
        queryFn: () => getLists(nextIndex, sortOrder),
      });
    }
  }, [index, totalIndex, sortOrder, queryClient]);
};

export default usePrefetchQueryList;
