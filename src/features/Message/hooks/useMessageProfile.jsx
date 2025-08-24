import { useEffect, useState } from "react";
import getProfileImages from "../../../service/Message/getProfileImages";
import getFetchCloudinary from "../../../service/Post/getFetchCloudinary";

const useMessageProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getProfileImages();
        const dataList = data?.imageUrls ?? [];
        dataList.forEach((url, index) => {
          dataList.splice(index, 1, getFetchCloudinary(url, 250));
        });
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
