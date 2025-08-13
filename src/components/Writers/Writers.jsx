import { memo } from "react";
import { cn } from "../../utils";

/**
 * 롤링페이퍼 작성자 정보를 간략히 표출한다.
 * @author <hwitae>
 * @param {Object{}} messages 롤링페이퍼 작성자 정보 데이터
 * @param {boolean} useCard 롤링페이퍼 카드에서 사용할 경우 해당 옵션을 true로 설정합니다.
 */
const Writers = ({ messages = {}, useCard = false }) => {
  const { count = 0, results = [] } = messages;

  const writerPreview = results.slice(0, 3);

  return (
    <div
      className={cn(
        "flex",
        "items-center gap-3",
        useCard && "flex-col items-start"
      )}
    >
      <div className="flex -space-x-3">
        {writerPreview.map((writer) => (
          <img
            key={writer.id}
            className="w-[28px] h-[28px] border-solid border-[1.4px] border-white rounded-[140px]"
            src={writer.profileImageURL}
            alt="프로필 이미지"
          />
        ))}
        {count > 3 && (
          <div
            className={`flex justify-center items-center w-[28px] h-[28px] bg-white 
                        border-solid border border-gray-230 rounded-[140px]
                        text-center`}
          >
            <p className="font-medium text-gray-608 text-12 leading-[18px] tracking-normal">
              +{count - 3}
            </p>
          </div>
        )}
      </div>
      <p className="text-18 text-gray-900 leading-[27px]">
        <span className="font-bold">{count}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default memo(Writers);
