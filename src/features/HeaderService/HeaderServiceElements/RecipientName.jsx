import { memo } from "react";
import { cn } from "../../../utils";

/**
 * 롤링 페이퍼의 작성자 이름을 표출하는 컴포넌트
 * @author <hwitae>
 * @param {string} name
 * @returns
 */
const RecipientName = ({ name }) => {
  return (
    <p
      className={cn(
        "h-[52px] flex items-center border-b border-gray-200",
        "text-18 px-5 text-gray-800 font-bold leading-[42px]",
        "tablet:w-[227px] tablet:border-none tablet:h-[42px] tablet:text-28"
      )}
    >
      To.{name}
    </p>
  );
};
export default memo(RecipientName);
