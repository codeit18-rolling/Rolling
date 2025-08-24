import { useEffect } from "react";
import { cn } from "../../utils";
import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";

const Toast = ({
  isOpen,
  onClose,
  icon = "completed",
  message = "URL이 복사되었습니다.",
  duration = 2000,
  iconClassName = "",
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const toastNode = (
    <div
      className={cn(
        "fixed bg-black-opacity-8 text-16 text-white left-1/2 -translate-x-1/2",
        "flex items-center justify-between z-50",
        "px-[30px] py-[19px] rounded-lg",
        "w-[70vw] bottom-[88px]",
        "tablet:w-[524px] tablet:bottom-[50px]",
        "desktop:w-[524px] desktop:bottom-[50px]"
      )}
    >
      <div className="flex items-center gap-[12px]">
        <Icon
          iconName={icon}
          className={cn("bg-green-500", iconClassName)}
          ariaLabel="상태 아이콘"
        />
        <span className="text-16 text-white">{message}</span>
      </div>
      <button onClick={onClose} className="flex items-center">
        <Icon
          iconName="close"
          className="bg-gray-300"
          ariaLabel="닫기 아이콘"
        />
      </button>
    </div>
  );

  return createPortal(toastNode, document.body);
};

export default Toast;
