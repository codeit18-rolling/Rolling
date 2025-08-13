import { memo } from "react";
import WritersImgIcon from "./WritersElement/WritersImgIcon";
import RemainingWriters from "./WritersElement/RemainingWriters";
import CountWriters from "./WritersElement/CountWriters";
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
    <>
      <div
        className={cn(
          "flex",
          "items-center gap-3",
          useCard && "flex-col items-start"
        )}
      >
        <div className="flex -space-x-3">
          {writerPreview.map((writer) => {
            return <WritersImgIcon key={writer.id} writerData={writer} />;
          })}
          <RemainingWriters count={count} />
        </div>
        <div>
          <CountWriters count={count} />
        </div>
      </div>
    </>
  );
};

export default memo(Writers);
