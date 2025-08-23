import { useState } from "react";
import uploadToCloudinary from "../../../service/Post/uploadToCloudinary";

const useCloudinaryUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const uploadFiles = async (files) => {
    setIsUploading(true);
    try {
      const urls = [];
      for (const file of files) {
        const url = await uploadToCloudinary(file);
        if (url) urls.push(url);
      }
      return urls;
    } catch (error) {
      console.error("이미지를 업로드 하는데 실패했습니다:", error);
    } finally {
      setIsUploading(false);
    }
  };
  return { uploadFiles, isUploading };
};

export default useCloudinaryUpload;
