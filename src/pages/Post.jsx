import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import PostInput from "./PostElements/PostInput";
import PostOption from "./PostElements/PostOption";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import FloatingButton from "../components/Button/FloatingButton";
import useInputValidator from "../hooks/useInputValidator";
import { validateName } from "../utils/validate";
import getBackgroundImage from "../service/getBackgroundImages";
import createRecipient from "../service/createRecipient";
const DEFAULT_COLOR = "beige";
const Post = () => {
  const [createPostData, setCreatePostData] = useState({
    team: "18-4",
    name: "",
    backgroundColor: DEFAULT_COLOR,
    backgroundImageURL: null,
  });
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { errorMsg, handleChange, handleBlur, handleValidateSubmit } =
    useInputValidator(createPostData.name, validateName);
  const navigate = useNavigate();

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
  const handleInput = (e) => {
    setCreatePostData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
    handleChange(e);
  };
  const handleImageLoad = async () => {
    try {
      setIsLoading(true);
      const image = await getBackgroundImage();
      setImages(image);
    } catch (error) {
      console.log("이미지를 불러오는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async () => {
    if (!handleValidateSubmit()) return;
    try {
      const result = await createRecipient(createPostData);
      navigate(`/post/${result.id}`);
      console.log("Post 요청 성공:", result);
    } catch (error) {
      console.error("Post 요청 실패:", error);
    } finally {
      // 성공/실패 상관없이 입력값 초기화
      setCreatePostData((prev) => ({
        ...prev,
        name: "",
      }));
    }
  };

  useEffect(() => {
    handleImageLoad();
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
        bgImages={images}
        isLoading={isLoading}
        onColorSelect={handleColorSelect}
        onImageSelect={handleImageSelect}
      ></PostOption>
      <FloatingButton>
        <Button className="w-full" onClick={handleSubmit} disabled={errorMsg}>
          생성하기
        </Button>
      </FloatingButton>
    </Container>
  );
};
export default Post;
