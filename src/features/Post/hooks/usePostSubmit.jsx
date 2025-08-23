import { useNavigate } from "react-router";
import createRecipient from "../../../service/Post/createRecipient";

const usePostSubmit = (createPostData, resetName) => {
  const navigate = useNavigate();

  const handleSubmit = async (validateFn) => {
    if (!validateFn()) return;
    try {
      const result = await createRecipient(createPostData);
      navigate(`/post/${result.id}`);
    } catch (error) {
      console.error("Post 요청 실패:", error);
      alert("메세지 생성에 실패했습니다!");
    } finally {
      // 성공/실패 상관없이 입력값 초기화
      resetName();
    }
  };

  return { handleSubmit };
};
export default usePostSubmit;
