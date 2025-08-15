import { memo } from "react";
import { cn } from "../../utils";
import RemainWriter from "./RemainWriter";
import defaultImg from "../../assets/empty/img_null.png";

/**
 * 롤링페이퍼 작성자 정보를 간략히 표출한다.
 * @author <hwitae>
 * @param {Object{}} messages 롤링페이퍼 작성자 정보 데이터
 * @param {boolean} useCard 롤링페이퍼 카드에서 사용할 경우 해당 옵션을 true로 설정합니다.
 */
const Writers = ({ item = {}, useCard = false, isBackgroundImage = false }) => {
  const { messageCount = 0, recentMessages = [] } = item;

  const handleError = (e) => {
    e.target.onError = null;
    e.target.src = defaultImg;
  };

  return (
    <div
      className={cn(
        "flex w-[228px] justify-start",
        useCard ? "flex-col items-start gap-3" : "items-center"
      )}
    >
      {messageCount > 1 && (
        <div className="flex -space-x-3">
          {recentMessages.map((writer) => (
            <img
              key={writer.id}
              className="w-[28px] h-[28px] border-white rounded-full border-[1.5px]"
              src={writer.profileImageURL}
              alt="프로필 이미지"
              onError={handleError}
            />
          ))}
          {messageCount > 3 && (
            <RemainWriter count={messageCount} useCard={useCard} />
          )}
        </div>
      )}
      <p
        className={cn(
          "leading-[27px]",
          useCard ? "text-16" : "text-18 text-gray-900 pl-[11px]",
          isBackgroundImage ? "text-gray-200" : "text-gray-700"
        )}
      >
        <span className="font-bold">{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default memo(Writers);
