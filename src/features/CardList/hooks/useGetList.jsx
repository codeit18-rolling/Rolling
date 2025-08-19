import { useEffect, useState } from "react";
import getLists from "../../../service/Lists/getLists";

const useList = (list, sort) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getLists(list, sort);
        setData(data);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [list, sort]);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useList;
