import PostInput from "../features/Post/PostElements/PostInput";
import PostOption from "../features/Post/PostElements/PostOption";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import FloatingButton from "../components/Button/FloatingButton";
import useInputValidator from "../hooks/useInputValidator";
import { validateName } from "../utils/validate";
import usePostData from "../features/Post/hooks/usePostData";
import usePostImages from "../features/Post/hooks/usePostImages";
import usePostSubmit from "../features/Post/hooks/usePostSubmit";
const Post = () => {
  const {
    createPostData,
    handleInput,
    handleColorSelect,
    handleImageSelect,
    resetName,
  } = usePostData();
  const { images, isLoading } = usePostImages();
  const { errorMsg, handleChange, handleBlur, handleValidateSubmit } =
    useInputValidator(createPostData.name, validateName);
  const { handleSubmit } = usePostSubmit(createPostData, resetName);

  return (
    <Container isInnerBox={true} innerBoxClassName="flex flex-col gap-[50px]">
      <PostInput
        value={createPostData.name}
        errorMsg={errorMsg}
        onChange={(e) => {
          handleInput(e);
          handleChange(e);
        }}
        onBlur={handleBlur}
      />
      <PostOption
        bgImages={images}
        isLoading={isLoading}
        onColorSelect={handleColorSelect}
        onImageSelect={handleImageSelect}
      />
      <FloatingButton>
        <Button
          className="w-full"
          onClick={() => handleSubmit(handleValidateSubmit)}
          disabled={errorMsg}
        >
          생성하기
        </Button>
      </FloatingButton>
    </Container>
  );
};
export default Post;
