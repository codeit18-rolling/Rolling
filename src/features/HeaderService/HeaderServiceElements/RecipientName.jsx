import { memo } from "react";
import { cn } from "../../../utils";

/**
 * 롤링페이퍼 받는 사람의 이름을 표출
 * @param {Object{}} recipients
 */
const RecipientName = ({ recipients }) => {
  return (
    <div
      className={cn(
        "h-[52px] min-w-0 flex items-center w-full border-b border-gray-200",
        "tablet:border-none",
        "desktop:w-[450px]"
      )}
    >
      <p
        className={cn(
          "text-18 px-5 text-gray-800 font-bold leading-[42px] truncate",
          "tablet:border-none tablet:h-[42px] tablet:text-28"
        )}
      >
        To. {recipients?.name || "Codeit"}
      </p>
    </div>
  );
};
export default memo(RecipientName);
