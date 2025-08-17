import { useState, useCallback } from "react";
const usePostData = () => {
  const [createPostData, setCreatePostData] = useState({
    team: "18-4",
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: null,
  });

  const handleInput = (e) => {
    const { value } = e.target;
    setCreatePostData((prev) => ({ ...prev, name: value }));
  };
  const resetName = () => {
    setCreatePostData((prev) => ({ ...prev, name: "" }));
  };

  const handleColorSelect = useCallback((color) => {
    setCreatePostData((prev) => ({
      ...prev,
      backgroundColor: color,
      backgroundImageURL: null,
    }));
  }, []);

  // 컬러는 필수 값이므로 이미지만 변경
  const handleImageSelect = useCallback((url) => {
    setCreatePostData((prev) => ({ ...prev, backgroundImageURL: url }));
  }, []);

  return {
    createPostData,
    handleInput,
    handleColorSelect,
    handleImageSelect,
    resetName,
    setCreatePostData,
  };
};
export default usePostData;
