import deleteIcon from "../../../assets/icon/ic_deleted.svg";
import { cn } from "../../../utils";
import deleteMessage from "../../../service/ListDetails/deleteMessageData";
import { useQueryClient } from "@tanstack/react-query";

// Delete Button
const CardDelete = ({ cardId, id }) => {
  const queryClient = useQueryClient();

  const deleteMessageHandler = async (e) => {
    e.stopPropagation();
    try {
      await deleteMessage(cardId); // 삭제 API 완료 대기
      if (!id) {
        // id 누락 시 전체 키 부분매칭으로 invalidate
        queryClient.invalidateQueries({
          queryKey: ["getRecipientsDetailData"],
          exact: false,
        });
        return;
      }
      // 정확히 해당 상세 쿼리 무효화
      await queryClient.invalidateQueries({
        queryKey: ["getRecipientsDetailData"],
        // exact: false,
      });
    } catch (error) {
      console.error("삭제 실패:", error);
    }
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
