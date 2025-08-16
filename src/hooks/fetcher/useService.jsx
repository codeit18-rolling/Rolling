import { useEffect, useState } from "react";

const useService = (fetch) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetch();
        setData(data);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useService;
