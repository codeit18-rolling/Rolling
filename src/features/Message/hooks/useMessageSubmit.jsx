import { useNavigate } from "react-router";
import createMessage from "../../../service/Message/createMessage";

const useMessageSubmit = (postMessageData) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await createMessage(postMessageData);
      navigate(`/post/${result.recipientId}`);
      console.log("Message 전송 성공");
    } catch (error) {
      console.error("Message 전송 실패:", error);
      alert("Message 전송에 실패했습니다");
    } finally {
    }
  };

  return { handleSubmit };
};
export default useMessageSubmit;
