import { useNavigate } from "react-router";
import createRecipient from "../../../service/Post/createRecipient";
import { useQueryClient } from "@tanstack/react-query";

const usePostSubmit = (createPostData, resetName) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = async (validateFn) => {
    if (!validateFn()) return;
    try {
      const result = await createRecipient(createPostData);
      navigate(`/post/${result.id}`, { replace: true });
    } catch (error) {
      console.error("Post 요청 실패:", error);
    } finally {
      // 성공/실패 상관없이 입력값 초기화
      queryClient.invalidateQueries({
        queryKey: ["recipients"],
      });
      resetName();
    }
  };

  return { handleSubmit };
};
export default usePostSubmit;
