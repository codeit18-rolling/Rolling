import { memo } from "react";

/**
 * 이미지로 표출한 인원수를 제외하고 나머지 작성자 인원 수를 표출한다.
 * @author <hwitae>
 * @param {number} count 총 작성자 수
 */
const RemainingWriters = ({ count = 0 }) => {
  return (
    <>
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
    </>
  );
};
export default memo(RemainingWriters);
