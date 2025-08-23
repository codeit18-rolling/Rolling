import { useState, useEffect } from "react";
import getBackgroundImage from "../../../service/Post/getBackgroundImages";
import getFetchCloudinary from "../../../service/Post/getFetchCloudinary";
const usePostImages = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadImages = async () => {
    try {
      setIsLoading(true);
      const image = await getBackgroundImage();
      const imageList = image?.imageUrls ?? [];
      imageList.forEach((url, index) => {
        imageList.splice(index, 1, getFetchCloudinary(url));
      });
      setImages(image);
    } catch (error) {
      console.error("이미지를 불러오는데 실패했습니다:", error);
      alert("이미지를 불러오는데 실패했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);
  return { images, isLoading, loadImages };
};
export default usePostImages;
