import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import createMessage from "../../../service/Message/createMessage";

const useMessageSubmit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createMessage, // 메시지 생성
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ["getRecipientsDetailData"],
      });
      queryClient.invalidateQueries({
        queryKey: ["recipients"],
      });

      navigate(`/post/${result.recipientId}`, { replace: `/list` });
    },
    onError: (error) => {
      console.error("Message 전송 실패:", error);
      alert("Message 전송에 실패했습니다");
    },
  });
};
export default useMessageSubmit;
