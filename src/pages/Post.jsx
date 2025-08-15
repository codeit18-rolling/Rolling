import { useState, useEffect, useCallback } from "react";
import { BACKGROUND_IMG_DATA } from "../MockData";
import PostInput from "./PostElements/PostInput";
import PostOption from "./PostElements/PostOption";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import FloatingButton from "../components/Button/FloatingButton";
import useInputValidator from "../hooks/useInputValidator";
import { validateName } from "../utils/validate";

const DEFAULT_COLOR = "beige";
const Post = () => {
  const [createPostData, setCreatePostData] = useState({
    team: "18-4",
    name: "",
    backgroundColor: DEFAULT_COLOR,
    backgroundImageURL: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const { errorMsg, handleChange, handleBlur, handleValidateSubmit } =
    useInputValidator(createPostData.name, validateName);

  const handleInput = (e) => {
    setCreatePostData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
    handleChange(e);
  };

  const handleColorSelect = useCallback((color) => {
    setCreatePostData((prev) => ({
      ...prev,
      backgroundColor: color,
      backgroundImageURL: null, // 컬러 선택 시 이미지 제거
    }));
  }, []);

  const handleImageSelect = useCallback((url) => {
    setCreatePostData((prev) => ({
      ...prev,
      backgroundImageURL: url, // 컬러는 필수 값이므로 이미지만 변경
    }));
  }, []);

  const handleSubmit = () => {
    if (!handleValidateSubmit()) return;
    console.log("서버 전송 데이터:", createPostData);
  };
  // 이미지 로딩 시뮬레이션 (API에서 받는다고 가정)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <Container isInnerBox={true} innerBoxClassName="flex flex-col gap-[50px]">
      <PostInput
        value={createPostData.name}
        errorMsg={errorMsg}
        onChange={handleInput}
        onBlur={handleBlur}
      />
      <PostOption
        bgImages={BACKGROUND_IMG_DATA}
        isLoading={isLoading}
        onColorSelect={handleColorSelect}
        onImageSelect={handleImageSelect}
      ></PostOption>
      <FloatingButton>
        <Button className="w-full" onClick={handleSubmit}>
          생성하기
        </Button>
      </FloatingButton>
    </Container>
  );
};
export default Post;
