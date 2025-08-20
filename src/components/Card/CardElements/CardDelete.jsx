import deleteIcon from "../../../assets/icon/ic_deleted.svg";
import { cn } from "../../../utils";
import deleteMessage from "../../../service/ListDetails/deleteMessageData";
import { useQueryClient } from "@tanstack/react-query";

// Delete Button
const CardDelete = ({ cardId }) => {
  const queryClient = useQueryClient();

  const deleteMessageHandler = async (e) => {
    e.stopPropagation();
    await deleteMessage(cardId); // 삭제 API 완료 대기
    await queryClient.invalidateQueries({
      queryKey: ["getRecipientsDetailData"],
    });
  };

  return (
    <button
      className={cn(
        "w-[40px] h-[40px] rounded-[6px] p-2 bg-white border-gray-300 border",
        "hover:border-gray-500 hover:bg-gray-50 transition-all duration-150 ease-in-out"
      )}
      aria-label="삭제 버튼"
      onClick={deleteMessageHandler}
    >
      <img src={deleteIcon} alt="삭제 아이콘" />
    </button>
  );
};

export default CardDelete;
