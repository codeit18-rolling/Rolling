import { memo } from "react";
import { cn } from "../../utils";
import DropdownExpandEmoji from "./DropdownElements/DropdownExpandEmoji";
import { useToggle } from "../../hooks/useToggle";
import ReactionBar from "./DropdownElements/ReactionBar";

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactionData API로 받아온 reactions 데이터
 * @param {boolean} dropdown 드롭다운 아이콘 표기 여부
 */
const DropdownEmoji = ({ reactions = [], allReactions = {} }) => {
  const { isOpen, onClickToggle } = useToggle();

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <ReactionBar
          reactions={reactions}
          allReactions={allReactions}
          isOpen={isOpen}
          onClickOpen={onClickToggle}
        />
        {isOpen && <DropdownExpandEmoji allEmojis={allReactions?.results} />}
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
