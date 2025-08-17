import { useState, useCallback } from "react";
const DEFAULT_COLOR = "beige";
const usePostData = (defaultTeam = "18-4", defaultColor = DEFAULT_COLOR) => {
  const [createPostData, setCreatePostData] = useState({
    team: defaultTeam,
    name: "",
    backgroundColor: defaultColor,
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
