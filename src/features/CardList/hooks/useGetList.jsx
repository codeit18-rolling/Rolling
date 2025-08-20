import { useEffect, useState } from "react";
import getLists from "../../../service/Lists/getLists";

const useList = (index, sort) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getLists(index, sort);
        setData(data);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [index, sort]);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useList;
