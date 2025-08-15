import { memo } from "react";
import { cn } from "../../../utils";
import Icon from "../../Icon/Icon";

const DropdownButton = ({ onClickOpen, isOpen }) => {
  return (
    <div
      className={
        "flex items-center tablet:justify-start mobile:justify-center w-[36px]"
      }
      onClick={onClickOpen}
    >
      <Icon
        iconName="arrow_down"
        iconSize="ic-24"
        className={cn("bg-black cursor-pointer", isOpen && "rotate-180")}
      />
    </div>
  );
};

export default memo(DropdownButton);
