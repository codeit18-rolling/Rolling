import deleteIcon from "../../../assets/icon/ic_deleted.svg";
import { cn } from "../../../utils";
import deleteMessage from "../../../service/ListDetails/deleteMessageData";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "../../Icon/Icon";

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
        "inline-flex items-center justify-center shrink-0 self-center box-border w-10 h-10 rounded-[6px] p-2 bg-white border-gray-300 border",
        "hover:border-gray-500 hover:bg-gray-50 transition-all duration-150 ease-in-out"
      )}
      aria-label="삭제 버튼"
      onClick={deleteMessageHandler}
    >
      <Icon iconName="deleted" iconSize="ic-24" className="bg-black" />
    </button>
  );
};

export default CardDelete;
