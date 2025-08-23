import { memo } from "react";
import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";

/**
 * 이모지 더보기 버튼
 * @author <hwitae>
 * @param {Function} onClick 더보기 버튼 클릭 후 실행할 함수
 * @returns
 */
const EmojiMoreLoadButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <div onClick={handleClick} className="flex justify-center pt-2">
      <Icon
        iconName="arrow_down"
        iconSize="ic-24"
        className={cn("bg-black cursor-pointer")}
      />
    </div>
  );
};
export default memo(EmojiMoreLoadButton);
