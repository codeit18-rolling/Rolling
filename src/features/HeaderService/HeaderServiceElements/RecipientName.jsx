import { memo } from "react";
import { cn } from "../../../utils";

/**
 * 롤링페이퍼 받는 사람의 이름을 표출
 * @param {Object{}} recipients
 */
const RecipientName = ({ recipients }) => {
  return (
    <p
      className={cn(
        "h-[52px] flex items-center border-b border-gray-200",
        "text-18 px-5 text-gray-800 font-bold leading-[42px]",
        "tablet:border-none tablet:h-[42px] tablet:text-28"
      )}
    >
      To. {recipients?.name || "Codeit"}
    </p>
  );
};
export default memo(RecipientName);
