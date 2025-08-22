import { useEffect, useState } from "react";
import getProfileImages from "../../../service/Message/getProfileImages";

const useMessageProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getProfileImages();
        setImages(data);
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
    images,
  };
};

export default useMessageProfile;
