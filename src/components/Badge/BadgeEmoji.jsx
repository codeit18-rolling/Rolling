import { memo } from "react";
import { cn } from "../../utils";

/**
 *
 * @param {Object[]} reactions emoji와 count가 들어있는 배열
 */
const EmojiBadge = ({ reactions }) => {
  const { emoji, count } = reactions;

  return (
    <>
      <div
        className={cn(
          "h-[36px] bg-black/60 rounded-[32px]",
          "flex justify-center items-center gap-x-0.5",
          "p-3.5"
        )}
      >
        <div className={cn("text-base")}>{emoji}</div>
        <p className={cn("text-white text-base m-0")}>{count}</p>
      </div>
    </>
  );
};

export default memo(EmojiBadge);
