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
  const handleError = (e) => {
    e.target.onError = null;
    e.target.src = defaultImg;
  };

  return (
    <div
      className={cn(
        "flex justify-start",
        useCard ? "flex-col items-start" : "items-center"
      )}
    >
      {item?.messageCount >= 1 && (
        <div className="flex -space-x-3">
          {item?.recentMessages?.map((writer) => (
            <img
              key={writer?.id}
              alt="프로필 이미지"
              src={writer?.profileImageURL}
              className="w-[28px] h-[28px] border-white rounded-full border-[1.5px]"
              onError={handleError}
            />
          ))}
          {item?.messageCount > 3 && (
            <RemainWriter count={item?.messageCount} useCard={useCard} />
          )}
        </div>
      )}
      <p
        className={cn(
          "leading-[27px]",
          useCard ? "text-16 gap-3" : "text-18 text-gray-900 pl-[11px]",
          isBackgroundImage ? "text-gray-200" : "text-gray-700"
        )}
      >
        {item?.messageCount > 0 ? (
          <>
            <span
              className={cn(
                "font-bold",
                isBackgroundImage ? "text-gray-200" : "text-gray-700"
              )}
            >
              {item?.messageCount}
            </span>
            명이 작성했어요!
          </>
        ) : (
          <>아직 작성한 사람이 없어요!</>
        )}
      </p>
    </div>
  );
};

export default memo(Writers);
