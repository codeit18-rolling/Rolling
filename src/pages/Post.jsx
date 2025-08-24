import PostInput from "../features/Post/PostElements/PostInput";
import PostOption from "../features/Post/PostElements/PostOption";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import useInputValidator from "../hooks/useInputValidator";
import { validateName } from "../utils/validate";
import usePostData from "../features/Post/hooks/usePostData";
import usePostImages from "../features/Post/hooks/usePostImages";
import usePostSubmit from "../features/Post/hooks/usePostSubmit";
import MetaTag from "../components/MetaTag/MetaTag";
const Post = () => {
  const {
    createPostData,
    handleInput,
    handleColorSelect,
    handleImageSelect,
    resetName,
  } = usePostData();
  const { images, isLoading } = usePostImages();
  const {
    errorMsg,
    handleChange,
    handleBlur,
    handleValidateSubmit,
    isDisabled,
  } = useInputValidator(createPostData.name, validateName);
  const { handleSubmit } = usePostSubmit(createPostData, resetName);

  return (
    <>
      <MetaTag
        title="Rolling | 새로운 롤링페이퍼 만들기"
        description="온라인 롤링페이퍼를 지금 바로 만들어 보세요. 로그인 없이 간편하게 시작할 수 있습니다."
      />
      <Container
        isInnerBox={true}
        innerBoxClassName="flex flex-col gap-[32px] tablet:gap-[50px]"
      >
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
        <Button
          className="w-full"
          onClick={() => handleSubmit(handleValidateSubmit)}
          disabled={isDisabled}
        >
          생성하기
        </Button>
      </Container>
    </>
  );
};
export default Post;
