import { memo } from "react";
import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";

const EmojiMoreLoadButton = () => {
  return (
    <div className="flex justify-center">
      <Icon
        iconName="arrow_down"
        iconSize="ic-24"
        className={cn("bg-black cursor-pointer")}
      />
    </div>
  );
};
export default memo(EmojiMoreLoadButton);
