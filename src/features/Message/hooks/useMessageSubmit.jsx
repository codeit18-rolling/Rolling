import { useNavigate } from "react-router";
import createMessage from "../../../service/Message/createMessage";

const useMessageSubmit = (postMessageData) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await createMessage(postMessageData);
      navigate(`/post/${result.recipientId}`);
      console.log("Post Message 요청 성공:", result);
    } catch (error) {
      console.error("Post Message 요청 실패:", error);
    } finally {
    }
  };

  return { handleSubmit };
};
export default useMessageSubmit;
