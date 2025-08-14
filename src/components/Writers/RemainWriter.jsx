import { memo } from "react";
import { cn } from "../../utils";

const RemainWriter = ({ count, useCard }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center px-[6px] h-[28px] bg-white",
        "border border-gray-230 rounded-[140px]",
        useCard && "border-white"
      )}
    >
      <p className="font-medium text-gray-608 text-12 leading-[18px] tracking-normal">
        +{count - 3}
      </p>
    </div>
  );
};

export default memo(RemainWriter);
