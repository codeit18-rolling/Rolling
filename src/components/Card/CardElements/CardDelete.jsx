import deleteIcon from "../../../assets/icon/ic_deleted.svg";
import { cn } from "../../../utils";

// Delete Button
const CardDelete = () => {
  return (
    <button
      className={cn(
        "w-[40px] h-[40px] rounded-[6px] p-2 bg-white border-gray-300 border cursor-pointer",
        "hover:border-gray-500 hover:bg-gray-50 transition-all duration-150 ease-in-out"
      )}
      aria-label="삭제 버튼"
    >
      <img src={deleteIcon} alt="삭제 아이콘" />
    </button>
  );
};

export default CardDelete;
