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
const Writers = ({ messages = {}, useCard = false }) => {
  const { count = 0, results = [] } = messages;

  const writerPreview = results.slice(0, 3);

  const handleError = (e) => {
    e.target.onError = null;
    e.target.src = defaultImg;
  };

  return (
    <div
      className={cn(
        "flex gap-3",
        useCard ? "flex-col items-start" : "items-center"
      )}
    >
      <div className="flex -space-x-3">
        {writerPreview.map((writer) => (
          <img
            key={writer.id}
            className={cn(
              "w-[28px] h-[28px] border-white rounded-full",
              useCard ? "border-[1.5px]" : "border-[1.4px]"
            )}
            src={writer.profileImageURL}
            alt="프로필 이미지"
            onError={handleError}
          />
        ))}
        {count > 3 && <RemainWriter count={count} useCard={useCard} />}
      </div>
      <p className="text-18 text-gray-900 leading-[27px]">
        <span className="font-bold">{count}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default memo(Writers);
