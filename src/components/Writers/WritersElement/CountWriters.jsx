import { memo } from "react";

/**
 * 총 작성자 수를 표출한다.
 * @author <hwitae>
 * @param {number} count 총 작성자 수
 */
const CountWriters = ({ count = 0 }) => {
  return (
    <>
      <p className="text-18 leading-[27px]">
        <span className="font-bold">{count}</span>명이 작성했어요!
      </p>
    </>
  );
};
export default memo(CountWriters);
