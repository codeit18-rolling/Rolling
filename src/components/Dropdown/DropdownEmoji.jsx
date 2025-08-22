import { memo, useEffect, useState } from "react";
import { cn } from "../../utils";
import DropdownExpandEmoji from "./DropdownElements/DropdownExpandEmoji";
import { useToggle } from "../../hooks/useToggle";
import ReactionBar from "./DropdownElements/ReactionBar";
import { useGetAllEmojiData } from "../../features/HeaderService/hooks/useGetAllEmojiData";
import useMediaQuery from "../../features/HeaderService/hooks/useMediaQuery";

const BIG_DISPLAY_LIMIT = 8;
const SMALL_DISPLAY_LIMIT = 6;

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactions API로 받아온 reactions 데이터
 * @param {string} 롤링페이퍼 아이디
 */
const DropdownEmoji = ({ reactions = [], postId = "" }) => {
  const { isOpen, onClickToggle } = useToggle();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [emojiParams, setEmojiParams] = useState({
    id: postId,
    limit: 8,
  });
  const {
    data: allEmojiData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetAllEmojiData(emojiParams);

  useEffect(() => {
    setEmojiParams((prevParams) => ({
      ...prevParams,
      limit: isTablet ? BIG_DISPLAY_LIMIT : SMALL_DISPLAY_LIMIT,
    }));
  }, [isTablet]);

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <ReactionBar
          reactions={reactions}
          allReactions={allEmojiData?.pages[0]}
          isOpen={isOpen}
          onClickOpen={onClickToggle}
        />
        {isOpen && (
          <DropdownExpandEmoji
            allEmojiData={allEmojiData}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
